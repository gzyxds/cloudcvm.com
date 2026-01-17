import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: '视频混剪助手 - 开源免费的视频剪辑软件 | 必定AI-BuidAI',
  description: '必定AI-BuidAI 视频混剪助手是一款高效易用的视频剪辑软件,专为短视频创作者、Vlogger及营销人员设计。支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,提供海量模板与素材库,一键生成节奏感强、视觉冲击力大的混剪视频。无论是门店营销推广、产品带货、直播切片,都能轻松制作出专业级别的视频内容,大幅降低剪辑门槛与时间成本。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: '视频混剪,视频剪辑,批量剪辑,智能转场,滤镜调色,字幕添加,背景音乐,必定AI,BuidAI,视频制作工具,开源AI系统,私有化部署,视频剪辑源码',
  openGraph: {
    title: '视频混剪助手 - 一键生成混剪视频 | 必定AI-BuidAI',
    description: '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配。一键生成节奏感强、视觉冲击力大的混剪视频。',
    images: ['/product/videoclip.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '视频混剪助手 - 一键生成混剪视频 | 必定AI-BuidAI',
    description: '高效易用的视频剪辑软件,支持自动化批量剪辑、智能转场、滤镜调色、字幕添加和背景音乐匹配,大幅降低剪辑门槛与时间成本。',
    images: ['/product/videoclip.png'],
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
