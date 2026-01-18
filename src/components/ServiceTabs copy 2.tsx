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
 * 排版系统组件库 - 基于 Bento Linear Design 规范
 * 使用 Clash Display / Lexend 作为标题字体 (font-display)
 * 使用 Inter / Clash Grotesk 作为正文字体 (font-sans)
 */
const Typography = {
  /**
   * 一级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H1: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={clsx("font-display text-[20px] xs:text-[22px] sm:text-[28px] font-bold leading-[1.4] sm:leading-[1.5] text-neutral-950 dark:text-neutral-50 py-2 sm:py-3 tracking-tight", className)}>
      {children}
    </h2>
  ),
  /**
   * 二级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H2: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("font-display text-[18px] sm:text-[24px] font-semibold leading-[1.4] text-neutral-900 dark:text-neutral-100 py-1.5 sm:py-2 tracking-tight", className)}>
      {children}
    </div>
  ),
  /**
   * 三级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H3: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("font-sans text-[16px] sm:text-[18px] font-medium leading-[1.3] text-neutral-900 dark:text-neutral-100 py-1.5 sm:py-2", className)}>
      {children}
    </div>
  ),
  /**
   * 四级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H4: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("font-sans text-[14px] sm:text-[16px] font-medium leading-[1.2] text-neutral-900 dark:text-neutral-100 py-1", className)}>
      {children}
    </div>
  ),
  /**
   * 段落文本组件
   * @param {React.ReactNode} children - 文本内容
   * @param {string} [className] - 额外的 CSS 类名
   * @param {boolean} [emphasized] - 是否强调显示
   */
  Paragraph: ({ children, className, emphasized }: { children: React.ReactNode; className?: string; emphasized?: boolean }) => (
    <div className={clsx("font-sans text-[13px] sm:text-[14px] md:text-[16px] leading-[1.5] sm:leading-[1.6] text-neutral-600 dark:text-neutral-400", emphasized && "bg-neutral-100 dark:bg-neutral-800 p-3 border border-neutral-200 dark:border-neutral-700", className)}>
      {children}
    </div>
  )
}

// ==================== 子组件 ====================

/**
 * 标签组件 - 统一标签样式 (Bento 风格：直角、边框、单色调)
 * @param {React.ReactNode} children - 标签内容
 * @param {string} [className] - 额外的 CSS 类名
 */
function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const baseStyles = 'font-mono text-xs sm:text-[12px] px-2 sm:px-3 py-1 leading-6 rounded-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-medium transition-colors'

  return (
    <div className={clsx(baseStyles, className)}>
      {children}
    </div>
  )
}

/**
 * 带箭头的链接组件 - 统一链接样式
 * @param {string} href - 链接地址
 * @param {React.ReactNode} children - 链接文本
 * @param {string} [className] - 额外的 CSS 类名
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
        'flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-primary-500 group transition-colors whitespace-nowrap',
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
 * @param {string} href - 链接地址
 * @param {React.ReactNode} children - 链接文本
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
      className="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 transition-colors font-medium flex items-center text-sm sm:text-base group"
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
 * 企业级服务选项卡主组件 - Bento Linear Design 风格重构
 *
 * 核心设计遵循:
 * 1. Geometry: 直角 (rounded-none), 边框优先 (border-first)
 * 2. Color: Neutral Foundation + Primary Blue (#2b7fff) Accent
 * 3. Typography: Tech-focused (Lexend/Inter/Mono)
 * 4. Micro-interactions: 边框颜色变化，无缩放动画
 */
