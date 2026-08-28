import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '服务条款',
  description:
    '优刻云计算服务条款：明确您在使用 CloudCVM 网站及相关服务时的权利、义务与责任。',
  keywords: [
    '服务条款',
    '用户协议',
    '使用条款',
    '优刻云计算',
    'CloudCVM',
    '平台服务协议',
  ],
  openGraph: {
    title: '服务条款_优刻云计算',
    description:
      '优刻云计算服务条款：明确您在使用 CloudCVM 网站及相关服务时的权利、义务与责任。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '服务条款_优刻云计算',
    description:
      '优刻云计算服务条款：明确您在使用 CloudCVM 网站及相关服务时的权利、义务与责任。',
  },
}

export default function TermsLayout({
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
