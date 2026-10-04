'use client'

import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { ArrowRight, Server, Cpu, ShieldCheck, Database, BarChart3, Terminal } from 'lucide-react'

// ============================================================
// 数据
// ============================================================
const capabilities = [
  {
    title: '弹性计算',
    desc: '秒级部署云服务器，弹性伸缩 + 全球负载均衡',
    icon: Server,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '< 30s',
    statLabel: '实例启动',
  },
  {
    title: 'AI 算力',
    desc: 'GPU 集群调度，大模型训练推理一站式服务',
    icon: Cpu,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '1000+',
    statLabel: 'GPU 节点',
  },
  {
    title: '安全防护',
    desc: 'Tbps 级 DDoS 清洗 + WAF + 主机安全',
    icon: ShieldCheck,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '99.99%',
    statLabel: '清洗成功率',
  },
  {
    title: '云数据库',
    desc: 'MySQL / Redis / MongoDB 分布式高可用',
    icon: Database,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '< 1ms',
    statLabel: '读写延迟',
  },
  {
    title: '可观测性',
    desc: '实时监控 + 秒级告警 + 智能根因分析',
    icon: BarChart3,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '50+',
    statLabel: '监控指标',
  },
  {
    title: 'DevOps',
    desc: '容器化部署，CI/CD 流水线开箱即用',
    icon: Terminal,
    href: 'https://console.cloudcvm.com/cart/goodsList.htm',
    stat: '3 分钟',
    statLabel: '完成部署',
  },
]

// ============================================================
// 能力卡片
// ============================================================
function CapabilityCard({ item, index }: { item: (typeof capabilities)[0]; index: number }) {
  const Icon = item.icon

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-brand-200 hover:shadow-glow-sm"
    >
      {/* 图标 */}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 transition-colors duration-200 group-hover:bg-brand-500">
        <Icon
          className="h-5 w-5 text-brand-500 transition-colors duration-200 group-hover:text-white"
          strokeWidth={1.5}
        />
      </div>

      {/* 标题 + 描述 */}
      <h3 className="text-base font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-brand-500">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{item.desc}</p>

      {/* 指标 + 箭头 */}
      <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-neutral-900 tabular-nums">{item.stat}</span>
          <span className="text-xs text-neutral-500">{item.statLabel}</span>
        </div>
        <ArrowRight
          className="h-4 w-4 text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-500"
          strokeWidth={1.5}
        />
      </div>
    </motion.a>
  )
}

// ============================================================
// 主组件
// ============================================================
export function CapabilityGrid() {
  return (
    <section
      className="section-y bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/background/background-5.webp")' }}
      id="cloud-features"
    >
      <Container>
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <h2 className="section-title">
            全栈云能力，
            <span className="text-brand-500">一站就绪</span>
          </h2>
          <p className="section-desc">覆盖计算、存储、网络、安全、AI 的全栈云服务</p>
        </motion.div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
