'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import {
  Cloud,
  Lock,
  Server,
  Cpu,
  ShieldCheck,
  BarChart3,
  Terminal,
  ArrowRight,
  Database,
  Zap,
  Globe
} from 'lucide-react'

/**
 * 云计算功能数据类型定义
 */
interface CloudFeature {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
}

/**
 * Bento Grid 数据源
 * 包含六个核心功能分类：基础服务、安全防护、数据管理、AI智能、性能监控、开发工具
 * 使用 col-span 和 row-span 控制网格布局
 */
const bentoFeatures: CloudFeature[] = [
  {
    id: 'basic',
    name: '基础服务',
    icon: Server,
    title: '弹性计算与网络分发',
    description: '提供秒级启动的云服务器和全球加速网络，助您快速构建高可用应用架构。',
    className: 'col-span-2 md:col-span-2 md:row-span-1',
  },
  {
    id: 'security',
    name: '安全防护',
    icon: ShieldCheck,
    title: 'DDoS 防护体系',
    description: 'Tbps 级防护能力，智能清洗流量，保障业务永续在线。',
    className: 'col-span-1 md:col-span-1 md:row-span-1',
  },
  {
    id: 'ai',
    name: 'AI 智能',
    icon: Cpu,
    title: '企业级 AI 解决方案',
    description: '内置大模型与机器学习平台，一键部署训练环境，加速智能化转型。支持 GPU 算力调度与模型微调。',
    className: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2',
  },
  {
    id: 'data',
    name: '数据管理',
    icon: Database,
    title: '云原生数据库',
    description: '高并发、低延迟的分布式数据库服务，支持自动备份与容灾。',
    className: 'col-span-1 md:col-span-2 md:row-span-1',
  },
  {
    id: 'monitor',
    name: '性能监控',
    icon: BarChart3,
    title: '全链路可观测性',
    description: '实时监控资源状态，提供秒级告警与智能根因分析。',
    className: 'col-span-1 md:col-span-1 md:row-span-1',
  },
  {
    id: 'devtools',
    name: '开发工具',
    icon: Terminal,
    title: 'DevOps 一体化',
    description: '从代码提交到自动发布的完整流水线，提升研发效能。',
    className: 'col-span-1 md:col-span-1 md:row-span-1',
  }
]

/**
 * Bento Grid 卡片组件 - 核心功能特性展示单元。
 *
 * 设计规范：
 * - 边框：细边框 #E2E8F0，Hover 时变为 #0055ff/30
 * - 圆角：统一使用 rounded-xl
 * - 背景：纯白背景，Hover 时增加投影
 * - 字体：标题 font-sans，正文 Slate 500
 *
 * @param props - 组件属性
 * @param props.feature - 功能特性数据对象
 * @param props.index - 索引，用于交错动画延迟
 * @returns 渲染后的卡片组件
 */
function BentoCard({ feature, index }: { feature: CloudFeature; index: number }) {
  const IconComponent = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={clsx(
        'group relative overflow-hidden rounded-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 border border-[#E2E8F0] bg-white hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
        feature.className
      )}
    >
      {/* 装饰性背景图标 */}
      <div className="absolute -right-12 -bottom-12 opacity-[0.06] text-[#0F172A] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
        <IconComponent className="h-56 w-56" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff] transition-colors group-hover:bg-[#eff6ff]">
          <IconComponent className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>

        <h3 className="text-xl sm:text-3xl font-bold mb-3 tracking-tight text-[#0F172A]">
          {feature.title}
        </h3>

        <p className="text-sm sm:text-lg leading-relaxed max-w-[95%] text-[#64748B]">
          {feature.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm sm:text-base font-semibold transition-opacity opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
        <span className="text-[#0055ff]">了解详情</span>
        <ArrowRight className="h-5 w-5 text-[#0055ff]" />
      </div>
    </motion.div>
  )
}

/**
 * 云计算功能展示区块 (Accordion Section)
 * 采用流行的 Bento Grid 网格布局展示核心特性。
 *
 * 视觉风格：
 * - 背景：白色 + 细微网格纹理
 * - 布局：3列网格，支持跨行跨列
 * - 响应式：移动端单列，桌面端三列
 *
 * @returns 渲染后的云计算功能展示区块
 */
export function Accordion() {
  return (
    <section className="relative overflow-hidden border-t border-[#E2E8F0] bg-gradient-to-b from-white via-[#eff6ff]/20 to-[#eff6ff] py-12 sm:py-16 lg:py-24" id="cloud-features">
      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-[#64748B] rounded-full"
          >
            <Cloud className="h-4 w-4 text-[#0055ff]" />
            <span>CLOUD FEATURES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-8"
          >
            构建未来的
            <span className="text-[#0055ff] px-3">
              数字化基石
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto"
          >
            无论您是初创团队还是大型企业，我们提供全栈式云服务能力，
            <br className="hidden sm:block" />
            助力您在数字经济时代保持领先优势。
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-[minmax(240px,auto)] sm:auto-rows-[minmax(280px,auto)]">
          {bentoFeatures.map((feature, index) => (
            <BentoCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
