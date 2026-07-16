'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  MapPinIcon,
  SignalIcon,
  GlobeAltIcon,
  ChevronRightIcon,
  ArrowRightIcon,
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
  value: string
  suffix: string
  icon: React.ComponentType<{ className?: string }>
}

/* ─────────────────────── 静态数据 ─────────────────────── */

const tabConfig: TabConfigItem[] = [
  { id: 'regions', label: '国内区域', value: '22', suffix: '个区域覆盖', icon: MapPinIcon },
  { id: 'centers', label: '数据中心', value: '45', suffix: '个数据中心', icon: SignalIcon },
  { id: 'lines', label: '加速专线', value: '58', suffix: '条专线网络', icon: GlobeAltIcon },
]

const regionData: ZoneItem[] = [
  { id: 'bj1', name: '华北一（北京）', zones: '可用区 B / C / D / E', description: '核心骨干网节点，覆盖华北全境，中美、京沪、京广三条专线接入' },
  { id: 'bj2', name: '华北二（北京）', zones: '可用区 A', description: '为华北地区提供高可用云计算服务，金融级安全合规' },
  { id: 'bj3', name: '华北三（张家口）', zones: '可用区 A / B', description: '承接北京外溢算力需求，绿色能源数据中心集群' },
  { id: 'sh1', name: '华东一（上海）', zones: '可用区 A / B / C / D', description: '辐射长三角经济区，提供金融级低延迟网络支持' },
  { id: 'sh2', name: '华东二（杭州）', zones: '可用区 A / B', description: '服务电商与互联网产业，弹性算力核心供给区' },
  { id: 'nj', name: '华东三（南京）', zones: '可用区 A', description: '覆盖苏皖地区，政企数字化转型优选节点' },
  { id: 'gz', name: '华南一（广州）', zones: '可用区 B / C', description: '覆盖珠三角，支撑高并发电商与游戏业务场景' },
  { id: 'sz', name: '华南二（深圳）', zones: '可用区 A / B', description: '粤港澳大湾区核心节点，金融与科技创新服务' },
  { id: 'cd', name: '西南一（成都）', zones: '可用区 A / B', description: '辐射川渝云贵，西部算力枢纽节点' },
  { id: 'cq', name: '西南二（重庆）', zones: '可用区 A', description: '长江上游经济中心，智能制造与车联网服务' },
  { id: 'wh', name: '华中（武汉）', zones: '可用区 A / B', description: '中部地区核心节点，覆盖鄂湘豫赣四省' },
  { id: 'sy', name: '东北（沈阳）', zones: '可用区 A', description: '东北地区唯一可用区，服务工业互联网与智慧城市' },
  { id: 'fj', name: '福建（福州）', zones: 'GPU 可用区 A / B', description: 'GPU 机型核心可用区，服务全国 AI 训练与推理' },
  { id: 'hk', name: '香港', zones: '可用区 A / B', description: '亚太核心枢纽，连接内地与海外，国际流量关键节点' },
  { id: 'tpe', name: '台北', zones: '可用区 A', description: '连接两岸三地，提供优质低延迟跨境网络服务' },
]

const centerData: ZoneItem[] = [
  { id: 'c1', name: '北京 BGP', zones: 'T3+ 标准', description: '核心骨干网节点，覆盖华北全境' },
  { id: 'c2', name: '上海 BGP', zones: 'T3+ 标准', description: '金融级核心节点，辐射长三角经济区' },
  { id: 'c3', name: '广州 BGP', zones: 'T3+ 标准', description: '华南核心节点，覆盖珠三角城市群' },
  { id: 'c4', name: '深圳 BGP', zones: 'T3+ 标准', description: '粤港澳大湾区核心节点，低延迟互联港澳' },
  { id: 'c5', name: '成都 BGP', zones: 'T3 标准', description: '西部算力枢纽，覆盖川渝云贵地区' },
  { id: 'c6', name: '武汉 BGP', zones: 'T3 标准', description: '中部核心节点，全国骨干环网重要一环' },
  { id: 'c7', name: '香港国际', zones: 'T4 标准', description: '亚太核心节点，国际流量枢纽' },
  { id: 'c8', name: '新加坡', zones: 'T3+ 标准', description: '东南亚核心节点，覆盖东盟十国' },
  { id: 'c9', name: '东京', zones: 'T3+ 标准', description: '东亚核心节点，服务日韩市场' },
  { id: 'c10', name: '洛杉矶', zones: 'T3+ 标准', description: '北美核心节点，中美海缆接入' },
  { id: 'c11', name: '法兰克福', zones: 'T3+ 标准', description: '欧洲核心节点，中欧陆缆接入' },
  { id: 'c12', name: '莫斯科', zones: 'T3 标准', description: '东欧及中亚节点，陆缆直连北京' },
  { id: 'c13', name: '孟买', zones: 'T3 标准', description: '南亚核心节点，服务印度及周边市场' },
  { id: 'c14', name: '雅加达', zones: 'T3 标准', description: '东南亚第二大节点，覆盖印尼及大洋洲' },
]

