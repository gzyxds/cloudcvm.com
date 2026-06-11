'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  KeyIcon,
  LockClosedIcon,
  ScaleIcon,
  ServerStackIcon,
  ShieldCheckIcon,
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
  { id: 'challenges', label: '开发挑战' },
  { id: 'advantages', label: '核心优势' },
  { id: 'architecture', label: '架构设计' },
  { id: 'products', label: '推荐产品' },
  { id: 'cta', label: '立即咨询' },
]

const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: GlobeAltIcon,
    eyebrow: '稳定性',
    title: '高可用API服务',
    description: '提供稳定可靠的后端API服务，支持App、小程序、H5多端接入，确保业务连续运行。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性',
    title: '弹性扩容能力',
    description: '应对流量高峰，自动弹性扩缩资源，支持双十一、新品发布等突发场景。',
  },
  {
    icon: CircleStackIcon,
    eyebrow: '存储',
    title: '文件存储服务',
    description: '提供图片、音视频等文件的高效存储，支持CDN加速，让内容快速触达用户。',
  },
  {
    icon: ServerStackIcon,
    eyebrow: '安全',
    title: '安全防护体系',
    description: 'API鉴权、数据加密、防攻击防护，全方位保障移动应用安全。',
  },
  {
    icon: BoltIcon,
    eyebrow: '效率',
    title: '快速开发部署',
    description: '一站式后端服务，减少开发成本，让团队专注于业务逻辑创新。',
  },
]

const CHALLENGE_ITEMS: CommonCardItem[] = [
  {
    icon: ScaleIcon,
    title: '多端适配复杂度高',
    description: '同时开发App、小程序、H5，技术栈分散，维护成本高，用户体验难以统一。',
  },
  {
    icon: ChartBarIcon,
    title: '流量波动难预测',
    description: '促销活动、热点事件导致流量突增，自建服务难以快速应对，影响用户体验。',
  },
  {
    icon: LockClosedIcon,
    title: '安全性要求高',
    description: '用户数据、支付信息需要严格保护，API鉴权、防刷、防攻击缺一不可。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '开发效率待提升',
    description: '重复造轮子，后端服务、存储、CDN等基础设施分散，集成调试耗时耗力。',
  },
]

const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: GlobeAltIcon,
    title: '多端统一接入',
    description:
      '一套API服务同时支持App、小程序、H5，统一管理，降低维护成本，加速业务迭代。',
  },
  {
    icon: ArrowPathIcon,
    title: '弹性伸缩能力',
    description:
      '根据业务流量自动扩缩资源，从容应对高峰期，确保用户体验稳定流畅。',
  },
  {
    icon: ShieldCheckIcon,
    title: '全面安全保障',
    description:
      '提供API鉴权、数据加密、防攻击等安全能力，让移动应用安全无忧。',
  },
]

const ARCHITECTURE_POINTS = [
  {
    label: '接入层',
    description: '统一API网关，支持App、小程序、H5多端接入，提供鉴权、限流、监控能力。',
  },
  {
    label: '业务层',
    description: '弹性后端服务，支持快速部署、自动扩缩，让业务逻辑专注于创新。',
  },
  {
    label: '数据层',
    description: '数据库、缓存、对象存储协同工作，确保数据一致性和高可用性。',
  },
  {
    label: 'CDN层',
    description: '全球CDN加速，让内容快速触达用户，提升加载速度和用户体验。',
  },
  {
    label: '安全层',
    description: 'WAF防护、DDoS高防、数据加密，全方位保障移动应用安全。',
  },
  {
    label: '监控层',
    description: '实时监控系统状态、API调用、业务指标，快速定位和解决问题。',
  },
]

const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '弹性云服务器 ECS',
    description: '承载后端服务，支持秒级交付、弹性扩缩，满足移动应用多变的算力需求。',
    tags: ['弹性计算', '快速部署'],
  },
  {
    icon: CircleStackIcon,
    title: '云数据库',
    description: '提供MySQL、Redis等数据库服务，支持读写分离、自动备份，保障数据安全。',
    tags: ['高可用', '自动备份'],
  },
  {
    icon: CloudIcon,
    title: '对象存储 OSS',
    description: '存储图片、音视频等文件，支持高并发访问，配合CDN实现快速分发。',
    tags: ['海量存储', '高可靠'],
  },
  {
    icon: GlobeAltIcon,
    title: '内容分发 CDN',
    description: '全球节点加速，让内容快速触达用户，提升加载速度和用户体验。',
    tags: ['全球加速', '低延迟'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Web 应用防火墙',
    description: '防护SQL注入、XSS攻击等常见Web威胁，保障API接口安全。',
    tags: ['安全防护', '防攻击'],
  },
  {
    icon: LockClosedIcon,
    title: 'DDoS 高防',
    description: '抵御大流量DDoS攻击，保障移动应用和API服务稳定运行。',
    tags: ['DDoS防护', '高可用'],
  },
  {
    icon: KeyIcon,
    title: 'SSL 证书',
    description: '保障数据传输加密，建立用户信任，支持HTTPS安全访问。',
    tags: ['HTTPS', '数据加密'],
  },
  {
    icon: ServerStackIcon,
    title: '负载均衡',
    description: '将流量分发到多台服务器，提升系统并发能力和可用性。',
    tags: ['负载均衡', '高并发'],
  },
]

