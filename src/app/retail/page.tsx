'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StarIcon,
  UserGroupIcon,
  UsersIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ShareIcon,
  VideoCameraIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  CurrencyYenIcon,
  BuildingOffice2Icon,
  CogIcon,
  ChartPieIcon,
  TruckIcon,
  MegaphoneIcon,
  BookOpenIcon,
  PlayCircleIcon,
  UserPlusIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GiftIcon,
  ServerIcon,
  CircleStackIcon,
  ClockIcon,
  ScaleIcon,
  CloudIcon,
  QueueListIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  LockClosedIcon,
  VideoCameraIcon as VideoIcon,
  FolderIcon,
  UserGroupIcon as UsersGroupIcon,
  ChatBubbleLeftRightIcon as ChatIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import clsx from 'clsx'
import { motion } from 'framer-motion'

/**
 * 行业趋势项接口定义
 */
interface TrendItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  span?: string // 用于Bento Grid的跨度控制
}

/**
 * 场景项接口定义
 */
interface ScenarioItem {
  title: string
  description: string
  details: string[]
  image: string
}

/**
 * 产品特征项接口定义
 */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

/**
 * 场景解决方案接口
 */
interface ScenarioSolution {
  title: string
  description: string
  features: string[]
  stats?: {
    label: string
    value: string
  }[]
}

/**
 * 技术优势数据接口
 */
