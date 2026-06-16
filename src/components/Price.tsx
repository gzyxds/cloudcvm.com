'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'
import { ReactNode, memo } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

/** 轻量应用服务器购买链接（模块级常量，避免重复定义） */
const LIGHT_CART_URL = 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=110'

/** 弹性云服务器购买链接（模块级常量，避免重复定义） */
const ECS_CART_URL = 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=111'

/**
 * 服务器计划接口 - 定义轻量应用服务器配置数据结构
 * @interface ServerPlan
 */
interface ServerPlan {
  id: string
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
  id: string
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
 * 卡片底部价格区域属性接口
 * @interface CardFooterProps
 */
interface CardFooterProps {
  price: string
  unit: string
  originalPrice: string
  priceColor?: string
  infoBox: ReactNode
  buttons: ReactNode
}

/**
 * 卡片底部价格区域 — 抽取 ServerCard / LightServerCard 的重复结构
 */
const CardFooter = memo(function CardFooter({
  price,
  unit,
  originalPrice,
  priceColor = 'text-[#1d2129]',
  infoBox,
  buttons,
}: CardFooterProps) {
  return (
    <div className="mt-auto px-6 py-5">
      <div className="mb-4 rounded-md bg-[#f7f8fa] px-3 py-2 text-xs text-[#4e5969]">
        {infoBox}
      </div>
      <div className="mb-2 flex items-baseline gap-1">
        <span className={clsx('text-3xl font-bold', priceColor)}>¥{price}</span>
        <span className="text-sm text-[#86909c]">{unit}</span>
      </div>
      <div className="mb-5 text-xs text-[#86909c] line-through">
        日常价：{originalPrice} 元
      </div>
      <div className="flex gap-3">
        {buttons}
      </div>
    </div>
  )
})

/**
 * 基础卡片组件 - Bento Grid 风格的卡片布局
 *
 * 设计规范参考：
 * - 边框：默认 #E2E8F0
 * - 阴影：Hover shadow-lg
 * - 圆角：rounded-lg (8px)
 * - 字体颜色：#1d2129 (Primary), #4e5969 (Secondary)
 */
const Card = memo(function Card({ title, children, className, featured = false, badge, topBgColor }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-lg border border-[#E2E8F0] bg-white transition-all duration-300',
        featured ? 'shadow-md' : 'hover:shadow-xl hover:-translate-y-1',
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
})

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

// 挂机宝服务器配置数据（模块级常量，避免每次渲染重建）
const serverPlans: ServerPlan[] = [
  {
    id: 'server-a',
    name: '香港 · 轻量云',
    description: 'CN2优化 · 无需备案 · 开箱即用',
    os: 'Linux系统可选',
    cpu: '2核',
    memory: '2G',
    storage: '30G高速存储',
    bandwidth: '3~5Mbps',
    price: '25.87',
    unit: '元/月',
    originalPrice: '45.00',
    featured: false,
  },
  {
    id: 'server-b',
    name: '日本 · 轻量云',
    description: '回国优化 · 无需备案 · 开箱即用',
    os: 'Linux系统可选',
    cpu: '2核',
    memory: '2G',
    storage: '30G高速存储',
    bandwidth: '5~8Mbps',
    price: '25.87',
    unit: '元/月',
    originalPrice: '45.00',
    featured: true,
  },
  {
    id: 'server-c',
    name: '韩国 · 轻量云',
    description: '回国优化 · 无需备案 · 开箱即用',
    os: 'Linux系统可选',
    cpu: '2核',
    memory: '2G',
    storage: '30G高速存储',
    bandwidth: '3~5Mbps',
    price: '25.87',
    unit: '元/月',
    originalPrice: '45.00',
    featured: false,
  },
  {
    id: 'server-d',
    name: '美国 · 轻量云',
    description: '精品线路 · 无需备案 · 开箱即用',
    os: 'Linux系统可选',
    cpu: '2核',
    memory: '2G',
    storage: '30G高速存储',
    bandwidth: '10~20Mbps',
    price: '25.87',
    unit: '元/月',
    originalPrice: '45.00',
    featured: false,
  },
]

// 海外弹性云服务器配置数据（企业精选 · 限时特惠）
const lightServerPlans: LightServerPlan[] = [
  {
    id: 'light-de',
    name: '德国弹性云服务器',
    badge: '爆款',
    config: '2~32核心 Gold',
    specs: '2~128GB内存 · 40~500G高速存储',
    location: '10~300Mbps带宽 · 全系统可选',
    duration: 'CN2优化 · 无需备案',
    discount: '精品线路',
    price: '37.70',
    unit: '元/月',
    originalPrice: '68.00',
    featured: true,
  },
  {
    id: 'light-hk-ddos',
    name: '香港高防弹性云',
    badge: '高防',
    config: '2~16核心 intel',
    specs: '2~32GB内存 · 40~300G高速存储',
    location: '30~100Mbps带宽 · 全系统可选',
    duration: '攻击秒解 · 封UDP · 200G防御',
    discount: '高防首选',
    price: '45.60',
    unit: '元/月',
    originalPrice: '88.00',
    featured: false,
  },
  {
    id: 'light-global-cluster',
    name: '海外站群弹性云',
    badge: '站群专用',
    config: '4~16核心 Gold',
    specs: '4~32GB内存 · 40~500G高速存储',
    location: '10~200Mbps带宽 · 全系统可选',
    duration: '精品线路 · 无需备案',
    discount: '站群优化',
    price: '300.00',
    unit: '元/月',
    originalPrice: '520.00',
    featured: false,
  },
  {
    id: 'light-us-ddos',
    name: '美国高防弹性云',
    badge: '高防',
    config: '2~16核心 V4',
    specs: '2~16GB内存 · 40~300G高速存储',
    location: '30~100Mbps带宽 · 全系统可选',
    duration: 'AS9929 · 无需备案',
    discount: '高防专线',
    price: '46.80',
    unit: '元/月',
    originalPrice: '92.00',
    featured: false,
  },
  {
    id: 'light-hk',
    name: '香港弹性云服务器',
    badge: '热门',
    config: '2~32核心 Gold',
    specs: '2~128GB内存 · 40~500G高速存储',
    location: '10~300Mbps带宽 · 全系统可选',
    duration: 'CN2优化 · 无需备案',
    discount: 'CN2专线',
    price: '37.70',
    unit: '元/月',
    originalPrice: '68.00',
    featured: false,
  },
  {
    id: 'light-jp',
    name: '日本弹性云服务器',
    badge: '入门之选',
    config: '2~16核心 Gold',
    specs: '2~16GB内存 · 40~500G高速存储',
    location: '5~30Mbps带宽 · 全系统可选',
    duration: '回国优化 · 无需备案',
    discount: '回国优化',
    price: '37.70',
    unit: '元/月',
    originalPrice: '68.00',
    featured: false,
  },
  {
    id: 'light-kr',
    name: '韩国弹性云服务器',
    badge: '入门之选',
    config: '2~16核心 V2',
    specs: '2~16GB内存 · 40~300G高速存储',
    location: '5~30Mbps带宽 · 全系统可选',
    duration: '回国优化 · 无需备案',
    discount: '回国优化',
    price: '37.70',
    unit: '元/月',
    originalPrice: '68.00',
    featured: false,
  },
  {
    id: 'light-us',
    name: '美国弹性云服务器',
    badge: '热门',
    config: '2~16核心 V4',
    specs: '2~32GB内存 · 40~500G高速存储',
    location: '30~100Mbps带宽 · 全系统可选',
    duration: '精品线路 · 无需备案',
    discount: '精品线路',
    price: '37.70',
    unit: '元/月',
    originalPrice: '68.00',
    featured: false,
  },
]

/**
 * 服务器卡片组件 — 使用 memo 避免父组件重渲染时重建
 */
const ServerCard = memo(function ServerCard({ plan }: ServerCardProps) {
  return (
    <Card title={plan.name} featured={plan.featured} badge={plan.featured ? '热销推荐' : undefined}>
      <p className="border-b border-[#f2f3f5] px-6 py-4 text-sm leading-relaxed text-[#4e5969]">
        {plan.description}
      </p>
      <SpecRow label="系统" value={plan.os} />
      <SpecRow label="CPU" value={plan.cpu} />
      <SpecRow label="内存" value={plan.memory} />
      <SpecRow label="硬盘" value={plan.storage} />
      <SpecRow label="带宽" value={plan.bandwidth} />
      <CardFooter
        price={plan.price}
        unit={plan.unit}
        originalPrice={plan.originalPrice}
        infoBox={
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="h-4 w-4 text-[#1664ff]" />
            <span>100G 防护 • NAT转发 x3</span>
          </div>
        }
        buttons={
          <>
            <a
              href={LIGHT_CART_URL}
              className="flex-1 rounded-md border border-[#e5e6eb] bg-white py-2 text-center text-sm font-medium text-[#1d2129] transition-all hover:bg-[#f7f8fa] hover:text-[#1664ff]"
              aria-label="加入购物车"
            >
              加购
            </a>
            <a
              href={LIGHT_CART_URL}
              className="flex-1 rounded-md bg-[#1664ff] py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4086ff] hover:shadow-md"
              aria-label="立即购买"
            >
              购买
            </a>
          </>
        }
      />
    </Card>
  )
})

/**
 * 轻量应用服务器卡片组件 — 使用 memo 避免父组件重渲染时重建
 */
const LightServerCard = memo(function LightServerCard({ server }: LightServerCardProps) {
  return (
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
      <CardFooter
        price={server.price}
        unit={server.unit}
        originalPrice={server.originalPrice}
        priceColor="text-[#1664ff]"
        infoBox={
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-[#1664ff]" />
            <span>{server.discount} 限1个人</span>
          </div>
        }
        buttons={
          <>
            <a
              href={ECS_CART_URL}
              className="flex-1 rounded-md bg-[#1664ff] py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4086ff] hover:shadow-md"
              aria-label="立即购买"
            >
              立即抢购
            </a>
            <a
              href={ECS_CART_URL}
              className="flex-1 rounded-md border border-[#e5e6eb] bg-white py-2 text-center text-sm font-medium text-[#1d2129] transition-all hover:bg-[#f7f8fa] hover:text-[#1664ff]"
              aria-label="找相似"
            >
              找相似
            </a>
          </>
        }
      />
    </Card>
  )
})

/**
 * 价格展示组件 - Bento Grid 风格的定价与促销展示
 * @returns 页面主体 JSX
 */
export function Price() {

  return (
    <div
      className="relative min-h-screen overflow-hidden pb-16 bg-[#F8FAFC]"
      style={{ backgroundImage: 'url(/images/background/background-2.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}
    >
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
              高性价比轻量应用服务器
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

        {/* 轻量应用服务器配置（4例）- Bento Grid 布局 */}
        <section className="mt-2" aria-labelledby="server-plans-title">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="server-plans-title"
                className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
              >
                轻量应用服务器
              </h2>
              <p className="mt-1 text-base leading-relaxed text-[#64748B] sm:text-lg">
                轻量业务部署与稳定在线，覆盖主流系统与常用规格
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serverPlans.map((plan) => (
              <ServerCard key={plan.id} plan={plan} />
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
            {lightServerPlans.map((server) => (
              <LightServerCard key={server.id} server={server} />
            ))}
          </div>
        </motion.section>
      </Container>
    </div>
  )
}

export default Price
