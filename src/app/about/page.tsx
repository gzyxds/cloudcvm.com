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
  MapPinIcon,
  PhoneIcon,
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

interface OfficeItem {
  city: string
  address: string
  phone: string
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
  { id: 'contact', label: '联系我们' },
]

/**
 * 公司统计数据
 */
const COMPANY_STATS: StatItem[] = [
  {
    value: '75000+',
    label: '企业与开发者用户',
    icon: UserGroupIcon,
  },
  {
    value: '50%+',
    label: '技术人员占比',
    icon: CpuChipIcon,
  },
  {
    value: '200+',
    label: '边缘节点覆盖城市',
    icon: GlobeAltIcon,
  },
  {
    value: '80亿+',
    label: '日均网络请求量',
    icon: ChartBarIcon,
  },
]

/**
 * 公司介绍特性
 */
const COMPANY_FEATURES: FeatureItem[] = [
  {
    name: '专业服务商',
    description:
      '优刻云成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力。',
    icon: BuildingOfficeIcon,
  },
  {
    name: '丰富经验',
    description:
      '在大数据领域有丰富的经验，业务覆盖政府、财会、教育、工业、电商等多个行业。',
    icon: ChartBarIcon,
  },
  {
    name: '技术前沿',
    description:
      '积极推动技术研发与人才培养，确保始终处于数据领域的技术前沿，为客户提供最具竞争力的解决方案。',
    icon: CpuChipIcon,
  },
]

/**
 * 公司价值观
 */
const COMPANY_VALUES: ValueItem[] = [
  { title: '客户至上', description: '始终将客户的需求和利益置于首位' },
  { title: '科技向善', description: '用科技的力量创造积极的社会价值' },
  { title: '诚信协作', description: '诚信让协作更加高效' },
  { title: '共同成长', description: '相互扶持，积极分享迈向卓越' },
  { title: '结果导向', description: '追求目标实现以成果衡量价值' },
  { title: '拥抱变化', description: '唯有变化是永恒不变的' },
]

/**
 * 发展历程
 */
const MILESTONES: MilestoneItem[] = [
  {
    year: '2024-至今',
    title: '数实融合 破浪前行',
    description:
      '优刻云成立九周年，迎来第七次办公室搬迁。团队规模接近百人，累计企业与开发者用户超过5万。我们将持续秉持用数据激发生产力的使命，通过数字技术助力实体经济的发展。',
  },
  {
    year: '2022-2023',
    title: '数智应用 激发产能',
    description:
      '发布新产品自动化RPA和商业智能BI，公司先后被评为创新型中小企业、科技小巨人企业、丰泽区重点企业。推出飞跨浏览器，被评为"瞪羚"创新企业。',
  },
  {
    year: '2019-2021',
    title: '云网融合 赋能产业',
    description:
      '获得工信部云计算和CDN资质，被评为国家高新技术企业。推出边缘网络PaaS产品，成立飞跨品牌，推出电商云产品。',
  },
  {
    year: '2016-2018',
    title: '顺势而上 逐云向前',
    description:
      '成为APNIC与CNNIC会员单位，发布QStack多云管理平台。获得IDC/ISP/IP-VPN资质，成为腾讯云、阿里云合作伙伴。',
  },
  {
    year: '2015',
    title: '与云结缘 扬帆起航',
    description:
      '2015年4月1日，优刻云正式成立，开始为企业提供服务器托管和租用服务。',
  },
]

/**
 * 荣誉资质
 */
const HONORS: HonorItem[] = [
  { title: '专精特新中小企业', date: '2024.05', description: '评为专精特新中小企业' },
  { title: '区重点企业', date: '2023.06', description: '认定为丰泽区重点企业' },
  { title: '科技小巨人企业', date: '2023.06', description: '荣获科技小巨人企业' },
  { title: '创新型中小企业', date: '2023.01', description: '被评为创新型中小企业' },
  { title: '"瞪羚"创新企业', date: '2022.07', description: '获评瞪羚企业' },
  { title: '科技型中小企业', date: '2021.10', description: '评为科技型中小企业' },
  { title: '高新技术企业', date: '2019.12', description: '荣获国家级高新技术企业称号' },
]

/**
 * 联系方式
 */
const OFFICES: OfficeItem[] = [
  { city: '泉州', address: '泉州市丰泽区领SHOW天地传媒中心8楼', phone: '0595-22113999' },
  { city: '厦门', address: '厦门市湖里区厦门跨境产业园1号楼F层AJ02单元', phone: '' },
  { city: '深圳', address: '深圳市龙岗区坂田街道万致天地商业中心1栋一单元办公1904', phone: '' },
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
            优刻云与您共创未来
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
            优刻云计算
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">
            成为全球领先的数据驱动引擎
          </p>
          <p className="mt-2 text-base font-medium text-brand-500">
            Leading Global Data-Driven Innovation
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <Button href="#contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
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
          title="专业的大数据基础能力服务商"
          description="专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座，业务覆盖政府、财会、教育、工业、电商等多个行业。"
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
                用数据驱动生产力
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                优刻云成立于2015年，是国内专业的大数据基础能力服务商。我们始终专注于通过数据激发生产力，
                致力于成为全球领先的数据驱动引擎。公司拥有一支高素质的技术团队，技术人员占比超过50%，
                为客户提供最优质的大数据基础设施服务。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">核心业务领域</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 云计算基础服务
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> AI 智能应用
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
          description="用数字说话，用成果证明我们的专业能力与服务品质"
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
          description="以清晰的愿景指引方向，以坚定的使命驱动前行，以共同的价值观凝聚力量"
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
            <p className="mt-4 text-lg font-semibold text-slate-700">成为全球领先的数据驱动引擎</p>
            <p className="mt-2 text-sm font-medium text-brand-500">Leading Global Data-Driven Innovation</p>
          </GlassCard>

          {/* 使命 */}
          <GlassCard className="flex min-h-[300px] flex-col justify-center" delay={0.1}>
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-brand-500">
              <SparklesIcon className="h-7 w-7" />
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              使命 <span className="text-sm font-medium text-slate-400">MISSION</span>
            </h3>
            <p className="mt-4 text-lg font-semibold text-slate-700">用数据驱动生产力</p>
            <p className="mt-2 text-sm font-medium text-brand-500">Driving the Productivity Explosion with Data</p>
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
          description="见证我们从初创到行业领先的每一个重要时刻"
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
          description="自成立以来，优刻云计算获得了众多企业、权威行业机构和知名媒体的关注与认可"
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
 * 联系我们区域
 */
function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Contact Us"
          title="联系我们"
          description="我们在全国多个城市设有办公室，随时为您提供专业的服务支持"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office, index) => (
            <GlassCard key={office.city} delay={index * 0.1}>
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-brand-500">
                <MapPinIcon className="h-6 w-6" />
              </span>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {office.city}办公室
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <p className="text-sm leading-relaxed break-words text-slate-600">
                    {office.address}
                  </p>
                </div>
                {office.phone && (
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-sm font-medium text-slate-700">{office.phone}</span>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* 综合联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheckIcon className="mx-auto h-8 w-8 text-brand-500" />
            <h3 className="mt-3 text-lg font-semibold text-slate-900">更多联系方式</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              如需了解更多产品信息或商务合作，欢迎通过邮件或电话与我们联系。
              我们的专业团队将为您提供最优质的服务体验。
            </p>
          </div>
        </motion.div>
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
      <ContactSection />
      <CTASection />
    </div>
  )
}






