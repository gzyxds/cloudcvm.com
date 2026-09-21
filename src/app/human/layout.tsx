import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '艺创AI_AI数字人系统源码_AI开源saas数字人系统_艺创AI数字人系统',
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: ['AI数字人系统,数字人源码,数字人saas系统,开源数字人系统,AI数字人平台,虚拟数字人系统'],
}

export default function HumanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
