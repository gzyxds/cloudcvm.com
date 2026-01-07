'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

/**
 * 云计算功能标签页数据
 * 包含六个核心功能分类：基础服务、安全防护、数据管理、AI智能、性能监控、开发工具
 */
const cloudFeatures = {
  basic: {
    id: 'basic',
    name: '基础服务',
    icon: ServerIcon,
    title: '云计算基础服务让部署更简单',
    description: '提供完整的云计算基础设施服务，助力企业快速上云，降低 IT 成本，提升运维效率。',
    features: [
      { name: '一键部署', desc: '通过简单的推送操作即可完成应用部署' },
      { name: '弹性扩容', desc: '根据业务需求自动调整资源配置' },
      { name: '负载均衡', desc: '智能分配流量，确保服务稳定运行' },
    ],
    model: '基础云服务',
  },
  security: {
    id: 'security',
    name: '安全防护',
    icon: ShieldCheckIcon,
    title: '全方位安全防护体系',
    description: '多层次安全防护，保障您的数据和业务安全，抵御各类网络攻击和数据泄露风险。',
    features: [
      { name: 'SSL证书管理', desc: '自动化SSL证书申请、部署和续期' },
      { name: 'DDoS防护', desc: '智能识别和防御各类网络攻击' },
      { name: '数据加密', desc: '端到端数据加密，确保信息安全' },
    ],
    model: '安全防护系统',
  },
  data: {
    id: 'data',
    name: '数据管理',
    icon: CloudArrowUpIcon,
    title: '智能化数据管理平台',
    description: '专业的数据存储、备份和分析解决方案，确保数据高可用性和业务连续性。',
    features: [
      { name: '数据库备份', desc: '智能化数据备份策略，支持定时和增量备份' },
      { name: '数据同步', desc: '多地域数据实时同步，确保数据一致性' },
      { name: '数据分析', desc: '强大的数据分析工具，洞察业务趋势' },
    ],
    model: '数据管理引擎',
  },
  ai: {
    id: 'ai',
    name: 'AI智能',
    icon: CpuChipIcon,
    title: 'AI驱动的智能云服务',
    description: '融合人工智能技术，提供智能化云计算解决方案，加速企业智能化转型。',
    features: [
      { name: '智能运维', desc: 'AI自动化运维，预测和解决潜在问题' },
      { name: '智能推荐', desc: '基于用户行为的个性化服务推荐' },
      { name: '智能优化', desc: '自动优化资源配置，提升性能效率' },
    ],
    model: 'AI智能引擎',
  },
  monitor: {
    id: 'monitor',
    name: '性能监控',
    icon: ChartBarIcon,
    title: '实时性能监控与分析',
    description: '全方位监控系统性能，提供多维度的监控指标和告警服务，确保服务稳定运行。',
    features: [
      { name: '实时监控', desc: '24/7实时监控系统运行状态' },
      { name: '性能分析', desc: '深度分析性能瓶颈，提供优化建议' },
      { name: '告警通知', desc: '智能告警系统，及时发现和处理问题' },
    ],
    model: '监控分析系统',
  },
  devtools: {
    id: 'devtools',
    name: '开发工具',
    icon: WrenchScrewdriverIcon,
    title: '完整的开发工具链',
    description: '提供从开发到部署的完整工具链支持，提升研发效能，加速产品迭代。',
    features: [
      { name: 'CI/CD集成', desc: '持续集成和持续部署，提升开发效率' },
      { name: '代码管理', desc: '版本控制和代码审查，确保代码质量' },
      { name: 'API网关', desc: '统一API管理，简化服务间通信' },
    ],
    model: '开发工具套件',
  },
}

/**
 * 云计算功能展示标签页组件
 * 采用新版 UI 规范：
 * - 颜色：Navy 900/700 (文字), Brand Blue (激活/强调)
 * - 圆角：rounded-lg (18px), rounded-sm (5px)
 * - 交互：Framer Motion 平滑过渡
 */
