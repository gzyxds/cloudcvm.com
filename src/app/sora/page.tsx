import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'Sora 视频生成引擎 - 开源免费的 AI 视频创作系统 | BuidAI',
  description: 'BuidAI Sora 视频生成平台提供一站式 AI 视频创作解决方案。支持高质量文生视频、图生视频及长视频生成。基于开源 Sora 技术构建，提供 Sora 源码与私有化部署支持，助力企业低成本打造专属 AI 视频应用。',
  keywords: 'Sora,Sora视频,Sora源码,AI视频生成,文生视频,视频生成模型,BuidAI,开源AI系统,私有化部署,OpenAI Sora,视频大模型',
  openGraph: {
    title: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | BuidAI',
    description: '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台，提供完整源码，让创意无限延伸。',
    images: ['/product/sora.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sora 视频生成引擎 - 打造您的专属 AI 视频创作平台 | BuidAI',
    description: '一键生成电影级 AI 视频，支持文生视频与图生视频。基于开源 Sora 技术构建的新一代 AI 视频生成平台。',
    images: ['/product/sora.png'],
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
