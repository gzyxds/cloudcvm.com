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
    recommended: 'bg-indigo-600/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400',
    popular: 'bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400',
    overseas: 'bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400',
    europe: 'bg-purple-600/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400'
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
    <div className="bg-white dark:bg-gray-900">
      {/* 页面头部导航 */}
      <Header />

      <main>
        {/* 英雄区块 - 展示产品主要价值主张 */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 pt-20 pb-16 sm:py-20 md:py-24 lg:py-32 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          {/* 背景网格图案 */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200/50 dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="eccloud-grid-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              fill="url(#eccloud-grid-pattern)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          {/* 装饰元素 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-indigo-400/10 opacity-60 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-blue-400/10 opacity-40 blur-3xl"></div>
          </div>

          <Container className="relative z-10">
            <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
              {/* 左侧内容区 */}
              <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
                {/* 品牌标识 */}
                <div className="inline-flex items-center border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 sm:px-4 sm:text-sm dark:border-gray-700/25 dark:bg-gray-800/10 dark:text-gray-400">
                  <span className="mr-2">最新动态</span>
                  <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="ml-2">全新电商云服务上线</span>
                </div>

                {/* 主标题 */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      电商云
                    </span>
                    <br />
                    助力跨境电商业务
                  </h1>
                  <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl lg:mx-0 lg:leading-8 dark:text-gray-300">
                    IP资源采购自各地优质本土运营商，一站式满足TK直播引流、海外应用访问、社媒养号等多样化业务需求。
                  </p>
                  <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0 lg:leading-7 dark:text-gray-400">
                    地域分布全球，提供固定、独立的纯净公网IP，为您的电商业务保驾护航
                  </p>
                </div>

                {/* 特性标签 */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                  <a
                    href="#features"
                    className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm dark:border-gray-700/25 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/10"
                  >
                    全球覆盖
                  </a>
                  <a
                    href="#security"
                    className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm dark:border-gray-700/25 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/10"
                  >
                    安全隔离
                  </a>
                  <a
                    href="#management"
                    className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm dark:border-gray-700/25 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/10"
                  >
                    统一管理
                  </a>
                  <a
                    href="#scaling"
                    className="border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm dark:border-gray-700/25 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/10"
                  >
                    灵活扩展
                  </a>
                </div>

                {/* CTA按钮组 */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                  <a
                    href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    <span>立即购买</span>
                  </a>
                  <a
                    href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=64&spg_id=62"
                    className="group inline-flex w-full items-center justify-center text-sm font-semibold text-gray-900 transition-colors hover:text-indigo-600 sm:w-auto dark:text-white dark:hover:text-indigo-400"
                  >
                    <span>联系我们</span>
                    <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* 右侧展示区 - 现代化电商云仪表板预览 */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-3xl dark:border-gray-700/50 dark:from-gray-800 dark:to-gray-900">
                  {/* 窗口控制栏 */}
                  <div className="border-b border-gray-200 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-800/80">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        电商云控制台
                      </div>
                      <div className="w-6"></div>
                    </div>
                  </div>

                  {/* 仪表板内容 */}
                  <div className="p-6">
                    {/* 顶部状态栏 */}
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-900/20">
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">12</div>
                        <div className="text-xs text-green-500 dark:text-green-400">在线服务器</div>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/20">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">8</div>
                        <div className="text-xs text-blue-500 dark:text-blue-400">活跃店铺</div>
                      </div>
                    </div>

                    {/* 地域分布 */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">地域分布</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 dark:text-gray-400">美国东部</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700">
                              <div className="h-1.5 w-9 rounded-full bg-indigo-600"></div>
                            </div>
                            <span className="text-xs text-gray-900 dark:text-white">75%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 dark:text-gray-400">欧洲</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700">
                              <div className="h-1.5 w-6 rounded-full bg-green-600"></div>
                            </div>
                            <span className="text-xs text-gray-900 dark:text-white">50%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 dark:text-gray-400">亚太</span>
                          <div className="flex items-center">
                            <div className="mr-2 h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700">
                              <div className="h-1.5 w-7 rounded-full bg-blue-600"></div>
                            </div>
                            <span className="text-xs text-gray-900 dark:text-white">60%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 实时监控 */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">实时监控</h3>
                      <div className="h-16 rounded-lg bg-gray-50 p-2 dark:bg-gray-800">
                        <div className="flex h-full items-end justify-between gap-1">
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '60%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '80%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '40%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '90%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '70%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '50%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '85%'}}></div>
                          <div className="w-1 rounded-t bg-indigo-600" style={{height: '65%'}}></div>
                        </div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>CPU</span>
                        <span>内存</span>
                        <span>网络</span>
                      </div>
                    </div>

                    {/* 快速操作按钮 */}
                    <div className="flex space-x-2">
                      <button className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-indigo-700">
                        新建实例
                      </button>
                      <button className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                        查看详情
                      </button>
                    </div>
                  </div>

                  {/* 底部状态栏 */}
                  <div className="border-t border-gray-200 bg-gray-50/80 p-3 dark:border-gray-700 dark:bg-gray-800/80">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>已连接</span>
                      <span>v2.1.0</span>
                    </div>
                  </div>
                </div>

                {/* 装饰性光效 */}
                <div className="absolute -top-4 -right-4 h-24 w-24 bg-indigo-400/10 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-blue-400/10 blur-2xl"></div>
              </div>
            </div>
          </Container>
        </section>

        {/* 商品模块 */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">热销产品</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              电商云服务器推荐
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              赋能服务商，IP资源采购自各地优质本土运营商，一站式满足TK直播合规推流、多店铺安全托管、社媒养号代运营等多样化业务需求
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {ecommerceProducts.map((product) => (
              <div key={product.id} className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-gray-900 dark:ring-gray-800">
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg/8 font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                    <p className={`px-2.5 py-1 text-xs/5 font-semibold ${getBadgeStyles(product.badge.type)}`}>
                      {product.badge.text}
                    </p>
                  </div>
                  <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                    {product.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.currency}{product.price}
                    </span>
                    <span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">
                      /{product.period === 'month' ? '月' : '年'}
                    </span>
                  </p>
                  <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-400">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
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
                    className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    立即购买
                  </a>
                ) : (
                  <span
                    className="mt-8 block w-full rounded-md bg-indigo-600/50 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm cursor-not-allowed"
                  >
                    暂时缺货
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 产品特色说明 */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm/6 text-gray-600 dark:text-gray-400">
              所有产品均支持弹性扩容、自动备份、7x24小时技术支持
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                查看更多配置 <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                联系销售 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>

        {/* 热门活动精选区域 */}
        <div className="pt-24 pb-4">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            {/* 热门活动精选卡片 - 完全按照参考图片设计：左侧1个大卡片，右侧4个小卡片(2x2布局) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* 左侧大卡片 - 海外网站及AI应用解锁 */}
              <div className="lg:col-span-1 relative overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/product/TikTok.png')"
                  }}
                />
                {/* 添加渐变遮罩层，使底部文字更清晰 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                {/* 内容区域 - 调整为底部显示 */}
                <div className="relative h-full min-h-[500px] p-6 flex flex-col justify-end z-10">
                  {/* 卡片标题和文案 - 移至底部 */}
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">海外网站及AI应用解锁</h3>
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">ChatGPT、YouTube、Netflix等海外应用及流媒体解锁访问</p>
                  </div>
                </div>
              </div>

              {/* 右侧卡片区域 - 2x2网格布局 */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 右侧卡片1 - 社媒运营 */}
                <div className="relative overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  {/* 背景图片 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/product/社媒运营.png')"
                    }}
                  />
                  {/* 添加渐变遮罩层，使底部文字更清晰 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>

                  {/* 内容区域 - 调整为底部显示 */}
                  <div className="relative h-full min-h-[240px] p-5 flex flex-col justify-end z-10">
                    {/* 卡片标题和文案 - 移至底部 */}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">社媒运营</h3>
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">批量管理Facebook、Instagram、Twitter等账号，提高运营效率</p>
                    </div>
                  </div>
                </div>

                {/* 右侧卡片2 - 海外网站及AI应用解锁 */}
                <div className="relative overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  {/* 背景图片 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/product/跨境电商.png')"
                    }}
                  />
                  {/* 添加渐变遮罩层，使底部文字更清晰 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>

                  {/* 内容区域 - 调整为底部显示 */}
                  <div className="relative h-full min-h-[240px] p-5 flex flex-col justify-end z-10">
                    {/* 卡片标题和文案 - 移至底部 */}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">海外网站及AI应用解锁</h3>
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">访问全球网站和AI应用无障碍</p>
                    </div>
                  </div>
                </div>

                {/* 右侧卡片3 - 社媒运营 */}
                <div className="relative overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  {/* 背景图片 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/product/ip.png')"
                    }}
                  />
                  {/* 添加渐变遮罩层，使底部文字更清晰 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>

                  {/* 内容区域 - 调整为底部显示 */}
                  <div className="relative h-full min-h-[240px] p-5 flex flex-col justify-end z-10">
                    {/* 卡片标题和文案 - 移至底部 */}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">跨境电商</h3>
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">降低账号被封风险，支持亚马逊、eBay等多平台账号注册与运营，避免因IP问题导致的账号封禁</p>
                    </div>
                  </div>
                </div>

                {/* 右侧卡片4 - 海外网站及AI应用解锁 */}
                <div className="relative overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  {/* 背景图片 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/product/住宅IP.png')"
                    }}
                  />
                  {/* 添加渐变遮罩层，使底部文字更清晰 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>

                  {/* 内容区域 - 调整为底部显示 */}
                  <div className="relative h-full min-h-[240px] p-5 flex flex-col justify-end z-10">
                    {/* 卡片标题和文案 - 移至底部 */}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">海外网站及AI应用解锁</h3>
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">畅享全球互联网服务</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 热门活动精选区域结束 */}

        {/* 特性展示区块 - 展示产品主要功能特点 */}
        <Container className="mt-24 sm:mt-40">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/6 font-semibold text-indigo-600 dark:text-indigo-400">丰富线路</h2>
            <p className="mt-1.5 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              覆盖亚太、欧美、东南亚等地域
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">
              提供系统化的电商平台防关联解决方案，从系统真实、网络稳定、团队协同等方面入手，致力于提升店铺安全和运营效率。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-white border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:bg-gray-800 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]">
                  <div className="p-5">
                    <div className="mb-3 flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                    <a
                      href={feature.href}
                      className="group inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400"
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

        {/* 方案架构区块 - 展示产品技术架构和拓扑 */}
        <div className="mt-32 sm:mt-56">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">方案架构</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance dark:text-white">
                电商云架构优势
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">
                我们的解决方案能够帮助您快速拓展全球电商业务，获得更高的业务增长。
              </p>
            </div>
          </Container>
          <div className="relative overflow-hidden pt-16">
            <Container>
              {/* 电商云架构图模拟设计 - 可视化展示系统架构 */}
              <div className="mb-[-12%] rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/10 overflow-x-auto">
                {/* 架构图头部 - 显示状态指标 */}
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">电商云架构拓扑</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">健康</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">运行中</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 架构图主体 - 分层展示系统架构 */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 用户层 - 展示用户访问入口 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">用户层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-4 dark:border-blue-600 dark:bg-blue-900/20">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">全球用户</span>
                          </div>
                          <div className="mt-2 text-xs text-blue-700 dark:text-blue-300">多地域访问</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-800">
                          <div className="text-xs font-medium text-gray-900 dark:text-white">CDN 加速</div>
                          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">智能路由</div>
                        </div>
                      </div>
                    </div>

                    {/* 应用层 - 展示系统服务组件 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">应用层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-600 dark:bg-green-900/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-green-600"></div>
                              <span className="text-sm font-medium text-green-900 dark:text-green-100">负载均衡</span>
                            </div>
                            <span className="text-xs text-green-700 dark:text-green-300">99.9%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded border border-indigo-200 bg-indigo-50 p-2 dark:border-indigo-600 dark:bg-indigo-900/20">
                            <div className="text-xs font-medium text-indigo-900 dark:text-indigo-100">Web 服务</div>
                            <div className="text-xs text-indigo-600 dark:text-indigo-400">实例 x3</div>
                          </div>
                          <div className="rounded border border-purple-200 bg-purple-50 p-2 dark:border-purple-600 dark:bg-purple-900/20">
                            <div className="text-xs font-medium text-purple-900 dark:text-purple-100">API 网关</div>
                            <div className="text-xs text-purple-600 dark:text-purple-400">高可用</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 数据层 - 展示数据存储和处理组件 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">数据层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-600 dark:bg-orange-900/20">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-orange-600"></div>
                            <span className="text-sm font-medium text-orange-900 dark:text-orange-100">主数据库</span>
                          </div>
                          <div className="mt-2 text-xs text-orange-700 dark:text-orange-300">MySQL 集群</div>
                        </div>
                        <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-600 dark:bg-red-900/20">
                          <div className="text-xs font-medium text-red-900 dark:text-red-100">Redis 缓存</div>
                          <div className="text-xs text-red-600 dark:text-red-400">内存优化</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 连接线和流量指示 - 展示系统各组件间的数据流向 */}
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">数据流</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-orange-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">请求路径</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">缓存同步</span>
                    </div>
                  </div>

                  {/* 性能指标 - 展示系统关键性能数据 */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">99.9%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">可用性</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">&lt;50ms</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">响应时间</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">10K+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">并发用户</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">监控</div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:from-gray-900" />
              </div>
            </Container>
          </div>
          <Container className="mt-16 sm:mt-20 md:mt-24">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 dark:text-gray-400">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-white border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:bg-gray-800 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]">
                  <div className="p-5">
                    <div className="mb-3 flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <feature.icon
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </dl>
          </Container>
        </div>

        {/* 统计数据区块 - 展示产品核心数据指标 */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">安全高效防关联</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              值得信赖的电商云服务
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">
              为全球电商卖家提供专业的防关联解决方案，助力业务安全稳定发展。
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 dark:text-white">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6 dark:border-white/10"
              >
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>

        {/* 行动召唤区块 - 引导用户注册或购买服务 */}
        <div className="relative isolate mt-32 sm:mt-56">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1108/632] w-[277px] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <Container className="py-32 sm:py-40 text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
              提升您的电商业务效率，立即开始使用电商云
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-300 overflow-hidden text-ellipsis">
              专业的跨境电商解决方案，助力您的业务快速发展，获得更高的收益和更好的用户体验。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                立即开始
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </Container>

        {/* 常见问题区块 - 解答用户疑问提高转化率 */}
        <Container className="mt-8 sm:mt-16">
          <div className="py-24 sm:pt-32 lg:py-40">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white">
                  常见问题
                </h2>
                <p className="mt-4 text-base/7 text-pretty text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">
                  找不到您要的答案？请联系我们的{' '}
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    客服团队
                  </a>{' '}
                  获取帮助。
                </p>
              </div>
              {/* FAQ问题列表 - 展示常见问题及解答 */}
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">电商云如何防关联？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">电商云为每一个电商用户新开的云主机都采用了固定、独立的纯净公网IP，保障每一个店铺环境独立安全运营，有效避免账号关联风险。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">什么是纯净公网IP？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">电商云自建IP数据库，记录所有IP的使用情况，已使用过的IP将进入封存期，不再使用。确保每个IP都是全新、干净的，没有被其他用户使用过的历史记录。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">加速IP如何使用？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">使用加速IP作为连接目标，账号密码不变，即可实现海外加速访问。支持全球多个节点，自动选择最优路径，提升访问速度和稳定性。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">电商云支持哪些平台？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">电商云支持Amazon、eBay、Shopify、速卖通、Wish等主流跨境电商平台，以及Facebook、Google等社交媒体和广告平台的安全访问。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">如何保证数据安全？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300 max-w-full overflow-hidden text-ellipsis">采用企业级加密技术，所有数据传输均通过SSL加密，服务器部署在安全的数据中心，定期备份，确保您的业务数据安全可靠。</dd>
                  </div>
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
