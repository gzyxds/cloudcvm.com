// 设计令牌收敛脚本：把硬编码色值 / Tailwind 原始色板收敛为 tailwind.css 里的令牌。
//
// 用法：
//   node scripts/token-migrate.mjs <文件...>          # 就地改写
//   node scripts/token-migrate.mjs --dry <文件...>    # 只统计不写盘
//   node scripts/token-migrate.mjs                    # 不带参数则处理默认批次（人工智能与应用）
//
// 映射规则与例外见 开发文档/设计令牌收敛清单.md。
// 注意：改完必须跑一次 `npx prettier --write <文件>`，因为 prettier-plugin-tailwindcss
// 会按新的类名重新排序（否则 prettier --check 会失败）。
import fs from 'node:fs'

// 默认批次：「人工智能与应用」8 个页面 + 9 个 AI 组件（已完成，留作样例）
const defaultFiles = [
  'src/app/ai/page.tsx',
  'src/app/work/page.tsx',
  'src/app/token/page.tsx',
  'src/app/human/page.tsx',
  'src/app/chat/page.tsx',
  'src/app/paper/page.tsx',
  'src/app/aiimage/page.tsx',
  'src/app/demo/page.tsx',
  'src/app/demo/components/demo.tsx',
  'src/app/demo/components/demonstrate.tsx',
  'src/components/sections/ai/AiHeroSection.tsx',
  'src/components/sections/ai/AiScene.tsx',
  'src/components/sections/ai/HotProducts.tsx',
  'src/components/sections/ai/ProductsSection.tsx',
  'src/components/sections/ai/AIProductsSection.tsx',
  'src/components/sections/ai/ProductTerminalsSection.tsx',
  'src/components/sections/ai/ProductFeaturesSection.tsx',
  'src/components/sections/ai/AiSolutionSection.tsx',
  'src/components/sections/ai/FAQSection.tsx',
]

const argv = process.argv.slice(2)
const dry = argv.includes('--dry')
const files = argv.filter((a) => a !== '--dry')
const target = files.length ? files : defaultFiles

// hex -> 令牌名。例外色值刻意不入表：
//   aiimage 品类色 ea580c / 8b5cf6 / 0891b2，PixelBlast 特效参数 4b14ff
const hexMap = {
  '0055ff': 'brand-500',
  '015bfe': 'brand-500',
  '0066ff': 'brand-500',
  '3860f4': 'brand-500',
  '2563eb': 'brand-600',
  eff6ff: 'brand-50',
  f6f9ff: 'brand-50',
  eef4ff: 'brand-50',
  f8fbff: 'brand-50',
  f8fafc: 'neutral-50',
  f5f6f7: 'neutral-50',
  e2e8f0: 'neutral-200',
  '64748b': 'neutral-500',
  '0f172a': 'neutral-950',
}

const rules = []
// A. Tailwind 任意值类 [#hex] -> 令牌类
for (const [hex, tok] of Object.entries(hexMap)) {
  rules.push([new RegExp('\\[#' + hex + '\\]', 'gi'), tok])
}
// B. 其余裸 hex（inline style / 渐变字符串）-> var(--color-*)
for (const [hex, tok] of Object.entries(hexMap)) {
  rules.push([new RegExp('#' + hex + '(?![0-9a-fA-F])', 'gi'), `var(--color-${tok})`])
}
// C. rgba 字面量 -> color-mix（位于 className 任意值内，故用下划线代替空格）
rules.push(
  [/rgba\(59,130,246,0\.1\)/g, 'color-mix(in_srgb,var(--color-brand-500)_10%,transparent)'],
  [/rgba\(59,130,246,0\.03\)/g, 'color-mix(in_srgb,var(--color-brand-500)_3%,transparent)'],
  [/rgba\(0,85,255,0\.16\)/g, 'color-mix(in_srgb,var(--color-brand-500)_16%,transparent)'],
  [/rgba\(0,85,255,0\.08\)/g, 'color-mix(in_srgb,var(--color-brand-500)_8%,transparent)']
)
// D. 网格线 8 位 hex、遮罩 #000
rules.push(
  [/#80808008/g, 'color-mix(in_srgb,var(--color-neutral-500)_3%,transparent)'],
  [/#000_70%/g, 'var(--color-neutral-950)_70%']
)
// E. 深色面：gray-900 走 neutral-950（neutral-900 与 800 同值，避免与卡片底色撞色）
rules.push(
  [/\b(bg|from|via)-gray-900\b/g, '$1-neutral-950'],
  [/\bbg-gray-750\b/g, 'bg-neutral-800']
)
// F. 其余 gray-N / slate-N 按数字位平移到 neutral-N
rules.push([/\bgray-(\d{2,3})\b/g, 'neutral-$1'], [/\bslate-(\d{2,3})\b/g, 'neutral-$1'])
// G. 类形式的 black -> neutral-950（SVG 的 fill="black" 属性不受影响：前面不是 -）
rules.push([/(?<=-)black\b/g, 'neutral-950'])

// H. 品牌蓝统一：blue / indigo 原始色板 -> brand-*
//    blue-600 是「主按钮底色」、blue-700 是 hover，按设计指南落到 brand-500 / brand-600。
const paletteMap = {
  'blue-50': 'brand-50',
  'blue-100': 'brand-100',
  'blue-200': 'brand-200',
  'blue-300': 'brand-300',
  'blue-400': 'brand-400',
  'blue-500': 'brand-500',
  'blue-600': 'brand-500',
  'blue-700': 'brand-600',
  'blue-800': 'brand-700',
  'blue-900': 'brand-800',
  'blue-950': 'brand-900',
  'indigo-50': 'brand-50',
  'indigo-100': 'brand-100',
  'indigo-200': 'brand-200',
  'indigo-300': 'brand-300',
  'indigo-400': 'brand-400',
  'indigo-500': 'brand-500',
  'indigo-600': 'brand-600',
  'indigo-700': 'brand-700',
  'indigo-800': 'brand-800',
  'indigo-900': 'brand-900',
}
rules.push([/\b(blue|indigo)-(\d{2,3})\b/g, (m, fam, n) => paletteMap[`${fam}-${n}`] ?? m])

let totalHits = 0
for (const f of target) {
  if (!fs.existsSync(f)) {
    console.log('  SKIP', f, '(不存在)')
    continue
  }
  const before = fs.readFileSync(f, 'utf8')
  let after = before
  let hits = 0
  for (const [re, to] of rules) {
    // 先统计命中数（match），再用字符串替换（这样 $1 才会被解析）
    const m = after.match(re)
    if (m) hits += m.length
    after = after.replace(re, to)
  }
  if (after !== before) {
    if (!dry) fs.writeFileSync(f, after)
    totalHits += hits
    console.log(String(hits).padStart(5), f)
  } else {
    console.log('    0', f)
  }
}
console.log(`\n${dry ? '[dry-run] ' : ''}total replacements: ${totalHits}`)
