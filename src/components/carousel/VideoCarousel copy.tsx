'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { CreditCardIcon, DevicePhoneMobileIcon, QrCodeIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { DualQRCodeButtonGroup } from '@/components/common/QRCode'

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
  // 新增的属性定义
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
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'modern'
  },
  {
    id: 2,
    type: 'feature',
    title: '领券有省',
    description: '领大额礼包 新购续费不用愁',
    icon: DevicePhoneMobileIcon,
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'rounded'
  },
  {
    id: 3,
    type: 'feature',
    title: 'CVM蜂驰型实例',
    description: '算力成本最大降幅 超45%',
    icon: QrCodeIcon,
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'gradient'
  },
  {
    id: 4,
    type: 'special',
    title: '会员续费折上折',
    description: '续费折上9.5折起',
    icon: UserGroupIcon,
    iconColor: 'text-blue-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'extended'
  }
]

/**
 * 预定义样式类 - 减少重复计算和优化性能
 */
const styles = {
  section: 'relative w-full overflow-hidden touch-pan-y',
  imageContainer: 'absolute inset-0 transition-opacity duration-1000 ease-in-out',
  image: 'object-cover will-change-transform',
  titleButton: 'group relative text-left transition-all duration-300 cursor-pointer bg-gradient-to-b from-white to-gray-50 p-3 sm:p-4 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] hover:-translate-y-1 max-w-[200px] sm:max-w-[250px] rounded-[12px]',
  titleButtonActive: 'bg-gradient-to-b from-white to-gray-50 border-blue-300 -translate-y-1 shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] rounded-[12px]',
  content: 'absolute inset-0 z-10 flex items-center',
  indicator: 'h-2 transition-all duration-300'
}

/**
 * 悬浮卡片样式 - 提取为常量避免重复计算
 */
const cardBaseStyle = {
  display: 'block',
  marginRight: '20px',
  borderRadius: '12px',
  boxSizing: 'border-box' as const,
  width: '1px',
  height: 'auto',
  position: 'relative' as const,
  pointerEvents: 'auto' as const
}

const getCardStyle = (card: typeof floatingCards[0]) => ({
  ...cardBaseStyle,
  backgroundImage: card.type === 'special'
    ? 'linear-gradient(rgb(80, 141, 255) 0%, rgba(80, 141, 255, 0.85) 100%)'
    : 'linear-gradient(0deg, #fff, #f3f5f8)',
  boxShadow: card.type === 'special'
    ? 'rgba(80, 141, 255, 0.4) 8px 8px 20px 0px'
    : '8px 8px 20px 0 rgba(55,99,170,.1)',
  borderColor: card.type === 'special' ? 'rgba(80, 141, 255, 0.45)' : undefined,
  flex: card.style === 'extended' ? '2' : '1',
  maxWidth: card.style === 'extended' ? '420px' : 'none',
  padding: card.style === 'extended' ? '10px 16px 20px' : '18px'
})

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
    className={`${styles.imageContainer} ${isActive ? 'opacity-100' : 'opacity-0'}`}
    style={{ display: Math.abs(index - active) > 1 ? 'none' : 'block' }}
  >
    <Image
      src={slide.imagePath}
      alt={slide.imageAlt}
      fill
      className={styles.image}
      unoptimized
      priority={isActive}
      loading={isActive ? 'eager' : 'lazy'}
    />
  </div>
))

CarouselImage.displayName = 'CarouselImage'

/**
 * 标题按钮组件 - 使用memo优化性能
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
    >
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
        <span className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold transition-all duration-300 rounded-[4px] ${
          isActive
            ? 'bg-blue-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-500 border border-gray-200'
        }`}>
          {String(slideItem.order).padStart(2, '0')}
        </span>
      </div>

      <div className="relative pl-12">
        <h3 className={`text-sm lg:text-base font-bold leading-tight mb-1 transition-colors duration-300 ${
          isActive ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
        }`}>
          {slideItem.title}
        </h3>

        {slideItem.subtitle && (
          <p className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${
            isActive ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
          }`}>
            {slideItem.subtitle}
          </p>
        )}
      </div>

      {isActive && (
        <div className="absolute bottom-0 left-0 right-0">
          <div
            key={progressKey}
            className="h-px bg-blue-500 transition-all duration-300 ease-out"
            style={{
              width: isPlaying ? '100%' : '0%',
              animation: isPlaying ? `progressBar ${interval}ms linear infinite` : 'none'
            }}
          />
        </div>
      )}

      <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`} />
    </button>
  )
})

TitleButton.displayName = 'TitleButton'

/**
 * 优化后的轮播组件
 */
