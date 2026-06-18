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
  ArrowRightIcon,
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
  /** 关键指标标签 */
  metricLabel?: string
  /** 关键指标值 */
  metricValue?: string
}

/**
 * 产品优势数据配置
 * 涵盖成本、交付、易用、稳定、硬件、安全、镜像、监控、内网九大维度
 */
const productAdvantages: ProductAdvantage[] = [
  {
    id: 'cost-effective',
    name: '成本低廉',
    description:
      '云服务器资源按使用量计费，较传统 IT 系统，大幅度缩减建设与维护成本。',
    icon: CurrencyDollarIcon,
    metricLabel: '计费模式',
    metricValue: '按量/包月',
  },
  {
    id: 'fast-delivery',
    name: '快速交付',
    description:
      '云服务器从订购到开通使用仅需数分钟时间，可快速交付到用户手中。',
    icon: ClockIcon,
    metricLabel: '开通耗时',
    metricValue: '< 3 min',
  },
  {
    id: 'easy-to-use',
    name: '便捷易用',
    description:
      '云服务器的所有操作在控制台可轻松查看并使用，操作指引与说明简洁易懂。',
    icon: ComputerDesktopIcon,
    metricLabel: '管理入口',
    metricValue: 'Web/API/CLI',
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description:
      '实力认证，高达 95% 的数据持久性，更有故障时长赔偿。',
    icon: ShieldCheckIcon,
    metricLabel: '数据持久性',
    metricValue: '95%',
  },
  {
    id: 'powerful-hardware',
    name: '至强硬件',
    description:
      '强悍硬件配置结合前沿处理技术，轻松支撑业务负载。',
    icon: CpuChipIcon,
    metricLabel: 'CPU 代际',
    metricValue: '最新代',
  },
  {
    id: 'security-strategy',
    name: '安全策略',
    description:
      '采用全智能调度技术，分钟级响应速度应对高要求的场景。',
    icon: LockClosedIcon,
    metricLabel: '响应速度',
    metricValue: '分钟级',
  },
  {
    id: 'rich-images',
    name: '丰富镜像 一键部署',
    description:
      '丰富的公共镜像与市场镜像满足您各类业务需求。',
    icon: CloudArrowUpIcon,
    metricLabel: '镜像数量',
    metricValue: '100+',
  },
  {
    id: 'real-time-monitoring',
    name: '实时监控',
    description:
      '支持实时查看云服务器资源使用详情，随时了解自己业务运行情况。',
    icon: ChartBarIcon,
    metricLabel: '监控粒度',
    metricValue: '分钟级',
  },
  {
    id: 'internal-network',
    name: '内网互通',
    description:
      '支持同区域内网互通，高效调用名下多台云服务资源。',
    icon: ServerStackIcon,
    metricLabel: '网络延迟',
    metricValue: '< 1ms',
  },
]

/**
 * Bento Grid 布局索引配置
 * 定义每个卡片在 lg 断点的跨列数，形成非对称网格
 */
const bentoLayoutByIndex: Array<{ wrapper: string }> = [
  { wrapper: 'lg:col-span-2' },
  { wrapper: 'lg:col-span-1' },
  { wrapper: 'lg:col-span-1' },
  { wrapper: 'lg:col-span-2' },
  { wrapper: 'lg:col-span-1' },
  { wrapper: 'lg:col-span-1' },
  { wrapper: 'lg:col-span-1' },
  { wrapper: 'lg:col-span-2' },
  { wrapper: 'lg:col-span-1' },
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
}

