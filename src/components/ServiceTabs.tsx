'use client'

import { useState, useRef, useCallback } from 'react'
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

// ==================== 设计令牌 (Design Tokens) ====================

/**
 * 确保颜色对比度符合 WCAG AA 标准 (4.5:1)
 */
const tokens = {
  colors: {
    primary: {
      DEFAULT: '#0055ff',
      hover: '#0043cc',
      light: '#eff6ff',
      subtle: '#0055ff10',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      tertiary: '#64748B',
      inverse: '#FFFFFF',
    },
    surface: {
      DEFAULT: '#FFFFFF',
      secondary: '#F8FAFC',
      tertiary: '#F1F5F9',
    },
    border: {
      DEFAULT: '#E2E8F0',
      hover: '#CBD5E1',
      active: '#94A3B8',
    },
    state: {
      focus: '#0055ff',
    },
  },
  spacing: {
    touchTarget: 'min-h-[44px] sm:min-h-[48px]',
    cardPadding: 'p-4 sm:p-5 lg:p-6',
    sectionGap: 'gap-4 sm:gap-5 lg:gap-6',
  },
  animation: {
    duration: {
      fast: 150,
      normal: 200,
      slow: 300,
    },
    easing: {
      spring: { type: 'spring', stiffness: 400, damping: 30 },
      smooth: { type: 'tween', ease: [0.4, 0, 0.2, 1] },
    },
  },
} as const

// ==================== 样式组件 (Typography & Layout) ====================

/**
 * 排版系统组件库 - 基于 Bento Linear Design 规范
 * 使用系统默认无衬线字体，确保跨平台一致性
 */
const Typography = {
  /**
   * 一级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H1: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={clsx("text-[28px] xs:text-[32px] sm:text-[40px] font-bold leading-[1.4] sm:leading-[1.5] text-[#0F172A] py-2 sm:py-3 tracking-tight", className)}>
      {children}
    </h2>
  ),
  /**
   * 二级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H2: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("text-[22px] sm:text-[30px] font-semibold leading-[1.4] text-[#0F172A] py-1.5 sm:py-2 tracking-tight", className)}>
      {children}
    </div>
  ),
  /**
   * 三级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H3: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("font-sans text-[18px] sm:text-[20px] font-medium leading-[1.3] text-[#0F172A] py-1.5 sm:py-2", className)}>
      {children}
    </div>
  ),
  /**
   * 四级标题组件
   * @param {React.ReactNode} children - 标题内容
   * @param {string} [className] - 额外的 CSS 类名
   */
  H4: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={clsx("font-sans text-[16px] sm:text-[18px] font-medium leading-[1.2] text-[#0F172A] py-1", className)}>
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
    <div className={clsx("text-[15px] sm:text-[17px] md:text-[19px] leading-[1.6] sm:leading-[1.7] text-[#475569]", emphasized && "bg-[#F8FAFC] p-3 border border-[#E2E8F0]", className)}>
      {children}
    </div>
  )
}

// ==================== 子组件 ====================

/**
 * 标签组件 - 统一标签样式 (Bento 风格：直角、边框、单色调)
 * @param {React.ReactNode} children - 标签内容
 * @param {string} [className] - 额外的 CSS 类名
 * @param {'default' | 'primary' | 'muted'} [variant] - 标签变体
 */
