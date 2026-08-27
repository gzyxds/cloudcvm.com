import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 关于我们页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '关于我们',
  description:
    '优刻云计算（CloudCVM）是一家独立运营的云计算服务品牌，专注为开发者和企业提供稳定、弹性、高性价比的云服务器与算力基础设施。',
  keywords: [
    '关于我们',
    '优刻云计算',
    'CloudCVM',
    '云计算服务商',
    '云服务器',
    '算力基础设施',
    '公司介绍',
    '企业服务',
  ],
  openGraph: {
    title: '关于我们_优刻云计算',
    description:
      '优刻云计算（CloudCVM）是一家独立运营的云计算服务品牌，专注为开发者和企业提供稳定、弹性的云算力基础设施。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们_优刻云计算',
    description:
      '优刻云计算（CloudCVM）是一家独立运营的云计算服务品牌，专注为开发者和企业提供稳定、弹性的云算力基础设施。',
  },
}

/**
 * 关于我们页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 */
export default function AboutLayout({
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
