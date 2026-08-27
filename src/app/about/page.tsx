'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/**
 * 通用数据类型定义
 */
type IconComponent = React.ComponentType<{ className?: string }>

interface SectionLink {
  id: string
  label: string
}

interface StatItem {
  value: string
  label: string
  icon: IconComponent
}

interface FeatureItem {
  icon: IconComponent
  name: string
  description: string
}

interface ValueItem {
  title: string
  description: string
}

interface MilestoneItem {
  year: string
  title: string
  description: string
}

interface HonorItem {
  title: string
  date: string
  description: string
}

/**
 * 页面锚点导航链接数据
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'overview', label: '公司概况' },
  { id: 'stats', label: '数据实力' },
  { id: 'vision', label: '愿景使命' },
  { id: 'timeline', label: '发展历程' },
  { id: 'honors', label: '荣誉资质' },
]

/**
 * 公司统计数据
 */
const COMPANY_STATS: StatItem[] = [
  {
    value: '99.99%',
    label: '服务可用性 SLA',
    icon: ShieldCheckIcon,
  },
  {
    value: '30+',
    label: '全球可用区与节点',
    icon: GlobeAltIcon,
  },
  {
    value: '100万+',
    label: '累计交付云实例',
    icon: CpuChipIcon,
  },
  {
    value: '7×24',
    label: '全时段技术响应',
    icon: UserGroupIcon,
  },
]

/**
 * 公司介绍特性
 */
const COMPANY_FEATURES: FeatureItem[] = [
  {
    name: '专业云服务商',
    description:
      '优刻云计算（CloudCVM）是专注云服务器与算力基础设施的专业服务商，提供计算、存储、网络、数据库一站式上云底座。',
    icon: BuildingOfficeIcon,
  },
  {
    name: '稳定可靠',
    description:
      '自研资源调度与多可用区容灾架构，保障业务 7×24 稳定运行，让每一次发布与扩容都安心。',
    icon: ChartBarIcon,
  },
  {
    name: '技术前沿',
    description:
      '持续投入云原生、AI 算力与边缘计算研发，保持在云计算领域的技术前瞻性，为客户提供更优解。',
    icon: CpuChipIcon,
  },
]

/**
 * 公司价值观
 */
const COMPANY_VALUES: ValueItem[] = [
  { title: '客户成功', description: '以客户业务增长衡量自身价值' },
  { title: '简单至上', description: '把复杂留给自己，把简单交给客户' },
  { title: '稳定可信', description: '以工程化能力保障服务可靠' },
  { title: '持续进化', description: '在云与 AI 浪潮中自我迭代' },
  { title: '开放协作', description: '与生态伙伴共建云上社区' },
  { title: '长期主义', description: '用时间沉淀信任，与客户共赴长远' },
]

/**
 * 发展历程
 */
const MILESTONES: MilestoneItem[] = [
  {
    year: '2024-至今',
    title: '智算新时代',
    description:
      '面向 AI 与大模型浪潮，优刻云计算升级智算产品矩阵，将弹性算力与 AI 工作负载深度结合，陪伴开发者迈入智能算力新阶段。',
  },
  {
    year: '2022-2023',
    title: '云上生长',
    description:
      '围绕电商、教育、工业等场景打磨行业方案，自动化运维与可观测能力全面上线，服务规模与口碑同步跃升。',
  },
  {
    year: '2019-2021',
    title: '夯实底座',
    description:
      '自研资源调度与多可用区容灾架构趋于成熟，云计算与内容分发网络能力打通，为千行百业提供稳定底座。',
  },
  {
    year: '2016-2018',
    title: '逐云而行',
    description:
      '从服务器托管走向全栈云服务，建立多云管理与网络互联能力，与主流云生态展开深度协作。',
  },
  {
    year: '2015',
    title: '初心启程',
    description:
      '优刻云计算正式启航，以「让算力触手可及」为初心，为中小企业交付第一台云服务器，开启算力服务之路。',
  },
]

