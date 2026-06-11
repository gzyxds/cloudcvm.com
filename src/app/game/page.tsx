'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BoltIcon,
  ChartBarIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MapPinIcon,
  PlayIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/**
 * 图标组件类型定义
 */
type IconComponent = React.ComponentType<{ className?: string }>

/**
 * 通用数据接口定义
 */
interface SectionLink {
  id: string
  label: string
}

interface CommonCardItem {
  icon: IconComponent
  title: string
  description: string
  eyebrow?: string
  tags?: string[]
}

/**
 * 页面导航链接数据
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'overview', label: '方案概览' },
  { id: 'challenges', label: '行业挑战' },
  { id: 'advantages', label: '核心优势' },
  { id: 'architecture', label: '架构设计' },
  { id: 'products', label: '推荐产品' },
  { id: 'cta', label: '立即咨询' },
]

/**
 * 方案概览卡片数据 - 游戏行业五大核心能力
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: SignalIcon,
    eyebrow: '低延迟',
    title: '全球节点就近接入',
    description: '依托全球加速网络与边缘节点，将玩家到游戏服延迟降至最低，保障实时对战流畅体验。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '高防护',
    title: 'T 级 DDoS 攻击防御',
    description: '提供大流量高防清洗能力，有效抵御各类 DDoS 攻击，确保游戏服务持续在线不中断。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性',
    title: '开服秒级弹性扩容',
    description: '新游上线、版本更新、节假日高峰期间可分钟级扩容数千节点，轻松应对流量洪峰。',
  },
  {
    icon: GlobeAltIcon,
    eyebrow: '全球化',
    title: '一区部署全球同服',
    description: '支持跨地域多可用区部署，配合专线互联与智能 DNS 实现全球玩家就近接入。',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    eyebrow: '成本',
    title: '按需计费灵活可控',
    description: '根据游戏生命周期灵活调整资源配置，测试期低成本起步，上线期快速扩容。',
  },
]

/**
 * 行业挑战卡片数据 - 游戏行业四大核心挑战
 */
const CHALLENGE_ITEMS: CommonCardItem[] = [
  {
    icon: SignalIcon,
    title: '网络延迟影响玩家体验',
    description: '跨地域访问延迟高、卡顿频繁，直接影响玩家留存率与付费转化，尤其是实时对战类游戏。',
  },
  {
    icon: LockClosedIcon,
    title: 'DDoS 攻击威胁业务稳定',
    description: '游戏行业是 DDoS 攻击重灾区，动辄数百 G 流量冲击可能导致服务瘫痪与玩家大量流失。',
  },
  {
    icon: ChartBarIcon,
    title: '流量洪峰难以预测',
    description: '新游上线、活动推广、节假日峰值流量爆发式增长，传统 IDC 资源调度慢，难以快速响应。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '多区域部署运维复杂',
    description: '全球化运营需要多地部署，版本同步、数据一致性、运维管理难度成倍增加，人力成本高企。',
  },
]

/**
 * 核心优势卡片数据 - 游戏行业三大核心优势
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: BoltIcon,
    title: '超低延迟全球加速',
    description:
      '依托 BGP 高速网络与边缘计算节点，配合智能 DNS 调度，将玩家到最近节点的延迟控制在极低水平，保障流畅对战体验。',
  },
  {
    icon: ShieldCheckIcon,
    title: '全方位安全防护',
    description:
      '从 DDoS 清洗、CC 攻击防御、Web 应用防火墙到主机安全加固，形成纵深防护体系，为游戏运营保驾护航。',
  },
  {
    icon: ServerStackIcon,
    title: '弹性伸缩与敏捷交付',
    description:
      '基于云原生架构，支持开服/合服/跨服等游戏典型场景的快速响应，分钟级完成资源调度与部署。',
  },
]

/**
 * 架构分层数据 - 游戏行业六层架构
 */
const ARCHITECTURE_POINTS = [
  {
    label: '接入层',
    description: '通过全局负载均衡与边缘加速节点承接玩家流量，保障低延迟接入与入口安全防护能力。',
  },
  {
    label: '逻辑层',
    description: '大厅服务、匹配系统、排行榜等无状态服务集群部署，支持弹性扩容与灰度发布。',
  },
  {
    label: '战斗层',
    description: '实时对战服务器就近部署，结合高速网络互联确保帧同步与状态同步的低延迟体验。',
  },
  {
    label: '数据层',
    description: '数据库主备读写分离、Redis 缓存加速与对象存储协同运行，确保玩家数据安全可靠。',
  },
  {
    label: '安全层',
    description: '提供 DDoS 清洗、CC 防御、入侵检测与应用加密，全方位保障游戏业务安全稳定运行。',
  },
  {
    label: '运营层',
    description: '实时监控玩家在线数、服务器负载与异常告警，实现全链路可视化与快速故障响应。',
  },
]

