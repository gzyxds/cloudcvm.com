'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
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
  { id: 'overview', label: '产品特性' },
  { id: 'scenarios', label: '适用场景' },
  { id: 'packages', label: '实例规格' },
  { id: 'os', label: '操作系统' },
  { id: 'advantages', label: '核心优势' },
  { id: 'products', label: '配套产品' },
  { id: 'cta', label: '立即体验' },
]

/**
 * 产品特性卡片数据 - 裸金属云服务器六大核心特性
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    eyebrow: '物理性能',
    title: '无虚拟化开销，性能无损',
    description: '独占物理服务器资源，无虚拟化层性能损耗，CPU、内存、网络全面释放裸金属级算力，满足高性能计算场景需求。',
  },
  {
    icon: LockClosedIcon,
    eyebrow: '安全隔离',
    title: '单租户物理隔离，安全合规',
    description: '计算、存储、网络资源完全独占，满足金融、政务等高合规行业要求，从物理层面保障数据安全与业务隔离。',
  },
  {
    icon: BoltIcon,
    eyebrow: '弹性交付',
    title: '分钟级交付，弹性伸缩',
    description: '将物理服务器采购周期从数周缩短至分钟级，支持按需创建与退还，灵活匹配业务波峰波谷，从容应对流量高峰。',
  },
  {
    icon: CircleStackIcon,
    eyebrow: '高性能存储',
    title: '极速 IO，海量吞吐',
    description: '支持本地 NVMe SSD 与高性能云硬盘，提供数百万 IOPS、亚毫秒级延迟，轻松承载数据库、大数据等高 IO 负载。',
  },
  {
    icon: CloudIcon,
    eyebrow: '网络增强',
    title: 'VPC 私有网络，高带宽低延迟',
    description: '支持高达数十 Gbps 的内网带宽，搭配 VPC 私有网络实现安全互通，满足分布式集群、微服务架构的通信需求。',
  },
  {
    icon: WrenchScrewdriverIcon,
    eyebrow: '便捷运维',
    title: '统一管理，API 驱动',
    description: '支持控制台、API、CLI 多维度管理，提供带外监控、自动化告警与生命周期管理能力，运维效率倍增。',
  },
]

/**
 * 适用场景卡片数据
 */
const SCENARIO_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '高性能计算（HPC）',
    description: '为基因测序、气象模拟、工业仿真等计算密集型场景提供极致算力，支持大规模并行计算与低延迟通信。',
    tags: ['HPC', '仿真', '基因测序'],
  },
  {
    icon: ChartBarIcon,
    title: '大数据分析',
    description: '高性能 CPU 与海量存储结合，支撑 Hadoop、Spark、Flink 等大数据引擎，加速海量数据挖掘与实时分析。',
    tags: ['Hadoop', 'Spark', '实时计算'],
  },
  {
    icon: Squares2X2Icon,
    title: '游戏业务',
    description: '独占物理资源无抖动，保障游戏战斗服、大厅服务稳定运行。高并发承载与低延迟网络提升玩家对战体验。',
    tags: ['游戏服', '战斗服', '大厅服务'],
  },
  {
    icon: ShieldCheckIcon,
    title: '金融与合规行业',
    description: '满足金融、保险、政务等行业对物理隔离与数据主权的要求，提供等保合规支持与审计能力。',
    tags: ['金融', '保险', '政务', '等保'],
  },
  {
    icon: CircleStackIcon,
    title: '核心数据库',
    description: '为 Oracle、SQL Server、MySQL 等关键业务数据库提供独占物理资源，保障高并发、低延迟的数据访问体验。',
    tags: ['Oracle', 'SQL Server', 'MySQL'],
  },
  {
    icon: ServerStackIcon,
    title: '容器与 AI 平台',
    description: '支持 Kubernetes、Docker 等容器编排平台，为 AI 模型训练与推理提供 GPU 直通的高性能计算环境。',
    tags: ['Kubernetes', 'GPU', 'AI 训练'],
  },
]

/**
 * 实例规格数据 - 裸金属云服务器典型规格
 */
