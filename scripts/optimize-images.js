/**
 * 图片批量优化脚本
 * 将 public/images 下的 PNG/JPG 图片转为 WebP 格式
 * 原文件保留不删除，方便对比和回滚
 *
 * 使用方式: node scripts/optimize-images.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// 转换配置
const CONFIG = {
  // 需要处理的目录
  targetDirs: [
    'public/images/product',
    'public/images/aisolution',
    'public/images/carousel',
    'public/images/background',
    'public/images/screenshots',
  ],
  // WebP 质量 (0-100)
  quality: 80,
  // 最大宽度限制，超过的自动缩放
  maxWidth: {
    product: 800,        // 产品缩略图
    aisolution: 1200,    // 解决方案截图
    carousel: 1920,      // 轮播横幅
    background: 1440,    // 背景图
    screenshots: 1200,   // 截图
  },
  // 支持的输入格式
  supportedFormats: ['.png', '.jpg', '.jpeg'],
}

// 统计计数器
const stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0,
  details: [],
}

/**
 * 获取目录对应的最大宽度
 */
function getMaxWidth(dirPath) {
  for (const [key, width] of Object.entries(CONFIG.maxWidth)) {
    if (dirPath.includes(key)) {
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

  // 跳过已存在的 webp（除非源文件更新）
  if (fs.existsSync(outputPath)) {
    const srcStat = fs.statSync(inputPath)
    const dstStat = fs.statSync(outputPath)
    if (dstStat.mtime > srcStat.mtime) {
      stats.skipped++
      return
    }
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

    const srcSize = fs.statSync(inputPath).size
    const dstSize = fs.statSync(outputPath).size
    const reduction = ((1 - dstSize / srcSize) * 100).toFixed(1)

    stats.converted++
    stats.savedBytes += srcSize - dstSize
    stats.details.push({
      file: path.relative('public', inputPath),
      before: `${(srcSize / 1024).toFixed(1)} KB`,
      after: `${(dstSize / 1024).toFixed(1)} KB`,
      reduction: `${reduction}%`,
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
    console.log(`   ⚠️  目录不存在: ${dirPath}`)
    return
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      await processDirectory(fullPath)
    } else if (entry.isFile()) {
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

  console.log('\n✅ 图片优化完成！')
  console.log('💡 提示: 原文件已保留。确认无误后可运行 node scripts/cleanup-originals.js 删除原文件。')
}

main().catch(console.error)
