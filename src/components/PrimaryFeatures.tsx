'use client'

import { useState, useCallback } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
  ServerIcon,
  GlobeAltIcon,
  CloudIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

/* ================================================================
   Data Types
   ================================================================ */

interface FeatureItem {
  title: string
  desc: string
}

interface ProductLink {
  name: string
  href: string
}

interface CustomerRef {
  name: string
  href: string
}

interface Feature {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string; style?: CSSProperties }>
  gradient: string
  bgImage: string
  features: FeatureItem[]
  products: ProductLink[]
  customers?: CustomerRef[]
}

interface TabCategory {
  id: string
  name: string
  features: Feature[]
}

/* ================================================================
   Data
   ================================================================ */

const TAB_CATEGORIES: TabCategory[] = [
  {
    id: 'compute',
    name: '计算服务',
    features: [
      {
        id: 'ecs',
        title: '弹性计算 ECS',
        description:
          '基于自研虚拟化架构，提供高性能、高稳定性的云服务器实例。支持秒级弹性伸缩，满足业务快速增长需求，有效降低 IT 成本。',
        icon: CpuChipIcon,
        gradient: 'linear-gradient(135deg, #3860F4 0%, #5578FA 50%, #7D9EFD 100%)',
        bgImage: '/images/screenshots/solution-1.webp',
        features: [
          { title: '秒级弹性伸缩', desc: '按需分配资源，从容应对突发流量。' },
          { title: '高可用架构', desc: 'SLA高达99.99%，保障业务连续运行。' },
          { title: '灵活计费', desc: '支持按量付费和包年包月，灵活应对业务波动。' },
          { title: '全方位监控', desc: '实时告警通知，保障业务稳定运行。' },
        ],
        products: [
          { name: '云服务器 ECS', href: '/ecs' },
          { name: '轻量云主机', href: '/host' },
          { name: 'Windows 服务器', href: '/windows' },
        ],
        customers: [
          { name: '某电商平台', href: '#' },
          { name: '某金融机构', href: '#' },
        ],
      },
      {
        id: 'server',
        title: '独立服务器',
        description:
          '提供高性能物理服务器租用服务，独享计算资源，满足企业对性能和安全性的极致要求，适用于数据库、游戏等高性能场景。',
        icon: ServerIcon,
        gradient: 'linear-gradient(135deg, #2A315F 0%, #3D4680 50%, #505BA1 100%)',
        bgImage: '/images/screenshots/solution-2.webp',
        features: [
          { title: '独享物理资源', desc: '无虚拟化开销，性能极致释放。' },
          { title: '高安全隔离', desc: '物理隔离，满足金融级安全要求。' },
          { title: '灵活定制', desc: '支持硬件配置自定义，按需组合。' },
          { title: 'BGP 多线接入', desc: '高速网络接入，低延迟访问体验。' },
        ],
        products: [
          { name: '独立服务器', href: '/server' },
          { name: '高防服务器', href: '/server' },
        ],
      },
      {
        id: 'host',
        title: '虚拟主机',
        description:
          '简单易用的建站服务，预装网站运行环境，支持Windows/Linux系统。适合个人博客、企业官网等轻量级网站建设需求。',
        icon: GlobeAltIcon,
        gradient: 'linear-gradient(135deg, #1DBEF2 0%, #38C9F5 50%, #54D4F8 100%)',
        bgImage: '/images/screenshots/solution-3.webp',
        features: [
          { title: '开箱即用', desc: '预装运行环境，上传代码即可上线。' },
          { title: '稳定可靠', desc: '共享高可用集群，服务稳定运行。' },
          { title: '性价比高', desc: '轻量建站首选，低成本启动。' },
          { title: '管理便捷', desc: '可视化管理面板，操作简单直观。' },
        ],
        products: [
          { name: '虚拟主机', href: '/host' },
          { name: 'SSL证书', href: '/ssl' },
        ],
      },
      {
        id: 'cdn',
        title: 'CDN 加速',
        description:
          '全球内容分发网络，3200+ 加速节点覆盖全球主要区域，有效降低访问延迟，提升用户体验，保障业务稳定运行。',
        icon: CloudIcon,
        gradient: 'linear-gradient(135deg, #4C70F5 0%, #6384F7 50%, #7A98F9 100%)',
        bgImage: '/images/screenshots/PrimaryFeatures-2.webp',
        features: [
          { title: '全球加速', desc: '3200+ 节点覆盖，智能调度最优链路。' },
          { title: '安全防护', desc: '内置 DDoS 防护，保障源站安全。' },
          { title: '实时监控', desc: '全景数据监控，掌握加速效果。' },
          { title: '按量付费', desc: '按实际用量计费，成本灵活可控。' },
        ],
        products: [
          { name: 'CDN 加速', href: '/cdn' },
          { name: '全站加速', href: '/cdn' },
        ],
      },
    ],
  },
  {
    id: 'security',
    name: '安全防护',
    features: [
      {
        id: 'ddos',
        title: 'DDoS 防护',
        description:
          '提供 T 级 DDoS 攻击防御能力，采用智能清洗算法，精准识别并过滤恶意流量，确保业务在攻击期间依然稳定可用。',
        icon: ShieldCheckIcon,
        gradient: 'linear-gradient(135deg, #3860F4 0%, #5578FA 50%, #7D9EFD 100%)',
        bgImage: '/images/screenshots/solution-1.webp',
        features: [
          { title: 'T级防御', desc: '攻击防御能力，清洗成功率99%。' },
          { title: '智能识别', desc: 'AI算法精准识别，秒级响应攻击。' },
          { title: '全球节点', desc: '分布式清洗中心，就近防御攻击。' },
          { title: '7×24运维', desc: '专业安全团队全天候值守。' },
        ],
        products: [
          { name: 'DDoS 高防 IP', href: '/server' },
          { name: 'SSL 证书', href: '/ssl' },
        ],
      },
      {
        id: 'waf',
        title: 'Web 应用防火墙',
        description:
          '智能 WAF 防护系统，精准拦截 SQL 注入、XSS 跨站脚本等 Web 攻击，保障应用安全，满足等保合规要求。',
        icon: LockClosedIcon,
        gradient: 'linear-gradient(135deg, #2A315F 0%, #3D4680 50%, #505BA1 100%)',
        bgImage: '/images/screenshots/solution-2.webp',
        features: [
          { title: '精准拦截', desc: '规则库+AI引擎，误报率低于0.1%。' },
          { title: '等保合规', desc: '满足等保三级合规认证要求。' },
          { title: '自动更新', desc: '规则库实时更新，防护0day漏洞。' },
          { title: '可视化管理', desc: '攻击态势大屏，一目了然。' },
        ],
        products: [
          { name: 'WAF 防护', href: '/security' },
          { name: '漏洞扫描', href: '/security' },
        ],
      },
      {
        id: 'proxy',
        title: '代理 IP',
        description:
          '提供全球各地的高质量长时效住宅 IP，独享纯净资源。支持多种协议，确保业务安全稳定，助力跨境业务无忧出海。',
        icon: GlobeAltIcon,
        gradient: 'linear-gradient(135deg, #1D89F2 0%, #38A0F5 50%, #54B7F8 100%)',
        bgImage: '/images/screenshots/solution-5.webp',
        features: [
          { title: '全球IP资源', desc: '覆盖200+国家地区，海量优质IP池。' },
          { title: '独享纯净IP', desc: '独享资源，业务成功率提升50%。' },
          { title: '多协议支持', desc: '支持HTTP/HTTPS/SOCKS5多种协议。' },
          { title: '7×24技术支持', desc: '全天候技术支持，售后无忧保障。' },
        ],
        products: [
          { name: '代理IP服务', href: '/agent' },
          { name: '全球加速', href: '/cdn' },
        ],
      },
      {
        id: 'host-security',
        title: '主机安全',
        description:
          '提供病毒查杀、入侵检测、漏洞管理等主机安全能力，构建云端服务器安全防线，全方位保障您的主机安全。',
        icon: ShieldCheckIcon,
        gradient: 'linear-gradient(135deg, #4C70F5 0%, #6384F7 50%, #7A98F9 100%)',
        bgImage: '/images/screenshots/solution-4.webp',
        features: [
          { title: '病毒查杀', desc: '多引擎扫描，精准查杀恶意程序。' },
          { title: '入侵检测', desc: '实时监测异常行为，及时告警。' },
          { title: '合规基线', desc: '内置等保/CIS基线检查能力。' },
          { title: '轻量 Agent', desc: '资源占用极低，对业务无影响。' },
        ],
        products: [
          { name: '主机安全', href: '/security' },
          { name: '堡垒机', href: '/security' },
        ],
      },
    ],
  },
  {
    id: 'ecommerce',
    name: '电商方案',
    features: [
      {
        id: 'eccloud',
        title: '电商云',
        description:
          '专为跨境电商卖家打造的云主机服务，提供纯净独立的 IP 环境。有效防止账号关联，提升店铺运营安全性与稳定性。',
        icon: CircleStackIcon,
        gradient: 'linear-gradient(135deg, #3860F4 0%, #5578FA 50%, #7D9EFD 100%)',
        bgImage: '/images/screenshots/solution-1.webp',
        features: [
          { title: '固定纯净IP', desc: '杜绝账号关联风险，保障店铺安全。' },
          { title: '深度网络优化', desc: '优化网络链路，访问速度提升30%。' },
          { title: '平台全面兼容', desc: '兼容主流电商平台与ERP软件。' },
          { title: '一键部署', desc: '开箱即用，快速搭建运营环境。' },
        ],
        products: [
          { name: '电商云主机', href: '/eccloud' },
          { name: '跨境电商方案', href: '/ecommerce' },
        ],
        customers: [
          { name: '某跨境电商', href: '#' },
          { name: '某品牌出海', href: '#' },
        ],
      },
      {
        id: 'ecommerce-solution',
        title: '跨境电商方案',
        description:
          '一站式跨境电商解决方案，涵盖店铺运营、支付结算、物流管理等全链路服务，助力中国品牌高效出海。',
        icon: GlobeAltIcon,
        gradient: 'linear-gradient(135deg, #2A315F 0%, #3D4680 50%, #505BA1 100%)',
        bgImage: '/images/screenshots/solution-2.webp',
        features: [
          { title: '全链路服务', desc: '从开店到运营，一站式解决方案。' },
          { title: '合规运营', desc: '符合平台规则，安全稳定运营。' },
          { title: '成本优化', desc: '降低30%运营成本，提升利润率。' },
          { title: '专业指导', desc: '资深运营团队一对一指导。' },
        ],
        products: [
          { name: '电商方案', href: '/ecommerce' },
          { name: '零售方案', href: '/retail' },
        ],
      },
      {
        id: 'retail',
        title: '零售数字化',
        description:
          '面向零售行业的数字化解决方案，整合线上线下渠道，构建全渠道零售体系，助力传统零售企业实现数智化转型。',
        icon: CloudIcon,
        gradient: 'linear-gradient(135deg, #1DBEF2 0%, #38C9F5 50%, #54D4F8 100%)',
        bgImage: '/images/screenshots/solution-3.webp',
        features: [
          { title: '全渠道整合', desc: '线上线下数据互通，统一管理。' },
          { title: '智能营销', desc: 'AI精准营销，提升转化率。' },
          { title: '数据驱动', desc: '实时数据分析，指导经营决策。' },
          { title: '灵活部署', desc: '支持私有化部署，数据安全可控。' },
        ],
        products: [
          { name: '零售方案', href: '/retail' },
          { name: '数据分析', href: '/retail' },
        ],
      },
      {
        id: 'cms',
        title: '内容管理系统',
        description:
          '企业级内容管理系统解决方案，支持多站点、多语言管理，提供丰富的模板和插件生态，快速构建企业官网和内容平台。',
        icon: ServerIcon,
        gradient: 'linear-gradient(135deg, #4C70F5 0%, #6384F7 50%, #7A98F9 100%)',
        bgImage: '/images/screenshots/solution-4.webp',
        features: [
          { title: '多站点管理', desc: '一个后台管理多个站点内容。' },
          { title: '可视化编辑', desc: '拖拽式页面构建，无需编码。' },
          { title: 'SEO优化', desc: '内置SEO工具，提升搜索排名。' },
          { title: '安全稳定', desc: '企业级安全防护，数据无忧。' },
        ],
        products: [
          { name: 'CMS方案', href: '/cms' },
          { name: '虚拟主机', href: '/host' },
        ],
      },
    ],
  },
]

