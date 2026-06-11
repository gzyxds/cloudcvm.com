import VideoPageContent from './VideoContent'
import type { Metadata } from 'next'

/**
 * 页面元数据
 */
export const metadata: Metadata = {
  title:
    '短剧系统源码_短剧小程序APP开发_短剧平台系统_国内外微短剧小程序- 优刻云',
  description:
    '全新升级，精心打造的旗舰版短剧系统，2024年热门爆火产品。支持完善的投流功能、广告回传功能、自定义充值套餐等多维度营销数据。拥有750+上线案例，稳定运营，案例真实可靠。',
  keywords: [
    '短剧系统',
    '短剧小程序',
    '短剧APP',
    '短剧平台',
    '微短剧',
    '视频系统',
  ],
  openGraph: {
    title: '短剧系统源码_短剧小程序APP开发_短剧平台系统- 优刻云',
    description:
      '全新升级，精心打造的旗舰版短剧系统，2024年热门爆火产品。支持完善的投流功能、广告回传功能、自定义充值套餐等多维度营销数据。',
    type: 'website',
  },
}

/**
 * 短剧系统页面主组件
 * 展示短剧系统的完整功能和特性
 * @returns JSX.Element
 */
export default function VideoPage() {
  return <VideoPageContent />
}
