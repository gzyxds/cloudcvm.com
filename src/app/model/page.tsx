import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

export const metadata: Metadata = {
  title: { absolute: '电商试衣换装 - 开源免费的AI模特换装系统 | 智言AI' },
  description: '智言AI 电商试衣换装是一款专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术，即可实现「商品一键适配模特上身」与「背景智能替换」两大核心功能，让您的商品在众多竞争者中脱颖而出。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: '电商试衣,AI换装,AI模特,背景替换,商品主图,电商视觉优化,必定AI,智言AI,AI系统,AI源码,开源代码,试衣换装源码',
  openGraph: { title: '电商试衣换装 - AI模特多场景切换 | 智言AI', description: '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。', images: ['/product/model.webp'], type: 'website' },
  twitter: { card: 'summary_large_image', title: '电商试衣换装 - AI模特多场景切换 | 智言AI', description: '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。', images: ['/product/model.webp'] },
}

export default function ModelPage() {
  return (<><Header /><main><BananaProductPage
    badgeText="电商试衣换装 2.0 发布"
    heroTitle={<>AI 模特 <span className="text-[#0055ff]">多场景切换</span></>}
    heroDesc={<>专为电商卖家打造的 AI 视觉优化解决方案，提升商品主图的吸引力与转化率。<br className="hidden sm:block" />无需复杂拍摄与高昂成本，通过 AI 技术实现商品一键适配模特上身与背景智能替换。</>}
    heroImage="/images/aisolution/电商换装.webp"
    featuresTitle=""
    featuresDesc="集智能模特匹配、AI换背景、服装贴合处理、AI生模特、AI生背景图于一体，为您提供一站式电商视觉优化解决方案"
    features={[
      { title: '智能模特匹配', desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用。', icon: 'User' },
      { title: 'AI换背景', desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择。', icon: 'Photo' },
      { title: '服装贴合处理', desc: 'AI 自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果。', icon: 'Sparkles' },
      { title: 'AI 生模特', desc: '通过 AI 智能生成用户想要的虚拟模特形象，满足个性化需求。', icon: 'FaceSmile' },
      { title: 'AI生背景图', desc: '通过 AI 生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换。', icon: 'GlobeAlt' },
      { title: '简洁易用', desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手。', icon: 'Bolt' },
    ]}
    featureDetails={[
      { title: '智能模特匹配，一键上身', desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用。AI 自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果。通过 AI 智能生成用户想要的虚拟模特形象，满足个性化需求。', activePoint: 0, points: [{ title: '智能模特匹配', desc: '支持上传服装平铺图或白底图，系统内置真人模特库可直接选用，快速完成模特匹配。' }, { title: '服装贴合处理', desc: 'AI 自动识别服装版型，并智能贴合至所选模特身上，保持服装纹理与穿着效果，真实自然。' }, { title: 'AI 生模特', desc: '通过 AI 智能生成用户想要的虚拟模特形象，满足个性化需求，打造专属模特。' }, { title: '批量处理', desc: '支持批量上传服装图片，自动匹配模特并生成上身效果图，大幅提升工作效率。' }], image: '/images/aisolution/model-1.webp' },
      { title: 'AI 换背景，多场景切换', desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择。通过 AI 生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换，让商品在众多竞争者中脱颖而出。', activePoint: 0, points: [{ title: 'AI 换背景', desc: '内置多风格场景背景库，包括影棚、街拍、自然、室内等，用户可直接选择，快速切换背景。' }, { title: 'AI生背景图', desc: '通过 AI 生成与服装风格或用户需求匹配的虚拟背景，实现一键场景切换，满足多样化需求。' }, { title: '智能场景识别', desc: 'AI 智能识别服装风格，自动推荐最佳背景场景，提升视觉效果和转化率。' }, { title: '高清输出', desc: '支持高清图片输出，确保商品细节清晰可见，满足电商平台要求。' }], image: '/images/aisolution/model-2.webp' },
      { title: '简洁易用，高效便捷', desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手。无需复杂拍摄与高昂成本，通过 AI 技术，即可实现商品一键适配模特上身与背景智能替换，大幅提升商品主图的吸引力与转化率。', activePoint: 0, points: [{ title: '简洁易用', desc: '直观的用户界面设计，降低使用门槛，让每一位用户都能轻松上手，快速上手。' }, { title: '一键操作', desc: '无需复杂操作，一键即可完成模特匹配和背景替换，大幅提升工作效率。' }, { title: '实时预览', desc: '支持实时预览功能，随时查看效果，及时调整优化，确保满意效果。' }, { title: '云端存储', desc: '支持云端存储，随时随地访问和管理您的商品图片，方便快捷。' }], image: '/images/aisolution/model-3.webp' },
    ]}
    ctaTitle="准备好开始创作了吗？"
    ctaDesc="立即加入 智言AI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。"
  /></main><Footer /></>)
}
