/**
 * 图片引用更新脚本
 * 将代码中 .png/.jpg/.jpeg 引用替换为 .webp（仅当对应 WebP 文件已存在时）
 *
 * 使用方式:
 *   node scripts/update-image-refs.js            直接改写
 *   node scripts/update-image-refs.js --dry-run  只报告会改什么，不写文件
 */

const fs = require('fs')
const path = require('path')

const SRC_DIR = 'src'
const PUBLIC_DIR = 'public'

// 扫描的文件类型。
// ⚠️ `.css` 不能漏：components/css/ProductTraits.module.css 用
//    `background-image: url(/images/reference/*.png)` 引用了图片，
//    漏掉就会在原图被删后**静默 404**——构建不报错，只有页面白块。
const SCAN_EXTS = ['.tsx', '.ts', '.js', '.jsx', '.css']

// 与 scripts/optimize-images.js 的 CONFIG.exclude 保持一致。
// 即使存在同名 .webp，也**绝不**改写这些引用——它们转了会坏。
const NEVER_REWRITE = [
  '/favicon.png', // manifest.json / generate-ico.js 依赖
  '/images/logos/', // og:image，社交/IM 爬虫对 WebP 支持不一致
  '/images/contact/', // 二维码，必须保持 PNG
  '/images/Logoclouds/', // 客户 logo
]

const DRY_RUN = process.argv.includes('--dry-run')

// 统计
const stats = {
  scanned: 0,
  replaced: 0,
  guarded: 0,
  files: [],
}

/** 命中保护名单？（imagePath 形如 images/logos/logo.jpg） */
function isProtected(imagePath) {
  const p = '/' + imagePath.replace(/^\/+/, '')
  return NEVER_REWRITE.some((prefix) => p.startsWith(prefix))
}

/** public/ 下是否已有对应 WebP（imagePath 形如 images/product/test） */
function webpExistsInPublic(imagePath) {
  return fs.existsSync(path.join(PUBLIC_DIR, imagePath + '.webp'))
}

/** src/ 下是否已有对应 WebP（importPath 形如 images/xxx） */
function webpExistsInSrc(importPath) {
  return fs.existsSync(path.join(SRC_DIR, importPath + '.webp'))
}

/**
 * 处理单个文件
 */
function processFile(filePath) {
  const ext = path.extname(filePath)
  if (!SCAN_EXTS.includes(ext)) return

  const original = fs.readFileSync(filePath, 'utf8')
  let content = original
  let count = 0

  /**
   * 统一裁决一次替换：命中保护名单 → 计数后放弃；WebP 不存在 → 放弃。
   * 返回 null 表示「不改」，调用方用 `?? match` 保留原文。
   */
  const tryReplace = (imagePath, build) => {
    if (isProtected(imagePath)) {
      stats.guarded++
      return null
    }
    if (!webpExistsInPublic(imagePath)) return null
    count++
    return build()
  }

  // 模式 1: 带引号的字符串路径 —— "/images/xxx.png" / '/images/xxx.jpg'
  // 用反向引用 \1 要求首尾引号一致，顺带覆盖 TSX 里的 Tailwind 任意值写法
  // bg-[url('/images/xxx.png')]
  content = content.replace(
    /(['"`])\/(images\/[^'"`]+?)\.(png|jpe?g)\1/gi,
    (match, quote, imgPath) =>
      tryReplace(imgPath, () => `${quote}/${imgPath}.webp${quote}`) ?? match
  )

  // 模式 2: CSS 的 url() 不带引号 —— url(/images/xxx.png)
  // ProductTraits.module.css 用的正是这种写法，模式 1 匹配不到，必须单独处理
  content = content.replace(
    /url\(\s*(\/?images\/[^'")\s]+?)\.(png|jpe?g)\s*\)/gi,
    (match, imgPath) => tryReplace(imgPath, () => `url(${imgPath}.webp)`) ?? match
  )

  // 模式 3: import 语句 @/images/xxx.png
  content = content.replace(
    /(@\/images\/[^'"`\s]+?)\.(png|jpe?g)(['"`])/gi,
    (match, importPath, _oldExt, quote) => {
      const cleanPath = importPath.replace('@/', '')
      if (!webpExistsInSrc(cleanPath)) return match
      count++
      return `${importPath}.webp${quote}`
    }
  )

  if (count > 0) {
    if (!DRY_RUN) fs.writeFileSync(filePath, content, 'utf8')
    stats.replaced += count
    stats.files.push({ file: filePath, count })
  } else if (content !== original) {
    // 正常不该发生：说明某个分支改了内容却没计数，早点暴露
    console.warn(`   ⚠️  内容有变动但计数为 0，已跳过未写入: ${filePath}`)
  }
}

/**
 * 递归遍历目录
 */
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      // 跳过不需要的目录
      if (['node_modules', '.next', '.git', 'out'].includes(entry.name)) continue
      walkDir(fullPath)
    } else if (entry.isFile()) {
      stats.scanned++
      processFile(fullPath)
    }
  }
}

/**
 * 主函数
 */
function main() {
  console.log(`🔍 扫描并更新图片引用...${DRY_RUN ? '（dry-run 模式，不写文件）' : ''}\n`)

  // 处理 src/ 目录
  walkDir(SRC_DIR)

  console.log('📊 统计:')
  console.log(`  扫描文件:     ${stats.scanned}`)
  console.log(`  待改写引用:   ${stats.replaced}`)
  console.log(`  保护名单跳过: ${stats.guarded}`)

  if (stats.files.length > 0) {
    console.log('\n📋 涉及文件:')
    for (const item of stats.files) {
      console.log(`  ${item.file}  (${item.count} 处)`)
    }
  }

  if (stats.replaced > 0) {
    console.log(
      DRY_RUN
        ? `\n✅ 以上 ${stats.replaced} 处确认无误后，去掉 --dry-run 重跑即可真正改写`
        : `\n✅ 已将 ${stats.replaced} 处引用从 PNG/JPG 更新为 WebP`
    )
    console.log('💡 原 PNG/JPG 仍保留在 public/，确认后运行 node scripts/cleanup-originals.js')
  } else {
    console.log('\n💡 没有引用需要改写（可能 WebP 还没生成，先跑 optimize-images.js）')
  }
}

main()
