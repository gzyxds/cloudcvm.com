'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Radio, Cable } from 'lucide-react'

// ============================================================
// 数据
// ============================================================
interface ZoneItem {
  id: string
  name: string
  zones?: string
  description?: string
}

const tabConfig = [
  { id: 'regions', label: '14', suffix: '个国内区域', icon: MapPin },
  { id: 'centers', label: '30', suffix: '个数据中心', icon: Radio },
  { id: 'lines', label: '31', suffix: '条加速专线', icon: Cable },
] as const

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

const dataMap = { regions: regionData, centers: centerData, lines: lineData }

// ============================================================
// 地图标记点
// ============================================================
const mapDots = [
  { name: '北京', top: '28%', left: '68%' },
  { name: '上海', top: '44%', left: '72%' },
  { name: '广州', top: '54%', left: '66%' },
  { name: '福建', top: '50%', left: '69%' },
  { name: '香港', top: '58%', left: '64%' },
  { name: '台北', top: '52%', left: '73%' },
  { name: 'LA', top: '32%', left: '12%' },
  { name: 'FRA', top: '26%', left: '42%' },
]

// ============================================================
// 地图背景 + 标记点
// ============================================================
function WorldMap() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center" aria-hidden="true">
      <div className="relative h-full w-full max-w-[1600px]">
        <Image
          src="/images/screenshots/zone-earth.webp"
          alt=""
          fill
          className="object-contain opacity-[0.12] lg:opacity-[0.18]"
        />
        {/* 标记点 — 桌面端可见 */}
        {mapDots.map((dot) => (
          <div
            key={dot.name}
            className="absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ top: dot.top, left: dot.left }}
          >
            <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#0055ff]/15" />
            <span className="relative block h-2 w-2 rounded-full bg-[#0055ff]/60 ring-1 ring-white/80" />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium text-[#64748B]">
              {dot.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// 信息卡片
// ============================================================
function InfoCard({ item }: { item: ZoneItem }) {
  return (
    <div className="group rounded-xl border border-[#E2E8F0] bg-white/95 p-4 backdrop-blur-sm transition-all duration-200 hover:border-[#0055ff]/25 hover:shadow-[0_2px_16px_rgba(0,85,255,0.06)] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff]">
          <MapPin className="h-3.5 w-3.5 text-[#0055ff]" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-[#0F172A]">{item.name}</h3>
          {item.zones && (
            <p className="mt-0.5 text-xs text-[#64748B]">{item.zones}</p>
          )}
          {item.description && (
            <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 主组件
// ============================================================
export default function Zone() {
  const [activeTab, setActiveTab] = useState('regions')
  const currentData = dataMap[activeTab as keyof typeof dataMap]

  // 分为左右两列
  const mid = Math.ceil(currentData.length / 2)
  const leftCards = currentData.slice(0, mid)
  const rightCards = currentData.slice(mid)

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 lg:py-28">
      {/* 全幅地图背景 */}
      <WorldMap />

      <Container className="relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
            全球云计算基础设施
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#64748B] sm:text-base">
            安全合规，稳定可靠，服务瞬达全球
          </p>
        </motion.div>

        {/* Tab 切换 */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex rounded-full border border-[#E2E8F0] bg-white p-1 shadow-sm" role="tablist">
            {tabConfig.map((tab) => {
              const isActive = activeTab === tab.id
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:gap-2 sm:px-6 sm:py-2.5 sm:text-base
                    ${isActive
                      ? 'bg-[#0055ff] text-white shadow-sm'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white'
                    }`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
                  <span className="font-bold tabular-nums">{tab.label}</span>
                  <span className="hidden sm:inline">{tab.suffix}</span>
                  <span className="sm:hidden">{tab.suffix.replace('个国内区域', ' 区域').replace('个数据中心', ' 中心').replace('条加速专线', ' 专线')}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 内容区 */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 桌面端：左右两列浮动卡片，中间留空露出地图 */}
              <div className="hidden lg:flex lg:justify-between lg:gap-6">
                {/* 左列 */}
                <div className="flex w-[380px] shrink-0 flex-col gap-4">
                  {leftCards.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <InfoCard item={item} />
                    </motion.div>
                  ))}
                </div>

                {/* 右列 */}
                <div className="flex w-[380px] shrink-0 flex-col gap-4">
                  {rightCards.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <InfoCard item={item} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 移动端：单列网格 */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                {currentData.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <InfoCard item={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
