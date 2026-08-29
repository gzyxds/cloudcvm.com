'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * 轮播每一项的数据结构
 */
export interface CarouselSlide {
  id: number
  order: number
  title: string
  subtitle?: string
  description: string
  imagePath?: string
  imageAlt: string
  videoPath?: string
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
    order: 2,
    title: '轻量服务器',
    subtitle: '优刻云计算',
    description: '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
    imagePath: '/images/screenshots/carousel-2.webp',
    videoPath: '/images/screenshots/VideoCarousel.mp4',
    imageAlt: '全方位支付解决方案',
    primaryButtonText: '立即领取',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '立即购买',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 2,
    order: 3,
    title: '专属福利活动',
    subtitle: '优刻云计算',
    description: '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
    imagePath: '/images/screenshots/carousel-5.webp',
    videoPath: '/images/screenshots/VideoCarousel1.mp4',
    imageAlt: '云计算解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '立即购买',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 3,
    order: 1,
    title: '年终钜惠狂欢',
    subtitle: '智聚优刻云 年中钜惠狂欢',
    description: '智聚优刻云 年中钜惠狂欢 优惠商品与活动合集!',
    imagePath: '/images/screenshots/carousel-7.webp',
    videoPath: '/images/screenshots/VideoCarousel2.mp4',
    imageAlt: 'GPU云服务器平台',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '立即购买',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 4,
    order: 4,
    title: '全球化部署',
    subtitle: '弹性伸缩服务',
    description: '智能化、自动化的计算资源管理策略，具备计划性调度和高容错性，为您提供低成本、高效率的云端解决方案',
    imagePath: '/images/screenshots/carousel-9.webp',
    videoPath: '/images/screenshots/VideoCarousel3.mp4',
    imageAlt: '全球化部署解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '立即购买',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  }
]

/**
 * 底部入口卡片数据 - 简洁四栏设计，参考腾讯云首页入口卡片样式
 */
const entryCards = [
  {
    id: 1,
    tag: '云服务器',
    title: 'CVM 蜂驰型实例',
    subtitle: '算力成本最大降幅超45%',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 2,
    tag: 'AI 专题活动',
    title: '大模型云协同',
    subtitle: '快速实现AI应用',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 3,
    tag: '轻量服务器',
    title: '轻量应用服务器',
    subtitle: '开箱即用，高性价比上云之选',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 4,
    tag: '会员续费',
    title: '续费折上折',
    subtitle: '续费折上9.5折起',
    href: 'https://console.cloudcvm.com/cart/goodsList.htm'
  }
]

/**
 * height 对象形式支持的高度组合。
 * Tailwind 只会生成源码中出现过的完整类名，因此这里集中以字面量声明，
 * 运行时再按 { base, md, lg } 组合查表，避免动态拼接导致样式丢失。
 */
const HEIGHT_CLASS_MAP: Record<string, string> = {
  '400|450|550': 'h-[400px] md:h-[450px] lg:h-[550px]',
  '400|500|600': 'h-[400px] md:h-[500px] lg:h-[600px]',
}

/**
 * 将 height 对象解析为 Tailwind 高度类；无法匹配预设时回退到 heightClass。
 */
function resolveHeightClass(
  height: CarouselProps['height'],
  heightClass: string
): string {
  if (typeof height === 'string' && height) return height
  if (height && typeof height === 'object') {
    const key = [
      (height.base || '').replace(/^h-\[|\]$/g, ''),
      (height.md || '').replace(/^h-\[|\]$/g, ''),
      (height.lg || '').replace(/^h-\[|\]$/g, ''),
    ].join('|')
    return HEIGHT_CLASS_MAP[key] || heightClass
  }
  return heightClass
}

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
  indicator: 'h-2 transition-all duration-300',
  primaryButton: 'btn px-6 py-2.5 lg:px-7 lg:py-3 text-sm bg-primary-500 hover:bg-primary-600 text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center font-medium',
  secondaryButton: 'btn px-6 py-2.5 lg:px-7 lg:py-3 bg-white text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center text-sm'
}

/**
 * 轮播图片组件 - 使用memo优化性能
 */
