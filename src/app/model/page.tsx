import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: '电商试衣换装 - 开源免费的AI模特换装系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI 电商试衣换装是一款专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术，即可实现「商品一键适配模特上身」与「背景智能替换」两大核心功能，让您的商品在众多竞争者中脱颖而出。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: '电商试衣,AI换装,AI模特,背景替换,商品主图,电商视觉优化,必定AI,BuidAI,AI系统,AI源码,开源代码,试衣换装源码',
  openGraph: {
    title: '电商试衣换装 - AI模特多场景切换 | 必定AI-BuidAI',
    description: '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。',
    images: ['/product/model.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '电商试衣换装 - AI模特多场景切换 | 必定AI-BuidAI',
    description: '专为电商卖家打造的AI视觉优化解决方案，提升商品主图的吸引力与转化率。无需复杂拍摄与高昂成本，通过AI技术实现商品一键适配模特上身与背景智能替换。',
    images: ['/product/model.png'],
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
