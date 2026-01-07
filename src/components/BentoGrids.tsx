'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  BoltIcon,
  CloudIcon,
  CogIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

/**
 * 产品特性卡片数据接口
 * @interface FeatureCard
 * @property {string} category - 功能分类
 * @property {string} title - 卡片标题
 * @property {string} description - 功能描述
 * @property {string[]} features - 核心功能特性
 * @property {string} bgImage - 背景图片
 * @property {React.ComponentType} icon - 图标组件
 * @property {string} topLeftText - 左上角文本
 * @property {string} bottomLeftText - 左下角文本
 */
interface FeatureCard {
  category: string
  title: string
  description: string
  features: string[]
  bgImage: string
  icon: React.ComponentType<{ className?: string }>
  topLeftText: string
  bottomLeftText: string
}

/**
 * 产品特性数据配置
 */
const features: FeatureCard[] = [
  {
    category: '性能',
    title: '闪电般的构建速度',
    description: '采用业界领先的增量构建技术和智能缓存策略，构建速度提升90%以上。支持热重载和实时预览，让您的开发效率倍增，告别漫长的等待时间。',
    features: ['增量构建技术', '智能缓存策略', '热重载预览'],
    bgImage: '/images/screenshots/solution-1.png',
    icon: BoltIcon,
    topLeftText: '10亿+ 微信及QQ用户',
    bottomLeftText: '庞大用户基础',
  },
  {
    category: '发布',
    title: '推送即部署',
    description: 'Git推送后自动触发CI/CD流水线，支持蓝绿部署、金丝雀发布等多种策略。内置回滚机制和健康检查，确保每次发布都安全可靠，零停机时间。',
    features: ['CI/CD流水线', '蓝绿部署', '零停机发布'],
    bgImage: '/images/screenshots/solution-5.png',
    icon: CloudIcon,
    topLeftText: '3200+ 全球CDN节点',
    bottomLeftText: '全球网络覆盖',
  },
  {
    category: '速度',
    title: '为专业用户打造',
    description: '提供代码分割、Tree Shaking、压缩优化等专业级性能调优工具。支持自定义Webpack配置，满足复杂项目需求，让您的应用始终保持最佳性能。',
    features: ['代码分割优化', 'Tree Shaking', '自定义配置'],
    bgImage: '/images/screenshots/solution-1.png',
    icon: CogIcon,
    topLeftText: '24/7 全天候提供服务',
    bottomLeftText: '专业技术支持',
  },
  {
    category: '集成',
    title: '连接您喜爱的工具',
    description: '支持GitHub、GitLab、Bitbucket等主流代码仓库，集成Slack、钉钉等协作工具。提供丰富的API和Webhook，轻松构建自定义工作流。',
    features: ['代码仓库集成', '协作工具连接', '自定义工作流'],
    bgImage: '/images/screenshots/solution-2.png',
    icon: PuzzlePieceIcon,
    topLeftText: '经多行业证实的技术',
    bottomLeftText: '成熟稳定方案',
  },
  {
    category: '分析',
    title: '深入了解您的数据',
    description: '实时监控应用性能、用户行为和业务指标。提供可视化仪表板、智能告警和趋势分析，助您做出数据驱动的决策，持续优化产品体验。',
    features: ['实时监控', '可视化仪表板', '趋势分析'],
    bgImage: '/images/screenshots/solution-4.png',
    icon: ChartBarIcon,
    topLeftText: '专业团队技术解决方案',
    bottomLeftText: '全方位服务',
  },
]