/* ================================================================
   Shared card content (reused on both mobile & desktop)
   ================================================================ */

function CardBody({ feature }: { feature: Feature }) {
  return (
    <>
      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900 tracking-tight">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-500 mt-1.5 leading-[26px] tracking-wide">
        {feature.description}
      </p>

      {/* Feature List */}
      <div className="mt-3 flex-1 space-y-[6px]">
        {feature.features.map((item, i) => (
          <div key={i} className="flex items-start">
            <span className="inline-block mr-2.5 mt-[5px] flex-shrink-0">
              <CheckIcon className="w-3.5 h-3.5 text-brand-500" />
            </span>
            <span className="text-sm leading-relaxed">
              <span className="text-neutral-900 font-semibold tracking-tight">
                {item.title}
              </span>
              <span className="text-neutral-500">
                {' — '}{item.desc}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Customers (if any) */}
      {feature.customers && feature.customers.length > 0 && (
        <div className="mt-7">
          <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-widest">客户</h4>
          <div className="mt-3 flex flex-wrap">
            {feature.customers.map((cust, i) => (
              <a
                key={i}
                href={cust.href}
                className="mb-1 mr-3 bg-white border border-neutral-200 rounded-lg px-[21px] py-[3px] w-fit text-sm text-neutral-900 hover:border-brand-500 hover:text-brand-500 transition-colors"
              >
                {cust.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Products */}
      {feature.products.length > 0 && (
        <div className="mb-7">
          <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-widest mb-3">
            相关产品
          </h4>
          <div className="flex flex-wrap text-neutral-500 gap-x-6 gap-y-1">
            {feature.products.map((prod, i) => (
              <a
                key={i}
                href={prod.href}
                className="flex items-center text-sm leading-6 hover:text-brand-500 transition-colors"
              >
                {prod.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="grid grid-cols-2 gap-x-8 mt-auto">
        <a
          href="/chat"
          className="rounded-[10px] text-white bg-brand-500 hover:bg-brand-600 px-4 lg:px-6 h-[48px] lg:h-[52px] flex justify-between items-center transition-all duration-300 group shadow-sm hover:shadow-md"
        >
          <span className="text-sm font-semibold tracking-wide">立即咨询</span>
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={`/${feature.id}`}
          className="rounded-[10px] border border-neutral-200 text-neutral-900 hover:border-brand-500 hover:text-brand-500 bg-white px-4 lg:px-6 h-[48px] lg:h-[52px] flex justify-between items-center transition-all duration-300 group"
        >
          <span className="text-sm font-semibold tracking-wide">了解详情</span>
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </>
  )
}

/* ================================================================
   Tab Bar
   ================================================================ */

function TabBar({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: TabCategory[]
  activeTab: string
  onTabChange: (id: string) => void
}) {
  return (
    <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
      <div className="inline-flex bg-neutral-100 rounded-lg p-1 flex-nowrap whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={clsx(
              'px-4 lg:px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 tracking-wide flex-shrink-0',
              activeTab === tab.id
                ? 'bg-white text-neutral-900 shadow-sm font-semibold'
                : 'text-neutral-500 hover:text-neutral-700',
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ================================================================
   Desktop — Horizontal Accordion Card
   ================================================================ */

function DesktopSolutionCard({
  feature,
  isExpanded,
  onMouseEnter,
}: {
  feature: Feature
  isExpanded: boolean
  onMouseEnter: () => void
}) {
  return (
    <div
      className={clsx(
        'relative cursor-pointer rounded-[18px] transition-all duration-500 ease-out overflow-hidden min-w-0',
        isExpanded ? 'flex-[7]' : 'flex-[2]',
      )}
      onMouseEnter={onMouseEnter}
    >
      {/* Large Detail Layer */}
      <div
        className={clsx(
          'absolute inset-0 transition-opacity duration-500 z-0',
          isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="relative px-12 py-9 h-full flex flex-col bg-white border border-neutral-200 rounded-[18px] overflow-hidden">
          {/* Background image with subtle overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
            style={{ backgroundImage: `url(${feature.bgImage})` }}
          />
          <div className="relative z-10 h-full flex flex-col">
            <CardBody feature={feature} />
          </div>
        </div>
      </div>

      {/* Small Overlay Layer */}
      <div
        className={clsx(
          'absolute inset-0 z-10 transition-opacity duration-500 rounded-[18px] flex flex-col overflow-hidden',
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100',
        )}
      >
        {/* Background image under gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.bgImage})` }}
        />
        {/* Gradient overlay on top of image */}
        <div
          className="absolute inset-0"
          style={{ background: feature.gradient, opacity: 0.6 }}
        />
        <div className="relative z-10 pt-9 pl-[29px] pr-[16px] text-white h-full flex flex-col">
          <div className="font-semibold text-xl flex justify-between items-center tracking-tight">
            <span>{feature.title}</span>
            <ArrowRightIcon className="w-4 h-4 opacity-70 flex-shrink-0" />
          </div>
          <p className="line-clamp-2 mt-1.5 text-sm leading-relaxed text-white/75 tracking-wide">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   Mobile — Full-detail stacked card
   ================================================================ */

function MobileSolutionCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-[18px] overflow-hidden border border-neutral-200 bg-white">
      {/* Gradient header strip with bg image */}
      <div className="relative px-5 py-5 flex items-center gap-3 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.bgImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: feature.gradient, opacity: 0.65 }}
        />
        <feature.icon className="relative z-10 w-6 h-6 text-white flex-shrink-0" />
        <span className="relative z-10 font-semibold text-lg text-white tracking-tight">
          {feature.title}
        </span>
      </div>

      {/* Content with subtle bg watermark */}
      <div className="relative px-5 py-5 flex flex-col gap-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
          style={{ backgroundImage: `url(${feature.bgImage})` }}
        />
        <div className="relative z-10">
          <CardBody feature={feature} />
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   Main Component
   ================================================================ */

export function PrimaryFeatures() {
  const [activeTab, setActiveTab] = useState(TAB_CATEGORIES[0].id)
  const [expandedIndex, setExpandedIndex] = useState(0)

  const currentCategory = TAB_CATEGORIES.find((c) => c.id === activeTab) ?? TAB_CATEGORIES[0]

  const handleCardToggle = useCallback((index: number) => {
    setExpandedIndex(index)
  }, [])

  return (
    <section className="relative bg-white pt-12 pb-10 lg:pt-[88px] lg:pb-[60px] overflow-hidden">
      <Container className="relative z-10">
        {/* ── Header ── */}
        <div className="flex justify-between items-end">
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-[32px] text-neutral-900 tracking-tight">
            深入行业与场景，加速企业数智化转型
          </h2>
          <div className="hidden sm:flex items-center text-sm text-neutral-900 font-medium tracking-wide">
            <a
              href="/new"
              className="inline-flex items-center gap-1.5 leading-8 hover:text-brand-500 transition-colors group mr-[48px]"
            >
              <span>全部方案</span>
              <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 leading-8 hover:text-brand-500 transition-colors group"
            >
              <span>架构咨询</span>
              <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ── Subtitle ── */}
        <p className="text-sm lg:text-base text-neutral-500 mt-2 mb-6 lg:mb-[50px] leading-relaxed tracking-wide">
          应需而为，推动创新技术与场景应用深度融合
        </p>

        {/* ── Tab Bar ── */}
        <TabBar
          tabs={TAB_CATEGORIES}
          activeTab={activeTab}
          onTabChange={(id) => {
            setActiveTab(id)
            setExpandedIndex(0)
          }}
        />

        {/* ================================================================ */}
        {/* Desktop — Horizontal accordion (lg+)                             */}
        {/* ================================================================ */}
        <div className="hidden lg:flex mt-8 w-full h-[547px] gap-3">
          {currentCategory.features.map((feature, index) => (
            <DesktopSolutionCard
              key={feature.id}
              feature={feature}
              isExpanded={expandedIndex === index}
              onMouseEnter={() => handleCardToggle(index)}
            />
          ))}

          {/* "View More" vertical link */}
          <a
            href="/new"
            className="group relative flex-shrink-0 cursor-pointer rounded-[18px] text-sm w-[73px] h-[479px] flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300"
          >
            <span className="w-[20px] text-center leading-relaxed text-neutral-500 group-hover:text-brand-500 transition-colors">
              查看更多
            </span>
            <ArrowRightIcon className="absolute bottom-[20px] w-4 h-4 text-neutral-400 group-hover:text-brand-500 transition-colors" />
          </a>
        </div>

        {/* ================================================================ */}
        {/* Mobile — Vertical stacked cards (<lg)                            */}
        {/* ================================================================ */}
        <div className="lg:hidden mt-6 space-y-4">
          {currentCategory.features.map((feature) => (
            <MobileSolutionCard key={feature.id} feature={feature} />
          ))}

          {/* Mobile "View More" link */}
          <a
            href="/new"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-700 hover:border-brand-300 hover:text-brand-500 transition-colors tracking-wide"
          >
            查看更多方案
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}
