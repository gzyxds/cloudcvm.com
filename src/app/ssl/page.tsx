import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  EyeSlashIcon,
  GlobeAltIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import { Container } from '@/components/Container'

import screenshotContacts from '@/images/screenshots/achievements.png'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import ProductTraits from '@/components/common/ProductTraits' // 产品特性
import Superiority from '@/components/common/Superiority' // 产品优势
import Advantage from '@/components/Advantage' // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域
// SSL证书产品接口定义
interface SSLProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    type: string
    domains: string
    validation: string
    warranty: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// SSL证书产品数据
const sslProducts: SSLProduct[] = [
  {
    id: 1,
    name: 'DV SSL证书',
    subtitle: '域名验证型',
    specs: {
      type: 'DV域名验证',
      domains: '单域名',
      validation: '自动验证',
      warranty: '10万美元',
    },
    regions: ['上海', '北京', '广州', '南京'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 2,
    name: 'OV SSL证书',
    subtitle: '组织验证型',
    specs: {
      type: 'OV组织验证',
      domains: '单域名',
      validation: '人工验证',
      warranty: '100万美元',
    },
    regions: ['上海', '广州', '北京'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折',
  },
  {
    id: 3,
    name: 'EV SSL证书',
    subtitle: '扩展验证型',
    specs: {
      type: 'EV扩展验证',
      domains: '单域名',
      validation: '严格验证',
      warranty: '150万美元',
    },
    regions: ['上海', '广州', '北京'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折',
  },
  {
    id: 4,
    name: '通配符SSL证书',
    subtitle: '多子域名',
    specs: {
      type: '通配符证书',
      domains: '无限子域名',
      validation: '域名验证',
      warranty: '100万美元',
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '多域名SSL证书',
    subtitle: 'SAN证书',
    specs: {
      type: 'SAN多域名',
      domains: '最多250个域名',
      validation: '域名验证',
      warranty: '100万美元',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折',
  },
  {
    id: 6,
    name: '代码签名证书',
    subtitle: '软件签名',
    specs: {
      type: '代码签名',
      domains: '软件应用',
      validation: '组织验证',
      warranty: '50万美元',
    },
    regions: ['广州', '上海', '北京'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折',
  },
  {
    id: 7,
    name: '企业级SSL证书',
    subtitle: '高级加密',
    specs: {
      type: '企业级证书',
      domains: '多域名支持',
      validation: 'OV组织验证',
      warranty: '200万美元',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折',
  },
  {
    id: 8,
    name: '免费SSL证书',
    subtitle: "Let's Encrypt",
    specs: {
      type: 'DV域名验证',
      domains: '单域名',
      validation: '自动验证',
      warranty: '免费版本',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折',
  },
]
// 页面元数据配置
export const metadata: Metadata = {
  title: 'SSL证书_HTTPS证书_网站安全证书_域名证书_数字证书_优刻云',
  description:
    '优刻云SSL证书服务，提供DV、OV、EV等多种类型SSL证书，保障网站数据传输安全，支持通配符和多域名证书。',
  keywords: [
    'SSL证书',
    'HTTPS证书',
    '网站安全证书',
    '域名证书',
    '数字证书',
    'DV证书',
    'OV证书',
    'EV证书',
    '通配符证书',
    '多域名证书',
    '代码签名证书',
    '网站加密',
    '数据安全',
    '优刻云',
    'HTTPS加密',
    '安全防护',
  ],
}

// SSL证书核心特性配置
const sslFeatures = [
  {
    name: '数据加密',
    description:
      '采用256位SSL加密技术，确保网站数据传输过程中的安全性，防止数据被窃取或篡改。',
    icon: LockClosedIcon,
  },
  {
    name: '身份验证',
    description:
      '通过权威CA机构验证网站身份，提升用户信任度，显示绿色地址栏和安全锁标识。',
    icon: ShieldCheckIcon,
  },
  {
    name: '兼容性保障',
    description:
      '支持99.9%的浏览器和移动设备，确保所有用户都能安全访问您的网站，提升用户体验。',
    icon: ChartBarIcon,
  },
]
// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '全球节点',
    summary: '全球多地域节点分布，提供就近接入服务。',
    description:
      '依托全球分布式节点网络,为用户提供就近快速接入,显著提升访问速度和用户体验。',
    icon: ChartBarIcon,
  },
  {
    name: '智能调度',
    summary: '智能DNS调度系统，自动选择最优节点。',
    description:
      '基于智能DNS调度技术,自动分析用户位置信息,选择最优接入节点,实现访问加速。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全防护',
    summary: '多层安全防护体系，全方位保障业务安全。',
    description:
      '提供DDoS防护、CC防护、WAF等多层安全防护,有效抵御各类网络攻击,保障业务稳定运行。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '快速签发',
    description:
      '专业的证书签发和验证服务，快速为您的网站部署SSL证书，让您专注于业务发展而非技术配置。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '证书管理',
    description:
      '提供证书安装、配置、更新等一站式管理服务，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '技术支持',
    description:
      '提供7x24小时技术支持、证书故障排查、安全咨询等专业服务，确保您的网站安全稳定运行。',
    icon: ServerIcon,
  },
]

// SSL证书风险数据 - 不使用SSL证书的三大风险
const sslRisks = [
  {
    id: 1,
    title: '信息泄露严重',
    description:
      '数据库中信息以明文存储，给不法分子提供了便利。密码验证过程中并未对传输数据进行加密，导致任何第三方可以轻松截获到服务器传递的明文密码。',
    icon: EyeSlashIcon,
    color: 'blue',
  },
  {
    id: 2,
    title: '网站被钓鱼、仿冒、篡改',
    description:
      '不法分子利用人们防范意识薄弱的特点，通过海外主机搭设钓鱼网站、仿冒网站，盗取用户信息、诈骗钱财。',
    icon: ExclamationTriangleIcon,
    color: 'blue',
  },
  {
    id: 3,
    title: 'http网站被标记为"不安全"网站',
    description:
      '浏览网站时，大部分浏览器会把非https网站标记为不安全网站，导致访客退出访问，网站自然流量下降。',
    icon: GlobeAltIcon,
    color: 'blue',
  },
]

/**
 * SSL风险展示组件 - 以卡片形式展示不使用SSL证书的风险
 * @returns JSX.Element
 */
function SSLRisksSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            不使用SSL证书的风险
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            了解网站缺乏SSL证书保护可能面临的安全威胁
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sslRisks.map((risk) => {
            const IconComponent = risk.icon
            return (
              <div
                key={risk.id}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {risk.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {risk.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// SSL证书图片轮播 Hero 组件 - 展示SSL证书的主要图片内容
function SSLVideoHero() {
  const sslVideoSlide = [
    {
      id: 1,
      title: 'SSL证书服务',
      subtitle: '重新定义网站安全',
      description:
        '体验专业的SSL证书服务，让HTTPS加密为您的网站提供强大的安全保障。从证书申请到自动部署，SSL证书让网站安全变得前所未有的简单。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '立即申请SSL证书',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false}
      showProgress={false}
      showPlayButton={false}
      showNavigation={false}
      height={{ base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[550px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false}
      customSlides={sslVideoSlide}
      className=""
    />
  )
}

// SSL证书快速选购指南组件
function SSLGuideTable() {
  const guideData = [
    {
      domainType: '单域名',
      supportContent: '仅支持绑定1个域名',
      scenario: '仅1个域名',
      domainExample: 'www.example.com',
      quantity: '1个',
    },
    {
      domainType: '多域名',
      supportContent: '支持绑定多个不同域名',
      scenario: '多个不同域名',
      domainExample: 'www.a.com, www.b.com',
      quantity: '2-250个',
    },
    {
      domainType: '通配符',
      supportContent: '支持绑定主域名及其所有子域名',
      scenario: '主域名+所有子域名',
      domainExample: '*.example.com',
      quantity: '无限个',
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-4xl lg:text-5xl">
            SSL证书快速选购指南
          </h2>
          <p className="text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8">
            根据您的域名需求选择合适的SSL证书类型
          </p>
        </div>

        {/* 移动端卡片布局 */}
        <div className="block space-y-6 lg:hidden">
          {guideData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-blue-300"
            >
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.domainType}
                </h3>
                <p className="text-sm font-medium text-blue-600">
                  {item.quantity}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <dt className="mb-1 text-sm font-medium text-gray-500">
                    支持内容
                  </dt>
                  <dd className="text-base text-gray-700">
                    {item.supportContent}
                  </dd>
                </div>

                <div>
                  <dt className="mb-1 text-sm font-medium text-gray-500">
                    适用场景
                  </dt>
                  <dd className="text-base text-gray-700">{item.scenario}</dd>
                </div>

                <div>
                  <dt className="mb-1 text-sm font-medium text-gray-500">
                    域名举例
                  </dt>
                  <dd className="text-base font-medium text-gray-700">
                    {item.domainExample}
                  </dd>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 桌面端表格布局 */}
        <div className="hidden overflow-hidden border border-gray-200 lg:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-semibold tracking-wide text-gray-700 uppercase xl:px-10 xl:py-6">
                    域名类型
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold tracking-wide text-gray-700 uppercase xl:px-10 xl:py-6">
                    支持内容
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold tracking-wide text-gray-700 uppercase xl:px-10 xl:py-6">
                    适用场景
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold tracking-wide text-gray-700 uppercase xl:px-10 xl:py-6">
                    域名举例
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold tracking-wide text-gray-700 uppercase xl:px-10 xl:py-6">
                    数量选择
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {guideData.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors duration-200 hover:bg-gray-50"
                  >
                    <td className="px-8 py-5 text-base font-semibold whitespace-nowrap text-gray-900 xl:px-10 xl:py-6 xl:text-lg">
                      {item.domainType}
                    </td>
                    <td className="px-8 py-5 text-base text-gray-700 xl:px-10 xl:py-6 xl:text-lg">
                      {item.supportContent}
                    </td>
                    <td className="px-8 py-5 text-base text-gray-700 xl:px-10 xl:py-6 xl:text-lg">
                      {item.scenario}
                    </td>
                    <td className="px-8 py-5 text-base font-medium text-gray-700 xl:px-10 xl:py-6 xl:text-lg">
                      {item.domainExample}
                    </td>
                    <td className="px-8 py-5 text-base font-medium text-gray-700 xl:px-10 xl:py-6 xl:text-lg">
                      {item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Leftright 组件 - 左文右图分栏展示
function SSLLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">
              全方位安全保障
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
              为您的网站保驾护航
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg/8 dark:text-gray-300">
              通过SSL证书加密技术，全面保护您的网站数据传输安全，建立可信赖的网络环境，提升品牌价值。
            </p>
            <dl className="mt-8 max-w-xl space-y-6 text-sm leading-6 text-gray-600 sm:mt-10 sm:space-y-8 sm:text-base/7 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <IconComponent
                        aria-hidden="true"
                        className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  SSL证书控制台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-3 border border-white/20 bg-white/30 p-3 backdrop-blur-sm sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-base font-semibold text-gray-800 sm:mb-2 sm:text-lg dark:text-white">
                  证书管理中心
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
                  实时监控SSL证书状态
                </p>
              </div>

              {/* SSL证书列表 */}
              <div className="mb-3 space-y-3">
                {sslProducts.slice(0, 3).map((product, index) => (
                  <div
                    key={product.id}
                    className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-green-200/50 bg-green-100/80 dark:border-green-800/50 dark:bg-green-900/50">
                        <LockClosedIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {product.specs.type} • {product.specs.domains}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          index === 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          index === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {index === 0 ? '已签发' : index === 1 ? '验证中' : '待续费'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 快速操作区域 */}
              <div className="mb-3 grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center rounded border border-gray-200/30 bg-white/60 p-2 text-xs backdrop-blur-sm hover:bg-white/80 dark:border-gray-700/30 dark:bg-white/10 dark:hover:bg-white/20">
                  <CloudArrowUpIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mb-1" />
                  <span className="text-gray-700 dark:text-gray-300">快速签发</span>
                </button>
                <button className="flex flex-col items-center rounded border border-gray-200/30 bg-white/60 p-2 text-xs backdrop-blur-sm hover:bg-white/80 dark:border-gray-700/30 dark:bg-white/10 dark:hover:bg-white/20">
                  <DocumentTextIcon className="h-4 w-4 text-green-600 dark:text-green-400 mb-1" />
                  <span className="text-gray-700 dark:text-gray-300">证书管理</span>
                </button>
                <button className="flex flex-col items-center rounded border border-gray-200/30 bg-white/60 p-2 text-xs backdrop-blur-sm hover:bg-white/80 dark:border-gray-700/30 dark:bg-white/10 dark:hover:bg-white/20">
                  <ServerIcon className="h-4 w-4 text-purple-600 dark:text-purple-400 mb-1" />
                  <span className="text-gray-700 dark:text-gray-300">技术支持</span>
                </button>
              </div>

              {/* 移动端模拟状态栏 */}
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>3个证书正常运行</span>
                </div>
                <span>最后检查: 刚刚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">
                全方位安全保障
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
                为您的网站保驾护航
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg/8 dark:text-gray-300">
                通过SSL证书加密技术，全面保护您的网站数据传输安全，建立可信赖的网络环境，提升品牌价值。
              </p>
              <dl className="mt-8 max-w-xl space-y-6 text-sm leading-6 text-gray-600 sm:mt-10 sm:space-y-8 sm:text-base/7 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-8 sm:pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <IconComponent
                          aria-hidden="true"
                          className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center lg:order-first lg:justify-end">
            <div className="relative w-full max-w-2xl overflow-hidden border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 桌面端模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  SSL证书管理平台
                </div>
              </div>

              {/* 桌面端模拟界面内容区 */}
              <div className="flex">
                {/* 左侧导航 */}
                <div className="mr-3 w-40 shrink-0 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                  <div className="mb-3">
                    <h4 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">证书管理</h4>
                    <div className="space-y-1">
                      {leftRightFeatures.slice(0, 3).map((feature, index) => (
                        <div
                          key={index}
                          className={`text-xs ${index === 0 ? 'bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'} rounded px-2 py-1`}
                        >
                          {feature.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">系统设置</h4>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1">账户设置</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1">通知管理</div>
                    </div>
                  </div>
                </div>

                {/* 右侧内容 */}
                <div className="flex-1">
                  {/* 标题栏 */}
                  <div className="mb-3 border border-white/20 bg-white/30 p-3 backdrop-blur-sm sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                    <h3 className="mb-1 text-base font-semibold text-gray-800 sm:mb-2 sm:text-lg dark:text-white">
                      SSL证书管理
                    </h3>
                    <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
                      管理您的所有SSL证书，监控到期时间和状态
                    </p>
                  </div>

                  {/* 证书列表 */}
                  <div className="mb-3 space-y-2">
                    {leftRightFeatures.slice(0, 3).map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <div
                          key={feature.name}
                          className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                                <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                  {feature.name}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {index === 0 ? '有效期: 11个月' : index === 1 ? '有效期: 8个月' : '有效期: 3个月'}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${index === 2 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'}`}>
                                {index === 2 ? '即将到期' : '有效'}
                              </span>
                              <button className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50">
                                管理
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* 状态栏 */}
                  <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                      <span>系统正常</span>
                    </div>
                    <span>最后更新: 2分钟前</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="secondary-features" aria-label="SSL证书功能特性展示">
      <div className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <FeaturesMobile />
          <FeaturesDesktop />
        </div>
      </div>
    </section>
  )
}

// Rightleft 组件 - 右图左文分栏展示
function SSLRightleftSection() {
  return (
    <section id="rightleft-features" aria-label="SSL证书功能特性展示">
      <div className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pl-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                  更安全防护
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  SSL证书让网站更安全
                </p>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  借助先进的SSL证书技术，轻松实现HTTPS加密与网站安全防护，大幅提升用户信任度和企业品牌形象。
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                  {rightLeftFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="relative w-full max-w-2xl overflow-hidden border border-gray-200/50 bg-white/80 p-3 sm:p-4 md:p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
                {/* 桌面端模拟界面头部 */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    SSL证书管理平台
                  </div>
                </div>

                {/* 模拟界面内容区 - 添加响应式布局 */}
                <div className="flex flex-col sm:flex-row">
                  {/* 左侧导航 - 移动端适配 */}
                  <div className="mb-3 w-full sm:mb-0 sm:mr-3 sm:w-40 shrink-0 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                    <div className="mb-3">
                      <h4 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">证书管理</h4>
                      <div className="flex flex-wrap gap-1 sm:flex-col sm:space-y-1 sm:gap-0">
                        <div className="text-xs bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded px-2 py-1">
                          我的证书
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">
                          申请证书
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">
                          证书续费
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">证书类型</h4>
                      <div className="flex flex-wrap gap-1 sm:flex-col sm:space-y-1 sm:gap-0">
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">DV证书</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">OV证书</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">EV证书</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">系统设置</h4>
                      <div className="flex flex-wrap gap-1 sm:flex-col sm:space-y-1 sm:gap-0">
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">账户设置</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 rounded px-2 py-1 hover:bg-gray-100/50 dark:hover:bg-gray-700/30">通知管理</div>
                      </div>
                    </div>
                  </div>

                  {/* 右侧内容 */}
                  <div className="flex-1">
                    {/* 标题栏 */}
                    <div className="mb-3 border border-white/20 bg-white/30 p-3 backdrop-blur-sm sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                      <h3 className="mb-1 text-base font-semibold text-gray-800 sm:mb-2 sm:text-lg dark:text-white">
                        SSL证书管理
                      </h3>
                      <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
                        管理您的所有SSL证书，监控到期时间和状态
                      </p>
                    </div>

                    {/* 证书列表 */}
                    <div className="mb-3 space-y-2">
                      {sslProducts.slice(0, 3).map((product, index) => (
                        <div
                          key={product.id}
                          className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-green-200/50 bg-green-100/80 dark:border-green-800/50 dark:bg-green-900/50">
                                <LockClosedIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {product.specs.type} • {product.specs.domains} • {product.specs.warranty}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 ml-11 sm:ml-0">
                              <div className="text-right">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  ¥{product.currentPrice}
                                </div>
                                <div className="text-xs text-gray-500 line-through dark:text-gray-400">
                                  ¥{product.originalPrice}
                                </div>
                              </div>
                              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                index === 0 ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                index === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                              }`}>
                                {index === 0 ? product.discount : index === 1 ? product.discount : product.discount}
                              </span>
                              <button className="rounded bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50">
                                立即购买
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 状态栏 */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                      <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>系统正常运行中</span>
                      </div>
                      <span>最后更新: 2分钟前</span>
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

// SSL证书页面主组件
export default function SSLPage() {
  return (
    <>
      <Header />
      <main>
        <SSLVideoHero />

        {/* SSL证书专区 - 直接嵌入的代码 */}
        <div className="min-h-screen bg-gray-50">
          {/* 页面标题 */}
          <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-[1800px] px-4 pt-24 pb-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">SSL证书专区</h1>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-orange-500">DV证书起步</span>
                ，新用户低至
                <span className="font-medium text-orange-500">79元/年</span>
                <span className="ml-2 cursor-pointer text-blue-600 underline">
                  活动规则&gt;
                </span>
              </p>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sslProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  {/* 产品标题和标签 */}
                  <div className="border-b border-gray-100 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.subtitle}
                      </span>
                      {product.isHot && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                      {product.isRecommended && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      高性能计算、大数据处理、游戏服务器等专业应用的首选
                    </p>
                  </div>

                  {/* 产品规格信息 */}
                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">类型</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900">
                          {product.specs.type}
                        </span>
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">域名</span>
                      <span className="text-sm text-gray-900">
                        {product.specs.domains}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">验证</span>
                      <span className="text-sm text-gray-900">
                        {product.specs.validation}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">保障</span>
                      <span className="text-sm text-gray-900">
                        {product.specs.warranty}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">时长</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {product.duration}
                        </span>
                        <span className="rounded bg-red-100 px-1 py-0.5 text-xs text-red-600">
                          {product.discount}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">数量</span>
                      <div className="flex items-center gap-2">
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          −
                        </button>
                        <span className="w-8 text-center text-sm">1</span>
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 价格和折扣信息 */}
                  <div className="border-t border-gray-100 p-4">
                    {product.discount && (
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                          {product.discount}
                        </span>
                        <span className="text-xs text-gray-500">限1个</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">活动价:</span>
                        <span className="text-2xl font-bold text-red-600">
                          {product.currentPrice}
                        </span>
                        <span className="text-sm text-gray-600">元</span>
                        <span className="text-xs text-gray-500">
                          ¥{product.originalPrice.toFixed(2)}/月
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-600">日常价:</span>
                        <span className="text-sm text-gray-500">
                          {product.originalPrice} 元
                        </span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-2">
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded border border-blue-600 px-3 py-2 text-center text-sm text-blue-600 transition-colors hover:bg-blue-50"
                      >
                        加入购物车
                      </a>
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded bg-blue-600 px-3 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        立即购买
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SSLLeftrightSection />
        <SSLRightleftSection />
        {/* === SSL证书选购指南与风险提示 === */}
        <SSLGuideTable />
        <SSLRisksSection />
        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />

        {/* === 客户与信任建立 === */}
        <Customer />

        {/* === 支持与帮助 === */}
        <Faqs />

        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