/**
 * 推荐产品卡片数据 - 游戏行业八大核心产品
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '云服务器 CVM',
    description: '承载游戏大厅、战斗逻辑与后端服务，支持高性能实例与 GPU 渲染型实例，满足不同类型游戏需求。',
    tags: ['高性能', 'GPU 渲染'],
  },
  {
    icon: CircleStackIcon,
    title: '云数据库',
    description: 'MySQL/Redis/MongoDB 多种数据库选型，满足玩家数据、排行榜、匹配队列等多样化业务需求。',
    tags: ['读写分离', '自动备份'],
  },
  {
    icon: CloudIcon,
    title: 'CDN 内容加速',
    description: '加速游戏安装包、资源更新与静态素材的全球分发，大幅提升玩家下载与更新体验。',
    tags: ['全球加速', '边缘分发'],
  },
  {
    icon: ArrowsRightLeftIcon,
    title: '负载均衡 CLB',
    description: '在多可用区间自动分发流量，结合健康检查机制实现故障自动切换，保障入口层高可用。',
    tags: ['健康检查', '故障切换'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'DDoS 高防',
    description: '提供 T 级清洗能力，抵御 SYN Flood、UDP Flood、CC 攻击等常见游戏攻击手段。',
    tags: ['大流量清洗', '业务稳定'],
  },
  {
    icon: PlayIcon,
    title: '游戏多媒体引擎',
    description: '提供实时语音通话、语音消息与语音识别能力，增强游戏社交互动体验与玩家粘性。',
    tags: ['实时语音', '社交互动'],
  },
  {
    icon: MapPinIcon,
    title: '全球应用加速 GAAP',
    description: '大幅降低全球玩家访问延迟，实现跨地域的稳定低延迟通信，助力游戏出海运营。',
    tags: ['跨地域', '低延迟'],
  },
  {
    icon: GlobeAltIcon,
    title: '虚拟私有云 VPC',
    description: '实现游戏业务网络隔离、分区规划与安全组策略配置，满足不同环境的安全治理需求。',
    tags: ['网络隔离', '权限控制'],
  },
]

/**
 * 扩展能力卡片数据 - 游戏行业四大扩展能力
 */
const CAPABILITY_ITEMS: CommonCardItem[] = [
  {
    icon: UserGroupIcon,
    title: '游戏数据运营平台',
    description: '打通玩家行为、留存、付费等关键数据，辅助运营团队进行精细化数据分析与增长决策。',
  },
  {
    icon: ChartBarIcon,
    title: '实时监控与告警',
    description: '全链路监控玩家在线数、服务器负载、接口耗时，异常秒级告警，快速定位与响应。',
  },
  {
    icon: ArrowPathIcon,
    title: '持续交付体系',
    description: '配合灰度发布、热更新与快速回滚能力，降低版本更新风险并提升新功能上线效率。',
  },
  {
    icon: BoltIcon,
    title: '多游戏类型适配',
    description: '适配 MMORPG、MOBA、FPS、棋牌、休闲游戏等不同游戏类型的架构与性能需求。',
  },
]

/**
 * 自定义 Hook：监听滚动以更新当前激活的导航项
 * @param sectionIds - 需要监听的 section id 数组
 */
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * 动画卡片组件 - 实现玻璃拟态与微交互
 * @param children - 子组件内容
 * @param className - 额外的 CSS 类名
 * @param delay - 动画延迟时间（秒）
 */
function GlassCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

