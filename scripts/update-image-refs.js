/**
 * 图片引用更新脚本
 * 将代码中 .png/.jpg/.jpeg 引用对应替换为 .webp（仅当 WebP 文件已存在时）
 *
 * 使用方式: node scripts/update-image-refs.js
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const SRC_DIR = 'src'
const PUBLIC_DIR = 'public'

// 统计
const stats = {
  scanned: 0,
  replaced: 0,
  skipped: 0,
  files: [],
}

/**
 * 检查 WebP 版本是否已存在于 public/ 目录
 */
function webpExistsInPublic(imagePath) {
  // 从路径中提取相对路径部分
  // 例如 /images/product/test.png → public/images/product/test.webp
  const withoutExt = imagePath.replace(/\.(png|jpe?g)$/i, '')
  const webpPath = path.join(PUBLIC_DIR, withoutExt + '.webp')
  return fs.existsSync(webpPath)
}

/**
 * 检查 src/images/ 下的 WebP 是否存在
 */
function webpExistsInSrc(importPath) {
  // @/images/xxx.png → src/images/xxx.webp
  const cleanPath = importPath.replace('@/', '')
  const withoutExt = cleanPath.replace(/\.(png|jpe?g)$/i, '')
  const webpPath = path.join(SRC_DIR, withoutExt + '.webp')
  return fs.existsSync(webpPath)
}

/**
 * 处理单个文件
 */
function processFile(filePath) {
  const ext = path.extname(filePath)
  if (!['.tsx', '.ts', '.js', '.jsx'].includes(ext)) return

  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false
  let fileReplacements = 0

  // 匹配模式 1: 字符串路径 "/images/...png" 或 '/images/...jpg'
  const strRegex = /(['"`])\/(images\/[^'"`]+?)\.(png|jpe?g)(['"`])/gi
  content = content.replace(strRegex, (match, quote1, imgPath, oldExt, quote2) => {
    const webpPath = path.join(PUBLIC_DIR, imgPath + '.webp')
    if (fs.existsSync(webpPath)) {
      fileReplacements++
      return `${quote1}/${imgPath}.webp${quote2}`
    }
    return match
  })

  // 匹配模式 2: import 语句 @/images/xxx.png
  const importRegex = /(@\/images\/[^'"`\s]+?)\.(png|jpe?g)(['"`])/gi
  content = content.replace(importRegex, (match, importPath, oldExt, quote) => {
    const cleanPath = importPath.replace('@/', '')
    const webpPath = path.join(SRC_DIR, cleanPath + '.webp')
    if (fs.existsSync(webpPath)) {
      fileReplacements++
      return `${importPath}.webp${quote}`
    }
    return match
  })

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8')
    modified = true
    stats.replaced += fileReplacements
  }

  return { modified, count: fileReplacements }
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
  console.log('🔍 扫描并更新图片引用...\n')

  // 处理 src/ 目录
  walkDir(SRC_DIR)

  console.log(`📊 统计:`)
  console.log(`  扫描文件: ${stats.scanned}`)
  console.log(`  替换引用: ${stats.replaced}`)

  if (stats.replaced > 0) {
    console.log(`\n✅ 已将 ${stats.replaced} 处图片引用从 PNG/JPG 更新为 WebP`)
    console.log('💡 原 PNG/JPG 文件仍保留在 public/ 中，确认无误后可手动删除')
  }
}

main()
