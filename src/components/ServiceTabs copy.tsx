'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flame,
  Cloud,
  Database,
  BrainCircuit,
  ShieldCheck,
  Layers,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

// ==================== 样式组件 (Typography & Layout) ====================

/**
 * 排版系统组件库 - 基于用户要求的 UI 规范
 * H1: 24px, Bold, 1.5 LineHeight, Py-20px
 * H2: 20px, SemiBold, 1.4 LineHeight, Py-16px
 * H3: 18px, Regular, 1.3 LineHeight, Py-12px
 * H4: 16px, Regular, 1.2 LineHeight, Py-8px
 * Paragraph: 14-16px, 1.6 LineHeight
 */
const Typography = {
  H1: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={clsx("text-[20px] xs:text-[22px] sm:text-[28px] font-bold leading-[1.4] sm:leading-[1.5] text-[--color-text-primary] py-2 sm:py-3 tracking-tight", className)}>
      {children}
    </h2>
  ),
  H2: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("text-[18px] sm:text-[24px] font-semibold leading-[1.4] text-[--color-text-primary] py-1.5 sm:py-2 tracking-tight", className)}>
      {children}
    </div>
  ),
  H3: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("text-[16px] sm:text-[18px] font-normal leading-[1.3] text-[--color-text-primary] py-1.5 sm:py-2 tracking-normal", className)}>
      {children}
    </div>
  ),
  H4: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("text-[14px] sm:text-[16px] font-normal leading-[1.2] text-[--color-text-primary] py-1", className)}>
      {children}
    </div>
  ),
  Paragraph: ({ children, className, emphasized }: { children: React.ReactNode; className?: string; emphasized?: boolean }) => (
    <div className={clsx("text-[13px] sm:text-[14px] md:text-[16px] leading-[1.5] sm:leading-[1.6] text-[--color-text-secondary]", emphasized && "bg-blue-50/50 p-2 sm:p-3 rounded-lg border border-blue-100", className)}>
      {children}
    </div>
  )
}

// ==================== 子组件 ====================

/**
 * 标签组件 - 统一标签样式
 */
function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const baseStyles = 'text-xs sm:text-[12px] px-2 sm:px-3 py-1 leading-6 rounded-sm font-medium transition-colors'

  return (
    <div className={clsx(baseStyles, className)}>
      {children}
    </div>
  )
}

/**
 * 带箭头的链接组件 - 统一链接样式
 */
