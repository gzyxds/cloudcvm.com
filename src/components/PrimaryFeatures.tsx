'use client'

import { useState, useEffect } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import {
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

interface Feature {
  id: string
  title: string
  description: string
  summary: string
  icon: ComponentType<{ className?: string; style?: CSSProperties }>
  metrics?: { label: string; value: string }[]
  features: string[]
  tag?: string
}

const FEATURES: Feature[] = [
  {
    id: 'ecs',
    title: '弹性计算 ECS',
    summary: '高性能云服务器',
    description:
      '基于自研虚拟化架构，提供高性能、高稳定性的云服务器实例。支持秒级弹性伸缩，满足业务快速增长需求，有效降低IT成本。',
    icon: CpuChipIcon,
    tag: 'Cloud 2.0 Plus',
    features: [
      '秒级弹性伸缩，按需分配资源',
      '高可用架构设计，SLA高达99.99%',
      '支持多种计费模式，灵活应对业务波动',
      '全方位监控告警，保障业务稳定运行'
    ],
  },
  {
    id: 'proxy',
    title: '代理IP',
    summary: '长时效住宅IP',
    description:
      '提供全球各地的高质量长时效住宅IP，独享纯净资源。支持多种协议，确保业务安全稳定，助力跨境业务无忧出海。',
    icon: ShieldCheckIcon,
    tag: 'Global IP Plus',
    features: [
      '全球海量IP资源，覆盖200+国家地区',
      '独享纯净IP，业务成功率提升50%',
      '支持HTTP/HTTPS/SOCKS5多种协议',
      '7*24小时技术支持，售后无忧'
    ],
  },
  {
    id: 'ecommerce',
    title: '电商云',
    summary: '跨境电商专属',
    description:
      '专为跨境电商卖家打造的云主机服务，提供纯净独立的IP环境。有效防止账号关联，提升店铺运营安全性与稳定性。',
    icon: CircleStackIcon,
    tag: 'E-Commerce Pro',
    features: [
      '固定纯净IP，杜绝账号关联风险',
      '深度优化网络链路，访问速度提升30%',
      '兼容主流电商平台与ERP软件',
      '一键部署环境，开箱即用'
    ],
  },
  {
    id: 'security',
    title: '安全防护',
    summary: '全方位安全守护',
    description:
      '构建云端纵深防御体系，提供DDoS防护、WAF、主机安全等全方位解决方案。7×24小时实时监控，快速响应安全威胁。',
    icon: ShieldCheckIcon,
    tag: 'Security Max',
    features: [
      'T级DDoS攻击防御能力，清洗成功率99%',
      '智能WAF防护，精准拦截Web攻击',
      '自动化漏洞扫描与补丁管理',
      '等保合规认证，满足合规性要求'
    ],
  },
]

/**
 * 功能特性卡片组件
 * 展示单个功能的详细信息
 */
function FeatureCard({ feature, isActive }: { feature: Feature; isActive?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={clsx(
        "group relative bg-white border rounded-xl p-5 transition-all duration-300 h-full flex flex-col",
        isActive
          ? "border-[#0055ff]/30 shadow-lg shadow-[#0055ff]/5"
          : "border-[#E2E8F0] hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-[#0055ff]/5"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <div className={clsx(
            "p-2 rounded-lg border transition-colors duration-300",
            isActive
              ? "bg-[#0055ff] text-white border-[#0055ff]"
              : "bg-[#eff6ff] text-[#0055ff] border-[#0055ff]/10 group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff]"
          )}>
            <feature.icon className="w-4 h-4" />
          </div>
          {feature.tag && (
            <span className="text-[10px] font-medium text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
              {feature.tag}
            </span>
          )}
        </div>
        
        <h3 className={clsx(
          "text-sm font-bold mb-1.5 transition-colors duration-300 flex-shrink-0",
          isActive ? "text-[#0055ff]" : "text-[#0F172A] group-hover:text-[#0055ff]"
        )}>
          {feature.title}
        </h3>
        
        <p className="text-xs text-[#64748B] leading-relaxed mb-3 flex-shrink-0 line-clamp-2">
          {feature.description}
        </p>
        
        <div className="space-y-1.5 flex-1 mt-auto">
          {feature.features.slice(0, 2).map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-3.5 h-3.5 mt-0.5 rounded-full bg-[#eff6ff] border border-[#0055ff]/20 flex items-center justify-center">
                <CheckIcon className="w-2 h-2 text-[#0055ff]" />
              </div>
              <span className="text-xs text-[#64748B] leading-relaxed line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 左侧主介绍区域组件
 */
function MainIntro({ activeFeature }: { activeFeature: Feature }) {
  return (
    <motion.div
      key={activeFeature.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full flex"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0055ff]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative bg-white border border-[#E2E8F0] rounded-xl p-5 lg:p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#0055ff] rounded-lg border border-[#0055ff] text-white">
            <activeFeature.icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#0F172A]">
              {activeFeature.title}
            </h2>
            <p className="text-xs text-[#0055ff] font-medium">
              {activeFeature.summary}
            </p>
          </div>
        </div>

        <p className="text-[#64748B] leading-relaxed mb-4 text-sm lg:text-base flex-shrink-0">
          {activeFeature.description}
        </p>

        <div className="space-y-2 mb-5 flex-1">
          {activeFeature.features.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#eff6ff] border border-[#0055ff]/20 flex items-center justify-center">
                <CheckIcon className="w-2.5 h-2.5 text-[#0055ff]" />
              </div>
              <span className="text-xs lg:text-sm text-[#0F172A]">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex-shrink-0">
          <Button
            href="/chat"
            color="blue"
            variant="erlieSolid"
            className="rounded-lg px-6 py-2.5 text-sm font-semibold w-full sm:w-auto"
          >
            立即咨询
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 核心功能特性展示区块
 * 使用左右布局展示产品特性
 */
export function PrimaryFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = FEATURES[activeIndex]

  return (
    <section className="relative bg-gradient-to-b from-white via-[#eff6ff]/30 to-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#0055ff]/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            灵活、稳定、安全的<span className="text-[#0055ff]">云端动力</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg lg:text-xl leading-relaxed">
            基于先进的自研架构，为您提供全方位的云端基础设施服务，助力业务快速实现数字化转型。
          </p>
        </motion.div>

        <div className="mb-8 sm:mb-10">
          <div className="flex gap-2">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg border",
                  activeIndex === index
                    ? "bg-[#0055ff] text-white border-[#0055ff] shadow-md"
                    : "text-[#64748B] border-[#E2E8F0] bg-white hover:border-[#0055ff]/30 hover:text-[#0055ff]"
                )}
              >
                <feature.icon className={clsx(
                  "w-4 h-4",
                  activeIndex === index ? "text-white" : "text-[#94A3B8]"
                )} />
                <span className="hidden sm:inline">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div className="lg:col-span-4 flex">
            <div className="flex-1">
              <MainIntro activeFeature={activeFeature} />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer flex"
                >
                  <div className="flex-1">
                    <FeatureCard feature={feature} isActive={activeIndex === index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
