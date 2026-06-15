/**
 * 从 12 个 BananaClientPage 中提取产品配置数据
 * 输出 JSON 便于迁移到共享数据文件
 */
const fs = require('fs')
const path = require('path')

const PRODUCTS = ['banana', 'drama', 'jimeng', 'jmdraw', 'manju', 'model', 'music', 'ppt', 'resume', 'sora', 'videoclip', 'xhs']

const results = {}

for (const product of PRODUCTS) {
  const filePath = path.join(__dirname, '..', 'src', 'app', product, 'BananaClientPage.tsx')
  if (!fs.existsSync(filePath)) {
    console.error(`Missing: ${filePath}`)
    continue
  }
  const code = fs.readFileSync(filePath, 'utf8')

  // Extract features array
  const featuresMatch = code.match(/const features[^=]*=\s*\[([\s\S]*?)\]\s*\]/)

  // Extract initialFeatureDetails array
  const detailsMatch = code.match(/const initialFeatureDetails[^=]*=\s*\[([\s\S]*?)\]\s*\]/)

  // Extract hero section text
  const badgeMatch = code.match(/<span[^>]*>([^<]*)<\/span>\s*<\/div>\s*(?:<\/div>\s*)?\s*<h1[^>]*>([\s\S]*?)<\/h1>/)

  // Extract features section title
  const featTitleMatch = code.match(/<h2 className="text-3xl[^"]*"[^>]*>([^<]*)<\/h2>/)
  const featDescMatch = code.match(/<p className="text-slate-500[^"]*"[^>]*>([^<]*)<\/p>/)

  // Extract CTA section
  const ctaTitleMatch = code.match(/<h2 className="text-3xl md:text-4xl font-bold text-slate-900[^"]*"[^>]*>([^<]*)<\/h2>/)
  const ctaDescMatch = code.match(/<p className="text-lg text-slate-500[^"]*"[^>]*>([^<]*)<\/p>/)

  // Extract hero image
  const heroImgMatch = code.match(/src="(\/images\/aisolution\/[^"]+)"\s+alt=/)

  results[product] = {
    featuresCount: featuresMatch ? (featuresMatch[1].match(/title:/g) || []).length : 0,
    detailsCount: detailsMatch ? (detailsMatch[1].match(/title:/g) || []).length : 0,
    badgeText: badgeMatch ? badgeMatch[1].trim() : 'NOT_FOUND',
    heroTitleLine1: badgeMatch ? badgeMatch[2].replace(/\s+/g, ' ').trim().substring(0, 80) : 'NOT_FOUND',
    featTitle: featTitleMatch ? featTitleMatch[1].trim() : 'NOT_FOUND',
    featDesc: featDescMatch ? featDescMatch[1].trim() : 'NOT_FOUND',
    ctaTitle: ctaTitleMatch ? ctaTitleMatch[1].trim() : 'NOT_FOUND',
    ctaDesc: ctaDescMatch ? ctaDescMatch[1].trim() : 'NOT_FOUND',
    heroImage: heroImgMatch ? heroImgMatch[1] : 'NOT_FOUND',
  }
}

console.log(JSON.stringify(results, null, 2))
