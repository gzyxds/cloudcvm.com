'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { CreditCardIcon, DevicePhoneMobileIcon, QrCodeIcon, UserGroupIcon } from '@heroicons/react/20/solid'

/**
 * 轮播每一项的数据结构
 */
export interface CarouselSlide {
  id: number
  order: number
  title: string
  subtitle?: string
  description: string
  imagePath: string
  imageAlt: string
  primaryButtonText: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

/**
 * 轮播组件属性
 */
export interface CarouselProps {
  autoPlay?: boolean
  interval?: number
  heightClass?: string
  showIndicators?: boolean
  slides?: CarouselSlide[]
  className?: string
  showProgress?: boolean
  showPlayButton?: boolean
  showNavigation?: boolean
  height?: {
    base?: string
    md?: string
    lg?: string
  } | string
  theme?: 'light' | 'dark'
  textModeButton?: boolean
  showOverlay?: boolean
  customSlides?: any[]
  forceImageMode?: boolean
}

/**
 * VideoCarousel组件属性类型别名
 * 为了保持向后兼容性
 */
export type VideoCarouselProps = CarouselProps

/**
 * 默认轮播图数据
 */
const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    order: 1,
    title: '专属福利活动',
    subtitle: '优刻云计算',
    description: '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
    imagePath: '/images/screenshots/carousel -2.jpg',
    imageAlt: '全方位支付解决方案',
    primaryButtonText: '立即领取',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 2,
    order: 2,
    title: '专属福利活动',
    subtitle: '优刻云计算',
    description: '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
    imagePath: '/images/screenshots/carousel -5.jpg',
    imageAlt: '云计算解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 3,
    order: 3,
    title: 'AI 算力平台',
    subtitle: 'GPU 云服务器',
    description: '提供强大 GPU 算力的弹性计算服务，具有超强并行计算能力，专为深度学习训练、科学计算、图形渲染等场景优化',
    imagePath: '/images/screenshots/carousel -7.png',
    imageAlt: 'GPU云服务器平台',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 4,
    order: 4,
    title: '全球化部署',
    subtitle: '弹性伸缩服务',
    description: '智能化、自动化的计算资源管理策略，具备计划性调度和高容错性，为您提供低成本、高效率的云端解决方案',
    imagePath: '/images/screenshots/carousel -9.jpg',
    imageAlt: '全球化部署解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  }
]

/**
 * 底部悬浮卡片数据 - 独立设计的4个卡片，使用Heroicons图标
 */
const floatingCards = [
  {
    id: 1,
    type: 'feature',
    title: '新人首单直降',
    description: 'COS标准存储 低至1元',
    icon: CreditCardIcon,
    style: 'modern'
  },
  {
    id: 2,
    type: 'feature',
    title: '领券有省',
    description: '领大额礼包 新购续费不用愁',
    icon: DevicePhoneMobileIcon,
    style: 'rounded'
  },
  {
    id: 3,
    type: 'feature',
    title: 'CVM蜂驰型实例',
    description: '算力成本最大降幅 超45%',
    icon: QrCodeIcon,
    style: 'gradient'
  },
  {
    id: 4,
    type: 'special',
    title: '会员续费折上折',
    description: '续费折上9.5折起',
    icon: UserGroupIcon,
    style: 'extended'
  }
]

/**
 * 预定义样式类 - 遵循 Bento Linear Design 风格
 * 去除圆角 (rounded-none)，使用边框 (border)，去除阴影
 */
const styles = {
  section: 'relative w-full overflow-hidden touch-pan-y',
  imageContainer: 'absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out',
  image: 'object-cover w-full h-full object-center will-change-transform',
  // Bento 风格：无圆角，边框优先，无阴影，Flex布局，字体优化，右对齐
  titleButton: 'group relative w-full flex items-center justify-start text-left transition-all duration-300 cursor-pointer py-5 pl-0 pr-2 rounded-none text-[15px] leading-[1.6] text-slate-600 font-sans',
  titleButtonActive: 'text-primary-500 font-semibold',
  content: 'absolute inset-0 z-10 flex items-center',
  indicator: 'h-2 transition-all duration-300'
}

/**
 * 轮播图片组件 - 使用memo优化性能
 */
