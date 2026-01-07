'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

/**
 * 全球基础设施展示组件
 * 展示优刻云在全球的区域、数据中心和加速专线分布
 * 采用 Linear 风格设计，适配移动端和桌面端
 */

// 数据定义
const TABS = [
  { id: 'regions', label: '14', suffix: '个国内区域' },
  { id: 'centers', label: '30', suffix: '个数据中心' },
  { id: 'lines', label: '31', suffix: '条加速专线' },
]

interface ZoneItem {
  id: string
  name: string
  zones?: string
  description?: string
  position?: { top: string; left: string } // 仅用于大屏定位示意
}

const REGION_DATA: ZoneItem[] = [
  {
    id: 'bj1',
    name: '华北一',
    zones: '可用区B  可用区C  可用区D  可用区E',
    description: '为华北周边及全国提供优质网络服务；提供中美、京沪、京广三条专线服务',
    position: { top: '30%', left: '25%' },
  },
  {
    id: 'bj2',
    name: '华北二',
    zones: '可用区A',
    description: '为华北地区提供高可用云计算服务',
    position: { top: '35%', left: '28%' },
  },
  {
    id: 'sh2',
    name: '上海二',
    zones: '可用区A  可用区B  可用区C',
    description: '辐射长三角地区，提供金融级网络支持',
    position: { top: '50%', left: '32%' },
  },
  {
    id: 'hk',
    name: '香港',
    zones: '可用区A  可用区B',
    description: '连接内地与海外的重要枢纽，提供国际级网络延迟',
    position: { top: '65%', left: '30%' },
  },
  {
    id: 'gz',
    name: '广州',
    zones: '可用区B',
    description: '覆盖珠三角地区，支撑高并发业务场景',
    position: { top: '60%', left: '28%' },
  },
  {
    id: 'tpe',
    name: '台北',
    zones: '可用区A',
    description: '连接两岸三地，提供优质网络服务',
    position: { top: '58%', left: '35%' },
  },
  {
    id: 'fj',
    name: '福建',
    zones: 'GPU可用区A',
    description: '为华南及全国提供优质网络服务；是GPU机型的重要可用区',
    position: { top: '55%', left: '30%' },
  },
]

// 模拟其他 Tab 数据（简化）
const CENTER_DATA: ZoneItem[] = [
  { id: 'c1', name: '北京BGP', zones: 'T3+标准', description: '核心骨干网节点', position: { top: '30%', left: '25%' } },
  { id: 'c2', name: '上海BGP', zones: 'T3+标准', description: '核心骨干网节点', position: { top: '50%', left: '32%' } },
  { id: 'c3', name: '广州BGP', zones: 'T3+标准', description: '核心骨干网节点', position: { top: '60%', left: '28%' } },
  { id: 'c4', name: '香港国际', zones: 'T4标准', description: '亚太核心节点', position: { top: '65%', left: '30%' } },
  { id: 'c5', name: '洛杉矶', zones: 'T3+标准', description: '北美核心节点', position: { top: '35%', left: '85%' } },
  { id: 'c6', name: '法兰克福', zones: 'T3+标准', description: '欧洲核心节点', position: { top: '25%', left: '5%' } },
]

const LINE_DATA: ZoneItem[] = [
  { id: 'l1', name: '京沪专线', description: '低延迟 < 25ms', position: { top: '40%', left: '28%' } },
  { id: 'l2', name: '京广专线', description: '低延迟 < 35ms', position: { top: '45%', left: '26%' } },
  { id: 'l3', name: '沪广专线', description: '低延迟 < 20ms', position: { top: '55%', left: '30%' } },
  { id: 'l4', name: '中港专线', description: '跨境低延迟 < 40ms', position: { top: '62%', left: '29%' } },
  { id: 'l5', name: '中美专线', description: '跨境海缆直连', position: { top: '35%', left: '55%' } },
  { id: 'l6', name: '中欧专线', description: '陆缆直连', position: { top: '30%', left: '15%' } },
]

