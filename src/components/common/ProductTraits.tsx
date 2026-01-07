'use client'

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
}

/**
 * 云计算产品特性数据
 * 基于 Trait.tsx 文件中的产品特性文案
 */
const productTraits: ProductTrait[] = [
  {
    id: 'elastic-computing',
    name: '弹性计算',
    description:
      '在优刻云上您可以在几分钟之内快速增加或删减CVM数量，以满足快速变化的业务需求。通过定义相关策略，您可以确保所使用的 CVM 实例数量在需求高峰期无缝扩展，保证程序的可用性。在需求平淡期自动回落，以节省成本。',
    icon: ArrowsPointingOutIcon,
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description:
      'CVM 提供达99.975%的服务可用性和9个9的数据可靠性。三副本存储策略的云硬盘、成熟的网络虚拟技术和网卡绑定技术、T3级以上的数据中心等联合保证数据和服务的高可用性。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'secure-network',
    name: '安全的网络',
    description:
      'CVM 运行在一个逻辑隔离的私有网络里，通过网络访问控制列表（Access Control List）和安全组，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置，包括自定义网段划分、IP 地址和路由策略等。',
    icon: CloudIcon,
  },
  {
    id: 'service-integration',
    name: '服务集成',
    description:
      'CVM 与腾讯云的大部分业务都可以做到高度集成，例如对象存储 COS、私有网络 VPC 、云数据库 TencentDB 等，合力在计算、存储、网络传输方面为客户的业务提供完善的解决方案。',
    icon: PuzzlePieceIcon,
  },
  {
    id: 'diverse-config',
    name: '多样化配置',
    description:
      'CVM 提供多种实例类型、操作系统和软件包供您选择。各实例类型提供不同的计算、内存和存储功能。您可以根据应用程序的资源需求选择合适的实例类型，并对计算机拥有完全的控制权。',
    icon: CogIcon,
  },
  {
    id: 'easy-management',
    name: '管理简单',
    description:
      '您拥有 CVM 的管理员账号，对 CVM 有完全的控制权，您可以使用腾讯云控制台、API 或 CLI 等工具登录到您的 CVM 实例，进行重启、网络配置、软件安装等操作。',
    icon: CommandLineIcon,
  },
  {
    id: 'comprehensive-protection',
    name: '全面防护',
    description:
      '腾讯云提供免费的主机安全基础版，对暴力破解、木马文件、异地登录等可疑行为进行实时检测和告警。您还可以选购主机安全专业版/旗舰版，获得更全面的安全防护能力。',
    icon: LockClosedIcon,
  },
  {
    id: 'cost-effective',
    name: '费用低廉',
    description:
      'CVM 部署在云端，极大节省了您前期搭建基础网络设施的成本和后期的维护成本。CVM 提供按量计费、包年包月等多种计费模式，您可以根据业务需求选择最合适的计费模式，降低使用成本。',
    icon: CurrencyDollarIcon,
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
 * 产品特性展示组件
 *
 * 功能特点：
 * - 展示云计算产品的核心特性
 * - Bento Grid 布局（非对称网格，移动端1列，平板2列，桌面3列）
 * - Cloud UI 设计规范：Linear 风格、细边框、圆角(rounded-sm)
 * - 每个特性包含图标、标题和详细描述
 * - 使用 Heroicons 图标库
 * - 支持自定义标题和描述
 * - 仅支持 Light Mode (移除暗模式)
 *
 * @param className - 自定义类名
 * @param title - 主标题，默认为"产品特性"
 * @param subtitle - 副标题，默认为"云计算核心优势"
 * @param description - 描述文本，默认为产品特性介绍
 * @returns {JSX.Element} 产品特性展示组件
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
        'relative overflow-hidden bg-gradient-to-b from-[#eff6ff] to-[#dbeafe] py-24 sm:py-32',
        className
      )}
      aria-label="产品特性展示"
    >
      <Container className="relative">
        {/* 标题区域 */}
        <div className="mb-16 max-w-2xl text-left">
          <p className="font-mono text-sm font-semibold uppercase tracking-widest text-[#0055ff]">
            {subtitle}
          </p>
          <h2 className="mt-2 font-sans text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#64748B]">{description}</p>
        </div>

        {/* Bento Grid 特性网格 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[minmax(240px,1fr)]">
            {productTraits.map((trait) => (
              <div
                key={trait.id}
                className={clsx(
                  'group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300',
                  'border-[#E2E8F0] hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50'
                )}
              >
                {/* 背景装饰图标 */}
                <div className="pointer-events-none absolute -right-12 -bottom-12 opacity-[0.03] text-[#0F172A] group-hover:opacity-[0.05] transition-opacity">
                  <trait.icon className="h-56 w-56" />
                </div>

                <dt className="relative flex items-center gap-x-4 border-b border-[#E2E8F0] px-6 py-5 text-xl font-bold text-[#0F172A] bg-[#F8FAFC]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#0055ff] shadow-sm">
                    <trait.icon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </div>
                  {trait.name}
                </dt>
                <dd className="relative flex flex-auto flex-col px-6 py-6 text-sm sm:text-base leading-relaxed text-[#64748B]">
                  <p className="flex-auto">{trait.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 默认导出
 */
export default ProductTraits
