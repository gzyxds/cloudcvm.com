/**
 * 清理原始图片文件
 * 删除「已有 WebP 替代、且代码里已不再引用原格式」的 PNG/JPG
 *
 * 使用方式:
 *   node scripts/cleanup-originals.js            直接删除
 *   node scripts/cleanup-originals.js --dry-run  只报告会删什么，不动文件
 *
 * ⚠️ 本脚本**不是「有同名 WebP 就删」**。
 *    历史事故：commit 167f381 以「移除未使用的图片资源」为名删了
 *    product/Carousel5.png、screenshots/contacts.png，但代码里的引用没跟着改，
 *    于是 ecommerce 页面留下 4 处 404。所以这里必须先反查引用再删。
 */

const fs = require('fs')
const path = require('path')

const SRC_DIR = 'src'

// 必须与 scripts/optimize-images.js 的 CONFIG.targetDirs 保持一致。
// 历史教训：这里曾列 `aisolution`（目录不存在）、`carousel`/`background`
// （早已全量 WebP 化），却漏了 `solutions`/`reference`，导致刚转好的原图清不掉。
const TARGET_DIRS = [
  'public/images/product',
  'public/images/solutions',
  'public/images/reference',
]

// 与 update-image-refs.js 的 SCAN_EXTS 保持一致
const SCAN_EXTS = ['.tsx', '.ts', '.js', '.jsx', '.css']

// 引用扫描用：匹配 'xxx.png' / "xxx.png" / (xxx.png) 里的 public 相对图片路径
const REF_REGEX = /[\x27"(](\/?images\/[^\x27"\s)]+\.(?:png|jpe?g|webp|svg|gif))/g

const DRY_RUN = process.argv.includes('--dry-run')

const stats = { deleted: 0, blocked: 0, totalSize: 0, errors: 0 }

/** 收集 src/ 下所有图片引用，统一成 `/images/...` 形式 */
function collectSrcRefs() {
  const refs = new Set()

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (SCAN_EXTS.includes(path.extname(fullPath))) {
        const text = fs.readFileSync(fullPath, 'utf8')
        for (const m of text.matchAll(REF_REGEX)) {
          refs.add('/' + m[1].replace(/^\/+/, ''))
        }
      }
    }
  }

  walk(SRC_DIR)
  return refs
}

/**
 * 把 public 下的绝对路径转成代码里会写的 URL（`/images/xxx.png`）
 */
function toPublicUrl(filePath) {
  return '/' + path.relative('public', filePath).split(path.sep).join('/')
}

function cleanupDir(dirPath, srcRefs) {
  if (!fs.existsSync(dirPath)) return

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      cleanupDir(fullPath, srcRefs)
      continue
    }

    const ext = path.extname(entry.name).toLowerCase()
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

    // 对应的 WebP 必须存在，否则这个原图还在被使用
    const basename = path.basename(entry.name, ext)
    const webpPath = path.join(dirPath, `${basename}.webp`)
    if (!fs.existsSync(webpPath)) continue

    // ⚠️ 关键守卫：原格式只要还被引用，就不能删。
    //    「有 WebP」不等于「已切换到 WebP」——update-image-refs.js 可能没跑，
    //    或者这次改写被保护名单拦下了。
    const url = toPublicUrl(fullPath)
    if (srcRefs.has(url)) {
      stats.blocked++
      console.log(`   ⛔ 仍被引用，拒绝删除: ${url}`)
      continue
    }

    try {
      const size = fs.statSync(fullPath).size
      if (!DRY_RUN) fs.unlinkSync(fullPath)
      stats.deleted++
      stats.totalSize += size
      console.log(`   🗑️  ${DRY_RUN ? '将删除' : '已删除'}: ${url}`)
    } catch (err) {
      stats.errors++
      console.error(`   ❌ 删除失败: ${fullPath}`)
    }
  }
}

function main() {
  console.log(`🧹 清理原始图片文件...${DRY_RUN ? '（dry-run 模式，不删文件）' : ''}\n`)

  const srcRefs = collectSrcRefs()
  console.log(`🔍 已扫描 src/ 下 ${srcRefs.size} 个图片引用作为安全检查依据\n`)

  for (const dir of TARGET_DIRS) {
    console.log(`📁 ${dir}`)
    cleanupDir(dir, srcRefs)
  }

  const savedMB = (stats.totalSize / (1024 * 1024)).toFixed(2)
  const savedKB = (stats.totalSize / 1024).toFixed(0)
  console.log(
    `\n${DRY_RUN ? '📋 预计' : '✅ 已'}删除 ${stats.deleted} 个原始文件，释放 ${savedMB} MB (${savedKB} KB)`
  )
  if (stats.blocked > 0) {
    console.log(`⛔ ${stats.blocked} 个文件仍被代码引用，已跳过（先跑 update-image-refs.js）`)
  }
  if (stats.errors > 0) {
    console.log(`⚠️  ${stats.errors} 个文件删除失败`)
    process.exitCode = 1
  }
}

main()
