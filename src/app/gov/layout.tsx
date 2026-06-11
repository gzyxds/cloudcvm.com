import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 政府行业解决方案页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '政府行业解决方案_政务云平台_数字政府_自主可控安全合规云方案',
  description:
    '专业的政府行业云计算解决方案，为各级政务部门提供自主可控、安全合规的云上部署方案，覆盖政务云、数据共享、智慧城市与国产化替代全场景，助力数字政府建设。',
  keywords: [
    '政府行业解决方案',
    '政务云',
    '数字政府',
    '政府上云',
    '自主可控',
    '安全合规',
    '政务信息化',
    '数据共享',
    '国产化替代',
    '等保合规',
    '智慧城市',
    '隐私计算',
    '信创云',
  ],
  openGraph: {
    title: '政府行业解决方案_政务云平台_数字政府_自主可控安全合规云方案',
    description:
      '专业的政府行业云计算解决方案，为各级政务部门提供自主可控、安全合规的云上部署方案，覆盖政务云、数据共享、智慧城市与国产化替代全场景。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '政府行业解决方案_政务云平台_数字政府_自主可控安全合规云方案',
    description:
      '专业的政府行业云计算解决方案，为各级政务部门提供自主可控、安全合规的云上部署方案，覆盖政务云、数据共享、智慧城市与国产化替代全场景。',
  },
}

/**
 * 政府行业解决方案页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 * @param children - 子组件内容
 */
export default function GovLayout({
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
