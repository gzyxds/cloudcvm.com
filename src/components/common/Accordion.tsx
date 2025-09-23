'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    description: '提供完整的云计算基础设施服务，助力企业快速上云',
    features: [
      { name: '一键部署', desc: '通过简单的推送操作即可完成应用部署' },
      { name: '弹性扩容', desc: '根据业务需求自动调整资源配置' },
      { name: '负载均衡', desc: '智能分配流量，确保服务稳定运行' },
    ],
    model: '基础云服务',
    image: '/images/screenshots/Accordion.svg',
  },
  security: {
    id: 'security',
    name: '安全防护',
    icon: ShieldCheckIcon,
    title: '全方位安全防护体系',
    description: '多层次安全防护，保障您的数据和业务安全',
    features: [
      { name: 'SSL证书管理', desc: '自动化SSL证书申请、部署和续期' },
      { name: 'DDoS防护', desc: '智能识别和防御各类网络攻击' },
      { name: '数据加密', desc: '端到端数据加密，确保信息安全' },
    ],
    model: '安全防护系统',
    image: '/images/screenshots/internet.svg',
  },
  data: {
    id: 'data',
    name: '数据管理',
    icon: CloudArrowUpIcon,
    title: '智能化数据管理平台',
    description: '专业的数据存储、备份和分析解决方案',
    features: [
      { name: '数据库备份', desc: '智能化数据备份策略，支持定时和增量备份' },
      { name: '数据同步', desc: '多地域数据实时同步，确保数据一致性' },
      { name: '数据分析', desc: '强大的数据分析工具，洞察业务趋势' },
    ],
    model: '数据管理引擎',
    image: '/images/screenshots/Accordion1.svg',
  },
  ai: {
    id: 'ai',
    name: 'AI智能',
    icon: CpuChipIcon,
    title: 'AI驱动的智能云服务',
    description: '融合人工智能技术，提供智能化云计算解决方案',
    features: [
      { name: '智能运维', desc: 'AI自动化运维，预测和解决潜在问题' },
      { name: '智能推荐', desc: '基于用户行为的个性化服务推荐' },
      { name: '智能优化', desc: '自动优化资源配置，提升性能效率' },
    ],
    model: 'AI智能引擎',
    image: '/images/screenshots/Accordion2.svg',
  },
  monitor: {
    id: 'monitor',
    name: '性能监控',
    icon: ChartBarIcon,
    title: '实时性能监控与分析',
    description: '全方位监控系统性能，确保服务稳定运行',
    features: [
      { name: '实时监控', desc: '24/7实时监控系统运行状态' },
      { name: '性能分析', desc: '深度分析性能瓶颈，提供优化建议' },
      { name: '告警通知', desc: '智能告警系统，及时发现和处理问题' },
    ],
    model: '监控分析系统',
    image: '/images/screenshots/Accordion3.svg',
  },
  devtools: {
    id: 'devtools',
    name: '开发工具',
    icon: WrenchScrewdriverIcon,
    title: '完整的开发工具链',
    description: '提供从开发到部署的完整工具链支持',
    features: [
      { name: 'CI/CD集成', desc: '持续集成和持续部署，提升开发效率' },
      { name: '代码管理', desc: '版本控制和代码审查，确保代码质量' },
      { name: 'API网关', desc: '统一API管理，简化服务间通信' },
    ],
    model: '开发工具套件',
    image: '/images/screenshots/Accordion.svg',
  },
}

/**
 * 云计算功能展示标签页组件
 * 参考 ai.astro 的设计风格，采用标签页布局展示云计算功能
 * 支持响应式设计和交互动画效果
 * @returns 云计算功能标签页组件
 */
