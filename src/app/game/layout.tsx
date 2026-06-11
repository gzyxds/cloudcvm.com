import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 游戏行业解决方案页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '游戏行业解决方案_游戏云服务_低延迟高防护全球部署平台',
  description:
    '专业的游戏行业云计算解决方案，为游戏开发者提供稳定、低延迟、高防护的云上部署方案，覆盖开服、扩容、安全防护与全球运营全生命周期，助力 MMORPG、MOBA、FPS 等各类型游戏流畅运行。',
  keywords: [
    '游戏行业解决方案',
    '游戏云服务',
    '游戏服务器托管',
    '低延迟游戏云',
    'DDoS 游戏防护',
    '游戏全球部署',
    '游戏出海云服务',
    '实时对战加速',
    '游戏弹性扩容',
    'MMORPG 云部署',
  ],
  openGraph: {
    title: '游戏行业解决方案_游戏云服务_低延迟高防护全球部署平台',
    description:
      '专业的游戏行业云计算解决方案，为游戏开发者提供稳定、低延迟、高防护的云上部署方案，覆盖游戏全生命周期运营需求。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '游戏行业解决方案_游戏云服务_低延迟高防护全球部署平台',
    description:
      '专业的游戏行业云计算解决方案，为游戏开发者提供稳定、低延迟、高防护的云上部署方案，覆盖游戏全生命周期运营需求。',
  },
}

/**
 * 游戏行业解决方案页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 * @param children - 子组件内容
 */
export default function GameLayout({
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
