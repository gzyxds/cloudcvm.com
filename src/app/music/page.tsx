import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'AI音乐 - 开源免费的 AI 音乐生成系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI AI音乐是一款以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具,旨在降低门槛、提升效率,支持个人娱乐与商用配乐的"人机协同"。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: 'AI音乐,音乐生成,文生音乐,歌词生成,哼唱生成,乐谱生成,必定AI,BuidAI,音乐创作工具,开源AI系统,私有化部署,音乐源码',
  openGraph: {
    title: 'AI音乐 - 一键生成 AI 音乐 | 必定AI-BuidAI',
    description: '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐。降低门槛、提升效率,支持个人娱乐与商用配乐。',
    images: ['/product/music.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI音乐 - 一键生成 AI 音乐 | 必定AI-BuidAI',
    description: '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐,降低门槛、提升效率。',
    images: ['/product/music.png'],
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
