'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BoltIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
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
 * 页面导航链接数据 - 轻量应用服务器产品维度
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'overview', label: '产品特性' },
  { id: 'scenarios', label: '适用场景' },
  { id: 'packages', label: '套餐规格' },
  { id: 'images', label: '应用镜像' },
  { id: 'advantages', label: '核心优势' },
  { id: 'products', label: '配套产品' },
  { id: 'cta', label: '立即体验' },
]

/**
 * 产品特性卡片数据 - 轻量应用服务器六大核心特性
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: CursorArrowRaysIcon,
    eyebrow: '开箱即用',
    title: '一键部署，极简上云',
    description: '精选应用镜像预置运行环境与常用软件，无需复杂配置，数分钟即可完成应用部署上线。',
  },
  {
    icon: BoltIcon,
    eyebrow: '高性价比',
    title: '套餐化计费，成本可控',
    description: '提供多种高性价比套餐选择，计算、存储、流量一体化打包计费，中小企业与开发者轻松上云。',
  },
  {
    icon: GlobeAltIcon,
    eyebrow: '多地域覆盖',
    title: '香港及海外节点可选',
    description: '覆盖香港及多个海外地域节点，就近部署低延迟访问，满足跨境业务与海外用户访问需求。',
  },
  {
    icon: DocumentTextIcon,
    eyebrow: '丰富镜像',
    title: '海量应用镜像生态',
    description: '涵盖网站、博客、电商、开发框架等多种场景应用镜像，官方精选，即开即用。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性扩展',
    title: '按需升级，灵活扩容',
    description: '业务增长时可随时升级套餐规格，支持配置调整与带宽扩容，满足业务发展节奏。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '安全可靠',
    title: '企业级安全防护',
    description: '基于成熟云服务器架构构建，提供快照备份、安全防护与监控告警能力，保障业务稳定运行。',
  },
]

/**
 * 适用场景卡片数据 - 轻量应用服务器六大典型场景
 */
const SCENARIO_ITEMS: CommonCardItem[] = [
  {
    icon: GlobeAltIcon,
    title: '网站建设',
    description: '快速搭建企业官网、个人博客、展示型网站，内置 LAMP/WordPress 等镜像一键部署。',
    tags: ['WordPress', '博客', '官网'],
  },
  {
    icon: Squares2X2Icon,
    title: 'Web 应用',
    description: '承载中小规模 Web 应用与 SaaS 服务，预置 Node.js、Python、PHP 等主流开发环境。',
    tags: ['SaaS', 'Node.js', 'PHP'],
  },
  {
    icon: PaintBrushIcon,
    title: '小程序/小游戏',
    description: '提供稳定的后端服务支撑，配合高带宽流量包，轻松承载小程序与小游戏业务。',
    tags: ['小程序', '小游戏', '后端服务'],
  },
  {
    icon: ShoppingBagIcon,
    title: '电商应用',
    description: '支持商城系统、团购平台等电商场景，配套数据库与缓存镜像，满足中小电商业务需求。',
    tags: ['商城', '团购', '电商平台'],
  },
  {
    icon: CpuChipIcon,
    title: '开发测试环境',
    description: '灵活配置开发测试环境，快速创建与销毁实例，满足团队日常开发与 CI/CD 流水线需求。',
    tags: ['DevOps', 'CI/CD', '测试环境'],
  },
  {
    icon: ServerStackIcon,
    title: '云盘与图床',
    description: '配合大容量存储与高带宽，构建个人云盘、图床服务，满足资源存储与分发需求。',
    tags: ['云盘', '图床', '资源存储'],
  },
]

/**
 * 套餐规格数据 - 轻量应用服务器典型套餐
 */
