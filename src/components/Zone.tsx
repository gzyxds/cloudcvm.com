'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { MapPin, Radio, Cable } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─────────────────────── 类型定义 ─────────────────────── */

interface ZoneItem {
  id: string
  name: string
  zones?: string
  description?: string
}

interface TabConfigItem {
  id: string
  label: string
  suffix: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

/* ─────────────────────── 静态数据 ─────────────────────── */

const tabConfig: TabConfigItem[] = [
  { id: 'regions', label: '14', suffix: '个国内区域', icon: MapPin },
  { id: 'centers', label: '30', suffix: '个数据中心', icon: Radio },
  { id: 'lines', label: '31', suffix: '条加速专线', icon: Cable },
]

const regionData: ZoneItem[] = [
  { id: 'bj1', name: '华北一', zones: '可用区 B / C / D / E', description: '华北周边及全国优质网络服务，中美、京沪、京广三条专线' },
  { id: 'bj2', name: '华北二', zones: '可用区 A', description: '为华北地区提供高可用云计算服务' },
  { id: 'sh2', name: '上海二', zones: '可用区 A / B / C', description: '辐射长三角地区，提供金融级网络支持' },
  { id: 'gz', name: '广州', zones: '可用区 B', description: '覆盖珠三角地区，支撑高并发业务场景' },
  { id: 'fj', name: '福建', zones: 'GPU 可用区 A', description: 'GPU 机型重要可用区，服务华南及全国' },
  { id: 'hk', name: '香港', zones: '可用区 A / B', description: '连接内地与海外的重要枢纽' },
  { id: 'tpe', name: '台北', zones: '可用区 A', description: '连接两岸三地，提供优质网络服务' },
]

const centerData: ZoneItem[] = [
  { id: 'c1', name: '北京 BGP', zones: 'T3+ 标准', description: '核心骨干网节点，覆盖华北全境' },
  { id: 'c2', name: '上海 BGP', zones: 'T3+ 标准', description: '核心骨干网节点，辐射长三角' },
  { id: 'c3', name: '广州 BGP', zones: 'T3+ 标准', description: '核心骨干网节点，覆盖珠三角' },
  { id: 'c4', name: '香港国际', zones: 'T4 标准', description: '亚太核心节点，国际流量枢纽' },
  { id: 'c5', name: '洛杉矶', zones: 'T3+ 标准', description: '北美核心节点，中美海缆接入' },
  { id: 'c6', name: '法兰克福', zones: 'T3+ 标准', description: '欧洲核心节点，中欧陆缆接入' },
]

const lineData: ZoneItem[] = [
  { id: 'l1', name: '京沪专线', description: '低延迟 < 25ms，双路由冗余' },
  { id: 'l2', name: '京广专线', description: '低延迟 < 35ms，骨干环网' },
  { id: 'l3', name: '沪广专线', description: '低延迟 < 20ms，金融级链路' },
  { id: 'l4', name: '中港专线', description: '跨境低延迟 < 40ms，多路径备份' },
  { id: 'l5', name: '中美专线', description: '海缆直连，带宽 10Gbps+' },
  { id: 'l6', name: '中欧专线', description: '陆缆直连，覆盖欧洲主要城市' },
]

const dataMap: Record<string, ZoneItem[]> = {
  regions: regionData,
  centers: centerData,
  lines: lineData,
}

/** 全球节点数据 — 同时用于地图可视化标记和信息卡展示 */
interface MapNode {
  name: string
  top: string
  left: string
  /** 所属分类，用于点击标记时高亮对应信息卡 */
  region?: string
  zones?: string
  description?: string
}

const mapNodes: MapNode[] = [
  { name: '北京', top: '24%', left: '66%', region: '华北', zones: '多可用区', description: '核心骨干网节点' },
  { name: '上海', top: '40%', left: '71%', region: '华东', zones: '多可用区', description: '金融级网络支持' },
  { name: '广州', top: '52%', left: '64%', region: '华南', zones: '可用区 B', description: '高并发业务支撑' },
  { name: '香港', top: '56%', left: '62%', region: '亚太', zones: '可用区 A / B', description: '国际流量枢纽' },
  { name: '台北', top: '50%', left: '72%', region: '亚太', zones: '可用区 A', description: '两岸三地节点' },
  { name: '洛杉矶', top: '30%', left: '10%', region: '北美', zones: 'T3+ 标准', description: '中美海缆接入' },
  { name: '法兰克福', top: '22%', left: '42%', region: '欧洲', zones: 'T3+ 标准', description: '中欧陆缆接入' },
  { name: '东京', top: '30%', left: '78%', region: '亚太', zones: 'T3+ 标准', description: '东亚核心节点' },
  { name: '新加坡', top: '53%', left: '58%', region: '东南亚', zones: 'T3+ 标准', description: '东南亚枢纽' },
]

/* ─────────────────────── 动画变体 ─────────────────────── */

const pulseVariants: Variants = {
  hidden: { scale: 1, opacity: 0.2 },
  visible: {
    scale: [1, 3.6],
    opacity: [0.25, 0],
    transition: { repeat: Infinity, duration: 2.5, ease: 'easeOut' },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

/* ─────────────────────── 地图背景 ─────────────────────── */

function WorldMap() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="relative h-full w-full max-w-[1400px]">
        <Image
          src="/images/screenshots/zone-earth.webp"
          alt=""
          role="presentation"
          fill
          loading="lazy"
          className="object-contain opacity-[0.18] lg:opacity-[0.28]"
        />

        {/* 全球节点标记 */}
        {mapNodes.map((node) => (
          <div
            key={node.name}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: node.top, left: node.left }}
          >
            {/* 脉冲波纹 */}
            <motion.span
              variants={pulseVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/25"
            />
            {/* 实体圆点 */}
            <span className="relative block h-3 w-3 rounded-full bg-primary-500 ring-2 ring-white/90" />
            {/* 城市名称 */}
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold text-slate-500 lg:text-xs">
              {node.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────── 信息卡 ─────────────────────── */

function InfoCard({ item, index }: { item: ZoneItem; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <div
        className={cn(
          'group rounded-xl border border-white/40 bg-white/30 p-4',
          'backdrop-blur shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
          'transition-all duration-200',
          'hover:border-white/60 hover:bg-white/45 hover:shadow-md hover:shadow-primary-500/5',
          'dark:bg-white/20 dark:hover:bg-white/30'
        )}
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
            <MapPin className="h-4 w-4 text-primary-500" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <h3 className="text-[15px] font-semibold text-slate-900">{item.name}</h3>
            {item.zones && (
              <p className="text-[13px] font-medium text-slate-500">{item.zones}</p>
            )}
            {item.description && (
              <p className="text-[13px] leading-relaxed text-slate-400">{item.description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────── Tab 按钮 ─────────────────────── */

function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: TabConfigItem
  isActive: boolean
  onClick: () => void
}) {
  const Icon = tab.icon
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium',
        'transition-all duration-200 sm:gap-2.5 sm:px-7 sm:py-3 sm:text-base',
        isActive
          ? 'bg-primary-500 text-white shadow-sm'
          : 'text-slate-500 hover:bg-white hover:text-slate-900'
      )}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
      <span className="font-bold tabular-nums">{tab.label}</span>
      <span className="hidden sm:inline">{tab.suffix}</span>
      <span className="sm:hidden">
        {tab.suffix
          .replace('个国内区域', ' 区域')
          .replace('个数据中心', ' 中心')
          .replace('条加速专线', ' 专线')}
      </span>
    </button>
  )
}

/* ─────────────────────── 主组件 ─────────────────────── */

export default function Zone() {
  const [activeTab, setActiveTab] = useState('regions')
  const currentData = dataMap[activeTab] ?? []

  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-28">
      {/* 全幅地图背景 */}
      <WorldMap />

      <Container className="relative z-10">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            全球云计算基础设施
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            安全合规，稳定可靠，服务瞬达全球
          </p>
        </motion.div>

        {/* Tab 切换 */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <div
            className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm"
            role="tablist"
          >
            {tabConfig.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        {/* 信息卡片区 — 紧凑居中网格，不再分割左右 */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentData.length > 0 ? (
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {currentData.map((item, i) => (
                    <InfoCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                  <MapPin className="mb-3 h-10 w-10 opacity-30" strokeWidth={1} />
                  <p className="text-sm">暂无数据</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 底部：全球节点总览条 */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16 lg:mt-20">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            全球节点分布
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-white/40 bg-white/30 px-6 py-4 backdrop-blur shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {mapNodes.map((node) => (
              <div key={node.name} className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500/60" />
                <span className="text-[13px] font-medium text-slate-700">{node.name}</span>
                <span className="text-[11px] text-slate-400">{node.region}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
