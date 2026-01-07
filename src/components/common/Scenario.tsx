'use client'

import clsx from 'clsx'
import {
  Bot,
  BarChart3,
  Cloud,
  Sparkles
} from 'lucide-react'
import { Container } from '@/components/Container'
import { useState } from 'react'
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

  return (
    <div className={clsx(
      "group relative overflow-hidden bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1",
      isLarge ? "flex flex-col h-[600px] lg:h-[680px]" : "flex h-[280px] lg:h-[320px]"
    )}>
      {/* 顶部/右侧 插图区域 */}
      <div className={clsx(
        "relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] to-white",
        isLarge ? "h-[50%] order-1 border-b border-slate-100" : "w-[45%] order-2 border-l border-slate-100 h-full"
      )}>
        <Image
          src={illustrationImages[card.illustration]}
          alt={card.title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      {/* 底部/左侧 内容区域 */}
      <div className={clsx(
        "flex flex-col justify-between",
        isLarge ? "flex-1 order-2 p-10 sm:p-12" : "flex-1 order-1 py-10 px-10 sm:px-12"
      )}>
        <div>
          {/* 标签 */}
          <div className="flex items-center gap-2 mb-6">
             {/* 装饰图标 */}
             {card.icon === 'chat' && <Bot className="w-5 h-5 text-purple-500" />}
             {card.icon === 'cpu' && <BarChart3 className="w-5 h-5 text-blue-500" />}
             {card.icon === 'cloud' && <Cloud className="w-5 h-5 text-sky-500" />}
             {card.icon === 'sparkles' && <Sparkles className="w-5 h-5 text-pink-500" />}

             <span className="text-sm font-bold tracking-wide text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
               {card.tag}
             </span>
          </div>

          <h3 className={clsx(
            "font-bold text-slate-900 mb-4",
            isLarge ? "text-3xl" : "text-2xl"
          )}>
            {card.title}
          </h3>

          <p className={clsx(
            "text-slate-500 leading-relaxed",
            isLarge ? "text-lg line-clamp-3" : "text-base line-clamp-3"
          )}>
            {card.description}
          </p>
        </div>

        {/* 按钮组 */}
        <div className="mt-8 flex items-center gap-4">
          {card.primaryAction && (
            <button className="px-6 py-3 bg-[#0055ff] text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              {card.primaryAction}
            </button>
          )}
          {card.secondaryAction && (
             <button className="px-6 py-3 bg-white text-slate-600 border border-slate-200 text-base font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
               {card.secondaryAction}
             </button>
          )}
          {!card.secondaryAction && isLarge === false && (
             <button className="px-5 py-2.5 bg-white text-slate-600 border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
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
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-32 lg:py-40 selection:bg-[#0055ff] selection:text-white">
      <Container>
        {/* 标题区域 */}
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-1.5 text-sm font-bold tracking-[0.2em] text-slate-500 rounded-full shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-[#0055ff]" />
            <span>SCENARIO SOLUTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight"
          >
            全场景
            <span className="mx-3 text-[#0055ff] relative">
              智能化
              <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-100 -z-10 opacity-60 rounded-full" />
            </span>
            解决方案
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-600 lg:mx-0 font-medium"
          >
            深入业务核心场景，为您提供开箱即用的智能化服务能力。无论是客户服务、内容创作还是系统运维，都能找到最适合的解决方案。
          </motion.p>
        </div>

        {/* 网格布局 - 调整比例为 30/30/40 */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
          {/* 大卡片 1 - 占 3/10 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ScenarioCard card={serviceCards[0]} variant="large" />
          </motion.div>

          {/* 大卡片 2 - 占 3/10 */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ScenarioCard card={serviceCards[1]} variant="large" />
          </motion.div>

          {/* 右侧小卡片堆叠 - 占 4/10，提供更宽展示空间 */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8 justify-between h-full">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <ScenarioCard card={serviceCards[2]} variant="small" />
            </motion.div>

            <motion.div
              className="flex-1"
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