const PACKAGE_ITEMS = [
  {
    name: '入门型',
    cpu: '1 核',
    memory: '1 GB',
    storage: '40 GB SSD',
    bandwidth: '3 Mbps',
    traffic: '每月 500 GB',
    highlight: '适合个人博客、测试环境',
    price: '低至 ¥35/月',
  },
  {
    name: '标准型',
    cpu: '2 核',
    memory: '2 GB',
    storage: '60 GB SSD',
    bandwidth: '5 Mbps',
    traffic: '每月 800 GB',
    highlight: '适合小型网站、Web 应用',
    price: '低至 ¥68/月',
  },
  {
    name: '进阶型',
    cpu: '2 核',
    memory: '4 GB',
    storage: '80 GB SSD',
    bandwidth: '6 Mbps',
    traffic: '每月 1.2 TB',
    highlight: '适合中型网站、电商应用',
    price: '低至 ¥128/月',
  },
  {
    name: '旗舰型',
    cpu: '4 核',
    memory: '8 GB',
    storage: '120 GB SSD',
    bandwidth: '8 Mbps',
    traffic: '每月 2 TB',
    highlight: '适合中型 SaaS、小程序后端',
    price: '低至 ¥258/月',
  },
]

/**
 * 应用镜像数据 - 轻量应用服务器主流应用场景
 */