/**
 * 通用分区标题组件
 * @param eyebrow - 分区标签
 * @param title - 分区标题
 * @param description - 分区描述
 * @param align - 对齐方式
 */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <span className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0055ff]">
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl ${
          align === 'center' ? 'mx-auto max-w-2xl' : ''
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-relaxed text-slate-500 sm:text-lg ${
          align === 'center' ? 'mx-auto max-w-3xl' : ''
        }`}
      >
        {description}
      </p>
    </motion.div>
  )
}

/**
 * 页面锚点导航组件
 * 根据当前滚动位置高亮对应的导航项
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
 * 页面英雄区域组件
 * 展示游戏行业云计算解决方案的标题、描述与 CTA 按钮
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/game.png')] bg-cover bg-center bg-no-repeat opacity-20" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            游戏行业 / 低延迟 / 高防护
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            游戏行业云计算解决方案
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            为游戏开发者提供稳定、低延迟、高防护的云上部署方案，覆盖开服、扩容、安全防护与全球运营全生命周期，让游戏运行更流畅。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:flex-wrap">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              获取定制方案
            </Button>
            <Button href="#overview" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              查看方案详情
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 方案概览区域组件
 * 展示游戏行业云计算方案的五大核心能力
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Solution Overview"
          title="为游戏开发者打造稳定、流畅、安全的云上底座"
          description="基于游戏行业独特需求，提供低延迟、高防护、弹性扩展的整体云上解决方案，助力游戏全球化运营。"
        />

        {/* 核心介绍卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-[#0055ff] p-6 text-white sm:p-8 lg:p-10 shadow-xl shadow-[#0055ff]/20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                覆盖游戏全生命周期的云上解决方案
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                方案围绕低延迟网络、DDoS 防护、弹性扩缩与全球部署展开，适用于游戏开服、版本更新、全球同服、跨区对战等典型游戏运营场景。
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 新游首发与批量开服
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 全球同服实时对战
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 大型活动峰值扩容
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 游戏出海多区域部署
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 概览卡片 Bento Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {OVERVIEW_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="mb-2 block text-xs font-semibold text-[#0055ff]">
                {item.eyebrow}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行业挑战区域组件
 * 展示游戏行业面临的关键挑战
 */
function ChallengesSection() {
  return (
    <section id="challenges" className="scroll-mt-32 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold text-[#0055ff]">
              Industry Challenges
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              游戏运营面临的关键挑战
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从网络延迟到安全攻击，从流量洪峰到全球运维，游戏行业对底层基础设施的要求远高于普通互联网业务。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['网络延迟', 'DDoS 攻击', '流量洪峰', '全球部署', '运维效率'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CHALLENGE_ITEMS.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1} className="bg-slate-50/50">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 核心优势区域组件
 * 展示游戏行业解决方案的三大核心优势
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="低延迟 · 高防护 · 强弹性"
          description="围绕游戏运营全场景，将网络加速、安全防护与弹性伸缩编排成完整的云上方案，保障玩家极致体验。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1}>
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 架构设计区域组件
 * 展示游戏行业六层架构设计与架构图
 */
function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Architecture Design"
          title="游戏行业六层云架构"
          description="通过接入层、逻辑层、战斗层、数据层、安全层和运营层的分层设计，实现从玩家接入到战斗体验的全链路保障。"
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE_POINTS.map((point, index) => (
              <GlassCard key={point.label} delay={index * 0.1} className="bg-slate-50/50">
                <h3 className="text-base font-bold text-[#0055ff]">{point.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {point.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* 右侧架构示意图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex h-14 items-center justify-center rounded-xl bg-white font-bold text-slate-900 shadow-sm">
              游戏接入层
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                大厅服务
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                匹配系统
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl bg-[#0055ff] font-bold text-white shadow-sm">
              游戏战斗层
            </div>
            <div className="grid grid-cols-3 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                实时对战
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                帧同步
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                状态同步
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-transparent text-sm font-bold text-slate-400">
              数据 + 安全 + 运营
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 推荐产品区域组件
 * 展示游戏行业核心云产品组合
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Recommended Products"
          title="核心云产品组合"
          description="基于游戏业务视角，提供满足高并发、低延迟与高防护要求的云基础设施产品矩阵。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.05} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 扩展能力区域组件
 * 展示游戏行业多维度的业务赋能能力
 */
function CapabilitySection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Extended Capabilities"
          title="多维度的游戏业务赋能"
          description="在底层基础设施之上，提供丰富的游戏运营拓展能力，全面加速游戏业务增长。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITY_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1} className="flex items-start gap-4 p-5 bg-slate-50/50">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行动号召区域组件
 * 引导用户咨询或预约演示
 */
function CTASection() {
  return (
    <section id="cta" className="scroll-mt-20 bg-[#0055ff] py-16 md:py-24 text-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            立即咨询
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            准备好为您的游戏搭建稳定的云底座了吗？
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            联系我们的游戏行业方案顾问，获取专属架构规划与测试资源，让游戏运营更流畅。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              联系专属顾问
            </Button>
            <Button href="/demo" variant="erlieOutline" color="white" className="rounded-xl border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              预约产品演示
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 游戏行业解决方案主页面
 *
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，
 * 完全适配多端响应式展示。
 * 面向游戏开发者提供稳定、低延迟、高防护的云上部署方案。
 */
export default function GamePage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ChallengesSection />
      <AdvantagesSection />
      <ArchitectureSection />
      <ProductsSection />
      <CapabilitySection />
      <CTASection />
    </div>
  )
}
