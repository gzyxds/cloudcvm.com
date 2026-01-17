import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'


// ==================== Metadata ====================
export const metadata: Metadata = {
  title: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 必定AI-BuidAI',
  description: '必定AI-BuidAI Wan漫剧是一款智能AI视频生成工具，服务于创作者、动画爱好者及视觉工作者。提供"角色主演"和"首尾帧生成"两大创作模式，支持上传真人或虚拟形象作为模板，快速生成定制视频。无需专业门槛，轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'Wan漫剧,角色模板视频生成,首尾帧动画生成,AI视频生成,角色主演,智能视频创作,必定AI,BuidAI,视频制作工具,开源AI系统,私有化部署,视频生成源码,多镜头叙事',
  openGraph: {
    title: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 必定AI-BuidAI',
    description: '智能AI视频生成工具，支持角色主演和首尾帧生成两大创作模式，轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。',
    images: ['https://server.buildingai.cc/uploads/image/2026/01/28da090f-a363-48b6-9540-57cbc53d89df.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 必定AI-BuidAI',
    description: '智能AI视频生成工具，支持角色主演和首尾帧生成两大创作模式，无需专业门槛，轻松实现角色化叙事与自由视觉创作。',
    images: ['https://server.buildingai.cc/uploads/image/2026/01/28da090f-a363-48b6-9540-57cbc53d89df.png'],
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
