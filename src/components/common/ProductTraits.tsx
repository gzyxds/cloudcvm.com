import clsx from 'clsx'
import {
  ArrowsPointingOutIcon,
  CogIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CloudIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  ServerStackIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品特性数据类型定义
 */
interface ProductTrait {
  id: string
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  /** 关键指标标签 */
  metricLabel: string
  /** 关键指标值 */
  metricValue: string
}

/**
 * 云计算产品特性数据
 */
const productTraits: ProductTrait[] = [
  {
    id: 'elastic-computing',
    name: '弹性计算',
    description:
      '在优刻云上您可以在几分钟之内快速增加或删减 CVM 数量，以满足快速变化的业务需求。通过定义相关策略，您可以确保所使用的 CVM 实例数量在需求高峰期无缝扩展，保证程序的可用性。在需求平淡期自动回落，以节省成本。',
    icon: ArrowsPointingOutIcon,
    metricLabel: '扩容速度',
    metricValue: '< 3 min',
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description:
      'CVM 提供达 99.975% 的服务可用性和 9 个 9 的数据可靠性。三副本存储策略的云硬盘、成熟的网络虚拟技术和网卡绑定技术、T3 级以上的数据中心等联合保证数据和服务的高可用性。',
    icon: ShieldCheckIcon,
    metricLabel: '服务可用性',
    metricValue: '99.975%',
  },
  {
    id: 'secure-network',
    name: '安全的网络',
    description:
      'CVM 运行在一个逻辑隔离的私有网络里，通过网络访问控制列表（Access Control List）和安全组，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置，包括自定义网段划分、IP 地址和路由策略等。',
    icon: CloudIcon,
    metricLabel: '隔离级别',
    metricValue: 'VPC',
  },
  {
    id: 'service-integration',
    name: '服务集成',
    description:
      'CVM 与腾讯云的大部分业务都可以做到高度集成，例如对象存储 COS、私有网络 VPC、云数据库 TencentDB 等，合力在计算、存储、网络传输方面为客户的业务提供完善的解决方案。',
    icon: PuzzlePieceIcon,
    metricLabel: '集成服务数',
    metricValue: '200+',
  },
  {
    id: 'diverse-config',
    name: '多样化配置',
    description:
      'CVM 提供多种实例类型、操作系统和软件包供您选择。各实例类型提供不同的计算、内存和存储功能。您可以根据应用程序的资源需求选择合适的实例类型，并对计算机拥有完全的控制权。',
    icon: CogIcon,
    metricLabel: '实例类型',
    metricValue: '50+',
  },
  {
    id: 'easy-management',
    name: '管理简单',
    description:
      '您拥有 CVM 的管理员账号，对 CVM 有完全的控制权，您可以使用腾讯云控制台、API 或 CLI 等工具登录到您的 CVM 实例，进行重启、网络配置、软件安装等操作。',
    icon: CommandLineIcon,
    metricLabel: '管理方式',
    metricValue: '3 种',
  },
  {
    id: 'comprehensive-protection',
    name: '全面防护',
    description:
      '腾讯云提供免费的主机安全基础版，对暴力破解、木马文件、异地登录等可疑行为进行实时检测和告警。您还可以选购主机安全专业版/旗舰版，获得更全面的安全防护能力。',
    icon: LockClosedIcon,
    metricLabel: '安全认证',
    metricValue: 'ISO 27001',
  },
  {
    id: 'cost-effective',
    name: '费用低廉',
    description:
      'CVM 部署在云端，极大节省了您前期搭建基础网络设施的成本和后期的维护成本。CVM 提供按量计费、包年包月等多种计费模式，您可以根据业务需求选择最合适的计费模式，降低使用成本。',
    icon: CurrencyDollarIcon,
    metricLabel: '计费模式',
    metricValue: '4 种',
  },
]

/**
 * 平台关键指标数据
 * 模拟云服务控制台顶部的概览统计
 */
const platformMetrics = [
  {
    label: '全球可用区',
    value: '68',
    icon: GlobeAltIcon,
  },
  {
    label: '服务 SLA',
    value: '99.975%',
    icon: CheckBadgeIcon,
  },
  {
    label: '节点覆盖',
    value: '2,800+',
    icon: ServerStackIcon,
  },
  {
    label: '平均响应',
    value: '< 50ms',
    icon: ClockIcon,
  },
]

/**
 * 产品特性展示组件属性接口
 */
interface ProductTraitsProps {
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: string
  /** 副标题 */
  subtitle?: string
  /** 描述文本 */
  description?: string
}

/**
 * 产品特性展示组件 — 企业级云计算控制台风格
 *
 * 设计参考 AWS / 阿里云 / 腾讯云控制台语言：
 * - 顶部平台指标概览条（类比控制台 Dashboard 资源统计）
 * - Bento Grid 资源卡片（带状态指示器、度量标签、操作入口）
 * - 专业蓝色主色调 + 高对比中性色
 * - 细边框、微阴影、适度圆角
 * - 响应式布局：移动端 1 列 → 平板 2 列 → 桌面 4 列
 * - 可访问性：语义化标签、ARIA 属性
 *
 * @param className - 自定义类名
 * @param title - 主标题，默认为"产品特性"
 * @param subtitle - 副标题，默认为"云计算核心优势"
 * @param description - 描述文本，默认为产品特性介绍
 * @returns {JSX.Element} 企业级产品特性展示组件
 */
export function ProductTraits({
  className,
  title = '产品特性',
  subtitle = '云计算核心优势',
  description = '优刻云计算为您提供弹性、安全、高性能的云端计算解决方案，助力企业数字化转型',
}: ProductTraitsProps) {
  return (
    <section
      className={clsx(
        'relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-28',
        className
      )}
      aria-label="产品特性展示"
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff] animate-pulse" />
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

        {/* ===== 平台指标概览条（控制台风格） ===== */}
        <div className="mt-14">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {platformMetrics.map((metric) => (
              <div
                key={metric.label}
                className="group flex flex-col items-center rounded-xl border border-[#E2E8F0] bg-white px-4 py-5 text-center transition-all duration-300 hover:border-[#0055ff]/20 hover:shadow-sm"
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff] transition-colors group-hover:bg-[#0055ff] group-hover:text-white">
                  <metric.icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-lg font-bold text-[#0F172A] sm:text-xl font-mono tracking-tight">
                  {metric.value}
                </span>
                <span className="mt-1 text-xs text-[#64748B] sm:text-sm">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 产品特性卡片网格 ===== */}
        <div className="mt-14">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productTraits.map((trait) => (
              <div
                key={trait.id}
                className={clsx(
                  'group relative flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300',
                  'hover:shadow-md hover:shadow-slate-200/60',
                  'focus-within:shadow-md focus-within:shadow-[#0055ff]/5'
                )}
                tabIndex={0}
                role="article"
                aria-label={`${trait.name} — ${trait.metricLabel}: ${trait.metricValue}`}
              >
                {/* 卡片头部 */}
                <dt className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
                  {/* 特性图标 */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff] transition-colors group-hover:border-[#0055ff]/30 group-hover:bg-[#eff6ff]">
                    <trait.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-base font-semibold text-[#0F172A] truncate">
                      {trait.name}
                    </span>
                  </div>
                  {/* 状态指示器 */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                    </span>
                    <span className="text-xs font-medium text-[#10B981]">
                      Active
                    </span>
                  </div>
                </dt>

                {/* 卡片主体 — 描述 */}
                <dd className="flex flex-auto flex-col px-5 py-4">
                  <p className="flex-auto text-sm leading-relaxed text-[#64748B]">
                    {trait.description}
                  </p>
                </dd>

                {/* 卡片底部 — 指标与操作 */}
                <div className="flex items-center justify-between border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
                  {/* 关键指标 */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#94A3B8]">
                      {trait.metricLabel}
                    </span>
                    <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-mono font-semibold text-[#0055ff]">
                      {trait.metricValue}
                    </span>
                  </div>
                  {/* 操作引导 */}
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#94A3B8] transition-colors group-hover:text-[#0055ff] cursor-pointer">
                    了解详情
                    <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* ===== 底部 CTA 条 ===== */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#94A3B8]">
            以上特性均已在优刻云控制台开放使用，即刻体验企业级云服务
          </p>
        </div>
      </Container>
    </section>
  )
}

/**
 * 默认导出
 */
export default ProductTraits
