'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  RadioIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'

/**
 * 解决方案卡片数据接口
 * @interface SolutionCard
 * @property {string} title - 卡片标题
 * @property {string} description - 功能描述
 * @property {string[]} features - 核心功能特性
 * @property {string} bgImage - 背景图片路径
 */
interface SolutionCard {
  title: string
  description: string
  features: string[]
  bgImage: string
}

/**
 * 解决方案数据配置
 */
const solutions: SolutionCard[] = [
  {
    title: '音视频',
    description:
      '提供一站式视频解决方案，涵盖点播直播、实时视频通话、短视频等视频服务，广泛应用于在线视频、电商、游戏直播、在线教育等场景',
    features: ['广电级音视频处理', '在线视频点播', '实时音视频通话'],
    bgImage: '/images/screenshots/solution-1.png',
  },
  {
    title: '互动直播',
    description:
      '覆盖PK连麦直播、派对直播、视频相亲、在线自习室、互动课堂等多种场景，低延时的连麦互动，更优质的直播体验',
    features: ['PK连麦直播', '派对直播', '在线自习室'],
    bgImage: '/images/screenshots/solution-2.png',
  },
  {
    title: '在线教育',
    description: '快速搭建在线课堂平台，提供全面的在线学习解决方案',
    features: ['在线课堂', '互动教学', '学习管理'],
    bgImage: '/images/screenshots/solution-3.png',
  },
  {
    title: '游戏',
    description:
      '依托丰富的游戏生态资源和能力，共享海量游戏研发和运营经验，致力于打造高质量、全方位生态的游戏云服务平台',
    features: ['游戏多媒体引擎', '边缘加速平台', '游戏云服务'],
    bgImage: '/images/screenshots/solution-4.png',
  },
  {
    title: '游戏媒体',
    description:
      '一站式游戏视频工具包，视频转码、视频摘要提取、视频内容整理、视觉增强',
    features: ['视频转码', '内容整理', '视觉增强'],
    bgImage: '/images/screenshots/solution-5.png',
  },
]

/**
 * 根据标题获取对应的图标组件
 * @param {string} title - 卡片标题
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByTitle(title: string) {
  switch (title) {
    case '音视频':
      return VideoCameraIcon
    case '互动直播':
      return RadioIcon
    case '在线教育':
      return AcademicCapIcon
    case '游戏':
      return PuzzlePieceIcon
    case '游戏媒体':
      return FilmIcon
    default:
      return ChartBarIcon
  }
}

/**
 * 解决方案手风琴卡片组件（PC端）
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function SolutionCard({
  solution,
  isExpanded,
  onToggle,
}: {
  solution: SolutionCard
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden rounded-xl border transition-[flex] duration-500 ease-in-out',
        // 边框样式：默认 slate-200，Hover时变为主题色/30
        'border-slate-200 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
        // 背景样式：白色
        'bg-white',
        // 展开状态下的宽度占比
        isExpanded ? 'flex-[2.5]' : 'flex-[0.8]',
      )}
      onMouseEnter={onToggle}
    >
      {/* 选中时的背景渐变 */}
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] transition-opacity duration-300 pointer-events-none',
          isExpanded ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* 背景图片 - 完整显示 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url(${solution.bgImage})`,
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 flex h-full flex-col p-6">
        {/* 标题区域 - 始终可见，与箭头按钮对齐 */}
        <div className="mb-12 flex items-center justify-between">
          <h3 className="font-display py-2 text-xl font-bold tracking-tight text-white drop-shadow-md">
            {solution.title}
          </h3>

          {/* 箭头按钮图标 - 移动到标题行 */}
          <div
            className={clsx(
              'transition-opacity duration-300',
              isExpanded ? 'opacity-100' : 'opacity-80',
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:bg-[#0055ff] group-hover:border-[#0055ff] group-hover:text-white">
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* 展开内容 */}
        <div
          className={clsx(
            'flex-1 transition-opacity delay-100 duration-500',
            isExpanded ? 'opacity-100' : 'opacity-0',
          )}
        >
          {/* 描述文本 */}
          <p className="mb-6 text-base leading-relaxed text-white/90 drop-shadow-sm">
            {solution.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-white drop-shadow-md">
              核心功能
            </h4>
            {solution.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center text-base text-white/90 drop-shadow-sm"
              >
                <div className="mr-3 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* 左下角图标 - 根据标题动态显示 */}
        <div className="absolute bottom-4 left-4">
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent
                className={clsx(
                  'h-6 w-6 text-white drop-shadow-md transition-opacity duration-300',
                  isExpanded ? 'opacity-100' : 'opacity-60',
                )}
              />
            )
          })()}
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端解决方案卡片组件
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileSolutionCard({
  solution,
}: {
  solution: SolutionCard
}) {
  return (
    <div className="group relative h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 sm:h-[320px] md:h-[340px]">
      {/* 背景图片遮罩层 - 提高文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/85" />

      {/* 背景图片 - 淡化显示 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `url(${solution.bgImage})`,
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        {/* 标题和图标 */}
        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">
            {solution.title}
          </h3>
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent className="h-5 w-5 text-[#0055ff] sm:h-6 sm:w-6" />
            )
          })()}
        </div>

        {/* 描述文本 - 移除 line-clamp 限制，让内容完整显示 */}
        <p className="mb-3 text-sm leading-relaxed text-slate-600 sm:mb-4 sm:text-base md:text-base">
          {solution.description}
        </p>

        {/* 核心功能列表 */}
        <div className="space-y-2 sm:space-y-2.5">
          <h4 className="text-sm font-semibold text-slate-900 sm:text-base md:text-base">
            核心功能
          </h4>
          {solution.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-sm text-slate-600 sm:text-base md:text-base"
            >
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#0055ff] sm:mr-2.5 sm:h-1.5 sm:w-1.5" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * 解决方案展示组件 - 响应式设计
 * PC端：手风琴样式，移动端：网格布局
 * 为不同业务场景提供安全且高效的解决方案
 * @returns {JSX.Element} 解决方案组件
 */
export function Solution() {
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
      id="solutions"
      aria-label="业务解决方案"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-24"
    >
      <Container className="relative">
        {/* 标题区域 */}
        <div className="mb-4 text-left sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="font-display mb-2 text-lg font-bold tracking-tight text-slate-900 sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            为不同业务场景提供安全且高效的解决方案
          </h2>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            基于优刻云强大的基础设施，为您提供一站式行业解决方案，助力业务快速创新。
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden h-[400px] gap-4 overflow-hidden lg:flex xl:h-[500px]">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端网格布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          {/* 平板端：两列布局 */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
            {solutions.map((solution, index) => (
              <MobileSolutionCard
                key={index}
                solution={solution}
              />
            ))}
          </div>

          {/* 手机端：单列布局 */}
          <div className="space-y-4 sm:hidden">
            {solutions.map((solution, index) => (
              <MobileSolutionCard
                key={index}
                solution={solution}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
