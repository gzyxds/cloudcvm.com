'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  MapPinIcon,
  SignalIcon,
  GlobeAltIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

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
  icon: React.ComponentType<{ className?: string }>
}

/* ─────────────────────── 静态数据 ─────────────────────── */

const tabConfig: TabConfigItem[] = [
  { id: 'regions', label: '14', suffix: '个国内区域', icon: MapPinIcon },
  { id: 'centers', label: '30', suffix: '个数据中心', icon: SignalIcon },
  { id: 'lines', label: '31', suffix: '条加速专线', icon: GlobeAltIcon },
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

interface MapNode {
  name: string
  top: string
  left: string
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

/* ─────────────────────── 地图背景 ─────────────────────── */

function WorldMap() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="relative h-full w-full max-w-[1400px]">
        <Image
          src="/images/screenshots/zone-earth.webp"
          alt=""
          role="presentation"
          fill
          loading="lazy"
          className="object-contain opacity-[0.06] dark:opacity-[0.10]"
        />
        {/* 节点标记 */}
        {mapNodes.map((node) => (
          <div
            key={node.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: node.top, left: node.left }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-30" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 ring-2 ring-white dark:ring-gray-900" />
            </span>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium text-gray-500 dark:text-gray-400">
              {node.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────── 信息卡 ─────────────────────── */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
}

function InfoCard({ item, index, icon: Icon }: { item: ZoneItem; index: number; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <div className="group bg-white/30 dark:bg-gray-800/25 backdrop-blur-[2px] border border-white/40 dark:border-gray-700/30 rounded-md p-6 hover:bg-white/50 dark:hover:bg-gray-800/45 hover:border-blue-200/60 dark:hover:border-blue-700/20 transition-all">
        <div className="flex items-start gap-4">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-500/10 dark:bg-blue-400/10">
            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.name}</h3>
              {item.zones && (
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100/70 dark:bg-gray-700/50 px-2 py-0.5 rounded">
                  {item.zones}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
            )}
          </div>
          <ChevronRightIcon className="h-5 w-5 shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors self-center" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────── 主组件 ─────────────────────── */

export default function Zone() {
  const [activeTab, setActiveTab] = useState('regions')
  const currentData = dataMap[activeTab] ?? []
  const activeTabConfig = tabConfig.find((t) => t.id === activeTab)
  const ActiveIcon = activeTabConfig?.icon ?? MapPinIcon

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 lg:py-24">
      <WorldMap />

      <Container className="relative z-10">
        {/* 标题区 */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            全球云计算基础设施
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            安全合规，稳定可靠，服务瞬达全球
          </p>
        </div>

        {/* Tab 切换栏 */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-0.5" role="tablist">
            {tabConfig.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'flex items-center gap-2.5 px-6 py-2.5 text-base font-medium rounded transition-colors',
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span className="tabular-nums font-bold">{tab.label}</span>
                <span className="hidden sm:inline text-sm opacity-70">{tab.suffix}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 信息卡片网格 */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentData.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {currentData.map((item, i) => (
                    <InfoCard key={item.id} item={item} index={i} icon={ActiveIcon} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500">
                  <MapPinIcon className="mb-3 h-10 w-10 opacity-30" />
                  <p className="text-sm">暂无数据</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 底部全球节点总览 */}
        <div className="mt-14 sm:mt-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-4 w-0.5 bg-blue-600 rounded-full" />
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              全球节点分布
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-6 py-4">
            {mapNodes.map((node) => (
              <div key={node.name} className="flex items-center gap-2 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-blue-500/60" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{node.name}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500">{node.region}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