function LinkWithArrow({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={clsx(
        'flex items-center text-sm text-[--color-text-primary] hover:text-blue-600 group transition-colors whitespace-nowrap font-medium',
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="ml-1.5 w-4 h-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

/**
 * 文档/详情链接组件 - Banner 内使用
 */
function DocLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-[--color-text-secondary] hover:text-blue-600 transition-colors font-medium flex items-center text-sm sm:text-base group"
    >
      <span>{children}</span>
      <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

/**
 * 产品数据类型定义 - 企业级服务产品信息结构
 * @interface Product
 */
interface Product {
  id: string
  name: string
  description: string
  tags: string[]
  link?: string
}

/**
 * 服务选项卡数据类型定义 - 服务分类信息结构
 * @interface ServiceTab
 */
interface ServiceTab {
  id: string
  name: string
  icon: React.ElementType // 图标组件
  banner: {
    title: string
    description: string
    tags: string[]
    buttonText: string
    link?: string
    image?: string // Banner 产品图片 URL
  }
  secondaryBanner: {
    title: string
    tags: string[]
    link?: string
  }
  products: Product[]
}

/**
 * 服务选项卡数据配置 - 企业级云服务产品矩阵
 * 数据来源于优刻得官网真实内容 (2024/03)
 */
const serviceTabs: ServiceTab[] = [
  {
    id: 'hot-recommendation',
    name: '热门推荐',
    icon: Flame,
    banner: {
      title: '快杰云主机特惠',
      description:
        '旗舰型云主机搭载新一代CPU，支持高网络带宽和存储性能，覆盖海内外30+节点，适合通用场景。',
      tags: ['独享带宽', '全球节点', '低至1.5折'],
      buttonText: '立即购买',
      link: 'https://www.ucloud.cn/site/active/uhost.html',
      image: '/images/aisolution/components-1.png',
    },
    secondaryBanner: {
      title: '推荐有礼 返现35%',
      tags: ['低门槛', '丰厚奖励', '长期获利'],
      link: 'https://www.ucloud.cn/site/active/regift.html',
    },
    products: [
      {
        id: 'overseas',
        name: '出海云产品汇集',
        description:
          '汇集海内外云服务器、专线、数据库等产品，海内外业务低成本上云',
        tags: ['五大洲节点', '出海必备', '低至0.5折'],
        link: 'https://www.ucloud.cn/site/active/kuaijiesale.html',
      },
      {
        id: 'hk-cloud',
        name: '香港钜惠上云',
        description: '回内地优化线路，BGP智能选路，云服务器全场低至1折',
        tags: ['直连内地', '新客特惠', '跨境业务'],
        link: 'https://www.ucloud.cn/site/active/hk-global.html',
      },
      {
        id: 'gpu',
        name: 'GPU云服务器',
        description: '9.9元/天，一键部署体验DeepSeek等全系列镜像',
        tags: ['算力狂飙', '国产AI 低至1.4折'],
        link: 'https://www.ucloud.cn/site/active/gpu.html',
      },
      {
        id: 'cross-border',
        name: '跨境电商专区',
        description: '节点覆盖东南亚、日韩、欧美等全球32个热门地区市场',
        tags: ['多店铺管理', '防关联', '独立站'],
        link: 'https://www.ucloud.cn/site/active/crossborder.html',
      },
      {
        id: 'global-network',
        name: '全球专线服务',
        description: '全球31个节点组成骨干网，跨境加速业务优选',
        tags: ['全球一张网', '就近接入', '内网互通'],
        link: 'https://www.ucloud.cn/site/active/network.html',
      },
      {
        id: 'light-host',
        name: '轻量应用云主机',
        description: '入门级云主机，套餐式计费，57元/年起',
        tags: ['大流量包', '入门级', '开箱即用'],
        link: 'https://www.ucloud.cn/site/active/ulighthost.html',
      },
      {
        id: 'sms',
        name: '全球短信特惠',
        description: '文本/视频短信、语音消息、号码认证等',
        tags: ['快速稳定', '智能调度', '快速接入'],
        link: 'https://www.ucloud.cn/site/active/sms.html',
      },
      {
        id: 'ddos',
        name: 'DDoS 攻击防护',
        description:
          '国内5大清洗中心，海外8大节点的Anycast任播网络，优质“近源防护”',
        tags: ['全球分布', '智能防护', '稳定可靠'],
        link: 'https://www.ucloud.cn/site/product/uddos.html',
      },
      {
        id: 'bare-metal',
        name: '裸金属服务器',
        description: '超高性能计算灵活部署，9.9元试用',
        tags: ['分钟级交付', '高性能', '弹性伸缩'],
        link: 'https://www.ucloud.cn/site/active/uphost.html',
      },
    ],
  },
  {
    id: 'basic-cloud',
    name: '基础云计算',
    icon: Cloud,
    banner: {
      title: '基础云计算特惠',
      description: '提供稳定、安全、弹性的云计算基础服务，满足企业数字化转型需求',
      tags: ['弹性伸缩', '安全可靠', '高性能'],
      buttonText: '查看详情',
    },
    secondaryBanner: {
      title: '新客上云大礼包',
      tags: ['代金券', '免费试用'],
    },
    products: Array(9).fill({
      id: 'demo',
      name: '云服务器 UHost',
      description: '高性能企业级云服务器，秒级启动，弹性扩展',
      tags: ['热销', '通用型', '高性能'],
    }),
  },
  {
    id: 'database',
    name: '数据库与大数据',
    icon: Database,
    banner: {
      title: '云数据库特惠',
      description: '提供MySQL、Redis、MongoDB等多种数据库服务，免运维，高可用',
      tags: ['自动备份', '读写分离', '监控告警'],
      buttonText: '立即试用',
    },
    secondaryBanner: {
      title: '数据库迁移工具',
      tags: ['一键迁移', '数据同步'],
    },
    products: Array(9).fill({
      id: 'demo-db',
      name: '云数据库 UDB',
      description: '稳定可靠的云数据库服务，支持主从热备、自动容灾',
      tags: ['MySQL', '高可用', '自动备份'],
    }),
  },
  {
    id: 'ai',
    name: '人工智能',
    icon: BrainCircuit,
    banner: {
      title: 'AI算力平台',
      description: '提供高性能GPU算力，支持TensorFlow、PyTorch等主流框架',
      tags: ['高性能GPU', '预置环境', '弹性计费'],
      buttonText: '立即体验',
    },
    secondaryBanner: {
      title: 'AI模型市场',
      tags: ['开箱即用', '丰富模型'],
    },
    products: Array(9).fill({
      id: 'demo-ai',
      name: 'AI训练服务',
      description: '一站式AI训练平台，提供从数据处理到模型训练的全流程服务',
      tags: ['分布式训练', '自动调参', '可视化'],
    }),
  },
  {
    id: 'security',
    name: '安全、开发与运维',
    icon: ShieldCheck,
    banner: {
      title: '云安全中心',
      description: '态势感知、主机安全、漏洞扫描等全方位安全防护',
      tags: ['等保合规', '实时监控', '威胁阻断'],
      buttonText: '免费检测',
    },
    secondaryBanner: {
      title: 'SSL证书服务',
      tags: ['https加密', '数据安全'],
    },
    products: Array(9).fill({
      id: 'demo-sec',
      name: 'Web应用防火墙',
      description: '防护OWASP Top 10常见Web攻击，保障网站安全',
      tags: ['防SQL注入', '防XSS', 'CC防护'],
    }),
  },
  {
    id: 'hybrid',
    name: '混合云与私有云',
    icon: Layers,
    banner: {
      title: '混合云解决方案',
      description: '打通公有云与私有云，实现资源统一管理和弹性调度',
      tags: ['统一管理', '专线互联', '平滑迁移'],
      buttonText: '咨询专家',
    },
    secondaryBanner: {
      title: '私有云平台',
      tags: ['自主可控', '定制开发'],
    },
    products: Array(9).fill({
      id: 'demo-hybrid',
      name: '托管云服务',
      description: '提供物理服务器托管服务，独享硬件资源，安全可控',
      tags: ['独享资源', '定制配置', '专线接入'],
    }),
  },
  {
    id: 'communication',
    name: '云通信与企业应用',
    icon: MessageSquare,
    banner: {
      title: '企业通信服务',
      description: '短信、语音、号码隐私保护等全场景通信服务能力',
      tags: ['高到达率', '秒级触达', '全球覆盖'],
      buttonText: '立即开通',
    },
    secondaryBanner: {
      title: '企业邮箱',
      tags: ['无限容量', '安全反垃圾'],
    },
    products: Array(9).fill({
      id: 'demo-comm',
      name: '云短信 SMS',
      description: '验证码、通知、营销短信，三网合一，快速到达',
      tags: ['验证码', '通知短信', '营销短信'],
    }),
  },
]

/**
 * 企业级服务选项卡主组件 - 100%复刻优刻得UI设计，支持多端响应式
 *
 * 优化说明 (2026-01-04):
 * 1. 引入 Typography 系统，规范化字体层级 (H1-H4)
 * 2. 建立统一间距系统 (8px基准)
 * 3. 增强视觉一致性和代码复用性
 */
export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const activeService = serviceTabs[activeTab]
  const { banner, secondaryBanner, products } = activeService

  return (
    <section className="font-sans py-6 sm:py-8 lg:py-10 bg-[#f7f9fe]">
      <div className="w-full max-w-[1800px] px-3 sm:px-6 lg:px-8 mx-auto">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 lg:mb-6">
          <div className="flex-1">
            <Typography.H1 className="!my-0 mb-1 sm:mb-1.5 !text-[20px] xs:!text-[22px] sm:!text-[24px] lg:!text-[28px] !py-1">
              自主研发，安全可靠的云服务
            </Typography.H1>
            <Typography.Paragraph className="!mb-0 !text-xs sm:!text-sm">
              12年技术沉淀，100+款产品与服务，持续创新
            </Typography.Paragraph>
          </div>
          <div className="hidden lg:flex flex-row gap-6 items-center mt-4 sm:mt-0">
            <LinkWithArrow href="https://www.ucloud.cn/site/pro-notice/">
              最新动态
            </LinkWithArrow>
            <LinkWithArrow href="https://www.ucloud.cn/site/calculator.html">
              定价
            </LinkWithArrow>
          </div>
        </div>

        {/* 顶部 Tab 导航 - 药丸样式 (参考 PrimaryFeatures) */}
        <div className="flex justify-start mb-3 sm:mb-4 lg:mb-6 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory scroll-pl-3">
          <div className="inline-flex p-1 bg-white backdrop-blur-md rounded-xl border border-slate-200/60 min-w-full sm:min-w-0">
            {serviceTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 whitespace-nowrap outline-none select-none snap-start active:scale-95 sm:active:scale-100",
                  activeTab === index
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-blue-600 hover:bg-white/50"
                )}
              >
                <tab.icon
                  className={clsx(
                    "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-opacity duration-300",
                    activeTab === index ? "opacity-100" : "opacity-70"
                  )}
                />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 内容区域 */}
        <div className="relative min-h-[300px] sm:min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col lg:flex-row w-full"
            >
              {/* 左侧区域 */}
              <div className="w-full lg:w-[320px] xl:w-[360px] h-auto flex flex-col mb-3 lg:mb-0 lg:mr-3 flex-shrink-0 gap-3">
                 {/* 上方 Banner */}
                <div className="flex-1 min-h-[220px] sm:min-h-[260px] w-full rounded-xl bg-white border border-slate-100 overflow-hidden relative transition-all duration-300 group/banner">
                   <div className="absolute top-0 right-0 w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] bg-gradient-to-bl from-blue-50/30 to-transparent rounded-bl-full pointer-events-none" />

                   <div className="h-full w-full p-4 sm:p-5 lg:p-6 flex flex-col relative justify-center z-10">
                      <div className="flex-1 flex flex-col justify-center">
                          <div className="flex flex-col gap-2 mb-2 sm:mb-3">
                              <Typography.H2 className="!my-0 !text-[16px] sm:!text-[20px] group-hover/banner:text-blue-600 transition-colors">
                                {banner.title}
                              </Typography.H2>

                              <div className="flex flex-wrap gap-1.5 mt-1">
                            {banner.tags.map((tag, i) => (
                               <Tag key={i} className="mr-0 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                                 {tag}
                               </Tag>
                             ))}
                          </div>
                      </div>

                      <Typography.Paragraph className="border-t border-slate-50 pt-3 sm:pt-4 mt-1 !text-xs sm:!text-sm">
                        {banner.description}
                      </Typography.Paragraph>

                      <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                          <DocLink href="https://docs.ucloud.cn/uhost/introduction/uhost/type_new">
                              产品文档
                          </DocLink>
                          {banner.link && (
                            <DocLink href={banner.link}>了解详情</DocLink>
                          )}
                      </div>
                  </div>

                  {banner.link && (
                    <a
                      href={banner.link}
                      target="_blank"
                      rel="noopener"
                      className="h-[40px] sm:h-[44px] leading-[40px] sm:leading-[44px] mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center text-sm sm:text-base font-bold rounded-lg transition-all duration-300 block hover:-translate-y-1 tracking-wide relative overflow-hidden group/btn active:scale-[0.98] sm:active:scale-100"
                    >
                      <span className="relative z-10">{banner.buttonText}</span>
                    </a>
                  )}
               </div>
            </div>

            {/* 下方 Banner */}
            <div className={clsx(
               "h-auto min-h-[70px] sm:min-h-[80px] w-full rounded-xl border overflow-hidden relative transition-all duration-300 flex items-center group flex-shrink-0 active:scale-[0.99] sm:active:scale-100",
               secondaryBanner.link
                 ? "bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 border-blue-100/60 hover:border-blue-200 hover:-translate-y-0.5 cursor-pointer"
                 : "bg-gradient-to-br from-slate-50 via-white to-slate-50 border-slate-200"
            )}>
              {secondaryBanner.link ? (
                <a href={secondaryBanner.link} target="_blank" rel="noopener" className="w-full h-full flex">
                   <div className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 flex flex-col justify-center h-full relative z-10">
                       <div className="flex justify-between items-center mb-1">
                           <Typography.H3 className="!my-0 !text-[15px] sm:!text-[16px] group-hover:text-blue-600 transition-colors flex-1 pr-4">
                             {secondaryBanner.title}
                           </Typography.H3>
                           <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                              <ArrowRight className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 opacity-100 group-hover:text-white transition-colors" />
                           </span>
                       </div>
                       <div className="flex flex-wrap gap-1.5">
                           {secondaryBanner.tags.map((tag, i) => (
                            <Tag key={i} className="mr-0 px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/80 text-[--color-text-secondary] group-hover:text-[--color-text-secondary] border border-blue-100/50 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                              {tag}
                            </Tag>
                          ))}
                       </div>
                   </div>
                </a>
              ) : (
                <div className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 flex flex-col justify-center h-full">
                    <Typography.H3 className="!my-0 mb-1 !text-[15px] sm:!text-[16px]">
                      {secondaryBanner.title}
                    </Typography.H3>
                    <div className="flex flex-wrap gap-1.5">
                        {secondaryBanner.tags.map((tag, i) => (
                         <Tag key={i} className="mr-0 px-2 py-0.5 text-[10px] font-medium rounded-full bg-white text-[--color-text-secondary] border border-slate-200">
                           {tag}
                         </Tag>
                       ))}
                    </div>
                </div>
              )}
            </div>
         </div>

             {/* 右侧网格区域 */}
             <div className="rounded-xl h-auto flex-1 bg-white overflow-hidden border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full h-auto p-2 sm:p-3 gap-2 sm:gap-3">
                   {products.map((product, idx) => {
                     const content = (
                       <div className="h-auto min-h-[80px] sm:min-h-[90px] lg:h-full flex flex-col justify-center p-3 sm:p-4 group cursor-pointer hover:bg-slate-50/50 transition-all rounded-lg hover:scale-[1.02] hover:z-10 border border-transparent hover:border-blue-50 relative duration-300 active:scale-[0.98] sm:active:scale-[1.02]">
                         <div className="w-full">
                           <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <Typography.H4 className="!my-0 !text-[15px] sm:!text-[16px] !font-bold line-clamp-1 flex-1 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </Typography.H4>
                            <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 duration-300">
                              <ArrowRight className="w-2.5 h-2.5" />
                            </span>
                          </div>

                          <Typography.Paragraph className="!text-xs sm:!text-sm line-clamp-2 !mb-2 min-h-[32px] sm:min-h-[40px] group-hover:text-[--color-text-secondary]/80 leading-relaxed">
                            {product.description}
                          </Typography.Paragraph>

                           <div className="flex flex-wrap gap-1.5">
                             {product.tags.map((tag, tIdx) => (
                               <Tag key={tIdx} className="mr-0 px-1.5 py-0.5 text-[10px] bg-slate-100/80 group-hover:bg-blue-50 group-hover:text-blue-600 rounded transition-all text-[--color-text-secondary]">
                                 {tag}
                               </Tag>
                             ))}
                           </div>
                         </div>
                       </div>
                     )

                      return product.link ? (
                        <a
                          key={idx}
                          href={product.link}
                          target="_blank"
                          rel="noopener"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={idx}>{content}</div>
                      )
                    })}
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
