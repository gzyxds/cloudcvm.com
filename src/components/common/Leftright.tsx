'use client'

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  memo,
} from 'react'
import { Container } from '@/components/Container'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import {
  Car,
  Building2,
  HeartPulse,
  GraduationCap,
  Landmark,
  Database,
  Cloud,
  ArrowLeftRight,
  Megaphone,
  TrendingUp,
  Bot,
  BrainCircuit,
  BarChart3,
  User,
  Server,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  数据类型                                                          */
/* ------------------------------------------------------------------ */
interface SolutionItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  imageUrl?: string
  link?: string
}

interface SolutionCategory {
  id: string
  name: string
  items: SolutionItem[]
}

/* ------------------------------------------------------------------ */
/*  数据源 — 每类 5 个                                               */
/* ------------------------------------------------------------------ */
const solutionsData: SolutionCategory[] = [
  {
    id: 'industry',
    name: '行业解决方案',
    items: [
      {
        id: 'auto',
        title: '汽车',
        description:
          '优刻云携手合作伙伴，基于云计算、大数据、AI、5G等前沿技术，赋能汽车产业数智升级，共建智能汽车新生态',
        icon: Car,
        imageUrl: '/images/screenshots/solution-industry-auto.webp',
      },
      {
        id: 'finance',
        title: '金融',
        description:
          '通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新，实现数字化转型',
        icon: Building2,
        imageUrl: '/images/screenshots/solution-industry-finance.webp',
      },
      {
        id: 'medical',
        title: '医疗',
        description:
          '基于优刻云高性能、高可靠、高安全的数字化底座，携手医疗伙伴，为客户提供完善的医疗应用和服务体系',
        icon: HeartPulse,
        imageUrl: '/images/screenshots/solution-industry-medical.webp',
      },
      {
        id: 'education',
        title: '教育',
        description:
          '面向市/区/县教育局及辖区内中小学提供场景化解决方案，将智慧化教育带给每个学校、每个家庭、每个孩子',
        icon: GraduationCap,
        imageUrl: '/images/screenshots/solution-industry-education.webp',
      },
      {
        id: 'government',
        title: '政府',
        description:
          '聚焦政务与城市数字化，面向场景进行流程再造与优化，真正提升人民的获得感、幸福感和安全感',
        icon: Landmark,
        imageUrl: '/images/screenshots/solution-industry-government.webp',
      },
    ],
  },
  {
    id: 'general',
    name: '通用解决方案',
    items: [
      {
        id: 'data-enablement',
        title: '优刻云数据使能解决方案',
        description:
          '以数据治理为基础，数据智能为动力，释放数据价值，助力各行各业数字化转型',
        icon: Database,
        imageUrl: '/images/screenshots/solution-general-data-enablement.webp',
      },
      {
        id: 'sap',
        title: 'SAP上云解决方案',
        description:
          '支持S/4 ERP、Business one等SAP系统上云，帮助企业实现极简运维与智慧运营',
        icon: Cloud,
        imageUrl: '/images/screenshots/solution-general-sap.webp',
      },
      {
        id: 'data-circulation',
        title: '优刻云数据要素流通解决方案',
        description:
          '提供可信、可控、可证的数据要素流通基础设施，支撑高质量数据供给，促进合规高效数据流通',
        icon: ArrowLeftRight,
        imageUrl: '/images/screenshots/solution-general-data-circulation.webp',
      },
      {
        id: 'digital-marketing',
        title: '数字化营销解决方案',
        description:
          '提升用户增长运营效益，构建渠道&门店数字化能力，实现全面营销数字化转型',
        icon: Megaphone,
        imageUrl: '/images/screenshots/solution-general-digital-marketing.webp',
      },
      {
        id: 'growth-enterprise',
        title: '优刻云成长型企业数字化转型包',
        description:
          '联合业界知名应用厂商，针对成长型企业市场推出的系列化数字化转型包',
        icon: TrendingUp,
        imageUrl: '/images/screenshots/solution-general-growth-enterprise.webp',
      },
    ],
  },
  {
    id: 'practice',
    name: '解决方案实践',
    items: [
      {
        id: 'dify',
        title: '快速搭建Dify-LLM应用开发平台',
        description:
          '云上快速部署单机版、高可用版Dify LLM应用开发平台，使开发者可以快速搭建生产级的生成式AI应用',
        icon: Bot,
        imageUrl: '/images/screenshots/solution-practice-dify.webp',
      },
      {
        id: 'embedding',
        title: '部署Embedding及Reranker模型',
        description:
          '通过优刻云Flexus云服务器X实例高效部署Embedding和Reranker模型，助力快速搭建企业专属知识库',
        icon: BrainCircuit,
        imageUrl: '/images/screenshots/solution-practice-embedding.webp',
      },
      {
        id: 'data-insight',
        title: '快速体验智能问数',
        description:
          '实现从用户自然语言提问到智能数据查询、分析与可视化反馈的工作流系统，为企业构建自动化数据洞察助手',
        icon: BarChart3,
        imageUrl: '/images/screenshots/solution-practice-data-insight.webp',
      },
      {
        id: 'digital-human',
        title: '数字人交互智能问答解决方案',
        description:
          '基于优刻云数字内容生产线 MetaStudio，ModelArts Studio大模型即服务平台和Dify快速部署数字人交互服务',
        icon: User,
        imageUrl: '/images/screenshots/solution-practice-digital-human.webp',
      },
      {
        id: 'ha-web',
        title: '高可用网站架构云化',
        description:
          '快速在优刻云上部署高可用的云上网站架构，支持业务流量跨可用区进行分发，并具备跨可用区故障容灾的能力',
        icon: Server,
        imageUrl: '/images/screenshots/solution-practice-ha-web.webp',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  动画变体                                                          */
/* ------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/* ------------------------------------------------------------------ */
/*  响应式 Image sizes                                                */
/* ------------------------------------------------------------------ */
const imageSizes =
  '(max-width: 640px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'

/* ------------------------------------------------------------------ */
/*  SolutionCard — 图片背景 + 半遮罩 + 浮层内容                         */
/* ------------------------------------------------------------------ */
interface SolutionCardProps {
  item: SolutionItem
  index: number
}

/**
 * 解决方案卡片 — 支持可选外链，移动端优化触控与排版
 */
const SolutionCard = memo(function SolutionCard({
  item,
  index,
}: SolutionCardProps) {
  const isPriority = index < 5

  const cardClass = clsx(
    'group relative cursor-pointer overflow-hidden rounded-xl',
    'border border-neutral-200/60 bg-neutral-200 shadow-sm',
    'hover:border-brand-300/60 hover:shadow-lg hover:shadow-brand-500/10',
    'outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
  )

  const cardContent = (
    <>
      {/* 背景图片 — 完整显示 */}
      {item.imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={item.imageUrl}
            alt=""
            fill
            sizes={imageSizes}
            quality={75}
            priority={isPriority}
            loading={isPriority ? 'eager' : 'lazy'}
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      )}

      {/* 半遮罩 — 从顶部透明渐变到底部深色，保证文字可读 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/80"
        aria-hidden="true"
      />

      {/* 顶部装饰高光线 */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* 内容 — 浮在遮罩上方 */}
      <div className="relative z-10 flex flex-col justify-end p-4 aspect-[16/9] sm:p-5 sm:aspect-[3/4] lg:p-6 lg:aspect-[9/16]">
        {/* 图标 */}
        <div
          className={clsx(
            'mb-auto flex h-10 w-10 items-center justify-center rounded-lg',
            'bg-white/15 text-white backdrop-blur-sm',
            'group-hover:bg-white/25 transition-colors duration-300',
          )}
          aria-hidden="true"
        >
          <item.icon className="h-5 w-5" strokeWidth={1.5} />
        </div>

        {/* 标题 */}
        <h3 className="mb-2 text-base font-bold leading-tight text-white drop-shadow-md sm:text-lg lg:text-xl">
          {item.title}
        </h3>

        {/* 描述 */}
        <p className="mb-3 text-[13px] leading-relaxed text-white/85 line-clamp-2 sm:mb-4 sm:text-sm sm:line-clamp-3">
          {item.description}
        </p>

        {/* 底部链接指示 */}
        <div
          className="flex items-center gap-1 text-sm font-medium text-white/60 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100"
          aria-hidden="true"
        >
          <span>了解详情</span>
          <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </>
  )

  if (item.link) {
    return (
      <motion.a
        suppressHydrationWarning
        variants={itemVariants}
        className={cardClass}
        href={item.link}
        aria-label={`查看${item.title}解决方案详情`}
      >
        {cardContent}
      </motion.a>
    )
  }

  return (
    <motion.article
      suppressHydrationWarning
      variants={itemVariants}
      className={cardClass}
      tabIndex={0}
      role="button"
      aria-label={`查看${item.title}解决方案详情`}
    >
      {cardContent}
    </motion.article>
  )
})

/* ------------------------------------------------------------------ */
/*  主组件                                                            */
/* ------------------------------------------------------------------ */
export function Leftright() {
  const [activeTab, setActiveTab] = useState('industry')
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeCategory = useMemo(
    () => solutionsData.find((c) => c.id === activeTab) || solutionsData[0],
    [activeTab],
  )

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  /**
   * Tab 悬停防抖切换
   */
  const handleTabHover = useCallback((tabId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveTab(tabId)
    }, 100)
  }, [])

  /**
   * 鼠标离开 Tab 区域
   */
  const handleTabLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }, [])

  /**
   * 键盘导航
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        const nextIndex = (index + 1) % solutionsData.length
        setActiveTab(solutionsData[nextIndex].id)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevIndex =
          (index - 1 + solutionsData.length) % solutionsData.length
        setActiveTab(solutionsData[prevIndex].id)
      }
    },
    [],
  )

  return (
    <section
      className="relative overflow-x-hidden py-6 sm:py-20 lg:py-24 bg-scroll sm:bg-fixed"
      style={{
        backgroundImage: 'url(/images/background/background-4.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby="solutions-section-title"
    >
      <Container className="relative z-10">
        {/* 顶部标题 — 仅桌面端显示 */}
        <div className="hidden text-center sm:block sm:mb-14 lg:mb-20">
          <h2
            id="solutions-section-title"
            className="mb-4 text-4xl font-bold leading-tight tracking-tight text-neutral-900 lg:text-5xl"
          >
            成熟行业实践，释放云上数字生产力
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-lg">
            汇聚各行业数字化转型成功经验，提供场景化解决方案，助力企业降本增效，加速业务创新
          </p>
        </div>

        {/* Tab 导航 — 移动端可横向滚动 */}
        <nav
          className="scrollbar-hide mb-3 flex overflow-x-auto border-b border-neutral-200 sm:mb-14 lg:mb-20"
          role="tablist"
          aria-label="解决方案分类"
        >
          <div className="flex sm:mx-auto sm:w-full sm:max-w-lg">
            {solutionsData.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                onMouseEnter={() => handleTabHover(category.id)}
                onMouseLeave={handleTabLeave}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`solutions-panel-${category.id}`}
                id={`solutions-tab-${category.id}`}
                tabIndex={activeTab === category.id ? 0 : -1}
                className={clsx(
                  'relative flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 outline-none sm:flex-1 sm:gap-2 sm:px-6 sm:py-4 sm:text-base',
                  'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
                  activeTab === category.id
                    ? 'text-brand-500'
                    : 'text-neutral-500 hover:text-neutral-900',
                )}
              >
                {category.name}
                <span
                  className={clsx(
                    'rounded-full px-1.5 py-0.5 text-xs',
                    activeTab === category.id
                      ? 'bg-brand-100 text-brand-500'
                      : 'text-neutral-400',
                  )}
                  aria-hidden="true"
                >
                  {category.items.length}
                </span>
                {activeTab === category.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* 解决方案卡片 — 移动端横排滑动，桌面端网格 */}
        <div className="overflow-x-auto scrollbar-hide sm:overflow-visible">
          <div
            className="flex w-max gap-3 pb-4 sm:grid sm:w-auto sm:grid-cols-2 sm:gap-5 sm:pb-0 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-6"
            role="tabpanel"
            id={`solutions-panel-${activeCategory.id}`}
            aria-labelledby={`solutions-tab-${activeCategory.id}`}
          >
            {activeCategory.items.map((item, index) => (
              <div
                key={item.id}
                className="w-[80vw] max-w-[320px] flex-shrink-0 sm:w-auto sm:max-w-none"
              >
                <SolutionCard
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 底部链接 */}
        <div className="mt-4 text-center sm:mt-16 lg:mt-20">
          <a
            href="#"
            className={clsx(
              'group inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium shadow-sm',
              'min-h-[48px]',
              'border-neutral-200 bg-white text-neutral-900',
              'hover:border-brand-500 hover:text-brand-500 hover:shadow-md',
              'transition-all duration-300',
              'sm:px-10 sm:py-4 sm:text-lg',
            )}
            aria-label="查看所有解决方案"
          >
            查看所有解决方案
            <ChevronRightIcon
              className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:ml-2 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
