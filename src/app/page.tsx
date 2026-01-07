import type { Metadata } from 'next'

// 布局组件
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// 媒体展示组件
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Hero from '@/components/Hero'

// 功能特性组件
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Leftright } from '@/components/common/Leftright'
import { Rightleft } from '@/components/common/Rightleft'
import { Solution } from '@/components/Solution'
import { Scenario } from '@/components/common/Scenario'
import Erlie from '@/components/common/Erlie'
import { Accordion } from '@/components/common/Accordion'

// 商业组件
import Price from '@/components/Price'
import ServiceTabs from '@/components/ServiceTabs'
import CallToAction from '@/components/BentoGrids'

// 数据展示组件
import Advantage from '@/components/Advantage'
import Testimonials from '@/components/Testimonials'
import Customer from '@/components/common/Customer'
import Zone from '@/components/Zone'

// 信息组件
import { Faqs } from '@/components/Faqs'
import Logoclouds from '@/components/Logoclouds'
import CatSections from '@/components/CatSections'

/**
 * 首页 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title:
    '优刻云计算_弹性云服务器_cvm轻量服务器_香港服务器_高防服务器_优刻云官网',
  description:
    '【优刻云计算】 云计算云服务器基础设施服务提供商、为数百万中小微企业和开发者降低全球化上云成本、提供优刻云服务器、 弹性云服务器、CVM轻量云服务器、 云主机CVM 、 香港云服务器、云虚拟主机、免备案海外空间、服务器租用一站式服务',
  keywords: ['优刻云计算', '优刻云服务器', '优刻云官网', '优刻云弹性云服务器', '轻量云服务器', '优刻云数据中心', '香港免备案服务器', '国内高防服务器'],
}

/**
 * 首页组件 - 云计算服务平台主页
 *
 * 页面结构按照用户浏览路径和转化漏斗设计：
 * 1. 视觉冲击 → 功能展示 → 解决方案 → 商业转化 → 社会证明 → 行动引导
 *
 * @returns {JSX.Element} 完整的首页布局
 */
export default function Home() {
  return (
    <>
      <Header />
      <VideoCarousel />
      <main>
        <Hero />
        <ServiceTabs />
        <PrimaryFeatures />
        <Leftright />
        <Rightleft />
        <Solution />
        <Erlie />
        <Scenario />
        <Accordion />
        <Price />

        <CallToAction />
        <Advantage />
        <Testimonials />
        <Customer />
        <Zone />
        <Faqs />
        <Logoclouds />
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
