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

/* ------------------------------------------------------------------ */
/*  设计令牌                                                          */
/* ------------------------------------------------------------------ */
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
    border: {
      DEFAULT: '#E2E8F0',
      hover: '#CBD5E1',
      primary: '#0055ff',
    },
    background: {
      DEFAULT: '#FFFFFF',
      subtle: '#F8FAFC',
    },
    shadow: {
      subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      medium:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      large:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      primary: '0 20px 40px -12px rgba(0, 85, 255, 0.15)',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  typography: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  animation: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    easing: {
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },
} as const

/* ------------------------------------------------------------------ */
/*  数据类型                                                          */
/* ------------------------------------------------------------------ */
interface SolutionItem {
  id: string
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  link?: string
  theme: 'dark' | 'light'
}

interface SolutionCategory {
  id: string
  name: string
  items: SolutionItem[]
}

/* ------------------------------------------------------------------ */
/*  数据源                                                            */
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
        imageUrl: '/images/screenshots/solution-industry-auto.jpg',
        theme: 'dark',
      },
      {
        id: 'finance',
        title: '金融',
        description:
          '通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新，实现数字化转型',
        imageUrl: '/images/screenshots/solution-industry-finance.jpg',
        theme: 'dark',
      },
      {
        id: 'medical',
        title: '医疗',
        description:
          '基于优刻云高性能、高可靠、高安全的数字化底座，携手医疗伙伴，为客户提供完善的医疗应用和服务体系',
        imageUrl: '/images/screenshots/solution-industry-medical.jpg',
        theme: 'dark',
      },
      {
        id: 'manufacturing',
        title: '制造',
        description:
          '华为工业互联网平台FusionPlant，助力企业实现业务在云上敏捷开发，边缘可信运行，持续释放潜在业务价值',
        imageUrl: '/images/screenshots/solution-industry-manufacturing.jpg',
        theme: 'light',
      },
      {
        id: 'education',
        title: '教育',
        description:
          '面向市/区/县教育局及辖区内中小学提供场景化解决方案，将智慧化教育带给每个学校、每个家庭、每个孩子',
        imageUrl: '/images/screenshots/solution-industry-education.jpg',
        theme: 'dark',
      },
      {
        id: 'government',
        title: '政府',
        description:
          '聚焦政务与城市数字化，面向场景进行流程再造与优化，真正提升人民的获得感、幸福感和安全感',
        imageUrl: '/images/screenshots/solution-industry-government.jpg',
        theme: 'dark',
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
        imageUrl: '/images/screenshots/solution-general-data-enablement.jpg',
        theme: 'dark',
      },
      {
        id: 'sap',
        title: 'SAP上云解决方案',
        description:
          '支持S/4 ERP、Business one等SAP系统上云，帮助企业实现极简运维与智慧运营',
        imageUrl: '/images/screenshots/solution-general-sap.jpg',
        theme: 'dark',
      },
      {
        id: 'data-circulation',
        title: '优刻云数据要素流通解决方案',
        description:
          '提供可信、可控、可证的数据要素流通基础设施，支撑高质量数据供给，促进合规高效数据流通',
        imageUrl: '/images/screenshots/solution-general-data-circulation.jpg',
        theme: 'dark',
      },
      {
        id: 'digital-marketing',
        title: '数字化营销解决方案',
        description:
          '提升用户增长运营效益，构建渠道&门店数字化能力，实现全面营销数字化转型',
        imageUrl: '/images/screenshots/solution-general-digital-marketing.jpg',
        theme: 'light',
      },
      {
        id: 'growth-enterprise',
        title: '优刻云成长型企业数字化转型包',
        description:
          '联合业界知名应用厂商，针对成长型企业市场推出的系列化数字化转型包',
        imageUrl: '/images/screenshots/solution-general-growth-enterprise.jpg',
        theme: 'dark',
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
        imageUrl: '/images/screenshots/solution-practice-dify.jpg',
        theme: 'light',
      },
      {
        id: 'embedding',
        title: '部署Embedding及Reranker模型',
        description:
          '通过优刻云Flexus云服务器X实例高效部署Embedding和Reranker模型，助力快速搭建企业专属知识库',
        imageUrl: '/images/screenshots/solution-practice-embedding.jpg',
        theme: 'dark',
      },
      {
        id: 'data-insight',
        title: '快速体验智能问数',
        description:
          '实现从用户自然语言提问到智能数据查询、分析与可视化反馈的工作流系统，为企业构建自动化数据洞察助手',
        imageUrl: '/images/screenshots/solution-practice-data-insight.jpg',
        theme: 'dark',
      },
      {
        id: 'digital-human',
        title: '数字人交互智能问答解决方案',
        description:
          '基于优刻云数字内容生产线 MetaStudio，ModelArts Studio大模型即服务平台和Dify快速部署数字人交互服务',
        imageUrl: '/images/screenshots/solution-practice-digital-human.jpg',
        theme: 'light',
      },
      {
        id: 'ocr',
        title: '文字识别-发票识别与验真',
        description:
          '基于优刻云文字识别 OCR增值税发票识别与发票验真技术构建，自动识别和录入增值税发票各字段信息，实现财税报销自动化',
        imageUrl: '/images/screenshots/solution-practice-ocr.jpg',
        theme: 'light',
      },
      {
        id: 'ha-web',
        title: '高可用网站架构云化',
        description:
          '快速在优刻云上部署高可用的云上网站架构，支持业务流量跨可用区进行分发，并具备跨可用区故障容灾的能力',
        imageUrl: '/images/screenshots/solution-practice-ha-web.jpg',
        theme: 'light',
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/* ------------------------------------------------------------------ */
/*  自定义 Hook：检测用户是否偏好减少动画（修复 SSR Hydration 问题）    */
/* ------------------------------------------------------------------ */
const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mql.matches)

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return reduced
}

