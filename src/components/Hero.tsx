'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronRight, Server, Zap, ShieldCheck } from 'lucide-react'

// ============================================================
// 动画背景 — 动态网格点阵 + 光晕
// 移动端：减少光晕数量，降低渲染负担
// ============================================================
function AnimatedGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [mouseX, mouseY])

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })
  const translateX = useTransform(springX, [-0.5, 0.5], [12, -12])
  const translateY = useTransform(springY, [-0.5, 0.5], [12, -12])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* PC端：鼠标跟随视差；移动端：静态居中 */}
      <motion.div
        className="absolute inset-0 hidden sm:block"
        style={{ x: translateX, y: translateY }}
      >
        <GridPattern />
        <GlowOrbs />
      </motion.div>

      {/* 移动端：简化静态背景 */}
      <div className="absolute inset-0 sm:hidden">
        <GridPattern />
        {/* 仅保留一个光晕，节省性能 */}
        <div
          className="absolute -top-40 right-0 h-[300px] w-[300px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.04) 0%, transparent 70%)' }}
        />
      </div>
    </div>
  )
}

/** 网格点阵图案 */
function GridPattern() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,85,255,0.07) 1px, transparent 1px)',
        backgroundSize: 'clamp(32px, 5vw, 48px) clamp(32px, 5vw, 48px)',
      }}
    />
  )
}

/** 光晕装饰（仅 PC 端） */
function GlowOrbs() {
  return (
    <>
      <div
        className="absolute -top-60 left-0 h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.05) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.04) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 right-[15%] h-[400px] w-[400px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.03) 0%, transparent 70%)' }}
      />
    </>
  )
}

