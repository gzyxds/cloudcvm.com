import type { Metadata } from 'next'

/**
 * 服务保障页面 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title: '服务保障_7x24云端护航_优刻云技术支持',
  description:
    '优刻云服务保障中心，提供7x24小时技术支持、在线工单、热线电话与在线客服服务，覆盖备案与退款全流程，确保上云无忧。',
  keywords: [
    '服务保障',
    '优刻云技术支持',
    '7x24技术支持',
    '在线工单',
    '热线电话',
    '在线客服',
    '免费备案',
    '无忧退款',
  ],
  openGraph: {
    title: '服务保障_7x24云端护航_优刻云技术支持',
    description:
      '优刻云服务保障中心，提供7x24小时技术支持、在线工单、热线电话与在线客服服务，覆盖备案与退款全流程，确保上云无忧。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '服务保障_7x24云端护航_优刻云技术支持',
    description:
      '优刻云服务保障中心，提供7x24小时技术支持、在线工单、热线电话与在线客服服务，覆盖备案与退款全流程，确保上云无忧。',
  },
}

/**
 * 服务保障页面布局组件
 *
 * @param children 页面子组件内容
 * @returns {JSX.Element} 页面布局
 */
export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