export default function Zone() {
  const [activeTab, setActiveTab] = useState('regions')

  const currentData =
    activeTab === 'regions'
      ? REGION_DATA
      : activeTab === 'centers'
      ? CENTER_DATA
      : LINE_DATA

  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } },
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FD] py-10 sm:py-24">
      <Container className="relative z-10 flex flex-col items-center">
        {/* 标题区域 */}
        <div className="text-center">
          <h2 className="text-2xl font-medium text-[#1D273F] sm:text-4xl">
            优刻得全球云计算基础设施
          </h2>
          <p className="mt-4 text-sm text-[#50627F] sm:text-lg">
            安全合规，稳定可靠，服务瞬达全球
          </p>
        </div>

        {/* Tab 切换 */}
        <div className="mt-8 flex w-full justify-center sm:mt-12">
          <div className="grid w-[calc(100%-32px)] max-w-md grid-cols-3 gap-1 rounded-xl bg-white p-1 shadow-sm sm:flex sm:w-auto sm:max-w-none sm:gap-0 sm:rounded-full">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'relative flex flex-col items-center justify-center rounded-lg py-2 text-xs font-medium transition-all duration-300 sm:flex-row sm:rounded-full sm:px-8 sm:py-3 sm:text-base',
                  activeTab === tab.id
                    ? 'bg-[#0055ff] text-white shadow-md'
                    : 'text-[#50627F] hover:bg-gray-50'
                )}
              >
                <span className="text-sm font-bold sm:mr-1 sm:text-lg">{tab.label}</span>
                <span className="scale-90 sm:scale-100 whitespace-nowrap">{tab.suffix}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="relative mt-8 w-full min-h-[400px] lg:mt-16 lg:h-[800px]">
          {/* 背景地图 - 在移动端作为背景淡化处理，在桌面端完整显示 */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 lg:opacity-100 transition-opacity duration-500">
            <div className="relative h-full w-full max-w-[1400px]">
              <Image
                src="/images/screenshots/zone-earth.png"
                alt="Global Zone Map"
                fill
                className="object-contain"
                unoptimized
              />

              {/* 地图上的定位点 (Ripple Dots) */}
              <AnimatePresence>
                {currentData.map((item) => (
                  <motion.div
                    key={`dot-${item.id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-10 hidden lg:flex items-center justify-center group/dot"
                    style={{
                      top: item.position?.top || '50%',
                      left: item.position?.left || '50%',
                    }}
                  >
                    {/* 呼吸光环 */}
                    <span className="absolute h-6 w-6 rounded-full bg-[#0055ff] opacity-20 animate-[ping_2s_ease-in-out_infinite]" />
                    <span className="absolute h-10 w-10 rounded-full bg-[#0055ff] opacity-10 animate-[ping_3s_ease-in-out_infinite_delay-300ms]" />

                    {/* 实心圆点 */}
                    <div className="relative h-3 w-3 rounded-full bg-[#0055ff] shadow-[0_0_10px_rgba(0,85,255,0.6)] ring-2 ring-white transition-transform duration-300 group-hover/dot:scale-125" />

                    {/* 地名标签 - 默认显示 */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute left-6 whitespace-nowrap rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1D273F] shadow-sm backdrop-blur-sm border border-gray-100"
                    >
                      {item.name}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* 列表内容 - 桌面端为左右浮动卡片布局，移动端为网格布局 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:block lg:h-full"
            >
              {/* 桌面端布局逻辑：将数据分为左右两组模拟设计图中的浮动卡片 */}
              {/* 这里为了响应式简单处理，我们使用绝对定位仅在 lg 以上生效，小屏下流式排列 */}
              {currentData.map((item, index) => {
                // 简单的左右分布逻辑
                const isLeft = index < Math.ceil(currentData.length / 2)

                // 预计算桌面端位置
                const desktopStyle = {
                  '--lg-top':
                    index === 0 ? '10%' :
                    index === 1 ? '32%' :
                    index === 2 ? '54%' :
                    index === 3 ? '76%' :
                    index === 4 ? '20%' :
                    index === 5 ? '42%' :
                    index === 6 ? '64%' : 'auto',
                  '--lg-left': isLeft ? '2%' : 'auto',
                  '--lg-right': !isLeft ? '2%' : 'auto',
                } as React.CSSProperties

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={clsx(
                      'group relative overflow-hidden rounded-2xl border border-[rgba(236,239,246,0.6)] bg-white/90 p-4 backdrop-blur-sm transition-all duration-300 sm:p-5',
                      // 桌面端定位样式：使用 CSS 变量控制
                      'lg:absolute lg:w-[400px]',
                      'lg:top-[var(--lg-top)] lg:left-[var(--lg-left)] lg:right-[var(--lg-right)]'
                    )}
                    style={desktopStyle}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-6 w-6 flex-shrink-0 mt-1">
                        <Image
                          src="/images/screenshots/zone-icon.png"
                          alt="Zone Icon"
                          width={24}
                          height={24}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2 mb-2">
                          <h3 className="text-lg font-medium text-[#1D273F]">
                            {item.name}
                          </h3>
                          {item.zones && (
                            <span className="text-sm text-[#50627F]">
                              {item.zones}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm leading-relaxed text-[#50627F]/80">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

