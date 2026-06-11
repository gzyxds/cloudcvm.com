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
  { id: 'challenges', label: '行业挑战' },
  { id: 'advantages', label: '核心优势' },
  { id: 'architecture', label: '架构设计' },
  { id: 'products', label: '推荐产品' },
  { id: 'cta', label: '立即咨询' },
]

const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: ServerStackIcon,
    eyebrow: '可用性',
    title: '两地三中心部署',
    description: '构建同城双活与异地灾备体系，让交易、账户与清结算链路具备持续运行能力。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '合规性',
    title: '金融级安全控制',
    description: '支持等保建设、访问控制、操作审计、漏洞治理与持续安全运营。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性',
    title: '峰值流量弹性扩缩',
    description: '活动营销、扣款日、还款日等业务高峰期间可快速增配，削峰填谷更从容。',
  },
  {
    icon: BuildingLibraryIcon,
    eyebrow: '连续性',
    title: '核心系统平滑上云',
    description: '适配传统金融系统逐步迁移，兼顾存量系统稳定性与新业务迭代效率。',
  },
  {
    icon: BanknotesIcon,
    eyebrow: '成本',
    title: '精细化运营',
    description: '降低自建机房投入与长期运维成本，将预算聚焦在金融创新本身。',
  },
]

const CHALLENGE_ITEMS: CommonCardItem[] = [
  {
    icon: ScaleIcon,
    title: '监管合规压力持续提高',
    description: '数据分级、日志留存、身份权限审计与等保建设并行推进，内部治理成本快速上升。',
  },
  {
    icon: ChartBarIcon,
    title: '流量峰值具备突发性',
    description: '金融产品发售、结息、扣款与营销节点往往同时叠加，对底层资源调度要求极高。',
  },
  {
    icon: LockClosedIcon,
    title: '敏感数据保护要求严苛',
    description: '账户、交易、征信等数据需要兼顾传输安全、存储加密与最小权限访问策略。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '传统架构迭代速度偏慢',
    description: '历史系统耦合度高，灾备、监控、发布与扩容流程复杂，难以支撑快速创新。',
  },
]

const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: ShieldCheckIcon,
    title: '全链路安全合规',
    description:
      '从网络边界防护、主机安全、访问控制到数据加密与审计留痕，形成金融场景可落地的全链路安全体系。',
  },
  {
    icon: ServerStackIcon,
    title: '高可用架构设计',
    description:
      '通过负载均衡、自动迁移、数据库高可用与异地备份，将核心业务连续性纳入统一架构设计。',
  },
  {
    icon: BoltIcon,
    title: '极致弹性与效率',
    description:
      '资源根据业务节奏灵活扩缩，配合标准化运维与监控告警，让金融团队把精力放在业务增长上。',
  },
]

const ARCHITECTURE_POINTS = [
  {
    label: '接入层',
    description: '通过负载均衡与安全网关承接入口流量，保障高并发访问稳定与入口防护能力。',
  },
  {
    label: '应用层',
    description: '核心业务服务拆分部署，支持弹性扩容、故障迁移与灰度发布，提升业务连续性。',
  },
  {
    label: '数据层',
    description: '数据库主备、缓存与对象存储协同运行，确保数据一致性、性能与可恢复能力。',
  },
  {
    label: '容灾层',
    description: '同城双活配合异地备份，形成完整的两地三中心灾备方案，缩短恢复时间目标。',
  },
  {
    label: '安全层',
    description: '提供网络隔离、访问控制、入侵检测与数据加密，全方位保障金融业务安全合规。',
  },
  {
    label: '监控层',
    description: '实时监控系统状态、业务指标与异常告警，实现全链路可视化与快速故障响应。',
  },
]

