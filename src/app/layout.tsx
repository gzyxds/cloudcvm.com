import { type Metadata } from 'next'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Top from '@/components/common/Top'
import Analytics from '@/components/Analytics'
import { seoConfig } from '@/config/seo.config'

/**
 * 根据配置文件生成 SEO 元数据
 * 使用集中配置管理，确保全站 SEO 一致性
 */
export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.site.url),
  title: {
    template: '%s_' + seoConfig.site.name,
    default: seoConfig.site.title,
  },
  description: seoConfig.site.description,
  keywords: seoConfig.site.keywords,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: seoConfig.site.name }],
  creator: seoConfig.site.name,
  publisher: seoConfig.site.name,
  verification: seoConfig.verification,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    ...seoConfig.openGraph,
    url: seoConfig.site.url,
    siteName: seoConfig.site.name,
    title: seoConfig.site.title,
    description: seoConfig.site.description,
  },
  twitter: {
    ...seoConfig.twitter,
    title: seoConfig.site.title,
    description: seoConfig.site.description,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logos/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180' },
    ],
  },
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
          content="width=device-width, initial-scale=1"
        />
        {/* 搜索引擎验证 */}
        {seoConfig.verification.google && (
          <meta
            name="google-site-verification"
            content={seoConfig.verification.google}
          />
        )}
        {seoConfig.verification.baidu && (
          <meta
            name="baidu-site-verification"
            content={seoConfig.verification.baidu}
          />
        )}
        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: seoConfig.site.name,
              url: seoConfig.site.url,
              logo: `${seoConfig.site.url}/images/logos/logo.svg`,
              description: seoConfig.site.description,
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Chinese',
              },
              sameAs: [seoConfig.site.url],
            }),
          }}
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
