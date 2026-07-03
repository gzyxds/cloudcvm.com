import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 关于我们页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '关于我们',
  description:
    '优刻云计算成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座。',
  keywords: [
    '关于我们',
    '优刻云计算',
    '云计算服务商',
    '大数据基础能力',
    '公司介绍',
    '企业服务',
  ],
  openGraph: {
    title: '关于我们_优刻云计算',
    description:
      '优刻云计算成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们_优刻云计算',
    description:
      '优刻云计算成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力。',
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
