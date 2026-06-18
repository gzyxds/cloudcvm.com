'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  KeyIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
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
 * 方案概览卡片数据 - 政府行业五大核心能力
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: BuildingLibraryIcon,
    eyebrow: '自主可控',
    title: '平台自主研发全面可控',
    description: '云平台核心技术自主研发，产品体系完备，提供安全、可靠、弹性、按需供给的云计算框架和服务。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '安全合规',
    title: '政务级安全防护',
    description: '满足等保三级要求，数据加密存储与传输，全程操作审计，保障政务数据安全不丢失、业务不中断。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性',
    title: '快速部署弹性扩展',
    description: '打破传统建设周期长的瓶颈，分钟级完成资源交付，灵活应对疫情等突发事件带来的业务冲击。',
  },
  {
    icon: WrenchScrewdriverIcon,
    eyebrow: '专业运维',
    title: '智能化运维管理',
    description: '全天候对 IT 基础设施运行状态监控告警，实施智能化专业运维，建立统一的服务监管与安全保障体系。',
  },
  {
    icon: GlobeAltIcon,
    eyebrow: '数据共享',
    title: '隐私计算数据开放',
    description: '依托安全屋提供合规化数据在线共享方案，实现数据所有权与使用权分离，打破部门数据孤岛。',
  },
]

/**
 * 行业挑战卡片数据 - 政府行业四大核心挑战
 */
const CHALLENGE_ITEMS: CommonCardItem[] = [
  {
    icon: ArrowPathIcon,
    title: '建设周期长',
    description: '传统建设方式周期长，动辄一年甚至几年，后期扩容受初期规划限制，无法满足政务应用快速部署需求。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '运维专业度低',
    description: '各部门独立建设数据机房，重复建设严重，能耗高且缺少专业化运维，不易建立统一的服务监管和安全保障体系。',
  },
  {
    icon: LockClosedIcon,
    title: '安全性要求高',
    description: '政务数据不能丢失，重点应用业务不能中断；政务数据安全等级高，备份存储也需高安全防护。',
  },
  {
    icon: BuildingLibraryIcon,
    title: '业务拓展压力大',
    description: '各部门分散建设形成跨部门烟囱，安全合规性参差不齐，传统架构兼容性差且无法满足国产化逐步替代要求。',
  },
]

/**
 * 核心优势卡片数据 - 政府行业四大核心优势
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: BuildingLibraryIcon,
    title: '自主研发全面可控',
    description:
      '云平台自主研发全面可控，产品体系完备，提供安全、可靠、弹性、高可用、按需供给、据实结算的云计算框架和服务。',
  },
  {
    icon: ServerStackIcon,
    title: '产品丰富灵活调度',
    description:
      '提供高性能的计算、网络、存储服务，支持虚拟化、裸金属、容器等多种资源类型，云操作系统统一分配和调度。',
  },
  {
    icon: ShieldCheckIcon,
    title: '隐私计算能力',
    description:
      '依托安全屋为政务用户提供合规化数据在线共享开放方案，实现数据所有权与使用权分离，保障数据安全流通。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '专业化运维保障',
    description:
      '对 IT 基础设施运行状态实施智能监控告警与专业化运维管理，全天候做好信息系统运行维护和安全保障。',
  },
]

/**
 * 架构分层数据 - 政府行业六层架构
 */
const ARCHITECTURE_POINTS = [
  {
    label: '接入层',
    description: '统一政务门户与 API 网关，提供身份认证、权限管理、访问控制能力，保障各委办局安全接入。',
  },
  {
    label: '应用层',
    description: '承载政务服务、数据共享、协同办公等业务系统，支持弹性扩容、灰度发布与国产化适配。',
  },
  {
    label: '数据层',
    description: '数据库主备、缓存与对象存储协同运行，确保政务数据一致性、安全性与可恢复能力。',
  },
  {
    label: '安全层',
    description: '等保三级合规建设、网络隔离、入侵检测与数据加密，全方位保障政务业务安全运行。',
  },
  {
    label: '共享层',
    description: '隐私计算安全屋、数据沙箱，实现跨部门数据共享开放，打破信息孤岛，释放数据价值。',
  },
  {
    label: '运维层',
    description: '统一运维监控平台，实时监测系统健康、业务指标与安全态势，实现智能化运维管理。',
  },
]

