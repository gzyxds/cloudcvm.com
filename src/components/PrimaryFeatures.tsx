'use client'

import { useState, memo, useRef, useEffect, useCallback, startTransition } from 'react'
import type { ComponentType, MouseEvent, CSSProperties } from 'react'
import clsx from 'clsx'
import {
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

interface Metric {
  label: string
  value: string
}

interface Feature {
  id: string
  title: string
  description: string
  summary: string
  icon: ComponentType<{ className?: string; style?: CSSProperties }>
  metrics: Metric[]
  features: string[]
  colors: {
    primary: string
    dark: string
    light: string
    primaryRgb: string
  }
}

const FEATURES: Feature[] = [
  {
    id: 'ecs',
    title: '弹性计算 ECS',
    summary: '高性能云服务器',
    description:
      '基于自研虚拟化架构，提供高性能、高稳定性的云服务器实例。支持秒级弹性伸缩，满足业务快速增长需求，有效降低IT成本。',
    icon: CpuChipIcon,
    metrics: [
      { label: '实例规格', value: '200+' },
      { label: '可用区', value: '25+' },
    ],
    features: [
      '秒级弹性伸缩，按需分配资源',
      '高可用架构设计，SLA高达99.99%',
      '支持多种计费模式，灵活应对业务波动',
      '全方位监控告警，保障业务稳定运行'
    ],
    colors: {
      primary: '#0055ff',
      dark: '#0043cc',
      light: '#eff6ff',
      primaryRgb: '0, 85, 255',
    }
  },
  {
    id: 'proxy',
    title: '代理IP',
    summary: '长时效住宅IP',
    description:
      '提供全球各地的高质量长时效住宅IP，独享纯净资源。支持多种协议，确保业务安全稳定，助力跨境业务无忧出海。',
    icon: ShieldCheckIcon,
    metrics: [
      { label: 'IP类型', value: '住宅IP' },
      { label: 'IP数量', value: '无限制' },
    ],
    features: [
      '全球海量IP资源，覆盖200+国家地区',
      '独享纯净IP，业务成功率提升50%',
      '支持HTTP/HTTPS/SOCKS5多种协议',
      '7*24小时技术支持，售后无忧'
    ],
    colors: {
      primary: '#0055ff',
      dark: '#0043cc',
      light: '#eff6ff',
      primaryRgb: '0, 85, 255',
    }
  },
  {
    id: 'ecommerce',
    title: '电商云',
    summary: '跨境电商专属',
    description:
      '专为跨境电商卖家打造的云主机服务，提供纯净独立的IP环境。有效防止账号关联，提升店铺运营安全性与稳定性。',
    icon: CircleStackIcon,
    metrics: [
      { label: 'IP类型', value: '纯净IP' },
      { label: 'IP数量', value: '无限制' },
    ],
    features: [
      '固定纯净IP，杜绝账号关联风险',
      '深度优化网络链路，访问速度提升30%',
      '兼容主流电商平台与ERP软件',
      '一键部署环境，开箱即用'
    ],
    colors: {
      primary: '#0055ff',
      dark: '#0043cc',
      light: '#eff6ff',
      primaryRgb: '0, 85, 255',
    }
  },
  {
    id: 'security',
    title: '安全防护',
    summary: '全方位安全守护',
    description:
      '构建云端纵深防御体系，提供DDoS防护、WAF、主机安全等全方位解决方案。7×24小时实时监控，快速响应安全威胁。',
    icon: ShieldCheckIcon,
    metrics: [
      { label: '防护能力', value: '1Tbps+' },
      { label: '响应时间', value: '<1分钟' },
    ],
    features: [
      'T级DDoS攻击防御能力，清洗成功率99%',
      '智能WAF防护，精准拦截Web攻击',
      '自动化漏洞扫描与补丁管理',
      '等保合规认证，满足合规性要求'
    ],
    colors: {
      primary: '#0055ff',
      dark: '#0043cc',
      light: '#eff6ff',
      primaryRgb: '0, 85, 255',
    }
  },
]

/**
 * 监听设备类型（桌面端/平板端）的自定义 Hook
 * @returns {object} 包含 isTablet 和 isDesktop 状态的对象
 */
function useDeviceType() {
  const [device, setDevice] = useState({
    isTablet: false,
    isDesktop: true,
  })

  useEffect(() => {
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      setDevice((prev) => {
        const next = {
          isTablet: tabletQuery.matches,
          isDesktop: desktopQuery.matches,
        }
        return prev.isTablet === next.isTablet && prev.isDesktop === next.isDesktop
          ? prev
          : next
        })
    }

    update()

    tabletQuery.addEventListener('change', update)
    desktopQuery.addEventListener('change', update)

    return () => {
      tabletQuery.removeEventListener('change', update)
      desktopQuery.removeEventListener('change', update)
    }
  }, [])

  return device
}

