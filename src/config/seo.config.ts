/**
 * SEO 配置文件
 * 集中管理站点的 SEO 相关配置
 */

export const seoConfig = {
  // 站点基本信息
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudcvm.com',
    name: '优刻云计算',
    title: '优刻云计算_弹性云服务器_cvm 轻量服务器_香港服务器_高防服务器_优刻云官网',
    description: '【优刻云计算】云计算云服务器基础设施服务提供商、为数百万中小微企业和开发者降低全球化上云成本、提供优刻云服务器、弹性云服务器、CVM 轻量云服务器、云主机 CVM、香港云服务器、云虚拟主机、免备案海外空间、服务器租用一站式服务',
    keywords: [
      '优刻云计算',
      '优刻云服务器',
      '优刻云官网',
      '优刻云弹性云服务器',
      '轻量云服务器',
      '优刻云数据中心',
      '香港免备案服务器',
      '国内高防服务器',
    ],
  },

  // 搜索引擎验证
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    baidu: process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || '',
    '360': process.env.NEXT_PUBLIC_360_VERIFICATION || '',
    sogou: process.env.NEXT_PUBLIC_SOGOU_VERIFICATION || '',
    shenma: process.env.NEXT_PUBLIC_SHENMA_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
  },

  // 分析工具配置
  analytics: {
    baidu: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID || 'e42a07ed14d43b317d0711be87b19fe3',
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-RKPD2E6626',
    clarity: process.env.NEXT_PUBLIC_BING_CLARITY_ID || 'onu0z1x1vc',
  },

  // Open Graph 配置
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    site_name: '优刻云计算',
    images: [
      {
        url: '/images/logos/logo.jpg',
        width: 1200,
        height: 630,
        alt: '优刻云计算 - 专业云服务器提供商',
      },
    ],
  },

  // Twitter 卡片配置
  twitter: {
    card: 'summary_large_image',
    site: '@cloudcvm',
    creator: '@cloudcvm',
  },

  // 页面路径配置
  pages: [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/ai', priority: 0.9, changefreq: 'weekly' },
    { path: '/aiservice', priority: 0.9, changefreq: 'weekly' },
    { path: '/chat', priority: 0.8, changefreq: 'weekly' },
    { path: '/agent', priority: 0.8, changefreq: 'weekly' },
    { path: '/ecs', priority: 0.9, changefreq: 'weekly' },
    { path: '/cdn', priority: 0.8, changefreq: 'weekly' },
    { path: '/ssl', priority: 0.8, changefreq: 'weekly' },
    { path: '/host', priority: 0.8, changefreq: 'weekly' },
    { path: '/server', priority: 0.8, changefreq: 'weekly' },
    { path: '/windows', priority: 0.8, changefreq: 'weekly' },
    { path: '/cms', priority: 0.7, changefreq: 'weekly' },
    { path: '/contact', priority: 0.7, changefreq: 'monthly' },
    { path: '/support', priority: 0.7, changefreq: 'weekly' },
    { path: '/eccloud', priority: 0.6, changefreq: 'monthly' },
    { path: '/ecommerce', priority: 0.6, changefreq: 'monthly' },
    { path: '/human', priority: 0.6, changefreq: 'monthly' },
    { path: '/retail', priority: 0.6, changefreq: 'monthly' },
    { path: '/video', priority: 0.6, changefreq: 'monthly' },
    { path: '/work', priority: 0.6, changefreq: 'monthly' },
    { path: '/paper', priority: 0.5, changefreq: 'monthly' },
    { path: '/demo', priority: 0.5, changefreq: 'monthly' },
    { path: '/new', priority: 0.6, changefreq: 'weekly' },
    { path: '/banana', priority: 0.5, changefreq: 'monthly' },
    { path: '/drama', priority: 0.5, changefreq: 'monthly' },
    { path: '/jimeng', priority: 0.5, changefreq: 'monthly' },
    { path: '/jmdraw', priority: 0.5, changefreq: 'monthly' },
    { path: '/manju', priority: 0.5, changefreq: 'monthly' },
    { path: '/model', priority: 0.5, changefreq: 'monthly' },
    { path: '/music', priority: 0.5, changefreq: 'monthly' },
    { path: '/ppt', priority: 0.5, changefreq: 'monthly' },
    { path: '/resume', priority: 0.5, changefreq: 'monthly' },
    { path: '/sora', priority: 0.5, changefreq: 'monthly' },
    { path: '/videoclip', priority: 0.5, changefreq: 'monthly' },
    { path: '/xhs', priority: 0.5, changefreq: 'monthly' },
  ],
}

export default seoConfig
