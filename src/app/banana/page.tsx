import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'Nanobanana 香蕉绘画 - 开源免费的 AI 图像生成系统 | BuidAI',
  description:
    'BuidAI Nanobanana 香蕉绘画平台提供一站式 AI 图像创作解决方案。基于 Gemini 3 Pro Image Preview 模型,支持高质量文生图、图生图及多图融合。预置多个模板开箱即用,保持角色一致性,支持文本渲染,生成速度极快。提供完整源码与私有化部署支持,助力企业低成本打造专属 AI 绘画应用。',
  keywords:
    'Nanobanana,香蕉绘画,AI绘画,文生图,图生图,多图融合,Gemini 3 Pro,图像生成模型,BuidAI,开源AI系统,私有化部署,AI绘画工具',
  openGraph: {
    title: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | BuidAI',
    description:
      '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合。预置模板开箱即用,保持角色一致性,生成速度极快,提供完整源码。',
    images: ['/product/human-1.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | BuidAI',
    description:
      '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合,预置模板开箱即用。',
    images: ['/product/human-1.png'],
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