const IMAGE_ITEMS = [
  {
    category: '网站建设',
    apps: ['WordPress', 'Discuz!', 'Typecho', 'Ghost', 'Z-Blog'],
  },
  {
    category: '电商系统',
    apps: ['ECShop', 'OpenCart', 'WooCommerce', 'ShopXO'],
  },
  {
    category: '开发框架',
    apps: ['LAMP', 'LNMP', 'Node.js', 'Python', 'Java', 'Go'],
  },
  {
    category: '办公协作',
    apps: ['禅道', 'Nextcloud', 'GitLab', 'Jenkins'],
  },
  {
    category: '容器与微服务',
    apps: ['Docker', 'K3s', 'Portainer'],
  },
  {
    category: '数据库与缓存',
    apps: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
]

/**
 * 核心优势卡片数据 - 轻量应用服务器四大核心优势
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: WrenchScrewdriverIcon,
    title: '简单易用',
    description:
      '产品功能精炼聚焦，面向轻量应用场景优化。无需关注底层网络与存储配置，开箱即用的产品体验大幅降低上云门槛。',
  },
  {
    icon: BoltIcon,
    title: '高性价比',
    description:
      '以套餐化形式打包计算、存储与带宽资源，相比传统云服务器使用成本更低，提供极具竞争力的入门价格。',
  },
  {
    icon: GlobeAltIcon,
    title: '全球节点',
    description:
      '香港及海外多地域节点可选，支持跨境业务部署。就近接入实现低延迟访问，满足海外用户与业务拓展需求。',
  },
  {
    icon: DocumentTextIcon,
    title: '丰富镜像',
    description:
      '预置多种主流应用镜像与开发环境，覆盖网站、博客、电商、开发框架等常见场景，一键部署快速上线。',
  },
]

/**
 * 配套产品卡片数据 - 与轻量应用服务器协同的云产品
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: ShieldCheckIcon,
    title: 'Web 应用防火墙',
    description: '为轻量应用服务器提供 SQL 注入、XSS 攻击等常见 Web 威胁防护，保障业务应用安全。',
    tags: ['应用防护', '安全加固'],
  },
  {
    icon: ServerStackIcon,
    title: '对象存储',
    description: '与轻量应用服务器配合，构建高可用、低成本的图片、视频与静态资源存储分发方案。',
    tags: ['图床', '资源存储'],
  },
  {
    icon: GlobeAltIcon,
    title: 'CDN 加速',
    description: '将轻量应用服务器的内容分发至全球边缘节点，加速静态与动态内容访问，提升用户体验。',
    tags: ['加速', '全球分发'],
  },
  {
    icon: DocumentTextIcon,
    title: '域名与 DNS',
    description: '提供域名注册、DNS 解析与备案服务，与轻量应用服务器配合完成网站业务完整部署。',
    tags: ['域名', 'DNS'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'SSL 证书',
    description: '为轻量应用服务器部署 HTTPS 加密访问，提升网站可信度与数据传输安全性。',
    tags: ['HTTPS', '加密'],
  },
  {
    icon: CpuChipIcon,
    title: '弹性云服务器',
    description: '业务规模增长后，可平滑迁移至弹性云服务器，享受更灵活的计算与网络配置能力。',
    tags: ['升级', '弹性扩展'],
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
      className={`group relative overflow-hidden rounded-md border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 ${className}`}
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
 * 展示轻量应用服务器的产品定位与核心价值
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/lighthouse.webp')] bg-cover bg-center bg-no-repeat opacity-55" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            轻量应用服务器 / Lighthouse / 开箱即用
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            轻量应用服务器 Lighthouse
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            新一代开箱即用、面向轻量应用场景的云服务器产品，助力中小企业和开发者便捷高效地在云端构建网站、Web
            应用、小程序、电商应用、云盘图床与各类开发测试环境，精选应用镜像实现一键部署，享受极简上云体验。
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
 * 展示轻量应用服务器的六大核心特性
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Product Features"
          title="面向轻量应用场景的一站式云服务器"
          description="以开箱即用为核心设计理念，提供高性价比套餐、丰富应用镜像与多地域部署能力，让中小企业与开发者轻松上云。"
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
                精选应用镜像 · 一键部署上线
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                覆盖网站、电商、开发框架、办公协作等主流场景，无需手动配置运行环境与软件依赖，
                数分钟即可完成应用部署并投入使用，大幅降低上云门槛与运维成本。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 企业官网与个人博客
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 小程序/小游戏后端
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 中小电商应用
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 开发测试环境
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 云盘与图床服务
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 产品特性卡片 Bento Grid */}
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
 * 展示轻量应用服务器的六大典型场景
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
              六大典型使用场景
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从个人博客到中型 SaaS，从开发测试环境到电商应用平台，轻量应用服务器覆盖丰富业务场景，
              提供面向场景优化的应用镜像与套餐配置。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['网站', 'Web 应用', '小程序', '电商', '开发测试', '云盘图床'].map((tag) => (
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
 * 套餐规格区域组件
 * 展示轻量应用服务器的典型套餐配置
 */
function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Package Specs"
          title="多档次套餐灵活选择"
          description="提供入门到旗舰多档套餐规格，计算、存储、带宽一体化打包，按需选购并可随时升级，匹配业务发展节奏。"
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
                  <span className="text-slate-500">系统盘</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.storage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">带宽</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.bandwidth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">流量包</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.traffic}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#0055ff]">
                <span>查看套餐详情</span>
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
 * 应用镜像区域组件
 * 展示轻量应用服务器的主流应用镜像类别
 */
function ImagesSection() {
  return (
    <section id="images" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Application Images"
          title="丰富应用镜像 · 一键即开即用"
          description="覆盖网站建设、电商系统、开发框架、办公协作等主流场景，预置成熟的运行环境与软件配置，无需从零搭建。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGE_ITEMS.map((item, index) => (
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
 * 展示轻量应用服务器的四大核心优势
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="简单易用 · 高性价比 · 多地域覆盖"
          description="围绕轻量应用场景深度优化，将复杂云产品能力封装成精炼易用的套餐与镜像，赋能中小企业与开发者快速上云。"
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
 * 展示与轻量应用服务器协同使用的相关云产品
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Related Products"
          title="配套云产品组合"
          description="与对象存储、CDN、SSL 证书、域名等产品协同使用，构建从部署到分发、从安全到运维的完整业务方案。"
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
 * 引导用户选购轻量应用服务器或咨询方案
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
            开启极简上云体验
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            精选应用镜像一键部署，高性价比套餐灵活选购，香港及海外多地域节点可选，
            为您的网站、Web 应用、小程序与电商业务提供稳定可靠的云端支撑。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              立即选购套餐
            </Button>
            <Button href="/demo" variant="erlieOutline" color="white" className="rounded-xl border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              咨询定制方案
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 轻量应用服务器 Lighthouse 主页面
 *
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，
 * 完全适配多端响应式展示。
 * 面向中小企业与开发者提供开箱即用的轻量应用服务器产品介绍。
 */
export default function LighthousePage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ScenariosSection />
      <PackagesSection />
      <ImagesSection />
      <AdvantagesSection />
      <ProductsSection />
      <CTASection />
    </div>
  )
}
