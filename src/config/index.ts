/**
 * SEO 配置模块索引文件
 * 统一导出所有 SEO 相关配置和工具函数
 */

export { seoConfig } from './seo.config'
export { generateRobots } from './robots.config'
export { generateSitemap } from './sitemap.config'

// 类型导出
export type { MetadataRoute } from 'next'

/**
 * 页面配置类型定义
 */
export interface PageConfig {
  path: string
  priority: number
  changefreq: 'daily' | 'weekly' | 'monthly'
}

/**
 * SEO 配置工具函数
 */
export const seoUtils = {
  /**
   * 获取完整的站点 URL
   * @param path 路径
   * @returns 完整 URL
   */
  getFullUrl: (path: string = '') => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudcvm.com'
    return `${baseUrl}${path}`
  },

  /**
   * 获取页面配置
   * @param path 页面路径
   * @returns 页面配置
   */
  getPageConfig: (path: string): PageConfig | undefined => {
    const { seoConfig } = require('./seo.config')
    return seoConfig.pages.find((page: PageConfig) => page.path === path)
  },

  /**
   * 验证 URL 是否在 sitemap 中
   * @param url URL 地址
   * @returns 是否包含
   */
  isUrlInSitemap: (url: string): boolean => {
    const { seoConfig } = require('./seo.config')
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudcvm.com'
    const path = url.replace(baseUrl, '')
    return seoConfig.pages.some((page: PageConfig) => page.path === path)
  },
}
