/**
 * 清理原始图片文件
 * 删除已有 WebP 替代的 PNG/JPG 文件
 *
 * 使用方式: node scripts/cleanup-originals.js
 */

const fs = require('fs')
const path = require('path')

const TARGET_DIRS = [
  'public/images/product',
  'public/images/aisolution',
  'public/images/carousel',
  'public/images/background',
  'public/images/screenshots',
]

const stats = { deleted: 0, totalSize: 0, errors: 0 }

function cleanupDir(dirPath) {
  if (!fs.existsSync(dirPath)) return

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      cleanupDir(fullPath)
      continue
    }

    const ext = path.extname(entry.name).toLowerCase()
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

    // 检查对应的 WebP 是否存在
    const basename = path.basename(entry.name, ext)
    const webpPath = path.join(dirPath, `${basename}.webp`)

    if (fs.existsSync(webpPath)) {
      try {
        const size = fs.statSync(fullPath).size
        fs.unlinkSync(fullPath)
        stats.deleted++
        stats.totalSize += size
      } catch (err) {
        stats.errors++
        console.error(`   ❌ 删除失败: ${fullPath}`)
      }
    }
  }
}

function main() {
  console.log('🧹 清理原始图片文件...\n')

  for (const dir of TARGET_DIRS) {
    console.log(`📁 ${dir}`)
    cleanupDir(dir)
  }

  const savedMB = (stats.totalSize / (1024 * 1024)).toFixed(1)
  console.log(`\n✅ 已删除 ${stats.deleted} 个原始文件，释放 ${savedMB} MB`)
  if (stats.errors > 0) {
    console.log(`⚠️  ${stats.errors} 个文件删除失败`)
  }
}

main()
