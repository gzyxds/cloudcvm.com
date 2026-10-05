'use client'

import { useState, useCallback, useEffect, useMemo, useRef, memo } from 'react'
import { useDebouncedHover } from '@/hooks/useDebouncedHover'
import { Container } from '@/components/ui/Container'
import type { Variants } from 'framer-motion'
import { motion, MotionConfig } from 'framer-motion'
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
        description: '以数据治理为基础，数据智能为动力，释放数据价值，助力各行各业数字化转型',
        icon: Database,
        imageUrl: '/images/screenshots/solution-general-data-enablement.webp',
      },
      {
        id: 'sap',
        title: 'SAP上云解决方案',
        description: '支持S/4 ERP、Business one等SAP系统上云，帮助企业实现极简运维与智慧运营',
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
        description: '提升用户增长运营效益，构建渠道&门店数字化能力，实现全面营销数字化转型',
        icon: Megaphone,
        imageUrl: '/images/screenshots/solution-general-digital-marketing.webp',
      },
      {
        id: 'growth-enterprise',
        title: '优刻云成长型企业数字化转型包',
        description: '联合业界知名应用厂商，针对成长型企业市场推出的系列化数字化转型包',
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
/*  卡片比例 — 全断点统一 4:3                                          */
/* ------------------------------------------------------------------ */
/**
 * 为什么是 4:3 而不是 16:9（两者都满足「横版」诉求，这里选 4:3）：
 *
 * 1) 高度预算够用：网格最窄处是 xl(1280) 的 4 列，卡片宽约 286px。
 *    16:9 只有约 161px 高，扣掉 p-4 的 32px 只剩 ~129px，
 *    放不下「标题 2 行 + 描述 + 了解详情」（约 124~150px）会溢出被裁；
 *    4:3 给出约 215px，各断点均留有 15px 以上余量。
 * 2) 裁切更轻：素材原图是竖版 776×1360（约 4:7），object-cover 居中裁切时
 *    16:9 仅保留原图约 32% 的高度，4:3 保留约 43%，主体（车、楼宇、人物）更完整。
 * 3) 断点一致：原先 16:9 → 3:4 → 9:16 三套比例会让横滑卡片在断点处高度突变，
 *    统一比例后 CLS 与横滑手感都稳定。
 *
 * 若后续换成横版素材或改为「上图下文」卡片，可在此一处改为 aspect-[16/9]。
 */
const CARD_ASPECT = 'aspect-[4/3]'

/* ------------------------------------------------------------------ */
/*  响应式 Image sizes                                                 */
/* ------------------------------------------------------------------ */
/**
 * 与下方网格列数一一对应（1 / 2 / 3 / 4 / 5 列）。
 * 注：静态导出下 next.config.js 关闭了图片优化（images.unoptimized），
 * 该值当前不影响实际下载；保留是为了将来重新开启优化时不至于失真。
 */
const imageSizes =
  '(max-width: 639px) 80vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, (max-width: 1535px) 25vw, 20vw'

/* ------------------------------------------------------------------ */
/*  动画变体                                                          */
/* ------------------------------------------------------------------ */

/** 单卡片入场 — 由父级 variants + staggerChildren 编排 */
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

/** 网格容器 — 只负责错峰编排，自身不做位移 */
const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

/* ------------------------------------------------------------------ */
/*  SolutionCard — 图片背景 + 半遮罩 + 浮层内容                         */
/* ------------------------------------------------------------------ */
interface SolutionCardProps {
  item: SolutionItem
}

/**
 * 解决方案卡片
 *
 * - 比例由卡片根节点上的 {@link CARD_ASPECT} 决定，四层（图片 / 遮罩 / 图标 / 文案）
 *   全部绝对定位填充，卡片高度只由比例决定，不会因文案行数变化而跳动。
 * - 图标脱离文档流放在左上角，把整块底部空间留给文案，避免窄卡片下内容溢出。
 * - 仅当数据里配置了 link 时才是可交互控件（<a>）；没有 link 时是纯展示的 <article>，
 *   不再用 role="button" + tabIndex 伪造键盘可达但点不动的假按钮。
 */
const SolutionCard = memo(function SolutionCard({ item }: SolutionCardProps) {
  const isInteractive = Boolean(item.link)

  const cardClass = clsx(
    'group relative overflow-hidden rounded-xl outline-none',
    CARD_ASPECT,
    'border border-neutral-200/60 bg-neutral-100 shadow-sm',
    'transition-[box-shadow,border-color] duration-300',
    'hover:border-brand-300/60 hover:shadow-lg hover:shadow-brand-500/10',
    isInteractive &&
      'cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'
  )

  const cardContent = (
    <>
      {/* 背景图片 — 铺满并按比例居中裁切 */}
      {item.imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={item.imageUrl}
            alt=""
            fill
            sizes={imageSizes}
            quality={75}
            className="object-cover object-center transition-transform duration-1000 ease-out motion-safe:group-hover:scale-105"
          />
        </div>
      )}

      {/* 半遮罩 — 从顶部透明渐变到底部深色，保证文字可读 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/85"
        aria-hidden="true"
      />

      {/* 顶部装饰高光线 */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 motion-safe:group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* 图标徽标 — 绝对定位于左上角，不占用底部文案的高度预算；
          底色用深色半透明而非白色玻璃，避免在浅色素材（如实践类的白底渲染图）上白图标看不清 */}
      <div
        className={clsx(
          'absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10',
          'border border-white/20 bg-neutral-950/35 text-white backdrop-blur-sm',
          'transition-colors duration-300 motion-safe:group-hover:bg-neutral-950/55'
        )}
        aria-hidden="true"
      >
        <item.icon className="h-5 w-5" strokeWidth={1.5} />
      </div>

      {/* 文案 — 底部对齐 */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 2xl:p-6">
        <h3 className="mb-1.5 text-base leading-snug font-bold text-white drop-shadow-md">
          {item.title}
        </h3>

        <p className="mb-3 line-clamp-2 text-[13px] leading-relaxed text-white/85 sm:line-clamp-3 xl:line-clamp-2 2xl:line-clamp-3">
          {item.description}
        </p>

        {/* 底部链接指示 — 常驻显示，触屏设备无 hover 也能看到入口 */}
        <div
          className="flex items-center gap-1 text-[13px] leading-5 font-medium text-white/80 transition-colors duration-300 group-hover:text-white lg:text-sm"
          aria-hidden="true"
        >
          <span>了解详情</span>
          <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" />
        </div>
      </div>
    </>
  )

  if (item.link) {
    return (
      <motion.a
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
    <motion.article variants={itemVariants} className={cardClass}>
      {cardContent}
    </motion.article>
  )
})

/* ------------------------------------------------------------------ */
/*  主组件                                                            */
/* ------------------------------------------------------------------ */
export function Leftright() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const activeCategory = useMemo(
    () => solutionsData.find((c) => c.id === activeTab) || solutionsData[0],
    [activeTab]
  )

  // 悬停防抖切换（卸载清理由 Hook 统一负责）
  const { handleHover: handleTabHover, handleLeave: handleTabLeave } = useDebouncedHover(
    setActiveTab,
    100
  )

  // 切换分类后把移动端横滑容器复位，否则会停留在上一个分类的滚动位置
  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0 })
  }, [activeTab])

  /**
   * 键盘导航 — 符合 WAI-ARIA tabs 模式：
   * 方向键 / Home / End 既切换选中项，也把焦点移到对应 Tab（roving tabindex）。
   */
  const focusTab = useCallback((index: number) => {
    const count = solutionsData.length
    const next = ((index % count) + count) % count
    setActiveTab(solutionsData[next].id)
    tabRefs.current[next]?.focus()
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          focusTab(index + 1)
          break
        case 'ArrowLeft':
          e.preventDefault()
          focusTab(index - 1)
          break
        case 'Home':
          e.preventDefault()
          focusTab(0)
          break
        case 'End':
          e.preventDefault()
          focusTab(solutionsData.length - 1)
          break
        default:
          break
      }
    },
    [focusTab]
  )

  return (
    <section
      className="section-y relative overflow-x-hidden bg-scroll lg:bg-fixed"
      style={{
        backgroundImage: 'url(/images/background/background-4.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby="solutions-section-title"
    >
      <Container className="relative z-10">
        {/* 顶部标题 — 仅桌面端显示 */}
        <div className="hidden text-center sm:mb-14 sm:block lg:mb-20">
          <h2 id="solutions-section-title" className="section-title-lg mb-4 leading-tight">
            成熟行业实践，释放云上数字生产力
          </h2>
          <p className="section-desc mx-auto max-w-2xl">
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
            {solutionsData.map((category, index) => {
              const isActive = activeTab === category.id
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  onClick={() => setActiveTab(category.id)}
                  onMouseEnter={() => handleTabHover(category.id)}
                  onMouseLeave={handleTabLeave}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="solutions-panel"
                  id={`solutions-tab-${category.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={clsx(
                    'relative flex min-h-[44px] items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none sm:flex-1 sm:gap-2 sm:px-6 sm:py-4 sm:text-base',
                    'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
                    isActive ? 'text-brand-500' : 'text-neutral-500 hover:text-neutral-900'
                  )}
                >
                  {category.name}
                  <span
                    className={clsx(
                      'rounded-full px-1.5 py-0.5 text-xs',
                      isActive ? 'bg-brand-100 text-brand-500' : 'text-neutral-400'
                    )}
                    aria-hidden="true"
                  >
                    {category.items.length}
                  </span>
                  {isActive && (
                    <span
                      className="absolute right-0 bottom-0 left-0 h-0.5 bg-brand-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </nav>

        {/* 解决方案卡片 — 移动端横排滑动，桌面端网格 */}
        <div
          ref={scrollerRef}
          className="scrollbar-hide -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0"
        >
          {/* reducedMotion="user"：跟随系统「减弱动态效果」，自动跳过位移只保留透明度 */}
          <MotionConfig reducedMotion="user">
            <motion.div
              key={activeCategory.id}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              className="flex w-max snap-x snap-mandatory gap-3 pb-4 sm:grid sm:w-auto sm:grid-cols-2 sm:gap-5 sm:pb-0 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 2xl:grid-cols-5"
              role="tabpanel"
              id="solutions-panel"
              aria-labelledby={`solutions-tab-${activeCategory.id}`}
            >
              {activeCategory.items.map((item) => (
                <div
                  key={item.id}
                  className="w-[80vw] max-w-[320px] flex-shrink-0 snap-start sm:w-auto sm:max-w-none"
                >
                  <SolutionCard item={item} />
                </div>
              ))}
            </motion.div>
          </MotionConfig>
        </div>
      </Container>
    </section>
  )
}
