import { type Metadata } from 'next'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CogIcon,
  BoltIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import Advantage from '@/components/Advantage' // 优势展示

// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例

// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题

// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域

// === 轮播组件 ===
import { VideoCarousel } from '@/components/carousel/VideoCarousel' // 视频轮播组件

// 页面元数据配置
export const metadata: Metadata = {
  title: '虚拟主机_适合新手小白_便捷管理_5分钟部署_优刻云官网',
  description:
    '优刻云虚拟主机，适合新手小白初次部署站点，预装了常见环境、数据库及管理工具，可以通过控制面板便捷地管理托管网站，仅需5分钟即可部署第一个站点！',
  keywords: [
    '虚拟主机',
    '主机',
    '云主机',
    '云服务器',
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
// 虚拟主机核心特性配置 - 用于展示产品核心优势
const hostingFeatures = [
  {
    name: '安全',
    description: 'WAF智能防入侵系统；IPS防火墙系统；防CC攻击模块；备用防护线路',
    icon: ShieldCheckIcon,
  },
  {
    name: '易用',
    description: '预装常见环境、数据库及管理工具；通过控制面板便捷管理托管网站',
    icon: CogIcon,
  },
  {
    name: '灵活',
    description: '多种套餐可选；可根据业务需求弹性调整；轻松应对业务快速变化',
    icon: BoltIcon,
  },
  {
    name: '高性能',
    description: '内置自研柠檬云防CDN；大陆延迟20-70MS左右；10Mbps网络带宽',
    icon: ChartBarIcon,
  },
  {
    name: '智能',
    description: 'KVM提供虚拟化技术支持；智能管理系统；自动化运维',
    icon: CpuChipIcon,
  },
  {
    name: '可靠',
    description:
      '部署于专业级T3+机房；采用最新redis数据库管理；确保业务连续性和数据安全',
    icon: ServerIcon,
  },
  {
    name: '稳定',
    description: '99.9%可用性保证；多重备份机制；7*24小时技术支持',
    icon: CloudArrowUpIcon,
  },
  {
    name: '安全防护',
    description: 'SSL证书加密；定期安全扫描；多层次安全防护体系',
    icon: LockClosedIcon,
  },
]

// 虚拟主机套餐配置 - 定义不同价格档位的产品方案
const hostingPlans = [
  {
    name: '入门主机',
    price: '￥1.99',
    period: '/月',
    description: '小白入门选择-适合试用体验',
    features: [
      '网页容量：128MB',
      '数据库量：32MB',
      '域名绑定：2个',
      '子目录数：2个',
      '网络带宽：10Mbps',
      '每月流量：15G',
      '年付10%优惠',
    ],
    href: '#',
    featured: false,
  },
  {
    name: '高阶主机',
    price: '￥3.99',
    period: '/月',
    description: '多数用户选择-适合中型站点',
    features: [
      '网页容量：512MB',
      '数据库量：128MB',
      '域名绑定：4个',
      '子目录数：4个',
      '网络带宽：10Mbps',
      '每月流量：45G',
      '年付10%优惠',
    ],
    href: '#',
    featured: true,
  },
  {
    name: '顶配主机',
    price: '￥13.99',
    period: '/月',
    description: '多站用户选择-适合大型存储类站点',
    features: [
      '网页容量：5120MB',
      '数据库量：1024MB',
      '域名绑定：6个',
      '子目录数：6个',
      '网络带宽：10Mbps',
      '每月流量：100G',
      '年付10%优惠',
    ],
    href: '#',
    featured: false,
  },
]

// 产品优势配置 - 展示虚拟主机的核心竞争优势
const productAdvantages = [
  {
    name: '弹性计算',
    description:
      '在优刻云您可以在几分钟之内快速根据业务需求，可弹性创建与释放云服务器，轻松应对业务的快速变化。',
    features: ['快速创建与释放', '灵活应对业务变化', '按需付费'],
    icon: BoltIcon,
  },
  {
    name: '多样化配置',
    description:
      '提供多种类型的实例、操作系统和软件包。各实例中的CPU、内存、硬盘和带宽可以灵活调整。',
    features: ['多种实例类型', '灵活的资源配置', '丰富的操作系统和软件包'],
    icon: CogIcon,
  },
  {
    name: '安全的网络',
    description:
      '通过云控制台，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置等。',
    features: ['云控制台安全管理', '私有网络环境配置', '多重安全保障'],
    icon: ShieldCheckIcon,
  },
  {
    name: '管理简单',
    description:
      '可以使用云控制台、进行重启等重要操作，这样管理实例就像管理操作您的计算机一样简单方便。',
    features: ['云控制台操作', '简单便捷的管理', '类似本地计算机的操作体验'],
    icon: GlobeAltIcon,
  },
]

// ==================== 页面组件定义 ====================

// Hero区域组件 - 页面顶部主要展示区域，采用双栏布局突出虚拟主机核心特性
function HeroSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                优刻云虚拟主机
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                虚拟主机系统
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                虚拟主机，适合新手小白初次部署站点，预装了常见环境、数据库及管理工具，可以通过控制面板便捷地管理托管网站，仅需5分钟即可部署第一个站点！
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {hostingFeatures.slice(0, 3).map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-12 flex gap-x-8">
                <Button
                  href="#pricing"
                  className="rounded-none bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700"
                >
                  立即购买
                </Button>
                <Button
                  variant="outline"
                  href="#features"
                  className="rounded-none px-8 py-4 text-lg"
                >
                  了解更多
                </Button>
              </div>
            </div>
          </div>

          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-full max-w-none bg-gray-800 p-8 ring-1 ring-white/10">
                  <div className="text-white">
                    <h3 className="mb-4 text-xl font-semibold">
                      优刻云虚拟主机优势
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>✓ 内置自研柠檬云防CDN，大陆延迟20-70MS左右</p>
                      <p>✓ 支持实现重定向、实现伪静态等功能</p>
                      <p>✓ 部署于专业级的T3+机房</p>
                      <p>✓ 采用最新redis数据库管理</p>
                      <p>✓ WAF智能防入侵系统、IPS防火墙系统</p>
                      <p>✓ 防CC攻击模块</p>
                      <p>✓ 支持实现重定向、实现伪静态等功能</p>
                      <p>✓ 部署于专业级的T3+机房</p>
                      <p>✓ 采用最新redis数据库管理</p>
                      <p>✓ WAF智能防入侵系统、IPS防火墙系统</p>
                      <p>✓ 防CC攻击模块</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 特性展示组件 - 网格布局展示虚拟主机的8大核心特性，采用现代圆角卡片设计
function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            虚拟主机企业版
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            安全可靠易用灵活的虚拟主机服务，高性能支持，智能管理体验
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8"
          >
            {hostingFeatures.map((feature, index) => (
              <li
                key={feature.name}
                className="group flex h-full transform flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]"
              >
                {/* 顶部图标和标题区域 */}
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 transition-colors duration-300 group-hover:bg-blue-50 dark:border-white/10 dark:bg-gray-800/50">
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-600 transition-colors duration-300 group-hover:bg-blue-700 dark:bg-blue-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white">
                    {feature.name}
                  </div>
                  {/* 序号标识 */}
                  <div className="ml-auto">
                    <span className="inline-flex h-6 w-6 items-center justify-center border border-gray-200 bg-white text-xs font-bold text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* 描述内容区域 */}
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// ==================== 价格方案相关组件 ====================

// 勾选图标组件 - 用于价格方案中的功能列表标识
function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// 价格方案卡片组件 - 单个套餐的展示卡片，支持高亮推荐套餐
function PricingPlan({
  name,
  price,
  period,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  period: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col px-6 sm:px-8',
        featured
          ? 'order-first bg-blue-600 py-8 lg:order-0'
          : 'bg-slate-900 py-8',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
        <span className="text-lg font-normal text-slate-400">{period}</span>
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color={featured ? 'white' : 'slate'}
        className="mt-10"
        aria-describedby={name}
      >
        立即购买
      </Button>
    </section>
  )
}

// 价格区域组件 - 展示所有虚拟主机套餐的价格方案
function PricingSection() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            套餐价格
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance dark:text-white">
            选择适合您的套餐 助力便捷上云服务
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 sm:text-center sm:text-xl/8 dark:text-gray-400">
          产品规格{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text font-bold text-transparent">
            HOT
          </span>{' '}
          官方自营 超高性价比！
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-8 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:-mx-4">
            {hostingPlans.map((plan) => (
              <div key={plan.name} className="group transform flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] pt-8 px-8 pb-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-x-1 mb-3">
                    <span className="text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href={plan.href}
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    立即购买
                  </a>
                </div>
                <p className="mt-10 text-sm/6 font-semibold text-gray-900 dark:text-white">
                  套餐详情
                </p>
                <div className="flex-1">
                  <ul
                    role="list"
                    className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300"
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="h-3 w-3 text-green-600 dark:text-green-400"
                          />
                        </div>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 产品优势组件 - 展示虚拟主机的4大核心优势，包含详细功能列表
function AdvantagesSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            虚拟主机产品优势
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            为您的业务提供全方位的云端解决方案
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {productAdvantages.map((advantage, index) => (
              <li
                key={advantage.name}
                className="group col-span-1 divide-y divide-gray-200 transform flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] dark:divide-white/10"
              >
                {/* 顶部标题和图标区域 */}
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white">
                        {advantage.name}
                      </h3>
                      <span className="inline-flex shrink-0 items-center bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-500 dark:inset-ring-blue-500/10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
                      {advantage.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-600 outline -outline-offset-1 outline-black/5 transition-colors duration-300 group-hover:bg-blue-700 dark:bg-blue-500 dark:outline-white/10">
                    <advantage.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* 功能特性列表区域 */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {advantage.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200"
                      >
                        <CheckIcon className="h-4 w-4 text-blue-600 transition-colors duration-300 group-hover:text-blue-700 dark:text-blue-500" />
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// 底部特性展示组件 - 展示虚拟主机的6项附加功能特性
function BottomFeaturesSection() {
  const bottomFeatures = [
    {
      name: '一键部署',
      description:
        '通过控制面板一键部署网站，无需复杂配置，5分钟即可上线您的第一个站点。',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL证书',
      description:
        '免费提供SSL证书，确保网站数据传输安全，提升用户信任度和SEO排名。',
      icon: LockClosedIcon,
    },
    {
      name: '简单队列',
      description:
        '内置消息队列系统，轻松处理异步任务，提升网站性能和用户体验。',
      icon: ServerIcon,
    },
    {
      name: '高级安全',
      description:
        '多层安全防护体系，包括WAF防火墙、DDoS防护和实时监控预警系统。',
      icon: ShieldCheckIcon,
    },
    {
      name: '强大API',
      description:
        '提供完整的RESTful API接口，支持自定义开发和第三方系统集成。',
      icon: CogIcon,
    },
    {
      name: '数据备份',
      description:
        '自动定时备份网站数据和数据库，多重备份策略确保数据安全无忧。',
      icon: DocumentTextIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            您需要的一切功能
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            无服务器？没问题。
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            优刻云虚拟主机为您提供完整的网站托管解决方案，从基础设施到高级功能，一应俱全。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {bottomFeatures.map((feature) => (
            <div key={feature.name} className="group transform flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] p-6">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center bg-indigo-600 transition-colors duration-300 group-hover:bg-indigo-700 dark:bg-indigo-500">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white">
                  {feature.name}
                </h3>
              </div>
              <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// 图片轮播 Hero 组件
function ECSVideoHero() {
  const ecsVideoSlide = [
    {
      id: 1,
      title: '优刻云虚拟主机',
      subtitle: '为您的网站保驾护航',
      description:
        '专业的虚拟主机服务，为您提供安全、稳定、高性能的网站托管方案。从个人博客到企业网站，我们都能满足您的需求。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '开始体验',
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
// 图片轮播 Hero 组件

// ==================== 主页面组件 ====================

// 虚拟主机页面主组件 - 整合所有功能模块的完整页面
export default function HostPage() {
  return (
    <>
      <Header />
      <main>
        <ECSVideoHero />
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <AdvantagesSection />
        <BottomFeaturesSection />

        {/* === 解决方案与产品展示 === */}
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
