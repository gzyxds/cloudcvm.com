import type { Metadata } from 'next'

/**
 * 联系我们页面 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title: '联系我们_优刻云客服支持_售前售后咨询',
  description:
    '优刻云提供专业售前咨询、1v1资深顾问指导与热情售后支持，覆盖在线工单、在线客服、热线电话与帮助中心，全渠道服务随时响应。',
  keywords: [
    '联系我们',
    '优刻云客服',
    '售前咨询',
    '售后支持',
    '在线工单',
    '在线客服',
    '热线电话',
    '帮助中心',
  ],
  openGraph: {
    title: '联系我们_优刻云客服支持_售前售后咨询',
    description:
      '优刻云提供专业售前咨询、1v1资深顾问指导与热情售后支持，覆盖在线工单、在线客服、热线电话与帮助中心，全渠道服务随时响应。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '联系我们_优刻云客服支持_售前售后咨询',
    description:
      '优刻云提供专业售前咨询、1v1资深顾问指导与热情售后支持，覆盖在线工单、在线客服、热线电话与帮助中心，全渠道服务随时响应。',
  },
}

/**
 * 联系我们页面布局组件
 *
 * @param children 页面子组件内容
 * @returns {JSX.Element} 页面布局
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
