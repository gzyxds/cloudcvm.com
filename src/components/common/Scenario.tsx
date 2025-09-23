'use client'

import clsx from 'clsx'
import Image from 'next/image'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  CloudIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { useState } from 'react'

/**
 * 服务能力卡片数据接口
 */
interface ServiceCard {
  /** 服务标题 */
  title: string
  /** 服务描述 */
  description: string
  /** 核心特性列表 */
  features: string[]
  /** 图标类型 */
  icon: 'chat' | 'cpu' | 'cloud' | 'sparkles'
  /** 数据指标 */
  metrics?: {
    label: string
    value: string
  }[]
}

/**
 * 服务能力数据源
 */
const serviceCards: ServiceCard[] = [
  {
    title: '智能对话引擎',
    description: '基于大语言模型的智能对话系统，支持多轮对话和上下文理解',
    features: ['实时语音识别', '自然语言理解', '多轮对话管理', '情感分析'],
    icon: 'chat',
    metrics: [
      { label: '响应时间', value: '<100ms' },
      { label: '准确率', value: '99.5%' },
    ],
  },
  {
    title: 'AI 脚本生成',
    description: '智能化脚本创作平台，快速生成符合业务场景的对话脚本',
    features: ['模板库管理', '场景化定制', '批量生成', '版本控制'],
    icon: 'cpu',
    metrics: [
      { label: '生成效率', value: '10倍提升' },
      { label: '模板数量', value: '500+' },
    ],
  },
  {
    title: '快速集成方案',
    description: '提供完整的SDK和API接口，支持多种开发语言和框架',
    features: ['RESTful API', 'WebSocket连接', 'SDK支持', '文档完善'],
    icon: 'cloud',
    metrics: [
      { label: '集成时间', value: '10分钟' },
      { label: '支持语言', value: '8种' },
    ],
  },
  {
    title: '业务流程自动化',
    description: '端到端的业务流程自动化解决方案，提升运营效率',
    features: ['工作流设计', '任务调度', '数据分析', '报表生成'],
    icon: 'sparkles',
    metrics: [
      { label: '效率提升', value: '300%' },
      { label: '成本降低', value: '60%' },
    ],
  },
]

/**
 * 获取图标组件
 * @param iconType - 图标类型
 * @returns 对应的图标组件
 */
function getIconComponent(iconType: string) {
  switch (iconType) {
    case 'chat':
      return ChatBubbleLeftRightIcon
    case 'cpu':
      return CpuChipIcon
    case 'cloud':
      return CloudIcon
    case 'sparkles':
      return SparklesIcon
    default:
      return ChatBubbleLeftRightIcon
  }
}

/**
 * 服务能力卡片组件
 * @param card - 服务卡片数据
 * @param isActive - 是否为激活状态
 * @param onClick - 点击回调函数
 */