export function CloudFeatureTabs() {
  const [activeTab, setActiveTab] = useState('basic')
  const currentFeature = cloudFeatures[activeTab as keyof typeof cloudFeatures]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f6f8fd]">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-block rounded-xl bg-blue-50 px-3 py-1">
            <span className="text-xs font-semibold tracking-wide text-blue-600">
              云计算功能展示
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-medium text-slate-900 sm:text-4xl tracking-tight">
            你可以用云计算做什么？
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            探索云计算在不同场景的强大应用，让智能云服务为你的业务发展赋能
          </p>
        </div>

        {/* 标签导航栏 - 桌面端网格布局，移动端滚动 */}
        <div className="mb-8 md:mb-12">
          {/* 移动端：水平滚动 */}
          <div className="overflow-x-auto md:hidden pb-4 scrollbar-hide">
            <div className="flex gap-3">
              {Object.values(cloudFeatures).map((feature) => {
                const IconComponent = feature.icon
                const isActive = activeTab === feature.id
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={clsx(
                      'flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 border',
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-blue-600 hover:border-blue-600'
                    )}
                  >
                    <IconComponent className={clsx("h-4 w-4", isActive ? "text-white" : "text-blue-600")} />
                    <span className="text-sm font-medium">{feature.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 桌面端：居中卡片式导航 */}
          <div className="hidden md:flex justify-center flex-wrap gap-4">
            {Object.values(cloudFeatures).map((feature) => {
              const IconComponent = feature.icon
              const isActive = activeTab === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={clsx(
                    'flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 border min-w-[140px] justify-center',
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
                  )}
                >
                  <IconComponent className={clsx("h-5 w-5", isActive ? "text-white" : "text-blue-600")} />
                  <span className="text-base font-medium">{feature.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 内容区域 - 使用 AnimatePresence 实现切换动画 */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* 左侧：文字介绍与功能列表 */}
                <div className="lg:col-span-5 bg-white rounded-xl p-8 shadow-lg border border-slate-200 h-full min-h-[500px] flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 mb-4 leading-tight tracking-tight">
                      {currentFeature.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {currentFeature.description}
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    {currentFeature.features.map((item, index) => (
                      <div key={index} className="flex gap-4 group">
                        <div className="mt-1 flex-shrink-0">
                           <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                           </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-200">
                     <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                       立即体验
                     </button>
                     <button className="px-6 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl text-sm font-medium hover:text-blue-600 hover:border-blue-600 transition-all">
                       查看文档
                     </button>
                  </div>
                </div>

                {/* 右侧：模拟控制台界面 */}
                <div className="lg:col-span-7 bg-blue-600 rounded-xl p-1 shadow-2xl overflow-hidden min-h-[500px] relative flex flex-col shadow-blue-500/10">
                  {/* 浏览器/窗口头部模拟 */}
                  <div className="bg-black/10 px-4 py-3 flex items-center gap-2 rounded-t-xl border-b border-white/10">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                       <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                       <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                     </div>
                     <div className="ml-4 px-3 py-1 bg-black/10 rounded text-xs text-blue-100 flex-1 text-center font-mono border border-white/5">
                       cloud.ucloud.cn/console/{activeTab}
                     </div>
                  </div>

                  {/* 模拟界面内容 */}
                  <div className="p-6 flex-1 flex flex-col gap-6 bg-blue-600">
                     {/* 顶部统计卡片 */}
                     <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white/10 p-4 rounded-md border border-white/10 backdrop-blur-sm">
                             <div className="w-8 h-8 rounded bg-white/20 mb-3 animate-pulse" />
                             <div className="h-4 w-20 bg-white/20 rounded mb-2" />
                             <div className="h-6 w-12 bg-white/20 rounded" />
                          </div>
                        ))}
                     </div>

                     {/* 主图表区域模拟 */}
                     <div className="flex-1 bg-white/10 rounded-md border border-white/10 p-5 relative overflow-hidden group backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                           <div className="h-5 w-32 bg-white/20 rounded" />
                           <div className="flex gap-2">
                              <div className="h-8 w-20 bg-white/20 rounded border border-white/30" />
                              <div className="h-8 w-20 bg-white/10 rounded" />
                           </div>
                        </div>

                        {/* 动态条形图模拟 */}
                        <div className="flex items-end justify-between h-48 gap-2 px-2">
                           {[40, 65, 45, 80, 55, 70, 90, 60, 45, 75, 50, 65].map((h, i) => (
                             <motion.div
                               key={i}
                               initial={{ height: 0 }}
                               animate={{ height: `${h}%` }}
                               transition={{ duration: 0.5, delay: i * 0.05 }}
                               className="w-full bg-gradient-to-t from-white/30 to-white/80 rounded-t-sm relative group-hover:from-white/40 group-hover:to-white transition-colors"
                             />
                           ))}
                        </div>

                        {/* 装饰性网格线 */}
                        <div className="absolute inset-0 pointer-events-none opacity-20"
                             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/**
 * 云计算功能展示组件 - 主导出组件
 * @returns 云计算功能展示区块
 */
export function Accordion() {
  return (
    <section id="cloud-features" aria-label="云计算功能特性展示">
      <CloudFeatureTabs />
    </section>
  )
}
