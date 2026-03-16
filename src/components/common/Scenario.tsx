'use client'

import clsx from 'clsx'
import {
  Bot,
  BarChart3,
  Cloud,
  Sparkles
} from 'lucide-react'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * 服务能力卡片数据接口
 */
interface ServiceCard {
  tag: string
  title: string
  description: string
  icon: 'chat' | 'cpu' | 'cloud' | 'sparkles'
  illustration: 'agent' | 'data' | 'vision' | 'digital'
  primaryAction: string
  secondaryAction?: string
}

/**
 * 服务能力数据源
 */
const serviceCards: ServiceCard[] = [
  {
    tag: '多智能体协同Agent',
    title: '智能对话引擎',
    description: '基于万亿级参数大模型的智能对话系统，支持多模态交互与意图精准识别，为开发者提供Agent开发所需要的模型、编排能力。',
    icon: 'chat',
    illustration: 'agent',
    primaryAction: '立即体验',
    secondaryAction: '了解详情'
  },
  {
    tag: '工作流编排',
    title: 'AIGC 内容创作',
    description: 'AI时代的敏捷数据底座，通过一站式多模态数据管理与处理能力，构建智能化基础设施，加速模型迭代。',
    icon: 'cpu',
    illustration: 'data',
    primaryAction: '立即使用',
    secondaryAction: '联系咨询'
  },
  {
    tag: '云端极速部署',
    title: '一见·多模态视觉管理',
    description: '基于多模态大模型的全视觉管理数字化平台，围绕企业生产运行全环节，保障安全质量。',
    icon: 'cloud',
    illustration: 'vision',
    primaryAction: '了解详情'
  },
  {
    tag: '智能决策中台',
    title: '数字员工·营销内容创作',
    description: 'Deepseek支持AI脚本一键生成，助力视频内容分钟级生产，适配多业务场景。',
    icon: 'sparkles',
    illustration: 'digital',
    primaryAction: '了解详情'
  },
]



/**
 * 场景卡片组件
 */
function ScenarioCard({ card, variant = 'large' }: { card: ServiceCard, variant?: 'large' | 'small' }) {
  const isLarge = variant === 'large'

  const illustrationImages = {
    agent: '/images/screenshots/scenario-agent.png',
    data: '/images/screenshots/scenario-data.png',
    vision: '/images/screenshots/scenario-vision.png',
    digital: '/images/screenshots/scenario-digital.png'
  }

  const iconMap = {
    chat: <Bot className="w-4 h-4 text-purple-500" />,
    cpu: <BarChart3 className="w-4 h-4 text-blue-500" />,
    cloud: <Cloud className="w-4 h-4 text-sky-500" />,
    sparkles: <Sparkles className="w-4 h-4 text-pink-500" />
  }

  return (
    <div className={clsx(
      "group relative overflow-hidden bg-white rounded-sm border border-[#E2E8F0] transition-all duration-300",
      "hover:shadow-lg hover:shadow-slate-200/50 hover:border-[#0055ff]/30",
      isLarge ? "flex flex-col h-[520px] sm:h-[580px] lg:h-[640px]" : "flex flex-row-reverse h-[260px] sm:h-[280px] lg:h-[300px]"
    )}>
      {/* 插图区域 */}
      <div className={clsx(
        "relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] to-white flex-shrink-0",
        isLarge ? "h-[45%] border-b border-[#E2E8F0]" : "w-[40%] border-l border-[#E2E8F0]"
      )}>
        <Image
          src={illustrationImages[card.illustration]}
          alt={card.title}
          fill
          className="object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>

      {/* 内容区域 */}
      <div className={clsx(
        "flex flex-col justify-between flex-1",
        isLarge ? "p-5 sm:p-6 lg:p-8" : "p-4 sm:p-5 lg:p-6"
      )}>
        <div>
          {/* 标签 */}
          <div className="flex items-center gap-2 mb-3">
            {iconMap[card.icon]}
            <span className="text-xs font-medium text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-sm">
              {card.tag}
            </span>
          </div>

          <h3 className={clsx(
            "font-bold text-[#0F172A] mb-2 group-hover:text-[#0055ff] transition-colors",
            isLarge ? "text-lg sm:text-xl lg:text-2xl" : "text-base sm:text-lg"
          )}>
            {card.title}
          </h3>

          <p className={clsx(
            "text-[#64748B] leading-relaxed",
            isLarge ? "text-sm sm:text-base line-clamp-3" : "text-xs sm:text-sm line-clamp-3"
          )}>
            {card.description}
          </p>
        </div>

        {/* 按钮组 */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5">
          {card.primaryAction && (
            <button className="px-4 sm:px-5 py-2 bg-[#0055ff] text-white text-sm font-medium rounded-sm hover:bg-[#0043cc] transition-colors shadow-sm hover:shadow-md hover:shadow-[#0055ff]/20">
              {card.primaryAction}
            </button>
          )}
          {card.secondaryAction && (
            <button className="px-4 sm:px-5 py-2 bg-white text-[#64748B] border border-[#E2E8F0] text-sm font-medium rounded-sm hover:text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-colors">
              {card.secondaryAction}
            </button>
          )}
          {!card.secondaryAction && !isLarge && (
            <button className="px-4 sm:px-5 py-2 bg-white text-[#64748B] border border-[#E2E8F0] text-sm font-medium rounded-sm hover:text-[#0F172A] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-colors">
              了解详情
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * 场景化解决方案展示区块 (Scenario Section)
 */
export function Scenario() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] py-16 sm:py-24 lg:py-32 selection:bg-[#0055ff] selection:text-white">
      <Container>
        {/* 标题区域 */}
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-4 py-1.5 text-sm font-medium tracking-wide text-[#64748B] rounded-sm"
          >
            <Sparkles className="h-4 w-4 text-[#0055ff]" />
            <span>SCENARIO SOLUTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0F172A] tracking-tight"
          >
            全场景
            <span className="text-[#0055ff]">智能化</span>
            解决方案
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#64748B] lg:mx-0"
          >
            深入业务核心场景，为您提供开箱即用的智能化服务能力。无论是客户服务、内容创作还是系统运维，都能找到最适合的解决方案。
          </motion.p>
        </div>

        {/* 网格布局 - 响应式设计：移动端单列，平板双列，桌面30/30/40比例 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 sm:gap-6 lg:gap-6">
          {/* 大卡片 1 - 占 3/10 */}
          <motion.div
            className="md:col-span-1 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ScenarioCard card={serviceCards[0]} variant="large" />
          </motion.div>

          {/* 大卡片 2 - 占 3/10 */}
          <motion.div
            className="md:col-span-1 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ScenarioCard card={serviceCards[1]} variant="large" />
          </motion.div>

          {/* 右侧小卡片堆叠 - 占 4/10 */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <ScenarioCard card={serviceCards[2]} variant="small" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <ScenarioCard card={serviceCards[3]} variant="small" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
