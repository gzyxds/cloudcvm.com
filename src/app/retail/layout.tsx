import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 零售行业页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '零售行业解决方案_智慧零售系统_新零售数字化转型平台',
  description:
    '专业的零售行业数字化解决方案提供商，提供智慧零售系统、新零售技术平台、零售管理系统等全方位服务。助力传统零售企业数字化转型，提升运营效率，优化客户体验，实现业务增长。',
  keywords: [
    '零售行业解决方案',
    '智慧零售系统',
    '零售数字化转型',
    '零售管理系统',
    '新零售技术',
    '零售云服务',
    '智能零售平台',
    '零售业务优化',
  ],
  openGraph: {
    title: '零售行业解决方案_智慧零售系统_新零售数字化转型平台',
    description:
      '专业的零售行业数字化解决方案提供商，提供智慧零售系统、新零售技术平台、零售管理系统等全方位服务。助力传统零售企业数字化转型，提升运营效率，优化客户体验，实现业务增长。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '零售行业解决方案_智慧零售系统_新零售数字化转型平台',
    description:
      '专业的零售行业数字化解决方案提供商，提供智慧零售系统、新零售技术平台、零售管理系统等全方位服务。助力传统零售企业数字化转型，提升运营效率，优化客户体验，实现业务增长。',
  },
}

/**
 * 零售行业页面布局组件
 * 为零售行业解决方案页面提供专用的SEO配置和布局结构
 * 包含统一的导航栏和页脚
 * @param children - 子组件内容
 */
export default function RetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