const Carousel = memo(function Carousel({
  autoPlay = true,
  interval = 8000,
  heightClass = 'h-[400px] sm:h-[500px] lg:h-[600px]',
  showIndicators = true,
  slides: propSlides,
  className
}: CarouselProps) {
  // 添加进度条动画样式 - 优化：避免重复创建样式元素
  useEffect(() => {
    const styleId = 'carousel-progress-animation'
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = '@keyframes progressBar{0%{width:0%}100%{width:100%}}'
    document.head.appendChild(style)

    return () => document.getElementById(styleId)?.remove()
  }, [])
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
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row">
            {/* 左侧标题列表 - 移动端隐藏，PC端显示 */}
            <div className="hidden lg:block w-64 lg:w-72 xl:w-80 flex-shrink-0">
              <div className="flex flex-col space-y-4">
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
            <div className="flex-1 max-w-3xl mt-4 sm:mt-8 lg:mt-12 xl:mt-16 px-2 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 leading-tight mb-3 sm:mb-4">
                {currentSlide.title}
              </h1>

              {currentSlide.subtitle && (
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black leading-relaxed mb-4 sm:mb-6">
                  {currentSlide.subtitle}
                </h2>
              )}

              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed max-w-2xl mb-6 sm:mb-8">
                {currentSlide.description}
              </p>

              {/* 普通链接按钮 - 使用自定义的primaryButtonHref */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={currentSlide.primaryButtonHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base inline-flex items-center justify-center"
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
                  className="px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/90 backdrop-blur-sm text-black font-medium rounded-lg border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base inline-flex items-center justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {currentSlide.secondaryButtonText || '联系客服'}
                </a>
              </div>

              {/* 原双二维码按钮组 - 已注释 */}
              {/* <DualQRCodeButtonGroup
                leftButton={{
                  text: currentSlide.primaryButtonText,
                  className: "px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  )
                }}
                rightButton={{
                  text: currentSlide.secondaryButtonText || '联系客服',
                  className: "px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/90 backdrop-blur-sm text-black font-medium rounded-lg border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                }}
                leftQRCode={{
                  src: '/images/contact/userhlc.png',
                  title: '客服咨询',
                  description: '扫码添加客服微信，获取解决方案'
                }}
                rightQRCode={{
                  src: '/images/contact/gzh.png',
                  title: '关注公众号',
                  description: '扫码关注公众号，获取产品信息'
                }}
                title="扫码联系我们"
                description="选择下方二维码进行联系，为您提供专业的支付解决方案"
                containerClassName="flex-row gap-3 sm:gap-4"
              /> */}
            </div>
          </div>
        </div>

        {/* 移动端底部指示器 - 仅在移动端显示 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 lg:hidden">
          <div className="flex space-x-2">
            {slides.map((_, index) => {
              const isActive = active === index
              return (
                <button
                  key={index}
                  onClick={() => handleTitleClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`切换到第 ${index + 1} 张图片`}
                />
              )
            })}
          </div>
        </div>

        {/* 移动端左右滑动按钮 - 已隐藏 */}
        <button
          onClick={() => navigate('prev')}
          className="hidden"
          aria-label="上一张"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => navigate('next')}
          className="hidden"
          aria-label="下一张"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>




      </section>

      {/* 底部悬浮卡片 - 响应式设计，移动端和PC端不同布局 */}
      <div className="absolute bottom-0 left-0 right-0 z-50 transform translate-y-1/2">
        {/* PC端：水平排列的4个卡片 - 优化渲染 */}
        <div className="hidden lg:flex justify-center items-center gap-4 px-4 max-w-[1800px] mx-auto">
          {floatingCards.map((card) => (
            <div
              key={card.id}
              className={`transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-white rounded-lg ${
                card.style === 'rounded' ? '' : ''
              } ${
                card.style === 'extended' ? 'px-4 pt-2.5 pb-5' : 'p-4'
              }`}
              style={getCardStyle(card)}
            >
              {card.type === 'special' ? (
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-white flex items-center gap-3 text-lg mb-2 text-left">
                    {card.icon && React.createElement(card.icon, {
                      className: 'flex-shrink-0 text-white w-6 h-6'
                    })}
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-white/90 text-base leading-relaxed text-left">
                      {card.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-bold text-gray-900 flex items-center gap-3 text-base">
                    {React.createElement(card.icon, {
                      className: `flex-shrink-0 ${card.iconColor || 'text-blue-600'} w-6 h-6`
                    })}
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-base">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 移动端：可滚动的水平卡片列表 */}
        <div className="lg:hidden px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {floatingCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 bg-white border-2 border-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer rounded-[12px]"
                style={{
                  backgroundImage: 'linear-gradient(0deg, #fff, #f3f5f8)',
                  boxShadow: '4px 4px 12px 0 rgba(55,99,170,.1)',
                  width: card.style === 'extended' ? '200px' : '160px',
                  minWidth: card.style === 'extended' ? '200px' : '160px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="p-3">
                  {card.type === 'special' ? (
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm mb-1.5 text-left">
                        {card.icon && React.createElement(card.icon, {
                          className: `flex-shrink-0 ${card.iconColor || 'text-blue-600'} w-5 h-5`
                        })}
                        {card.title}
                      </h3>
                      {card.description && (
                        <p className="text-gray-600 text-xs leading-relaxed text-left line-clamp-2">
                          {card.description}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-start text-left">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm mb-1.5">
                        {React.createElement(card.icon, {
                          className: `flex-shrink-0 ${card.iconColor || 'text-blue-600'} w-5 h-5`
                        })}
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  )}
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