/**
 * 推荐产品卡片数据 - 政府行业八大核心产品
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '弹性云服务器 ECS',
    description: '承载政务应用与业务系统，支持国产化芯片与操作系统，满足信创要求，保障政务业务稳定运行。',
    tags: ['国产化适配', '弹性计算'],
  },
  {
    icon: CircleStackIcon,
    title: '云数据库',
    description: '支持 MySQL、PostgreSQL、达梦等多种数据库，提供读写分离、自动备份与异地灾备能力。',
    tags: ['自动备份', '异地灾备'],
  },
  {
    icon: CloudIcon,
    title: '对象存储 OSS',
    description: '存储政务文件、档案与影像资料，支持高持久性与归档分层，满足政务数据长期保存合规要求。',
    tags: ['归档分层', '高持久性'],
  },
  {
    icon: ArrowsRightLeftIcon,
    title: '负载均衡',
    description: '在多可用区间分发政务请求，结合健康检查机制保障政务服务门户的高可用性。',
    tags: ['健康检查', '高可用'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Web 应用防火墙',
    description: '防护 SQL 注入、XSS 攻击等常见 Web 威胁，保障政务服务网站与 API 接口安全。',
    tags: ['应用防护', '等保合规'],
  },
  {
    icon: LockClosedIcon,
    title: 'DDoS 高防',
    description: '抵御大流量攻击，保障政务门户、公示系统与在线服务平台的稳定运行。',
    tags: ['大流量清洗', '业务稳定'],
  },
  {
    icon: KeyIcon,
    title: '数据安全屋',
    description: '基于隐私计算技术，实现数据可用不可见，支撑跨部门数据共享开放与安全流通。',
    tags: ['隐私计算', '数据共享'],
  },
  {
    icon: GlobeAltIcon,
    title: '虚拟私有云 VPC',
    description: '实现政务网络隔离、分区规划与安全组策略配置，满足等保合规的边界治理需求。',
    tags: ['网络隔离', '等保合规'],
  },
]

/**
 * 扩展能力卡片数据 - 政府行业场景化解决方案
 */
const CAPABILITY_ITEMS: CommonCardItem[] = [
  {
    icon: BuildingLibraryIcon,
    title: '政务云',
    description: '用于承载各级政务部门开展公共服务、社会管理的业务信息系统，满足跨部门业务协同、数据共享的需要。',
  },
  {
    icon: GlobeAltIcon,
    title: '政府数据开放',
    description: '以数据沙箱、加密技术、安全多方计算等隐私计算技术，构建数据共享环境和数据开放生态。',
  },
  {
    icon: AcademicCapIcon,
    title: '高性能计算',
    description: '以高性能和大规模的云上算力帮助科研机构打破计算瓶颈，为科研提速、为创新助力。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '智慧运维',
    description: '通过智能化的数据采集、异常检测与智能告警能力，简化运维管理操作，提升业务健康状况。',
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
      className={`group relative overflow-hidden rounded-md border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 ${className}`}
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
 * 展示政府行业云计算解决方案的标题、描述与 CTA 按钮
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/gov.png')] bg-cover bg-center bg-no-repeat opacity-20" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            政府行业 / 自主可控 / 安全合规
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            政府行业云计算解决方案
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            为政府行业提供自主可控、安全合规的云上部署方案，覆盖政务云、数据共享、智慧城市与国产化替代全场景，助力数字政府建设。
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
 * 展示政府行业云计算方案的五大核心能力
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Solution Overview"
          title="为数字政府构建自主可控、安全合规的云上底座"
          description="基于政府行业独特需求，提供自主研发、安全合规、弹性扩展的整体云上解决方案，助力政务服务数字化转型。"
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
                覆盖政务信息化全场景的云上解决方案
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                方案围绕自主可控、安全合规、隐私计算与智能运维展开，适用于政务云建设、数据共享开放、智慧城市与国产化替代等典型政务场景。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 政务云平台建设
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 政府数据共享开放
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 智慧城市与智慧农业
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 国产化信创替代
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
 * 展示政府信息化面临的关键挑战
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
              政府信息化的关键挑战
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从建设周期到安全合规，从运维能力到业务扩展，政府行业在上云过程中面临多维度挑战，需要一套整体解决方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['建设周期', '运维能力', '安全合规', '国产替代', '数据共享'].map((tag) => (
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
 * 展示政府行业解决方案的四大核心优势
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="自主可控 · 安全合规 · 智能运维"
          description="围绕政务信息化全场景，将自主研发、隐私计算与专业运维编排成完整的云上方案，赋能数字政府建设。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
 * 展示政府行业六层架构设计与架构图
 */
function ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Architecture Design"
          title="政务云六层架构设计"
          description="通过接入层、应用层、数据层、安全层、共享层和运维层的分层设计，实现从部门接入到数据共享的全链路保障。"
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
              政务应用层
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                政务服务
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                协同办公
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl bg-[#0055ff] font-bold text-white shadow-sm">
              数据共享层
            </div>
            <div className="grid grid-cols-3 gap-4">
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                安全屋
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                数据沙箱
              </span>
              <span className="flex h-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300">
                API
              </span>
            </div>
            <div className="flex h-14 items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-transparent text-sm font-bold text-slate-400">
              安全 + 运维 + 监控
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 推荐产品区域组件
 * 展示政府行业核心云产品组合
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Recommended Products"
          title="核心云产品组合"
          description="基于政务信息化视角，提供满足自主可控、安全合规与高性能要求的云基础设施产品矩阵。"
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
 * 展示政府行业多维度的场景化解决方案
 */
function CapabilitySection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Scenario Solutions"
          title="场景化解决方案"
          description="在底层基础设施之上，提供丰富的政务场景化能力，全面加速数字政府建设与智慧城市发展。"
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
            为您的政府业务搭建安全可控的云底座
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            联系我们的政务方案顾问，获取专属架构规划与测试资源，助力数字政府建设。
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
 * 政府行业解决方案主页面
 *
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，
 * 完全适配多端响应式展示。
 * 面向政府行业提供自主可控、安全合规的云上部署方案。
 */
export default function GovPage() {
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
