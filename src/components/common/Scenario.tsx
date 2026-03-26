'use client'

import { Container } from '@/components/Container'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useState, useCallback, useEffect, useRef } from 'react'
import { 
  Monitor, 
  ClipboardCheck, 
  GraduationCap, 
  Smartphone, 
  Users, 
  Landmark, 
  FlaskConical,
  type LucideIcon
} from 'lucide-react'

/**
 * 解决方案卡片数据接口
 */
interface SolutionCard {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  image: string
  href: string
}

/**
 * 解决方案数据源
 */
const solutionCards: SolutionCard[] = [
  {
    title: 'AI 座舱',
    subtitle: '解决方案',
    description: '依托豆包大模型，提升全域数字营销能力。在 AI 赋能下，让用户洞察更精准，让销售效率更高，线索实现更高转化',
    icon: Monitor,
    image: '/images/screenshots/ai-cockpit.jpg',
    href: '#'
  },
  {
    title: 'AI 点单和巡质检 Agent',
    subtitle: '解决方案',
    description: '多模态大模型驱动，打造门店渠道 AI 智能巡管，实现监管智能闭环',
    icon: ClipboardCheck,
    image: '/images/screenshots/ai-agent.jpg',
    href: '#'
  },
  {
    title: 'AI 原生智慧高校',
    subtitle: '解决方案',
    description: '火山引擎以 AI+ 大模型驱动智慧校园建设，赋能高校数字化转型',
    icon: GraduationCap,
    image: '/images/screenshots/ai-campus.jpg',
    href: '#'
  },
  {
    title: 'AI 智能终端',
    subtitle: '解决方案',
    description: '豆包大模型赋能智能终端，多模型组合优化链路，覆盖全场景 AI 需求',
    icon: Smartphone,
    image: '/images/screenshots/ai-device.jpg',
    href: '#'
  },
  {
    title: '虚拟角色陪伴',
    subtitle: '解决方案',
    description: '使用豆包角色扮演模型，打造虚拟角色陪伴产品，精准制定角色模版',
    icon: Users,
    image: '/images/screenshots/ai-character.jpg',
    href: '#'
  },
  {
    title: '金融大模型',
    subtitle: '解决方案',
    description: '提供算力、模型、平台、应用全栈大模型解决方案，在对公业务、零售业务、研发支持、办公助手等场景实现大模型升级',
    icon: Landmark,
    image: '/images/screenshots/ai-finance.jpg',
    href: '#'
  },
  {
    title: 'AI for science',
    subtitle: '解决方案',
    description: '整合 AI 技术构建科研全流程工具链，推动生命科学、材料、气象等领域科研范式变革',
    icon: FlaskConical,
    image: '/images/screenshots/ai-science.jpg',
    href: '#'
  },
]

/**
 * 左箭头图标
 * 
 * @param {Object} props 组件属性
 * @param {string} props.className 自定义类名
 * @returns {JSX.Element} 图标组件
 */
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1em" 
      height="1em" 
      fill="none" 
      viewBox="0 0 28 28"
      className={className}
    >
      <path 
        fill="currentColor" 
        d="m3.756 13.38 7.875-7.875a.876.876 0 0 1 1.238 1.239l-6.382 6.38h17.138a.875.875 0 1 1 0 1.75H6.487l6.382 6.382a.876.876 0 0 1-1.238 1.238l-7.875-7.875a.876.876 0 0 1 0-1.239"
      />
    </svg>
  )
}

/**
 * 右箭头图标
 * 
 * @param {Object} props 组件属性
 * @param {string} props.className 自定义类名
 * @returns {JSX.Element} 图标组件
 */
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1em" 
      height="1em" 
      fill="none" 
      viewBox="0 0 28 28"
      className={className}
    >
      <path 
        fill="currentColor" 
        d="m24.244 14.62-7.875 7.875a.876.876 0 0 1-1.238-1.239l6.382-6.38H4.375a.875.875 0 0 1 0-1.75h17.138l-6.382-6.381a.876.876 0 0 1 1.238-1.239l7.875 7.875a.876.876 0 0 1 0 1.239"
      />
    </svg>
  )
}

/**
 * 解决方案卡片组件
 * 
 * 展示单个解决方案的图片、图标、标题和描述。
 * 优化了多端响应式展示和交互效果。
 * 
 * @param {Object} props 组件属性
 * @param {SolutionCard} props.card 卡片数据
 * @returns {JSX.Element} 卡片组件
 */
function SolutionCard({ card }: { card: SolutionCard }) {
  const IconComponent = card.icon

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white border border-[#E5E6EB] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(29,33,41,0.08)] hover:-translate-y-1 hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1664ff] focus-visible:ring-offset-2 active:scale-[0.98]"
    >
      {/* 图片区域 - 采用百分比高度自适应 */}
      <div className="h-[45%] relative overflow-hidden flex-shrink-0 bg-[#F7F8FA]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          loading="lazy"
        />
        {/* 图片上的渐变遮罩，增加质感 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 内容区域 - 填充剩余空间 */}
      <div className="flex-1 flex flex-col p-5 sm:p-6 min-h-0">
        {/* 图标 */}
        <div className="mb-4 flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#E8F3FF] text-[#1664ff] flex items-center justify-center group-hover:bg-[#1664ff] group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </div>
        </div>

        {/* 标题区域 */}
        <article className="mb-3 flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#1d2129] leading-tight group-hover:text-[#1664ff] transition-colors line-clamp-1">
            {card.title}
          </h3>
          <p className="text-sm font-medium text-[#1664ff] mt-1.5 opacity-80">
            {card.subtitle}
          </p>
        </article>

        {/* 描述 - 限制行数以统一卡片视觉高度 */}
        <p className="text-sm text-[#4e5969] leading-relaxed flex-1 line-clamp-3 sm:line-clamp-4">
          {card.description}
        </p>
      </div>
    </a>
  )
}

