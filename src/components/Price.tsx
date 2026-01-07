'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

/**
 * 服务器计划接口 - 定义挂机宝服务器配置数据结构
 * @interface ServerPlan
 */
interface ServerPlan {
  name: string
  description: string
  os: string
  cpu: string
  memory: string
  storage: string
  bandwidth: string
  price: string
  unit: string
  originalPrice: string
  featured?: boolean
}

/**
 * 轻量应用服务器接口 - 定义轻量应用服务器配置数据结构
 * @interface LightServerPlan
 */
interface LightServerPlan {
  name: string
  badge: string
  config: string
  specs: string
  location: string
  duration: string
  discount: string
  price: string
  unit: string
  originalPrice: string
  featured?: boolean
}

/**
 * 卡片属性接口 - 定义卡片组件的属性
 * @interface CardProps
 */
interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  featured?: boolean
  badge?: string
  topBgColor?: string
}

/**
 * 基础卡片组件 - Bento Grid 风格的卡片布局
 *
 * 设计规范参考：
 * - 边框：默认 #E2E8F0，Hover #1664ff
 * - 阴影：Hover shadow-lg
 * - 圆角：rounded-lg (8px)
 * - 字体颜色：#1d2129 (Primary), #4e5969 (Secondary)
 */
const Card = ({ title, children, className, featured = false, badge, topBgColor }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.4 }}
    className={clsx(
      'group relative flex h-full flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300',
      featured ? 'border-[#1664ff] shadow-md' : 'border-[#E2E8F0] hover:border-[#1664ff] hover:shadow-xl hover:-translate-y-1',
      className
    )}
  >
    {badge && (
      <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-[#1664ff] px-3 py-1 text-xs font-medium text-white shadow-sm">
        {badge}
      </div>
    )}

    {title && (
      <div
        className={clsx(
          'relative px-6 pt-10 pb-6',
          topBgColor || (featured ? 'bg-gradient-to-br from-[#eff6ff] to-white' : 'bg-gradient-to-br from-[#f7f8fa] to-white')
        )}
      >
        <h3 className="text-xl font-bold text-[#1d2129]">{title}</h3>
        {/* 装饰性背景元素 */}
        <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#1664ff]/5 to-transparent blur-2xl" />
      </div>
    )}
    <div className="flex-1 flex flex-col">
      {children}
    </div>
  </motion.div>
)

/**
 * 规格行属性接口 - 定义规格行组件的属性
 * @interface SpecRowProps
 */
interface SpecRowProps {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
  highlight?: boolean
}

/**
 * 规格行组件 - 展示配置项的标签和值
 */
