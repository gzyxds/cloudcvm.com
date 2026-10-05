'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export interface RevealProps {
  children: ReactNode
  className?: string
  /** 初始位移（px）：y 垂直 / x 水平；0 = 无位移只淡入 */
  y?: number
  x?: number
  /** 初始缩放（如 0.98 的轻微放大入场） */
  scale?: number
  /** 动画时长（秒），默认 0.5 */
  duration?: number
  /** 延迟（秒），列表项逐项错峰用 */
  delay?: number
  /** whileInView 的触发边距（如 '-50px'）；animate 模式忽略 */
  margin?: string
  /** 首屏入场：挂载即播放（animate）；默认进入视口才播放（whileInView） */
  animate?: boolean
}

/**
 * 滚动入场动画小岛（framer-motion whileInView/animate 的语义化封装）。
 *
 * 长页面（about / aiimage 等）转为 Server Component 后，静态内容不再进
 * 客户端 bundle；入场动画是页面唯一的交互诉求，收敛进这个轻量客户端
 * 小岛，由服务端页面按需放置。
 *
 * 视觉行为与页面整体为客户端组件时一致：初始态（opacity 0 + 位移）在
 * 服务端渲染时以内联样式写进 HTML，水合后由 framer-motion 驱动到终态。
 */
export function Reveal({
  children,
  className,
  y = 20,
  x = 0,
  scale = 1,
  duration = 0.5,
  delay = 0,
  margin,
  animate = false,
}: RevealProps) {
  const initial = { opacity: 0, y, x, scale }
  const target = { opacity: 1, y: 0, x: 0, scale: 1 }
  const transition = { duration, delay, ease: 'easeOut' as const }

  if (animate) {
    return (
      <motion.div initial={initial} animate={target} transition={transition} className={className}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