/**
 * 行业领先的场景化解决方案
 * 
 * 采用原生 CSS 滚动捕捉（Scroll Snap）实现的多端适配轮播图组件。
 * 包含完整的触控支持、自动分页计算以及平滑动画过渡。
 * 
 * @returns {JSX.Element} 场景化解决方案组件
 */
export function Scenario() {
  const prefersReducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  /**
   * 更新轮播图状态
   * 
   * 基于当前滚动位置和容器尺寸，动态计算当前索引和最大索引。
   * 支持多端响应式布局下的自动适配。
   */
  const updateState = useCallback(() => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    if (container.children.length === 0) return
    
    const firstChild = container.children[0] as HTMLElement
    const itemWidth = firstChild.offsetWidth
    let gap = 0
    if (container.children.length > 1) {
      const secondChild = container.children[1] as HTMLElement
      gap = secondChild.offsetLeft - firstChild.offsetLeft - itemWidth
    }
    
    // 计算最大索引
    const clientWidth = container.clientWidth
    const visible = Math.round((clientWidth + gap) / (itemWidth + gap))
    const newMaxIndex = Math.max(0, solutionCards.length - visible)
    setMaxIndex(newMaxIndex)

    // 计算当前索引
    const scrollLeft = container.scrollLeft
    const index = Math.min(newMaxIndex, Math.round(scrollLeft / (itemWidth + gap)))
    setCurrentIndex(index)
  }, [])

  /**
   * 监听滚动和窗口尺寸变化
   */
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    updateState()
    
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateState()
          ticking = false
        })
        ticking = true
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateState)
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateState)
    }
  }, [updateState])

  /**
   * 滚动到指定索引
   * 
   * @param {number} index 目标索引
   */
  const scrollTo = useCallback((index: number) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const firstChild = container.children[0] as HTMLElement
    if (!firstChild) return

    const itemWidth = firstChild.offsetWidth
    let gap = 0
    if (container.children.length > 1) {
      const secondChild = container.children[1] as HTMLElement
      gap = secondChild.offsetLeft - firstChild.offsetLeft - itemWidth
    }
    
    container.scrollTo({
      left: index * (itemWidth + gap),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }, [prefersReducedMotion])

  /**
   * 滚动到上一页
   */
  const handlePrev = useCallback(() => {
    scrollTo(Math.max(0, currentIndex - 1))
  }, [currentIndex, scrollTo])

  /**
   * 滚动到下一页
   */
  const handleNext = useCallback(() => {
    scrollTo(Math.min(maxIndex, currentIndex + 1))
  }, [currentIndex, maxIndex, scrollTo])

  // 动画配置
  const animationProps = prefersReducedMotion 
    ? { initial: false }
    : { 
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" }
      }

  return (
    <section 
      className="relative overflow-hidden bg-[#F7F8FA] py-16 sm:py-20 lg:py-28"
      aria-labelledby="scenario-heading"
    >
      <Container>
        {/* 标题区域 */}
        <motion.h2
          id="scenario-heading"
          {...animationProps}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d2129] mb-8 sm:mb-10 lg:mb-14 leading-tight"
        >
          行业领先的场景化解决方案
        </motion.h2>

        {/* 轮播容器 */}
        <div className="relative">
          {/* 卡片原生滚动轮播区域 */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {solutionCards.map((card) => (
              <div 
                key={card.title}
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4.5rem)/4)] xl:w-[calc((100%-6rem)/5)] h-[400px] sm:h-[440px] lg:h-[460px]"
              >
                <SolutionCard card={card} />
              </div>
            ))}
          </div>

          {/* 左右箭头导航和分页器 */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#E5E6EB] text-[#4e5969] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F7F8FA] hover:text-[#1664ff] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1664ff] active:scale-95 shadow-sm"
              aria-label="上一页"
            >
              <ChevronLeftIcon className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* 页码指示器 - 增大触控区域并优化动画 */}
            <div className="flex gap-2 sm:gap-3 items-center" role="tablist" aria-label="轮播导航">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="group relative flex items-center justify-center w-6 h-6 sm:w-5 sm:h-5 focus:outline-none"
                  aria-label={`第 ${index + 1} 页`}
                  aria-selected={index === currentIndex}
                  role="tab"
                >
                  <span 
                    className={`absolute rounded-full transition-all duration-300 ease-out ${
                      index === currentIndex 
                        ? 'bg-[#1664ff] w-6 sm:w-8 h-2' 
                        : 'bg-[#C9CDD4] group-hover:bg-[#86909C] w-2 h-2'
                    }`} 
                  />
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#E5E6EB] text-[#4e5969] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F7F8FA] hover:text-[#1664ff] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1664ff] active:scale-95 shadow-sm"
              aria-label="下一页"
            >
              <ChevronRightIcon className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
