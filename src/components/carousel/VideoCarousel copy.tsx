/**
 * 自适应视频/图片轮播组件
 * 智能轮播组件，根据设备类型自动切换内容：
 * - PC端：视频背景自动播放与循环
 * - 移动端：高质量图片背景显示
 * - 智能设备检测与内容切换
 * - 进度条显示播放进度
 * - 导航箭头支持手动切换
 * - 分页指示器显示当前位置
 * - 触摸手势支持移动端操作
 * - 键盘导航支持无障碍访问
 * - 播放控制按钮
 * - 响应式文案排版优化
 * - 自适应UI布局设计
 */
'use client'

import { HeaderCarousel } from '@/components/HeaderCarousel'
import type { SlideData } from '@/components/HeaderCarousel'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

/**
 * VideoCarousel 组件属性接口
 * 提供完整的自适应视频/图片轮播配置选项
 */
export interface VideoCarouselProps {
  /** 是否自动播放，默认true */
  autoPlay?: boolean
  /** 自动播放间隔时间（毫秒），默认6000ms */
  interval?: number
  /** 是否显示进度条，默认true */
  showProgress?: boolean
  /** 是否显示播放控制按钮，默认true */
  showPlayButton?: boolean
  /** 是否显示导航按钮，默认true */
  showNavigation?: boolean
  /** 自定义高度配置，支持字符串或响应式对象 */
  height?:
    | string
    | {
        base?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
        '2xl'?: string
      }
  /** 主题：'dark' 为深色背景配白字，'light' 为浅色背景配深色字，默认 'dark' */
  theme?: 'light' | 'dark'
  /** 是否使用文本模式按钮（纯文字+箭头），默认true */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认true */
  showOverlay?: boolean
  /** 覆盖层类名，传入时将覆盖默认的主题遮罩样式 */
  overlayClassName?: string
  /** 自定义类名 */
  className?: string
  /** 自定义轮播数据，不提供则使用默认数据 */
  customSlides?: SlideData[]
  /** 是否强制使用视频模式（忽略设备检测），默认false */
  forceVideoMode?: boolean
  /** 是否强制使用图片模式（忽略设备检测），默认false */
  forceImageMode?: boolean
  /** 移动端断点阈值（像素），默认768px */
  mobileBreakpoint?: number
}

/**
 * 自适应视频/图片轮播组件
 *
 * 基于 HeaderCarousel 的智能轮播组件，根据设备类型自动切换内容类型：
 *
 * 🖥️ **PC端体验**：
 * - 🎥 高清视频背景自动播放与无缝循环
 * - 🎮 播放/暂停控制按钮
 * - 🖱️ 鼠标悬停交互效果
 * - ⌨️ 键盘导航支持（← → 空格）
 *
 * 📱 **移动端体验**：
 * - 🖼️ 高质量静态图片背景
 * - 👆 触摸手势滑动操作
 * - ⚡ 更快的加载速度
 * - 🔋 更低的电池消耗
 *
 * 🔄 **通用功能**：
 * - ⏱️ 可配置的自动切换间隔时间
 * - 📊 实时进度条显示播放进度
 * - 🔄 左右导航箭头支持手动切换
 * - 📍 底部分页指示器显示当前位置
 * - 🎨 深色/浅色主题切换
 * - 📱 响应式文案排版优化
 * - 🔧 灵活的遮罩层配置
 *
 * 📐 **响应式设计**：
 * - 智能设备检测（默认768px断点）
 * - 自适应高度配置
 * - 移动优先的文案排版
 * - 触摸友好的交互元素
 *
 * 🎯 **无障碍支持**：
 * - ARIA 标签完整支持
 * - 键盘导航完全可用
 * - 屏幕阅读器友好
 * - 焦点管理优化
 *
 * @param props - VideoCarousel 组件属性
 * @returns React 自适应轮播组件
 *
 * @example
 * ```tsx
 * // 基础用法（自动检测设备类型）
 * <VideoCarousel />
 *
 * // 自定义配置
 * <VideoCarousel
 *   autoPlay={true}
 *   interval={8000}
 *   theme="light"
 *   height={{ base: 'h-[50vh]', md: 'h-[60vh]', lg: 'h-[70vh]' }}
 *   showPlayButton={true}
 *   mobileBreakpoint={1024}
 * />
 *
 * // 强制使用视频模式
 * <VideoCarousel
 *   forceVideoMode={true}
 *   theme="dark"
 * />
 * ```
 */
