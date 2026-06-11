'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  DocumentTextIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

/**
 * 页面导航链接接口
 */
interface SectionLink {
  id: string
  label: string
}

/**
 * 特性项接口定义
 */
interface FeatureItem {
  name: string
  href: string
}

/**
 * 页面导航链接数据
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'features', label: '核心功能' },
  { id: 'content', label: '应用场景' },
  { id: 'demo', label: '立即体验' },
]

/**
 * 核心功能接口定义
 */
interface CoreFeature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * 场景解决方案接口
 */
interface ScenarioSolution {
  title: string
  description: string
  features: string[]
  image: string
  stats?: {
    label: string
    value: string
  }[]
}

/**
 * 技术优势数据接口
 */
interface TechAdvantage {
  title: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

/**
 * 客户评价接口
 */
interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

/**
 * CMS Hero区域组件 - 左文右图布局
 * 展示CMS内容管理系统的核心价值和特性
 */
function CMSHeroSection() {
  // CMS产品特性标签
  const features: FeatureItem[] = [
    { name: '内容管理', href: '#content' },
    { name: 'SEO优化', href: '#seo' },
    { name: '多站点管理', href: '#multisite' },
    { name: '移动优先', href: '#mobile' },
    { name: '云部署', href: '#cloud' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-10 sm:py-14 md:py-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-[#0055ff]/10 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 bg-slate-200/30 opacity-40 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* 左侧内容区 */}
          <div className="space-y-8">
            {/* 品牌标识 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold text-[#0055ff]">
                <DocumentTextIcon className="mr-2 h-4 w-4" />
                企业级CMS解决方案
              </div>
            </motion.div>

            {/* 主标题 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                
                <br />
                内容管理系统
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                为企业提供专业的内容创作、管理、发布一体化解决方案
              </p>
              <p className="text-base leading-relaxed text-slate-500">
                支持多站点管理、SEO优化、响应式设计，助力企业数字化转型
              </p>
            </motion.div>

            {/* 特性标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-[#0055ff]/30 hover:bg-[#0055ff]/5 hover:text-[#0055ff]"
                >
                  {feature.name}
                </a>
              ))}
            </motion.div>

            {/* CTA按钮组 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button
                href="#demo"
                variant="erlieSolid"
                color="blue"
                className="group w-full px-8 py-3.5 text-base font-medium sm:w-auto rounded-xl"
              >
                <span>立即体验</span>
                <RocketLaunchIcon className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button
                href="#features"
                variant="erlieOutline"
                color="slate"
                className="group w-full px-8 py-3.5 text-base font-medium sm:w-auto rounded-xl"
              >
                <span>了解更多</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* 右侧展示区 - 现代化CMS仪表板预览 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-4 lg:mt-8"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/60">
              {/* 窗口控制栏 */}
              <div className="border-b border-slate-200 bg-slate-50/90 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-700">
                    CMS Dashboard
                  </div>
                  <div className="w-4"></div>
                </div>
              </div>

              {/* 仪表板内容 */}
              <div className="p-4 sm:p-5">
                {/* 顶部状态栏 */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#eff6ff] p-3 text-center transition-all hover:shadow-md">
                    <div className="text-xl font-bold text-[#0055ff]">128</div>
                    <div className="text-xs text-slate-500 mt-1">文章</div>
                  </div>
                  <div className="rounded-xl bg-green-50 p-3 text-center transition-all hover:shadow-md">
                    <div className="text-xl font-bold text-green-600">45</div>
                    <div className="text-xs text-slate-500 mt-1">页面</div>
                  </div>
                  <div className="rounded-xl bg-purple-50 p-3 text-center transition-all hover:shadow-md">
                    <div className="text-xl font-bold text-purple-600">89%</div>
                    <div className="text-xs text-slate-500 mt-1">SEO评分</div>
                  </div>
                </div>

                {/* 内容预览区 */}
                <div className="space-y-3">
                  {/* 文章列表预览 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5 transition-all hover:border-slate-300 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-[#0055ff]"></div>
                        <div className="h-2 w-20 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-2 w-8 rounded bg-slate-100"></div>
                    </div>
                    <div className="mt-2.5 h-2 w-full rounded bg-slate-100"></div>
                    <div className="mt-1.5 h-2 w-3/4 rounded bg-slate-100"></div>
                  </div>

                  {/* 额外内容区域 */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition-all hover:border-slate-300 hover:shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
                      <div className="h-2 w-16 rounded bg-slate-200"></div>
                    </div>
                    <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                      <div className="h-2 rounded bg-slate-200"></div>
                      <div className="h-2 rounded bg-slate-200"></div>
                    </div>
                  </div>

                  {/* 统计数据预览 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gradient-to-r from-[#0055ff] to-[#0043cc] p-3 text-center shadow-md transition-all hover:shadow-lg">
                      <div className="text-xs font-medium text-white/90">
                        浏览量
                      </div>
                      <div className="text-lg font-bold text-white mt-1">2.4K</div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 p-3 text-center shadow-md transition-all hover:shadow-lg">
                      <div className="text-xs font-medium text-white/90">
                        转化率
                      </div>
                      <div className="text-lg font-bold text-white mt-1">12.5%</div>
                    </div>
                  </div>

                  {/* 快速操作按钮 */}
                  <div className="flex space-x-2.5">
                    <button className="flex-1 rounded-xl bg-[#0055ff] px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-[#0043cc] hover:shadow-lg">
                      新建
                    </button>
                    <button className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300">
                      发布
                    </button>
                  </div>
                </div>
              </div>

              {/* 底部状态栏 */}
              <div className="border-t border-slate-200 bg-slate-50/90 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    已连接
                  </span>
                  <span>v2.1.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/**
 * CMS核心功能区域组件
 */
function CMSFeaturesSection() {
  const coreFeatures: CoreFeature[] = [
    {
      icon: DocumentTextIcon,
      title: '内容编辑器',
      description: '可视化内容编辑，支持富文本、图片、视频等多媒体内容',
      color: 'blue',
    },
    {
      icon: GlobeAltIcon,
      title: 'SEO优化',
      description: '内置SEO工具，自动生成站点地图、元数据管理、搜索引擎优化',
      color: 'green',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: '移动优先',
      description: '响应式设计，PWA支持，保证在所有设备上完美展示',
      color: 'purple',
    },
    {
      icon: CloudIcon,
      title: '多站点管理',
      description: '一个后台管理多个站点，支持多语言、多域名配置',
      color: 'cyan',
    },
    {
      icon: ShieldCheckIcon,
      title: '安全防护',
      description: '多层安全防护机制，数据加密、备份恢复、权限管理',
      color: 'red',
    },
    {
      icon: BoltIcon,
      title: '高性能加速',
      description: 'CDN加速、缓存优化、数据库优化，提供极速访问体验',
      color: 'yellow',
    },
  ]

  return (
    <section id="features" className="scroll-mt-20 bg-white py-10 sm:py-14 md:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            核心功能特性
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            全面的CMS功能模块，满足企业各类内容管理需求
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:gap-10">
          {coreFeatures.map((feature) => {
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8"
              >
                {/* 选中时的背景渐变 */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 内容 */}
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <feature.icon
                      className="h-6 w-6 text-[#0055ff] sm:h-7 sm:w-7"
                    />
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {feature.description}
                  </p>
                </div>

                {/* 悬停效果箭头 */}
                <div className="absolute right-4 bottom-4 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:right-6 sm:bottom-6">
                  <ArrowRightIcon className="h-4 w-4 text-[#0055ff] sm:h-5 sm:w-5" />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * CMS场景解决方案区域组件
 */
function CMSScenariosSection() {
  const scenarios: ScenarioSolution[] = [
    {
      title: '企业官网管理',
      description:
        '为企业提供专业的官网内容管理解决方案，支持产品展示、新闻发布、招聘信息等各类内容管理。提供可视化编辑器、多语言支持、SEO优化等专业功能，助力企业实现数字化转型和品牌价值提升。',
      features: ['可视化编辑', '多语言支持', 'SEO优化', '权限管理'],
      image: '/images/scenarios/corporate-website.jpg',
      stats: [
        { label: '页面加载速度', value: '<2秒' },
        { label: 'SEO评分', value: '95+' },
      ],
    },
    {
      title: '电商平台运营',
      description:
        '为电商平台提供强大的商品管理、订单处理、营销活动等功能。支持多店铺管理、库存统计、数据分析等高级功能，助力企业实现电商业务数字化转型，提升运营效率和用户体验。',
      features: ['商品管理', '订单处理', '营销活动', '数据分析'],
      image: '/images/scenarios/ecommerce-platform.jpg',
      stats: [
        { label: '订单处理效率', value: '+300%' },
        { label: '用户转化率', value: '12.5%' },
      ],
    },
    {
      title: '媒体内容平台',
      description:
        '专为媒体行业打造的内容管理平台，支持文章发布、视频管理、用户评论等功能。提供内容审核、版权管理、广告位管理等专业工具，满足媒体平台的复杂需求，实现内容价值最大化。',
      features: ['内容审核', '版权管理', '用户互动', '流量分析'],
      image: '/images/scenarios/media-platform.jpg',
      stats: [
        { label: '内容发布效率', value: '+500%' },
        { label: '用户活跃度', value: '85%' },
      ],
    },
  ]

  return (
    <section
      id="content"
      className="scroll-mt-20 py-10 sm:py-14 lg:py-16 bg-slate-50"
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 */}
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="mb-2 text-lg font-bold text-slate-900 sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            应用场景解决方案
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-[#0055ff] sm:mb-6"></div>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 sm:px-0 sm:text-lg">
            针对不同行业和业务场景，提供专业化的CMS解决方案，助力企业实现数字化转型
          </p>
        </div>

        {/* 场景卡片网格 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-[#0055ff]/30 hover:shadow-xl hover:shadow-slate-200/50"
            >
              {/* 内容区域 */}
              <div className="relative z-10">
                {/* 标题和标签 */}
                <div className="mb-4">
                  <div className="mb-3 inline-flex items-center rounded-md bg-[#eff6ff] px-3 py-1 text-xs font-medium text-[#0055ff]">
                    <CheckCircleIcon className="mr-1 h-3 w-3" />
                    专业解决方案
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    {scenario.title}
                  </h3>
                </div>

                {/* 描述文本 */}
                <p className="mb-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {scenario.description}
                </p>

                {/* 核心功能列表 */}
                <div className="mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-slate-900">
                    核心功能
                  </h4>
                  <div className="space-y-2">
                    {scenario.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 数据统计 */}
                {scenario.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {scenario.stats.map((stat) => (
                      <div key={stat.label} className="text-center rounded-lg bg-slate-50 p-2 border border-slate-100">
                        <div className="text-lg font-bold text-[#0055ff]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 技术优势数据支撑区域组件
 */
function CMSTechAdvantagesSection() {
  const techAdvantages: TechAdvantage[] = [
    {
      title: '高性能架构',
      value: '99.9%',
      description: '系统可用性保障，支持大并发访问',
      icon: BoltIcon,
    },
    {
      title: '超快响应',
      value: '<100ms',
      description: '页面平均响应时间，提供极速体验',
      icon: ChartBarIcon,
    },
    {
      title: '安全防护',
      value: '256位',
      description: 'SSL加密传输，多层安全防护',
      icon: ShieldCheckIcon,
    },
    {
      title: '全球CDN',
      value: '200+',
      description: '全球节点加速，保障访问速度',
      icon: GlobeAltIcon,
    },
  ]

  return (
    <section
      className="py-10 sm:py-14 lg:py-16 bg-white"
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 */}
        <div className="mb-6 text-center sm:mb-8 md:mb-10">
          <h2 className="mb-2 text-lg font-bold text-slate-900 sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            技术优势数据
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-[#0055ff] sm:mb-6"></div>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 sm:px-0 sm:text-lg">
            先进的技术架构和可靠的性能表现，为您的业务提供坚实保障
          </p>
        </div>

        {/* 网格布局 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techAdvantages.map((advantage) => (
            <div
              key={advantage.title}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-colors duration-300 hover:border-[#0055ff]/30 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="relative z-10">
                {/* 图标 */}
                <div className="mb-4 flex justify-center">
                  <advantage.icon className="h-12 w-12 text-[#0055ff]" />
                </div>
                {/* 数据值 */}
                <div className="mb-4 text-center text-4xl font-bold text-[#0055ff]">
                  {advantage.value}
                </div>

                {/* 标题 */}
                <div className="mb-3 text-center text-xl font-semibold text-slate-900">
                  {advantage.title}
                </div>

                {/* 描述 */}
                <div className="text-center text-sm leading-relaxed text-slate-600">
                  {advantage.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 客户评价展示区域组件
 */
function CMSTestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: '张三',
      role: '技术总监',
      company: '科技有限公司',
      content:
        '优刻云计算的CMS系统真正帮助我们实现了内容管理的数字化转型。系统稳定高效，功能强大，售后服务也非常专业。',
      avatar: '/images/avatars/customer-1.jpg',
      rating: 5,
    },
    {
      name: '李四',
      role: '运营经理',
      company: '电商集团',
      content:
        '使用优刻云计算 CMS后，我们的内容发布效率提升了300%。可视化编辑器非常好用，SEO优化功能也帮助我们获得了更多的自然流量。',
      avatar: '/images/avatars/customer-2.jpg',
      rating: 5,
    },
    {
      name: '王五',
      role: '产品经理',
      company: '媒体集团',
      content:
        '作为媒体公司，我们对内容管理系统的要求非常高。优刻云计算 CMS完美满足了我们的需求，多站点管理和内容审核功能特别实用。',
      avatar: '/images/avatars/customer-3.jpg',
      rating: 5,
    },
  ]

  return (
    <section className="bg-slate-50 py-10 sm:py-14 md:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            客户评价
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            听听我们的客户怎么说
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-6 text-slate-700">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#0055ff]">
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行动转化CTA区域组件
 */
function CMSCTASection() {
  return (
    <section id="demo" className="scroll-mt-20 relative overflow-hidden bg-[#0055ff] py-10 sm:py-14 md:py-16">
      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            准备好开始了吗？
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            加入数千家企业的选择，使用优刻云计算 CMS构建更好的内容管理体验
          </p>

          {/* 重新设计的按钮组 */}
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* 主要按钮 - 免费试用 */}
            <Button
              href="/contact"
              variant="erlieSolid"
              color="white"
              className="group relative inline-flex w-full min-w-[160px] items-center justify-center rounded-xl px-8 py-3.5 text-base font-medium text-[#0055ff] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                免费试用
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            {/* 次要按钮 - 联系销售 */}
            <Button
              href="/demo"
              variant="erlieOutline"
              color="white"
              className="group relative inline-flex w-full min-w-[160px] items-center justify-center rounded-xl border-white/30 bg-transparent px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                联系销售
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* 信任标识 */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <p className="text-sm text-blue-200">
              免费试用 30 天 · 无需信用卡 · 随时取消
            </p>

            {/* 信任徽章 */}
            <div className="flex items-center space-x-6 text-blue-200/80">
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span className="text-xs">SSL安全保护</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span className="text-xs">24/7技术支持</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-4 w-4" />
                <span className="text-xs">99.9%可用性</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 监听当前活跃section的hook
 */
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    )

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * 页面锚点导航组件
 */
function SectionNav() {
  const activeSection = useActiveSection(SECTION_LINKS.map((item) => item.id))

  return (
    <nav className="sticky top-14 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="-mb-px flex justify-start sm:justify-center overflow-x-auto scrollbar-hide">
          {SECTION_LINKS.map((item) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 border-b-2 px-4 py-3.5 text-sm font-medium transition-colors sm:px-6 sm:py-4 ${
                  isActive
                    ? 'border-[#0055ff] text-[#0055ff]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

/**
 * CMS页面内容组件
 */
export default function CMSContent() {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0 bg-white">
        <CMSHeroSection />
        <SectionNav />
        <CMSFeaturesSection />
        <CMSScenariosSection />
        <CMSTechAdvantagesSection />
        <CMSTestimonialsSection />
        <CMSCTASection />
      </main>
      <Footer />
    </>
  )
}
