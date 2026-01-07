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
// 独立物理服务器产品接口定义
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

// 独立物理服务器产品数据
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
    name: '独立物理服务器',
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
  title: '独立服务器_裸金属云服务器_物理服务器_专用服务器_高性能服务器_优刻云',
  description:
    '优刻云独立物理服务器，提供专属硬件资源，支持多种配置规格，满足高性能业务需求。',
  keywords: [
    '独立服务器',
    '裸金属服务器',
    '物理服务器',
    '专用服务器',
    '高性能服务器',
    '裸金属云',
    '物理主机',
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

// 独立物理服务器核心特性配置
const bareMetalFeatures = [
  {
    name: '专属硬件',
    description:
      '提供完全独占的物理服务器资源，无虚拟化开销，确保最佳性能表现和资源利用率。',
    icon: ChartBarIcon,
  },
  {
    name: '高性能架构',
    description:
      '企业级硬件配置，99.9% 的硬件可用性保障，专业运维团队7x24小时监控，确保业务稳定运行。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description:
      '物理级安全隔离，包括硬件防火墙、访问控制、数据加密和安全审计，全方位保护您的数据安全。',
    icon: LockClosedIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '硬件监控',
    summary: '实时监控物理服务器硬件状态，智能预警系统。',
    description:
      '通过专业监控工具展示CPU、内存、硬盘、网络等硬件指标的实时状态，并在硬件异常时及时发出预警通知。',
    icon: ChartBarIcon,
  },
  {
    name: '性能优化',
    summary: '根据业务需求优化硬件配置，确保最佳性能表现。',
    description:
      '提供多种硬件配置选择，支持CPU、内存、存储的灵活搭配，满足不同业务场景的性能需求。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary: '全方位的物理级安全防护，为您的业务保驾护航。',
    description:
      '提供物理隔离、硬件防火墙、访问控制、数据加密等多层次安全防护，全面保障您的服务器资产安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '快速交付',
    description:
      '专业的硬件预配置和系统安装服务，快速交付可用的物理服务器，让您专注于业务部署而非硬件配置。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '安全加固',
    description:
      '提供系统安全加固、防火墙配置、安全补丁管理等服务，为您的物理服务器提供全方位的安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '数据保护',
    description:
      '提供RAID配置、数据备份、灾难恢复等数据保护方案，确保您的关键数据安全可靠。',
    icon: ServerIcon,
  },
]

// 独立物理服务器图片轮播 Hero 组件 - 展示独立物理服务器的主要图片内容
function BareMetalVideoHero() {
  const bareMetalVideoSlide = [
    {
      id: 1,
      title: '独立物理服务器',
      subtitle: '重新定义专属计算',
      description:
        '体验下一代独立物理服务器，让专属硬件资源为您的业务发展提供强大支持。从裸金属部署到应用优化，独立服务器让高性能计算变得前所未有的简单。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '开始体验独立服务器',
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
      customSlides={bareMetalVideoSlide}
      className=""
    />
  )
}

// Leftright 组件 - 左右分栏展示
function BareMetalLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-blue-400">
              更快部署
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
              独立服务器让业务更强大
            </p>
            <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
              借助独立物理服务器技术，轻松实现高性能计算与专业应用部署，提升企业核心竞争力。
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
            <div className="relative w-full max-w-lg overflow-hidden border border-slate-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg rounded-xl sm:max-w-xl sm:p-6 dark:border-gray-700/30 dark:bg-white/10">
              {/* 模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-slate-800 sm:text-sm dark:text-white">
                  服务器控制台
                </div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="mb-3 border border-slate-200/50 bg-slate-50/80 p-3 backdrop-blur-sm rounded-lg sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-base font-semibold text-slate-800 sm:mb-2 sm:text-lg dark:text-white">
                  服务器管理中心
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm dark:text-gray-300">
                  实时监控和管理您的独立物理服务器资源
                </p>
              </div>

              {/* 模拟功能模块 */}
              <div className="mb-3 grid grid-cols-1 gap-3 sm:mb-4 sm:gap-4">
                {leftRightFeatures.slice(0, 4).map((feature, index) => (
                  <div
                    key={feature.name}
                    className="group border border-slate-200/30 bg-slate-50/60 p-3 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-slate-100/60 sm:p-4 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
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
                    <span>系统正常</span>
                  </span>
                  <span className="hidden sm:inline">CPU: 35%</span>
                  <span className="hidden sm:inline">内存: 48%</span>
                </div>
                <div className="flex items-center justify-between sm:block">
                  <div className="flex space-x-2 sm:hidden">
                    <span>CPU: 35%</span>
                    <span>内存: 48%</span>
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

  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-blue-400">
                更快部署
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
                独立服务器让业务更强大
              </p>
              <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
                借助独立物理服务器技术，轻松实现高性能计算与专业应用部署，提升企业核心竞争力。
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
            <div className="relative w-full overflow-hidden border border-slate-200 bg-white/80 p-4 shadow-xl backdrop-blur-lg rounded-xl sm:p-6 lg:p-8 dark:border-gray-700/30 dark:bg-white/10">
              {/* 模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-slate-800 sm:text-sm dark:text-white">
                  服务器控制台
                </div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="mb-3 border border-slate-200/50 bg-slate-50/80 p-3 backdrop-blur-sm rounded-lg sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-base font-semibold text-slate-800 sm:mb-2 sm:text-lg dark:text-white">
                  服务器管理中心
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm dark:text-gray-300">
                  实时监控和管理您的独立物理服务器资源
                </p>
              </div>

              {/* 模拟功能模块 */}
              <div className="mb-3 grid grid-cols-2 gap-3 sm:mb-4 sm:gap-4">
                {leftRightFeatures.slice(0, 4).map((feature, index) => (
                  <div
                    key={feature.name}
                    className="group border border-slate-200/30 bg-slate-50/60 p-3 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-slate-100/60 sm:p-4 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
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

              {/* 模拟服务器状态监控 */}
              <div className="mb-3 border border-slate-200/50 bg-slate-50/80 p-3 backdrop-blur-sm rounded-lg sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h4 className="mb-2 text-sm font-semibold text-slate-800 sm:text-base dark:text-white">
                  服务器性能监控
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-slate-700 dark:text-gray-300">CPU 使用率</span>
                      <span className="text-xs font-medium text-slate-700 dark:text-gray-300">35%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200/50 dark:bg-gray-600/50">
                      <div className="h-1.5 rounded-full bg-[#0055ff] dark:bg-blue-400" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-slate-700 dark:text-gray-300">内存使用率</span>
                      <span className="text-xs font-medium text-slate-700 dark:text-gray-300">48%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200/50 dark:bg-gray-600/50">
                      <div className="h-1.5 rounded-full bg-[#0055ff] dark:bg-blue-400" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-slate-700 dark:text-gray-300">存储使用率</span>
                      <span className="text-xs font-medium text-slate-700 dark:text-gray-300">62%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200/50 dark:bg-gray-600/50">
                      <div className="h-1.5 rounded-full bg-[#0055ff] dark:bg-blue-400" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 模拟状态栏 */}
              <div className="flex items-center justify-between border border-slate-200/30 bg-slate-50/60 p-2 text-xs text-slate-600 backdrop-blur-sm rounded-lg sm:p-3 dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#10B981] sm:h-2 sm:w-2"></div>
                    <span>系统正常</span>
                  </span>
                </div>
                <span>最后更新: 刚刚</span>
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
      <Container>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

// Rightleft 组件 - 右左分栏展示
function BareMetalRightleftSection() {
  return (
    <section id="rightleft-features" aria-label="独立物理服务器功能特性展示">
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-[#0055ff] dark:text-indigo-400">
                  更快部署
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl dark:text-white">
                  独立服务器让业务更强大
                </p>
                <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-300">
                  借助先进的独立物理服务器技术，轻松实现高性能计算与专业应用部署，大幅提升企业核心竞争力和运营效率。
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
              <div className="relative w-full max-w-lg overflow-hidden border border-slate-200 bg-white/80 p-4 shadow-lg backdrop-blur-xl rounded-xl sm:max-w-xl sm:p-6 lg:max-w-2xl dark:border-gray-700/30 dark:bg-gray-900/20">
                {/* 模拟界面头部 */}
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-800 sm:text-sm dark:text-white">
                    物理服务器控制台
                  </div>
                </div>

                {/* 模拟界面标题栏 */}
                <div className="mb-3 border border-slate-200/50 bg-slate-50/80 p-3 backdrop-blur-sm rounded-lg sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                  <h3 className="mb-1 text-base font-semibold text-slate-800 sm:mb-2 sm:text-lg dark:text-white">
                    服务器资源管理中心
                  </h3>
                  <p className="text-xs text-slate-600 sm:text-sm dark:text-gray-300">
                    实时监控和管理您的独立物理服务器资源
                  </p>
                </div>

                {/* 模拟功能模块 */}
                <div className="mb-3 grid grid-cols-1 gap-3 sm:mb-4 sm:gap-4">
                  {rightLeftFeatures.slice(0, 4).map((feature, index) => (
                    <div
                      key={feature.name}
                      className="group border border-slate-200/30 bg-slate-50/60 p-3 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-slate-100/60 sm:p-4 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
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
                      <span>系统正常</span>
                    </span>
                    <span className="hidden sm:inline">CPU: 35%</span>
                    <span className="hidden sm:inline">内存: 48%</span>
                  </div>
                  <div className="flex items-center justify-between sm:block">
                    <div className="flex space-x-2 sm:hidden">
                      <span>CPU: 35%</span>
                      <span>内存: 48%</span>
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

// 独立物理服务器页面主组件
export default function BareMetalPage() {
  return (
    <>
      <Header />
      <main>
        <BareMetalVideoHero />

        {/* 独立物理服务器专区 - 直接嵌入的代码 */}
        <div className="min-h-screen bg-slate-50">
          {/* 页面标题 */}
          <div className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-[1800px] px-4 pt-24 pb-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                独立物理服务器专区
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                <span className="font-medium text-[#F59E0B]">4核4G起步</span>
                ，新用户低至
                <span className="font-medium text-[#F59E0B]">79元/年</span>
                <span className="ml-2 cursor-pointer text-[#0055ff] hover:text-[#0043cc] underline">
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
                        <span className="text-xl font-bold text-slate-900 tracking-tight">
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
                        高性能计算、大数据处理、游戏服务器等专业应用的首选
                      </p>
                    </div>

                    {/* 产品规格信息 */}
                    <div className="space-y-4 p-6 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">规格</span>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-slate-900 font-mono text-sm">
                            {product.specs.cpu}
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
                          className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium text-slate-600 transition-all hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                        >
                          加入购物车
                        </a>
                        <a
                          href="https://console.cloudcvm.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg bg-[#0055ff] px-3 py-2 text-center text-sm font-medium text-white transition-all hover:bg-[#0043cc] hover:shadow-md hover:shadow-blue-500/20"
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

        <BareMetalLeftrightSection />
        <BareMetalRightleftSection />

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