/* ------------------------------------------------------------------ */
/*  精确计算 Image sizes 属性，匹配响应式网格布局                       */
/* ------------------------------------------------------------------ */
const imageSizes =
  '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw'

/* ------------------------------------------------------------------ */
/*  卡片子组件（使用 memo 隔离重渲染）                                   */
/* ------------------------------------------------------------------ */
interface SolutionCardProps {
  item: SolutionItem
  index: number
  reducedMotion: boolean
}

const SolutionCard = memo(function SolutionCard({
  item,
  index,
  reducedMotion,
}: SolutionCardProps) {
  // 首屏可见卡片优先加载：xl 下最多 6 张，保守取前 6 张
  const isPriority = index < 6

  return (
    <motion.article
      suppressHydrationWarning
      variants={reducedMotion ? {} : itemVariants}
      className={clsx(
        'group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 bg-white sm:aspect-auto',
        'sm:h-[50vh] sm:max-h-[700px] sm:min-h-[500px]',
        'xl:h-[60vh] xl:min-h-[500px]',
        'transition-all duration-500 ease-out',
        'hover:border-blue-500/30 hover:shadow-[0_20px_40px_-12px_rgba(0,85,255,0.15)]',
        'outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        // GPU 加速：提升合成层，避免频繁重绘
        'will-change-transform',
      )}
      style={{ transform: 'translateZ(0)' }}
      tabIndex={0}
      role="button"
      aria-label={`查看${item.title}解决方案详情`}
    >
      {/* 背景图片 */}
      <Image
        src={item.imageUrl}
        alt=""
        fill
        sizes={imageSizes}
        quality={80}
        priority={isPriority}
        loading={isPriority ? 'eager' : 'lazy'}
        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
      />

      {/* 渐变遮罩 */}
      <div
        className={clsx(
          'absolute inset-0 transition-opacity duration-500',
          item.theme === 'dark'
            ? 'bg-gradient-to-b from-black/10 via-black/30 to-black/90'
            : 'bg-gradient-to-b from-black/5 via-black/10 to-black/70',
        )}
        aria-hidden="true"
      />

      {/* 内容区域 */}
      <div className="absolute inset-0 z-10 flex flex-col p-5 sm:p-8 lg:p-10">
        <h3
          className={clsx(
            'mb-3 text-xl font-bold tracking-tight text-white drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2 sm:mb-4 sm:text-2xl lg:text-3xl',
            // GPU 加速文字层
            'will-change-transform',
          )}
          style={{ transform: 'translateZ(0)' }}
        >
          {item.title}
        </h3>

        <div className="flex flex-1 flex-col justify-end transition-transform duration-500 group-hover:-translate-y-6 translate-y-4">
          <p
            className={clsx(
              'mb-4 text-sm font-medium leading-relaxed text-white/90 line-clamp-4 opacity-90 drop-shadow-sm sm:mb-6 sm:text-base lg:text-lg',
            )}
          >
            {item.description}
          </p>

          {/* 箭头图标：用纯色半透明替代昂贵的 backdrop-blur */}
          <div className="translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
            <div
              className={clsx(
                'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 sm:h-12 sm:w-12',
                // 用 rgba 半透明背景代替 backdrop-blur，性能提升显著
                'bg-white/20 hover:bg-white hover:text-blue-600',
              )}
              aria-hidden="true"
            >
              <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* 顶部装饰高光条 */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.article>
  )
})

