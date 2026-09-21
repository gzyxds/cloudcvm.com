import type { MetadataRoute } from 'next'
import { seoConfig } from './seo.config'

/**
 * Robots.txt 配置生成器
 * 集中管理 robots.txt 的生成逻辑
 */
export function generateRobots(): MetadataRoute.Robots {
  const baseUrl = seoConfig.site.url

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // 允许所有目录
        disallow: ['/api/', '/_next/', '/admin/', '/private/', '/.git/', '/node_modules/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '360Spider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Sogou web spider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

export default generateRobots