const lineData: ZoneItem[] = [
  { id: 'l1', name: '京沪专线', zones: '< 8ms', description: '双路由冗余设计，骨干环网核心链路，带宽 100Gbps' },
  { id: 'l2', name: '京广专线', zones: '< 15ms', description: '国家骨干环网，覆盖南北主要城市，多路径保护' },
  { id: 'l3', name: '沪广专线', zones: '< 12ms', description: '长三角至珠三角金融级链路，支撑高频交易场景' },
  { id: 'l4', name: '京蓉专线', zones: '< 18ms', description: '连接华北与西南算力枢纽，东数西算核心通道' },
  { id: 'l5', name: '沪汉专线', zones: '< 10ms', description: '长江经济带骨干链路，覆盖中下游核心城市' },
  { id: 'l6', name: '深港专线', zones: '< 3ms', description: '粤港澳大湾区超低延迟专线，金融数据实时同步' },
  { id: 'l7', name: '中港专线', zones: '< 30ms', description: '跨境多路径备份，保障国际业务畅通无阻' },
  { id: 'l8', name: '中美专线', zones: '< 120ms', description: '跨太平洋海缆直连，带宽 10Gbps+，多路由冗余' },
  { id: 'l9', name: '中欧专线', zones: '< 140ms', description: '陆缆直连法兰克福，覆盖欧洲主要数据中心' },
  { id: 'l10', name: '中新专线', zones: '< 60ms', description: '连接新加坡枢纽，覆盖东南亚及大洋洲区域' },
  { id: 'l11', name: '中日专线', zones: '< 40ms', description: '东亚低延迟专线，服务日韩企业跨境业务' },
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
  { name: '广州', top: '52%', left: '64%', region: '华南', zones: '多可用区', description: '高并发业务支撑' },
  { name: '深圳', top: '54%', left: '63%', region: '华南', zones: '可用区 A / B', description: '粤港澳大湾区节点' },
  { name: '杭州', top: '38%', left: '72%', region: '华东', zones: '可用区 A / B', description: '电商与互联网核心区' },
  { name: '成都', top: '43%', left: '55%', region: '西南', zones: '可用区 A / B', description: '西部算力枢纽' },
  { name: '重庆', top: '46%', left: '57%', region: '西南', zones: '可用区 A', description: '长江上游经济中心' },
  { name: '武汉', top: '42%', left: '63%', region: '华中', zones: '可用区 A / B', description: '中部核心节点' },
  { name: '沈阳', top: '18%', left: '71%', region: '东北', zones: '可用区 A', description: '东北工业互联网节点' },
  { name: '香港', top: '56%', left: '62%', region: '亚太', zones: '可用区 A / B', description: '国际流量枢纽' },
  { name: '台北', top: '50%', left: '72%', region: '亚太', zones: '可用区 A', description: '两岸三地节点' },
  { name: '东京', top: '30%', left: '78%', region: '亚太', zones: 'T3+ 标准', description: '东亚核心节点' },
  { name: '新加坡', top: '56%', left: '58%', region: '东南亚', zones: 'T3+ 标准', description: '东南亚枢纽' },
  { name: '洛杉矶', top: '30%', left: '10%', region: '北美', zones: 'T3+ 标准', description: '中美海缆接入' },
  { name: '法兰克福', top: '22%', left: '42%', region: '欧洲', zones: 'T3+ 标准', description: '中欧陆缆接入' },
  { name: '莫斯科', top: '14%', left: '46%', region: '欧洲', zones: 'T3 标准', description: '东欧及中亚节点' },
  { name: '孟买', top: '48%', left: '50%', region: '南亚', zones: 'T3 标准', description: '南亚核心节点' },
  { name: '雅加达', top: '60%', left: '60%', region: '东南亚', zones: 'T3 标准', description: '印尼及大洋洲节点' },
]

/* ─────────────────────── 地图背景 ─────────────────────── */