/**
 * 功能特性卡片组件
 * 展示单个功能的详细信息，支持选中展开和悬停预览
 * @param {object} props 组件属性
 * @param {Feature} props.feature 功能数据对象
 * @param {boolean} props.isSelected 是否为当前选中状态
 * @param {number} props.index 在列表中的索引
 * @param {function} props.onSelect 选中回调函数
 * @param {function} props.onHover 悬停回调函数
 * @param {object} props.deviceType 设备类型状态
 */
const FeatureCard = memo(function FeatureCard({
  feature,
  isSelected,
  index,
  onSelect,
  onHover,
  deviceType
}: {
  feature: Feature
  isSelected: boolean
  index: number
  onSelect: (index: number) => void
  onHover: (index: number) => void
  deviceType: ReturnType<typeof useDeviceType>
}) {
  const { isTablet, isDesktop } = deviceType

  const style = isDesktop
    ? {
      flexGrow: isSelected ? 4 : 1,
      flexBasis: 0,
      minWidth: isSelected ? 480 : 140,
      height: 490,
      willChange: 'flex-grow, min-width',
    }
    : isTablet
      ? { height: isSelected ? 400 : 90, willChange: 'height' }
      : { height: isSelected ? 'auto' : 72 }

  const containerStyle = {
    ...style,
    '--theme-primary': feature.colors.primary,
    '--theme-dark': feature.colors.dark,
    '--theme-light': feature.colors.light,
    '--theme-primary-rgb': feature.colors.primaryRgb,
  } as CSSProperties & { [key: string]: any }

  return (
    <div
      onClick={() => onSelect(index)}
      onMouseEnter={isDesktop ? () => onHover(index) : undefined}
      className={clsx(
        "relative rounded-sm overflow-hidden cursor-pointer border transition-all duration-300",
        isDesktop
          ? "mr-4 last:mr-0 transition-[flex-grow,min-width] duration-100 ease-out"
          : isTablet
            ? "w-full mb-3 last:mb-0 transition-[height] duration-100 ease-out"
            : "w-full mb-3 last:mb-0",
        isSelected
          ? "bg-white border-[#E2E8F0] z-10 shadow-lg shadow-slate-200/50 outline-none ring-0"
          : "bg-[var(--theme-primary)] border-transparent shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 z-0 outline-none ring-0"
      )}
      style={containerStyle}
    >
      <div
        className={clsx(
          "absolute inset-0 pointer-events-none transition-opacity duration-300",
          isSelected ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={clsx(
          "absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(var(--theme-primary-rgb),0.5)] pointer-events-none transition-transform duration-300 origin-left",
          "scale-x-0 group-hover:scale-x-100"
        )}
      />

      <div className="relative z-10 h-full w-full">
        {isSelected ? (
          <div className={clsx(
            "h-full w-full flex flex-col",
            isDesktop ? "px-8 py-8" : "px-6 py-6 sm:px-8 sm:py-8"
          )}>
            <div className="flex-1">
              <div className="flex items-center justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2.5 bg-[var(--theme-light)] rounded-sm border border-[rgba(var(--theme-primary-rgb),0.1)] text-[var(--theme-primary)]">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className={clsx("font-bold text-[#0F172A]", isDesktop ? "text-[28px] lg:text-[32px]" : "text-[24px] sm:text-[28px]")}>
                    {feature.title}
                  </h3>
                  <p className="text-[var(--theme-primary)] text-[14px] sm:text-[15px] mt-0.5">{feature.summary}</p>
                </div>
              </div>

              <p className="text-[#64748B] leading-relaxed mb-5 sm:mb-6 text-[15px] sm:text-[16px] lg:text-[16px] max-w-full lg:max-w-[95%] border-l-2 border-[#E2E8F0] pl-5">
                {feature.description}
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-5 sm:mb-6">
                {feature.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col border-l border-[#E2E8F0] pl-5 py-0.5">
                    <span className="text-[28px] sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-none">{m.value}</span>
                    <span className="text-[12px] sm:text-[14px] font-medium text-[#64748B] mt-1.5">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-3 mb-5 sm:mb-6">
                {feature.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-[#64748B]">
                    <div className="w-1.5 h-1.5 bg-[var(--theme-primary)] rounded-full flex-shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-[#E2E8F0]">
              <button className="flex-1 sm:flex-none px-8 sm:px-12 sm:min-w-[180px] bg-[var(--theme-primary)] hover:bg-[var(--theme-dark)] text-white rounded-sm py-2.5 sm:py-3 font-bold text-[15px] sm:text-[16px] group flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:shadow-[rgba(var(--theme-primary-rgb),0.2)]">
                立即咨询
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              {isDesktop && (
                <button className="px-10 py-2.5 min-w-[160px] bg-transparent text-[#64748B] border border-[#E2E8F0] font-medium text-[16px] transition-colors rounded-sm hover:text-[#0F172A] hover:border-[rgba(var(--theme-primary-rgb),0.5)] hover:bg-[var(--theme-light)]">
                  了解详情
                </button>
              )}
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              "h-full w-full flex group p-4 sm:p-6",
              isDesktop ? "flex-col justify-between items-center py-10" : "flex-row items-center"
            )}
          >
            {isDesktop ? (
              <>
                <div className="flex flex-col items-center gap-6 mt-4">
                  <div className="p-3 bg-white/10 border border-white/20 rounded-sm transition-all duration-300 group-hover:bg-white group-hover:scale-110 shadow-sm">
                    <feature.icon className="w-6 h-6 text-white group-hover:text-[var(--theme-primary)] transition-colors" />
                  </div>

                  <div className="w-px h-12 bg-white/20 group-hover:h-16 transition-all duration-300" />
                </div>

                <div className="flex flex-col items-center text-center w-full mb-4">
                  <h3 className="font-bold text-[24px] lg:text-[28px] [writing-mode:vertical-rl] tracking-wide text-white/90 text-center group-hover:text-white transition-colors drop-shadow-sm">
                    {feature.title}
                  </h3>
                </div>
              </>
            ) : (
              <>
                <div className="p-2 bg-white/10 border border-white/20 mr-4 rounded-sm">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[18px] text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-white/80 mt-0.5">
                    {feature.summary}
                  </p>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-white/70" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

/**
 * 查看更多卡片组件
 * 提供跳转到更多功能列表的入口
 * @param {object} props 组件属性
 * @param {object} props.deviceType 设备类型状态
 */
const MoreCard = memo(function MoreCard({ deviceType }: { deviceType: ReturnType<typeof useDeviceType> }) {
  const { isDesktop } = deviceType

  return (
    <div
      className={clsx(
        "bg-white/50 border border-[#E2E8F0] flex items-center justify-center cursor-pointer transition-all duration-300 group overflow-hidden rounded-sm hover:border-[#0055ff] hover:shadow-md hover:shadow-blue-200/50 backdrop-blur-sm outline-none ring-0",
        isDesktop ? "w-[80px] h-[490px] self-start" : "w-full h-[64px] sm:h-[72px] mt-2 sm:mt-3"
      )}
    >
      <div className={clsx(
        "flex items-center text-[#64748B] group-hover:text-[#0055ff] transition-colors font-semibold",
        isDesktop ? "flex-col gap-8" : "flex-row gap-3 sm:gap-4 px-4 sm:px-6"
      )}>
        <span
          style={isDesktop ? { writingMode: 'vertical-rl' } : {}}
          className={clsx("text-[16px] tracking-[0.2em] uppercase", isDesktop ? "" : "tracking-normal text-[16px] flex-1")}
        >
          {isDesktop ? "查看更多" : "查看更多解决方案"}
        </span>
        <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#E2E8F0] bg-white flex items-center justify-center group-hover:bg-[#0055ff] group-hover:text-white transition-all rounded-full group-hover:shadow-md">
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  )
})

/**
 * 核心功能特性展示区块
 * 使用手风琴式布局展示主要产品特性，支持响应式交互
 * @returns {JSX.Element} 功能特性区块组件
 */
export function PrimaryFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const deviceType = useDeviceType()
  const { isDesktop } = deviceType
  const activeIndexRef = useRef(0)
  const hoverRafRef = useRef<number | null>(null)
  const pendingHoverIndexRef = useRef<number | null>(null)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const handleHover = useCallback((index: number) => {
    if (!isDesktop) return
    if (activeIndexRef.current === index) return
    if (pendingHoverIndexRef.current === index) return
    pendingHoverIndexRef.current = index
    if (hoverRafRef.current != null) return
    hoverRafRef.current = requestAnimationFrame(() => {
      hoverRafRef.current = null
      const nextIndex = pendingHoverIndexRef.current
      pendingHoverIndexRef.current = null
      if (nextIndex == null) return
      startTransition(() => {
        setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
      })
    })
  }, [isDesktop])

  const handleTabClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const nextIndex = Number(event.currentTarget.dataset.index)
    if (!Number.isFinite(nextIndex)) return
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex))
  }, [])

  useEffect(() => {
    return () => {
      if (hoverRafRef.current != null) cancelAnimationFrame(hoverRafRef.current)
    }
  }, [])

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-white to-[#eff6ff] py-12 sm:py-20 lg:py-32 overflow-hidden selection:bg-[#0055ff] selection:text-white"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[56px] font-bold text-[#0F172A] tracking-tight mb-3 sm:mb-4">
            灵活、稳定、安全的<span className="text-[#0055ff]">云端动力</span>
          </h2>
          <p className="text-[#64748B] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
            基于先进的自研架构，为您提供全方位的云端基础设施服务，助力业务快速实现数字化转型。
          </p>
        </div>

        <div className="flex justify-start mb-8 sm:mb-12">
          <div className="inline-flex border border-[#E2E8F0] bg-[#F8FAFC] overflow-x-auto no-scrollbar max-w-full rounded-sm">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                data-index={i}
                onClick={handleTabClick}
                className={clsx(
                  "flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] font-medium transition-all duration-300 whitespace-nowrap border-r border-[#E2E8F0] last:border-r-0 rounded-none",
                  activeIndex === i
                    ? "bg-white shadow-sm"
                    : "text-[#64748B] hover:text-[#0F172A] hover:bg-white/50"
                )}
                style={activeIndex === i ? { color: f.colors.primary } : {}}
              >
                <f.icon
                  className={clsx("w-4 h-4 sm:w-5 sm:h-5", activeIndex !== i && "text-[#94A3B8]")}
                  style={activeIndex === i ? { color: f.colors.primary } : {}}
                />
                {f.title}
              </button>
            ))}
          </div>
        </div>

        <div className={clsx(
          "flex w-full transition-all duration-500",
          isDesktop ? "flex-row items-start min-h-[490px]" : "flex-col px-0"
        )}>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              index={index}
              feature={feature}
              isSelected={activeIndex === index}
              onSelect={setActiveIndex}
              onHover={handleHover}
              deviceType={deviceType}
            />
          ))}

          <MoreCard deviceType={deviceType} />
        </div>
      </Container>
    </section>
  )
}
