import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
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
// 轻量应用服务器产品接口定义
interface ServerProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    bandwidth: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// 轻量应用服务器产品数据
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '轻量应用服务器',
    subtitle: '4核4G3M',
    specs: {
      cpu: '4核4G3M',
      memory: '4GB',
      storage: '80GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '北京', '广州', '南京'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 2,
    name: '轻量应用服务器',
    subtitle: '2核2G3M',
    specs: {
      cpu: '2核2G3M',
      memory: '2GB',
      storage: '40GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折',
  },
  {
    id: 3,
    name: '轻量应用服务器',
    subtitle: '2核4G6M',
    specs: {
      cpu: '2核4G6M',
      memory: '4GB',
      storage: '100GB SSD',
      bandwidth: '6Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折',
  },
  {
    id: 4,
    name: '轻量应用服务器',
    subtitle: '4核8G10M',
    specs: {
      cpu: '4核8G10M',
      memory: '8GB',
      storage: '180GB SSD',
      bandwidth: '10Mbps',
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '轻量应用服务器',
    subtitle: '4核8G12M',
    specs: {
      cpu: '4核8G12M',
      memory: '8GB',
      storage: '200GB SSD',
      bandwidth: '12Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折',
  },
  {
    id: 6,
    name: '轻量应用服务器',
    subtitle: '4核16G14M',
    specs: {
      cpu: '4核16G14M',
      memory: '16GB',
      storage: '300GB SSD',
      bandwidth: '14Mbps',
    },
    regions: ['广州', '上海', '北京'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折',
  },
  {
    id: 7,
    name: '轻量应用服务器',
    subtitle: '8核16G18M',
    specs: {
      cpu: '8核16G18M',
      memory: '16GB',
      storage: '500GB SSD',
      bandwidth: '18Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折',
  },
  {
    id: 8,
    name: '轻量应用服务器',
    subtitle: '8核32G22M',
    specs: {
      cpu: '8核32G22M',
      memory: '32GB',
      storage: '800GB SSD',
      bandwidth: '22Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折',
  },
]
// 页面元数据配置
export const metadata: Metadata = {
  title: '云服务器ECS_云主机_云计算服务器_弹性云服务器_轻量应用服务器_优刻云',
  description:
    '优刻云云服务器ECS，提供弹性计算能力，支持多种实例规格，满足不同业务需求。',
  keywords: [
    '虚拟主机',
    'ECS',
    '云计算',
    '轻量应用服务器',
    '云服务器',
    '弹性计算',
    '云主机',
    '服务器租用',
    '网站托管',
    '云端部署',
    '高可用',
    '弹性伸缩',
    '安全防护',
    '优刻云',
    '新手建站',
    '便捷管理',
  ],
}

// ECS 云计算服务核心特性配置
const ecsFeatures = [
  {
    name: '弹性伸缩',
    description:
      '根据业务需求自动调整计算资源，支持秒级扩容和缩容，确保应用性能的同时优化成本控制。',
    icon: ChartBarIcon,
  },
  {
    name: '高可用架构',
    description:
      '多可用区部署，99.95% 的服务可用性保障，自动故障转移和负载均衡，确保业务连续性。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description:
      '企业级安全防护体系，包括网络隔离、访问控制、数据加密和安全审计，全方位保护您的数据安全。',
    icon: LockClosedIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '资源监控',
    summary: '实时监控云资源使用情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示CPU、内存、存储等关键指标的使用情况，并在达到阈值时及时发出预警通知。',
    icon: ChartBarIcon,
  },
  {
    name: '弹性伸缩',
    summary: '根据业务负载自动调整计算资源，确保性能与成本的最优平衡。',
    description:
      '智能感知业务高峰，自动扩展或收缩计算资源，既保证服务质量，又避免资源浪费。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary: '全方位的云安全防护，为您的业务保驾护航。',
    description:
      '提供多层次安全防护，包括访问控制、数据加密、安全组策略等，全面保障您的云上资产安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '一键部署',
    description:
      '通过简单的推送操作即可完成应用部署，大幅提升开发效率，让您专注于业务创新而非运维工作。',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL证书管理',
    description:
      '自动化SSL证书申请、部署和续期，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '数据库备份',
    description:
      '智能化数据备份策略，支持定时备份和增量备份，确保您的数据安全无忧。',
    icon: ServerIcon,
  },
]

// ECS 图片轮播 Hero 组件 - 展示 ECS 云计算服务的主要图片内容
function ECSVideoHero() {
  const ecsVideoSlide = [
    {
      id: 1,
      title: 'ECS 云计算服务',
      subtitle: '重新定义云端计算',
      description:
        '体验下一代云计算服务，让弹性计算为您的业务发展提供强大支持。从基础设施管理到应用部署，ECS 让云端计算变得前所未有的简单。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '开始体验 ECS',
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
      customSlides={ecsVideoSlide}
      className=""
    />
  )
}

// Leftright 组件 - 左右分栏展示
function ECSLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              更快部署
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              云计算让业务更高效
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
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
          <div className="mt-12 sm:mt-16">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-3 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  云计算控制台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-2 border border-gray-200/50 bg-gray-50/80 p-2 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                  资源管理中心
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  实时监控云计算资源
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-2 space-y-2">
                {leftRightFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <svg
                            className="h-3 w-3 text-blue-600 dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-xs font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-1">
                            <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${50 + index * 15}%` }}
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
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>系统正常</span>
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
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
                更快部署
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                云计算助力业务腾飞
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
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
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  云计算控制台
                </div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="mb-3 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  资源管理中心
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  实时监控和管理您的云计算资源
                </p>
              </div>

              {/* 模拟功能模块 */}
              <div className="mb-3 grid grid-cols-1 gap-3">
                {leftRightFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="group border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                            <svg
                              className="h-4 w-4 text-blue-600 dark:text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <IconComponent />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-1 truncate text-xs text-gray-600 dark:text-gray-400">
                            {feature.summary}
                          </p>
                          <div className="mt-2">
                            <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
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
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span>系统正常</span>
                  </span>
                  <span>CPU: 45%</span>
                  <span>内存: 62%</span>
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
function ECSRightleftSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="block lg:hidden">
        <div className="mx-auto max-w-2xl">
          {/* 移动端文本内容 */}
          <div className="text-center">
            <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">
              更快部署
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              云计算为您的业务赋能
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg/8 dark:text-gray-300">
              借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
            </p>
          </div>

          {/* 移动端功能列表 */}
          <div className="mt-8">
            <dl className="space-y-4 text-sm/6 text-gray-600 sm:space-y-6 sm:text-base/7 dark:text-gray-400">
              {rightLeftFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <IconComponent
                        aria-hidden="true"
                        className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* 移动端模拟界面 */}
          <div className="mt-8 sm:mt-12">
            <div className="relative overflow-hidden border border-white/30 bg-white/20 p-3 shadow-lg backdrop-blur-xl sm:p-4 dark:border-gray-700/30 dark:bg-gray-900/20">
              {/* 移动端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5"></div>
                </div>
                <div className="text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                  云计算控制台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-2 border border-white/20 bg-white/30 p-2 backdrop-blur-sm sm:mb-3 sm:p-3 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base dark:text-white">
                  资源管理中心
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  实时监控和管理您的云计算资源
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-2 grid grid-cols-1 gap-2 sm:mb-3 sm:gap-3">
                {rightLeftFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="group border border-white/10 bg-white/20 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:p-3 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="flex-shrink-0">
                          <div className="flex h-5 w-5 items-center justify-center bg-blue-500/80 backdrop-blur-sm sm:h-6 sm:w-6 dark:bg-blue-600/80">
                            <IconComponent className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-0.5 truncate text-xs text-gray-600 dark:text-gray-300">
                            {feature.description.slice(0, 20)}...
                          </p>
                          <div className="mt-1">
                            <div className="h-1 w-full bg-gray-300/50 dark:bg-gray-600/50">
                              <div
                                className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
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

              {/* 移动端模拟状态栏 */}
              <div className="flex flex-col space-y-2 border border-white/20 bg-white/30 p-2 text-xs text-gray-600 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:space-y-0 dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                    <span>系统正常</span>
                  </span>
                  <span className="hidden sm:inline">CPU: 45%</span>
                  <span className="hidden sm:inline">内存: 62%</span>
                </div>
                <div className="flex items-center justify-between sm:block">
                  <div className="flex space-x-2 sm:hidden">
                    <span>CPU: 45%</span>
                    <span>内存: 62%</span>
                  </div>
                  <span className="text-right">最后更新: 刚刚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 平板端功能特性展示组件
  function FeaturesTablet() {
    return (
      <div className="hidden md:block lg:hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* 平板端文本内容 */}
            <div className="order-2 md:order-1">
              <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">
                更快部署
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 md:text-4xl dark:text-white">
                云计算为您的业务赋能
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
              </p>
              <dl className="mt-8 space-y-6 text-base/7 text-gray-600 dark:text-gray-400">
                {rightLeftFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-8 sm:pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <IconComponent
                          aria-hidden="true"
                          className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>

            {/* 平板端模拟界面 */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden border border-white/30 bg-white/20 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/30 dark:bg-gray-900/20">
                {/* 平板端模拟界面头部 */}
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-800 dark:text-white">
                    云计算控制台
                  </div>
                </div>

                {/* 平板端模拟界面标题栏 */}
                <div className="mb-2 border border-white/20 bg-white/30 p-3 backdrop-blur-sm sm:mb-3 dark:border-gray-600/20 dark:bg-gray-800/30">
                  <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg dark:text-white">
                    资源管理中心
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    实时监控和管理您的云计算资源
                  </p>
                </div>

                {/* 平板端模拟功能模块 */}
                <div className="mb-2 grid grid-cols-1 gap-2 sm:mb-3 sm:gap-3">
                  {rightLeftFeatures.slice(0, 4).map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div
                        key={feature.name}
                        className="group border border-white/10 bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:p-4 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="flex h-6 w-6 items-center justify-center bg-blue-500/80 backdrop-blur-sm sm:h-8 sm:w-8 dark:bg-blue-600/80">
                              <IconComponent className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-medium text-gray-800 sm:text-base dark:text-white">
                              {feature.name}
                            </h4>
                            <p className="mt-0.5 truncate text-xs text-gray-600 dark:text-gray-300">
                              {feature.description.slice(0, 30)}...
                            </p>
                            <div className="mt-1">
                              <div className="h-1 w-full bg-gray-300/50 dark:bg-gray-600/50">
                                <div
                                  className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
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

                {/* 平板端模拟状态栏 */}
                <div className="flex flex-col space-y-2 border border-white/20 bg-white/30 p-2 text-xs text-gray-600 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:space-y-0 dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-gray-300">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="flex items-center space-x-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                      <span>系统正常</span>
                    </span>
                    <span>CPU: 45%</span>
                    <span>内存: 62%</span>
                  </div>
                  <div className="text-right">
                    <span>最后更新: 刚刚</span>
                  </div>
                </div>
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">
                更快部署
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
                云计算为您的业务赋能
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg/8 dark:text-gray-300">
                借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
              </p>
              <dl className="mt-8 max-w-xl space-y-6 text-sm leading-6 text-gray-600 sm:mt-10 sm:space-y-8 sm:text-base/7 lg:max-w-none dark:text-gray-400">
                {rightLeftFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
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
            <div className="relative w-full max-w-lg overflow-hidden border border-white/30 bg-white/20 p-3 shadow-lg backdrop-blur-xl sm:max-w-xl sm:p-4 lg:max-w-2xl dark:border-gray-700/30 dark:bg-gray-900/20">
              {/* 桌面端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                  云计算控制台
                </div>
              </div>

              {/* 桌面端模拟界面标题栏 */}
              <div className="mb-2 border border-white/20 bg-white/30 p-2 backdrop-blur-sm sm:mb-3 sm:p-3 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-sm font-semibold text-gray-800 sm:text-base dark:text-white">
                  资源管理中心
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  实时监控和管理您的云计算资源
                </p>
              </div>

              {/* 桌面端模拟功能模块 */}
              <div className="mb-2 grid grid-cols-1 gap-2 sm:mb-3 sm:gap-3">
                {rightLeftFeatures.slice(0, 3).map((feature, index) => (
                  <div
                    key={feature.name}
                    className="group border border-white/10 bg-white/20 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:p-3 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0">
                        <div className="flex h-5 w-5 items-center justify-center bg-blue-500/80 backdrop-blur-sm sm:h-6 sm:w-6 dark:bg-blue-600/80">
                          <feature.icon className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                          {feature.name}
                        </h4>
                        <p className="mt-0.5 truncate text-xs text-gray-600 dark:text-gray-300">
                          {feature.description.slice(0, 20)}...
                        </p>
                        <div className="mt-1">
                          <div className="h-1 w-full bg-gray-300/50 dark:bg-gray-600/50">
                            <div
                              className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                              style={{ width: `${60 + index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 桌面端模拟状态栏 */}
              <div className="flex flex-col space-y-2 border border-white/20 bg-white/30 p-2 text-xs text-gray-600 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:space-y-0 dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                    <span>系统正常</span>
                  </span>
                  <span className="hidden sm:inline">CPU: 45%</span>
                  <span className="hidden sm:inline">内存: 62%</span>
                </div>
                <div className="flex items-center justify-between sm:block">
                  <div className="flex space-x-2 sm:hidden">
                    <span>CPU: 45%</span>
                    <span>内存: 62%</span>
                  </div>
                  <span className="text-right">最后更新: 刚刚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="rightleft-features" aria-label="云计算功能特性展示">
      <div className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <FeaturesMobile />
          <FeaturesTablet />
          <FeaturesDesktop />
        </div>
      </div>
    </section>
  )
}

// ECS 页面主组件
export default function ECSPage() {
  return (
    <>
      <Header />
      <main>
        <ECSVideoHero />

        {/* 轻量应用服务器专区 - 直接嵌入的代码 */}
        <div className="min-h-screen bg-gray-50 pt-24">
          {/* 页面标题 */}
          <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">
                轻量应用服务器专区
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-orange-500">4核4G起步</span>
                ，新用户低至
                <span className="font-medium text-orange-500">79元/年</span>
                <span className="ml-2 cursor-pointer text-blue-600 underline">
                  活动规则&gt;
                </span>
              </p>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serverProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex h-full transform flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]"
                >
                  {/* 产品标题和标签 */}
                  <div className="border-b border-gray-100 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <svg
                        className="h-5 w-5 text-gray-400"
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
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.subtitle}
                      </span>
                      {product.isHot && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                      {product.isRecommended && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      建站、Web应用、电商网站等高性价比的选择
                    </p>
                  </div>

                  {/* 产品规格信息 */}
                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">规格</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900">
                          {product.specs.cpu}
                        </span>
                        <svg
                          className="h-4 w-4 text-gray-400"
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
                      <span className="text-sm text-gray-600">地域</span>
                      <span className="text-sm text-gray-900">
                        {product.regions.join('/')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">时长</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {product.duration}
                        </span>
                        <span className="rounded bg-red-100 px-1 py-0.5 text-xs text-red-600">
                          {product.discount}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">数量</span>
                      <div className="flex items-center gap-2">
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          −
                        </button>
                        <span className="w-8 text-center text-sm">1</span>
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 价格和折扣信息 */}
                  <div className="border-t border-gray-100 p-4">
                    {product.discount && (
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                          {product.discount}
                        </span>
                        <span className="text-xs text-gray-500">限1个</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">活动价:</span>
                        <span className="text-2xl font-bold text-red-600">
                          {product.currentPrice}
                        </span>
                        <span className="text-sm text-gray-600">元</span>
                        <span className="text-xs text-gray-500">
                          ¥{product.originalPrice.toFixed(2)}/月
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-600">日常价:</span>
                        <span className="text-sm text-gray-500">
                          {product.originalPrice} 元
                        </span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-2">
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded border border-blue-600 px-3 py-2 text-center text-sm text-blue-600 transition-colors hover:bg-blue-50"
                      >
                        加入购物车
                      </a>
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded bg-blue-600 px-3 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        立即购买
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ECSLeftrightSection />
        <ECSRightleftSection />

        {/* 产品优势卡片网格 */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                产品优势
              </h2>
              <p className="text-lg text-gray-600">
                专业云服务器，为您的业务提供全方位保障
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  灵活和弹性
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  根据业务的发展趋势，您可随时对云资源进行横向和纵向的伸缩，杜绝资源浪费
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  稳定和可靠
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  采用RAID和分布式三副本容灾进行数据保护，承诺99.95%的服务可用性，数据可靠性不低于99.9999%
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  高性能
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  全SSD部署，吞吐量达千兆每秒，随机读写2万IOPS，完美支持大文件高吞吐高IO并发
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  安全保障
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  免费提供5G
                  DDoS攻击防护，可增值服务抵御数百Gbps级流量攻击，免费提供云防火墙
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  简单易用
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  自主研发的云服务器管理系统，简单易用，管理云服务器就像管理您的计算机一样简单方便
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  节省成本
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  云服务器部署在云端，极大节省了您前期搭建基础网络设施的成本，和后期的维护成本
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  免费备案
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  便捷备案服务，备案最快一天审核，让您免除后顾之忧
                </p>
              </div>

              <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  服务无忧
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  7×24小时在线服务，5天无理由退款，百倍故障赔偿，让您随时随地服务放心，用的安心
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 优势对比表格 */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                优势对比
              </h2>
            </div>

            {/* 移动端卡片布局 - 显示核心对比信息 */}
            <div className="block space-y-6 lg:hidden">
              {[
                {
                  title: '存储模式',
                  other: '本机存储/存储阵列柜',
                  ours: '分布式存储、SSD硬盘',
                  traditional: '单块硬盘存储',
                },
                {
                  title: '交付时间',
                  other: '几分钟至几小时',
                  ours: '约5分钟',
                  traditional: '1-2天',
                },
                {
                  title: '升级拓展',
                  other: '部分不支持减配',
                  ours: '按需弹性扩容、减配',
                  traditional: '扩展需停机',
                },
                {
                  title: '攻击防护',
                  other: '没有免费防御',
                  ours: '免费5G防御，最高500G',
                  traditional: '没有免费防御',
                },
                {
                  title: '控制面板',
                  other: '管理功能复杂',
                  ours: '简单易用，功能强大',
                  traditional: '无',
                },
                {
                  title: '服务支持',
                  other: '仅支持工单',
                  ours: '7×24小时全方位服务',
                  traditional: '仅支持工单',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white transition-colors duration-200 hover:border-blue-300"
                >
                  <div className="border-b border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="border border-blue-200 bg-blue-50 p-3">
                      <div className="mb-1 text-sm font-medium text-blue-800">
                        优刻云
                      </div>
                      <div className="text-sm text-blue-700">{item.ours}</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          其他云
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.other}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          传统服务器
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.traditional}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC端完整表格布局 */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-40 border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      对比项
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      其他云
                    </th>
                    <th className="border-b border-blue-600 bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white">
                      优刻云
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      传统服务器
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      存储模式
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      亚马逊/阿里云：分布式存储
                      <br />
                      一线云主机厂商：存储阵列柜
                      <br />
                      中小型云厂商：本机存储
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      分布式存储、SSD硬盘存储
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      单块硬盘存储
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      购买灵活度
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      按需购买
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      按需购买
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      可选配置范围较小
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      交付时间
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      几分钟至几小时
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      约5分钟
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">1-2天</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      升级拓展
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      部分不支持减配
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      按需弹性扩容、减配
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      扩展需停机，比较麻烦
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      控制面板
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      管理功能复杂
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      功能强大又简单易用的控制面板平台，自助重装系统、
                      <br />
                      更换操作系统、自助软/硬重启，VNC远程、云防火墙等
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">无</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      数据备份
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      提供一个备份副本
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      每周自动备份一次
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      自行解决
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      ARP攻击及Mac欺骗
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      部分未解决ARP等
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      自动阻断
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      很难阻止MAC欺骗和ARP攻击
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      攻击防护
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      没有免费防御
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      免费5G防御，付费可提供最高500G防护
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      没有免费防御
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      在线修改管理员密码
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      在线完成
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      在线完成
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">不支持</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      内网
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      部分支持
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      自行架设硬件解决
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      负载均衡服务
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      部分支持
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      自行架设硬件解决
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      SLA
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      部分99.95%
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      99.95%
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">较低</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      服务
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持工单
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      7×24小时QQ、微信、电话、工单全方位服务
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持工单
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Advantage />
        <Solution />
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