/**
 * 产品优势展示组件 — 现代 SaaS 极简风格
 *
 * 设计参考 Linear / Vercel / Stripe：
 * - 专业蓝灰配色 + 高对比中性色
 * - Bento Grid 非对称网格布局（2-1-1-2 节奏）
 * - 无边框卡片 + 微阴影层次 + 微圆角(rounded-md)
 * - 图标渐变底色 + 度量标签
 * - 悬停上浮 + 阴影加深 + 品牌色顶边高亮
 * - 响应式：移动端 1 列 → 平板 2 列 → 桌面 3 列 Bento
 * - 可访问性：语义化 dl/dt/dd 结构
 *
 * @param title - 标题
 * @param subtitle - 副标题
 * @param description - 描述
 * @param className - 自定义类名
 * @param showBackground - 是否显示背景色
 * @returns {JSX.Element} 企业级产品优势展示组件
 */
export function Superiority({
  title = '产品优势',
  subtitle = 'WHY CHOOSE US',
  description = '云服务器为您提供全方位的技术优势，助力业务快速发展',
  className,
  showBackground = true,
}: SuperiorityProps) {
  return (
    <section
      className={clsx(
        'relative overflow-hidden py-20 sm:py-28',
        showBackground && 'bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={showBackground ? { backgroundImage: 'url("/images/background/background-3.webp")' } : undefined}
      aria-label="产品优势展示"
    >
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#0055ff]/[0.03] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0055ff]/[0.02] blur-3xl" />
      </div>

      <Container className="relative">
        {/* ===== 标题区域 ===== */}
        <div className="text-center">
          {/* 副标题徽章 */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
            <span className="text-sm font-medium text-[#0055ff] tracking-wide">
              {subtitle}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
            {description}
          </p>
        </div>

        {/* ===== Bento Grid 优势卡片网格 ===== */}
        <div className="mt-14">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(200px,auto)]">
            {productAdvantages.map((advantage, index) => {
              const bentoLayout = bentoLayoutByIndex[index]

              return (
                <div
                  key={advantage.id}
                  className={clsx(
                    'group relative flex flex-col rounded-md bg-white transition-all duration-300',
                    'shadow-[0_0_0_1px_rgba(15,23,42,0.04),0_1px_3px_rgba(15,23,42,0.03)]',
                    'hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(0,85,255,0.1),0_8px_24px_rgba(15,23,42,0.06)]',
                    'before:absolute before:inset-x-3 before:top-0 before:h-px before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-[#0055ff]/0 before:to-transparent before:transition-colors before:duration-300',
                    'hover:before:via-[#0055ff]/30',
                    bentoLayout?.wrapper,
                  )}
                  role="article"
                  aria-label={`${advantage.name}${advantage.metricValue ? ` — ${advantage.metricLabel}: ${advantage.metricValue}` : ''}`}
                >
                  {/* 卡片内容 */}
                  <div className="flex flex-auto flex-col px-5 py-5">
                    {/* 图标 */}
                    <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/5 text-[#0055ff] transition-all duration-300 group-hover:from-[#0055ff]/15 group-hover:to-[#0066ff]/10 group-hover:scale-110">
                      <advantage.icon aria-hidden="true" className="h-5 w-5" />
                    </div>

                    {/* 标题 */}
                    <dt className="text-sm font-semibold text-[#0F172A]">
                      {advantage.name}
                    </dt>

                    {/* 描述 */}
                    <dd className="mt-1.5 flex-auto text-sm leading-relaxed text-[#64748B]">
                      {advantage.description}
                    </dd>

                    {/* 底部：指标 + 操作 */}
                    <div className="mt-4 flex items-center justify-between">
                      {advantage.metricLabel && advantage.metricValue && (
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F5F9] px-2 py-1 text-xs font-mono font-semibold text-[#0055ff]">
                          {advantage.metricValue}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#94A3B8] transition-colors duration-200 group-hover:text-[#0055ff] cursor-pointer">
                        了解详情
                        <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </dl>
        </div>

        {/* ===== 底部引导 ===== */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#94A3B8]">
            以上优势均源自优刻云基础设施与技术沉淀，持续为您提供稳定可靠的云服务
          </p>
        </div>
      </Container>
    </section>
  )
}

/**
 * 默认导出产品优势组件
 */
export default Superiority