/* ------------------------------------------------------------------ */
/*  主组件                                                            */
/* ------------------------------------------------------------------ */
export function Leftright() {
  const [activeTab, setActiveTab] = useState('industry')
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reducedMotion = useReducedMotion()

  const activeCategory = useMemo(
    () => solutionsData.find((c) => c.id === activeTab) || solutionsData[0],
    [activeTab],
  )

  // 组件卸载时清理定时器，防止内存泄漏
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
      className="flex min-h-screen flex-col justify-center bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="solutions-section-title"
    >
      <Container>
        {/* 顶部标题 */}
        <div className="mb-10 text-center sm:mb-16 lg:mb-24">
          <h2
            id="solutions-section-title"
            className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:mb-6 sm:text-4xl lg:text-6xl"
          >
            成熟行业实践，释放云上数字生产力
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-500 sm:text-lg lg:text-xl">
            汇聚各行业数字化转型成功经验，提供场景化解决方案，助力企业降本增效，加速业务创新
          </p>
        </div>

        {/* Tab 导航 */}
        <nav
          className="no-scrollbar mb-10 flex justify-start overflow-x-auto border-b border-slate-200 sm:mb-16 lg:mb-24"
          role="tablist"
          aria-label="解决方案分类"
        >
          <div className="inline-flex w-full">
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
                  'relative flex flex-1 items-center justify-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 outline-none sm:px-6 sm:py-4 sm:text-base',
                  'min-h-[44px]',
                  'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                  activeTab === category.id
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-slate-900',
                )}
              >
                {category.name}
                {activeTab === category.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
      </Container>

      {/* 解决方案卡片列表 */}
      <div className="w-full px-3 sm:px-6 lg:px-8 2xl:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            suppressHydrationWarning
            key={activeTab}
            variants={reducedMotion ? {} : containerVariants}
            initial={reducedMotion ? false : 'hidden'}
            animate={reducedMotion ? false : 'visible'}
            exit={reducedMotion ? undefined : 'exit'}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6 xl:grid-cols-6 2xl:gap-8"
            role="tabpanel"
            id={`solutions-panel-${activeCategory.id}`}
            aria-labelledby={`solutions-tab-${activeCategory.id}`}
          >
            {activeCategory.items.map((item, index) => (
              <SolutionCard
                key={item.id}
                item={item}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Container>
        {/* 底部链接 */}
        <div className="mt-12 text-center sm:mt-16 lg:mt-20">
          <a
            href="#"
            className="group inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-900 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg sm:px-10 sm:py-4 sm:text-lg"
            aria-label="查看所有解决方案"
          >
            查看所有解决方案
            <ChevronRightIcon
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