export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const activeService = serviceTabs[activeTab]
  const { banner, secondaryBanner, products } = activeService

  return (
    <section className="font-sans py-6 sm:py-8 lg:py-10 bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full max-w-[1800px] px-3 sm:px-6 lg:px-8 mx-auto">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 lg:mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="flex-1">
            <Typography.H1 className="!my-0 mb-1 sm:mb-1.5 !py-1">
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

        {/* 顶部 Tab 导航 - Bento 风格 Segmented Control */}
        <div className="flex justify-start mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1">
          <div className="inline-flex border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 min-w-full sm:min-w-0 rounded-none">
            {serviceTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap outline-none select-none rounded-none border-r border-neutral-200 dark:border-neutral-800 last:border-r-0 hover:bg-neutral-50 dark:hover:bg-neutral-800",
                  activeTab === index
                    ? "bg-neutral-100 dark:bg-neutral-800 text-primary-500 shadow-[inset_0_-2px_0_0_var(--color-primary-500)]"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-primary-500"
                )}
              >
                <tab.icon
                  className={clsx(
                    "w-4 h-4 transition-colors duration-200",
                    activeTab === index ? "text-primary-500" : "text-neutral-400 group-hover:text-primary-500"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col lg:flex-row w-full gap-4"
            >
              {/* 左侧区域 */}
              <div className="w-full lg:w-[320px] xl:w-[360px] flex flex-col gap-4 flex-shrink-0">
                 {/* 上方 Banner */}
                <article className="flex-1 min-h-[220px] sm:min-h-[260px] w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between group border-glow rounded-none relative overflow-hidden">
                   {/* Grid Background Pattern */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                   <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-1">
                          <div className="flex flex-col gap-3 mb-4">
                              <Typography.H2 className="!my-0 !text-[18px] sm:!text-[20px] group-hover:text-primary-500 transition-colors">
                                {banner.title}
                              </Typography.H2>

                              <div className="flex flex-wrap gap-2">
                            {banner.tags.map((tag, i) => (
                               <Tag key={i} className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                                 {tag}
                               </Tag>
                             ))}
                          </div>
                      </div>

                      <Typography.Paragraph className="pt-4 border-t border-neutral-100 dark:border-neutral-800 !text-xs sm:!text-sm">
                        {banner.description}
                      </Typography.Paragraph>

                      <div className="mt-6 flex items-center gap-4">
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
                      className="btn btn-primary w-full mt-6 text-center"
                    >
                      {banner.buttonText}
                    </a>
                  )}
                  </div>
               </article>

                {/* 下方 Banner */}
                <article className={clsx(
                  "min-h-[80px] w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 border-glow rounded-none group flex flex-col justify-center",
                  secondaryBanner.link && "cursor-pointer"
                )}>
                  {secondaryBanner.link ? (
                    <a href={secondaryBanner.link} target="_blank" rel="noopener" className="w-full h-full p-6 flex flex-col justify-center relative z-10">
                        <div className="flex justify-between items-center mb-2">
                            <Typography.H3 className="!my-0 !text-[15px] sm:!text-[16px] group-hover:text-primary-500 transition-colors flex-1 pr-4">
                              {secondaryBanner.title}
                            </Typography.H3>
                            <ArrowRight className="text-neutral-300 w-5 h-5 group-hover:text-primary-500 transition-colors" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {secondaryBanner.tags.map((tag, i) => (
                            <Tag key={i} className="bg-transparent border-neutral-200 dark:border-neutral-700 text-neutral-500">
                              {tag}
                            </Tag>
                          ))}
                        </div>
                    </a>
                  ) : (
                    <div className="w-full p-6 flex flex-col justify-center">
                        <Typography.H3 className="!my-0 mb-2 !text-[15px] sm:!text-[16px]">
                          {secondaryBanner.title}
                        </Typography.H3>
                        <div className="flex flex-wrap gap-2">
                            {secondaryBanner.tags.map((tag, i) => (
                             <Tag key={i}>
                               {tag}
                             </Tag>
                           ))}
                        </div>
                    </div>
                  )}
                </article>
             </div>

             {/* 右侧网格区域 */}
             <div className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
                   {products.map((product, idx) => {
                     const content = (
                      <article className="h-full flex flex-col justify-start p-4 group cursor-pointer border border-neutral-200 dark:border-neutral-800 transition-colors rounded-none bg-neutral-50 dark:bg-neutral-800/50 border-glow relative duration-200">
                         <div className="w-full">
                           <div className="flex items-center justify-between mb-3">
                            <Typography.H4 className="!my-0 !text-[15px] sm:!text-[16px] !font-bold line-clamp-1 flex-1 group-hover:text-primary-500 transition-colors">
                              {product.name}
                            </Typography.H4>
                            <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 transition-colors opacity-0 group-hover:opacity-100" />
                          </div>

                          <Typography.Paragraph className="!text-xs sm:!text-sm line-clamp-2 !mb-4 min-h-[40px] text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 leading-relaxed">
                            {product.description}
                          </Typography.Paragraph>

                           <div className="flex flex-wrap gap-2 mt-auto">
                             {product.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="font-mono text-[10px] px-1.5 py-0.5 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 group-hover:text-primary-500 group-hover:bg-gradient-to-br group-hover:from-neutral-50 group-hover:to-white dark:group-hover:from-neutral-950 dark:group-hover:to-neutral-900 transition-colors">
                                {tag}
                              </span>
                             ))}
                           </div>
                         </div>
                       </article>
                     )

                      return product.link ? (
                        <a
                          key={idx}
                          href={product.link}
                          target="_blank"
                          rel="noopener"
                          className="h-full"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={idx} className="h-full">{content}</div>
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