const PACKAGE_ITEMS = [
  {
    name: '标准型 BMS4',
    cpu: '32 核',
    memory: '128 GB',
    storage: '2 × 1.8 TB NVMe SSD',
    network: '10 Gbps',
    gpu: '—',
    highlight: '适合企业级应用、中大型数据库',
    price: '低至 ¥1,200/月',
  },
  {
    name: '计算型 BMC4',
    cpu: '64 核',
    memory: '256 GB',
    storage: '2 × 3.2 TB NVMe SSD',
    network: '25 Gbps',
    gpu: '—',
    highlight: '适合 HPC、大数据分析、仿真计算',
    price: '低至 ¥2,600/月',
  },
  {
    name: '内存型 BMR4',
    cpu: '48 核',
    memory: '512 GB',
    storage: '2 × 1.8 TB NVMe SSD',
    network: '25 Gbps',
    gpu: '—',
    highlight: '适合内存数据库、缓存集群、SAP HANA',
    price: '低至 ¥3,200/月',
  },
  {
    name: 'GPU 型 BMG5e',
    cpu: '56 核',
    memory: '448 GB',
    storage: '2 × 3.2 TB NVMe SSD',
    network: '100 Gbps',
    gpu: '8 × NVIDIA A100',
    highlight: '适合深度学习训练、推理、科学计算',
    price: '低至 ¥28,000/月',
  },
]

/**
 * 支持的操作系统
 */
const OS_ITEMS = [
  {
    category: 'Linux 系统',
    apps: ['CentOS 7/8', 'Ubuntu 20.04/22.04', 'RHEL 8/9', 'Debian 11', 'Rocky Linux', 'OpenSUSE'],
  },
  {
    category: 'Windows Server',
    apps: ['Windows Server 2022', 'Windows Server 2019', 'Windows Server 2016'],
  },
  {
    category: '定制化镜像',
    apps: ['自带镜像导入', 'ISO 挂载安装', '批量定制部署'],
  },
]

/**
 * 核心优势卡片数据
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: CpuChipIcon,
    title: '极致性能',
    description:
      '独占物理服务器全部计算资源，无虚拟化性能损耗。支持 CPU 绑定、NUMA 拓扑优化，释放裸金属原生算力，满足最严苛的性能要求。',
  },
  {
    icon: LockClosedIcon,
    title: '安全合规',
    description:
      '单租户物理隔离，磁盘、内存彻底独享。支持国密算法、可信计算，满足等保三级、金融监管等合规标准，数据安全性业内领先。',
  },
  {
    icon: CloudIcon,
    title: '云上弹性',
    description:
      '兼具物理服务器性能与云服务器弹性，分钟级交付、按需取用、弹性退还。统一云管平台管理裸金属与虚拟化资源，运维效率倍增。',
  },
  {
    icon: GlobeAltIcon,
    title: '全球部署',
    description:
      '覆盖华北、华东、华南及香港等核心地域，支持就近接入部署。配合 VPC 对等连接与专线接入，构建全球化混合云架构。',
  },
]

/**
 * 配套产品卡片数据
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: ShieldCheckIcon,
    title: 'DDoS 高防',
    description: '为大规格裸金属服务器提供 T 级 DDoS 防护能力，保障游戏、金融等业务免受流量攻击影响。',
    tags: ['DDoS', '流量清洗'],
  },
  {
    icon: CircleStackIcon,
    title: '高性能云硬盘',
    description: '配套超高 IOPS 云硬盘，支持弹性扩容与快照备份，满足数据库与大数据场景的存储弹性需求。',
    tags: ['高性能存储', '弹性扩容'],
  },
  {
    icon: GlobeAltIcon,
    title: '专线接入',
    description: '通过物理专线将裸金属服务器与本地数据中心打通，构建低延迟、高可靠的混合云网络架构。',
    tags: ['混合云', '专线'],
  },
  {
    icon: Squares2X2Icon,
    title: '容器服务',
    description: '在裸金属服务器上部署 Kubernetes 集群，兼顾容器的灵活编排与物理机的高性能算力。',
    tags: ['K8s', '容器编排'],
  },
  {
    icon: ServerStackIcon,
    title: '负载均衡',
    description: '将流量智能分发至多台裸金属实例，提升业务可用性与并发处理能力，消除单点故障。',
    tags: ['高可用', '流量分发'],
  },
  {
    icon: LockClosedIcon,
    title: '密钥管理 KMS',
    description: '提供加密密钥的集中管理与硬件安全模块（HSM）支持，满足金融级数据加密与合规审计需求。',
    tags: ['加密', 'HSM'],
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
 * 动画卡片组件
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
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/cbm.webp')] bg-cover bg-center bg-no-repeat opacity-55" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            裸金属云服务器 / CBM / 物理性能·云上弹性
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            裸金属云服务器 CBM
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            兼具物理服务器性能与云服务器弹性的高性能计算实例。独占物理资源，无虚拟化损耗；分钟级交付，弹性伸缩。
            为高性能计算、大数据、核心数据库、游戏、金融等关键业务场景提供极致算力与安全合规保障。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:flex-wrap">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              立即选购
            </Button>
            <Button href="#overview" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              了解产品详情
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 产品特性区域组件
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Product Features"
          title="物理性能 · 云上弹性 · 安全隔离"
          description="裸金属云服务器以独占物理资源为核心，提供无虚拟化损耗的极致算力，同时兼具云的弹性交付与统一管理能力，满足企业关键业务对性能与合规的双重要求。"
        />

        {/* 核心介绍卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-[#0055ff] p-6 text-white sm:p-8 lg:p-10 shadow-xl shadow-[#0055ff]/20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                独占物理资源 · 分钟级交付
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                每台裸金属服务器均为独立物理节点，CPU、内存、磁盘、网络完全独占。
                虚拟化带来的性能抖动与安全风险不再存在，同时享受云上资源统一管理与弹性编排的便利。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">与虚拟化云服务器对比</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 无虚拟化性能损耗
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 单租户物理隔离
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 超大规格实例（最高数百核）
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 本地 NVMe 极速存储
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 数十 Gbps 网络带宽
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 产品特性卡片 */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OVERVIEW_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="mb-2 block text-xs font-semibold text-[#0055ff]">{item.eyebrow}</span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 适用场景区域组件
 */
