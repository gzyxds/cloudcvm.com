/**
 * 电商云页面
 * 提供电商云服务的展示、功能介绍和产品选择
 */

// 图标导入
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'

// Next.js 组件
import type { Metadata } from 'next'

// 布局组件
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * 电商云页面的元数据配置
 * 用于社媒运营和社交媒体分享
 */
export const metadata: Metadata = {
  title: '电商云_电商vps_电商云主机_跨境电商云服务器_优刻云',
  description: '由优刻云打造的跨境电商专用云主机，专为跨境卖家提供纯净静态IP，使用环境完全隔离，有效解决跨境电商多店铺运营的防关联难题，安全、快速、有保障。平台提供30多个海内外线路，将各个电商平台的使用场景一网打尽',
  keywords: ['电商云,电商vps,电商云主机,跨境电商云服务器'],
  openGraph: {
    title: '电商云_电商vps_电商云主机_跨境电商云服务器_优刻云',
    description: '由优刻云打造的跨境电商专用云主机，专为跨境卖家提供纯净静态IP，使用环境完全隔离，有效解决跨境电商多店铺运营的防关联难题，安全、快速、有保障。平台提供30多个海内外线路，将各个电商平台的使用场景一网打尽',
    type: 'website',
  },
}

/**
 * 主要特性数据
 * 展示电商云的核心功能和优势
 */
const primaryFeatures = [
  {
    name: '纯净公网IP',
    description: '提供固定、独立纯净公网IP，有效防关联，确保账号注册、运营安全。',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62',
    icon: BoltIcon,
  },
  {
    name: '海外专线加速',
    description: '免费赠送加速IP，专线加速，告别卡顿，自建高质量全球节点，出海加速，拒绝卡顿。',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62',
    icon: UsersIcon,
  },
  {
    name: '指纹浏览器',
    description: '内置跨境指纹浏览器，安全，更近一步，免费提供指纹环境。',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62',
    icon: CalendarDaysIcon,
  },
]

/**
 * 次要特性数据
 * 展示电商云的扩展功能和技术优势
 */
const secondaryFeatures = [
  {
    name: '安全隔离',
    description: '每个云主机都可以独立运行，不会与其他云主机共享资源，从而避免了因其他网站被封禁而影响自己网站的问题。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '全球覆盖',
    description: '电商云提供全球范围的服务覆盖，您可以轻松地选择全球各地的服务器节点，覆盖亚太、欧美、东南亚等地域。',
    icon: LockClosedIcon,
  },
  {
    name: '灵活扩展',
    description: '电商云支持按需升级和降级，可以根据实际需求动态调整配置，提高了云主机的灵活性和适应性。',
    icon: ArrowPathIcon,
  },
  {
    name: '统一管理',
    description: '电商云提供多云平台的统一管理，企业可以更加灵活地调配云资源，满足业务需求。',
    icon: FingerPrintIcon,
  },
  {
    name: '店铺协同管理',
    description: '高效的团队协同管理，多团队多角色权限灵活配置，全面提高团队运营效率50%。',
    icon: Cog6ToothIcon,
  },
  {
    name: '网络流畅',
    description: '针对电商场景，优化网络下行带宽，访问电商平台更流畅。',
    icon: ServerIcon,
  },
]

/**
 * 产品标签类型枚举
 * 定义产品卡片的标签样式和类型
 */
type ProductBadgeType = 'recommended' | 'popular' | 'overseas' | 'europe'

/**
 * 产品规格接口
 * 定义服务器配置的详细规格
 */
interface ProductSpecification {
  cpu: string
  memory: string
  storage: string
  bandwidth: string
}

/**
 * 产品接口定义
 * 使用TypeScript严格类型定义产品数据结构
 */
interface EcommerceProduct {
  readonly id: string
  name: string
  description: string
  price: number
  currency: '¥' | '$' | '€'
  period: 'month' | 'year'
  badge: {
    text: string
    type: ProductBadgeType
  }
  specifications: ProductSpecification
  features: readonly string[]
  isAvailable: boolean
  region: string
  /**
   * 商品购买链接
   * 用于跳转到商品购买页面
   */
  purchaseLink: string
}

/**
 * 电商云产品数据
 * 使用现代TypeScript最佳实践定义的产品列表
 */
