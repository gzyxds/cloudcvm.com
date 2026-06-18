import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 轻量应用服务器页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '轻量应用服务器 Lighthouse_香港轻量服务器_海外轻量服务器',
  description:
    '轻量应用服务器（Lighthouse）是新一代开箱即用、面向轻量应用场景的云服务器产品，助力中小企业和开发者便捷高效的在云端构建网站、Web应用、小程序/小游戏、APP、电商应用、云盘/图床和各类开发测试环境，提供高性价套餐和高带宽流量包，精选应用镜像实现一键构建应用，提供极简上云体验。',
  keywords: [
    '轻量应用服务器',
    'Lighthouse',
    '香港轻量服务器',
    '海外轻量服务器',
    '轻量服务器',
    '轻量云',
    '腾讯轻量云',
    'VPS',
    '虚拟主机',
    '网站建设',
    'Web应用',
    '小程序',
    'APP开发',
    '电商应用',
    '云盘',
    '图床',
    '应用镜像',
  ],
  openGraph: {
    title: '轻量应用服务器 Lighthouse_香港轻量服务器_海外轻量服务器',
    description:
      '轻量应用服务器（Lighthouse）是新一代开箱即用、面向轻量应用场景的云服务器产品，助力中小企业和开发者便捷高效的在云端构建网站、Web应用、小程序/小游戏、APP、电商应用、云盘/图床和各类开发测试环境。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '轻量应用服务器 Lighthouse_香港轻量服务器_海外轻量服务器',
    description:
      '轻量应用服务器（Lighthouse）是新一代开箱即用、面向轻量应用场景的云服务器产品，助力中小企业和开发者便捷高效的在云端构建网站、Web应用、小程序/小游戏、APP、电商应用、云盘/图床和各类开发测试环境。',
  },
}

/**
 * 轻量应用服务器页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 * @param children - 子组件内容
 */
export default function LighthouseLayout({
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
