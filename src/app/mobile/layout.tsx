import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 移动解决方案页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '移动解决方案_App/小程序/H5后端服务_API服务_移动应用开发平台',
  description:
    '专业的移动解决方案，为App、小程序和H5业务提供稳定API、弹性后端、文件存储和内容分发能力，助力企业快速构建移动应用生态。',
  keywords: [
    '移动解决方案',
    'App后端服务',
    '小程序开发',
    'H5应用开发',
    'API服务',
    '移动应用平台',
    '弹性后端',
    '文件存储',
    '内容分发',
  ],
  openGraph: {
    title: '移动解决方案_App/小程序/H5后端服务_API服务_移动应用开发平台',
    description:
      '专业的移动解决方案，为App、小程序和H5业务提供稳定API、弹性后端、文件存储和内容分发能力。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '移动解决方案_App/小程序/H5后端服务_API服务_移动应用开发平台',
    description:
      '专业的移动解决方案，为App、小程序和H5业务提供稳定API、弹性后端、文件存储和内容分发能力。',
  },
}

/**
 * 移动解决方案页面布局组件
 * 提供统一的导航栏、页脚和SEO配置
 * @param children - 子组件内容
 */
export default function MobileLayout({
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
