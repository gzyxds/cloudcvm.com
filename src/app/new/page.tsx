import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Solution } from '@/components/Solution'
import BentoGrids from '@/components/BentoGrids'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Cardprice from '@/components/common/Cardprice'
import { Scenario } from '@/components/common/Scenario'
import ServiceTabs from '@/components/ServiceTabs'
import CatSections from '@/components/CatSections'
import { Faqs } from '@/components/Faqs'
import { Accordion } from '@/components/common/Accordion'
import { ProductTraits } from '@/components/common/ProductTraits'
import { Superiority } from '@/components/common/Superiority'

export const metadata: Metadata = {
  title: '优刻云最新活动-新用户特惠专场',

  keywords: [
    '最新活动',
    '新用户特惠',
    '云服务器',
    '云主机',
    '云计算',
    '优刻云',
    '新用户',
    '特惠',
    '活动',
  ],

  description:
    '优刻云最新活动-新用户特惠专场，新用户专享优惠，云服务器、云主机、云计算等云服务产品，欢迎来到优刻云官网。',
}

/**
 * 视频轮播 Hero 组件
 * 使用 VideoCarousel 组件，配置为单个视频展示
 */
function VideoHero() {
  // 自定义单个视频的轮播数据
  const singleVideoSlide = [
    {
      id: 1,
      title: '优刻云新用户',
      subtitle: '新用户特惠专场',
      description:
        '优刻云新用户特惠专场，新用户专享优惠，云服务器、云主机、云计算等云服务产品，欢迎来到优刻云官网。',
      backgroundType: 'video' as const,
      backgroundVideo: {
        src: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/48fc7d2b04a1c55b_1736500004142.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'auto' as const,
      },
      backgroundImage: '/images/carousel/HeaderCarousel1.jpg',
      textPosition: 'left' as const,
      buttonText: '立即参与',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false} // 单个视频不需要自动切换
      showProgress={false} // 单个视频不需要进度条
      showPlayButton={true} // 显示播放控制按钮
      showNavigation={false} // 不显示导航按钮
      height={{ base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[600px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false} // 不显示遮罩
      customSlides={singleVideoSlide}
      className=""
    />
  )
}

/**
 * 产品功能页面主组件
 * 展示产品的核心功能和特性
 */
export default function ProductPage() {
  return (
    <>
      <main>
        <Header /> {/* 导航栏 */}
        <VideoHero /> {/* Hero 区域 */}
        <Cardprice /> {/* 价格展示区域 */}
        <Accordion /> {/* 云计算功能特性展示 */}
        <ProductTraits /> {/* 产品特性展示 */}
        <Superiority /> {/* 产品优势展示 */}
        <BentoGrids /> {/* 功能展示区域 */}
        <Faqs /> {/* 常见问题解答 */}
        <CatSections /> {/* 底部立即购买 */}
      </main>
      <Footer />
    </>
  )
}