interface TechAdvantage {
  title: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

/**
 * 客户评价接口
 */
interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

/**
 * Hero区域组件
 * 采用简洁大气的左右布局设计，强调视觉冲击力
 */
function HeroSection() {
  const features = [
    { name: '高并发处理', href: '#performance' },
    { name: '弹性扩容', href: '#scaling' },
    { name: '安全防护', href: '#security' },
    { name: '营销创新', href: '#marketing' },
  ]

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* 背景装饰网格 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#E2E8F0]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="retail-hero-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#retail-hero-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* 顶部蓝色光晕 */}
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#eff6ff] to-[#eff6ff] opacity-60"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容 */}
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/10">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              零售数字化转型首选
            </div>

            <h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display">
              构建下一代
              <span className="block text-[#0055ff] mt-2">智慧零售云平台</span>
            </h1>

            <p className="mb-10 text-lg leading-8 text-slate-600 max-w-2xl mx-auto lg:mx-0">
              为零售企业提供从基础设施到业务应用的全栈云解决方案。
              应对高并发大促，实现全渠道营销，数据驱动业务增长。
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center gap-x-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
                  {feature.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="#scenarios" color="blue" className="rounded-full px-8 py-3.5 text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                立即体验
              </Button>
              <Button href="#features" variant="outline" className="rounded-full px-8 py-3.5 text-base hover:bg-slate-50 hover:text-slate-900 transition-all">
                了解更多
              </Button>
            </div>
          </div>

          {/* 右侧图片展示 - 简洁大气 */}
          <div className="relative mx-auto w-full lg:mx-0">
            <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/10">
               <div className="relative rounded-xl overflow-hidden bg-slate-50">
                  <Image
                    src="https://www.crmeb.com/static/images/pro_store/pro_store.png"
                    alt="智慧零售云平台展示"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    unoptimized={true}
                  />
               </div>

              {/* 装饰性元素 */}
              <div className="absolute -top-12 -right-12 -z-10 h-[300px] w-[300px] bg-gradient-to-tr from-[#eff6ff] to-[#dbeafe] opacity-50 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 -z-10 h-[300px] w-[300px] bg-gradient-to-tr from-[#dbeafe] to-[#eff6ff] opacity-50 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Bento Grid 风格的行业趋势区域 - 替换为 Accordion 风格展示
 */
function TrendsSection() {
  const [activeTab, setActiveTab] = useState('private')

  // 行业解决方案数据
  const solutions: {
    [key: string]: {
      id: string
      name: string
      title: string
      icon: React.ComponentType<{ className?: string }>
      features: {
        icon: React.ComponentType<{ className?: string }>
        title: string
        desc: string
      }[]
    }
  } = {
    social: {
      id: 'social',
      name: '社交电商B2C',
      title: '社交电商B2C解决方案',
      icon: ChatBubbleLeftRightIcon,
      features: [
        { icon: ShareIcon, title: '拼团裂变', desc: '社交裂变营销，快速扩大用户规模' },
        { icon: VideoCameraIcon, title: '直播带货', desc: '实时互动销售，提升商品转化率' },
        { icon: UserGroupIcon, title: '社区团购', desc: '基于邻里关系，降低获客物流成本' },
        { icon: DevicePhoneMobileIcon, title: '小程序商城', desc: '即用即走，无缝连接微信生态' },
      ],
    },
    private: {
      id: 'private',
      name: '私域会员电商',
      title: '私域会员电商解决方案',
      icon: UserGroupIcon,
      features: [
        { icon: ShoppingCartIcon, title: '在线商城', desc: '高品质会员商城，集零售集采于一体' },
        { icon: ChatBubbleOvalLeftEllipsisIcon, title: '企微SCRM', desc: '连接企业微信，精细化客户运营' },
        { icon: ShareIcon, title: '分销裂变', desc: '多模式分销，助力业务指数级增长' },
        { icon: UserIcon, title: '会员管理', desc: '深度挖掘会员价值，提升复购率' },
        { icon: GiftIcon, title: '营销转化', desc: '全面营销工具，促进用户活跃转化' },
        { icon: DevicePhoneMobileIcon, title: '移动管理', desc: '随时随地管理业务，经营更高效' },
      ],
    },
    chain: {
      id: 'chain',
      name: '品牌连锁多门店',
      title: '品牌连锁多门店解决方案',
      icon: BuildingStorefrontIcon,
      features: [
        { icon: BuildingStorefrontIcon, title: '门店管理', desc: '多门店统一管理，标准化运营体系' },
        { icon: ArrowsRightLeftIcon, title: '统一库存', desc: '全渠道库存通，智能调拨补货' },
        { icon: UserIcon, title: '会员通', desc: '线上线下会员权益互通，体验一致' },
        { icon: CurrencyYenIcon, title: '财务对账', desc: '自动财务分账，经营数据一目了然' },
      ],
    },
    platform: {
      id: 'platform',
      name: '多商户平台电商',
      title: '多商户平台电商解决方案',
      icon: BuildingOffice2Icon,
      features: [
        { icon: BuildingOffice2Icon, title: '商家入驻', desc: '完善的商家入驻流程与审核机制' },
        { icon: ShieldCheckIcon, title: '资金担保', desc: '交易资金担保，保障买卖双方权益' },
        { icon: CogIcon, title: '平台自营', desc: '支持平台自营与第三方商家并存' },
        { icon: ChartPieIcon, title: '佣金结算', desc: '灵活的佣金设置与自动结算系统' },
      ],
    },
    crossborder: {
      id: 'crossborder',
      name: '外贸跨境出海',
      title: '外贸跨境出海解决方案',
      icon: GlobeAltIcon,
      features: [
        { icon: GlobeAltIcon, title: '多语言多币种', desc: '支持全球主流语言与货币支付' },
        { icon: CreditCardIcon, title: '跨境支付', desc: '对接国际支付网关，收款无忧' },
        { icon: TruckIcon, title: '海外物流', desc: '智能运费计算，物流轨迹全程追踪' },
        { icon: MegaphoneIcon, title: '海外营销', desc: 'SEO与社媒营销，触达全球客户' },
      ],
    },
    knowledge: {
      id: 'knowledge',
      name: '知识内容价值变现',
      title: '知识内容价值变现解决方案',
      icon: BookOpenIcon,
      features: [
        { icon: BookOpenIcon, title: '知识付费', desc: '文章、音频、图文等多种付费形式' },
        { icon: PlayCircleIcon, title: '视频课程', desc: '高清视频点播，防录屏安全加密' },
        { icon: UserPlusIcon, title: '专栏订阅', desc: '持续更新内容，建立长期订阅关系' },
        { icon: ChatBubbleBottomCenterTextIcon, title: '社群互动', desc: '学员互动问答，营造良好学习氛围' },
      ],
    },
  }

  const currentFeature = solutions[activeTab]

  /**
   * 处理鼠标悬停事件，自动切换到对应标签
   * @param tabId - 标签ID
   */
  const handleMouseEnter = (tabId: string) => {
    setActiveTab(tabId)
  }

  const Feature = ({
    icon: Icon,
    title,
    desc,
  }: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    desc: string
  }) => (
    <div className="flex flex-col items-start gap-1 sm:gap-2 lg:gap-3">
      <div className="flex items-center justify-center">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
      </div>
      <div className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-gray-300">
        <div className="font-medium text-white text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">{title}</div>
        <div className="text-white text-xs sm:text-xs lg:text-sm leading-4 sm:leading-5">{desc}</div>
      </div>
    </div>
  )

  return (
    <div
      className="w-full relative min-h-[60vh] sm:min-h-screen lg:min-h-[75vh]"
      style={{
        fontFamily: 'Microsoft YaHei, Arial, sans-serif',
      }}
    >
      {/* 背景图层 - 桌面端使用 retail.jpg，移动端使用 PrimaryFeatures.png */}
      <div
        className="absolute inset-0 -z-10 hidden sm:block"
        style={{
          backgroundImage: `url(/images/screenshots/retail.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          minHeight: '100vh',
        }}
      />

      {/* 移动端专用背景图层 - 移除模糊和透明度，确保清晰显示 */}
      <div
        className="absolute inset-0 -z-10 block sm:hidden"
        style={{
          backgroundImage: `url(/images/screenshots/retail.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          minHeight: '60vh',
        }}
      />
      {/* 顶部标题 */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-8">
        <div className="text-center">
          <div className="font-bold text-white mb-2 tracking-wide text-xl sm:text-2xl md:text-4xl lg:text-5xl">电商领域全行业解决方案</div>
          <div className="text-white font-medium text-base sm:text-lg md:text-2xl">构建全领域多渠道上线下智慧新零售体系</div>
        </div>
      </div>

      {/* 主体响应式布局 */}
      <div className="mx-auto mt-3 sm:mt-4 max-w-[1800px] px-4 sm:px-6 pb-8 sm:pb-20">
        <div className="flex flex-row gap-0 sm:gap-4 lg:gap-0">
           {/* 导航区域 - 移动端左侧，桌面端左侧 - 添加半透明遮罩和毛玻璃效果 */}
           <aside
             className="shrink-0 text-sm rounded-none order-1 w-[35%] sm:w-[32%] lg:w-[28%] p-2 sm:p-4 lg:py-6 lg:px-6 lg:pr-0 min-h-auto lg:min-h-[450px]"
             style={{
               fontFamily: 'Poppins, sans-serif',
               background: 'rgba(0,0,0,.05)', // 移动端降低透明度
               backdropFilter: 'blur(10px)', // 恢复为10px模糊效果
               fontWeight: 400,
               lineHeight: 1.5,
               color: '#212529',
               WebkitFontSmoothing: 'antialiased',
               boxSizing: 'border-box',
               margin: 0,
               listStyleType: 'none',
             }}
           >
             {/* 移动端和桌面端：垂直导航 */}
             <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2 px-1 sm:px-2 lg:px-0 lg:pr-0">
               {Object.values(solutions).map((feature, idx) => {
                 const isActive = feature.id === activeTab
                 const IconComponent = feature.icon
                 return (
                   <div
                     key={feature.id}
                     onClick={() => setActiveTab(feature.id)}
                     onMouseEnter={() => handleMouseEnter(feature.id)}
                     className={[
                       'relative flex cursor-pointer items-center justify-start lg:justify-end px-2 sm:px-3 lg:px-3 lg:pr-6',
                       'h-10 sm:h-12 lg:h-14 min-h-[40px] sm:min-h-[44px]', // 移动端减小高度
                       'mb-1 sm:mb-2 lg:mb-3', // 调整间距
                       'lg:rounded-none', // 移动端和桌面端都不使用圆角
                       'whitespace-nowrap', // 防止文字换行
                       isActive
                         ? 'text-white bg-[linear-gradient(270deg,#455FFE_0%,rgba(26,140,255,0)_100%)]'
                         : 'hover:bg-gray-700/60 bg-gray-800/40 lg:bg-transparent',
                     ].join(' ')}
                     style={{
                       fontFamily: 'Poppins, sans-serif',
                       fontWeight: 400,
                       lineHeight: 1.5,
                       color: '#fff'
                     }}
                   >
                     <div className="flex items-center gap-1 sm:gap-2 lg:gap-2">
                       <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                       <span className="truncate text-xs sm:text-sm lg:text-base">{feature.name}</span>
                       <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-white hidden sm:block lg:hidden ml-auto" />
                     </div>
                   </div>
                 )
               })}
             </div>
           </aside>

           {/* 内容面板 - 移动端右侧，桌面端右侧 - 增强半透明遮罩和毛玻璃效果 */}
           <section
             className="flex-1 text-gray-300 rounded-none flex flex-col justify-between order-2 w-[65%] sm:w-[68%] lg:w-[72%] p-2 sm:p-4 lg:py-6 lg:px-10 min-h-auto lg:min-h-[450px]"
             style={{
               background: 'rgba(0,0,0,.08)', // 移动端降低透明度
               backdropFilter: 'blur(15px)', // 恢复为15px模糊效果
             }}
           >
             {/* 头部标题区域 - 响应式优化 */}
             <div className="flex-shrink-0 mb-2 sm:mb-4 lg:mb-6">
               <div className="text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 tracking-wide leading-tight">{currentFeature.title}</div>
               <div className="w-12 sm:w-16 lg:w-24 h-0.5 sm:h-0.5 lg:h-1 bg-gradient-to-r from-blue-500 to-blue-400 mb-2 sm:mb-3 lg:mb-4 rounded-full"></div>
             </div>

             {/* 主要内容区域 - 响应式网格优化 */}
             <div className="flex-1 flex flex-col justify-center py-1 sm:py-2">
               <div className="grid grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-10 items-start">
                 {currentFeature.features.map((f, i) => (
                   <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
                 ))}
               </div>
             </div>

             {/* 底部操作区域 - 响应式按钮优化 */}
             <div className="flex-shrink-0 pt-2 sm:pt-4 lg:pt-6 mt-2 sm:mt-3 lg:mt-4">
               {/* 分隔线效果 */}
               <div className="mb-2 sm:mb-4 lg:mb-6 w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ height: '1px' }} />

               <div className="flex flex-col gap-2 sm:flex-row sm:justify-start sm:items-center sm:gap-3 lg:gap-4">
                 {/* 免费试用按钮 */}
                 <button
                   className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 min-h-[36px] sm:min-h-[44px] flex items-center justify-center gap-1 sm:gap-2"
                   type="button"
                 >
                   免费试用
                 </button>

                 {/* 查看详情按钮 */}
                 <button
                   className="border border-gray-300 bg-white px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-gray-900 shadow-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 min-h-[36px] sm:min-h-[44px] flex items-center justify-center gap-1 sm:gap-2"
                   type="button"
                 >
                   查看详情
                   <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                 </button>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  )
}

/**
 * 技术框架及技术亮点区域 - 复刻 HTML 设计
 */
function ScenariosSection() {
  const frameworks = [
    {
      icon: CpuChipIcon,
      title: 'Swoole4框架',
      description: '框架结合Swoole4突显卓越性能，提供PHP协程、高性能网络编程'
    },
    {
      icon: ShareIcon,
      title: '分布式部署',
      description: '分布式部署多台计算机，地域分散，构成松散耦合系统'
    },
    {
      icon: ServerIcon,
      title: '集群部署',
      description: '集群部署扩展能力强、高可用、易管理'
    },
    {
      icon: BoltIcon,
      title: 'Redis',
      description: '结合Redis原子特性，保证数据完整性，Redis能读的速度是11万次/s,写的速度是8.1万次/s 。'
    },
    {
      icon: CircleStackIcon,
      title: '数据库连接池',
      description: '内置数据库连接池，资源重复利用、以更快的响应速度，实现统一的连接管理，避免数据库连接泄露'
    }
  ]

  const highlights = [
    {
      icon: QueueListIcon,
      title: '消息队列',
      description: '使用消息队列异步处理事件，高效解耦，提升系统访问速度'
    },
    {
      icon: ClockIcon,
      title: '定时任务',
      description: '无需手动触发，执行事件精准，低耦合'
    },
    {
      icon: ArrowsRightLeftIcon,
      title: '负载均衡',
      description: '利用多台服务器，分配网络请求到其他服务器，减少单服务器压力'
    },
    {
      icon: ShieldCheckIcon,
      title: '独立数据库部署',
      description: '系统独立部署，具备独立数据库，有效提高数据安全'
    },
    {
      icon: CloudIcon,
      title: '云存储',
      description: '用来增加静态资源加载速度，便于维护和部署，可以享受速度和敏感数据的控制优势'
    }
  ]

  const CardList = ({ title, items }: { title: string, items: typeof frameworks }) => (
    <div className="bg-white rounded-lg p-0 relative overflow-hidden h-full">
      {/* 标题区域 */}
      <div className="pt-7 pl-10 mb-2">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <div className="w-10 h-1 bg-blue-600 mt-2"></div>
      </div>

      {/* 装饰背景 - 右上角立方体效果模拟 */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
         <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 blur-2xl rounded-full opacity-20"></div>
         <CloudArrowUpIcon className="absolute top-8 right-8 w-24 h-24 text-blue-100" />
      </div>

      {/* 列表内容 */}
      <div className="pr-8 pb-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start pl-10 pt-10 group transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mr-3 flex-shrink-0">
               <item.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900 mb-2.5 text-base">{item.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-slate-50">
      <Container>
        {/* 顶部标题 */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">技术框架及技术亮点</h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto">
            系统采用高性能框架开发，保障系统整体性能，为品牌连锁企业商业拓展保驾护航
          </p>
        </div>

        {/* 双列布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CardList title="技术框架" items={frameworks} />
          <CardList title="技术亮点" items={highlights} />
        </div>
      </Container>
    </section>
  )
}

/**
 * 解决方案与特性 - 综合展示 - 复刻 HTML 设计
 */
function FeaturesSection() {
  const features = [
    {
      title: '极易二开',
      description: '后台标准接口、前后端分离，二次开发更方便',
      icon: CodeBracketIcon,
    },
    {
      title: '代码开源',
      description: '代码开源、清晰，对有二次开发需求的客户十分友好',
      icon: ShareIcon,
    },
    {
      title: '高性能框架',
      description: '基于ThinkPhp6+ Swoole4+Uniapp 开发的高性能系统框架',
      icon: CpuChipIcon,
    },
    {
      title: '独立部署',
      description: '私有化独立安装部署，信息独立保存，数据更安全',
      icon: LockClosedIcon,
    },
    {
      title: '永久免费更新',
      description: '一次购买即可享受系统永久免费更新，系统升级更便捷更省心',
      icon: ArrowPathIcon,
    },
    {
      title: '文档齐全',
      description: '开发文档、接口文档、安装文档、使用文档全面支持，帮助用户快速安装使用',
      icon: DocumentTextIcon,
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">助力开发者，提速企业数字化</h2>
          <p className="text-base text-slate-600">系统性能优越，开发技术先进，有效助力开发者，提速企业数字化</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-slate-100 p-8 h-[220px] group"
            >

              {/* 内容区域 */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <div className="w-8 h-1 bg-blue-600 mb-4"></div>
                <p className="text-sm leading-relaxed text-slate-500 pr-10">{feature.description}</p>
              </div>

              {/* 悬浮时的装饰图标 */}
              <div className="absolute bottom-6 right-6 p-3 rounded-full bg-blue-50 text-blue-600 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 品牌介绍区域
 */
function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#eff6ff] px-6 py-16 sm:px-16 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-display">
              品牌介绍
            </h2>
            <div className="mt-10 space-y-8 text-xl leading-9 text-slate-600 sm:text-2xl sm:leading-10 font-light">
              <p>
                围绕电商领域，<span className="font-medium text-slate-900"></span> 希望能够构建多元化的产品长期愿景是助力企业低成本、高效快速并且质量可靠、安全稳定的实现各类有趣的创意，落地一个又一个的
              </p>
              <p>
               多元化产品都将构建于开源的场景下，立志成为大家首选的商城系统解决方案。初心不改，使命不移，会坚持开源路线不动摇，坚持极易二次开发研发思路不动摇，坚持做好技术服务态度不动摇。
              </p>
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-8">
              <Button href="#" color="blue" className="px-8 py-4 text-lg">
                立即开始
              </Button>
              <Button href="#" variant="outline" className="px-8 py-4 text-lg">
                了解更多
                <span aria-hidden="true" className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 售后服务区域 - 复刻 HTML 设计
 */
function TestimonialsSection() {
  const services = [
    {
      title: '安装视频',
      description: '从服务器配置到程序上线，完整视频教程系统讲解',
      icon: VideoIcon,
    },
    {
      title: '资料支持',
      description: '开发、接口、安装、使用文档全面支持，助用户安装使用',
      icon: FolderIcon,
    },
    {
      title: '技术论坛',
      description: '专业社区式论坛，交流/反馈/帮助/公告一体化',
      icon: ChatIcon,
    },
    {
      title: '专属会员群',
      description: '从服务器配置到程序上线，完整视频教程系统讲解',
      icon: UsersGroupIcon,
    },
    {
      title: '1V1客服',
      description: '添加客服微信，享受尊贵服务，一手资料及',
      icon: UserIcon,
    },
    {
      title: '免费升级',
      description: '系统永久免费更新，及时获取新功能',
      icon: ArrowUpCircleIcon,
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">全面售后服务，再无后顾之忧</h2>
          <p className="text-base text-slate-600">两种授权模式可选，根据您的需求灵活选择</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center p-8 bg-white rounded-lg border border-slate-100"
            >
              {/* 图标区域 */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <service.icon className="w-8 h-8" />
              </div>

              {/* 文本区域 */}
              <div className="ml-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * CTA Section - 优化配色为品牌蓝
 */
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0055ff] py-24 text-center">
      {/* 装饰背景：微弱的网格纹理 + 径向渐变遮罩 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* 装饰光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          准备好开启数字化转型之旅了吗？
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-blue-50">
          立即联系我们的解决方案专家，获取为您量身定制的零售云方案。
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button
            href="/contact"
            color="white"
            className="rounded-lg px-8 py-3 text-base font-semibold !text-[#0055ff] hover:!bg-blue-50 hover:!text-[#0043cc] shadow-xl shadow-blue-900/10 transition-all"
          >
            联系销售
          </Button>
          <Button href="/demo" className="rounded-lg border border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all">
            预约演示
          </Button>
        </div>
      </Container>
    </section>
  )
}

/**
 * 咨询服务区域 - 复刻参考设计
 */
function ConsultSection() {
  return (
    <section className="bg-gradient-to-b from-[#eef2ff] to-[#f5f7ff] py-20 lg:py-28 relative overflow-hidden">
      {/* 装饰背景图 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50" style={{
        backgroundImage: 'url(/_nuxt/img/consult_icon.1f4d6cc.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}></div>

      <Container className="relative z-10">
        <div className="mx-auto">
          {/* 标题区域 */}
          <div className="mb-10">
            <h2 className="text-3xl font-medium text-[#101010] mb-3">立即咨询</h2>
            <p className="text-base text-[#7a8093]">联系我们，竭诚为您提供数字化资讯服务</p>
          </div>

          {/* 内容卡片区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 微信联系卡片 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-medium text-[#101010] mb-2">微信联系</h3>
                <p className="text-base text-[#7a8093]">扫码添加企业客服了解更多优惠信息</p>
              </div>
              <div className="w-[150px] h-[150px] shrink-0 bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="/images/contact/userhlc.png"
                  alt="企业微信二维码"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-md"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* 合作咨询卡片 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-medium text-[#101010] mb-2">合作咨询</h3>
                <p className="text-base text-[#7a8093]">工作日：9:00—18:15</p>
              </div>
              <div className="text-center sm:text-right">
                <span className="block text-3xl font-medium text-[#101010] mb-2">236749035</span>
                <span className="text-base text-[#7a8093]">联系QQ</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 零售行业解决方案主页面
 */
export default function RetailPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrendsSection />
      <ScenariosSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ConsultSection />
      <CTASection />
    </>
  )
}
