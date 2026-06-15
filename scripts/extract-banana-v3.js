/**
 * 从 BananaClientPage.tsx 提取 features 和 featureDetails 数组
 * 使用括号计数，比 regex 更稳健
 */
const fs = require('fs')
const path = require('path')

function extractArray(code, startMarker) {
  const startIdx = code.indexOf(startMarker)
  if (startIdx === -1) return null
  const eqIdx = code.indexOf('=', startIdx)
  const bracketIdx = code.indexOf('[', eqIdx)
  if (bracketIdx === -1) return null

  let depth = 0
  let i = bracketIdx
  for (; i < code.length; i++) {
    if (code[i] === '[') depth++
    else if (code[i] === ']') {
      depth--
      if (depth === 0) break
    }
  }
  if (depth !== 0) return null
  return code.substring(bracketIdx, i + 1)
}

function replaceIconRefs(arrStr) {
  // Replace IconName pattern at end of icon: lines
  return arrStr.replace(/icon:\s*(\w+)Icon/g, "icon: '$1'")
}

const PRODUCTS = ['jmdraw', 'manju', 'model', 'music', 'ppt', 'resume', 'sora', 'videoclip', 'xhs']

for (const product of PRODUCTS) {
  const f = path.join(__dirname, '..', 'src', 'app', product, 'BananaClientPage.tsx')
  if (!fs.existsSync(f)) { console.log(`SKIP ${product}`); continue }
  const code = fs.readFileSync(f, 'utf8')

  const featuresArr = extractArray(code, 'const features')
  const detailsArr = extractArray(code, 'const initialFeatureDetails')

  if (!featuresArr || !detailsArr) {
    console.log(`FAIL ${product}: can't extract arrays`)
    continue
  }

  const featuresStr = replaceIconRefs(featuresArr)
  const detailsStr = replaceIconRefs(detailsArr)

  // Extract hero image
  const heroImgMatch = code.match(/src="(\/images\/aisolution\/[^"]+)"/)
  const heroImage = heroImgMatch ? heroImgMatch[1] : '/images/aisolution/banana-1.webp'

  // Extract badge text
  const badgeMatch = code.match(/<span className="text-xs text-(?:slate|gray)-\d+[^"]*"[^>]*>\s*([^<]*)<\/span>/)
  const badgeText = badgeMatch ? badgeMatch[1].trim() : ''

  // Extract hero h1
  const h1Match = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  const heroTitleRaw = h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : ''

  // Extract hero desc
  const descMatch = code.match(/<p className="text-lg sm:text-xl text-(?:slate|gray)-\d+[^"]*"[^>]*>([\s\S]*?)<\/p>/)
  const heroDescRaw = descMatch ? descMatch[1].trim().replace(/\s+/g, ' ') : ''

  // Extract features section title
  const featTitleMatch = code.match(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>\s*([^<]*)<\/h2>\s*<\/div>\s*<p className="text-(?:slate|gray)-\d+[^"]*"[^>]*>\s*([^<]*)<\/p>/)
  const featuresTitle = featTitleMatch ? featTitleMatch[1].trim() : ''
  const featuresDesc = featTitleMatch ? featTitleMatch[2].trim() : ''

  // Extract CTA section
  const ctaMatches = [...code.matchAll(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>([^<]*)<\/h2>/g)]
  const ctaTitle = ctaMatches.length > 0 ? ctaMatches[ctaMatches.length - 1][1].trim() : '准备好开始了吗？'
  const ctaPMatches = [...code.matchAll(/<p className="text-lg text-(?:slate|gray)-\d+[^"]*"[^>]*>([^<]*)<\/p>/g)]
  const ctaDesc = ctaPMatches.length > 0 ? ctaPMatches[ctaPMatches.length - 1][1].trim() : ''

  console.log(`\n=== ${product} ===`)
  console.log(JSON.stringify({
    badgeText,
    heroImage,
    featuresTitle,
    featuresDesc,
    ctaTitle,
    ctaDesc,
    featuresCount: (featuresStr.match(/title:/g) || []).length,
    detailsCount: (detailsStr.match(/title:/g) || []).length,
  }, null, 2))

  // Save to temp file for manual review
  const output = {
    badgeText, heroImage, heroTitleRaw, heroDescRaw,
    featuresTitle, featuresDesc, ctaTitle, ctaDesc,
    features: featuresStr,
    featureDetails: detailsStr,
  }
  fs.writeFileSync(path.join(__dirname, `extracted-${product}.json`), JSON.stringify(output, null, 2), 'utf8')
  console.log(`  Saved to extracted-${product}.json`)
}
