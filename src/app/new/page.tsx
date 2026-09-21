import { type Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Solution } from '@/components/sections/shared/Solution'
import BentoGrids from '@/components/sections/shared/BentoGrids'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import PriceCard from '@/components/sections/shared/PriceCard'
import { Scenario } from '@/components/sections/shared/Scenario'
import ServiceTabs from '@/components/sections/shared/ServiceTabs'
import CatSections from '@/components/sections/shared/CatSections'
import { Faqs } from '@/components/sections/shared/Faqs'
import { CapabilityGrid } from '@/components/sections/shared/CapabilityGrid'
import { ProductTraits } from '@/components/sections/shared/ProductTraits'
import { Superiority } from '@/components/sections/shared/Superiority'

export const metadata: Metadata = {
  title: '最新活动-新用户特惠专场',

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
 * 使用 VideoCarousel 组件内置的默认轮播数据展示
 */
function VideoHero() {
  return (
    <VideoCarousel
      autoPlay={false} // 默认数据共 4 张，需要自动轮播时改为 true
      showProgress={false} // 不显示进度条
      showNavigation={false} // 不显示导航按钮
      heightClass="h-[400px] md:h-[450px] lg:h-[600px]"
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
        <PriceCard /> {/* 价格展示区域 */}
        <CapabilityGrid /> {/* 云计算功能特性展示 */}
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