const CarouselImage = memo(({ slide, isActive, index, active }: {
  slide: CarouselSlide
  isActive: boolean
  index: number
  active: number
}) => (
  <div
    className={`${styles.imageContainer} ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
  >
    <Image
      src={slide.imagePath}
      alt={slide.imageAlt}
      fill
      className={styles.image}
      priority={isActive}
      loading={isActive ? 'eager' : 'lazy'}
    />
    {/* 添加一个轻微的遮罩，确保文字可读性 */}
    <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />
  </div>
))

CarouselImage.displayName = 'CarouselImage'

/**
 * 标题按钮组件 - 使用memo优化性能
 * 遵循 Bento 风格：直角，边框，无阴影
 */
const TitleButton = memo(({ slideItem, index, active, progressKey, isPlaying, interval, onTitleClick }: {
  slideItem: CarouselSlide
  index: number
  active: number
  progressKey: number
  isPlaying: boolean
  interval: number
  onTitleClick: (index: number) => void
}) => {
  const isActive = active === index
  return (
    <button
      onClick={() => onTitleClick(index)}
      className={`${styles.titleButton} ${isActive ? styles.titleButtonActive : ''}`}
      aria-label={`切换到 ${slideItem.title}`}
      style={{
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      }}
    >
      {/* 文本内容 - Flex item - 右对齐 */}
      <div className="flex-grow min-w-0">
        <h3 className={`transition-colors duration-300 truncate ${
          isActive ? 'text-primary-500' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50'
        }`}>
          {slideItem.title}
        </h3>
      </div>

      {/* 竖向进度条指示器 - 覆盖在父容器边框上 */}
      {isActive && (
        <div className="absolute right-0 top-0 bottom-0 w-px overflow-hidden">
          <div
            key={progressKey}
            className="absolute top-0 left-0 w-full bg-primary-500"
            style={{
              height: isPlaying ? '100%' : '100%',
              animation: isPlaying ? `verticalProgressBar ${interval}ms linear` : 'none'
            }}
          />
        </div>
      )}
    </button>
  )
})

TitleButton.displayName = 'TitleButton'

/**
 * 优化后的轮播组件
 * 风格：Bento Linear (直角、边框、简约)
 */
const Carousel = memo(function Carousel({
  autoPlay = true,
  interval = 8000,
  heightClass = 'h-[400px] sm:h-[500px] lg:h-[600px]',
  showIndicators = true,
  slides: propSlides,
  className
}: CarouselProps) {
  const slides = useMemo(() => (propSlides || defaultSlides).sort((a, b) => a.order - b.order), [propSlides])
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [progressKey, setProgressKey] = useState(0) // 用于重置进度条动画

  // 触摸滑动相关状态
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // 最小滑动距离（像素）
  const minSwipeDistance = 50

  // 合并的导航函数
  const navigate = useCallback((direction: 'next' | 'prev' | number) => {
    setActive(prev => {
      const total = slides.length
      if (typeof direction === 'number') {
        return ((direction % total) + total) % total
      }
      return direction === 'next'
        ? (prev + 1) % total
        : ((prev - 1) + total) % total
    })
    // 重置进度条动画
    setProgressKey(prev => prev + 1)
  }, [slides.length])

  // 标题点击处理 - 优化后
  const handleTitleClick = useCallback((index: number) => {
    navigate(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(autoPlay), 3000)
  }, [navigate, autoPlay])

  // 合并的定时器管理
  useEffect(() => {
    if (!autoPlay || !isPlaying || slides.length <= 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }

    timerRef.current = setInterval(() => navigate('next'), interval)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [autoPlay, isPlaying, slides.length, interval, navigate])

  // 悬停控制 - 优化
  const handleMouseEnter = useCallback(() => setIsPlaying(false), [])
  const handleMouseLeave = useCallback(() => setIsPlaying(autoPlay), [autoPlay])

  // 触摸事件处理函数 - 优化性能
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    if (Math.abs(distance) > minSwipeDistance) {
      navigate(distance > 0 ? 'next' : 'prev')
    }

    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, navigate, minSwipeDistance])

  const currentSlide = slides[active]

  return (
    <div className="relative">
      <section
        className={clsx(styles.section, heightClass, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* 轮播图片背景 - 优化渲染 */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <CarouselImage
              key={slide.id}
              slide={slide}
              isActive={index === active}
              index={index}
              active={active}
            />
          ))}
        </div>

        {/* 轮播内容叠加层 - 响应式优化 */}
        <div className={styles.content}>
          <Container className="w-full flex flex-col lg:flex-row px-0 sm:px-2 lg:px-4">
            {/* 左侧标题列表 - 移动端隐藏，PC端显示 */}
            <div className="hidden lg:block w-auto flex-shrink-0">
              <div className="relative flex flex-col space-y-0 py-6 h-full justify-center min-w-[120px]">
                <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
                <div className="mb-3 pr-4">
                  <span className="inline-flex items-center border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 px-3 py-1 font-mono text-[11px] tracking-widest text-slate-700 dark:text-slate-300 rounded-full backdrop-blur-sm">
                    活动分类
                  </span>
                </div>
                {slides.map((slideItem, index) => (
                  <TitleButton
                    key={slideItem.id}
                    slideItem={slideItem}
                    index={index}
                    active={active}
                    progressKey={progressKey}
                    isPlaying={isPlaying}
                    interval={interval}
                    onTitleClick={handleTitleClick}
                  />
                ))}
              </div>
            </div>

            {/* 轮播内容 - 移动端优化 */}
            <div className="flex-1 max-w-4xl 2xl:max-w-5xl px-0 lg:ml-12 2xl:ml-16 flex flex-col justify-center py-6 sm:py-8 lg:py-0 gap-5">
              {currentSlide.subtitle && (
                <div>
                  <span className="inline-flex items-center border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/50 px-3 py-1 font-mono text-[11px] tracking-widest text-slate-700 dark:text-slate-300 rounded-full backdrop-blur-sm">
                    {currentSlide.subtitle}
                  </span>
                </div>
              )}

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                {currentSlide.title}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {currentSlide.description}
              </p>

              {/* 普通链接按钮 - Bento 风格 */}
              <div className="flex flex-row gap-3 sm:gap-4 pt-1 justify-center sm:justify-start">
                <a
                  href={currentSlide.primaryButtonHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-8 py-3 sm:px-6 lg:px-8 lg:py-4 text-sm sm:text-base bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center font-medium"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  {currentSlide.primaryButtonText}
                </a>

                <a
                  href={currentSlide.secondaryButtonHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn px-8 py-3 sm:px-6 lg:px-8 lg:py-4 bg-white text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-lg flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {currentSlide.secondaryButtonText || '联系客服'}
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* 移动端底部指示器 - 已移除，因为卡片布局遮挡了指示器 */}
      </section>

      {/* 底部悬浮卡片 - 响应式设计 - 100%复刻参考图布局 (左1右3) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <Container className="hidden lg:flex justify-center items-stretch gap-6 min-h-[120px] w-full">

          {/* 左侧大卡片 - 云服务器 */}
          <div className="relative w-[480px] h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl px-8 py-5 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
             {/* 背景装饰 - 调整为更柔和的渐变光晕 */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             <div className="flex items-center gap-3 mb-3 relative z-10">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-sans">
                 云服务器 <span className="text-red-500">领万元津贴</span>
                 <span className="text-slate-400 text-xl not-italic ml-1">›</span>
               </h3>
             </div>

             <div className="grid grid-cols-3 gap-y-3 gap-x-6 relative z-10">
                {['新客首购1元', '场景组合2.8折', '云计算热销榜', '高释270元起', 'AI新购1折抢', '大模型培训9折'].map((item, idx) => (
                  <a key={idx} href="#" className="flex items-center text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors group/link">
                    {item}
                    <span className="ml-1 text-slate-400 group-hover/link:translate-x-0.5 transition-transform">›</span>
                  </a>
                ))}
             </div>
          </div>

          {/* 右侧三个特性卡片 - 合并为一个容器，使用 Flex 布局、竖分割线和毛玻璃效果 */}
          <div className="flex-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl flex items-stretch transition-shadow shadow-sm hover:shadow-xl duration-300">
            {floatingCards.slice(0, 3).map((card, index) => (
              <div key={card.id} className="relative flex-1 px-8 py-5 flex flex-col justify-center items-start h-full hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer gap-3 first:rounded-l-xl last:rounded-r-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg group-hover:scale-105 transition-transform duration-300">
                    {React.createElement(card.icon, {
                      className: "w-6 h-6 text-primary-500 transition-colors"
                    })}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg line-clamp-1 group-hover:text-primary-500 transition-colors">{card.title}</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{card.description}</p>

                {/* 自定义短分割线 - 仅在非最后一个元素显示 */}
                {index < 2 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-200 dark:bg-slate-800"></div>
                )}
              </div>
            ))}
          </div>
        </Container>

        {/* 移动端：两排两列网格布局 */}
        <div className="lg:hidden px-4 mt-10">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {floatingCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 transition-colors duration-200 cursor-pointer rounded-xl overflow-hidden shadow-sm"
              >
                <div className="p-3">
                  <div className="flex flex-col items-start text-left gap-1.5">
                    <div className="flex items-center gap-1.5 w-full">
                      <div className="flex h-8 w-8 items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg flex-shrink-0">
                        {React.createElement(card.icon, {
                          className: `text-primary-500 w-4 h-4`
                        })}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-xs line-clamp-1">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

Carousel.displayName = 'Carousel'

export default Carousel

// 命名导出，用于支持命名导入
export { Carousel as VideoCarousel }