const ecommerceProducts: readonly EcommerceProduct[] = [
  {
    id: '1',
    name: '美国住宅IP',
    description: '港/日/泰/菲/英/德/美/印等',
    price: 55,
    currency: '¥',
    period: 'month',
    badge: {
      text: '入门推荐',
      type: 'recommended'
    },
    specifications: {
      cpu: '1核 CPU',
      memory: '1GB 内存',
      storage: '40GB SSD 硬盘',
      bandwidth: '100Mbps 带宽'
    },
    features: ['1核 CPU', '1GB 内存', '40GB SSD 硬盘', '100Mbps 带宽'],
    isAvailable: true,
    region: 'US',
    purchaseLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62'
  },
  {
    id: '2',
    name: '香港双ISP 家庭带宽',
    description: '港/日/泰/菲/英/德/美/印等',
    price: 35,
    currency: '¥',
    period: 'month',
    badge: {
      text: '热门选择',
      type: 'popular'
    },
    specifications: {
      cpu: '1核 CPU',
      memory: '0.5GB 内存',
      storage: '10GB SSD 硬盘',
      bandwidth: '1000Mbps 带宽'
    },
    features: ['1核 CPU', '0.5GB 内存', '10GB SSD 硬盘', '1000Mbps 带宽', '1个 IP'],
    isAvailable: true,
    region: 'HK',
    purchaseLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62'
  },
  {
    id: '3',
    name: '台湾双ISP 家庭带宽',
    description: '港/日/泰/菲/英/德/美/印等',
    price: 37,
    currency: '¥',
    period: 'month',
    badge: {
      text: '海外专线',
      type: 'overseas'
    },
    specifications: {
      cpu: '1核 CPU',
      memory: '1GB 内存',
      storage: '10GB SSD 硬盘',
      bandwidth: '1000Mbps 带宽'
    },
    features: ['1核 CPU', '1GB 内存', '10GB SSD 硬盘', '1000Mbps 带宽', '1个 IP'],
    isAvailable: true,
    region: 'TW',
    purchaseLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62'
  },
  {
    id: '4',
    name: '马来西亚双ISP',
    description: '港/日/泰/菲/英/德/美/印等',
    price: 35,
    currency: '¥',
    period: 'month',
    badge: {
      text: '海外专线',
      type: 'overseas'
    },
    specifications: {
      cpu: '1核 CPU',
      memory: '0.5GB 内存',
      storage: '10GB SSD 硬盘',
      bandwidth: '1000Mbps 带宽'
    },
    features: ['1核 CPU', '0.5GB 内存', '10GB SSD 硬盘', '1000Mbps 带宽', '1个 IP'],
    isAvailable: true,
    region: 'MY',
    purchaseLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62'
  }
] as const

/**
 * 获取产品标签样式的工具函数
 * 根据标签类型返回对应的CSS类名
 */
const getBadgeStyles = (type: ProductBadgeType): string => {
  const badgeStyles: Record<ProductBadgeType, string> = {
    recommended: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800',
    popular: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    overseas: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    europe: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800'
  }
  return badgeStyles[type]
}

/**
 * 统计数据接口
 * 定义统计数据的类型结构
 */
interface StatisticItem {
  readonly id: number
  name: string
  value: string
}

/**
 * 统计数据
 * 展示电商云的业务规模和效果
 */
const stats: readonly StatisticItem[] = [
  { id: 1, name: '跨境安全纯净IP', value: '100,000+' },
  { id: 2, name: '全球城市线路数量', value: '200+' },
  { id: 3, name: '电商平台支持', value: '100+' },
  { id: 4, name: '团队运营效率提升', value: '50%' },
] as const


/**
 * 电商云页面组件
 * 展示电商云平台的核心功能、特性和统计数据
 * @returns 渲染的电商云页面
 */
