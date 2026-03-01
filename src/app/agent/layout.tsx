import type { Metadata } from 'next'

/**
 * 代理合作页面 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title: '代理合作_云计算渠道代理_优刻云代理计划',
  description:
    '优刻云代理合作计划，面向全国招募渠道合作伙伴，提供云服务器全产品线代理、5-7折优惠价格、7x24小时技术支持与完善的营销支持。',
  keywords: [
    '云计算代理',
    '云服务器代理',
    '渠道合作',
    '代理合作',
    '云产品代理',
    '优刻云代理',
    '云计算合作伙伴',
    '云计算渠道',
  ],
  openGraph: {
    title: '代理合作_云计算渠道代理_优刻云代理计划',
    description:
      '优刻云代理合作计划，面向全国招募渠道合作伙伴，提供云服务器全产品线代理、5-7折优惠价格、7x24小时技术支持与完善的营销支持。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '代理合作_云计算渠道代理_优刻云代理计划',
    description:
      '优刻云代理合作计划，面向全国招募渠道合作伙伴，提供云服务器全产品线代理、5-7折优惠价格、7x24小时技术支持与完善的营销支持。',
  },
}

/**
 * 代理合作页面布局组件
 *
 * @param children 页面子组件内容
 * @returns {JSX.Element} 页面布局
 */
export default function AgentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
