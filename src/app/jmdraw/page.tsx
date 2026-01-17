import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: '即梦AI绘画 - AI绘画系统,AI系统源码,AI绘画生成系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI 即梦AI绘画是一个基于即梦AI绘画的快速绘图工具,能够通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词或参考图来生成图片,支持多种图片比例以及1K和2K分辨率设置。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: '即梦AI,AI绘画,文生图,图生图,AI绘画工具,必定AI,BuidAI,图片生成,开源AI系统,私有化部署,即梦4.0,绘画源码',
  openGraph: {
    title: '即梦AI绘画 - 一键生成 AI 图片 | 必定AI-BuidAI',
    description: '通过简单提示词快速生成高质量图像,风格覆盖广泛,写实、卡通、插画等皆可驾驭。支持纯文本提示词、多种图片比例和分辨率,让创作更简单。',
    images: ['/product/jmdraw.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '即梦AI绘画 - 一键生成 AI 图片 | 必定AI-BuidAI',
    description: '通过简单提示词快速生成高质量图像,风格覆盖广泛,支持纯文本提示词和多种图片比例。',
    images: ['/product/jmdraw.png'],
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