export default function EcommercePage() {
  return (
    <div className="bg-white">
      {/* 页面头部导航 */}
      <Header />

      <main>
        {/* 英雄区块 - 展示产品主要价值主张 */}
        <section className="relative isolate overflow-hidden bg-white pt-20 pb-16 sm:py-20 md:py-24 lg:py-32">
          {/* 背景网格图案 - Simplified */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          <Container className="relative z-10">
            <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
              {/* 左侧内容区 */}
              <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
                {/* 品牌标识 */}
                <div className="inline-flex items-center border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-[#64748B] sm:px-4 sm:text-sm rounded-sm">
                  <span className="mr-2 font-mono text-[#0055ff]">NEW</span>
                  <span className="h-3 w-px bg-[#E2E8F0] mx-2"></span>
                  <span>全新电商云服务上线</span>
                  <ChevronRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </div>

                {/* 主标题 */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="text-[#0055ff]">
                      电商云
                    </span>
                    <br />
                    助力跨境电商业务
                  </h1>
                  <p className="mx-auto max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg md:text-xl lg:mx-0 lg:leading-8">
                    IP资源采购自各地优质本土运营商，一站式满足TK直播引流、海外应用访问、社媒养号等多样化业务需求。
                  </p>
                  <p className="mx-auto max-w-xl text-sm leading-6 text-[#94A3B8] sm:text-base lg:mx-0 lg:leading-7 font-mono">
                    &gt; 地域分布全球，提供固定、独立的纯净公网IP
                  </p>
                </div>

                {/* 特性标签 */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                  <a
                    href="#features"
                    className="border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition-all hover:border-[#0055ff] hover:text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm rounded-sm"
                  >
                    全球覆盖
                  </a>
                  <a
                    href="#security"
                    className="border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition-all hover:border-[#0055ff] hover:text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm rounded-sm"
                  >
                    安全隔离
                  </a>
                  <a
                    href="#management"
                    className="border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition-all hover:border-[#0055ff] hover:text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm rounded-sm"
                  >
                    统一管理
                  </a>
                  <a
                    href="#scaling"
                    className="border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#64748B] transition-all hover:border-[#0055ff] hover:text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm rounded-sm"
                  >
                    灵活扩展
                  </a>
                </div>

                {/* CTA按钮组 */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                  <a
                    href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62"
                    className="group inline-flex w-full items-center justify-center bg-[#0055ff] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0043cc] sm:w-auto rounded-sm shadow-sm hover:shadow-md"
                  >
                    <span>立即购买</span>
                  </a>
                  <a
                    href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62"
                    className="group inline-flex w-full items-center justify-center border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0055ff] hover:border-[#0055ff]/30 sm:w-auto rounded-sm"
                  >
                    <span>联系我们</span>
                    <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* 右侧展示区 - 现代化电商云仪表板预览 */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative border border-[#E2E8F0] bg-white transition-all duration-500 rounded-sm shadow-xl shadow-slate-200/50">
                  {/* 窗口控制栏 */}
                  <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 bg-[#CBD5E1]"></div>
                        <div className="h-3 w-3 bg-[#CBD5E1]"></div>
                        <div className="h-3 w-3 bg-[#CBD5E1]"></div>
                      </div>
                      <div className="text-xs font-mono text-[#94A3B8]">
                        dashboard.cloudcvm.com
                      </div>
                      <div className="w-6"></div>
                    </div>
                  </div>

                  {/* 仪表板内容 */}
                  <div className="p-6">
                    {/* 顶部状态栏 */}
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="border border-green-200 bg-green-50/50 p-3 text-center rounded-sm">
                        <div className="text-lg font-bold text-green-700 font-mono">12</div>
                        <div className="text-xs text-green-600">在线服务器</div>
                      </div>
                      <div className="border border-blue-200 bg-blue-50/50 p-3 text-center rounded-sm">
                        <div className="text-lg font-bold text-blue-700 font-mono">8</div>
                        <div className="text-xs text-blue-600">活跃店铺</div>
                      </div>
                    </div>

                    {/* 地域分布 */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium text-[#0F172A]">地域分布</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#64748B] font-mono">US-EAST</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 bg-[#F1F5F9] rounded-sm">
                              <div className="h-1.5 w-9 bg-[#0055ff] rounded-sm"></div>
                            </div>
                            <span className="text-xs text-[#0F172A] font-mono">75%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#64748B] font-mono">EUROPE</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 bg-[#F1F5F9] rounded-sm">
                              <div className="h-1.5 w-6 bg-green-600 rounded-sm"></div>
                            </div>
                            <span className="text-xs text-[#0F172A] font-mono">50%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#64748B] font-mono">APAC</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 bg-[#F1F5F9] rounded-sm">
                              <div className="h-1.5 w-7 bg-blue-600 rounded-sm"></div>
                            </div>
                            <span className="text-xs text-[#0F172A] font-mono">60%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 实时监控 */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium text-[#0F172A]">实时监控</h3>
                      <div className="h-16 border border-[#E2E8F0] bg-[#F8FAFC] p-2 rounded-sm">
                        <div className="flex h-full items-end justify-between gap-1">
                          {[60, 80, 40, 90, 70, 50, 85, 65].map((h, i) => (
                            <div key={i} className="w-1 bg-[#0055ff] rounded-sm" style={{height: `${h}%`}}></div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-[#94A3B8] font-mono">
                        <span>CPU</span>
                        <span>MEM</span>
                        <span>NET</span>
                      </div>
                    </div>

                    {/* 快速操作按钮 */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-[#0055ff] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#0043cc] rounded-sm">
                        新建实例
                      </button>
                      <button className="flex-1 border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0055ff] rounded-sm">
                        查看详情
                      </button>
                    </div>
                  </div>

                  {/* 底部状态栏 */}
                  <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] p-3">
                    <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono">
                      <span className="flex items-center gap-1">
                        <span className="block h-2 w-2 bg-green-500 rounded-full"></span>
                        CONNECTED
                      </span>
                      <span>v2.1.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 商品模块 */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-[#0055ff]">热销产品</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              电商云服务器推荐
            </p>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              赋能服务商，IP资源采购自各地优质本土运营商，一站式满足TK直播合规推流、多店铺安全托管、社媒养号代运营等多样化业务需求
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {ecommerceProducts.map((product) => (
              <div key={product.id} className="group flex flex-col justify-between bg-white p-8 border border-[#E2E8F0] rounded-sm transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold text-[#0F172A]">{product.name}</h3>
                    <p className={`px-2 py-0.5 text-xs font-mono font-semibold border rounded-sm ${getBadgeStyles(product.badge.type)}`}>
                      {product.badge.text}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#64748B]">
                    {product.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-[#0F172A] font-sans">
                      {product.currency}{product.price}
                    </span>
                    <span className="text-sm font-semibold text-[#64748B]">
                      /{product.period === 'month' ? '月' : '年'}
                    </span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-[#64748B]">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-[#0055ff]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {product.isAvailable ? (
                  <a
                    href={product.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block w-full bg-[#0055ff] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#0043cc] rounded-sm transition-colors shadow-sm hover:shadow-md"
                  >
                    立即购买
                  </a>
                ) : (
                  <span
                    className="mt-8 block w-full bg-[#0055ff]/50 px-3 py-2 text-center text-sm font-semibold text-white cursor-not-allowed rounded-sm"
                  >
                    暂时缺货
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 产品特色说明 */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm leading-6 text-[#64748B] font-mono">
              &gt; 所有产品均支持弹性扩容、自动备份、7x24小时技术支持
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold text-[#0055ff] hover:text-[#0043cc]">
                查看更多配置 <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#64748B]">
                联系销售 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>

        {/* 热门活动精选区域 */}
        <div className="pt-24 pb-4">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* 左侧大卡片 */}
              <div className="lg:col-span-1 relative overflow-hidden bg-white border border-[#E2E8F0] transition-all duration-300 hover:border-[#0055ff]/50 hover:shadow-lg cursor-pointer group rounded-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/product/TikTok.png')"
                  }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="relative h-full min-h-[500px] p-6 flex flex-col justify-end z-10">
                  <div className="border-l-2 border-white pl-4">
                    <h3 className="mb-2 text-2xl font-bold text-white">海外网站及AI应用解锁</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">ChatGPT、YouTube、Netflix等海外应用及流媒体解锁访问</p>
                  </div>
                </div>
              </div>

              {/* 右侧卡片区域 */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 卡片组件 */}
                {[
                    { title: "社媒运营", desc: "批量管理Facebook、Instagram、Twitter等账号，提高运营效率", img: "/images/product/社媒运营.png" },
                    { title: "海外网站及AI应用解锁", desc: "访问全球网站和AI应用无障碍", img: "/images/product/跨境电商.png" },
                    { title: "跨境电商", desc: "降低账号被封风险，支持亚马逊、eBay等多平台账号注册与运营", img: "/images/product/ip.png" },
                    { title: "海外网站及AI应用解锁", desc: "畅享全球互联网服务", img: "/images/product/住宅IP.png" }
                ].map((item, i) => (
                    <div key={i} className="relative overflow-hidden bg-white border border-[#E2E8F0] transition-all duration-300 hover:border-[#0055ff]/50 hover:shadow-lg cursor-pointer group rounded-sm">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.img}')`
                        }}
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                      <div className="relative h-full min-h-[240px] p-5 flex flex-col justify-end z-10">
                        <div className="border-l-2 border-white pl-4">
                          <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 特性展示区块 */}
        <Container className="mt-24 sm:mt-40">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-[#0055ff]">丰富线路</h2>
            <p className="mt-1.5 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              覆盖亚太、欧美、东南亚等地域
            </p>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              提供系统化的电商平台防关联解决方案，从系统真实、网络稳定、团队协同等方面入手，致力于提升店铺安全和运营效率。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="group flex h-full transform flex-col overflow-hidden bg-white border border-[#E2E8F0] transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg rounded-sm">
                  <div className="p-5">
                    <div className="mb-3 flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center bg-[#0055ff] rounded-sm">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0F172A]">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
                      {feature.description}
                    </p>
                    <a
                      href={feature.href}
                      className="group inline-flex items-center text-sm font-medium text-[#0055ff]"
                    >
                      <span className="transition-all duration-300 group-hover:mr-1">
                        了解更多
                      </span>
                      <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        {/* 方案架构区块 */}
        <section className="bg-white py-12 sm:py-20 lg:py-32 overflow-hidden">
          <Container>
            <div className="max-w-3xl mb-10 sm:mb-16 mx-auto sm:text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3 sm:mb-4">
                电商云<span className="text-[#0055ff]">架构优势</span>
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg lg:text-xl leading-relaxed">
                我们的解决方案能够帮助您快速拓展全球电商业务，获得更高的业务增长。
              </p>
            </div>

            <div className="mb-12 sm:mb-16">
              <div className="bg-white border border-[#E2E8F0] overflow-hidden rounded-sm shadow-sm">
                <div className="border-b border-[#E2E8F0] px-6 sm:px-8 py-4 sm:py-5 bg-[#F8FAFC]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">电商云架构拓扑</h3>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 animate-pulse rounded-full"></div>
                        <span className="text-sm font-medium text-[#64748B] font-mono">HEALTHY</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-[#0055ff] rounded-sm"></div>
                        <span className="text-sm font-medium text-[#64748B] font-mono">RUNNING</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* 用户层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base font-bold text-[#0F172A] flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-[#0055ff] rounded-sm"></div>
                        用户层
                      </h4>
                      <div className="space-y-3">
                        <div className="border border-blue-200 bg-blue-50/50 p-4 sm:p-5 hover:border-[#0055ff] transition-colors rounded-sm group">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 bg-[#0055ff] rounded-sm"></div>
                            <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0055ff]">全球用户</span>
                          </div>
                          <div className="mt-2.5 text-xs sm:text-sm text-[#0055ff] font-medium font-mono">MULTI-REGION</div>
                        </div>
                        <div className="border border-[#E2E8F0] bg-white p-3 sm:p-4 rounded-sm">
                          <div className="text-xs sm:text-sm font-bold text-[#0F172A]">CDN 加速</div>
                          <div className="mt-1.5 text-xs text-[#64748B] font-mono">SMART ROUTING</div>
                        </div>
                      </div>
                    </div>

                    {/* 应用层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base font-bold text-[#0F172A] flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-[#0055ff] rounded-sm"></div>
                        应用层
                      </h4>
                      <div className="space-y-3">
                        <div className="border border-blue-200 bg-blue-50/50 p-4 sm:p-5 hover:border-[#0055ff] transition-colors rounded-sm group">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-3 w-3 bg-[#0055ff] rounded-sm"></div>
                              <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0055ff]">负载均衡</span>
                            </div>
                            <span className="text-xs sm:text-sm font-extrabold text-[#0055ff] font-mono">99.9%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div className="border border-[#E2E8F0] bg-white p-3 rounded-sm">
                            <div className="text-xs sm:text-sm font-bold text-[#0F172A]">Web 服务</div>
                            <div className="text-xs text-[#0055ff] mt-1 font-mono">x3 INSTANCES</div>
                          </div>
                          <div className="border border-[#E2E8F0] bg-white p-3 rounded-sm">
                            <div className="text-xs sm:text-sm font-bold text-[#0F172A]">API 网关</div>
                            <div className="text-xs text-[#0055ff] mt-1 font-mono">HA</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 数据层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base font-bold text-[#0F172A] flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-[#0055ff] rounded-sm"></div>
                        数据层
                      </h4>
                      <div className="space-y-3">
                        <div className="border border-blue-200 bg-blue-50/50 p-4 sm:p-5 hover:border-[#0055ff] transition-colors rounded-sm group">
                          <div className="flex items-center gap-3">
                            <div className="h-3 w-3 bg-[#0055ff] rounded-sm"></div>
                            <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0055ff]">主数据库</span>
                          </div>
                          <div className="mt-2.5 text-xs sm:text-sm text-[#0055ff] font-medium font-mono">MySQL CLUSTER</div>
                        </div>
                        <div className="border border-[#E2E8F0] bg-white p-3 sm:p-4 rounded-sm">
                          <div className="text-xs sm:text-sm font-bold text-[#0F172A]">Redis 缓存</div>
                          <div className="mt-1.5 text-xs text-[#64748B] font-mono">MEMORY OPT</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 性能指标 */}
                  <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {[
                      { value: '99.9%', label: '可用性' },
                      { value: '<50ms', label: '响应时间' },
                      { value: '10K+', label: '并发用户' },
                      { value: '24/7', label: '监控' },
                    ].map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-white border border-[#E2E8F0] hover:border-[#0055ff]/50 hover:shadow-md transition-all rounded-sm">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0055ff] tracking-tight font-mono">{metric.value}</div>
                        <div className="text-xs sm:text-sm font-semibold text-[#64748B] uppercase tracking-widest mt-2">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 次要特性卡片 */}
            <div className="mt-12 sm:mt-16">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                {secondaryFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className="group flex h-full transform flex-col overflow-hidden bg-white border border-[#E2E8F0] hover:border-[#0055ff]/30 hover:shadow-lg transition-all rounded-sm"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center bg-[#eff6ff] group-hover:bg-[#0055ff] transition-colors rounded-sm">
                          <feature.icon
                            className="h-6 w-6 sm:h-7 sm:w-7 text-[#0055ff] group-hover:text-white transition-colors"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] flex-1">
                          {feature.name}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-[#64748B]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 统计数据区块 */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold text-[#0055ff]">安全高效防关联</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              值得信赖的电商云服务
            </p>
            <p className="mt-6 text-lg leading-8 text-[#64748B]">
              为全球电商卖家提供专业的防关联解决方案，助力业务安全稳定发展。
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-[#0F172A] sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-[#E2E8F0] pl-6"
              >
                <dt className="text-sm leading-6 text-[#64748B]">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight font-mono text-[#0055ff]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>

        {/* 行动召唤区块 */}
        <div className="relative isolate mt-32 sm:mt-56">
           {/* Simple background instead of complex SVG */}
           <div className="absolute inset-0 -z-10 bg-[#F8FAFC]"></div>
          <Container className="py-32 sm:py-40 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              提升您的电商业务效率，立即开始使用电商云
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
              专业的跨境电商解决方案，助力您的业务快速发展，获得更高的收益和更好的用户体验。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="bg-[#0055ff] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#0043cc] rounded-sm shadow-sm hover:shadow-md transition-all"
              >
                立即开始
              </a>
              <a href="#" className="text-sm font-semibold text-[#0F172A] hover:text-[#0055ff] transition-colors">
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </Container>

        {/* 常见问题区块 */}
        <Container className="mt-8 sm:mt-16">
          <div className="py-24 sm:pt-32 lg:py-40">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                  常见问题
                </h2>
                <p className="mt-4 text-base leading-7 text-[#64748B]">
                  找不到您要的答案？请联系我们的{' '}
                  <a href="#" className="font-semibold text-[#0055ff] hover:text-[#0043cc]">
                    客服团队
                  </a>{' '}
                  获取帮助。
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  {[
                      { q: "电商云如何防关联？", a: "电商云为每一个电商用户新开的云主机都采用了固定、独立的纯净公网IP，保障每一个店铺环境独立安全运营，有效避免账号关联风险。" },
                      { q: "什么是纯净公网IP？", a: "电商云自建IP数据库，记录所有IP的使用情况，已使用过的IP将进入封存期，不再使用。确保每个IP都是全新、干净的，没有被其他用户使用过的历史记录。" },
                      { q: "加速IP如何使用？", a: "使用加速IP作为连接目标，账号密码不变，即可实现海外加速访问。支持全球多个节点，自动选择最优路径，提升访问速度和稳定性。" },
                      { q: "电商云支持哪些平台？", a: "电商云支持Amazon、eBay、Shopify、速卖通、Wish等主流跨境电商平台，以及Facebook、Google等社交媒体和广告平台的安全访问。" },
                      { q: "如何保证数据安全？", a: "采用企业级加密技术，所有数据传输均通过SSL加密，服务器部署在安全的数据中心，定期备份，确保您的业务数据安全可靠。" }
                  ].map((faq, i) => (
                    <div key={i}>
                        <dt className="text-base font-semibold text-[#0F172A]">{faq.q}</dt>
                        <dd className="mt-2 text-base leading-7 text-[#64748B]">{faq.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>


        </div>
      </main>

      {/* 页面底部 - 展示网站导航、联系方式和版权信息 */}
      <Footer />
    </div>
  )
}
