import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Top from '@/components/common/Top'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    template: '%s_优刻云计算',
    default:
      '优刻云计算_弹性云服务器_cvm轻量服务器_香港服务器_高防服务器_优刻云官网',
  },
  description:
    '【优刻云计算】 云计算云服务器基础设施服务提供商、为数百万中小微企业和开发者降低全球化上云成本、提供优刻云服务器、 弹性云服务器、CVM轻量云服务器、 云主机CVM 、 香港云服务器、云虚拟主机、免备案海外空间、服务器租用一站式服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-CN"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased'
      )}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="flex h-full flex-col">
        <Analytics />
        {children}
        <Top />
      </body>
    </html>
  )
}
