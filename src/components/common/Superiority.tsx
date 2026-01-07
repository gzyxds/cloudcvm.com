'use client'

import clsx from 'clsx'
import {
  CurrencyDollarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品优势数据类型定义
 */
interface ProductAdvantage {
  id: string
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * 产品优势数据配置
 * 基于云服务器的六大核心优势
 */
const productAdvantages: ProductAdvantage[] = [
  {
    id: 'cost-effective',
    name: '成本低廉',
    description:
      '云服务器资源按使用量计费，较传统IT系统，大幅度缩减建设与维护成本。',
    icon: CurrencyDollarIcon,
  },
  {
    id: 'fast-delivery',
    name: '快速交付',
    description:
      '云服务器从订购到开通使用仅需数分钟时间，可快速交付到用户手中。',
    icon: ClockIcon,
  },
  {
    id: 'easy-to-use',
    name: '便捷易用',
    description:
      '云服务器的所有操作在控制台可轻松查看并使用，操作指引与说明简洁易懂。',
    icon: ComputerDesktopIcon,
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description: '实力认证，高达95%的数据持久性，更有故障时长赔偿。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'powerful-hardware',
    name: '至强硬件',
    description: '强悍硬件配置结合前沿处理技术，轻松支撑业务负载',
    icon: CpuChipIcon,
  },
  {
    id: 'security-strategy',
    name: '安全策略',
    description: '采用全智能调度技术，分钟级响应速度应对高要求的场景',
    icon: LockClosedIcon,
  },
  {
    id: 'rich-images',
    name: '丰富镜像 一键部署',
    description: '丰富的公共镜像与市场镜像满足您各类业务需求',
    icon: CloudArrowUpIcon,
  },
  {
    id: 'real-time-monitoring',
    name: '资源使用 实时监控',
    description: '支持实时查看云服务器资源使用详情，随时了解自己业务运行情况',
    icon: ChartBarIcon,
  },
  {
    id: 'internal-network',
    name: '多台实例 内网互通',
    description: '支持同区域内网互通，高效调用名下多台云服务资源',
    icon: ServerStackIcon,
  },
]

/**
 * 产品优势组件属性接口
 */
interface SuperiorityProps {
  /** 自定义标题 */
  title?: string
  /** 自定义副标题 */
  subtitle?: string
  /** 自定义描述 */
  description?: string
  /** 自定义CSS类名 */
  className?: string
  /** 是否显示背景 */
  showBackground?: boolean
  /** 网格列数配置 */
  gridCols?: {
    base?: string
    sm?: string
    md?: string
    lg?: string
  }
}

/**
 * 产品优势展示组件
 *
 * 功能特点：
 * - 响应式 Bento Grid 布局，支持移动端、平板和桌面端适配
 * - Cloud UI 设计规范：Linear 风格、细边框、圆角(rounded-sm)
 * - 仅支持 Light Mode (移除暗模式)
 * - 使用 Heroicons 图标库提供视觉化图标
 * - 支持自定义标题、描述和样式
 * - 展示云服务器的核心优势
 *
 * @param title - 组件标题，默认为"产品优势"
 * @param subtitle - 组件副标题
 * @param description - 组件描述
 * @param className - 自定义CSS类名
 * @param showBackground - 是否显示背景色，默认为true
 * @param gridCols - 网格列数配置
 * @returns {JSX.Element} 产品优势展示组件
 */
export function Superiority({
  title = '产品优势',
  subtitle,
  description = '云服务器为您提供全方位的技术优势，助力业务快速发展',
  className,
  showBackground = true,
  gridCols = {
    base: 'grid-cols-1',
    sm: 'grid-cols-2',
    md: 'grid-cols-3',
    lg: 'grid-cols-3',
  },
}: SuperiorityProps = {}) {
  const bentoLayoutByIndex: Array<{
    wrapper: string
  }> = [
    // Row 1: [Big 2x1] [Small 1x1]
    { wrapper: 'lg:col-span-2 lg:row-span-1' },
    { wrapper: 'lg:col-span-1 lg:row-span-1' },

    // Row 2: [Small 1x1] [Big 2x1]
    { wrapper: 'lg:col-span-1 lg:row-span-1' },
    { wrapper: 'lg:col-span-2 lg:row-span-1' },

    // Row 3: [Small 1x1] [Small 1x1] [Small 1x1]
    { wrapper: 'lg:col-span-1 lg:row-span-1' },
    { wrapper: 'lg:col-span-1 lg:row-span-1' },
    { wrapper: 'lg:col-span-1 lg:row-span-1' },

    // Row 4: [Big 2x1] [Small 1x1]
    { wrapper: 'lg:col-span-2 lg:row-span-1' },
    { wrapper: 'lg:col-span-1 lg:row-span-1' },
  ]

  return (
    <section
      className={clsx(
        'relative overflow-hidden py-16 sm:py-20 lg:py-24',
        showBackground && 'bg-white',
        className,
      )}
    >
      <Container className="relative">
        {/* 标题区域 */}
        <div className="mx-auto max-w-4xl text-center">
          {subtitle && (
            <h2 className="text-base font-semibold text-[#0055ff] tracking-wide uppercase">
              {subtitle}
            </h2>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-balance font-sans text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl leading-[1.1]">
            {title}
          </p>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-xl text-[#64748B] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 产品优势网格 */}
        <div className="mx-auto mt-10 max-w-2xl sm:mt-12 lg:max-w-none">
          <dl
            className={clsx(
              'grid gap-5 lg:grid-flow-dense lg:auto-rows-[minmax(180px,1fr)]',
              gridCols.base,
              gridCols.sm && `sm:${gridCols.sm}`,
              gridCols.md && `md:${gridCols.md}`,
              gridCols.lg && `lg:${gridCols.lg}`,
            )}
          >
            {productAdvantages.map((advantage, index) => {
              const bentoLayout = bentoLayoutByIndex[index]

              return (
              <div
                key={advantage.id}
                className={clsx(
                  'group relative h-full',
                  bentoLayout?.wrapper,
                )}
              >
                <div
                  className={clsx(
                    'absolute inset-px rounded-xl bg-white transition-all duration-300 group-hover:bg-[#eff6ff]/30 group-hover:shadow-lg group-hover:shadow-slate-200/50',
                  )}
                />
                <div
                  className={clsx(
                    'relative flex h-full flex-col overflow-hidden rounded-xl p-5 sm:p-6',
                  )}
                >
                  <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-[0.03] text-[#0F172A] group-hover:opacity-[0.05] transition-opacity">
                    <advantage.icon className="h-40 w-40 sm:h-48 sm:w-48" />
                  </div>

                  <dt className="relative flex items-center gap-x-4 text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    <div className="mr-0 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#eff6ff] text-[#0055ff] flex-shrink-0">
                      <advantage.icon
                        aria-hidden="true"
                        className="h-6 w-6 sm:h-7 sm:w-7"
                      />
                    </div>
                    {advantage.name}
                  </dt>
                  <dd className="relative mt-3 sm:mt-4 flex flex-auto flex-col text-base sm:text-lg leading-relaxed text-[#64748B]">
                    <p className="flex-auto">{advantage.description}</p>
                  </dd>
                </div>
                <div
                  className={clsx(
                    'pointer-events-none absolute inset-px rounded-xl border border-[#E2E8F0] transition-colors duration-300 group-hover:border-[#0055ff]/30',
                  )}
                />
              </div>
              )
            })}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 默认导出产品优势组件
 */
export default Superiority
