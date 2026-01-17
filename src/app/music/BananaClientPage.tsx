'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  DocumentTextIcon,
  PhotoIcon,
  SparklesIcon,
  UserIcon,
  PencilIcon,
  CubeIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { AIscene } from '@/components/ai/AIscene'

// ==================== Data ====================
const features = [
  {
    title: '文本生成',
    desc: '支持以文本/歌词为输入,快速生成完整歌曲,让创作更简单高效。',
    icon: DocumentTextIcon,
  },
  {
    title: '哼唱生成',
    desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。',
    icon: MicrophoneIcon,
  },
  {
    title: '乐谱生成',
    desc: '支持乐谱输入,快速生成音乐作品,满足专业音乐创作需求。',
    icon: MusicalNoteIcon,
  },
  {
    title: '多种输出',
    desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足不同场景需求。',
    icon: SpeakerWaveIcon,
  },
  {
    title: '商用授权',
    desc: '支持个人娱乐与商用配乐,提供完整的商用授权支持。',
    icon: ShieldCheckIcon,
  },
  {
    title: '快速生成',
    desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。',
    icon: BoltIcon,
  },
]

const initialFeatureDetails = [
  {
    title: '文本生成,文字即刻成曲',
    desc: '支持以文本/歌词为输入,快速生成完整歌曲。降低创作门槛,提升效率,让音乐创作更简单高效。',
    activePoint: 0,
    points: [
      {
        title: '文本输入',
        desc: '支持以文本/歌词为输入,只需输入文字描述,即可快速生成完整歌曲。'
      },
      {
        title: '歌词生成',
        desc: '支持歌词输入,快速生成与歌词匹配的音乐作品,提升创作质量。'
      },
      {
        title: '快速生成',
        desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。'
      },
      {
        title: '高质量输出',
        desc: '生成的音乐质量高,音质清晰,旋律优美,满足专业级创作需求。'
      }
    ],
    image: 'https://server.buildingai.cc/uploads/image/2025/12/d6b8f151-cb48-4450-a93c-6f483838fb9e.png',
  },
  {
    title: '哼唱生成,旋律即刻成曲',
    desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲。降低创作门槛,让不懂乐理的用户也能创作音乐。',
    activePoint: 0,
    points: [
      {
        title: '哼唱输入',
        desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。'
      },
      {
        title: '智能识别',
        desc: '智能识别哼唱旋律,准确捕捉音乐元素,生成高质量音乐作品。'
      },
      {
        title: '风格保持',
        desc: '从哼唱中学习风格和情感,生成与原哼唱风格协调的音乐。'
      },
      {
        title: '灵活创作方式',
        desc: '支持文本、歌词、哼唱、乐谱多种方式,满足不同用户的创作习惯。'
      }
    ],
    image: 'https://server.buildingai.cc/uploads/image/2025/12/6dcba637-d63b-48e8-a721-b6656c0240be.png',
  },
  {
    title: '多种输出,满足不同场景',
    desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足个人娱乐与商用配乐的不同需求。提供完整的商用授权支持。',
    activePoint: 0,
    points: [
      {
        title: '完整歌曲',
        desc: '支持生成完整歌曲,包含人声和伴奏,满足个人娱乐需求。'
      },
      {
        title: '伴奏输出',
        desc: '支持生成纯伴奏音乐,方便用户添加自己的人声或进行二次创作。'
      },
      {
        title: '人声输出',
        desc: '支持生成纯人声,方便用户进行混音和后期处理。'
      },
      {
        title: '商用授权',
        desc: '提供完整的商用授权支持,支持个人娱乐与商用配乐,满足商业需求。'
      }
    ],
    image: 'https://www.buidai.com/product/music-3.png',
  },
]

// ==================== Components ====================

// 简单的 ProductFeatures 占位组件
function ProductFeatures() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <Container>
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          受信赖的 AI 音乐生成技术
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-400">
            <MusicalNoteIcon className="w-6 h-6" /> 文本生成
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-400">
            <MicrophoneIcon className="w-6 h-6" /> 哼唱生成
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-400">
            <SparklesIcon className="w-6 h-6" /> 乐谱生成
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-400">
            <SpeakerWaveIcon className="w-6 h-6" /> 多种输出
          </div>
        </div>
      </Container>
    </div>
  )
}