// ============================================================
// 云基础设施可视化
// 移动端：整体 scale 缩小，保持比例协调
// ============================================================
function CloudVisualization() {
  const nodes = [
    { id: 1,  x: '48%', y: '8%',  size: 64, delay: 0,   label: 'ECS', type: 'compute' },
    { id: 2,  x: '18%', y: '30%', size: 52, delay: 0.25, label: 'GPU', type: 'compute' },
    { id: 3,  x: '82%', y: '22%', size: 56, delay: 0.4,  label: 'CDN', type: 'network' },
    { id: 4,  x: '10%', y: '58%', size: 48, delay: 0.55, label: 'RDS', type: 'storage' },
    { id: 5,  x: '42%', y: '55%', size: 56, delay: 0.7,  label: 'OSS', type: 'storage' },
    { id: 6,  x: '75%', y: '50%', size: 52, delay: 0.85, label: 'SLB', type: 'network' },
    { id: 7,  x: '28%', y: '80%', size: 44, delay: 1.0,  label: 'DNS', type: 'network' },
    { id: 8,  x: '60%', y: '78%', size: 48, delay: 1.15, label: 'VPC', type: 'network' },
    { id: 9,  x: '85%', y: '78%', size: 44, delay: 1.3,  label: 'WAF', type: 'security' },
  ]

  const connections = [
    [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 4], [3, 6], [4, 7], [5, 8], [6, 9],
    [7, 8], [8, 9], [3, 9], [2, 5],
  ]

  const typeColors: Record<string, string> = {
    compute: 'border-primary-200 bg-primary-50/60',
    network: 'border-slate-200 bg-slate-50/60',
    storage: 'border-amber-200 bg-amber-50/60',
    security: 'border-emerald-200 bg-emerald-50/60',
  }

  return (
    <div
      className="relative w-full min-h-[340px] sm:min-h-[440px] lg:min-h-[580px]"
      aria-hidden="true"
    >
      {/* 固定尺寸 + scale 等比缩放，flex 居中 */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="scale-[0.62] sm:scale-75 lg:scale-100 origin-center">
          <div className="relative" style={{ width: '900px', height: '580px' }}>
            {/* 中央 Hub 节点 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-md border-2 border-primary-300/50 bg-white/90 shadow-xl shadow-primary-500/8 backdrop-blur-sm">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.15, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-2xl border-2 border-primary-300/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.3, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -inset-1 rounded-2xl border border-primary-200/40"
                />
                <div className="relative flex flex-col items-center">
                  <Zap className="h-7 w-7 text-primary-500" strokeWidth={1.5} />
                  <span className="mt-1 text-[10px] font-bold tracking-wider text-primary-500 font-mono">CLOUD</span>
                </div>
              </div>
            </motion.div>

            {/* 浮动节点 */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10"
                style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3.5 + node.id * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: node.id * 0.25,
                  }}
                  className={`relative flex items-center justify-center rounded-md border bg-white/90 shadow-sm backdrop-blur-sm ${typeColors[node.type]}`}
                  style={{ width: node.size, height: node.size }}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.3 }}
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-400 shadow-sm"
                  />
                  <span className="text-xs font-semibold text-slate-600 font-mono tracking-tight">
                    {node.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* SVG 连接线 */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 900 580"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,85,255,0.06)" />
                  <stop offset="50%" stopColor="rgba(0,85,255,0.15)" />
                  <stop offset="100%" stopColor="rgba(0,85,255,0.06)" />
                </linearGradient>
              </defs>
              {connections.map(([from, to], i) => {
                const fn = nodes[from - 1]
                const tn = nodes[to - 1]
                const x1 = (parseFloat(fn.x) / 100) * 900
                const y1 = (parseFloat(fn.y) / 100) * 580
                const x2 = (parseFloat(tn.x) / 100) * 900
                const y2 = (parseFloat(tn.y) / 100) * 580
                return (
                  <g key={i}>
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#lineGrad)"
                      strokeWidth={1.2}
                      strokeDasharray="5 6"
                    />
                    <motion.circle
                      r={3}
                      fill="rgba(0,85,255,0.45)"
                      initial={{ cx: x1, cy: y1, opacity: 0 }}
                      animate={{ cx: [x1, x2, x1], cy: [y1, y2, y1], opacity: [0, 0.9, 0] }}
                      transition={{
                        duration: 3.5 + i * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.35,
                      }}
                    />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// 信任指标
// ============================================================
const trustMetrics = [
  { value: '99.95%', label: '可用性 SLA',    icon: ShieldCheck },
  { value: '50万+', label: '企业客户',       icon: Server },
  { value: '24/7',   label: '技术支持',       icon: Zap },
]

// ============================================================
// Hero 主组件
// ============================================================
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <AnimatedGrid />

      <div className="mx-auto max-w-[1800px] px-5 pt-10 pb-8 sm:px-8 sm:pt-20 sm:pb-14 lg:grid lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pt-28 lg:pb-16 xl:gap-10">
        {/* ====== 左列：文字内容 ====== */}
        <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
          {/* 状态标签 — 移动端隐藏 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:block"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-slate-500 backdrop-blur-sm transition-all hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50/50"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              最新动态
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              <span className="text-slate-400 group-hover:text-slate-500">v2.0 全新上线</span>
            </a>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-3xl/[1.1] font-extrabold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl/[1.05] lg:text-6xl/[1.05] xl:text-7xl/[1.05] font-display"
          >
            新一代
            <span className="relative ml-2 inline-block text-primary-500 sm:ml-3">
              云服务器
              <svg
                className="absolute -bottom-1 left-0 w-full sm:-bottom-1.5"
                viewBox="0 0 180 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 45 0, 90 5 T 180 5"
                  stroke="rgba(0,85,255,0.3)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-slate-700">弹性伸缩，按需付费</span>
          </motion.h1>

          {/* 描述 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-[54ch] text-sm/[1.7] text-slate-500 sm:mt-6 sm:text-lg/[1.7]"
          >
            安全稳定、可弹性伸缩的云计算服务。支持秒级部署，提供超强算力，
            助力企业数字化转型，让业务快速响应市场变化。
          </motion.p>

          {/* CTA 按钮组 — 移动端纵向堆叠、全宽 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all hover:bg-primary-600 hover:shadow-md hover:shadow-primary-500/25 active:scale-[0.98] sm:px-7"
            >
              开始使用
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] sm:px-7"
            >
              了解详情
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </motion.div>

          {/* 信任指标 — 移动端均分三列 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-6 sm:pt-8"
          >
            {trustMetrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 sm:h-10 sm:w-10 sm:rounded-xl">
                  <metric.icon className="h-3.5 w-3.5 text-primary-500 sm:h-4.5 sm:w-4.5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-base font-bold tabular-nums tracking-tight text-slate-900 sm:text-lg">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400 sm:text-xs">{metric.label}</div>
                </div>
                {i < trustMetrics.length - 1 && (
                  <div className="ml-2 hidden h-8 w-px bg-slate-100 sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ====== 右列：可视化 ====== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-14 lg:col-span-7 lg:mt-0 lg:flex lg:items-center"
        >
          <CloudVisualization />
        </motion.div>
      </div>
    </section>
  )
}