const CarouselImage = memo(({ slide, isActive, showOverlay = true, forceImageMode = false }: {
  slide: CarouselSlide
  isActive: boolean
  showOverlay?: boolean
  forceImageMode?: boolean
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // 只播放当前可见项，避免多个视频同时解码占用 GPU/带宽
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isActive) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isActive])

  const videoProps = {
    autoPlay: isActive,
    loop: true,
    muted: true,
    playsInline: true,
    preload: (isActive ? 'auto' : 'metadata') as 'auto' | 'metadata',
    poster: slide.imagePath,
  }

  return (
    <div
      className={`${styles.imageContainer} ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      {slide.videoPath && slide.imagePath && !forceImageMode ? (
        <>
          {/* PC端：视频 */}
          <video
            ref={videoRef}
            src={slide.videoPath}
            {...videoProps}
            className="hidden lg:block absolute inset-0 object-cover w-full h-full"
          />
          {/* 移动端：图片 */}
          <Image
            src={slide.imagePath}
            alt={slide.imageAlt}
            fill
            className={`${styles.image} lg:hidden`}
            priority={isActive}
            loading={isActive ? 'eager' : 'lazy'}
          />
        </>
      ) : slide.videoPath && !forceImageMode ? (
        <video
          ref={videoRef}
          src={slide.videoPath}
          {...videoProps}
          className="absolute inset-0 object-cover w-full h-full"
        />
      ) : slide.imagePath ? (
        <Image
          src={slide.imagePath}
          alt={slide.imageAlt}
          fill
          className={styles.image}
          priority={isActive}
          loading={isActive ? 'eager' : 'lazy'}
        />
      ) : null}
      {/* 添加一个轻微的遮罩，确保文字可读性；可通过 showOverlay 关闭 */}
      {showOverlay && (
        <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />
      )}
    </div>
  )
})

CarouselImage.displayName = 'CarouselImage'

/**
 * 标题按钮组件 - 使用memo优化性能
 * 遵循 Bento 风格：直角，边框，无阴影
 */
const TitleButton = memo(({ slideItem, index, active, progressKey, isPlaying, interval, showProgress, onTitleClick }: {
  slideItem: CarouselSlide
  index: number
  active: number
  progressKey: number
  isPlaying: boolean
  interval: number
  showProgress: boolean
  onTitleClick: (index: number) => void
}) => {
  const isActive = active === index
  return (
    <button
      onClick={() => onTitleClick(index)}
      className={`${styles.titleButton} ${isActive ? styles.titleButtonActive : ''} font-sans`}
      aria-label={`切换到 ${slideItem.title}`}
      aria-current={isActive ? 'true' : undefined}
      style={{
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"'
      }}
    >
      {/* 文本内容 - Flex item - 右对齐 */}
      <div className="flex-grow min-w-0">
        <h3 className={`transition-colors duration-300 truncate ${isActive ? 'text-primary-500' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-50'
          }`}>
          {slideItem.title}
        </h3>
      </div>

      {/* 竖向进度条指示器 - 覆盖在父容器边框上 */}
      {isActive && showProgress && (
        <div className="absolute right-0 top-0 bottom-0 w-px overflow-hidden">
          <div
            key={progressKey}
            className="absolute top-0 left-0 w-full bg-primary-500"
            style={{ height: '100%', animation: isPlaying ? `verticalProgressBar ${interval}ms linear` : 'none' }}
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
/**
 * @name Carousel
 * @description 一个功能丰富的、支持触摸滑动和自动播放的轮播组件。
 * @param {boolean} [autoPlay=true] - 是否自动播放。
 * @param {number} [interval=8000] - 自动播放的间隔时间（毫秒）。
 * @param {string} [heightClass='h-[400px] sm:h-[500px] lg:h-[600px]'] - 定义轮播组件高度的 Tailwind CSS 类。
 * @param {CarouselSlide[]} [slides] - 自定义轮播数据。如果未提供，则使用默认数据。
 * @param {string} [className] - 应用于根元素的额外 CSS 类。
 */
const Carousel = memo(function Carousel({
  autoPlay = true,
  interval = 8000,
  heightClass = 'h-[400px] sm:h-[500px] lg:h-[600px]',
  slides: propSlides,
  className,
  height,
  theme = 'light',
  textModeButton = false,
  showOverlay = true,
  showProgress = true,
  showPlayButton = false,
  showNavigation = false,
  customSlides,
  forceImageMode = false,
}: CarouselProps) {
  // 统一数据源：customSlides 兼容旧调用方，按 order 排序（缺失时按原顺序）
  const slides = useMemo(
    () => (customSlides || propSlides || defaultSlides).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    [customSlides, propSlides]
  )
  // 高度解析：height 对象/字符串优先于 heightClass
  const resolvedHeightClass = useMemo(
    () => resolveHeightClass(height, heightClass),
    [height, heightClass]
  )
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const resumePlayTimerRef = useRef<NodeJS.Timeout | null>(null) // 用于恢复播放的定时器
  const [progressKey, setProgressKey] = useState(0) // 用于重置进度条动画
  const [intervalTick, setIntervalTick] = useState(0) // 用于重建自动播放定时器，保证与进度条动画同步
  const prevPlayingRef = useRef(isPlaying)

  // 触摸滑动相关状态
  const touchStartRef = useRef<number | null>(null)
  const touchEndRef = useRef<number | null>(null)

  // 最小滑动距离（像素）
  const minSwipeDistance = 50

  /**
   * 导航到指定的轮播项。
   * @param {'next' | 'prev' | number} direction - 导航方向或目标索引。
   */
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
    // 重置自动播放计时，使定时器与进度条动画从同一起点开始
    setIntervalTick(prev => prev + 1)
  }, [slides.length])

  /**
   * 处理标题按钮的点击事件。
   * 点击后会切换到对应的轮播项，并暂时停止自动播放，3秒后恢复。
   * @param {number} index - 被点击标题的索引。
   */
  const handleTitleClick = useCallback((index: number) => {
    navigate(index)
    setIsPlaying(false)

    if (resumePlayTimerRef.current) {
      clearTimeout(resumePlayTimerRef.current)
    }

    resumePlayTimerRef.current = setTimeout(() => {
      if (autoPlay) {
        setIsPlaying(true)
      }
    }, 3000)
  }, [navigate, autoPlay])

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (resumePlayTimerRef.current) {
        clearTimeout(resumePlayTimerRef.current)
      }
    }
  }, [])

  // 播放状态从暂停恢复时，同步重置进度条动画与自动播放计时
  useEffect(() => {
    if (isPlaying && !prevPlayingRef.current) {
      setProgressKey(prev => prev + 1)
      setIntervalTick(prev => prev + 1)
    }
    prevPlayingRef.current = isPlaying
  }, [isPlaying])

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
  }, [autoPlay, isPlaying, slides.length, interval, navigate, intervalTick])

  // 悬停控制 - 优化
  const handleMouseEnter = useCallback(() => setIsPlaying(false), [])
  const handleMouseLeave = useCallback(() => setIsPlaying(autoPlay), [autoPlay])

  /**
   * 触摸开始事件处理。
   * @param {React.TouchEvent} e - 触摸事件对象。
   */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = null
    touchStartRef.current = e.targetTouches[0].clientX
  }, [])

  /**
   * 触摸移动事件处理。
   * @param {React.TouchEvent} e - 触摸事件对象。
   */
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX
  }, [])

  /**
   * 触摸结束事件处理，判断滑动距离并执行导航。
   */
  const onTouchEnd = useCallback(() => {
    const touchStart = touchStartRef.current
    const touchEnd = touchEndRef.current
    if (touchStart === null || touchEnd === null) return

    const distance = touchStart - touchEnd
    if (Math.abs(distance) > minSwipeDistance) {
      navigate(distance > 0 ? 'next' : 'prev')
    }

    touchStartRef.current = null
    touchEndRef.current = null
  }, [navigate, minSwipeDistance])

  const currentSlide = slides[active]
  const isDark = theme === 'dark'
  const primaryBtnClass = textModeButton
    ? 'inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors'
    : styles.primaryButton
  const secondaryBtnClass = textModeButton
    ? 'inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors'
    : styles.secondaryButton

  return (
    <div className="relative">
      <section
        role="region"
        aria-roledescription="轮播"
        aria-label="活动轮播"
        className={clsx(styles.section, resolvedHeightClass, className)}
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
              showOverlay={showOverlay}
              forceImageMode={forceImageMode}
            />
          ))}
        </div>

        {/* 轮播内容叠加层 - 响应式优化 */}
        <div
          className={styles.content}
          role="group"
          aria-label={`第 ${active + 1} 张，共 ${slides.length} 张`}
          aria-live="off"
        >
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
                    showProgress={showProgress}
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

              <h1
                className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight"
                style={isDark ? { color: '#ffffff' } : undefined}
              >
                {currentSlide.title}
              </h1>

              <p
                className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
                style={isDark ? { color: 'rgba(255,255,255,0.85)' } : undefined}
              >
                {currentSlide.description}
              </p>

              {/* 普通链接按钮 - Bento 风格 */}
              <div className="flex flex-row gap-3 sm:gap-4 pt-1 justify-between sm:justify-start w-full sm:w-auto">
                <a
                  href={currentSlide.primaryButtonHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(primaryBtnClass, "flex-1 sm:flex-none max-w-[50%] sm:max-w-none")}
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
                  className={clsx(secondaryBtnClass, "flex-1 sm:flex-none max-w-[50%] sm:max-w-none")}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {currentSlide.secondaryButtonText || '立即购买'}
                </a>
              </div>

              {/* 播放/暂停按钮（可选，默认不显示） */}
              {showPlayButton && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(prev => !prev)}
                  aria-label={isPlaying ? '暂停自动播放' : '开始自动播放'}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 transition-colors hover:bg-white hover:text-primary-500"
                >
                  {isPlaying ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </Container>
        </div>

        {/* 左右切换按钮（可选，默认不显示） */}
        {showNavigation && slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => navigate('prev')}
              aria-label="上一张"
              className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 transition-colors hover:bg-white hover:text-primary-500 lg:block"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => navigate('next')}
              aria-label="下一张"
              className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 transition-colors hover:bg-white hover:text-primary-500 lg:block"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* 移动端底部指示器 - 已移除，因为卡片布局遮挡了指示器 */}
      </section>

      {/* 底部入口卡片 - 左右保留间距，左侧对齐轮播内容区 */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        {/* PC端：四栏布局，页面标准间距均匀分布 */}
        <div className="hidden lg:block bg-white border-y border-[#eee]">
          <Container>
            <div className="grid grid-cols-4">
              {entryCards.map((card, index) => (
                <a
                  key={card.id}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "relative flex flex-col justify-center px-8 py-4 transition-all duration-200 group",
                    index === entryCards.length - 1
                      ? "bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 hover:from-brand-300 hover:via-brand-400 hover:to-brand-500 lg:-mr-8"
                      : "hover:bg-[#F0F5FF]",
                    index < entryCards.length - 1 && "border-r border-[#eee]"
                  )}
                  style={
                    index === entryCards.length - 1
                      ? { marginRight: 'calc(-1 * max(0px, (100vw - 1800px) / 2) - 32px)' }
                      : undefined
                  }
                >
                  {/* 标签 */}
                  <span
                    className={clsx(
                      "inline-flex self-start text-sm font-medium tracking-wider mb-1.5",
                      index === entryCards.length - 1 ? "text-white" : "text-[#0055ff]"
                    )}
                  >
                    {card.tag}
                  </span>

                  {/* 标题 */}
                  <p
                    className={clsx(
                      "text-lg font-medium leading-snug mb-0.5",
                      index === entryCards.length - 1 ? "text-white" : "text-[#0F172A]"
                    )}
                  >
                    {card.title}
                  </p>

                  {/* 副标题 */}
                  <p
                    className={clsx(
                      "text-sm leading-relaxed",
                      index === entryCards.length - 1 ? "text-blue-100" : "text-[#8C8C8C]"
                    )}
                  >
                    {card.subtitle}
                  </p>

                  {/* 箭头 - 始终可见，hover时增强 */}
                  <span
                    className={clsx(
                      "absolute top-1/2 -translate-y-1/2 transition-colors duration-200",
                      index === entryCards.length - 1
                        ? "text-white/80 group-hover:text-white"
                        : "right-5 text-[#D9D9D9] group-hover:text-[#0055ff]"
                    )}
                    style={
                      index === entryCards.length - 1
                        ? { right: 'calc(52px + max(0px, (100vw - 1800px) / 2))' }
                        : undefined
                    }
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </div>

        {/* 移动端：+ 分割线设计 */}
        <div className="lg:hidden -mt-2">
          <div className="bg-white pt-2">
            <div className="grid grid-cols-2 pb-2">
              {entryCards.map((card, index) => (
                <a
                  key={card.id}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "group relative transition-colors duration-200 py-2 px-3",
                    index % 2 === 0 && "border-r border-[#eee]",
                    index >= 2 && "border-t border-[#eee]"
                  )}
                >
                  <span className="inline-block text-xs text-[#0055ff] mb-0.5 font-medium tracking-wider">
                    {card.tag}
                  </span>
                  <p className="font-medium text-[#0F172A] text-sm leading-snug mb-0.5 group-hover:text-[#0055ff] transition-colors">
                    {card.title}
                  </p>
                  <p className="hidden text-[#8C8C8C] text-xs leading-relaxed">
                    {card.subtitle}
                  </p>
                </a>
              ))}
            </div>
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
