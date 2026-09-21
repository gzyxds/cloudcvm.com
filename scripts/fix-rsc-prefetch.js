#!/usr/bin/env node

/**
 * 修复 Next.js 16 静态导出的 RSC 预取路径错位（上游 bug：vercel/next.js#85374）
 *
 * 现象：构建把负载写成 out/<route>/__next.<seg>/__PAGE__.txt，
 *      客户端预取却请求 <route>/__next.<seg>.__PAGE__.txt → 404，预取失效
 *      （导航本身不受影响：点击时会回退到 <route>/index.txt）
 * 处理：按客户端期望的文件名复制一份负载。上游修复后可删除本脚本与 postbuild 钩子。
 *
 * 用法：
 *   node scripts/fix-rsc-prefetch.js            # 由 package.json 的 postbuild 自动执行
 *   node scripts/fix-rsc-prefetch.js --dry-run  # 只报告会复制什么，不写文件
 */

const fs = require('fs')
const path = require('path')

const DRY_RUN = process.argv.includes('--dry-run')
const outDir = path.join(__dirname, '..', 'out')

function collect(dir, jobs) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === '_next') continue
    const full = path.join(dir, entry.name)
    if (entry.name.startsWith('__next.')) {
      const src = path.join(full, '__PAGE__.txt')
      if (fs.existsSync(src)) {
        jobs.push({ src, dest: path.join(dir, `${entry.name}.__PAGE__.txt`) })
        continue
      }
    }
    collect(full, jobs)
  }
}

if (!fs.existsSync(outDir)) {
  console.error('[error] 未找到 out/，请先执行 npm run build')
  process.exit(1)
}

const jobs = []
collect(outDir, jobs)

if (jobs.length === 0) {
  console.log('[skip] out/ 下没有 __next.<seg>/__PAGE__.txt（上游可能已修复，可考虑移除本脚本）')
  process.exit(0)
}

for (const { src, dest } of jobs) {
  if (DRY_RUN) {
    console.log(`[dry-run] ${path.relative(outDir, src)} -> ${path.relative(outDir, dest)}`)
    continue
  }
  fs.copyFileSync(src, dest)
}

console.log(
  DRY_RUN
    ? `[dry-run] 共 ${jobs.length} 个待复制文件`
    : `[ok] 已复制 ${jobs.length} 个 RSC 预取负载（Next.js 16 静态导出路径错位的临时修复）`
)
