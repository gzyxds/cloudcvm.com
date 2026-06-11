import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 金融行业解决方案页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '金融行业解决方案_金融云服务_金融科技数字化转型平台',
  description:
    '专业的金融行业云计算解决方案，面向P2P、小贷、典当、担保、众筹等小微金融企业，提供高可靠、安全合规、弹性灵活的云上金融架构，涵盖两地三中心高可用方案、安全防护及客户服务体系。',
  keywords: [
    '金融行业解决方案',
    '金融云服务',
    '金融科技',
    '金融数字化转型',
    '金融上云',
    '小微金融云计算',
    '金融安全合规',
    '高可用金融架构',
  ],
  openGraph: {
    title: '金融行业解决方案_金融云服务_金融科技数字化转型平台',
    description:
      '专业的金融行业云计算解决方案，面向P2P、小贷、典当、担保、众筹等小微金融企业，提供高可靠、安全合规、弹性灵活的云上金融架构。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '金融行业解决方案_金融云服务_金融科技数字化转型平台',
    description:
      '专业的金融行业云计算解决方案，面向P2P、小贷、典当、担保、众筹等小微金融企业，提供高可靠、安全合规、弹性灵活的云上金融架构。',
  },
}

/**
 * 金融行业解决方案页面布局组件
 * 提供统一的导航栏、页脚和SEO配置
 * @param children - 子组件内容
 */
export default function FinanceLayout({
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