function Tag({
  children,
  className,
  variant = 'default',
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'muted'
}) {
  const variantStyles = {
    default: 'border-[#E2E8F0] bg-[#F8FAFC] text-[#475569]',
    primary: 'border-[#0055ff]/20 bg-[#eff6ff] text-[#0055ff]',
    muted: 'border-[#E2E8F0] bg-transparent text-[#64748B]',
  }

  return (
    <div className={clsx(
      "text-[14px] sm:text-[15px] px-2.5 sm:px-3.5 py-1 leading-6 rounded-sm border font-medium transition-colors",
      variantStyles[variant],
      className
    )}>
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
        'flex items-center text-[15px] sm:text-base font-medium text-[#0F172A] hover:text-[#0055ff] group transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#0055ff] focus-visible:ring-offset-2 rounded-sm outline-none',
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="ml-1.5 w-4 h-4 translate-x-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
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
      className="text-[#475569] hover:text-[#0055ff] transition-colors font-medium flex items-center text-[15px] sm:text-base group focus-visible:ring-2 focus-visible:ring-[#0055ff] focus-visible:ring-offset-2 rounded-sm outline-none"
    >
      <span>{children}</span>
      <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
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
      title: '优刻云特惠',
      description:
        '旗舰型云主机搭载新一代CPU，支持高网络带宽和存储性能，覆盖海内外30+节点，适合通用场景。',
      tags: ['独享带宽', '全球节点', '低至1.5折'],
      buttonText: '立即购买',
      link: 'https://console.cloudcvm.com/cart/goodsList.htm',
      image: '/images/aisolution/components-1.png',
    },
    secondaryBanner: {
      title: '推荐有礼 返现35%',
      tags: ['低门槛', '丰厚奖励', '长期获利'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'overseas',
        name: '出海云产品汇集',
        description:
          '汇集海内外云服务器、专线、数据库等产品，海内外业务低成本上云',
        tags: ['五大洲节点', '出海必备', '低至0.5折'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'hk-cloud',
        name: '香港钜惠上云',
        description: '回内地优化线路，BGP智能选路，云服务器全场低至1折',
        tags: ['直连内地', '新客特惠', '跨境业务'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'gpu',
        name: 'GPU云服务器',
        description: '9.9元/天，一键部署体验DeepSeek等全系列镜像',
        tags: ['算力狂飙', '国产AI 低至1.4折'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'cross-border',
        name: '跨境电商专区',
        description: '节点覆盖东南亚、日韩、欧美等全球32个热门地区市场',
        tags: ['多店铺管理', '防关联', '独立站'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'global-network',
        name: '全球专线服务',
        description: '全球31个节点组成骨干网，跨境加速业务优选',
        tags: ['全球一张网', '就近接入', '内网互通'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'light-host',
        name: '轻量应用云主机',
        description: '入门级云主机，套餐式计费，57元/年起',
        tags: ['大流量包', '入门级', '开箱即用'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'sms',
        name: '全球短信特惠',
        description: '文本/视频短信、语音消息、号码认证等',
        tags: ['快速稳定', '智能调度', '快速接入'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ddos',
        name: 'DDoS 攻击防护',
        description:
          '国内5大清洗中心，海外8大节点的Anycast任播网络，优质“近源防护”',
        tags: ['全球分布', '智能防护', '稳定可靠'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'bare-metal',
        name: '裸金属服务器',
        description: '超高性能计算灵活部署，9.9元试用',
        tags: ['分钟级交付', '高性能', '弹性伸缩'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'basic-cloud',
    name: '基础云计算',
    icon: Cloud,
    banner: {
      title: '弹性云服务器',
      description: '新一代企业级云主机，搭载自研分布式存储，支持秒级扩容与热迁移，99.99%可用性保障',
      tags: ['秒级交付', '弹性扩容', '热迁移'],
      buttonText: '立即选购',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: '新用户专享礼包',
      tags: ['代金券', '免费试用'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'uhost-standard',
        name: '通用型云服务器',
        description: '均衡的CPU与内存配比，适合Web应用、企业办公等通用场景',
        tags: ['高性价比', '均衡配置', '快速部署'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'uhost-compute',
        name: '计算优化型',
        description: '高主频CPU，适合科学计算、游戏服务、视频编码等计算密集型场景',
        tags: ['高主频', '强计算', '低延迟'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'uhost-memory',
        name: '内存优化型',
        description: '大内存配置，适合数据库、缓存服务、大数据分析等内存密集型场景',
        tags: ['大内存', '高吞吐', '低延迟'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'uhost-storage',
        name: '存储优化型',
        description: '大容量本地存储，适合日志分析、数据仓库、媒体处理等存储密集型场景',
        tags: ['大存储', '高IOPS', '低成本'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'eip',
        name: '弹性公网IP',
        description: '独立公网IP资源，支持带宽灵活调整与跨实例绑定',
        tags: ['独立IP', '带宽可调', '跨实例'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ebs',
        name: '云硬盘 UDisk',
        description: '高性能分布式块存储，支持快照备份与跨可用区复制',
        tags: ['高性能', '快照备份', '数据可靠'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'vpc',
        name: '私有网络 VPC',
        description: '逻辑隔离的云上私有网络，支持自定义网段、路由与安全组',
        tags: ['网络隔离', '自定义网段', '安全可控'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ulb',
        name: '负载均衡 ULB',
        description: '流量智能分发，支持四层/七层协议，保障业务高可用',
        tags: ['流量分发', '健康检查', '高可用'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'shared-bandwidth',
        name: '共享带宽包',
        description: '多IP共享带宽资源，降低带宽成本，支持弹性扩容',
        tags: ['成本优化', '资源共享', '弹性扩容'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'database',
    name: '数据库与大数据',
    icon: Database,
    banner: {
      title: '云数据库服务',
      description: '全托管数据库服务，自动备份、主从热备、一键容灾切换，让数据管理更简单',
      tags: ['自动备份', '主从热备', '一键容灾'],
      buttonText: '立即选购',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: '数据库迁移工具',
      tags: ['一键迁移', '数据同步'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'mysql',
        name: '云数据库 MySQL',
        description: '兼容MySQL协议，支持主从架构、读写分离，适合Web应用与交易系统',
        tags: ['主从架构', '读写分离', '自动备份'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'redis',
        name: '云内存 Redis',
        description: '高性能内存数据库，支持集群模式，适合缓存、会话、排行榜等场景',
        tags: ['高性能', '集群模式', '持久化'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'mongodb',
        name: '云数据库 MongoDB',
        description: '分布式文档数据库，灵活Schema设计，适合内容管理、物联网等场景',
        tags: ['灵活Schema', '分布式', '高扩展'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'postgresql',
        name: '云数据库 PostgreSQL',
        description: '企业级关系型数据库，支持复杂查询与GIS扩展，适合地理信息系统',
        tags: ['复杂查询', 'GIS支持', 'ACID'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'clickhouse',
        name: '云数据库 ClickHouse',
        description: '列式存储分析数据库，秒级响应海量数据查询，适合实时分析场景',
        tags: ['列式存储', '实时分析', '高压缩'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'dts',
        name: '数据传输服务 DTS',
        description: '支持多种数据库间的数据迁移与实时同步，保障数据一致性',
        tags: ['数据迁移', '实时同步', '一致性'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'udw',
        name: '数据仓库 UDW',
        description: '分布式数据仓库，支持PB级数据分析，兼容SQL标准',
        tags: ['PB级分析', 'SQL兼容', '弹性扩展'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'kafka',
        name: '消息队列 Kafka',
        description: '高吞吐分布式消息队列，支持流处理与实时数据管道',
        tags: ['高吞吐', '流处理', '数据管道'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'elasticsearch',
        name: '日志分析 ES',
        description: '分布式搜索与分析引擎，支持日志检索、指标监控与全文搜索',
        tags: ['全文搜索', '日志分析', '可视化'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'ai',
    name: '人工智能',
    icon: BrainCircuit,
    banner: {
      title: 'AI算力平台',
      description: '提供高性能GPU/AI芯片算力，预置主流深度学习框架，支持大模型训练与推理部署',
      tags: ['高性能GPU', '大模型支持', '一键部署'],
      buttonText: '立即选购',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: 'AI模型市场',
      tags: ['开箱即用', '丰富模型'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'gpu-a100',
        name: 'A100 GPU云服务器',
        description: 'NVIDIA A100 80GB显存，适合大模型训练与高性能计算',
        tags: ['80GB显存', '大模型训练', '高性能'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'gpu-h800',
        name: 'H800 GPU云服务器',
        description: 'NVIDIA H800旗舰算力，支持千亿参数大模型训练',
        tags: ['旗舰算力', '千亿参数', 'NVLink'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'gpu-4090',
        name: 'RTX 4090 GPU服务器',
        description: '高性价比GPU算力，适合AI推理、渲染、视频处理',
        tags: ['高性价比', 'AI推理', '图形渲染'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ai-platform',
        name: 'AI开发平台',
        description: '一站式AI开发环境，预置TensorFlow/PyTorch，支持Notebook开发',
        tags: ['一站式开发', '预置框架', 'Notebook'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'model-deploy',
        name: '模型推理部署',
        description: '一键部署AI模型，支持自动扩缩容与多版本管理',
        tags: ['一键部署', '自动扩缩容', '版本管理'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'llm-service',
        name: '大模型服务',
        description: '提供主流大模型API调用，支持文本生成、对话、代码补全',
        tags: ['API调用', '文本生成', '代码补全'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ocr-service',
        name: 'OCR文字识别',
        description: '支持身份证、银行卡、发票等多种证件票据识别',
        tags: ['证件识别', '票据识别', '高精度'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'face-recognition',
        name: '人脸识别服务',
        description: '人脸检测、比对、搜索，支持活体检测与1:N识别',
        tags: ['人脸检测', '活体检测', '1:N识别'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'nlp-service',
        name: '自然语言处理',
        description: '分词、命名实体识别、情感分析、文本分类等NLP能力',
        tags: ['分词标注', '情感分析', '文本分类'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'security',
    name: '安全、开发与运维',
    icon: ShieldCheck,
    banner: {
      title: '云安全中心',
      description: '全方位安全防护体系，涵盖主机安全、网络安全、数据安全，满足等保合规要求',
      tags: ['等保合规', '威胁检测', '安全运营'],
      buttonText: '立即选购',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: 'SSL证书服务',
      tags: ['HTTPS加密', '数据安全'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'waf',
        name: 'Web应用防火墙',
        description: '防护SQL注入、XSS、CSRF等OWASP Top 10攻击，保障Web应用安全',
        tags: ['防SQL注入', '防XSS', 'CC防护'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ddos-pro',
        name: 'DDoS高防服务',
        description: 'T级带宽清洗能力，防护大流量DDoS攻击，保障业务连续性',
        tags: ['T级清洗', '近源防护', '业务连续'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'host-security',
        name: '主机安全服务',
        description: '漏洞扫描、病毒查杀、入侵检测，全方位保护云主机安全',
        tags: ['漏洞扫描', '病毒查杀', '入侵检测'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'ssl-cert',
        name: 'SSL证书服务',
        description: '提供DV/OV/EV多种类型SSL证书，一键部署HTTPS加密',
        tags: ['HTTPS加密', '多类型证书', '一键部署'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: '堡垒机',
        name: '运维安全堡垒机',
        description: '统一运维入口，操作审计、权限管控、高危命令拦截',
        tags: ['操作审计', '权限管控', '高危拦截'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'monitor',
        name: '云监控服务',
        description: '全方位资源监控，支持自定义告警策略与多渠道通知',
        tags: ['资源监控', '自定义告警', '多渠道通知'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'log-service',
        name: '日志服务',
        description: '日志采集、存储、检索与分析，支持实时告警与可视化',
        tags: ['日志采集', '实时检索', '可视化'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'devops',
        name: 'DevOps工具链',
        description: '代码托管、CI/CD流水线、制品管理，一站式研发效能平台',
        tags: ['CI/CD', '代码托管', '制品管理'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'container',
        name: '容器服务 UK8S',
        description: '企业级Kubernetes服务，支持集群管理、服务编排与自动扩缩容',
        tags: ['Kubernetes', '服务编排', '自动扩缩容'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'hybrid',
    name: '混合云与私有云',
    icon: Layers,
    banner: {
      title: '混合云解决方案',
      description: '打通公有云与私有云，统一资源管理与调度，实现数据本地化与弹性扩展的最佳平衡',
      tags: ['统一管理', '数据本地化', '弹性扩展'],
      buttonText: '立即咨询',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: '私有云平台',
      tags: ['自主可控', '定制开发'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'bare-metal',
        name: '裸金属服务器',
        description: '独享物理服务器资源，无虚拟化损耗，适合高性能计算与核心数据库',
        tags: ['独享资源', '无虚拟化', '高性能'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'private-cloud',
        name: '私有云平台',
        description: '本地化部署的云平台，完全自主可控，满足数据安全与合规要求',
        tags: ['本地部署', '自主可控', '合规'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'hybrid-manager',
        name: '混合云管理平台',
        description: '统一管理公有云与私有云资源，实现跨云调度与成本优化',
        tags: ['统一管理', '跨云调度', '成本优化'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'direct-connect',
        name: '专线接入',
        description: '高速专线连接本地数据中心与云端，低延迟、高安全的数据传输',
        tags: ['高速专线', '低延迟', '数据安全'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'vpn',
        name: 'VPN网关',
        description: '加密隧道连接企业内网与云端，灵活组网，快速部署',
        tags: ['加密隧道', '灵活组网', '快速部署'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'sd-wan',
        name: 'SD-WAN服务',
        description: '智能广域网组网，动态路径选择，优化分支机构网络体验',
        tags: ['智能组网', '动态路径', '分支互联'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'colocation',
        name: '机柜托管服务',
        description: '提供标准机柜托管，配套电力、空调、消防等基础设施',
        tags: ['机柜托管', '基础设施', '运维支持'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'disaster-recovery',
        name: '容灾备份服务',
        description: '跨地域容灾架构，支持热备、温备、冷备多种方案',
        tags: ['跨地域容灾', '数据备份', '业务连续'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'migration',
        name: '迁移服务',
        description: '专业迁移团队，提供评估、规划、实施一站式迁移服务',
        tags: ['专业团队', '一站式服务', '平滑迁移'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
  },
  {
    id: 'communication',
    name: '云通信与企业应用',
    icon: MessageSquare,
    banner: {
      title: '企业通信服务',
      description: '全场景通信能力，覆盖短信、语音、视频、IM，助力企业高效触达用户',
      tags: ['高到达率', '秒级触达', '全球覆盖'],
      buttonText: '立即选购',
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    secondaryBanner: {
      title: '企业邮箱服务',
      tags: ['无限容量', '安全反垃圾'],
      link: 'https://console.cloudcvm.com/cart/goodsList.html',
    },
    products: [
      {
        id: 'sms-verify',
        name: '验证码短信',
        description: '三网合一通道，秒级到达，支持国际短信发送',
        tags: ['秒级到达', '三网合一', '国际短信'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'sms-notify',
        name: '通知短信',
        description: '订单通知、物流提醒、账单通知等场景，高到达率保障',
        tags: ['高到达率', '场景丰富', '模板审核'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'sms-marketing',
        name: '营销短信',
        description: '会员营销、活动推广，精准触达目标用户',
        tags: ['精准营销', '会员触达', '效果追踪'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'voice-call',
        name: '语音通知',
        description: '电话语音通知，适合紧急告警、订单确认等场景',
        tags: ['电话通知', '紧急告警', '高接通率'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'privacy-number',
        name: '隐私号服务',
        description: '中间号保护真实号码，适合网约车、外卖等隐私保护场景',
        tags: ['隐私保护', '中间号', '通话录音'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'im-service',
        name: '即时通讯 IM',
        description: '支持单聊、群聊、消息推送，快速构建社交与客服场景',
        tags: ['单聊群聊', '消息推送', '多端同步'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'live-streaming',
        name: '直播服务',
        description: '低延迟直播推拉流，支持百万级并发观看',
        tags: ['低延迟', '高并发', '多终端'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'rtc',
        name: '实时音视频 RTC',
        description: '毫秒级延迟音视频通话，支持1v1与多人会议场景',
        tags: ['毫秒级延迟', '多人会议', '跨平台'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
      {
        id: 'email-service',
        name: '企业邮箱',
        description: '专业企业邮箱服务，无限容量、安全反垃圾、多终端同步',
        tags: ['无限容量', '反垃圾', '多终端'],
        link: 'https://console.cloudcvm.com/cart/goodsList.html',
      },
    ],
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
 * 5. 悬停切换: 鼠标悬停自动展开对应分类（带防抖）
 */
export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const activeService = serviceTabs[activeTab]
  const { banner, secondaryBanner, products } = activeService

  /**
   * 处理 Tab 悬停事件
   * 使用防抖机制，延迟 100ms 切换，避免鼠标快速划过时频繁切换
   * @param {number} index - 目标 tab 索引
   */
  const handleTabHover = useCallback((index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveTab(index)
    }, 100)
  }, [])

  /**
   * 处理鼠标离开 Tab 区域
   * 清除未执行的防抖定时器
   */
  const handleTabLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }, [])

  return (
    <section 
      className="py-6 sm:py-8 lg:py-10 pt-20 pb-20 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center'
      }}
    >
      {/* 装饰性元素 - 浮动圆点 */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      
      <div className="w-full max-w-[1800px] px-3 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 lg:mb-10 border-b border-[#E2E8F0] pb-4">
          <div className="flex-1">
            <Typography.H1 className="!my-0 mb-1 sm:mb-1.5 !py-1">
              自主研发，安全可靠的云服务
            </Typography.H1>
            <Typography.Paragraph className="!mb-0 !text-xs sm:!text-sm">
              12年技术沉淀，100+款产品与服务，持续创新
            </Typography.Paragraph>
          </div>
          <div className="hidden lg:flex flex-row gap-6 items-center mt-4 sm:mt-0">
            <LinkWithArrow href="https://console.cloudcvm.com/cart/goodsList.htm">
              最新动态
            </LinkWithArrow>
            <LinkWithArrow href="https://console.cloudcvm.com/cart/goodsList.htm">
              定价
            </LinkWithArrow>
          </div>
        </div>

        {/* 顶部 Tab 导航 - Bento 风格 Segmented Control */}
        <div className="flex justify-start mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1 -mx-3 sm:mx-0 px-3 sm:px-0">
          <div className="inline-flex border border-[#E2E8F0] bg-[#F8FAFC] w-full rounded-sm">
            {serviceTabs.map((tab, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => handleTabHover(index)}
                  onMouseLeave={handleTabLeave}
                  aria-selected={isActive}
                  role="tab"
                  aria-controls={`tabpanel-${tab.id}`}
                  className={clsx(
                    "flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 text-sm sm:text-base lg:text-lg font-medium transition-all duration-200 whitespace-nowrap outline-none select-none rounded-none border-r border-[#E2E8F0] last:border-r-0 flex-1",
                    "min-h-[44px] sm:min-h-[48px]",
                    "focus-visible:ring-2 focus-visible:ring-[#0055ff] focus-visible:ring-inset focus-visible:z-10",
                    isActive
                      ? "bg-white text-[#0055ff] shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-white/50"
                  )}
                >
                  <tab.icon
                    className={clsx(
                      "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 flex-shrink-0",
                      isActive ? "text-[#0055ff]" : "text-[#94A3B8]"
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{tab.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 内容区域 */}
        <div 
          className="relative min-h-[300px] sm:min-h-[340px]"
          role="tabpanel"
          id={`tabpanel-${activeService.id}`}
          aria-label={activeService.name}
        >
          <AnimatePresence mode="wait">
            <motion.div
              suppressHydrationWarning
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ 
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="flex flex-col lg:flex-row w-full gap-4 sm:gap-5"
            >
              {/* 左侧区域 */}
              <div className="w-full lg:w-[320px] xl:w-[360px] flex flex-col gap-4 sm:gap-5 flex-shrink-0">
                 {/* 上方 Banner */}
                <article className="flex-1 min-h-[220px] sm:min-h-[260px] w-full bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between group rounded-lg relative overflow-hidden hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">

                   <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-1">
                          <div className="flex flex-col gap-3 mb-4">
                              <Typography.H2 className="!my-0 !text-[20px] sm:!text-[22px] group-hover:text-[#0055ff] transition-colors">
                                {banner.title}
                              </Typography.H2>

                              <div className="flex flex-wrap gap-2">
                            {banner.tags.map((tag, i) => (
                               <Tag key={i} variant="primary">
                                 {tag}
                               </Tag>
                             ))}
                          </div>
                      </div>

                      <Typography.Paragraph className="pt-4 border-t border-[#E2E8F0] !text-sm sm:!text-base">
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
                      className="btn btn-primary w-full mt-6 text-center bg-[#0055ff] hover:bg-[#0043cc] text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0055ff]/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0055ff] outline-none"
                    >
                      {banner.buttonText}
                    </a>
                  )}
                  </div>
               </article>

                {/* 下方 Banner */}
                <article className={clsx(
                  "min-h-[80px] w-full bg-white border border-[#E2E8F0] rounded-lg group flex flex-col justify-center hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300",
                  secondaryBanner.link && "cursor-pointer"
                )}>
                  {secondaryBanner.link ? (
                    <a href={secondaryBanner.link} target="_blank" rel="noopener" className="w-full h-full p-5 sm:p-6 flex flex-col justify-center relative z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0055ff] outline-none rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <Typography.H3 className="!my-0 !text-[16px] sm:!text-[18px] group-hover:text-[#0055ff] transition-colors flex-1 pr-4">
                              {secondaryBanner.title}
                            </Typography.H3>
                            <ArrowRight className="text-[#94A3B8] w-5 h-5 group-hover:text-[#0055ff] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {secondaryBanner.tags.map((tag, i) => (
                            <Tag key={i} variant="muted">
                              {tag}
                            </Tag>
                          ))}
                        </div>
                    </a>
                  ) : (
                    <div className="w-full p-5 sm:p-6 flex flex-col justify-center">
                        <Typography.H3 className="!my-0 mb-2 !text-[16px] sm:!text-[18px]">
                          {secondaryBanner.title}
                        </Typography.H3>
                        <div className="flex flex-wrap gap-2">
                            {secondaryBanner.tags.map((tag, i) => (
                             <Tag key={i} variant="muted">
                               {tag}
                             </Tag>
                           ))}
                        </div>
                    </div>
                  )}
                </article>
             </div>

             {/* 右侧网格区域 */}
             <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4 sm:p-5 lg:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full h-full">
                   {products.map((product, idx) => {
                     const content = (
                      <article className="h-full flex flex-col justify-start p-4 group cursor-pointer border border-[#E2E8F0] transition-all duration-200 rounded-lg bg-white hover:border-[#0055ff]/30 hover:shadow-md hover:shadow-slate-200/40 relative focus-within:ring-2 focus-within:ring-[#0055ff] focus-within:ring-inset">
                         <div className="w-full">
                           <div className="flex items-center justify-between mb-3">
                            <Typography.H4 className="!my-0 !text-[15px] sm:!text-[16px] !font-semibold line-clamp-1 flex-1 group-hover:text-[#0055ff] transition-colors">
                              {product.name}
                            </Typography.H4>
                            <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0055ff] transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5" aria-hidden="true" />
                          </div>

                          <Typography.Paragraph className="!text-sm line-clamp-2 !mb-3 min-h-[40px] !text-[#475569] group-hover:text-[#0F172A] leading-relaxed">
                            {product.description}
                          </Typography.Paragraph>

                           <div className="flex flex-wrap gap-1.5 mt-auto">
                             {product.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[11px] sm:text-[12px] px-1.5 py-0.5 border border-[#E2E8F0] text-[#64748B] bg-[#F8FAFC] group-hover:border-[#0055ff]/20 group-hover:text-[#0055ff] group-hover:bg-[#eff6ff] transition-colors rounded-sm">
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
                          className="h-full focus-visible:outline-none"
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
