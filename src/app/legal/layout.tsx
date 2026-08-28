import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '法律声明',
  description:
    '优刻云计算法律声明：关于本网站内容、知识产权、免责声明、第三方链接及管辖法律的正式声明。',
  keywords: [
    '法律声明',
    '免责声明',
    '知识产权',
    '优刻云计算',
    'CloudCVM',
    '版权声明',
  ],
  openGraph: {
    title: '法律声明_优刻云计算',
    description:
      '优刻云计算法律声明：关于本网站内容、知识产权、免责声明及第三方链接的正式声明。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '法律声明_优刻云计算',
    description:
      '优刻云计算法律声明：关于本网站内容、知识产权、免责声明及第三方链接的正式声明。',
  },
}

export default function LegalLayout({
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
