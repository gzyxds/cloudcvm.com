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
      '在腾讯云上您可以在几分钟之内快速增加或删减CVM数量，以满足快速变化的业务需求。通过定义相关策略，您可以确保所使用的 CVM 实例数量在需求高峰期无缝扩展，保证程序的可用性。在需求平淡期自动回落，以节省成本。',
    icon: ArrowsPointingOutIcon,
  },
  {
    id: 'diverse-configuration',
    name: '多样化配置',
    description:
      'CVM 提供多种类型的实例、操作系统和软件包。各实例中的 CPU、内存、硬盘和带宽可以灵活调整，以满足您应用程序的资源需要。同时腾讯云市场提供第三方镜像及软件供您选择。',
    icon: CogIcon,
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description:
      'CVM 提供达99.975%的服务可用性和9个9的数据可靠性。三副本存储策略的云硬盘、成熟的网络虚拟技术和网卡绑定技术、T3级以上的数据中心等联合保证数据和服务的高可用性。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'simple-management',
    name: '管理简单',
    description:
      '用户拥有 CVM 的管理员账号，对 CVM 有完全的控制权，您可以使用腾讯云控制台、API 或 CLI 等工具登录到您的 CVM 实例，进行网络配置更改、重启等重要操作，这样管理 CVM 就像管理操作您的计算机一样简单方便。',
    icon: CommandLineIcon,
  },
  {
    id: 'secure-network',
    name: '安全的网络',
    description:
      'CVM 运行在一个逻辑隔离的私有网络里，通过网络访问控制列表（Access Control List）和安全组，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置，包括自定义网段划分、IP 地址和路由策略等。',
    icon: CloudIcon,
  },
  {
    id: 'comprehensive-protection',
    name: '全面防护',
    description:
      'CVM 提供免费的主机安全基础防护和基础DDoS防护能力，帮助企业构建服务器安全防护体系，解决当前服务器面临的主要网络安全风险，防止数据泄露，满足您的日常安全运营需求。',
    icon: LockClosedIcon,
  },
  {
    id: 'cost-effective',
    name: '费用低廉',
    description:
      'CVM 部署在云端，极大节省了您前期搭建基础网络设施的成本和后期的维护成本。CVM 实例支持按量付费和包月包年两种计费方式，您可以根据使用场景灵活选择计费方式。在按量付费的模式下，您只需要为实际使用的计算资源付费。',
    icon: CurrencyDollarIcon,
  },
  {
    id: 'service-integration',
    name: '服务集成',
    description:
      'CVM 与腾讯云的大部分业务都可以做到高度集成，例如对象存储 COS、私有网络 VPC 、云数据库 TencentDB 等，合力在计算、存储、网络传输方面为客户的业务提供完善的解决方案。',
    icon: PuzzlePieceIcon,
  },
  {
    id: 'flexible-deployment',
    name: '灵活部署',
    description:
      'CVM 支持在腾讯云控制台、API 或 CLI 等工具中创建和管理实例。您可以根据业务需求选择不同的实例类型、操作系统和软件包。',
    icon: CogIcon,
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
 * - 响应式网格布局（移动端1列，平板2列，桌面3列）
 * - 每个特性包含图标、标题和详细描述
 * - 使用 Heroicons 图标库
 * - 支持自定义标题和描述
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
      className={clsx('bg-white py-24 sm:py-32', className)}
      aria-label="产品特性展示"
    >
      <Container>
        {/* 标题区域 */}
        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-base leading-7 font-semibold text-blue-600">
            {subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        {/* 特性网格 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {productTraits.map((trait) => (
              <div
                key={trait.id}
                className="group flex flex-col transform overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-6"
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <trait.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-blue-600"
                    />
                  </div>
                  {trait.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
