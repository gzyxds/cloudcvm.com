'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MessageSquareCode, Database, Sparkles, Palette, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * /ai 页面首屏 Hero 区
 *
 * 此前叫 AiCarousel：它抄了一份 VideoCarousel 的 CarouselProps/CarouselSlide 接口
 * （实为死代码，组件根本不消费那些 props），名字也误导为「轮播」。
 * 实际职责是 Hero 区块（徽标 + 标题 + 打字机 + CTA + 特性网格 + 图片跑马灯），
 * 故改名为 AiHeroSection，并按实际用法收敛类型。
 */

/**
 * 跑马灯图片项（组件只用到 imagePath，其余字段不参与渲染）
 */
export interface AiHeroSlide {
  id: number
  imagePath: string
}

/**
 * 默认跑马灯图片（取自各 AI 产品主视觉）
 */
const defaultSlides: AiHeroSlide[] = [
  { id: 1, imagePath: '/images/product/saas.webp' },
  { id: 2, imagePath: '/images/product/Nanobanana.webp' },
  { id: 3, imagePath: '/images/product/小红书内容复刻.webp' },
  { id: 4, imagePath: '/images/product/lw.webp' },
]

// 打字机文案
const sentences = [
  '它能够助您快速开发AI应用，缩短80%项目交付周期',
  '它拥有开箱即用的丰富AI应用',
  '它正在努力成为AI应用落地的首选方案',
  '它能够助您快速落地MVP，验证AI应用商业价值',
]

/**
 * 简单的 Marquee 组件
 * 支持垂直和水平滚动
 */
