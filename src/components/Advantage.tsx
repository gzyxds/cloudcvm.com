'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  LockClosedIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'

/**
 * 产品优势卡片数据接口
 * @interface AdvantageCard
 * @property {string} title - 优势标题
 * @property {string} description - 详细描述
 * @property {string[]} highlights - 核心亮点
 * @property {string} category - 优势类别
 * @property {string} metric - 关键指标
 * @property {string} iconType - 图标类型
 */
interface AdvantageCard {
  title: string
  description: string
  highlights: string[]
  category: string
  metric: string
  iconType: string
}

/**
 * 产品优势数据配置
 * 采用蓝白色调为主的现代企业设计风格，突出数据与服务能力
 */
const advantages: AdvantageCard[] = [
  {
    title: '高稳定性承诺',
    description:
      '单实例SLA达99.975%，支持宕机自动迁移和快照备份。采用跨可用区高可用架构，确保业务连续运行。',
    highlights: ['SLA达99.975%', '宕机自动迁移', '跨可用区高可用'],
    category: '稳定性保障',
    metric: '99.975%',
    iconType: 'shield',
  },
  {
    title: '灵活计费',
    description:
      '支持按量付费和包年包月,可灵活扩容。分钟级创建实例,按需调整资源配置。',
    highlights: ['多种付费方式', '分钟级创建', '弹性扩容'],
    category: '成本优化',
    metric: '分钟级',
    iconType: 'currency',
  },
  {
    title: '全球云基础设施',
    description:
      '全球29个地域提供稳定计算服务,已服务500万企业客户,助力数字化转型。',
    highlights: ['29地域', '87可用区', '500万+'],
    category: '全球覆盖',
    metric: '29个地域',
    iconType: 'globe',
  },
  {
    title: '自研CIPU架构',
    description:
      '采用自研CIPU架构,400G网络带宽,支持6000万PPS和360万IOPS,网络延迟低至8微秒,针对AI场景优化。',
    highlights: ['400G带宽', '6000万PPS', '8微秒时延'],
    category: '性能领先',
    metric: '400G',
    iconType: 'cpu',
  },
  {
    title: '多层防护',
    description:
      '提供多重安全防护机制,包括DDoS防护、漏洞检测和数据加密,确保企业业务安全运行。',
    highlights: ['安全认证', 'DDoS防护', '数据加密'],
    category: '安全防护',
    metric: '多层防护',
    iconType: 'lock',
  },
]

