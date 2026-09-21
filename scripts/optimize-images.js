/**
 * 图片批量优化脚本
 * 将 public/images 下的 PNG/JPG 图片转为 WebP 格式
 * 原文件保留不删除，方便对比和回滚
 *
 * 使用方式: node scripts/optimize-images.js
 *
 * ⚠️ 本脚本**不是无脑全量转换**，有两道否决闸门：
 *    1. 转完比原图大 → 丢弃（扁平/图形类 PNG 转有损 WebP 常会膨胀）
 *    2. 收益低于 CONFIG.minSavingPercent → 丢弃（不值得为此换格式）
 *    换格式本身有成本（浏览器兼容、CDN 缓存、引用改写出错风险），
 *    只省几个百分点就等于白担风险。
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// 转换配置
//
// ⚠️ 维护须知：targetDirs 只列「实际还有 PNG/JPG、且转了更好」的目录。
//    历史上这里曾列 `aisolution`（目录已不存在）、`carousel`/`background`
//    （早已全量 WebP 化），照着跑等于空转，跑完还要疑惑「怎么没省空间」。
//    改动前先执行：Get-ChildItem public -Recurse -File -Include *.png,*.jpg
const CONFIG = {
  // 需要处理的目录
  targetDirs: [
    'public/images/product', // 产品/业务配图
    'public/images/solutions', // 行业解决方案配图
    'public/images/reference', // 被 CSS Module 以 url() 引用
  ],
  // WebP 质量 (0-100)
  quality: 85,
  // 最小收益门槛（%）。低于此值视为「不值得换格式」，丢弃转换结果。
  // 实测本仓 solutions/retail.png 只省 0.0%、video.png 4.3%、gov.png 8.5%，
  // 为这点收益去改 3 处引用、换一种文件格式，性价比是负的。
  minSavingPercent: 15,
  // 最大宽度限制，超过的自动缩放。
  // ⚠️ **默认留空 = 不缩放**。缩放会改变像素尺寸、进而改变页面呈现，
  //    属「视觉变更」，必须单独做视觉回归后才逐个开启，不要顺手打开省体积。
  maxWidth: {},
  // 支持的输入格式
  supportedFormats: ['.png', '.jpg', '.jpeg'],
  // 明确排除：这些不是「忘了转」，而是**转了会坏**
  exclude: [
    'public/favicon.png', // public/manifest.json + scripts/generate-ico.js 依赖它
    'public/images/logos', // seo.config.ts 用作 og:image，社交/IM 爬虫对 WebP 支持不一致
    'public/images/contact', // 二维码图，有损压缩会破坏可扫性，必须保持 PNG
    'public/images/Logoclouds', // 客户 logo（含文字），有损 WebP 边缘易出噪点且收益仅 180 KB
  ],
}

/** 统一输出相对路径（正斜杠），避免 Windows 反斜杠影响可读性 */
function toRel(p) {
  return path.relative('.', p).split(path.sep).join('/')
}

/** 是否命中 CONFIG.exclude */
function isExcluded(filePath) {
  const rel = toRel(filePath)
  return CONFIG.exclude.some(
    (rule) => rel === rule || rel.startsWith(rule + '/')
  )
}

// 统计计数器
const stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  rejected: 0, // 未通过闸门（变大 / 收益太小）而已丢弃的
  savedBytes: 0,
  details: [],
  rejectedDetails: [],
}

/**
 * 获取目录对应的最大宽度（按路径段精确匹配，避免子串误命中）
 */
function getMaxWidth(dirPath) {
  const segments = dirPath.split(/[\\/]/)
  for (const [key, width] of Object.entries(CONFIG.maxWidth)) {
    if (segments.includes(key)) {
      return width
    }
  }
  return null
}

/**
 * 转换单个图片为 WebP
 */