/**
 * 荣誉资质
 */
const HONORS: HonorItem[] = [
  { title: '国家高新技术企业', date: '2019', description: '通过国家级高新技术企业认定' },
  { title: '专精特新中小企业', date: '2024', description: '入选省级专精特新企业名单' },
  { title: '科技小巨人企业', date: '2023', description: '荣获科技小巨人企业称号' },
  { title: '创新型中小企业', date: '2023', description: '获评创新型中小企业' },
  { title: '区重点企业', date: '2023', description: '获评所在区重点扶持企业' },
  { title: '"瞪羚"创新企业', date: '2022', description: '入选瞪羚企业创新榜单' },
  { title: '用户信赖品牌', date: '2021', description: '荣获行业用户满意度奖项' },
]

// ===================================================================
// 通用 Hooks 与组件
// ===================================================================

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
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * 玻璃拟态卡片组件
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
      className={`group relative overflow-hidden rounded-md border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 ${className}`}
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
      <span className="inline-flex items-center rounded-full border border-brand-500/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold tracking-wider text-brand-500">
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
                    ? 'border-brand-500 text-brand-500'
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

// ===================================================================
// 页面区块组件
// ===================================================================

/**
 * Hero 区域
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/about.jpg')] bg-cover bg-center bg-no-repeat" />
      {/* 渐变覆盖 */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/70 via-white/20 to-transparent" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-brand-500/20 bg-[#eff6ff] px-3 text-xs font-semibold text-brand-500">
            优刻云计算 · 与您共创算力未来
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
            优刻云计算
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">
            稳定 · 弹性 · 普惠的云计算服务
          </p>
          <p className="mt-2 text-base font-medium text-brand-500">
            CloudCVM · Powering Your Business with Cloud
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              联系我们
            </Button>
            <Button href="#overview" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              了解更多 <span aria-hidden="true">→</span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 公司概况区域
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Company Profile"
          title="专注云算力的独立云计算品牌"
          description="优刻云计算（CloudCVM）是一家独立运营的云计算服务品牌，专注为开发者和企业提供稳定、弹性、高性价比的云服务器与算力基础设施，业务覆盖政府、电商、教育、工业等多个行业。"
        />

        {/* 核心介绍卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-md bg-brand-500 p-6 text-white sm:p-8 lg:p-10 shadow-xl shadow-brand-500/20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                让算力触手可及
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                优刻云计算成立于2015年，深耕云计算与算力基础设施领域。我们坚持自研调度与多可用区容灾架构，
                技术人员占比超过50%，以稳定、弹性、普惠的云服务，帮助企业与开发者把更多精力投入到业务创新本身。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">核心业务领域</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 云计算基础服务
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> AI 智能算力
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 大数据处理与分析
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 边缘计算与 CDN
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 公司特性卡片 */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY_FEATURES.map((item, index) => {
            const Icon = item.icon
            return (
              <GlassCard key={item.name} delay={index * 0.1} className="flex flex-col">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-brand-500">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * 数据实力区域
 */
function StatsSection() {
  return (
    <section id="stats" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Company Stats"
          title="数据见证实力"
          description="从资源规模到服务韧性，优刻云计算用一组核心指标，呈现稳定、弹性、普惠的云服务底座"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_STATS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <GlassCard key={stat.label} delay={index * 0.1} className="text-center">
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-500">
                  <Icon className="h-7 w-7" />
                </span>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-500">{stat.label}</div>
              </GlassCard>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * 愿景使命区域
 */
function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Vision & Mission"
          title="愿景 · 使命 · 价值观"
          description="我们用愿景定义要去的地方，用使命校准每天的脚步，用价值观凝聚同行的人"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* 愿景 */}
          <GlassCard className="flex min-h-[300px] flex-col justify-center" delay={0}>
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-500">
              <RocketLaunchIcon className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              愿景 <span className="text-sm font-medium text-slate-400">VISION</span>
            </h3>
            <p className="mt-4 text-lg font-semibold text-slate-700">让每一份算力都创造真实价值</p>
            <p className="mt-2 text-sm font-medium text-brand-500">Real Value from Every Bit of Compute</p>
          </GlassCard>

          {/* 使命 */}
          <GlassCard className="flex min-h-[300px] flex-col justify-center" delay={0.1}>
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-500">
              <SparklesIcon className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              使命 <span className="text-sm font-medium text-slate-400">MISSION</span>
            </h3>
            <p className="mt-4 text-lg font-semibold text-slate-700">以可靠、简单的云基础设施，降低创新的门槛</p>
            <p className="mt-2 text-sm font-medium text-brand-500">Lower the Barrier to Innovation with Reliable Cloud</p>
          </GlassCard>

          {/* 价值观 */}
          <GlassCard className="flex min-h-[300px] flex-col justify-center" delay={0.2}>
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-500">
              <HeartIcon className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              价值观 <span className="text-sm font-medium text-slate-400">VALUES</span>
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {COMPANY_VALUES.map((v) => (
                <div key={v.title} className="text-center">
                  <div className="text-sm font-semibold text-slate-900">{v.title}</div>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{v.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

/**
 * 发展历程区域
 */
function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Our History"
          title="发展历程"
          description="从第一台云服务器，到今天的智能算力平台，每一步都朝着「让算力触手可及」靠近"
        />

        <div className="relative mt-16">
          {/* 中心分割线（桌面端） */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="relative space-y-12 lg:space-y-16">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center"
                >
                  {/* 时间线圆点 */}
                  <div className="absolute top-6 left-4 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-sm lg:block lg:left-1/2" />

                  {/* 内容卡片 */}
                  <div className={`lg:pr-12 ${isEven ? '' : 'lg:order-2 lg:pl-12 lg:pr-0'}`}>
                    <div className="group relative rounded-md border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-brand-200">
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10">
                        {/* 移动端年份标记 */}
                        <div className="mb-3 flex items-center gap-3 lg:hidden">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                            {index + 1}
                          </span>
                          <span className="text-sm font-mono font-semibold text-brand-500">
                            {milestone.year}
                          </span>
                        </div>
                        {/* 桌面端年份标记 */}
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">{milestone.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-500">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* 年份数字（桌面端） */}
                  <div className={`hidden lg:flex ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'} h-full items-center`}>
                    <span className="font-mono text-3xl font-bold text-slate-200 lg:text-4xl">
                      {milestone.year}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 荣誉资质区域
 */
function HonorsSection() {
  return (
    <section id="honors" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Honors & Awards"
          title="荣誉资质"
          description="每一份认可，都是对稳定、可靠与长期主义的回响"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HONORS.map((honor, index) => (
            <GlassCard key={honor.title} delay={index * 0.05}>
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-brand-500">
                <TrophyIcon className="h-6 w-6" />
              </span>
              <div className="mb-2 text-sm font-mono font-semibold text-brand-500">{honor.date}</div>
              <h3 className="text-lg font-semibold text-slate-900">{honor.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">{honor.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行动号召区域
 */
function CTASection() {
  return (
    <section className="bg-brand-500 py-16 md:py-24 text-center relative overflow-hidden">
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
            准备好开始您的云计算之旅了吗？
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            立即联系我们，获取专业的云计算解决方案和技术支持，让您的业务在云端腾飞
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-md px-8 py-3 font-medium text-brand-500">
              立即咨询
            </Button>
            <Button href="/ecs" variant="erlieOutline" color="white" className="rounded-md border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              了解产品
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 关于我们页面主组件
 *
 * 采用现代科技风设计，GlassCard 玻璃拟态卡片与 Bento Grid 布局，
 * 配合 Framer Motion 滚动动画，全面适配多端响应式展示。
 */
export default function AboutPage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-brand-500/20 selection:text-brand-500">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <StatsSection />
      <VisionSection />
      <TimelineSection />
      <HonorsSection />
      <CTASection />
    </div>
  )
}