export function VideoCarousel({
  autoPlay = true,
  interval = 6000,
  showProgress = false,
  showPlayButton = true,
  showNavigation = false,
  height = { base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[500px]' },
  theme = 'light',
  textModeButton = true,
  showOverlay = true,
  overlayClassName,
  className,
  customSlides,
  forceVideoMode = false,
  forceImageMode = false,
  mobileBreakpoint = 768,
}: VideoCarouselProps): React.ReactNode {
  // 设备检测状态
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  /**
   * 设备类型检测和屏幕尺寸监听
   * 根据屏幕宽度和强制模式判断设备类型
   */
  useEffect(() => {
    setIsClient(true)

    const checkDevice = () => {
      if (forceVideoMode) {
        setIsMobile(false)
        return
      }
      if (forceImageMode) {
        setIsMobile(true)
        return
      }
      // 检测屏幕宽度
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < mobileBreakpoint)
    }

    // 初始检测
    checkDevice()

    // 监听窗口大小变化
    const handleResize = () => {
      checkDevice()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [forceVideoMode, forceImageMode, mobileBreakpoint])

  /**
   * 根据设备类型处理轮播数据
   * PC端使用视频，移动端使用图片
   */
  const processSlideData = (originalSlides: SlideData[]): SlideData[] => {
    return originalSlides.map((slide) => {
      if (isMobile) {
        // 移动端：使用图片背景
        return {
          ...slide,
          backgroundType: 'image' as const,
          backgroundImage:
            slide.backgroundImage ||
            `/images/carousel/HeaderCarousel${slide.id}.jpg`,
          backgroundVideo: undefined,
        }
      } else {
        // PC端：保持原有配置（视频优先）
        return slide
      }
    })
  }

  // 默认轮播数据配置
  const defaultSlides: SlideData[] = [
    {
      id: 1,
      title: '优刻云计算',
      subtitle: '专属福利活动',
      description:
        '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/2fe0f8df3560136622931560295/Bi8A3X97c0MA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel1.jpg',
      textPosition: 'left',
      buttonText: '立即购买',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
    {
      id: 2,
      title: '轻量应用服务器',
      subtitle: '云上新手训练营',
      description:
        '高性价比云服务器解决方案，轻松管理全球部署，专为开发者、初创团队及企业级用户精心打造',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/95622e503560136622939468774/PgKns80ZyJUA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
      textPosition: 'left',
      buttonText: '查看详情',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
    },
    {
      id: 3,
      title: 'GPU 云服务器',
      subtitle: 'AI 算力平台',
      description:
        '提供强大 GPU 算力的弹性计算服务，具有超强并行计算能力，专为深度学习训练、科学计算、图形渲染等场景优化',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/63bc0edf5145403691403255359/BubHsdlcVkIA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel3.jpg',
      textPosition: 'left',
      buttonText: '立即购买',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
    },
    {
      id: 4,
      title: '弹性伸缩服务',
      subtitle: '全球化部署',
      description:
        '智能化、自动化的计算资源管理策略，具备计划性调度和高容错性，为您提供低成本、高效率的云端解决方案',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/761709cb3560136622932299783/tTIcvvcAlzQA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel4.jpg',
      textPosition: 'left',
      buttonText: '了解更多',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
    },
  ]

  // 使用自定义轮播数据或默认数据
  const originalSlides = customSlides || defaultSlides
  // 根据设备类型处理轮播数据
  const slides = processSlideData(originalSlides)

  // 服务端渲染时直接渲染轮播组件
  if (!isClient) {
    return (
      <div className="w-full">
        <HeaderCarousel
          autoPlay={false}
          interval={interval}
          showProgress={showProgress}
          showPlayButton={false}
          showNavigation={showNavigation}
          height={height}
          slides={processSlideData(originalSlides)}
          theme={theme}
          textModeButton={textModeButton}
          showOverlay={showOverlay}
          overlayClassName={overlayClassName}
          className={clsx('relative overflow-hidden', className)}
        />
        {/* 卡片式设计区域 */}
        <div className="relative w-full">
          <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="推广资源" className="relative">
              <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
                {/* 推广项目列表 */}
                {[
                  {
                    title: '云服务器',
                    description: '提供安全可靠的弹性计算服务',
                    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
                    ariaLabel: '提供安全可靠的弹性计算服务',
                  },
                  {
                    title: '云服务器ECS',
                    description: '提供安全可靠的弹性计算服务',
                    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
                    ariaLabel: '云服务器ECS，提供安全可靠的弹性计算服务',
                  },
                  {
                    title: '免费试用',
                    description: '服务器等 60+ 款产品免费试用',
                    href: 'https://console.cloudcvm.com/regist.htm',
                    ariaLabel: '免费试用，服务器等 60+ 款产品免费试用',
                  },
                  {
                    title: 'AI专题',
                    description: '大模型云协同，快速实现AI应用',
                    href: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
                    ariaLabel: 'AI专题，大模型云协同，快速实现AI应用',
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-none border-0 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 md:rounded-none md:border-none md:bg-transparent md:px-6 md:py-6"
                    aria-label={item.ariaLabel}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 group-hover:text-gray-900 md:mb-2 md:text-base">
                        {item.title}
                      </h3>
                      <p className="hidden text-sm leading-relaxed text-gray-500 md:block">
                        {item.description}
                      </p>
                    </div>
                    <svg
                      className="h-6 w-6 shrink-0 text-gray-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gray-400 md:h-5 md:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
              {/* 移动端分割标记 */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-base text-gray-300 select-none md:hidden"
              >
                +
              </span>
            </nav>
          </div>
          {/* 白色底部容器 */}
          <div className="absolute top-0 right-0 left-0 -z-10 h-full bg-white shadow-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 服务端渲染时的占位符 */}
      <div className="relative -mt-[1px]">
        <HeaderCarousel
          autoPlay={autoPlay}
          interval={interval}
          showProgress={showProgress}
          showPlayButton={isMobile ? false : showPlayButton}
          showNavigation={showNavigation}
          height={height}
          slides={slides}
          theme={theme}
          textModeButton={textModeButton}
          showOverlay={showOverlay}
          overlayClassName={overlayClassName}
          className={clsx(
            'relative overflow-hidden',
            isMobile && ['touch-pan-y', 'select-none'],
            !isMobile && ['cursor-pointer'],
            className,
          )}
        />
      </div>

      {/* 卡片式设计区域 */}
      <div className="relative w-full">
        <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="推广资源" className="relative">
            <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              {/* 推广项目列表 */}
              {[
                {
                  title: '云服务器',
                  description: '提供安全可靠的弹性计算服务',
                  href: '#',
                  ariaLabel: '提供安全可靠的弹性计算服务',
                },
                {
                  title: '代理IP',
                  description: '长时效住宅IP，安全稳定',
                  href: '#',
                  ariaLabel: '代理IP，长时效住宅IP，安全稳定',
                },
                {
                  title: '电商云',
                  description: '纯净IP，更符合跨境卖家需求的云主机',
                  href: '#',
                  ariaLabel: '电商云，纯净IP，更符合跨境卖家需求的云主机',
                },
                {
                  title: 'AI专题',
                  description: '大模型云协同，快速实现AI应用',
                  href: '#',
                  ariaLabel: 'AI专题，大模型云协同，快速实现AI应用',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-none border-0 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 md:rounded-none md:border-none md:bg-transparent md:px-6 md:py-6"
                  aria-label={item.ariaLabel}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 group-hover:text-gray-900 md:mb-2 md:text-base">
                      {item.title}
                    </h3>
                    <p className="hidden text-sm leading-relaxed text-gray-500 md:block">
                      {item.description}
                    </p>
                  </div>
                  <svg
                    className="h-6 w-6 shrink-0 text-gray-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gray-400 md:h-5 md:w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
            {/* 移动端分割标记 */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-base text-gray-300 select-none md:hidden"
            >
              +
            </span>
          </nav>
        </div>
        {/* 白色底部容器 */}
        <div className="absolute top-0 right-0 left-0 -z-10 h-full bg-white shadow-lg" />
      </div>
    </div>
  )
}

/**
 * 设备检测工具函数
 * 用于在组件外部检测设备类型
 */
export const isMobileDevice = (breakpoint: number = 768): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoint
}

/**
 * 图片预加载工具函数
 * 用于提前加载轮播图片，提升用户体验
 */
export const preloadCarouselImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

export default VideoCarousel
