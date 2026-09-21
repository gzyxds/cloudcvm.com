import type { Metadata } from 'next'
import { SiteShell } from '@/components/layout/SiteShell'

export const metadata: Metadata = {
  title: '隐私政策',
  description:
    '优刻云计算隐私政策：说明我们如何收集、使用、存储和保护您的个人信息，以及您享有的相关权利。',
  keywords: ['隐私政策', '个人信息保护', '优刻云计算', 'CloudCVM', '数据安全', 'Cookie政策'],
  openGraph: {
    title: '隐私政策_优刻云计算',
    description: '优刻云计算隐私政策：说明我们如何收集、使用、存储和保护您的个人信息。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '隐私政策_优刻云计算',
    description: '优刻云计算隐私政策：说明我们如何收集、使用、存储和保护您的个人信息。',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>
}
