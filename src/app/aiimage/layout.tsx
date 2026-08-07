import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 智言 AI 作图平台页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: 'AI作图 - AI图片视频创作平台,AI绘画系统,AI作图源码 | 智言AI',
  description:
    '智言 AI 作图是一套面向个人与团队的 AI 图片 / 视频创作平台。基于通用前后端底座，提供从模型接入、积分计费、在线创作，到素材管理、作品广场与开放 API 的完整闭环，支持文生图、图生图、文生视频等多类场景。',
  keywords: [
    '智言AI',
    'AI作图',
    'AI图片生成',
    'AI视频生成',
    '文生图',
    '图生图',
    '文生视频',
    'AI绘画系统',
    'AI创作平台',
    '积分计费',
    '开放API',
    '开源AI系统',
    '私有化部署',
  ],
  openGraph: {
    title: '智言 AI 作图 - AI 图片 / 视频创作平台',
    description:
      '面向个人与团队的 AI 图片 / 视频创作平台：从模型接入、积分计费到开放 API 的完整闭环，支持创作中心与对话创作两种方式。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '智言 AI 作图 - AI 图片 / 视频创作平台',
    description:
      '面向个人与团队的 AI 图片 / 视频创作平台，覆盖文生图、图生图、文生视频与开放 API 对接。',
  },
}

/**
 * 智言 AI 作图平台页面布局组件
 * @param children - 子组件内容
 */
export default function AiImageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
