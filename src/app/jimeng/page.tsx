import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: '即梦AI - 开源免费的 AI 视频生成系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI 即梦AI是一款快速生成视频的工具,用户只需输入文字描述或上传参考图,即可快速生成风格多样的短视频。支持纯文本提示词或上传参考图来生成视频,支持生成不同的视频比例、分辨率(720P、1080P)。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: '即梦AI,AI视频生成,文生视频,图生视频,视频生成工具,必定AI,BuidAI,视频制作,开源AI系统,私有化部署,即梦4.0,视频生成源码',
  openGraph: {
    title: '即梦AI - 一键生成 AI 视频 | 必定AI-BuidAI',
    description: '输入文字描述或上传参考图,即可快速生成风格多样的短视频。支持纯文本提示词、多种视频比例和分辨率,让创作更简单。',
    images: ['/product/jimeng.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '即梦AI - 一键生成 AI 视频 | 必定AI-BuidAI',
    description: '输入文字描述或上传参考图,即可快速生成风格多样的短视频,支持纯文本提示词和多种视频比例。',
    images: ['/product/jimeng.png'],
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