function ServiceCard({
  card,
  isActive,
  onClick,
}: {
  card: ServiceCard
  isActive: boolean
  onClick: () => void
}) {
  const IconComponent = getIconComponent(card.icon)

  return (
    <div
      className={clsx(
        'group cursor-pointer overflow-hidden rounded-lg bg-white border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] active:scale-[0.98] dark:bg-gray-800 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]',
        isActive
          ? 'shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]'
          : '',
      )}
      onClick={onClick}
    >
      {/* 卡片头部 */}
      <div className="border-b border-gray-100 p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className={clsx(
              'flex h-10 w-10 flex-shrink-0 items-center justify-center transition-all duration-300 sm:h-12 sm:w-12',
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
            )}
          >
            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className={clsx(
                'mb-1 line-clamp-2 text-base font-semibold transition-colors duration-300 sm:mb-2 sm:text-lg',
                isActive
                  ? 'text-blue-900'
                  : 'text-gray-900 group-hover:text-blue-800',
              )}
            >
              {card.title}
            </h3>
            <p className="line-clamp-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
              {card.description}
            </p>
          </div>
        </div>
      </div>

      {/* 特性列表 */}
      <div className="p-4 sm:p-6">
        <div className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
          {card.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <CheckCircleIcon
                className={clsx(
                  'h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4',
                  isActive ? 'text-blue-600' : 'text-gray-400',
                )}
              />
              <span className="truncate text-xs text-gray-700 sm:text-sm">
                {feature}
              </span>
            </div>
          ))}
          {card.features.length > 3 && (
            <div className="pl-5 text-xs text-gray-500 sm:pl-7">
              +{card.features.length - 3} 更多功能
            </div>
          )}
        </div>

        {/* 数据指标 */}
        {card.metrics && (
          <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3 sm:gap-4 sm:pt-4">
            {card.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div
                  className={clsx(
                    'mb-0.5 text-sm font-bold sm:mb-1 sm:text-lg',
                    isActive ? 'text-blue-600' : 'text-gray-900',
                  )}
                >
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
        <button
          className={clsx(
            'flex w-full items-center justify-center gap-2 px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:py-3 sm:text-sm',
            isActive
              ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              : 'border border-gray-200 bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 active:bg-gray-100',
          )}
        >
          了解详情
          <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  )
}

/**
 * 数据展示面板组件
 * @param activeCard - 当前激活的服务卡片
 */
function DataPanel({ activeCard }: { activeCard: ServiceCard | null }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] dark:bg-gray-800 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]">
      {/* 面板头部 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-4 sm:px-6 sm:py-6 md:px-8">
        <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
          <div className="flex h-6 w-6 items-center justify-center bg-white/20 sm:h-8 sm:w-8">
            <CpuChipIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </div>
          <h3 className="text-lg font-bold text-white sm:text-xl">
            AI 服务能力总览
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-blue-100 sm:text-sm">
          基于先进的人工智能技术，为企业提供全方位的智能化解决方案
        </p>
      </div>

      {/* 核心数据展示 */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 md:gap-6">
          <div className="border border-blue-100 bg-blue-50 p-3 text-center sm:p-4 md:p-6">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              99.9%
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">服务可用性</div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-center sm:p-4 md:p-6">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              1000+
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">企业客户</div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-center sm:p-4 md:p-6">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              24/7
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">技术支持</div>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-center sm:p-4 md:p-6">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              50+
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">行业场景</div>
          </div>
        </div>

        {/* 当前选中服务的详细信息 */}
        {activeCard && (
          <div className="border border-gray-200 p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
              {(() => {
                const IconComponent = getIconComponent(activeCard.icon)
                return (
                  <IconComponent className="h-5 w-5 flex-shrink-0 text-blue-600 sm:h-6 sm:w-6" />
                )
              })()}
              <h4 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                {activeCard.title}
              </h4>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
              {activeCard.description}
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              {activeCard.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                  <span className="text-xs text-gray-700 sm:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 默认展示图片 */}
        {!activeCard && (
          <div className="relative h-48 overflow-hidden border border-gray-200 sm:h-56 md:h-64">
            <Image
              src="/images/screenshots/PrimaryFeatures.png"
              alt="AI 智能体演示界面"
              fill
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 p-4">
              <div className="text-center text-white">
                <h4 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                  AI 智能体平台
                </h4>
                <p className="text-xs opacity-90 sm:text-sm">
                  点击卡片查看详细信息
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * AI 服务能力展示组件 - 现代企业级设计
 * 采用蓝白色调，卡片式布局，突出数据与服务能力展示
 */
export function Scenario() {
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * 处理服务卡片点击事件
   * @param index - 卡片索引
   */
  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
      <Container>
        {/* 顶部标题区域 */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 sm:text-sm md:mb-6 md:px-4">
              <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              企业级 AI 解决方案
            </div>
            <h2 className="mb-4 px-2 text-2xl leading-tight font-bold text-gray-900 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
              依托大模型与云计算协同发展
              <span className="mt-1 block text-blue-600 md:mt-2">
                让 AI 触手可及
              </span>
            </h2>
            <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              基于先进的人工智能技术，为企业提供全方位的智能化解决方案，助力数字化转型升级
            </p>
          </div>
        </div>

        {/* 主体布局：响应式网格布局 */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* 左侧：数据展示面板 - 移动端在上方，桌面端在左侧 */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <DataPanel activeCard={serviceCards[activeIndex]} />
            </div>
          </div>

          {/* 右侧：服务能力卡片网格 - 移动端在下方，桌面端在右侧 */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {serviceCards.map((card, index) => (
                <ServiceCard
                  key={card.title}
                  card={card}
                  isActive={activeIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 底部行动号召区域 */}
        <div className="mt-12 text-center md:mt-16 lg:mt-20">
          <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-3 px-2 text-xl font-bold text-white sm:mb-4 sm:text-2xl lg:text-3xl">
                准备好开始您的 AI 之旅了吗？
              </h3>
              <p className="mb-6 px-4 text-sm leading-relaxed text-blue-100 sm:mb-8 sm:text-base lg:text-lg">
                立即体验我们的 AI 智能体平台，感受人工智能为您的业务带来的变革
              </p>
              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                <button className="bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 active:bg-blue-100 sm:px-8 sm:py-4 sm:text-base">
                  免费试用
                </button>
                <button className="border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 active:bg-blue-50 sm:px-8 sm:py-4 sm:text-base">
                  联系销售
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