/**
 * 手风琴特性卡片组件（PC端）
 * @param {FeatureCard} feature - 特性数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function AccordionFeatureCard({
  feature,
  isExpanded,
  onToggle,
}: {
  feature: FeatureCard
  isExpanded: boolean
  onToggle: () => void
}) {
  const IconComponent = feature.icon

  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-[flex] duration-500 ease-in-out hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
        isExpanded ? 'flex-[2.5]' : 'flex-[1.2]',
      )}
      onMouseEnter={onToggle}
    >
      <div className="relative flex h-full flex-col p-6">
        {/* 标题区域 - 始终可见，与箭头按钮对齐 */}
        <div className="mb-12 flex items-center justify-between">
          <h3
            className={clsx(
              'py-2 text-xl font-bold tracking-tight transition-colors duration-300',
              isExpanded
                ? 'text-[#0055ff]'
                : 'text-[#0F172A]'
            )}
          >
            {feature.title}
          </h3>

          {/* 箭头按钮图标 */}
          <div
            className={clsx(
              'transition-opacity duration-300',
              isExpanded ? 'opacity-100' : 'opacity-80'
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center border border-[#E2E8F0] transition-colors duration-200 hover:border-[#0055ff]">
              <ArrowRightIcon className="h-4 w-4 text-[#64748B]" />
            </div>
          </div>
        </div>

        {/* 内容区域 - 始终显示 */}
        <div className="flex-1 transition-all delay-100 duration-500">
          {/* 分类标签 */}
          <div className="mb-4">
            <span className={clsx(
              'inline-flex items-center border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-widest',
              isExpanded
                ? 'text-[#0055ff] border-[#0055ff]/20 bg-[#eff6ff]'
                : 'text-[#64748B]'
            )}>
              {feature.category}
            </span>
          </div>

          {/* 描述文本 */}
          <p className={clsx(
            'mb-6 text-base leading-relaxed text-[#64748B] transition-colors duration-300',
            isExpanded ? 'line-clamp-none' : 'line-clamp-3'
          )}>
            {feature.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-[#0F172A]">
              核心功能
            </h4>
            {feature.features.map((featureItem, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center text-base text-[#64748B]"
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-[#0055ff]" />
                {featureItem}
              </div>
            ))}
          </div>
        </div>

        {/* 左下角图标 */}
        <div className="absolute bottom-4 left-4">
          <IconComponent
            className={clsx(
              'h-6 w-6 transition-opacity duration-300',
              isExpanded ? 'opacity-100' : 'opacity-60',
              isExpanded
                ? 'text-[#0055ff]'
                : 'text-[#64748B]'
            )}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端特性卡片组件
 * @param {FeatureCard} feature - 特性数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileFeatureCard({
  feature,
}: {
  feature: FeatureCard
}) {
  const IconComponent = feature.icon

  return (
    <div
      className="xs:h-[220px] group relative h-[180px] overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 sm:h-[280px]"
    >
      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-3 sm:p-4">
        {/* 标题和图标 */}
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
            {feature.title}
          </h3>
          <IconComponent className="h-4 w-4 text-[#64748B] sm:h-5 sm:w-5" />
        </div>

        {/* 分类标签 */}
        <div className="mb-2">
          <span className="inline-flex items-center border border-[#E2E8F0] bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#64748B] sm:text-xs">
            {feature.category}
          </span>
        </div>

        {/* 描述文本 */}
        <p className="mb-2 line-clamp-2 flex-1 text-xs leading-relaxed text-[#64748B] sm:mb-4 sm:line-clamp-3 sm:text-sm">
          {feature.description}
        </p>

        {/* 核心功能列表 */}
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs font-semibold text-[#0F172A] sm:text-sm">
            核心功能
          </h4>
          {feature.features.slice(0, 2).map((featureItem, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-xs text-[#64748B] sm:text-sm"
            >
              <div className="mr-1.5 h-1 w-1 rounded-full bg-[#0055ff] sm:mr-2 sm:h-1.5 sm:w-1.5" />
              {featureItem}
            </div>
          ))}
          {feature.features.length > 2 && (
            <div className="text-xs text-[#64748B] sm:text-sm">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * BentoGrids组件 - 展示产品特性的手风琴布局
 * PC端：手风琴样式，移动端：网格布局
 * 使用手风琴设计模式展示不同的产品功能和特性
 * @returns {JSX.Element} BentoGrids组件
 */
export default function BentoGrids() {
  // 默认展开第一个元素（仅PC端使用）
  const [expandedIndex, setExpandedIndex] = useState(0)

  /**
   * 处理卡片展开状态切换（仅PC端使用）
   * @param {number} index - 卡片索引
   */
  const handleCardToggle = (index: number) => {
    setExpandedIndex(index)
  }

  return (
    <section
      id="features"
      aria-label="产品特性"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#e0e7ff]/50 py-12 sm:py-16 lg:py-24"
    >
      <Container className="relative">
        {/* 标题区域 */}
        <div className="mb-4 text-left sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="text-xs/6 font-semibold uppercase tracking-widest text-[#0055ff] sm:text-sm/6 md:text-base/7">
            更快部署
          </h2>
          <p className="mt-1 max-w-lg text-2xl font-semibold tracking-tight text-pretty text-[#0F172A] sm:mt-2 sm:text-3xl md:text-4xl lg:text-5xl">
            部署应用所需的一切
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden h-[400px] gap-2 overflow-hidden lg:flex xl:h-[500px]">
          {features.map((feature, index) => (
            <AccordionFeatureCard
              key={index}
              feature={feature}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端网格布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          {/* 平板端：两行两列 */}
          <div className="hidden sm:mb-6 sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
            {features.slice(0, 4).map((feature, index) => (
              <MobileFeatureCard
                key={index}
                feature={feature}
              />
            ))}
          </div>

          {/* 平板端：剩余的一个卡片单独一行 */}
          {features.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobileFeatureCard feature={features[4]} />
            </div>
          )}

          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <MobileFeatureCard
                  key={index}
                  feature={feature}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