/**
 * 世界地图背景组件
 * 使用半透明地图图片作为背景，并在关键节点位置显示脉冲标记
 * @returns 地图背景 JSX
 */
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
          className="object-contain opacity-[0.08] dark:opacity-[0.12]"
        />
        {/* 节点标记 */}
        {mapNodes.map((node) => (
          <div
            key={node.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: node.top, left: node.left }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-500 ring-2 ring-white dark:ring-gray-900" />
            </span>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium text-gray-400 dark:text-gray-500 hidden sm:inline">
              {node.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────── 信息卡片 ─────────────────────── */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
}

/**
 * 信息卡片组件
 * 展示单个区域/数据中心/专线的详细信息
 * @param item - 区域数据
 * @param index - 卡片索引（用于入场动画延迟）
 * @param icon - 图标组件
 */
function InfoCard({
  item,
  index,
  icon: Icon,
}: {
  item: ZoneItem
  index: number
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: index * 0.06 }}
    >
      <div className="group rounded bg-white p-4 sm:p-5 outline-1 -outline-offset-1 outline-slate-200/60 transition-colors duration-150 hover:bg-gradient-to-b hover:from-brand-50/40 hover:to-white hover:outline-slate-300/60">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-500 transition-colors duration-150 group-hover:bg-slate-200 group-hover:text-slate-700">
            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-medium text-slate-800 transition-colors group-hover:text-brand-600">
                {item.name}
              </h3>
              {item.zones && (
                <span className="rounded-sm bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
                  {item.zones}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-xs leading-relaxed text-slate-400">
                {item.description}
              </p>
            )}
          </div>
          <ChevronRightIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-400" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────── 主组件 ─────────────────────── */

/**
 * Zone 组件 - 全球云计算基础设施展示区块
 *
 * 展示优刻云的全球数据中心覆盖、区域分布和网络加速能力。
 * 采用数据驱动设计，通过统计卡片 + 分类标签 + 详情卡片的三层结构，
 * 逐层深入地向用户呈现基础设施规模，增强信任感。
 *
 * @returns Zone 区块 JSX
 */
export default function Zone() {
  const [activeTab, setActiveTab] = useState('regions')
  const currentData = dataMap[activeTab] ?? []
  const activeTabConfig = tabConfig.find((t) => t.id === activeTab)
  const ActiveIcon = activeTabConfig?.icon ?? MapPinIcon

  /** 当前激活 Tab 对应的高亮节点集合 */
  const currentTabNodes = useMemo(() => {
    if (activeTab === 'regions') {
      return mapNodes.filter((n) =>
        ['北京', '上海', '广州', '深圳', '杭州', '成都', '重庆', '武汉', '沈阳', '香港', '台北', '新加坡', '东京'].includes(n.name),
      )
    }
    if (activeTab === 'centers') {
      return mapNodes.filter((n) =>
        ['北京', '上海', '广州', '深圳', '成都', '武汉', '香港', '新加坡', '东京', '洛杉矶', '法兰克福', '莫斯科', '孟买', '雅加达'].includes(n.name),
      )
    }
    return mapNodes
  }, [activeTab])

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <WorldMap />

      <Container className="relative z-10">
        {/* ─────── 标题区 ─────── */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            全球云计算基础设施
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500 sm:text-xl">
            覆盖全球多个地域与可用区，为企业提供安全合规、稳定可靠的云计算基础设施服务
          </p>
        </div>

        {/* ─────── 视图切换标签栏 ─────── */}
        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex items-center rounded bg-white p-1 outline-1 -outline-offset-1 outline-slate-200/60"
            role="tablist"
          >
            {tabConfig.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'flex items-center gap-1.5 sm:gap-2 rounded-sm px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200',
                    activeTab === tab.id
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-700',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="ml-1 text-xs text-slate-400 tabular-nums">{tab.value}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ─────── 信息卡片网格 ─────── */}
        <div className="mt-8 sm:mt-10">
          {tabConfig.map((tab) => (
            <div
              key={tab.id}
              className={clsx(activeTab === tab.id ? 'block' : 'hidden')}
            >
              <AnimatePresence mode="wait">
                {activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {currentData.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {currentData.map((item, i) => (
                          <InfoCard
                            key={item.id}
                            item={item}
                            index={i}
                            icon={ActiveIcon}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-16 text-gray-400 dark:text-gray-500">
                        <MapPinIcon className="mb-3 h-10 w-10 opacity-20" />
                        <p className="text-sm">暂无数据</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ─────── 底部全球节点总览 ─────── */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-5 flex items-center gap-2">
            <span className="block h-3.5 w-[2px] rounded-full bg-slate-300" />
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              全球节点分布
            </p>
          </div>
          <div className="overflow-hidden rounded bg-white p-3 sm:p-2 outline-1 -outline-offset-1 outline-slate-200/60">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-1">
              {mapNodes.map((node) => {
                const isActive = currentTabNodes.some((n) => n.name === node.name)
                return (
                  <div
                    key={node.name}
                    className={clsx(
                      'flex items-center gap-1.5 sm:gap-2 rounded-sm px-2.5 py-2 sm:py-1.5 transition-colors duration-200',
                      isActive
                        ? 'bg-slate-100'
                        : 'opacity-40 hover:opacity-70',
                    )}
                  >
                    <span
                      className={clsx(
                        'h-1.5 w-1.5 rounded-full shrink-0',
                        isActive ? 'bg-brand-500' : 'bg-slate-300',
                      )}
                    />
                    <span
                      className={clsx(
                        'text-xs sm:text-xs font-medium whitespace-nowrap',
                        isActive ? 'text-slate-800' : 'text-slate-400',
                      )}
                    >
                      {node.name}
                    </span>
                    <span className="text-[10px] sm:text-[10px] text-slate-400 whitespace-nowrap hidden sm:inline">{node.region}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="mt-10 text-center">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600"
            >
              了解更多关于我们的基础设施
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
