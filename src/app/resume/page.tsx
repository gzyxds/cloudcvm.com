import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'AI简历 - 开源免费的智能简历生成与分析系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI研发的智能文案生成平台。通过简单的基本信息输入，即可快速生成结构完整的个人简历。并可基于已有内容进行深度解析，评估亮点并提供优化建议。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'AI简历,智能简历,简历生成,简历分析,简历优化,简历模板,必定AI,BuidAI,简历制作工具,开源AI系统,私有化部署,简历源码',
  openGraph: {
    title: 'AI简历 - 一键生成智能分析 | 必定AI-BuidAI',
    description: '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。通过简单的基本信息输入，即可快速生成结构完整的个人简历。',
    images: ['/product/resume.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI简历 - 一键生成智能分析 | 必定AI-BuidAI',
    description: '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。',
    images: ['/product/resume.png'],
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
