import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'AI PPT - 开源免费的智能演示文稿制作工具 | 必定AI-BuidAI',
  description: '必定AI-BuidAI AI PPT是一款智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化，还可一键生成演讲备注。无论是工作报告、学术展示还是商业提案，都能快速输出专业级演示文稿，显著提升制作效率与视觉表现力。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'AI PPT,智能演示文稿,自动生成PPT,模板图表,智能配色,字体搭配,动画效果,必定AI,BuidAI,PPT制作工具,开源AI系统,私有化部署,PPT源码',
  openGraph: {
    title: 'AI PPT - 一键直出幻灯片 | 必定AI-BuidAI',
    description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面。内置多种模板与图表，支持智能配色、字体搭配与动画效果优化。',
    images: ['/product/ppt.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI PPT - 一键直出幻灯片 | 必定AI-BuidAI',
    description: '智能演示文稿制作工具，能够根据用户输入的主题或大纲，自动生成结构清晰、设计美观的PPT页面，显著提升制作效率与视觉表现力。',
    images: ['/product/ppt.png'],
  },
}

// ==================== Main Page Component ====================
export default function BananaPage() {
  return (
    <>
      <Header />
      <main>
        <BananaClientPage />

      </main>
      <Footer />
    </>
  )
}
