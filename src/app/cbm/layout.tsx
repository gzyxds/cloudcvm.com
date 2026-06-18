import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 裸金属云服务器页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: '裸金属云服务器_裸金属_弹性裸金属服务器_弹性物理服务器',
  description:
    '裸金属云服务器（CBM）是一种可弹性伸缩的高性能云服务器实例，拥有物理服务器性能无损、资源安全隔离等优点。使用该服务，获取物理服务器的时间将缩短至分钟级。将容量管理及运维工作交给优刻云，您可专注于业务创新。',
  keywords: [
    '裸金属',
    '裸金属云服务器',
    '弹性裸金属服务器',
    'CBM',
    '物理服务器',
    '高性能计算',
    '高性能云服务器',
    '物理隔离',
    '弹性伸缩',
    '专用服务器',
  ],
  openGraph: {
    title: '裸金属云服务器_裸金属_弹性裸金属服务器_弹性物理服务器',
    description:
      '裸金属云服务器（CBM）是一种可弹性伸缩的高性能云服务器实例，拥有物理服务器性能无损、资源安全隔离等优点。分钟级交付，弹性伸缩，助您专注业务创新。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '裸金属云服务器_裸金属_弹性裸金属服务器_弹性物理服务器',
    description:
      '裸金属云服务器（CBM）是一种可弹性伸缩的高性能云服务器实例，拥有物理服务器性能无损、资源安全隔离等优点。分钟级交付，弹性伸缩。',
  },
}

/**
 * 裸金属云服务器页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 * @param children - 子组件内容
 */
export default function CBMLayout({
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
