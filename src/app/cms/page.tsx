import CMSContent from './CMSContent'

/**
 * 页面元数据
 */
export const metadata = {
  title: 'CMS内容管理系统 - 企业级内容管理解决方案',
  description:
    '优刻云计算 CMS内容管理系统，为企业提供专业的内容创作、管理、发布一体化解决方案。支持多站点管理、SEO优化、响应式设计，助力企业数字化转型。',
  keywords: ['CMS', '内容管理系统', '企业CMS', '网站管理', '内容发布', '多站点管理'],
}

/**
 * CMS页面主组件
 */
export default function CMSPage() {
  return <CMSContent />
}
