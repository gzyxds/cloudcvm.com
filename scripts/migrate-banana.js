/**
 * 批量迁移 BananaClientPage → BananaProductPage
 * 读取每个产品的 BananaClientPage.tsx，提取 hero 文本，
 * 生成简化的 page.tsx
 */
const fs = require('fs')
const path = require('path')

const PRODUCTS = ['drama', 'jimeng', 'jmdraw', 'manju', 'model', 'music', 'ppt', 'resume', 'sora', 'videoclip', 'xhs']

function extractBetween(code, startMarker, endMarker) {
  const start = code.indexOf(startMarker)
  if (start === -1) return null
  const from = code.indexOf(endMarker || '\n', start + startMarker.length)
  if (from === -1) return code.substring(start + startMarker.length).trim()
  return code.substring(start + startMarker.length, from).trim()
}

function extractFeaturesArray(code) {
  // Extract the features array (between "const features" and "const initialFeatureDetails" or "];")
  const start = code.indexOf('const features')
  if (start === -1) return null
  const detailsStart = code.indexOf('const initialFeatureDetails', start)
  const end = detailsStart !== -1 ? detailsStart : code.length
  let section = code.substring(start, end)
  // Find the array close
  const arrayMatch = section.match(/const features[^=]*=\s*\[([\s\S]*?)\];/)
  return arrayMatch ? arrayMatch[1].trim() : null
}

function extractDetailsArray(code) {
  const start = code.indexOf('const initialFeatureDetails')
  if (start === -1) return null
  let section = code.substring(start)
  const arrayMatch = section.match(/const initialFeatureDetails[^=]*=\s*\[([\s\S]*?)\];/)
  return arrayMatch ? arrayMatch[1].trim() : null
}

function extractHeroBadge(code) {
  const match = code.match(/<span className="text-xs text-slate-600[^"]*"[^>]*>([^<]*)<\/span>/)
  return match ? match[1].trim() : 'NOT_FOUND'
}

function extractHeroTitle(code) {
  // Extract h1 content - may include span elements
  const match = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  return match ? match[1].trim() : 'NOT_FOUND'
}

function extractHeroDesc(code) {
  const match = code.match(/<p className="text-lg sm:text-xl text-(?:slate|gray)-600[^"]*"[^>]*>([\s\S]*?)<\/p>/)
  return match ? match[1].trim() : 'NOT_FOUND'
}

function extractHeroImage(code) {
  const match = code.match(/src="(\/images\/aisolution\/[^"]+)"\s+alt=.*展示/)
  return match ? match[1] : '/images/aisolution/banana-1.webp'
}

function extractFeaturesTitle(code) {
  // Second h2 with text-3xl class (after hero section)
  const matches = [...code.matchAll(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>([^<]*)<\/h2>/g)]
  // The first one is CTA title, the second is features title... actually need to be smarter
  for (const m of matches) {
    const txt = m[1].trim()
    if (!txt.includes('准备好') && !txt.includes('开始') && !txt.includes('创作')) {
      return txt
    }
  }
  return 'NOT_FOUND'
}

function extractFeaturesDesc(code) {
  // Find the p tag right after the features section title
  const match = code.match(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>[^<]*<\/h2>\s*<\/div>\s*<p className="text-slate-500[^"]*"[^>]*>([^<]*)<\/p>/)
  if (match) return match[1].trim()
  // Fallback: look for the features section context
  const alt = code.match(/<p className="text-slate-500 dark:text-slate-400 text-lg">([^<]*)<\/p>/)
  return alt ? alt[1].trim() : 'NOT_FOUND'
}

function extractCTATitle(code) {
  // Last h2 before the CTA buttons
  const matches = [...code.matchAll(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>([^<]*)<\/h2>/g)]
  if (matches.length > 0) return matches[matches.length - 1][1].trim()
  return 'NOT_FOUND'
}

function extractCTADesc(code) {
  // Last p in the CTA section
  const matches = [...code.matchAll(/<p className="text-lg text-slate-500[^"]*"[^>]*>([^<]*)<\/p>/g)]
  if (matches.length > 0) return matches[matches.length - 1][1].trim()
  return 'NOT_FOUND'
}

function extractMetadataInfo(code) {
  // For metadata, we keep the existing page.tsx metadata
  return null
}

// Process each product
for (const product of PRODUCTS) {
  const filePath = path.join(__dirname, '..', 'src', 'app', product, 'BananaClientPage.tsx')
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP ${product}: no BananaClientPage.tsx`)
    continue
  }

  const code = fs.readFileSync(filePath, 'utf8')

  const featuresRaw = extractFeaturesArray(code)
  const detailsRaw = extractDetailsArray(code)
  const badgeText = extractHeroBadge(code)
  const heroTitleRaw = extractHeroTitle(code)
  const heroDescRaw = extractHeroDesc(code)
  const heroImage = extractHeroImage(code)
  const featTitle = extractFeaturesTitle(code)
  const featDesc = extractFeaturesDesc(code)
  const ctaTitle = extractCTATitle(code)
  const ctaDesc = extractCTADesc(code)

  console.log(`\n=== ${product} ===`)
  console.log(`  badge: ${badgeText}`)
  console.log(`  heroTitle: ${heroTitleRaw.substring(0, 80)}...`)
  console.log(`  heroImage: ${heroImage}`)
  console.log(`  featTitle: ${featTitle}`)
  console.log(`  featDesc: ${featDesc}`)
  console.log(`  ctaTitle: ${ctaTitle}`)
  console.log(`  ctaDesc: ${ctaDesc}`)
  console.log(`  features: ${featuresRaw ? featuresRaw.split('title:').length - 1 : 0} items`)
  console.log(`  details: ${detailsRaw ? detailsRaw.split('title:').length - 1 : 0} items`)
}