const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '弹性云服务器 ECS',
    description: '承载核心业务应用与中间件服务，支持秒级交付、弹性扩缩与故障自动迁移。',
    tags: ['弹性扩容', '高可用'],
  },
  {
    icon: CircleStackIcon,
    title: '云数据库 MySQL',
    description: '满足账务、订单、风控等关系型业务的数据一致性与可恢复性要求。',
    tags: ['自动备份', '读写分离'],
  },
  {
    icon: CloudIcon,
    title: '对象存储 OSS',
    description: '存储合同、凭证、报表与影像资料，支持高持久性与归档分层。',
    tags: ['海量存储', '归档分层'],
  },
  {
    icon: ArrowsRightLeftIcon,
    title: '弹性负载均衡',
    description: '在多可用区间分发请求，结合健康检查机制提升入口层连续服务能力。',
    tags: ['健康检查', '故障切换'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Web 应用防火墙',
    description: '针对 SQL 注入、恶意扫描、CC 攻击等常见 Web 风险提供精细化拦截。',
    tags: ['应用防护', '风控加固'],
  },
  {
    icon: LockClosedIcon,
    title: 'DDoS 高防',
    description: '抵御大流量恶意攻击，保障金融交易、会员中心与 API 接口的稳定可达。',
    tags: ['大流量清洗', '业务稳定'],
  },
  {
    icon: KeyIcon,
    title: 'SSL 证书与密钥管理',
    description: '保障数据传输可信与链路加密，支撑证书生命周期管理与密钥安全托管。',
    tags: ['HTTPS', '数据加密'],
  },
  {
    icon: GlobeAltIcon,
    title: '虚拟私有云 VPC',
    description: '实现业务网络隔离、分区规划与安全组策略配置，满足金融系统边界治理需求。',
    tags: ['网络隔离', '权限控制'],
  },
]

const CAPABILITY_ITEMS: CommonCardItem[] = [
  {
    icon: UserGroupIcon,
    title: '客户运营平台',
    description: '面向会员增长、活动促活与客户分层管理，帮助金融业务构建精细化运营能力。',
  },
  {
    icon: ChartBarIcon,
    title: '风险监控与报表',
    description: '打通日志、指标与交易数据，辅助业务侧进行实时监测、预警与经营分析。',
  },
  {
    icon: ArrowPathIcon,
    title: '持续交付体系',
    description: '配合标准化发布、回滚与灰度能力，降低变更风险并提升新功能上线效率。',
  },
  {
    icon: BuildingLibraryIcon,
    title: '多业态扩展能力',
    description: '适配小贷、保理、担保、消费金融与互联网保险等不同金融业务形态。',
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
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/finance.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      
      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            金融行业 / 高可用 / 安全合规
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            金融行业云计算解决方案
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            针对金融行业业务部署特性，提供从基础服务、增值服务到客户服务的高可靠云架构方案，助力企业实现数字化转型与业务创新。
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
          title="专业金融云服务，让创新更安全、更可靠"
          description="基于现代金融业务需求，提供高可用、安全合规、弹性扩展的整体云上底座。"
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
                为金融企业构建稳定、合规、可扩展的云上底座
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                方案围绕高可用架构、安全治理、数据保护与运维可视化展开，适用于新业务快速上线、老系统平滑迁移和多地域灾备建设等典型金融场景。
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 小贷与消费金融平台
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 担保、保理与典当系统
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 会员中心与账户体系
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 营销活动与峰值交易
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
              Industry Challenges
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              金融数字化转型的关键挑战
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从监管合规到弹性扩缩，金融企业在上云过程中通常不是缺单一产品，而是缺一套兼顾稳定性、治理能力与交付效率的整体方案。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['监管合规', '高并发峰值', '数据安全', '灾备能力', '运维效率'].map((tag) => (
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
          title="重构基础设施与服务能力"
          description="将安全、稳定与效率编排成完整的云上方案，赋能业务高速增长。"
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
          title="两地三中心高可用架构"
          description="通过接入层、应用层、数据层和容灾层的分层设计，实现从入口流量到关键数据的全链路稳定保障。"
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
              金融应用层
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
              容灾 + 安全 + 监控
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
          description="基于金融业务视角，提供满足高并发、高可用与强合规要求的云基础设施。"
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
          description="在底层基础设施之上，提供丰富的拓展能力，全面加速金融业务创新。"
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
            为您的金融业务搭建稳定云底座
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            联系我们的金融方案顾问，获取专属架构规划与测试资源。
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
 * 金融行业解决方案主页面
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，完全适配多端响应式展示。
 */
export default function FinancePage() {
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