function ScenariosSection() {
  return (
    <section id="scenarios" className="scroll-mt-32 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold text-[#0055ff]">
              Scenarios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              六大典型业务场景
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从高性能计算到核心数据库、从游戏业务到金融合规，裸金属云服务器为各类关键业务负载
              提供物理级的性能保障与安全隔离，满足最苛刻的算力需求。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['HPC', '大数据', '游戏', '金融', '数据库', 'AI/ML'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCENARIO_ITEMS.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1} className="bg-slate-50/50">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 实例规格区域组件
 */
function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Instance Specs"
          title="多系列实例规格选择"
          description="提供标准型、计算型、内存型与 GPU 型四类实例族，覆盖从企业应用到深度学习训练的全场景算力需求，按需选择灵活升降。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.name} delay={index * 0.1} className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <span className="inline-flex items-center rounded-md bg-[#eff6ff] px-2 py-1 text-xs font-semibold text-[#0055ff]">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">{item.highlight}</p>
              <div className="mt-5 space-y-3 border-t border-slate-200 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">vCPU</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.cpu}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">内存</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.memory}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">存储</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.storage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">网络</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.network}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">GPU</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.gpu}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#0055ff]">
                <span>查看规格详情</span>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 操作系统区域组件
 */
function OSSection() {
  return (
    <section id="os" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Operating System"
          title="主流操作系统 · 全面兼容"
          description="支持多种 Linux 发行版与 Windows Server 操作系统，同时支持自定义镜像导入与 ISO 挂载安装，灵活满足各类应用环境的部署需求。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OS_ITEMS.map((item, index) => (
            <GlassCard key={item.category} delay={index * 0.08} className="bg-slate-50/50">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <Squares2X2Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.apps.map((app) => (
                  <span
                    key={app}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 核心优势区域组件
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="极致性能 · 安全合规 · 云上弹性"
          description="裸金属云服务器融合物理服务器性能与云服务弹性两大优势，为关键业务负载提供兼具极致算力、安全合规与便捷运维的一站式方案。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1}>
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 配套产品区域组件
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Related Products"
          title="配套云产品组合"
          description="与 DDoS 高防、高性能云硬盘、专线接入等产品协同使用，构建从安全防护到混合云互联的完整业务架构。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.05} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
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
 * 行动号召区域组件
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
            立即体验
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            释放裸金属极致算力
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            分钟级交付，物理性能无损，覆盖华北、华东、华南及香港等核心地域。
            为您的 HPC、数据库、游戏与 AI 业务提供企业级算力基础。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              立即选购实例
            </Button>
            <Button href="/demo" variant="erlieOutline" color="white" className="rounded-xl border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              预约方案演示
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 裸金属云服务器 CBM 主页面
 *
 * 面向高性能计算、核心数据库、游戏、金融等关键业务场景，
 * 提供兼具物理服务器性能与云服务弹性的裸金属云服务器产品介绍。
 */
export default function CBMPage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ScenariosSection />
      <PackagesSection />
      <OSSection />
      <AdvantagesSection />
      <ProductsSection />
      <CTASection />
    </div>
  )
}
