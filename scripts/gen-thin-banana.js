/**
 * 从旧 BananaClientPage 提取数据 → 生成薄包装 BananaClientPage
 * 薄包装 = 数据定义 + BananaProductPage 调用（~40 行 vs 原 ~570 行）
 */
const fs = require('fs')
const path = require('path')

function extractArray(code, startMarker) {
  const startIdx = code.indexOf(startMarker)
  if (startIdx === -1) return null
  const eqIdx = code.indexOf('=', startIdx)
  const bracketIdx = code.indexOf('[', eqIdx)
  if (bracketIdx === -1) return null
  let depth = 0, i = bracketIdx
  for (; i < code.length; i++) {
    if (code[i] === '[') depth++
    else if (code[i] === ']') { depth--; if (depth === 0) break }
  }
  if (depth !== 0) return null
  return code.substring(bracketIdx, i + 1)
}

function replaceIconRefs(arrStr) {
  return arrStr.replace(/icon:\s*(\w+)Icon/g, "icon: '$1'")
}

function extractTagContent(code, tagPattern) {
  const match = code.match(tagPattern)
  return match ? match[1].trim() : ''
}

const PRODUCTS = ['jmdraw', 'manju', 'model', 'music', 'ppt', 'resume', 'sora', 'videoclip', 'xhs']

for (const product of PRODUCTS) {
  const f = path.join(__dirname, '..', 'src', 'app', product, 'BananaClientPage.tsx')
  if (!fs.existsSync(f)) continue
  const code = fs.readFileSync(f, 'utf8')

  const featuresStr = replaceIconRefs(extractArray(code, 'const features'))
  const detailsStr = replaceIconRefs(extractArray(code, 'const initialFeatureDetails'))
  if (!featuresStr || !detailsStr) continue

  // Extract hero data using the extracted JSON files
  const jsonF = path.join(__dirname, `extracted-${product}.json`)
  let heroData = {}
  if (fs.existsSync(jsonF)) {
    heroData = JSON.parse(fs.readFileSync(jsonF, 'utf8'))
  }

  const badgeText = heroData.badgeText || ''
  const heroImage = heroData.heroImage || '/images/aisolution/banana-1.webp'
  const heroTitleRaw = heroData.heroTitleRaw || ''
  const heroDescRaw = heroData.heroDescRaw || ''

  // Read existing page.tsx for metadata
  const pageTsx = path.join(__dirname, '..', 'src', 'app', product, 'page.tsx')
  const pageCode = fs.existsSync(pageTsx) ? fs.readFileSync(pageTsx, 'utf8') : ''

  // Extract features title/desc and CTA from original code
  const featuresTitle = heroData.featuresTitle || extractTagContent(code, /<p className="text-slate-500[^"]*"[^>]*>\s*([^<]*)\s*<\/p>/)
  const featuresDesc = heroData.featuresDesc || extractTagContent(code, /<p className="text-gray-500[^"]*"[^>]*>\s*([^<]*)\s*<\/p>/)

  const ctaTitle = heroData.ctaTitle || '准备好开始了吗？'
  const ctaDesc = heroData.ctaDesc || ''

  // Generate thin BananaClientPage
  const newContent = `'use client'

import BananaProductPage from '@/components/ai/BananaProductPage'

const badgeText = "${badgeText.replace(/"/g, '\\"')}"
const heroImage = "${heroImage}"
const heroTitle = (<>${heroTitleRaw}</>)
const heroDesc = (<>${heroDescRaw}</>)
const featuresTitle = "${(featuresTitle || '').replace(/"/g, '\\"')}"
const featuresDesc = "${(featuresDesc || '').replace(/"/g, '\\"')}"
const ctaTitle = "${ctaTitle.replace(/"/g, '\\"')}"
const ctaDesc = "${ctaDesc.replace(/"/g, '\\"')}"

const features = ${featuresStr}

const featureDetails = ${detailsStr}

export default function BananaClientPage() {
  return (
    <BananaProductPage
      badgeText={badgeText}
      heroTitle={heroTitle}
      heroDesc={heroDesc}
      heroImage={heroImage}
      featuresTitle={featuresTitle}
      featuresDesc={featuresDesc}
      features={features}
      featureDetails={featureDetails}
      ctaTitle={ctaTitle}
      ctaDesc={ctaDesc}
    />
  )
}
`

  fs.writeFileSync(f, newContent, 'utf8')
  console.log(`${product}: ${code.length} → ${newContent.length} bytes (${((1 - newContent.length / code.length) * 100).toFixed(0)}%)`)
}