// 简单的 UserReviews 占位组件
function LandingUserReviews() {
  const reviews = [
    {
      content: '生成的音乐质量非常高，旋律优美，完全超出了我的预期。特别是哼唱生成功能，非常智能。',
      author: '张音乐人',
      role: '音乐制作人',
    },
    {
      content: '文本生成功能很强大，只需输入歌词就能快速生成歌曲，非常适合内容创作者。',
      author: '李博主',
      role: '内容创作者',
    },
    {
      content: '支持多种输出格式，商用授权也很完善，大大提升了我的工作效率。',
      author: '王编辑',
      role: '视频编辑',
    },
  ]

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          用户评价
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{review.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {review.author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// ==================== Main Page Component ====================
export default function BananaClientPage() {
  const [featureDetails, setFeatureDetails] = useState(initialFeatureDetails)
  const demoContainerRef = useRef<HTMLDivElement>(null)

  const toDemo = () => {
    demoContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePointHover = (featureIndex: number, pointIndex: number) => {
    setFeatureDetails((prev) =>
      prev.map((feature, idx) =>
        idx === featureIndex ? { ...feature, activePoint: pointIndex } : feature
      )
    )
  }

  return (
    <div className="relative font-sans text-gray-900 dark:bg-gray-900 dark:text-white overflow-x-hidden">
      {/* 首屏区域 */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* 背景特效 */}
        <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none select-none">
          {/* 顶部聚焦光束 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-[#0055ff]/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-normal dark:bg-[#0055ff]/10"></div>
          {/* 科技网格背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          {/* 抽象几何点缀 */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-2xl animate-pulse hidden md:block"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-full blur-xl animate-bounce hidden md:block"></div>
        </div>

        <Container className="text-center relative z-10">
          <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4">
              <span className="px-1.5 py-0.5 rounded bg-[#0055ff] text-[11px] font-bold text-white tracking-wider">
                NEW
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-300">
                AI音乐 发布
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              打造您的 <span className="text-[#0055ff]">专属 AI 音乐</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              新一代 AI 音乐生成工具,以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲。
              <br className="hidden sm:block" />
              降低门槛、提升效率,支持个人娱乐与商用配乐的"人机协同"。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              {/* 开始创作 Button */}
              <Link
                href="#"
                className="group inline-flex items-center justify-center py-3.5 px-8 text-base font-medium rounded-lg bg-[#0055ff] text-white shadow-lg shadow-[#0055ff]/20 hover:bg-[#0043cc] transition-all"
              >
                开始创作
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>

              {/* 查看示例 Button */}
              <button
                onClick={toDemo}
                className="group inline-flex items-center justify-center py-3.5 px-8 text-base font-medium rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                查看示例
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* 图片展示区域 */}
      <div
        ref={demoContainerRef}
        id="__demo_container__"
        className="py-12 md:py-20"
      >
        <Container>
          <div className="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 aspect-video flex items-center justify-center">
              {/* 使用 img 标签以避免 Next.js Image 的静态导入限制，并允许容错 */}
              <img
                src="https://server.buildingai.cc/uploads/image/2025/12/d6b8f151-cb48-4450-a93c-6f483838fb9e.png"
                alt="AI音乐生成展示"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* 功能网格 */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              全能型 AI 音乐生成平台
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              集文本生成、哼唱生成、乐谱生成于一体,为您提供一站式音乐创作解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 功能详情 */}
      <Container className="py-12 md:py-16 flex flex-col gap-16 md:gap-24">
        {featureDetails.map((detail, index) => (
          <div key={index} className="group">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div
                className={clsx('flex flex-col gap-4', {
                  'lg:order-last': index % 2 === 1,
                })}
              >
                {/* 标签 */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff6ff] text-[#0055ff] text-xs font-medium w-fit mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fillOpacity="0.8"
                      d="m10.5 6.882-5.98 5.98a.47.47 0 0 1-.665 0l-1.217-1.215a.47.47 0 0 1 0-.665L8.618 5z"
                    />
                    <path
                      fill="currentColor"
                      d="M14.5 9.375a.46.46 0 0 1-.136.324.47.47 0 0 1-.327.134h-.926v.917a.46.46 0 0 1-.135.324.466.466 0 0 1-.655 0 .46.46 0 0 1-.136-.324v-.917h-.926a.47.47 0 0 1-.327-.134.456.456 0 0 1 .327-.782h.926V8a.465.465 0 0 1 .926 0v.917h.926c.123 0 .24.048.327.134a.46.46 0 0 1 .136.324M3.39 4.792h.925v.916a.465.465 0 0 0 .926 0v-.916h.926c.123 0 .24-.049.327-.135a.456.456 0 0 0-.327-.782h-.926v-.917a.46.46 0 0 0-.136-.324.465.465 0 0 0-.79.324v.917H3.39a.47.47 0 0 0-.327.134.456.456 0 0 0 .327.783m7.406 6.875h-.462v-.459a.46.46 0 0 0-.136-.324.466.466 0 0 0-.79.324v.459h-.463a.47.47 0 0 0-.328.134.456.456 0 0 0 .328.782h.463v.459c0 .121.048.238.135.324a.466.466 0 0 0 .79-.324v-.459h.463c.123 0 .241-.048.328-.134a.456.456 0 0 0-.328-.782M12.84 5.25l-8.062 7.981a.93.93 0 0 1-1.309 0l-1.198-1.184a.92.92 0 0 1-.2-1 .9.9 0 0 1 .2-.297l8.063-7.981a.93.93 0 0 1 1.009-.2.9.9 0 0 1 .3.2l1.197 1.184a.915.915 0 0 1 .2 1 .9.9 0 0 1-.2.297M9.678 7.083 8.482 5.898l-5.556 5.5 1.197 1.185zm2.507-2.481-1.197-1.185L9.136 5.25l1.198 1.185z"
                    />
                  </svg>
                  核心功能
                </div>

                {/* 标题 */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight mb-3">
                  {detail.title}
                </h2>

                {/* 功能折叠列表 */}
                <div className="flex flex-col gap-1">
                  {detail.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="rounded-xl flex gap-3 w-full group/item transition-all duration-300 pr-3 cursor-pointer"
                      style={{
                        background:
                          detail.activePoint === pIndex
                            ? 'linear-gradient(to right, color-mix(in srgb, #0055ff, transparent 90%), transparent)'
                            : 'transparent',
                      }}
                      onMouseEnter={() => handlePointHover(index, pIndex)}
                    >
                      <div className="flex flex-col pl-3 py-3 items-center gap-[2px]">
                        {/* Icon */}
                        <div className="relative w-4 h-4 mt-1 shrink-0 flex items-center justify-center text-[#0055ff]">
                          {/* Active Icon */}
                          {detail.activePoint === pIndex ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              className="absolute inset-0 transition-opacity duration-300"
                            >
                              <path
                                fill="currentColor"
                                d="M8 1a7 7 0 1 0 7 7 7.01 7.01 0 0 0-7-7m3.073 5.766-3.769 3.769a.54.54 0 0 1-.762 0L4.927 8.919a.539.539 0 0 1 .762-.761l1.234 1.235 3.388-3.39a.54.54 0 0 1 .92.382.54.54 0 0 1-.158.38"
                              ></path>
                            </svg>
                          ) : (
                            // Inactive Icon
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="absolute inset-0 transition-opacity duration-300 opacity-30 group-hover/item:opacity-50"
                              viewBox="0 0 16 16"
                            >
                              <circle cx="8" cy="8" r="7.25" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                              />
                            </svg>
                          )}
                        </div>

                        {/* 连接线 */}
                        {pIndex < detail.points.length - 1 && (
                          <div className="w-[2px] grow bg-gray-100 dark:bg-gray-800 rounded-full relative overflow-hidden min-h-[16px]">
                            {/* 活动进度条 */}
                            <div
                              className={clsx(
                                'absolute top-0 left-0 w-full bg-[#0055ff] rounded-full transition-all duration-500 ease-out',
                                {
                                  'h-full': detail.activePoint === pIndex,
                                  'h-0': detail.activePoint !== pIndex,
                                  'opacity-0': detail.activePoint > pIndex,
                                }
                              )}
                            ></div>
                          </div>
                        )}
                      </div>

                      <div className="grow cursor-default">
                        <div className="relative transition-all duration-300 ease-out">
                          <h3
                            className={clsx(
                              'flex items-center gap-3 font-medium leading-normal p-3 pl-0 transition-colors duration-300 text-base',
                              detail.activePoint === pIndex
                                ? 'text-gray-900 dark:text-white'
                                : 'text-gray-500 dark:text-gray-400'
                            )}
                          >
                            {point.title}
                          </h3>

                          <div
                            className={clsx(
                              'grid transition-[grid-template-rows] duration-300 ease-out',
                              detail.activePoint === pIndex
                                ? 'grid-rows-[1fr]'
                                : 'grid-rows-[0fr]'
                            )}
                          >
                            <div className="overflow-hidden">
                              <div
                                className={clsx(
                                  'text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-0 pb-3 opacity-0 -translate-y-1 transition-all duration-300 delay-75',
                                  {
                                    'opacity-100 translate-y-0':
                                      detail.activePoint === pIndex,
                                  }
                                )}
                              >
                                {point.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 调用操作按钮 */}
                <div className="mt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-2.5 font-medium shadow-md shadow-[#0055ff]/20 bg-[#0055ff] text-white hover:bg-[#0043cc] transition-all"
                  >
                    立即体验
                    <ChevronRightIcon className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="relative h-full">
                <div className="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full">
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 h-full flex items-center justify-center">
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-full object-cover"
                    />
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>

      {/* 产品功能 Marquee */}
      <ProductFeatures />

      {/* 用户评价 */}
      <LandingUserReviews />

     <AIscene />

      {/* 行动号召区域 */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
        {/* 背景图形 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-purple-400/10 rounded-full blur-[80px]"></div>
        </div>

        <Container className="text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            准备好开始创作了吗？
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            立即加入 BuidAI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-10 py-3 rounded-lg text-lg font-medium shadow-lg transition-all bg-[#0055ff] text-white hover:bg-[#0043cc]"
            >
              免费试用
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-lg text-lg font-medium shadow-sm border border-gray-200 dark:border-gray-700 bg-white text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              联系商务
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
