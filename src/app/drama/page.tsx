import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'AI短剧小说创作 - 开源免费的网文短剧写作系统 | 必定AI-BuidAI',
  description: '必定AI-BuidAI 网文短剧写作是一款专注于短剧本和网络小说创作的辅助工具,适合自媒体创作者、编剧、网络作家及内容团队使用。提供丰富的剧情模板、角色设定和冲突框架,支持创建无限量剧本、章节可视化拖拽、AI 扩写润色改写续写。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: 'AI短剧创作,网文写作,短剧本创作,网络小说,AI写作工具,必定AI,BuidAI,小说创作,剧本生成,AI扩写,AI润色,开源AI系统,私有化部署',
  openGraph: {
    title: 'AI 短剧小说创作 - 打造爆款短剧的神器 | 必定AI-BuidAI',
    description: '专为自媒体创作者、编剧、网络作家打造,支持创建无限量剧本、角色设定、章节可视化拖拽、AI 扩写润色改写续写。让短剧创作更高效、更系统。',
    images: ['/product/drama.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 短剧小说创作 - 打造爆款短剧的神器 | 必定AI-BuidAI',
    description: '专为自媒体创作者、编剧、网络作家打造,支持创建无限量剧本、角色设定、章节可视化拖拽、AI 扩写润色改写续写。',
    images: ['/product/drama.png'],
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
