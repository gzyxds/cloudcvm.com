/**
 * BananaClientPage → BananaProductPage 迁移脚本 v2
 * 将 12 个产品的 BananaClientPage 重构为薄包装（仅数据 + BananaProductPage 调用）
 */
const fs = require('fs')
const path = require('path')

const PRODUCTS = ['banana', 'drama', 'jimeng', 'jmdraw', 'manju', 'model', 'music', 'ppt', 'resume', 'sora', 'videoclip', 'xhs']

for (const product of PRODUCTS) {
  const filePath = path.join(__dirname, '..', 'src', 'app', product, 'BananaClientPage.tsx')
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP ${product}: file not found (already migrated)`)
    continue
  }

  const code = fs.readFileSync(filePath, 'utf8')

  // Extract icon imports (the icon-specific ones, not the shared ones)
  const iconImportMatch = code.match(/import\s*\{([^}]+)\}\s*from\s*'@heroicons\/react\/24\/outline'/)
  if (!iconImportMatch) {
    console.log(`SKIP ${product}: no icon import found`)
    continue
  }

  // Extract features array between "const features" and "const initialFeatureDetails"
  const featuresStart = code.indexOf('const features')
  const detailsStart = code.indexOf('const initialFeatureDetails')
  if (featuresStart === -1 || detailsStart === -1) {
    console.log(`SKIP ${product}: can't find data arrays`)
    continue
  }

  // Get features array raw text
  let featuresSection = code.substring(featuresStart, detailsStart)
  let featuresMatch = featuresSection.match(/const features[^=]*=\s*(\[[\s\S]*?\]);/)
  if (!featuresMatch) {
    // Try without semicolon
    featuresMatch = featuresSection.match(/const features[^=]*=\s*(\[[\s\S]*?\])/)
  }
  if (!featuresMatch) {
    console.log(`SKIP ${product}: can't extract features`)
    continue
  }
  let featuresStr = featuresMatch[1]

  // Replace icon references: IconName → 'IconNameWithoutIcon'
  featuresStr = featuresStr.replace(/icon:\s*(\w+)Icon/g, "icon: '$1'")

  // Get featureDetails array raw text
  let detailsSection = code.substring(detailsStart)
  let detailsMatch = detailsSection.match(/const initialFeatureDetails[^=]*=\s*(\[[\s\S]*?\]);/)
  if (!detailsMatch) {
    detailsMatch = detailsSection.match(/const initialFeatureDetails[^=]*=\s*(\[[\s\S]*?\])/)
  }
  if (!detailsMatch) {
    console.log(`SKIP ${product}: can't extract featureDetails`)
    continue
  }
  let detailsStr = detailsMatch[1]

  // Extract hero texts
  const badgeMatch = code.match(/<span className="text-xs text-(?:slate|gray)-600[^"]*"[^>]*>\s*([^<]*)<\/span>/)
  const badgeText = badgeMatch ? badgeMatch[1].trim() : 'NEW'

  const heroImgMatch = code.match(/\/images\/aisolution\/[^"']+\.(?:webp|png|jpg)/)
  const heroImage = heroImgMatch ? heroImgMatch[0] : '/images/aisolution/banana-1.webp'

  // Get features section title (the one in the gray section)
  const featTitleMatch = code.match(/<div className="text-center mb-16[^"]*"[^>]*>\s*<h2[^>]*>([^<]*)<\/h2>\s*<p[^>]*>([^<]*)<\/p>/)
  const featuresTitle = featTitleMatch ? featTitleMatch[1].trim() : '功能特性'
  const featuresDesc = featTitleMatch ? featTitleMatch[2].trim() : ''

  // Get the hero description paragraph
  const heroDescMatch = code.match(/<p className="text-lg sm:text-xl text-(?:slate|gray)-600[^"]*"[^>]*>([\s\S]*?)<\/p>/)
  const heroDescRaw = heroDescMatch ? heroDescMatch[1].trim() : ''

  // Get the hero h1
  const heroH1Match = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  const heroTitleRaw = heroH1Match ? heroH1Match[1].trim() : ''

  // Get CTA section
  const ctaH2Matches = [...code.matchAll(/<h2 className="text-3xl md:text-4xl[^"]*"[^>]*>([^<]*)<\/h2>/g)]
  const ctaTitle = ctaH2Matches.length > 0 ? ctaH2Matches[ctaH2Matches.length - 1][1].trim() : '准备好开始了吗？'

  const ctaPMatches = [...code.matchAll(/<p className="text-lg text-(?:slate|gray)-500[^"]*"[^>]*>([^<]*)<\/p>/g)]
  const ctaDesc = ctaPMatches.length > 0 ? ctaPMatches[ctaPMatches.length - 1][1].trim() : ''

  // Generate new file
  const newContent = `'use client'

import BananaProductPage from '@/components/ai/BananaProductPage'
import type { FeatureItem, FeatureDetail } from '@/components/ai/BananaProductPage'

// ==================== Product Data ====================
const badgeText = "${badgeText.replace(/"/g, '\\"')}"
const heroImage = "${heroImage}"

const heroTitle = (
  <>${heroTitleRaw}</>
)

const heroDesc = (
  <>${heroDescRaw}</>
)

const featuresTitle = "${featuresTitle.replace(/"/g, '\\"')}"
const featuresDesc = "${featuresDesc.replace(/"/g, '\\"')}"
const ctaTitle = "${ctaTitle.replace(/"/g, '\\"')}"
const ctaDesc = "${ctaDesc.replace(/"/g, '\\"')}"

const features: FeatureItem[] = ${featuresStr}

const featureDetails: FeatureDetail[] = ${detailsStr}

// ==================== Export ====================
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

  // Write
  fs.writeFileSync(filePath, newContent, 'utf8')
  const origSize = code.length
  const newSize = newContent.length
  console.log(`${product}: ${origSize} → ${newSize} bytes (${((1 - newSize / origSize) * 100).toFixed(0)}% reduction)`)
}

console.log('\n✅ Migration complete!')
