import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// ============================================================
// 首屏关键组件 — 静态导入（用户第一眼可见的内容）
// ============================================================
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Leftright } from '@/components/common/Leftright'
import { Rightleft } from '@/components/common/Rightleft'
import { Solution } from '@/components/Solution'
import { Scenario } from '@/components/common/Scenario'
import Erlie from '@/components/common/Erlie'
import ServiceTabs from '@/components/ServiceTabs'

// ============================================================
// 首屏以下组件 — 动态导入（用户滚动到才加载）
// 每个组件都有 200px 高度的骨架屏占位，防止 CLS
// ============================================================

// 骨架屏占位组件
const SectionSkeleton = ({ height = 'h-[400px]' }: { height?: string }) => (
  <div className={`${height} w-full animate-pulse rounded-xl bg-gray-50`} />
)

// 视频轮播 — 含 4 个视频，动态导入减少首屏 JS
const VideoCarousel = dynamic(
  () => import('@/components/carousel/VideoCarousel').then(mod => ({ default: mod.VideoCarousel })),
  { loading: () => <SectionSkeleton height="h-[500px]" /> }
)

// 中段内容组件
const Accordion = dynamic(
  () => import('@/components/common/Accordion').then(mod => ({ default: mod.Accordion })),
  { loading: () => <SectionSkeleton /> }
)

const Price = dynamic(
  () => import('@/components/Price').then(mod => ({ default: mod.Price })),
  { loading: () => <SectionSkeleton /> }
)

const CallToAction = dynamic(() => import('@/components/BentoGrids'), {
  loading: () => <SectionSkeleton />,
})

// 后段内容组件
const Advantage = dynamic(() => import('@/components/Advantage'), {
  loading: () => <SectionSkeleton />,
})

const Customer = dynamic(
  () => import('@/components/common/Customer'),
  { loading: () => <SectionSkeleton /> }
)

const Faqs = dynamic(
  () => import('@/components/Faqs').then(mod => ({ default: mod.Faqs })),
  { loading: () => <SectionSkeleton /> }
)

const Logoclouds = dynamic(() => import('@/components/Logoclouds'), {
  loading: () => <SectionSkeleton height="h-[200px]" />,
})

const CatSections = dynamic(() => import('@/components/CatSections'), {
  loading: () => <SectionSkeleton />,
})

// 重动画组件 — 动态导入延迟加载
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <SectionSkeleton />,
})

const Zone = dynamic(() => import('@/components/Zone'), {
  loading: () => <SectionSkeleton />,
})

/**
 * 首页 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title:
    '优刻云计算_弹性云服务器_cvm轻量服务器_香港服务器_高防服务器_优刻云官网',
  alternates: {
    canonical: '/',
  },
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
        <Price />
        <PrimaryFeatures />
        <Leftright />
        <Rightleft />
        <Solution />
        <Erlie />
        <Scenario />
        <Accordion />
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