const SpecRow = ({ label, value, icon: Icon, highlight = false }: SpecRowProps) => (
  <div className="border-b border-[#f2f3f5] px-6 py-3 last:border-b-0 flex items-center justify-between text-sm group-hover:bg-[#fcfcfd] transition-colors">
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-4 w-4 text-[#86909c]" />}
      <span className="text-[#86909c]">{label}</span>
    </div>
    <span className={clsx('font-medium', highlight ? 'text-[#1664ff]' : 'text-[#1d2129]')}>{value}</span>
  </div>
)

/**
 * 服务器卡片组件属性接口 - 定义服务器卡片组件的属性
 * @interface ServerCardProps
 */
interface ServerCardProps {
  plan: ServerPlan
}

/**
 * 轻量应用服务器卡片组件属性接口 - 定义轻量应用服务器卡片组件的属性
 * @interface LightServerCardProps
 */
interface LightServerCardProps {
  server: LightServerPlan
}

/**
 * 价格展示组件 - Bento Grid 风格的定价与促销展示
 * 设计目标：
 * - 采用 Bento Grid 不对称布局，创造视觉节奏
 * - 蓝白色调主视觉，符合 B 端专业调性
 * - 圆角卡片与渐变效果，现代化设计语言
 * - 流畅的动画过渡，提升用户体验
 * @returns 页面主体 JSX
 */
export function Price() {
  // 挂机宝服务器配置数据
  const serverPlans: ServerPlan[] = [
    {
      name: '1核1G挂机宝A型',
      description: 'NAT网络服务，适合轻量级应用',
      os: 'Windows/CentOS',
      cpu: '1核',
      memory: '1G',
      storage: 'NVMe SSD 40GB',
      bandwidth: '20Mbps（上行带宽）',
      price: '26.21',
      unit: '元/月',
      originalPrice: '201.6',
      featured: false,
    },
    {
      name: '1核2G挂机宝B型',
      description: 'NAT网络服务，性能升级版',
      os: 'Windows/CentOS',
      cpu: '1核',
      memory: '2G',
      storage: 'NVMe SSD 60GB',
      bandwidth: '30Mbps（上行带宽）',
      price: '49',
      unit: '元/月',
      originalPrice: '610.34',
      featured: true,
    },
    {
      name: '2核2G挂机宝C型',
      description: 'NAT网络服务，双核配置',
      os: 'Windows/CentOS',
      cpu: '2核',
      memory: '2G',
      storage: 'NVMe SSD 80GB',
      bandwidth: '40Mbps（上行带宽）',
      price: '134.64',
      unit: '元/月',
      originalPrice: '207.44',
      featured: false,
    },
    {
      name: '2核4G挂机宝D型',
      description: 'NAT网络服务，高性能配置',
      os: 'Windows/CentOS',
      cpu: '2核',
      memory: '4G',
      storage: 'NVMe SSD 100GB',
      bandwidth: '50Mbps（上行带宽）',
      price: '335.69',
      unit: '元/月',
      originalPrice: '610.34',
      featured: false,
    },
  ]

  // 轻量应用服务器配置数据
  const lightServerPlans: LightServerPlan[] = [
    {
      name: '轻量应用服务器 2核2G',
      badge: '爆款',
      config: '2核2G4M',
      specs: '50G SSD盘 300G月流量',
      location: '北京/上海/广州/成都',
      duration: '3个月',
      discount: '4折',
      price: '60',
      unit: '元 ¥20元/月',
      originalPrice: '150',
      featured: true,
    },
    {
      name: '轻量应用服务器 2核2G',
      badge: '爆款',
      config: '2核2G4M',
      specs: '50G SSD盘 300G月流量',
      location: '北京/上海/广州/成都',
      duration: '1年',
      discount: '1折',
      price: '99',
      unit: '元 ¥8.25元/月',
      originalPrice: '1200',
      featured: false,
    },
    {
      name: '轻量应用服务器 2核4G5M',
      badge: '入门之选',
      config: '2核4G5M',
      specs: '60G SSD盘 500G月流量',
      location: '北京/上海/广州/成都',
      duration: '1年',
      discount: '2.3折',
      price: '188',
      unit: '元 ¥15.67元/月',
      originalPrice: '816',
      featured: false,
    },
    {
      name: '轻量应用服务器 2核4G6M',
      badge: '入门之选',
      config: '2核4G6M',
      specs: '70G SSD盘 800G月流量',
      location: '北京/上海/广州/成都',
      duration: '1年',
      discount: '2.3折',
      price: '199',
      unit: '元 ¥16.58元/月',
      originalPrice: '864',
      featured: false,
    },
  ]

  /**
   * 服务器卡片组件 - 展示单个服务器配置信息
   * @param props - 服务器卡片组件属性
   * @returns 服务器卡片组件JSX
   */
  const ServerCard = ({ plan }: ServerCardProps) => (
    <Card title={plan.name} featured={plan.featured} badge={plan.featured ? '热销推荐' : undefined}>
      <p className="border-b border-[#f2f3f5] px-6 py-4 text-sm leading-relaxed text-[#4e5969]">
        {plan.description}
      </p>
      <SpecRow label="系统" value={plan.os} />
      <SpecRow label="CPU" value={plan.cpu} />
      <SpecRow label="内存" value={plan.memory} />
      <SpecRow label="硬盘" value={plan.storage} />
      <SpecRow label="带宽" value={plan.bandwidth} />
      <div className="mt-auto border-t border-[#f2f3f5] px-6 py-5">
        <div className="mb-4 rounded-md bg-[#f7f8fa] px-3 py-2 text-xs text-[#4e5969]">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="h-4 w-4 text-[#1664ff]" />
            <span>100G 防护 • NAT转发 x3</span>
          </div>
        </div>
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#1d2129]">¥{plan.price}</span>
          <span className="text-sm text-[#86909c]">{plan.unit}</span>
        </div>
        <div className="mb-5 text-xs text-[#86909c] line-through">
          日常价：{plan.originalPrice} 元
        </div>
        <div className="flex gap-3">
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all"
            className="flex-1 rounded-md border border-[#e5e6eb] bg-white py-2 text-center text-sm font-medium text-[#1d2129] transition-all hover:bg-[#f7f8fa] hover:border-[#1664ff] hover:text-[#1664ff]"
            aria-label="加入购物车"
          >
            加购
          </a>
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all"
            className="flex-1 rounded-md bg-[#1664ff] py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4086ff] hover:shadow-md"
            aria-label="立即购买"
          >
            购买
          </a>
        </div>
      </div>
    </Card>
  )

  /**
   * 轻量应用服务器卡片组件 - 展示单个轻量应用服务器配置信息
   * @param props - 轻量应用服务器卡片组件属性
   * @returns 轻量应用服务器卡片组件JSX
   */
  const LightServerCard = ({ server }: LightServerCardProps) => (
    <Card
      title={server.name}
      featured={server.featured}
      badge={server.badge}
      topBgColor={server.featured ? 'bg-gradient-to-br from-[#e8f3ff] to-white' : undefined}
    >
      <div className="border-b border-[#f2f3f5] px-6 py-4">
        <p className="text-sm leading-relaxed text-[#4e5969]">{server.config}</p>
      </div>
      <SpecRow label="配置" value={server.specs} />
      <SpecRow label="地域" value={server.location} />
      <SpecRow label="时长" value={server.duration} highlight />

      <div className="mt-auto px-6 py-5">
        <div className="mb-4 rounded-md bg-[#f7f8fa] px-3 py-2 text-xs text-[#4e5969]">
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-[#1664ff]" />
            <span>{server.discount} 限1个人</span>
          </div>
        </div>
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#1664ff]">¥{server.price}</span>
          <span className="text-sm text-[#86909c]">{server.unit}</span>
        </div>
        <div className="mb-5 text-xs text-[#86909c] line-through">
          日常价：{server.originalPrice} 元
        </div>
        <div className="flex gap-3">
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all"
            className="flex-1 rounded-md bg-[#1664ff] py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4086ff] hover:shadow-md"
            aria-label="立即购买"
          >
            立即抢购
          </a>
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all"
            className="flex-1 rounded-md border border-[#e5e6eb] bg-white py-2 text-center text-sm font-medium text-[#1d2129] transition-all hover:bg-[#f7f8fa] hover:border-[#1664ff] hover:text-[#1664ff]"
            aria-label="找相似"
          >
            找相似
          </a>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8FAFC] pb-16">
      <Container className="relative">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-12 sm:py-16"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-4 py-2 rounded-lg">
              <BoltIcon className="h-4 w-4 text-[#0055ff]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#64748B]">限时优惠</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              高性价比云桌面电脑
            </h1>
            <p className="text-lg leading-relaxed text-[#64748B] sm:text-xl">
              低至{' '}
              <span className="inline-flex items-center bg-[#0055ff] px-2 py-1 text-sm font-bold uppercase tracking-widest text-white rounded-lg">
                0.8折
              </span>{' '}
              助您快速实现大模型训练与推理，轻松搭建 AI 应用
            </p>
          </div>
        </motion.header>

        {/* 挂机宝服务器配置（4例）- Bento Grid 布局 */}
        <section className="mt-2" aria-labelledby="server-plans-title">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="server-plans-title"
                className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                挂机宝服务器
              </h2>
              <p className="mt-1 text-base leading-relaxed text-[#64748B] sm:text-lg">
                轻量业务部署与稳定在线，覆盖主流系统与常用规格
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serverPlans.map((plan, index) => (
              <ServerCard key={plan.name + index} plan={plan} />
            ))}
          </div>
        </section>

        {/* 企业精选 · 限时特惠 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20"
          aria-labelledby="flash-sale-title"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-4 py-2 rounded-lg">
                <SparklesIcon className="h-4 w-4 text-[#0055ff]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#64748B]">每日两场（10:00、15:00）</span>
              </div>
              <h2
                id="flash-sale-title"
                className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl"
              >
                企业精选 · 限时特惠
              </h2>
              <p className="mt-2 text-base text-[#64748B] md:text-lg">
                限时优惠，数量有限，先到先得
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lightServerPlans.map((server, index) => (
              <LightServerCard key={server.name + index} server={server} />
            ))}
          </div>
        </motion.section>
      </Container>
    </div>
  )
}

export default Price