export function CloudFeatureTabs() {
  const [activeTab, setActiveTab] = useState('basic')
  const currentFeature = cloudFeatures[activeTab as keyof typeof cloudFeatures]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#F7F9FC' }}
    >
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mb-4 inline-block rounded-full border border-gray-200 bg-white px-3 py-2 sm:mb-6 sm:px-4 md:mb-8">
            <span className="text-xs font-semibold tracking-wide text-[#0052D9] sm:text-sm">
              云计算功能展示
            </span>
          </div>
          <h2
            className="mb-3 px-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl"
            style={{ color: '#05f' }}
          >
            你可以用云计算做什么？
          </h2>
          <p
            className="mx-auto max-w-3xl px-2 text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: 'rgba(12,13,14,0.7)' }}
          >
            探索云计算在不同场景的强大应用，让智能云服务为你的业务发展赋能
          </p>
        </div>

        {/* 标签导航栏 - 多端适配设计 */}
        <div className="mb-12 md:mb-16">
          {/* 移动端：水平滚动布局 */}
          <div className="overflow-x-auto md:hidden">
            <div className="flex gap-2 pb-2">
              {Object.values(cloudFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`group flex-shrink-0 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border-2 transform hover:-translate-y-0.5 ${
                      activeTab === feature.id
                        ? 'border-blue-600 bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[4px_4px_15px_0_rgba(55,99,170,0.25)]'
                        : 'border-white bg-gradient-to-b from-white to-gray-50 text-gray-700 shadow-[4px_4px_12px_0_rgba(55,99,170,0.1)] hover:shadow-[4px_4px_18px_0_rgba(55,99,170,0.15)]'
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`flex h-6 w-6 items-center justify-center rounded ${
                        activeTab === feature.id ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`h-3 w-3 ${
                          activeTab === feature.id ? 'text-white' : 'text-blue-600'
                        }`} />
                      </div>
                      <span className="whitespace-nowrap">{feature.name}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 平板端及以上：水平布局 */}
          <div className="hidden w-full gap-2 md:flex lg:gap-3">
            {Object.values(cloudFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`group flex-1 px-4 py-3 text-sm font-medium transition-all duration-300 md:px-6 md:py-4 flex items-center justify-center gap-2 md:gap-3 rounded-lg border-2 transform hover:-translate-y-1 ${
                    activeTab === feature.id
                      ? 'border-blue-600 bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[8px_8px_25px_0_rgba(55,99,170,0.25)]'
                      : 'border-white bg-gradient-to-b from-white to-gray-50 text-slate-700 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]'
                  }`}
                >
                  <div className={`mr-2 flex h-8 w-8 items-center justify-center rounded-lg ${
                    activeTab === feature.id ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`h-4 w-4 flex-shrink-0 md:h-5 md:w-5 ${
                      activeTab === feature.id ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className="whitespace-nowrap">{feature.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div
              className="group flex min-h-[300px] flex-col items-center gap-6 bg-gradient-to-b from-white to-gray-50 p-4 sm:min-h-[400px] sm:p-6 md:min-h-[500px] md:gap-8 md:p-8 lg:min-h-[600px] lg:flex-row lg:gap-12 lg:p-12 xl:gap-20 rounded-lg border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
            >
              {/* 左侧文字内容 */}
              <div className="order-2 flex w-full flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:order-1 lg:w-2/5">
                {/* 主标题 */}
                <div className="space-y-3 sm:space-y-4">
                  <h3
                    className="text-xl leading-tight font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
                    style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.2' }}
                  >
                    {currentFeature.title}
                  </h3>
                  <p
                    className="max-w-lg text-base leading-relaxed sm:text-lg md:text-xl"
                    style={{ color: 'rgba(12,13,14,0.65)', lineHeight: '1.7' }}
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* 功能特性列表 */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {currentFeature.features.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110"></div>
                      <div className="flex-1 space-y-1">
                        <div
                          className="text-base font-semibold sm:text-lg md:text-xl"
                          style={{
                            color: 'rgba(12,13,14,0.9)',
                            lineHeight: '1.4',
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="text-sm leading-relaxed sm:text-base md:text-lg"
                          style={{
                            color: 'rgba(12,13,14,0.6)',
                            lineHeight: '1.6',
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 相关服务标签 */}
                <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                  <span
                    className="text-xs font-medium sm:text-sm"
                    style={{ color: 'rgba(12,13,14,0.7)' }}
                  >
                    相关服务：{currentFeature.model}
                  </span>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    className="group inline-flex items-center justify-center rounded-lg border-2 border-white bg-gradient-to-b from-white to-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-[4px_4px_12px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_18px_0_rgba(55,99,170,0.15)] sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    <span className="transition-all duration-300 group-hover:mr-1">
                      查看详情
                    </span>
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-b from-[#0052D9] to-[#003db8] px-4 py-2 text-sm font-medium text-white shadow-[4px_4px_15px_0_rgba(55,99,170,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_20px_0_rgba(55,99,170,0.3)] sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    立即体验
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧模拟界面展示 */}
              <div className="order-1 mt-6 hidden w-full items-center justify-center px-4 sm:px-0 lg:order-2 lg:mt-0 lg:flex lg:w-3/5 lg:justify-end">
                <div className="h-48 w-full max-w-xs overflow-hidden rounded-lg border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] sm:h-60 sm:max-w-md sm:p-4 md:h-80 md:max-w-xl md:p-6 lg:h-[28rem] lg:max-w-2xl lg:p-8 xl:h-[32rem] xl:max-w-3xl xl:p-10">
                  {/* 模拟界面头部 */}
                  <div className="mb-2 flex items-center justify-between sm:mb-3 md:mb-4 lg:mb-6">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                    </div>
                    <div className="ml-2 truncate font-mono text-xs text-gray-500 sm:text-sm">
                      {currentFeature.model}
                    </div>
                  </div>

                  {/* 模拟界面内容 */}
                  <div className="h-full space-y-2 overflow-hidden sm:space-y-3 md:space-y-4 lg:space-y-6">
                    {/* 标题栏 */}
                    <div className="mb-2 flex items-center gap-1 sm:mb-3 sm:gap-2 md:mb-4 md:gap-3">
                      <currentFeature.icon className="h-4 w-4 flex-shrink-0 text-[#0052D9] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                      <div className="truncate text-xs font-bold text-gray-800 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {currentFeature.name}控制台
                      </div>
                    </div>

                    {/* 功能模块卡片 */}
                    <div className="grid flex-1 grid-cols-1 gap-1 overflow-y-auto sm:gap-2 md:gap-3">
                      {currentFeature.features
                        .slice(0, 4)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="group overflow-hidden rounded-lg border-2 border-white bg-gradient-to-b from-white to-gray-50 p-2 shadow-[4px_4px_12px_0_rgba(55,99,170,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_18px_0_rgba(55,99,170,0.12)] sm:p-3 md:p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110 sm:h-2 sm:w-2"></div>
                                <span className="truncate text-xs font-medium text-gray-700 sm:text-sm">
                                  {item.name}
                                </span>
                              </div>
                              <div className="ml-2 flex flex-shrink-0 items-center gap-1">
                                <div className="h-1 w-1 animate-pulse rounded-full bg-green-400 sm:h-1.5 sm:w-1.5"></div>
                                <span className="hidden text-xs font-medium text-green-600 sm:inline">
                                  运行中
                                </span>
                              </div>
                            </div>
                            <div className="mt-1 line-clamp-1 text-xs text-gray-500 sm:mt-2">
                              {item.desc}
                            </div>
                            {/* 模拟进度条 */}
                            <div className="mt-1 sm:mt-2">
                              <div className="h-0.5 w-full bg-gray-200 sm:h-1">
                                <div
                                  className="h-0.5 bg-[#0052D9] transition-all duration-1000 ease-out sm:h-1"
                                  style={{ width: `${75 + index * 8}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* 底部状态栏 */}
                    <div className="mt-2 border-t border-gray-200 pt-2 sm:mt-3 sm:pt-3 md:mt-4">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                          <span className="text-gray-600">系统正常</span>
                        </div>
                        <div className="ml-2 truncate text-xs text-gray-500">
                          <span className="hidden sm:inline">
                            CPU: 45% | 内存: 62% |{' '}
                          </span>
                          网络: 正常
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 云计算功能展示组件 - 主导出组件
 * 展示云计算产品的功能特性，采用标签页交互设计
 * 参考 ai.astro 的设计风格，提供现代化的用户体验
 * @returns 云计算功能展示区块
 */
export function Accordion() {
  return (
    <section id="cloud-features" aria-label="云计算功能特性展示">
      <CloudFeatureTabs />
    </section>
  )
}