async function convertToWebp(inputPath) {
  const ext = path.extname(inputPath).toLowerCase()
  if (!CONFIG.supportedFormats.includes(ext)) {
    stats.skipped++
    return
  }

  const dir = path.dirname(inputPath)
  const basename = path.basename(inputPath, ext)
  const outputPath = path.join(dir, `${basename}.webp`)
  const srcSize = fs.statSync(inputPath).size
  const savingPercent = (dstSize) => ((srcSize - dstSize) / srcSize) * 100

  // 已有 webp：达标且比源图新 → 无需重做；否则清掉重来
  if (fs.existsSync(outputPath)) {
    const dstSize = fs.statSync(outputPath).size
    const isNewer = fs.statSync(outputPath).mtime > fs.statSync(inputPath).mtime
    if (savingPercent(dstSize) >= CONFIG.minSavingPercent && isNewer) {
      stats.skipped++
      return
    }
    fs.unlinkSync(outputPath)
  }

  try {
    const maxWidth = getMaxWidth(dir)
    let pipeline = sharp(inputPath)

    // 获取原图尺寸，决定是否需要缩放
    const metadata = await pipeline.metadata()
    if (maxWidth && metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
    }

    await pipeline
      .webp({ quality: CONFIG.quality })
      .toFile(outputPath)

    const dstSize = fs.statSync(outputPath).size
    const saving = savingPercent(dstSize)

    // 闸门 1：WebP **不一定更小**，不能无脑转换。
    //   扁平/图形类 PNG（截图、纯色块、UI 稿）用 PNG 的调色板无损压缩本就很紧，
    //   转成有损 WebP 反而会膨胀。实测本仓：
    //     solutions/finance.png             129.8 KB → 189.7 KB  (+46%)
    //     reference/tpm-...-bottom-new.png  362.3 KB → 523.9 KB  (+45%)
    //   变大了就必须丢弃，否则「优化」会让页面变慢。
    // 闸门 2：收益低于 CONFIG.minSavingPercent 也不值得——换格式本身有成本
    //   （兼容性、CDN 缓存、引用改写风险），只省几个百分点等于白担风险。
    if (saving < CONFIG.minSavingPercent) {
      fs.unlinkSync(outputPath)
      stats.rejected++
      stats.rejectedDetails.push({
        file: toRel(inputPath),
        before: `${(srcSize / 1024).toFixed(1)} KB`,
        after: `${(dstSize / 1024).toFixed(1)} KB`,
        delta:
          saving < 0
            ? `+${(-saving).toFixed(1)}%（反而更大）`
            : `${saving.toFixed(1)}%（收益太小）`,
      })
      return
    }

    stats.converted++
    stats.savedBytes += srcSize - dstSize
    stats.details.push({
      file: toRel(inputPath),
      before: `${(srcSize / 1024).toFixed(1)} KB`,
      after: `${(dstSize / 1024).toFixed(1)} KB`,
      reduction: `${saving.toFixed(1)}%`,
    })
  } catch (err) {
    stats.errors++
    console.error(`   ❌ 转换失败: ${inputPath}`, err.message)
  }
}

/**
 * 递归遍历目录
 */
async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`   ⚠️  目录不存在（配置是不是过期了？）: ${dirPath}`)
    return
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (isExcluded(fullPath)) {
      console.log(`   ⏭️  命中排除规则，跳过: ${toRel(fullPath)}`)
      continue
    }

    if (entry.isDirectory()) {
      await processDirectory(fullPath)
    } else if (entry.isFile()) {
      // 只统计真正会被处理的格式，否则「总文件数」会把 .webp/.svg 也算进来
      if (!CONFIG.supportedFormats.includes(path.extname(fullPath).toLowerCase())) {
        continue
      }
      stats.total++
      await convertToWebp(fullPath)
    }
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始图片批量优化...\n')

  for (const dir of CONFIG.targetDirs) {
    console.log(`📁 处理目录: ${dir}`)
    await processDirectory(dir)
    console.log('')
  }

  // 输出统计
  console.log('═══════════════════════════════════════')
  console.log('           转换结果统计')
  console.log('═══════════════════════════════════════')
  console.log(`  总文件数:   ${stats.total}`)
  console.log(`  已转换:     ${stats.converted}`)
  console.log(`  已跳过:     ${stats.skipped}`)
  console.log(`  已丢弃:     ${stats.rejected}  （未过闸门，保持原格式）`)
  console.log(`  失败:       ${stats.errors}`)

  if (stats.savedBytes > 0) {
    const savedMB = (stats.savedBytes / (1024 * 1024)).toFixed(1)
    const savedKB = (stats.savedBytes / 1024).toFixed(0)
    console.log(`  节省空间:   ${savedMB} MB (${savedKB} KB)`)
  }

  console.log('\n📋 转换详情 (体积缩减 Top 20):')
  console.log('─────────────────────────────────────')
  const sorted = stats.details
    .sort((a, b) => parseFloat(b.reduction) - parseFloat(a.reduction))
    .slice(0, 20)
  for (const item of sorted) {
    console.log(`  ${item.file}`)
    console.log(`    ${item.before} → ${item.after}  (-${item.reduction})`)
  }

  if (stats.rejectedDetails.length > 0) {
    console.log(
      `\n🚫 以下图片未过闸门（变大 / 收益 < ${CONFIG.minSavingPercent}%），已丢弃、保持原格式：`
    )
    console.log('─────────────────────────────────────')
    for (const item of stats.rejectedDetails) {
      console.log(`  ${item.file}`)
      console.log(`    ${item.before} → ${item.after}  ${item.delta}`)
    }
  }

  console.log('\n✅ 图片优化完成！')
  console.log('💡 下一步:')
  console.log('   1. node scripts/update-image-refs.js --dry-run   先看会改哪些引用')
  console.log('   2. node scripts/update-image-refs.js             确认后再真正改写')
  console.log('   3. node scripts/cleanup-originals.js             最后清原图')
  console.log('\n🚫 以下路径被排除（转了会坏，不是漏转）:')
  for (const rule of CONFIG.exclude) {
    console.log(`   ${rule}`)
  }

  if (stats.errors > 0) {
    process.exitCode = 1
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
