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
  title: '虚拟主机_适合新手小白_便捷管理_5分钟部署',
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



// Hero区域组件 - 页面顶部主要展示区域，双栏布局：左文案+右可视化预览
function HeroSection() {
  // 右侧亮点数据 - 与左侧功能列表互补，突出量化指标
  const highlights = [
    { label: '服务可用性', value: '99.9%', icon: ShieldCheckIcon },
    { label: '大陆平均延迟', value: '20-70ms', icon: BoltIcon },
    { label: '分钟级部署', value: '5min', icon: CloudArrowUpIcon },
    { label: '网络带宽', value: '10Mbps', icon: ChartBarIcon },
    { label: 'T3+机房', value: '专业级', icon: ServerIcon },
    { label: '技术支持', value: '7×24h', icon: CogIcon },
  ]

  return (
    <div className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 lg:items-center">
          {/* ── 左侧：文案区域 ── */}
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              {/* 品牌标签 */}
              <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
                优刻云虚拟主机
              </span>

              {/* 主标题 */}
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                稳定、安全、易用的
                <span className="text-brand-600">虚拟主机</span>
              </h1>

              {/* 副标题 */}
              <p className="mt-5 text-lg leading-relaxed text-gray-500">
                预装常见环境与数据库，通过控制面板即可便捷管理网站。
                从注册到上线，仅需5分钟。
              </p>

              {/* 三大核心卖点 */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: ShieldCheckIcon, label: 'WAF + IPS 防护' },
                  { icon: BoltIcon, label: '柠檬云防CDN加速' },
                  { icon: CogIcon, label: '一键环境预装' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
                  >
                    <item.icon aria-hidden="true" className="size-3.5 text-brand-600" />
                    {item.label}
                  </span>
                ))}
              </div>

              {/* CTA 按钮 */}
              <div className="mt-10 flex items-center gap-x-5">
                <Button
                  href="#pricing"
                  className="rounded-lg bg-brand-600 px-7 py-3 text-base font-semibold hover:bg-brand-700 text-white shadow-sm shadow-brand-500/20"
                >
                  立即购买
                </Button>
                <Button
                  variant="outline"
                  href="#features"
                  className="rounded-lg border-gray-200 px-7 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  了解详情
                </Button>
              </div>
            </div>
          </div>

          {/* ── 右侧：白色面板数据展示 ── */}
          <div className="sm:px-6 lg:px-0">
            <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.08] shadow-lg shadow-black/[0.04] p-6 sm:p-8">
              {/* 面板标题 */}
              <div className="mb-6 flex items-center gap-2">
                <span className="size-2 rounded-full bg-brand-600" />
                <span className="text-sm font-semibold text-gray-900">
                  优刻云虚拟主机优势
                </span>
              </div>

              {/* 亮点指标网格 */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center rounded-xl bg-brand-50/60 px-3 py-4 text-center ring-1 ring-inset ring-brand-100 transition-colors hover:bg-brand-50 hover:ring-brand-200"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="mb-2 size-5 text-brand-600"
                    />
                    <span className="text-lg font-bold tracking-tight text-gray-900">
                      {item.value}
                    </span>
                    <span className="mt-0.5 text-[11px] text-gray-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 底部提示 */}
              <div className="mt-5 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 text-xs text-gray-500 ring-1 ring-inset ring-gray-200/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon className="size-3.5 text-brand-600" />
                  99.9% 可用性保障 · 7×24 技术支持
                </span>
                <span className="font-medium text-brand-600">已服务 10,000+ 站点</span>
              </div>
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
                className="group relative flex flex-col h-full overflow-hidden bg-white border border-slate-200 rounded-md transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* 顶部图标和标题区域 */}
                  <div className="flex items-center gap-x-4 border-b border-slate-100 p-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#eff6ff] rounded-lg transition-colors duration-300 group-hover:bg-[#0055ff]">
                      <feature.icon
                        className="h-6 w-6 text-[#0055ff] transition-colors duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-base font-semibold text-slate-900">
                      {feature.name}
                    </div>
                    {/* 序号标识 */}
                    <div className="ml-auto">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-400 group-hover:text-[#0055ff] group-hover:border-[#0055ff]/30 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* 描述内容区域 */}
                  <div className="px-6 py-4">
                    <p className="text-sm/6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
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

// 价格区域组件 - 展示所有虚拟主机套餐的价格方案

// 套餐价格组件 - 三栏卡片对比，突出推荐套餐
function PricingSection() {
  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* ── 区域标题 ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
            套餐价格
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            选择适合您的套餐
          </h2>
          <p className="mt-3 text-base text-gray-500">
            产品规格
            <span className="inline-flex items-center rounded-lg bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-600 ring-1 ring-inset ring-red-600/10 mx-2 align-middle">
              HOT
            </span>
            官方自营 · 超高性价比
          </p>
        </div>

        {/* ── 套餐卡片网格 ── */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {hostingPlans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative flex flex-col rounded-2xl bg-white p-8 ring-1 transition-all duration-300',
                plan.featured
                  ? 'ring-1 ring-black/[0.06] shadow-xl shadow-brand-500/10 scale-[1.03] z-10'
                  : 'ring-black/[0.06] shadow-sm hover:shadow-lg hover:shadow-black/[0.04] hover:ring-black/[0.12]'
              )}
            >
              {/* 推荐标签 */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white shadow-sm shadow-brand-500/30">
                    最多用户选择
                  </span>
                </div>
              )}

              {/* 套餐名称 */}
              <h3
                className={clsx(
                  'text-center text-lg font-semibold',
                  plan.featured ? 'text-brand-600' : 'text-gray-900'
                )}
              >
                {plan.name}
              </h3>

              {/* 价格 */}
              <div className="mt-5 flex items-baseline justify-center gap-x-1">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
                <span className="text-base font-medium text-gray-400">
                  {plan.period}
                </span>
              </div>

              {/* 描述 */}
              <p className="mt-2 text-center text-sm text-gray-500">
                {plan.description}
              </p>

              {/* 分隔线 */}
              <div className="mt-6 border-t border-gray-100" />

              {/* CTA 按钮 */}
              <a
                href={plan.href}
                className={clsx(
                  'mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200',
                  plan.featured
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-500/20'
                    : 'bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                立即购买
              </a>

              {/* 套餐详情标题 */}
              <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-gray-400">
                套餐详情
              </p>

              {/* 功能列表 */}
              <ul role="list" className="mt-4 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className={clsx(
                        'mt-0.5 size-4 flex-shrink-0',
                        plan.featured ? 'text-brand-600' : 'text-gray-300'
                      )}
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// 产品优势组件 - 展示虚拟主机的4大核心优势，包含详细功能列表
function AdvantagesSection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50">
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
                className="group relative flex flex-col overflow-hidden bg-white border border-slate-200 rounded-md transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
              >
                {/* 顶部标题和图标区域 */}
                <div className="flex w-full items-center justify-between space-x-6 p-6 border-b border-slate-100">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-base font-semibold text-slate-900">
                        {advantage.name}
                      </h3>
                      <span className="inline-flex shrink-0 items-center bg-[#eff6ff] px-1.5 py-0.5 text-xs font-medium text-[#0055ff] rounded">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-500">
                      {advantage.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center bg-[#eff6ff] rounded-lg group-hover:bg-[#0055ff] transition-colors duration-300">
                    <advantage.icon
                      className="h-6 w-6 text-[#0055ff] group-hover:text-white transition-colors duration-300"
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
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckIcon className="h-4 w-4 text-[#0055ff]" />
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
          <h2 className="text-base/7 font-semibold text-[#0055ff]">
            您需要的一切功能
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            无服务器？没问题。
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            优刻云虚拟主机为您提供完整的网站托管解决方案，从基础设施到高级功能，一应俱全。
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {bottomFeatures.map((feature) => (
            <div key={feature.name} className="group relative flex flex-col overflow-hidden bg-white border border-slate-200 rounded-md p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eff6ff] rounded-lg group-hover:bg-[#0055ff] transition-colors duration-300">
                  <feature.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#0055ff] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-slate-900">
                  {feature.name}
                </h3>
              </div>
              <p className="text-base text-slate-500">
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
      backgroundImage: '/images/carousel/HeaderCarousel.webp',
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
