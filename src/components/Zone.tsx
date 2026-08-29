'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { Container } from './Container'

/* ─────────────────────── 类型定义 ─────────────────────── */

interface RegionLabel {
  /** 地区（大区）名称 */
  name: string
  /** 距地图顶部的百分比 */
  top: string
  /** 距地图左侧的百分比 */
  left: string
  /** 移动端是否显示标签（非 featured 仅显示脉冲点、标签折叠进底部图例，避免小屏重叠） */
  featured?: boolean
}

interface StatItem {
  /** 大数字指标值（如 22 / 99.99% / 200+） */
  value: string
  /** 指标说明文案 */
  label: string
}

/* ─────────────────────── 静态数据 ─────────────────────── */

/**
 * 核心基础设施指标（大数字矩阵）
 * 注：以下为品牌示意值，上线前请替换为优刻云计算真实数据
 */
const STATS: StatItem[] = [
  { value: '22', label: '国内区域' },
  { value: '45', label: '数据中心' },
  { value: '58', label: '加速专线' },
  { value: '30+', label: '全球可用区' },
  { value: '99.99%', label: '服务可用性' },
  { value: '200+', label: '边缘覆盖城市' },
]

/**
 * 地区（大区）标注点
 * 标签在上、蓝色脉冲点紧贴标签下方；top/left 为标注点位置。
 */
const regionLabels: RegionLabel[] = [
  { name: '华北', top: '28%', left: '72%', featured: true },
  { name: '东北', top: '14%', left: '90%' },
  { name: '华东', top: '42%', left: '90%', featured: true },
  { name: '欧洲', top: '24%', left: '48%', featured: true },
  { name: '华中', top: '52%', left: '78%' },
  { name: '北美', top: '34%', left: '12%', featured: true },
  { name: '西南', top: '60%', left: '60%', featured: true },
  { name: '亚太', top: '90%', left: '92%', featured: true },
  { name: '华南', top: '68%', left: '78%', featured: true },
  { name: '东南亚', top: '78%', left: '66%' },
  { name: '南亚', top: '44%', left: '46%' },
]

/* ─────────────────────── 点阵世界地图 ─────────────────────── */

/**
 * 点阵世界地图背景组件
 * 由「淡地球轮廓 + 圆点矩阵 + 蓝色脉冲节点 + 白色圆角标签」构成，
 * 弱化政治边界、强调全球网络概念，符合企业级云计算官网的极简科技风。
 * @returns 点阵地图 JSX
 */
function DotMatrixMap() {
  return (
    <div className="relative aspect-[12/5] w-full">
      {/* 点阵世界地图：圆点矩阵背景 */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(100,116,139,0.16) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      {/* 地区节点：白色地区标签在上，蓝色脉冲点紧贴标签下方 */}
      {regionLabels.map((region) => {
        return (
          <div
            key={region.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: region.top, left: region.left }}
          >
            <div className="flex flex-col items-center">
              <span
                className={clsx(
                  'z-10 whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 sm:px-3 sm:py-1 sm:text-xs',
                  region.featured ? 'inline-flex' : 'hidden sm:inline-flex',
                )}
              >
                {region.name}
              </span>
              <span className="relative z-0 mt-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-20" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500 ring-2 ring-white dark:ring-slate-900 sm:h-3 sm:w-3" />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────── 大数字指标卡 ─────────────────────── */

/**
 * 大数字指标卡组件
 * 超大字号 + 粗体，第一眼传递规模感与实力，建立企业级技术可信度。
 * @param stat - 指标数据
 * @param index - 卡片索引（用于入场动画错峰）
 */
function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <motion.div
      className="min-w-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {stat.value}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
        {stat.label}
      </div>
    </motion.div>
  )
}

/* ─────────────────────── 主组件 ─────────────────────── */

/**
 * Zone 组件 - 全球云计算基础设施展示区块（Hero Section）
 *
 * 采用腾讯云等头部云厂商主流的「企业级数据可视化首页」范式：
 * 极简科技风 + 大留白，F 型视觉动线 —— 左上标题、右上 CTA、
 * 左中 2×3 大数字指标矩阵、右侧点阵世界地图占据视觉重心。
 * 以规模数字与地图可视化建立「全球覆盖能力」与「技术可信度」。
 *
 * @returns Zone 区块 JSX
 */
export default function Zone() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 dark:bg-slate-950 sm:py-12 lg:py-14">
      <Container>
        {/* ─────── 顶部：标题（左） + CTA（右），构成 F 型视觉起点 ─────── */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold tracking-wider text-brand-500">
              <GlobeAltIcon className="h-3.5 w-3.5" />
              全球基础设施
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              遍布全球的云计算基础设施
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
              覆盖亚洲、欧洲、北美、大洋洲等核心区域，以稳定、弹性、合规的云底座，
              为企业业务出海与全球化部署提供坚实支撑。
            </p>
          </div>
          <a
            href="/about"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:w-auto sm:justify-start"
          >
            了解全球基础设施
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ─────── 主体：左中指标矩阵 + 右侧点阵地图 ─────── */}
        <div className="mt-6 grid items-center gap-10 lg:mt-8 lg:grid-cols-2 lg:gap-16">
          {/* 左：2 行 3 列大数字指标矩阵 */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* 右：点阵世界地图（视觉重心） */}
          <div className="relative">
            <DotMatrixMap />
            <div className="mt-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                节点覆盖 {regionLabels.length} 个大区
              </div>
              {/* 大区图例：底部统一展示全部地区 */}
              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {regionLabels.map((region) => (
                  <span
                    key={region.name}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-100 dark:bg-slate-800/60 dark:text-slate-300 dark:ring-slate-700 sm:px-3 sm:text-xs"
                  >
                    {region.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
