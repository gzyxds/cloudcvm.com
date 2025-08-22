import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '新零售社交电商解决方案 - 优刻云计算',
  description:
    '新零售社交电商解决方案，集直播、分销、拼团、砍价、抽奖等热门社交电商玩法，打通多端用户数据，构建全场景电商解决方案。',
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}