import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import { Container } from '@/components/Container'

import screenshotContacts from '@/images/screenshots/achievements.png'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import ProductTraits from '@/components/common/ProductTraits' // 产品特性
import Superiority from '@/components/common/Superiority' // 产品优势
import Advantage from '@/components/Advantage' // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域

// CDN产品接口定义
interface CDNProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    bandwidth: string
    traffic: string
    nodes: string
    https: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// CDN产品数据
const cdnProducts: CDNProduct[] = [
  {
    id: 1,
    name: 'CDN加速',
    subtitle: '基础版',
    specs: {
      bandwidth: '10Gbps',
      traffic: '100GB',
      nodes: '50+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美', '国内'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 2,
    name: 'CDN加速',
    subtitle: '入门版',
    specs: {
      bandwidth: '5Gbps',
      traffic: '50GB',
      nodes: '30+节点',
      https: '免费SSL',
    },
    regions: ['亚太', '国内', '欧美'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折',
  },
  {
    id: 3,
    name: 'CDN加速',
    subtitle: '标准版',
    specs: {
      bandwidth: '20Gbps',
      traffic: '500GB',
      nodes: '80+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折',
  },
  {
    id: 4,
    name: 'CDN加速',
    subtitle: '专业版',
    specs: {
      bandwidth: '50Gbps',
      traffic: '1TB',
      nodes: '100+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美', '国内', '南美'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: 'CDN加速',
    subtitle: '企业版',
    specs: {
      bandwidth: '100Gbps',
      traffic: '2TB',
      nodes: '150+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美', '国内', '南美'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折',
  },
  {
    id: 6,
    name: 'CDN加速',
    subtitle: '旗舰版',
    specs: {
      bandwidth: '200Gbps',
      traffic: '5TB',
      nodes: '200+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折',
  },
  {
    id: 7,
    name: 'CDN加速',
    subtitle: '至尊版',
    specs: {
      bandwidth: '500Gbps',
      traffic: '10TB',
      nodes: '300+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美', '国内', '南美'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折',
  },
  {
    id: 8,
    name: 'CDN加速',
    subtitle: '无限版',
    specs: {
      bandwidth: '1Tbps',
      traffic: '无限制',
      nodes: '500+节点',
      https: '免费SSL',
    },
    regions: ['全球', '亚太', '欧美', '国内', '南美'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折',
  },
]
// 页面元数据配置
export const metadata: Metadata = {
  title: 'CDN加速_内容分发网络_全球CDN_网站加速_静态资源加速_优刻云',
  description:
    '优刻云CDN内容分发网络，提供全球加速服务，支持网站加速、视频加速、下载加速等多种场景。',
  keywords: [
    'CDN',
    '内容分发网络',
    '网站加速',
    '全球CDN',
    '静态资源加速',
    '视频加速',
    '下载加速',
    '缓存加速',
    '边缘计算',
    'HTTPS加速',
    '防盗链',
    '流量统计',
    '回源优化',
    '优刻云',
    '访问加速',
    '性能优化',
  ],
}

// CDN 内容分发网络核心特性配置
const cdnFeatures = [
  {
    name: '全球加速',
    description:
      '覆盖全球的边缘节点，智能路由技术确保用户就近访问，大幅提升网站访问速度和用户体验。',
    icon: ChartBarIcon,
  },
  {
    name: '高可用保障',
    description:
      '99.9% 的服务可用性保障，多节点冗余备份，自动故障切换，确保内容分发服务稳定可靠。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description:
      '提供DDoS防护、防盗链、访问控制等多重安全机制，全方位保护您的内容资源安全。',
    icon: LockClosedIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '流量监控',
    summary: '实时监控CDN流量使用情况，智能分析系统。',
    description:
      '通过直观的仪表盘展示带宽、请求数、命中率等关键指标，并提供详细的访问统计和性能分析报告。',
    icon: ChartBarIcon,
  },
  {
    name: '智能缓存',
    summary: '根据访问模式自动优化缓存策略，确保最佳加速效果。',
    description:
      '智能识别热点内容，自动调整缓存时间和策略，既保证内容新鲜度，又最大化缓存命中率。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全防护',
    summary: '全方位的CDN安全防护，为您的内容保驾护航。',
    description:
      '提供多层次安全防护，包括防盗链、访问控制、DDoS防护等，全面保障您的内容资源安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '一键接入',
    description:
      '通过简单的CNAME配置即可完成CDN接入，快速启用全球加速服务，让您的网站瞬间提速。',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'HTTPS加速',
    description:
      '支持HTTPS协议加速，提供免费SSL证书，确保数据传输安全的同时享受极速访问体验。',
    icon: LockClosedIcon,
  },
  {
    name: '缓存优化',
    description:
      '智能缓存策略，支持多种缓存规则配置，最大化提升内容分发效率和用户访问速度。',
    icon: ServerIcon,
  },
]

// CDN 图片轮播 Hero 组件 - 展示 CDN 内容分发网络服务的主要图片内容
function CDNVideoHero() {
  const cdnVideoSlide = [
    {
      id: 1,
      title: '全球CDN加速',
      subtitle: '重新定义内容分发',
      description:
        'CDN内容分发网络安全高效，支持全球加速和智能缓存，访问极速，资源就近分发，适用于网站、视频、下载等场景。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '开始体验CDN加速',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false}
      showProgress={false}
      showPlayButton={false}
      showNavigation={false}
      height={{ base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[550px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false}
      customSlides={cdnVideoSlide}
      className=""
    />
  )
}

// Leftright 组件 - 左右分栏展示
function CDNLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-blue-400">
              更快加速
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
              CDN让访问更极速
            </p>
            <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
              借助全球CDN技术，轻松实现内容加速与性能优化，提升用户访问体验。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-slate-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-slate-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-[#0055ff] dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden border border-slate-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg rounded-xl dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-gray-300">
                  CDN控制台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-4 border border-slate-200/50 bg-slate-50/80 p-4 backdrop-blur-sm rounded-lg dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  CDN管理中心
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400">
                  实时监控CDN加速服务
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-4 space-y-4">
                {leftRightFeatures.slice(0, 2).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-slate-200/30 bg-slate-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-slate-100/60 rounded-lg dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-[#eff6ff] rounded dark:border-blue-800/50 dark:bg-blue-900/50">
                          <svg
                            className="h-5 w-5 text-[#0055ff] dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-slate-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-2">
                            <div className="h-1.5 w-full bg-slate-200/60 rounded-full dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-[#0055ff] rounded-full transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${60 + index * 15}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 移动端模拟状态栏 */}
              <div className="flex items-center justify-between border border-slate-200/30 bg-slate-50/60 p-3 text-xs text-slate-600 backdrop-blur-sm rounded-lg dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                  <span>CDN正常</span>
                </div>
                <span>刚刚更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-blue-400">
                更快加速
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
                CDN让访问更极速
              </p>
              <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
                借助全球CDN技术，轻松实现内容加速与性能优化，提升用户访问体验。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-slate-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-slate-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-[#0055ff] dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative overflow-hidden border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-lg rounded-xl dark:border-gray-700/50 dark:bg-white/10">
               {/* 模拟界面头部 */}
               <div className="mb-6 flex items-center justify-between">
                 <div className="flex items-center space-x-3">
                   <div className="h-3 w-3 rounded-full bg-red-400"></div>
                   <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                   <div className="h-3 w-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-sm font-medium text-slate-700 dark:text-gray-300">
                   CDN控制台
                 </div>
               </div>

               {/* 模拟界面标题栏 */}
               <div className="mb-4 border border-slate-200/50 bg-slate-50/80 p-4 backdrop-blur-sm rounded-lg dark:border-gray-700/50 dark:bg-gray-800/50">
                 <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                   CDN管理中心
                 </h3>
                 <p className="text-sm text-slate-600 dark:text-gray-400">
                   实时监控和管理您的CDN加速服务
                 </p>
               </div>

               {/* 模拟功能模块 */}
               <div className="mb-4 grid grid-cols-1 gap-4">
                 {leftRightFeatures.slice(0, 3).map((feature, index) => {
                   const IconComponent = feature.icon
                   return (
                     <div
                       key={feature.name}
                       className="group border border-slate-200/30 bg-slate-50/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-slate-100/60 rounded-lg dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                     >
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0">
                           <div className="flex h-8 w-8 items-center justify-center border border-blue-200/50 bg-[#eff6ff] rounded dark:border-blue-800/50 dark:bg-blue-900/50">
                             <svg
                               className="h-5 w-5 text-[#0055ff] dark:text-blue-400"
                               fill="none"
                               viewBox="0 0 36 36"
                               aria-hidden="true"
                             >
                               <IconComponent />
                             </svg>
                           </div>
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="truncate text-sm font-medium text-slate-900 dark:text-white">
                             {feature.name}
                           </h4>
                           <p className="mt-1 truncate text-xs text-slate-600 dark:text-gray-400">
                             {feature.summary}
                           </p>
                           <div className="mt-2">
                             <div className="h-1.5 w-full bg-slate-200/60 rounded-full dark:bg-gray-700/60">
                               <div
                                 className="h-1.5 bg-[#0055ff] rounded-full transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                                 style={{ width: `${60 + index * 10}%` }}
                               ></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   )
                 })}
               </div>

               {/* 模拟状态栏 */}
               <div className="flex items-center justify-between border border-slate-200/30 bg-slate-50/60 p-3 text-xs text-slate-600 backdrop-blur-sm rounded-lg dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                 <div className="flex items-center space-x-4">
                   <span className="flex items-center space-x-1">
                     <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                     <span>CDN正常</span>
                   </span>
                   <span>带宽: 85%</span>
                   <span>命中率: 92%</span>
                 </div>
                 <div className="text-right">
                   <span>最后更新: 刚刚</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container className="md:px-6 lg:px-8">
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

// Rightleft 组件 - 右左分栏展示
function CDNRightleftSection() {
  return (
    <section id="rightleft-features" aria-label="CDN功能特性展示">
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-indigo-400">
                  更快加速
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
                  CDN让访问更极速
                </p>
                <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
                  借助先进的CDN技术，轻松实现内容加速与性能优化，大幅提升用户访问体验和网站性能。
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-slate-600 lg:max-w-none dark:text-gray-400">
                  {rightLeftFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-slate-900 dark:text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-[#0055ff] dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-center lg:order-first lg:justify-end">
              <div className="relative w-full max-w-lg overflow-hidden border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl rounded-xl sm:max-w-xl lg:max-w-2xl dark:border-gray-700/30 dark:bg-gray-900/20">
                 {/* 模拟界面头部 */}
                 <div className="mb-6 flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                     <div className="h-3 w-3 rounded-full bg-red-400"></div>
                     <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                     <div className="h-3 w-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="text-xs font-medium text-slate-800 sm:text-sm dark:text-white">
                     CDN控制台
                   </div>
                 </div>

                 {/* 模拟界面标题栏 */}
                 <div className="mb-3 border border-slate-200/50 bg-slate-50/80 p-3 backdrop-blur-sm rounded-lg sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                   <h3 className="mb-1 text-base font-semibold text-slate-800 sm:mb-2 sm:text-lg dark:text-white">
                     CDN管理中心
                   </h3>
                   <p className="text-xs text-slate-600 sm:text-sm dark:text-gray-300">
                     实时监控和管理您的CDN加速服务
                   </p>
                 </div>

                 {/* 模拟功能模块 */}
                 <div className="mb-3 grid grid-cols-1 gap-3 sm:mb-4 sm:gap-4">
                   {rightLeftFeatures.slice(0, 3).map((feature, index) => (
                     <div
                       key={feature.name}
                       className="group border border-slate-200/30 bg-slate-50/60 p-3 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-slate-100/60 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                     >
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0">
                           <div className="flex h-6 w-6 items-center justify-center border border-blue-200/50 bg-[#eff6ff] rounded backdrop-blur-sm sm:h-8 sm:w-8 dark:bg-blue-600/80">
                             <feature.icon className="h-3 w-3 text-[#0055ff] sm:h-5 sm:w-5" />
                           </div>
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="truncate text-xs font-medium text-slate-800 sm:text-sm dark:text-white">
                             {feature.name}
                           </h4>
                           <p className="mt-0.5 truncate text-xs text-slate-600 sm:mt-1 dark:text-gray-300">
                             {feature.description.slice(0, 25)}...
                           </p>
                           <div className="mt-1.5 sm:mt-2">
                             <div className="h-1 w-full bg-slate-200/50 rounded-full sm:h-1.5 dark:bg-gray-600/50">
                               <div
                                 className="h-1 bg-[#0055ff] rounded-full transition-all duration-1000 group-hover:w-full sm:h-1.5 dark:bg-blue-400"
                                 style={{ width: `${60 + index * 10}%` }}
                               ></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>

                 {/* 模拟状态栏 */}
                 <div className="flex flex-col space-y-2 border border-slate-200/30 bg-slate-50/60 p-2 text-xs text-slate-600 backdrop-blur-sm rounded-lg sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:p-3 dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-gray-300">
                   <div className="flex items-center space-x-2 sm:space-x-4">
                     <span className="flex items-center space-x-1">
                       <div className="h-1.5 w-1.5 rounded-full bg-[#10B981] sm:h-2 sm:w-2"></div>
                       <span>CDN正常</span>
                     </span>
                     <span className="hidden sm:inline">带宽: 85%</span>
                     <span className="hidden sm:inline">命中率: 92%</span>
                   </div>
                   <div className="flex items-center justify-between sm:block">
                     <div className="flex space-x-2 sm:hidden">
                       <span>带宽: 85%</span>
                       <span>命中率: 92%</span>
                     </div>
                     <span className="text-right">最后更新: 刚刚</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CDN 页面主组件
export default function CDNPage() {
  return (
    <>
      <Header />
      <main>
        <CDNVideoHero />

        {/* CDN加速专区 - 直接嵌入的代码 */}
        <div className="min-h-screen bg-slate-50">
          {/* 产品网格 */}
          <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
            {/* 页面标题 */}
             <div className="mb-4 text-left pt-16 pb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-6">CDN加速专区</h1>
                <p className="text-lg text-slate-600">
                  <span className="font-medium text-[#F59E0B]">全球加速</span>
                  ，新用户低至
                  <span className="font-medium text-[#F59E0B]">79元/年</span>
                  <span className="ml-2 cursor-pointer text-[#0055ff] underline hover:text-[#0043cc]">
                    活动规则&gt;
                  </span>
                </p>
              </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cdnProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col h-full overflow-hidden bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* 产品标题和标签 */}
                    <div className="border-b border-slate-100 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-medium text-slate-900">
                          {product.name}
                        </h3>
                        <svg
                          className="h-5 w-5 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-slate-900">
                          {product.subtitle}
                        </span>
                        {product.isHot && (
                          <span className="rounded bg-red-50 px-2 py-0.5 text-xs text-red-600 border border-red-100">
                            申请特惠
                          </span>
                        )}
                        {product.isRecommended && (
                          <span className="rounded bg-[#eff6ff] px-2 py-0.5 text-xs text-[#0055ff] border border-blue-100">
                            申请特惠
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">
                        网站加速、视频分发、下载加速等高性价比的选择
                      </p>
                    </div>

                    {/* 产品规格信息 */}
                    <div className="space-y-4 p-6 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">带宽</span>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-slate-900 font-mono text-sm">
                            {product.specs.bandwidth}
                          </span>
                          <svg
                            className="h-4 w-4 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">流量</span>
                        <span className="font-medium text-slate-900 font-mono text-sm">
                          {product.specs.traffic}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">节点</span>
                        <span className="font-medium text-slate-900">
                          {product.specs.nodes}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">HTTPS</span>
                        <span className="font-medium text-slate-900">
                          {product.specs.https}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">地域</span>
                        <span className="text-sm text-slate-900">
                          {product.regions.join('/')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">时长</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-900">
                            {product.duration}
                          </span>
                          <span className="rounded bg-red-50 px-1.5 py-0.5 text-xs text-red-600 border border-red-100">
                            {product.discount}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">数量</span>
                        <div className="flex items-center gap-2">
                          <button className="flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            −
                          </button>
                          <span className="w-8 text-center text-sm text-slate-900">1</span>
                          <button className="flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 价格和折扣信息 */}
                    <div className="border-t border-slate-100 p-6 bg-slate-50/50">
                      {product.discount && (
                        <div className="mb-3 flex items-center gap-2">
                          <span className="rounded bg-red-50 px-2 py-0.5 text-xs text-red-600 border border-red-100">
                            {product.discount}
                          </span>
                          <span className="text-xs text-slate-500">限1个</span>
                        </div>
                      )}

                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-slate-500">活动价:</span>
                          <span className="text-2xl font-bold text-[#EF4444] tracking-tight">
                            {product.currentPrice}
                          </span>
                          <span className="text-sm text-slate-500">元</span>
                          <span className="text-xs text-slate-400 line-through ml-1">
                            ¥{product.originalPrice.toFixed(2)}/月
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs text-slate-400">
                            日常价: {product.originalPrice} 元
                          </span>
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      <div className="flex gap-3">
                        <a
                          href="https://console.cloudcvm.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-[#0055ff] px-4 py-2 text-center text-sm font-medium text-[#0055ff] transition-all hover:bg-[#eff6ff]"
                        >
                          加入购物车
                        </a>
                        <a
                          href="https://console.cloudcvm.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-[#0055ff] px-4 py-2 text-center text-sm font-medium text-white transition-all hover:bg-[#0043cc] hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          立即购买
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CDNLeftrightSection />
        <CDNRightleftSection />

        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />

        {/* === 客户与信任建立 === */}
        <Customer />

        {/* === 支持与帮助 === */}
        <Faqs />

        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