const CAPABILITY_ITEMS: CommonCardItem[] = [
  {
    icon: UserGroupIcon,
    title: '用户认证服务',
    description: '提供统一的用户登录、注册、权限管理，支持手机号、微信、支付宝等多种方式。',
  },
  {
    icon: ChartBarIcon,
    title: '数据统计分析',
    description: '打通用户行为、业务数据，提供实时统计、趋势分析，辅助决策。',
  },
  {
    icon: ArrowPathIcon,
    title: '消息推送服务',
    description: '支持App推送、小程序订阅消息、短信通知，多渠道触达用户。',
  },
  {
    icon: GlobeAltIcon,
    title: '多端适配能力',
    description: '一套API同时支持App、小程序、H5，降低开发成本，统一用户体验。',
  },
]

/**
 * 自定义 Hook：监听滚动以更新当前激活的导航项
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
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/mobile.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      
      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            App/小程序/H5/全栈移动解决方案
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            移动应用全栈解决方案
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            为App、小程序和H5业务提供稳定API、弹性后端、文件存储和内容分发能力，助力企业快速构建移动应用生态。
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
 * 页面方案详情区域组件
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Solution Overview"
          title="专业移动云服务，让应用更稳定、更快速"
          description="基于现代移动应用需求，提供高可用、高性能、易扩展的整体云服务方案。"
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
                为移动应用构建稳定、高效、可扩展的云服务底座
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                方案围绕API服务、弹性后端、文件存储、内容分发展开，适用于电商、社交、教育、工具等各类移动应用场景。
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 电商与O2O应用
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 社交与内容平台
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 教育与在线课程
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 工具与效率应用
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
 * 页面挑战区域组件
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
              Development Challenges
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              移动应用开发的关键挑战
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从多端适配到弹性扩容，移动应用开发过程中不仅需要关注产品本身，还需要一套稳定、高效、安全的基础设施方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['多端适配', '弹性扩容', '安全防护', '内容分发', '开发效率'].map((tag) => (
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
 * 页面优势区域组件
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="构建稳定高效的移动应用基础设施"
          description="将API服务、弹性扩容、安全防护编排成完整的云方案，加速业务发展。"
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
 * 页面架构区域组件
 */
function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Architecture Design"
          title="移动应用全栈架构设计"
          description="通过接入层、业务层、数据层和CDN层的分层设计，实现从API服务到内容分发的全链路稳定保障。"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex h-14 items-center justify-center rounded-xl bg-white font-bold text-slate-900 shadow-sm">
              移动应用层
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                弹性计算
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                容器服务
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl bg-[#0055ff] font-bold text-white shadow-sm">
              数据持久层
            </div>
            <div className="grid grid-cols-3 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                数据库
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                缓存
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                存储
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-transparent text-sm font-bold text-slate-400">
              CDN + 安全 + 监控
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
/**
 * 页面产品区域组件
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Recommended Products"
          title="核心云产品组合"
          description="基于移动应用需求，提供满足高并发、高可用与安全要求的云基础设施。"
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
 * 页面能力区域组件
 */
function CapabilitySection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Extended Capabilities"
          title="多维度的业务赋能"
          description="在底层基础设施之上，提供丰富的拓展能力，全面加速移动应用发展。"
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
 * 页面咨询区域组件
 */
function CTASection() {
  return (
    <section id="cta" className="scroll-mt-20 bg-[#0055ff] py-16 md:py-24 text-center relative overflow-hidden">
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
            为您的移动应用搭建稳定云底座
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            联系我们的移动应用方案顾问，获取专属架构规划与测试资源。
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
 * 移动应用解决方案主页面
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，完全适配多端响应式展示。
 */
export default function MobilePage() {
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