const Marquee = ({
  children,
  vertical = false,
  reverse = false,
  duration = 30,
  className,
}: {
  children: React.ReactNode
  vertical?: boolean
  reverse?: boolean
  duration?: number
  className?: string
}) => {
  return (
    <div
      className={cn(
        'flex overflow-hidden',
        vertical ? 'h-full flex-col' : 'w-full flex-row',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 gap-4',
          vertical ? 'flex-col' : 'flex-row',
          vertical ? 'animate-marquee-vertical' : 'animate-marquee-horizontal'
        )}
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
          animationDuration: `${duration}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

/**
 * /ai 页面首屏区块
 */
const AiHeroSection = ({ slides = defaultSlides }: { slides?: AiHeroSlide[] }) => {
  // 打字机效果状态
  const [typeWriterText, setTypeWriterText] = useState('')

  // 图片数据处理
  const marqueeImages = useMemo(() => {
    // 获取所有图片路径
    const images = slides.map((s) => s.imagePath)

    // 确保有足够的图片用于滚动，如果少于10张则重复
    let result = [...images]
    while (result.length < 10) {
      result = [...result, ...images]
    }

    const mid = Math.ceil(result.length / 2)
    return {
      first: result.slice(0, mid),
      second: result.slice(mid),
    }
  }, [slides])

  // 打字机效果逻辑
  useEffect(() => {
    let isDeleting = false
    let sentenceIndex = 0
    let charIndex = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      const currentSentence = sentences[sentenceIndex]

      if (isDeleting) {
        setTypeWriterText(currentSentence.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypeWriterText(currentSentence.substring(0, charIndex + 1))
        charIndex++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentSentence.length) {
        typeSpeed = 2000 // 完成一句后暂停
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        sentenceIndex = (sentenceIndex + 1) % sentences.length
        typeSpeed = 500 // 开始新句前暂停
      }

      timeoutId = setTimeout(type, typeSpeed)
    }

    type()

    return () => clearTimeout(timeoutId)
  }, [])

  // 注入关键帧动画
  useEffect(() => {
    const styleId = 'marquee-animations'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marquee-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical linear infinite;
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal linear infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // 特性列表
  const features = [
    { icon: Sparkles, title: 'AI数字人', desc: '声音形象克隆，24h在线' },
    { icon: Database, title: '知识库系统', desc: '智能问答，文档管理' },
    { icon: Palette, title: '聊天绘画', desc: 'AI创作，文生图/视频' },
    { icon: MessageSquareCode, title: '源码定制', desc: '私有部署，专业支持' },
  ]

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-white py-16 text-black md:py-24 dark:bg-gray-900 dark:text-white">
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区 */}
          <div className="relative z-20 space-y-8 text-center md:space-y-10 lg:text-left">
            {/* 装饰背景 */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible select-none">
              {/* 顶部聚焦光束 - 调整位置和模糊度 */}
              <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 mix-blend-multiply blur-[100px] lg:left-0 lg:-translate-x-1/3 dark:mix-blend-screen"></div>

              {/* 科技网格背景 - 降低透明度 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:32px_32px]"></div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:scale-105 md:px-4 dark:border-white/10 dark:bg-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-600 md:text-sm dark:text-gray-300">
                  企业知识库全新升级 v2.0
                </span>
                <Link
                  href="/work"
                  className="ml-1 flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  查看详情 <ArrowRight className="ml-0.5 h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                <span className="block pb-2">
                  <span className="text-blue-600">全方位</span> AI解决方案
                </span>
                <span className="mt-2 block text-2xl font-semibold text-gray-600 sm:text-3xl lg:text-4xl dark:text-gray-300">
                  赋能开发者与先进组织
                </span>
              </h1>
            </div>

            <div className="flex min-h-[3.5em] items-center justify-center sm:min-h-[1.75em] lg:justify-start">
              <p className="max-w-2xl text-base leading-relaxed font-medium text-gray-500 sm:text-lg dark:text-gray-400">
                {typeWriterText}
                <span className="animate-blink ml-1 inline-block h-[1.2em] border-r-2 border-blue-500 align-middle"></span>
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <Link
                href="/demo"
                className="flex w-full items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/40 sm:w-auto"
              >
                开始免费试用
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-center text-base font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                联系技术顾问
              </Link>
            </div>

            <div className="mx-auto mt-8 max-w-3xl border-t border-gray-100 pt-8 lg:mx-0 dark:border-gray-800/50">
              <div className="grid grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="group flex cursor-default items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <div className="mt-1 shrink-0 rounded-lg bg-blue-50 p-2 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧图片展示区 (Mobile Only) */}
          <div className="relative z-10 mt-12 flex w-full items-center justify-center lg:hidden">
            {/* 背景光效 */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-[100px] dark:bg-blue-900/10"></div>

            {/* Mobile: Horizontal Marquee */}
            <div className="-ml-[calc(50vw-50%)] flex w-screen flex-col gap-5">
              <Marquee duration={30}>
                {marqueeImages.first.map((img, index) => (
                  <div key={`row1-${index}`} className="mx-3 block w-[260px] shrink-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border-[3px] border-white bg-white shadow-lg dark:border-gray-800 dark:bg-gray-800">
                      <Image
                        src={img}
                        alt={`Product Preview ${index + 1}`}
                        fill
                        className="bg-gray-50 object-cover dark:bg-gray-900"
                        loading="lazy"
                        sizes="260px"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
              <Marquee reverse duration={35}>
                {marqueeImages.second.map((img, index) => (
                  <div key={`row2-${index}`} className="mx-3 block w-[260px] shrink-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border-[3px] border-white bg-white shadow-lg dark:border-gray-800 dark:bg-gray-800">
                      <Image
                        src={img}
                        alt={`Product Preview ${index + 1}`}
                        fill
                        className="bg-gray-50 object-cover dark:bg-gray-900"
                        loading="lazy"
                        sizes="260px"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧图片展示区 (Desktop Only - Absolute Positioned) */}
      <div className="absolute top-0 right-0 bottom-0 z-10 hidden w-[50vw] items-center justify-center overflow-hidden pl-12 lg:flex">
        {/* 背景光效 */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-[100px] dark:bg-blue-900/10"></div>

        {/* Desktop: Vertical Marquee */}
        <div className="relative -my-[10%] grid h-[120%] w-full grid-cols-2 gap-6 overflow-hidden">
          {/* 遮罩层：顶部和底部渐变消失 */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-900"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>

          <Marquee vertical duration={50} className="h-full py-4">
            {marqueeImages.first.map((img, index) => (
              <div key={`col1-${index}`} className="mb-6 block w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-md border-[4px] border-white bg-white shadow-xl shadow-gray-200/50 transition-transform duration-300 hover:scale-[1.02] dark:border-gray-800 dark:bg-gray-800 dark:shadow-black/50">
                  <Image
                    src={img}
                    alt={`Product Preview ${index + 1}`}
                    fill
                    className="bg-gray-50 object-cover dark:bg-gray-900"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee vertical reverse duration={60} className="h-full py-4">
            {marqueeImages.second.map((img, index) => (
              <div key={`col2-${index}`} className="mb-6 block w-full">
                <div className="relative aspect-video w-full overflow-hidden rounded-md border-[4px] border-white bg-white shadow-xl shadow-gray-200/50 transition-transform duration-300 hover:scale-[1.02] dark:border-gray-800 dark:bg-gray-800 dark:shadow-black/50">
                  <Image
                    src={img}
                    alt={`Product Preview ${index + 1}`}
                    fill
                    className="bg-gray-50 object-cover dark:bg-gray-900"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default AiHeroSection
