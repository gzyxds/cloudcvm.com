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
  CurrencyYenIcon,
  CursorArrowRaysIcon,
  DocumentCheckIcon,
  HeartIcon,
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

// 产品优势数据
const productAdvantages = [
  {
    name: '灵活和弹性',
    description: '根据业务的发展趋势，您可随时对云资源进行横向和纵向的伸缩，杜绝资源浪费',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '稳定和可靠',
    description: '采用RAID和分布式三副本容灾进行数据保护，承诺99.95%的服务可用性，数据可靠性不低于99.9999%',
    icon: ServerIcon,
  },
  {
    name: '高性能',
    description: '全SSD部署，吞吐量达千兆每秒，随机读写2万IOPS，完美支持大文件高吞吐高IO并发',
    icon: CpuChipIcon,
  },
  {
    name: '安全保障',
    description: '免费提供5G DDoS攻击防护，可增值服务抵御数百Gbps级流量攻击，免费提供云防火墙',
    icon: ShieldCheckIcon,
  },
  {
    name: '简单易用',
    description: '自主研发的云服务器管理系统，简单易用，管理云服务器就像管理您的计算机一样简单方便',
    icon: CursorArrowRaysIcon,
  },
  {
    name: '节省成本',
    description: '云服务器部署在云端，极大节省了您前期搭建基础网络设施的成本，和后期的维护成本',
    icon: CurrencyYenIcon,
  },
  {
    name: '免费备案',
    description: '便捷备案服务，备案最快一天审核，让您免除后顾之忧',
    icon: DocumentCheckIcon,
  },
  {
    name: '服务无忧',
    description: '7×24小时在线服务，5天无理由退款，百倍故障赔偿，让您随时随地服务放心，用的安心',
    icon: HeartIcon,
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

// Leftright 组件 - 左右分栏展示 (Linear Style Refactored)
function ECSLeftrightSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* 文本区域 */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-bold tracking-wide text-[#0055ff] uppercase mb-3">
              更快部署
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-6">
              云计算助力业务腾飞
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
            </p>

            <dl className="space-y-6">
              {leftRightFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-10 group">
                  <dt className="font-semibold text-[#0F172A] dark:text-white block mb-1">
                    <div className="absolute left-0 top-1 w-6 h-6 flex items-center justify-center rounded-lg bg-[#eff6ff] dark:bg-slate-800 text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors duration-300">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 模拟界面区域 - Linear Style */}
          <div className="relative lg:pl-10">
             {/* 装饰背景 */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#eff6ff] to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl transform rotate-3 scale-105 opacity-50 -z-10"></div>

             <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                {/* 窗口头部 */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">CONSOLE</div>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                   <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">资源概览</h4>
                        <p className="text-xs text-slate-500 mt-1">实时监控您的云端资产状态</p>
                      </div>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        运行正常
                      </span>
                   </div>

                   <div className="space-y-3">
                      {leftRightFeatures.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="group flex items-center gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[#0055ff]/30 dark:hover:border-[#0055ff]/30 hover:shadow-md transition-all duration-300">
                           <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#0055ff] group-hover:scale-105 transition-transform">
                             <feature.icon className="w-5 h-5" />
                           </div>
                           <div className="flex-1 min-w-0">
                             <div className="flex justify-between items-center mb-1">
                               <span className="text-sm font-medium text-slate-900 dark:text-white">{feature.name}</span>
                               <span className="text-xs text-slate-400 font-mono">{85 + idx * 5}%</span>
                             </div>
                             <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                               <div
                                 className="h-full bg-[#0055ff] rounded-full shadow-[0_0_10px_rgba(0,85,255,0.3)]"
                                 style={{ width: `${85 + idx * 5}%` }}
                               ></div>
                             </div>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* 底部状态栏 */}
                   <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-mono">
                      <div className="flex gap-4">
                        <span>CPU: 24%</span>
                        <span>MEM: 4.2GB</span>
                      </div>
                      <span>LATENCY: 12ms</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Rightleft 组件 - 右左分栏展示 (Linear Style Refactored)
function ECSRightleftSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* 模拟界面区域 (放在左侧) */}
          <div className="relative mb-12 lg:mb-0 lg:order-1 order-2 lg:pr-10">
             {/* 装饰背景 */}
             <div className="absolute inset-0 bg-gradient-to-tl from-[#eff6ff] to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl transform -rotate-3 scale-105 opacity-50 -z-10"></div>

             <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                {/* 窗口头部 */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">DEPLOY</div>
                </div>

                {/* 内容区域 - 部署列表 */}
                <div className="p-6">
                   <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">部署中心</h4>
                        <p className="text-xs text-slate-500 mt-1">自动化运维与持续集成</p>
                      </div>
                      <button className="text-xs bg-[#0055ff] text-white px-3 py-1.5 rounded-lg hover:bg-[#0043cc] transition-colors shadow-sm hover:shadow-md">
                        + 新建部署
                      </button>
                   </div>

                   <div className="space-y-3">
                      {rightLeftFeatures.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="group flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[#0055ff]/30 dark:hover:border-[#0055ff]/30 hover:shadow-md transition-all duration-300">
                           <div className="mt-1 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{feature.name}</h5>
                             <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{feature.description}</p>
                           </div>
                           <span className="text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                             SUCCESS
                           </span>
                        </div>
                      ))}
                   </div>

                   {/* 底部日志 */}
                   <div className="mt-6 p-3 bg-slate-950 rounded-lg font-mono text-[10px] text-slate-400 leading-relaxed border border-slate-800">
                      <p className="text-emerald-400">&gt; build success in 2.4s</p>
                      <p>&gt; deploying to production...</p>
                      <p className="animate-pulse">&gt; verifying health check...</p>
                   </div>
                </div>
             </div>
          </div>

          {/* 文本区域 (放在右侧) */}
          <div className="lg:order-2 order-1 lg:pl-10">
            <h2 className="text-sm font-bold tracking-wide text-[#0055ff] uppercase mb-3">
              高效运维
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-6">
              云计算为您的业务赋能
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
            </p>

            <dl className="space-y-8">
              {rightLeftFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-12 group">
                  <dt className="font-bold text-[#0F172A] dark:text-white block mb-2 text-lg">
                    <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center rounded-xl bg-[#eff6ff] dark:bg-slate-800 text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}

// 主页面组件
export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        <ECSVideoHero />

        {/* 产品展示区域 - Bento Grid 风格 */}
        <section className="border-b border-gray-200 bg-white py-16 sm:py-24 dark:border-gray-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                云服务器产品
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                高性能、高可用的云服务器，满足您的各种业务需求
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serverProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 dark:border-gray-800 dark:bg-zinc-900 dark:hover:border-blue-400"
                >
                  {/* 悬停时的微弱背景渐变装饰 */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-900 dark:to-zinc-800/50" />

                  {/* 产品头部 */}
                  <div className="relative z-10 border-b border-gray-200 bg-gray-50/50 p-4 dark:border-gray-800 dark:bg-zinc-900">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-gray-400">
                          {product.subtitle}
                        </p>
                      </div>
                      {product.isHot && (
                        <div className="flex items-center space-x-1">
                          <div className="h-1.5 w-1.5 bg-red-500"></div>
                          <span className="text-[10px] font-semibold tracking-wider text-red-600 uppercase">
                            HOT
                          </span>
                        </div>
                      )}
                      {product.isRecommended && (
                        <div className="flex items-center space-x-1">
                          <div className="h-1.5 w-1.5 bg-[#0055ff]"></div>
                          <span className="text-[10px] font-semibold tracking-wider text-[#0055ff] uppercase">
                            推荐
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 产品规格 */}
                  <div className="relative z-10 flex-1 space-y-3 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">CPU</span>
                      <span className="text-sm font-mono font-medium text-slate-900 dark:text-white">
                        {product.specs.cpu}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">内存</span>
                      <span className="text-sm font-mono font-medium text-slate-900 dark:text-white">
                        {product.specs.memory}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">存储</span>
                      <span className="text-sm font-mono font-medium text-slate-900 dark:text-white">
                        {product.specs.storage}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">带宽</span>
                      <span className="text-sm font-mono font-medium text-slate-900 dark:text-white">
                        {product.specs.bandwidth}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">地域</span>
                      <span className="text-sm text-slate-900 dark:text-white">
                        {product.regions.join('/')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">时长</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-900 dark:text-white">
                          {product.duration}
                        </span>
                        <span className="border border-red-200 bg-red-50 px-1 py-0.5 text-[10px] font-mono text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                          {product.discount}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">数量</span>
                      <div className="flex items-center gap-2">
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 hover:border-[#0055ff] hover:text-[#0055ff] hover:bg-[#eff6ff] transition-colors dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-zinc-800">
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-mono text-slate-900 dark:text-white">1</span>
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-slate-200 text-slate-500 hover:border-[#0055ff] hover:text-[#0055ff] hover:bg-[#eff6ff] transition-colors dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-zinc-800">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 价格和折扣信息 */}
                  <div className="relative z-10 border-t border-slate-100 p-4 dark:border-gray-800">
                    {product.discount && (
                      <div className="mb-2 flex items-center gap-2">
                        <span className="border border-red-200 bg-red-50 px-2 py-1 text-xs font-mono text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                          {product.discount}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-gray-400">限1个</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-slate-500">活动价:</span>
                        <span className="text-2xl font-mono font-bold text-red-600 dark:text-red-500">
                          {product.currentPrice}
                        </span>
                        <span className="text-sm text-slate-500">元</span>
                        <span className="text-xs font-mono text-slate-400 line-through dark:text-gray-400">
                          ¥{product.originalPrice.toFixed(2)}/月
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-slate-500">日常价:</span>
                        <span className="text-sm font-mono text-slate-400 dark:text-gray-400">
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
                        className="inline-block flex-1 rounded-lg border border-[#0055ff] px-3 py-2 text-center text-sm text-[#0055ff] transition-colors hover:bg-[#eff6ff] dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20"
                      >
                        加入购物车
                      </a>
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded-lg bg-[#0055ff] px-3 py-2 text-center text-sm text-white transition-colors hover:bg-[#0043cc] dark:bg-blue-500 dark:hover:bg-blue-600"
                      >
                        立即购买
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ECSLeftrightSection />
        <ECSRightleftSection />

        {/* 产品优势卡片网格 - Bento Grid 风格 */}
        <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-24 dark:border-gray-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                产品优势
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                专业云服务器，为您的业务提供全方位保障
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {productAdvantages.map((advantage) => (
                <div
                  key={advantage.name}
                  className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 dark:border-gray-800 dark:bg-zinc-900 dark:hover:border-blue-400"
                >
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-zinc-900 dark:to-zinc-800/50" />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff] transition-colors duration-300 group-hover:bg-[#0055ff] group-hover:text-white dark:bg-slate-800 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                      <advantage.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                      {advantage.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 优势对比表格 - Bento Grid 风格 */}
        <section className="border-b border-gray-200 bg-white py-16 sm:py-24 dark:border-gray-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
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
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 dark:border-gray-800 dark:bg-zinc-900 dark:hover:border-blue-400"
                >
                  <div className="border-b border-gray-200 bg-gray-50/50 px-4 py-3 dark:border-gray-800 dark:bg-zinc-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="border border-[#0055ff]/20 bg-[#eff6ff] px-3 py-3 dark:border-blue-800 dark:bg-blue-900/20">
                      <div className="mb-1 text-xs font-semibold tracking-wider text-[#0055ff] uppercase dark:text-blue-400">
                        优刻云
                      </div>
                      <div className="text-sm text-[#0055ff] dark:text-blue-300">{item.ours}</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex-1 border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-zinc-900">
                        <div className="mb-1 text-[10px] font-semibold tracking-wider text-slate-500 uppercase dark:text-gray-400">
                          其他云
                        </div>
                        <div className="text-xs text-slate-500 dark:text-gray-400">
                          {item.other}
                        </div>
                      </div>
                      <div className="flex-1 border border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-800 dark:bg-zinc-900">
                        <div className="mb-1 text-[10px] font-semibold tracking-wider text-slate-500 uppercase dark:text-gray-400">
                          传统服务器
                        </div>
                        <div className="text-xs text-slate-500 dark:text-gray-400">
                          {item.traditional}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC端完整表格布局 */}
            <div className="hidden overflow-hidden rounded-xl border border-gray-200 lg:block dark:border-gray-800">
              <table className="min-w-full">
                <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900">
                  <tr>
                    <th className="w-40 border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:border-gray-800 dark:text-white">
                      对比项
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:border-gray-800 dark:text-white">
                      其他云
                    </th>
                    <th className="border-b border-[#0055ff] bg-[#0055ff] px-6 py-4 text-center text-sm font-semibold text-white">
                      优刻云
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:border-gray-800 dark:text-white">
                      传统服务器
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-zinc-950">
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      存储模式
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      亚马逊/阿里云：分布式存储
                      <br />
                      一线云主机厂商：存储阵列柜
                      <br />
                      中小型云厂商：本机存储
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      分布式存储、SSD硬盘存储
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      单块硬盘存储
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      购买灵活度
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      按需购买
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      按需购买
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      可选配置范围较小
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      交付时间
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      几分钟至几小时
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      约5分钟
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">1-2天</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      升级拓展
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      部分不支持减配
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      按需弹性扩容、减配
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      扩展需停机，比较麻烦
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      控制面板
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      管理功能复杂
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      功能强大又简单易用的控制面板平台，自助重装系统、
                      <br />
                      更换操作系统、自助软/硬重启，VNC远程、云防火墙等
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">无</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      数据备份
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      提供一个备份副本
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      智能化数据备份策略，支持定时备份和增量备份，确保您的数据安全无忧
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      需要手动备份
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      攻击防护
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      部分提供免费防御
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      免费提供5G DDoS攻击防护，可增值服务抵御数百Gbps级流量攻击
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      没有免费防御
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-zinc-900">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-slate-900 dark:border-gray-800 dark:text-white">
                      服务支持
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      仅支持工单
                    </td>
                    <td className="border-l border-[#0055ff] bg-[#eff6ff] px-6 py-4 text-sm font-medium text-[#0055ff] dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      7×24小时全方位服务，5天无理由退款，百倍故障赔偿
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-gray-400">
                      仅支持工单
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 其他组件 */}
        <Solution />
        <ProductTraits />
        <Superiority />
        <Advantage />
        <Customer />
        <Faqs />
        <CatSections />
      </main>
      <Footer />
    </div>
  )
}
