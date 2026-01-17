import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: '小红书热门内容创作助手 - 开源免费的 AI 文案生成系统 | BuidAI',
  description: 'BuidAI 小红书助手是专为小红书平台内容创作者打造的运营工具,涵盖笔记创作、排版优化、标签推荐等功能。支持一键生成爆款标题与风格化推广文案、AI生成配图、视频封面制作,帮助用户提升笔记曝光与互动率。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: '小红书助手,小红书创作,AI文案生成,小红书爆款标题,小红书配图,内容创作工具,小红书运营,笔记生成,AI写作,小红书标签推荐,开源AI系统,私有化部署',
  openGraph: {
    title: '小红书热门内容创作助手 - 打造爆款笔记的神器 | BuidAI',
    description: '专为小红书创作者打造,一键生成爆款标题与风格化推广文案。支持 AI 生成配图、视频封面制作、智能匹配热门标签,提升笔记曝光与互动率。',
    images: ['/product/xhs.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小红书热门内容创作助手 - 打造爆款笔记的神器 | BuidAI',
    description: '专为小红书创作者打造,一键生成爆款标题与风格化推广文案,支持 AI 生成配图与智能标签推荐。',
    images: ['/product/xhs.png'],
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
