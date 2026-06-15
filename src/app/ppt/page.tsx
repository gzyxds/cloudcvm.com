import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

export const metadata: Metadata = {
  title: { absolute: 'AI PPT - 开源免费的智能演示文稿制作工具 | 必定AI-BuidAI' },
  description: '必定AI-BuidAI AI PPT是一款智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化，还可一键生成演讲备注。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'AI PPT,智能演示文稿,自动生成PPT,模板图表,智能配色,字体搭配,动画效果,必定AI,BuidAI,PPT制作工具,开源AI系统,私有化部署,PPT源码',
  openGraph: { title: 'AI PPT - 一键直出幻灯片 | 必定AI-BuidAI', description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。', images: ['/product/ppt.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AI PPT - 一键直出幻灯片 | 必定AI-BuidAI', description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，显著提升制作效率与视觉表现力。', images: ['/product/ppt.png'] },
}

export default function PptPage() {
  return (<><Header /><main><BananaProductPage
    badgeText="AI PPT 2.0 发布"
    heroTitle={<>一键直出 <span className="text-[#0055ff]">幻灯片</span></>}
    heroDesc={<>智能演示文稿制作工具，根据主题或大纲自动生成 PPT。<br className="hidden sm:block" />内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。</>}
    heroImage="/images/aisolution/banana-1.webp"
    featuresTitle=""
    featuresDesc="集智能生成、模板图表、智能配色、字体搭配、动画效果于一体，为您提供一站式演示文稿制作解决方案"
    features={[
      { title: '智能生成', desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。', icon: 'Sparkles' },
      { title: '模板图表', desc: '内置多种模板与图表，满足不同场景需求，快速搭建专业级演示文稿。', icon: 'RectangleStack' },
      { title: '智能配色', desc: '支持智能配色方案，自动匹配最佳色彩组合，提升视觉表现力。', icon: 'PaintBrush' },
      { title: '字体搭配', desc: '智能推荐字体搭配方案，确保排版美观专业，提升阅读体验。', icon: 'Pencil' },
      { title: '动画效果', desc: '支持动画效果优化，让演示更加生动有趣，增强观众参与感。', icon: 'Film' },
      { title: '演讲备注', desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容。', icon: 'DocumentText' },
    ]}
    featureDetails={[
      { title: '智能生成，一键直出', desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。', activePoint: 0, points: [{ title: '主题自动生成', desc: '根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，大幅提升制作效率。' }, { title: '智能内容扩展', desc: '基于 AI 算法，自动扩展和优化内容，确保演示文稿内容丰富、逻辑清晰。' }, { title: '快速导出', desc: '支持快速导出多种格式，大幅缩短等待时间，提升创作效率。' }, { title: '高质量输出', desc: '生成的 PPT 质量高，设计美观，结构清晰，满足专业级创作需求。' }], image: '/images/product/aippt.png' },
      { title: '模板图表，专业设计', desc: '内置多种模板与图表，满足不同场景需求。支持智能配色、字体搭配与动画效果优化，让您的演示文稿更加专业美观。', activePoint: 0, points: [{ title: '丰富模板库', desc: '内置多种模板与图表，涵盖商务、教育、科技等多个领域，满足不同场景需求。' }, { title: '智能配色', desc: '支持智能配色方案，自动匹配最佳色彩组合，提升视觉表现力。' }, { title: '字体搭配', desc: '智能推荐字体搭配方案，确保排版美观专业，提升阅读体验。' }, { title: '动画效果', desc: '支持动画效果优化，让演示更加生动有趣，增强观众参与感。' }], image: '/images/product/aippt.png' },
      { title: '演讲备注，掌控全场', desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容。支持多种输出格式，满足不同场景需求。', activePoint: 0, points: [{ title: '智能备注生成', desc: '一键生成演讲备注，帮助演讲者更好地掌控节奏和内容，提升演讲效果。' }, { title: '多种输出格式', desc: '支持多种输出格式，如 PDF、PPTX 等，满足不同场景需求。' }, { title: '实时预览', desc: '支持实时预览功能，随时查看演示效果，及时调整优化。' }, { title: '云端存储', desc: '支持云端存储，随时随地访问和编辑您的演示文稿。' }], image: '/images/product/aippt.png' },
    ]}
    ctaTitle="准备好开始创作了吗？"
    ctaDesc="立即加入 BuidAI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。"
  /></main><Footer /></>)
}