/**
 * 根据图标类型获取对应的图标组件
 * @param {string} iconType - 图标类型标识
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByType(iconType: string) {
  const iconMap = {
    shield: ShieldCheckIcon,
    currency: CurrencyDollarIcon,
    globe: GlobeAltIcon,
    cpu: CpuChipIcon,
    lock: LockClosedIcon,
    chart: ChartBarIcon,
    cloud: CloudIcon,
  }
  return iconMap[iconType as keyof typeof iconMap] || ShieldCheckIcon
}

/**
 * 产品优势手风琴卡片组件（桌面端和平板端）
 * 采用蓝白色调为主的现代企业设计风格，实现简洁的卡片式直角设计
 * 突出数据与服务能力展示，符合B端企业级产品的专业调性
 * 支持响应式设计，在不同屏幕尺寸下自适应布局
 * @param {AdvantageCard} advantage - 产品优势数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function AdvantageCard({
  advantage,
  index,
  isExpanded,
  onToggle,
}: {
  advantage: AdvantageCard
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden rounded-sm border border-[#E2E8F0] bg-white transition-[flex] duration-700 ease-out hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
        isExpanded
          ? 'flex-[2] md:flex-[2.5] lg:flex-[3]' // 响应式展开比例
          : 'flex-[1] md:flex-[1.2] lg:flex-[1.5]',
      )}
      onMouseEnter={onToggle}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-[#E2E8F0]" />
        <div className="absolute right-4 top-4 h-3 w-3 border-r border-t border-[#E2E8F0]" />
        <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-[#E2E8F0]" />
        <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-[#E2E8F0]" />
      </div>
      {/* 主要内容区域 */}
      <div className="relative flex h-full flex-col p-3 pt-4 sm:p-4 sm:pt-5 md:p-5 md:pt-6 lg:p-6 lg:pt-7 xl:p-7 xl:pt-8 2xl:p-8 2xl:pt-10">
        {/* 顶部类别标签 - 与右上角序号垂直居中对齐 */}
        <div className="mb-2 flex items-center sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          <span className={clsx(
            'inline-flex items-center border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest sm:px-2.5 sm:py-1 sm:text-[10px] lg:px-3 lg:text-[11px]',
            isExpanded
              ? 'border-[#0055ff]/20 bg-[#eff6ff] text-[#0055ff]'
              : 'border-[#E2E8F0] bg-white text-[#64748B]'
          )}>
            {advantage.category}
          </span>
        </div>

        {/* 标题与关键指标区域 */}
        <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
          <div className="mb-2 flex items-center justify-start sm:mb-3 lg:mb-4">
            {/* 图标容器 */}
            <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-[#0055ff] sm:mr-2.5 sm:h-6 sm:w-6 sm:p-1.5 lg:mr-3 lg:h-7 lg:w-7 lg:p-2">
              <IconComponent className={clsx(
                "h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4",
                "text-[#0055ff]"
              )} />
            </div>

            <h3
              className={clsx(
                'font-sans leading-tight font-bold tracking-tight transition-colors duration-500',
                isExpanded
                  ? 'text-sm text-[#0F172A] sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                  : 'text-sm text-[#0F172A] sm:text-base md:text-lg lg:text-xl xl:text-xl',
              )}
            >
              {advantage.title}
            </h3>
          </div>

          {/* 关键指标突出显示 */}
          <div
            className={clsx(
              'transition-opacity delay-100 duration-500',
              isExpanded ? 'opacity-100' : 'opacity-80',
            )}
          >
            <div className="flex items-baseline space-x-1 sm:space-x-1.5 lg:space-x-2">
              <span
                className={clsx(
                  'font-bold transition-colors duration-500',
                  'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
                  'text-[#0055ff]'
                )}
              >
                {advantage.metric}
              </span>
              <span
                className={clsx(
                  'font-mono text-[10px] font-medium uppercase tracking-widest transition-colors duration-500 sm:text-[10px] lg:text-xs',
                  'text-[#64748B]'
                )}
              >
                核心指标
              </span>
            </div>
          </div>
        </div>

        {/* 未选中时显示的重要文案 */}
        {!isExpanded && (
          <div className="flex flex-1 flex-col justify-start pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
            <div className="space-y-2 text-center sm:space-y-3 lg:space-y-4">
              <p className="px-1 text-xs font-medium leading-relaxed text-[#64748B] sm:px-2 sm:text-xs lg:px-3 lg:text-sm">
                {advantage.description.slice(0, 40)}...
              </p>
              <div className="flex justify-center space-x-2 text-xs text-[#64748B] sm:space-x-3 md:space-x-4 lg:space-x-6">
                {advantage.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="flex items-center font-medium">
                    <div className="mr-1 h-1 w-1 rounded-sm bg-[#0055ff] sm:mr-1 sm:h-1 sm:w-1 lg:mr-1.5 lg:h-1.5 lg:w-1.5" />
                    <span className="max-w-[60px] truncate sm:max-w-[70px] md:max-w-[80px] lg:max-w-none">
                      {highlight}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 展开内容区域 - 优化布局结构 */}
        <div
          className={clsx(
            'transition-all delay-200 duration-700',
            isExpanded
              ? 'max-h-[500px] flex-1 opacity-100'
              : 'max-h-0 overflow-hidden opacity-0',
          )}
        >
          {/* 主要内容容器 - 改进内容层次和间距 */}
          <div className="flex h-full flex-col justify-between">
            {/* 文案内容区域 */}
            <div className="flex-1 space-y-4 lg:space-y-5 xl:space-y-6">
              {/* 产品描述 - 优化排版 */}
              <div className="relative">
                <div
                  className={clsx(
                    'absolute top-0 -left-3 h-full w-1 transition-all duration-500',
                    'bg-[#0055ff]'
                  )}
                />
                <div className="pl-2 sm:pl-3 md:pl-4">
                  <p
                    className={clsx(
                      'text-xs leading-relaxed transition-all duration-500 sm:text-sm md:text-sm lg:text-base xl:text-lg',
                      'font-normal tracking-wide',
                      'text-[#0F172A]'
                    )}
                  >
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* 核心亮点区域 - 改进视觉层次 */}
              <div className="space-y-2 lg:space-y-2.5">
                <div className="flex items-center space-x-2">
                  <div
                    className={clsx(
                      'h-2 w-2 transition-all duration-500',
                      'bg-[#0055ff]'
                    )}
                  />
                  <h4
                    className={clsx(
                      'text-sm font-semibold transition-colors duration-500 lg:text-base',
                      'text-[#0F172A]'
                    )}
                  >
                    核心亮点
                  </h4>
                </div>

                {/* 亮点列表 - 优化布局 */}
                <div className="grid grid-cols-1 gap-1 pl-2 sm:gap-1.5 sm:pl-3 md:gap-1.5 md:pl-4 lg:gap-2">
                  {advantage.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className={clsx(
                        'flex items-start space-x-2 py-0.5 text-xs sm:space-x-3 sm:py-1 sm:text-xs lg:text-sm',
                        'text-[#64748B]'
                      )}
                    >
                      <div
                        className={clsx(
                          'mt-1 h-1 w-1 flex-shrink-0 rounded-sm sm:mt-1.5 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2',
                          'bg-[#0055ff]'
                        )}
                      />
                      <span className="leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰与状态指示器 */}
        <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between sm:right-6 sm:bottom-4 sm:left-6 md:right-7 md:bottom-5 md:left-7 lg:right-8 lg:bottom-6 lg:left-8">
          {/* 进度指示器 */}
          <div
            className={clsx(
              'flex items-center space-x-0.5 transition-all duration-500 sm:space-x-1',
              isExpanded ? 'opacity-100' : 'opacity-40',
            )}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'h-0.5 transition-all duration-300 sm:h-1',
                  i === index
                    ? isExpanded
                      ? 'w-4 bg-[#0055ff] sm:w-6 md:w-8'
                      : 'w-4 bg-[#0055ff] sm:w-6 md:w-8'
                    : 'w-1 bg-[#E2E8F0] sm:w-2',
                  i <= index ? 'opacity-100' : 'opacity-50',
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* 展开指示器 */}
          <div
            className={clsx(
              'transition-opacity duration-500',
              isExpanded ? 'opacity-100' : 'opacity-60',
            )}
          >
            <ArrowRightIcon
              className={clsx(
                'h-3 w-3 sm:h-4 sm:w-4',
                isExpanded ? 'text-[#0055ff]' : 'text-[#64748B]',
              )}
            />
          </div>
        </div>

        {/* 右上角序号标识 */}
        <div className="absolute top-4 right-3 sm:top-5 sm:right-4 md:top-6 md:right-5 lg:top-7 lg:right-6 xl:top-8 2xl:top-10">
          <div
            className={clsx(
              'flex h-6 w-6 items-center justify-center transition-all duration-500 sm:h-7 sm:w-7 md:h-8 md:w-8',
              'text-xs font-bold sm:text-xs md:text-xs',
              isExpanded
                ? 'border border-[#E2E8F0] bg-white font-mono text-[#0055ff]'
                : 'border border-[#E2E8F0] bg-white font-mono text-[#64748B]',
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端产品优势卡片组件 - 简化版
 * 采用简洁的设计风格，减少视觉噪音，突出核心信息
 * @param {AdvantageCard} advantage - 产品优势数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileAdvantageCard({
  advantage,
  index,
}: {
  advantage: AdvantageCard
  index: number
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div className="relative overflow-hidden rounded-sm border border-[#E2E8F0] bg-white p-4 transition-all hover:border-[#0055ff]/30 hover:shadow-md">
      {/* 顶部区域：类别标签和序号 */}
      <div className="relative mb-3 flex items-center justify-between">
        <span className="inline-flex items-center border border-[#E2E8F0] bg-white px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-[#0055ff]">
          {advantage.category}
        </span>
        <span className="flex h-6 w-6 items-center justify-center border border-[#E2E8F0] bg-white font-mono text-[10px] font-bold text-[#64748B]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* 标题与图标 */}
      <div className="relative mb-3 flex items-center">
        <IconComponent className="mr-2 h-5 w-5 flex-shrink-0 text-[#0055ff]" />
        <h3 className="font-sans text-base font-semibold text-[#0F172A]">
          {advantage.title}
        </h3>
      </div>

      {/* 关键指标 */}
      <div className="relative mb-3">
        <span className="text-xl font-bold text-[#0055ff]">
          {advantage.metric}
        </span>
        <span className="ml-1 font-mono text-[10px] font-medium uppercase tracking-widest text-[#64748B]">核心指标</span>
      </div>

      {/* 描述文本 */}
      <p className="relative mb-3 text-sm leading-relaxed text-[#64748B]">
        {advantage.description}
      </p>

      {/* 核心亮点 - 简化显示 */}
      <div className="relative flex flex-wrap gap-1">
        {advantage.highlights.map((highlight, highlightIndex) => (
          <span
            key={highlightIndex}
            className="border border-[#E2E8F0] bg-white px-2 py-1 font-mono text-[10px] font-medium tracking-widest text-[#64748B]"
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * 产品优势展示组件 - 全面响应式设计
 * 桌面端：手风琴样式交互，平板端：简化手风琴，移动端：垂直卡片布局
 * 展示优刻云ECS的核心产品优势，支持多端适配
 * @returns {JSX.Element} 产品优势组件
 */
export default function Advantage() {
  // 默认展开第一个元素（仅桌面端和平板端使用）
  const [expandedIndex, setExpandedIndex] = useState(0)

  /**
   * 处理卡片展开状态切换（桌面端和平板端使用）
   * @param {number} index - 卡片索引
   */
  const handleCardToggle = (index: number) => {
    setExpandedIndex(index)
  }

  return (
    <section
      id="advantages"
      aria-label="产品优势"
      className="relative overflow-hidden bg-[#F8FAFC] py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24"
    >
      <Container className="relative">
        {/* 标题区域 - 响应式优化 */}
        <div className="mb-6 text-left sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="font-sans mb-3 text-xl font-bold leading-tight tracking-tight text-[#0F172A] sm:mb-4 sm:text-2xl md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl xl:mb-8 xl:text-5xl 2xl:text-6xl">
            产品优势
          </h2>
          <p className="max-w-none text-sm leading-relaxed text-[#64748B] sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-xl xl:max-w-5xl xl:text-2xl">
            优刻云云服务器
            ECS是优刻云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure
            as a Service）级别云计算服务。选择云服务器
            ECS，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* 桌面端手风琴布局 - 大屏幕显示 */}
        <div className="hidden h-[450px] gap-2 overflow-hidden xl:flex 2xl:h-[500px]">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              advantage={advantage}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 平板端简化手风琴布局 - 中等屏幕显示 */}
        <div className="hidden h-[350px] gap-1.5 overflow-hidden md:flex lg:h-[400px] lg:gap-2 xl:hidden">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              advantage={advantage}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端和小平板垂直布局 - 小屏幕显示 */}
        <div className="md:hidden">
          <div className="space-y-4 sm:space-y-5">
            {advantages.map((advantage, index) => (
              <div key={index} className="relative">
                <MobileAdvantageCard advantage={advantage} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
