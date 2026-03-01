import { MetadataRoute } from 'next'
import { seoConfig } from './seo.config'

/**
 * Sitemap.xml 配置生成器
 * 集中管理 sitemap.xml 的生成逻辑
 */
export function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.site.url
  const lastModified = new Date()

  // 使用配置文件中的页面路径
  const routes = seoConfig.pages.map((page) => {
    const normalizedPath =
      page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`
    return {
      url: `${baseUrl}${normalizedPath}`,
      lastModified,
      changeFrequency: page.changefreq as 'daily' | 'weekly' | 'monthly',
      priority: page.priority,
    }
  })

  return routes
}

export default generateSitemap
