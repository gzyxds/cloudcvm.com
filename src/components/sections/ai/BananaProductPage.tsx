'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  ArrowRightIcon,
  ChevronRightIcon,
  SparklesIcon,
  // 所有产品可能用到的图标
  DocumentTextIcon,
  PhotoIcon,
  UserIcon,
  PencilIcon,
  CubeIcon,
  UserGroupIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  FilmIcon,
  ArrowDownTrayIcon,
  LightBulbIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CommandLineIcon,
  CurrencyDollarIcon,
  EyeIcon,
  FaceSmileIcon,
  GlobeAltIcon,
  HashtagIcon,
  PaintBrushIcon,
  QueueListIcon,
  RectangleStackIcon,
  SquaresPlusIcon,
  AdjustmentsHorizontalIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { AiScene } from '@/components/sections/ai/AiScene'

// ==================== Icon Map ====================
const ICON_MAP: Record<string, React.ElementType> = {
  DocumentText: DocumentTextIcon,
  Photo: PhotoIcon,
  Sparkles: SparklesIcon,
  User: UserIcon,
  Pencil: PencilIcon,
  Cube: CubeIcon,
  UserGroup: UserGroupIcon,
  ArrowsRightLeft: ArrowsRightLeftIcon,
  ClipboardDocumentList: ClipboardDocumentListIcon,
  Cog6Tooth: Cog6ToothIcon,
  Film: FilmIcon,
  ArrowDownTray: ArrowDownTrayIcon,
  LightBulb: LightBulbIcon,
  Microphone: MicrophoneIcon,
  MusicalNote: MusicalNoteIcon,
  SpeakerWave: SpeakerWaveIcon,
  ShieldCheck: ShieldCheckIcon,
  Bolt: BoltIcon,
  ChatBubbleLeft: ChatBubbleLeftIcon,
  ChatBubbleLeftRight: ChatBubbleLeftRightIcon,
  Clock: ClockIcon,
  CommandLine: CommandLineIcon,
  CurrencyDollar: CurrencyDollarIcon,
  Eye: EyeIcon,
  FaceSmile: FaceSmileIcon,
  GlobeAlt: GlobeAltIcon,
  Hashtag: HashtagIcon,
  PaintBrush: PaintBrushIcon,
  QueueList: QueueListIcon,
  RectangleStack: RectangleStackIcon,
  SquaresPlus: SquaresPlusIcon,
  AdjustmentsHorizontal: AdjustmentsHorizontalIcon,
  BuildingOffice2: BuildingOffice2Icon,
}

function resolveIcon(name: string): React.ElementType {
  return ICON_MAP[name] || SparklesIcon
}

// ==================== Types ====================

export interface FeatureItem {
  title: string
  desc: string
  /** 图标名称，对应 ICON_MAP 中的 key */
  icon: string
}

export interface FeaturePoint {
  title: string
  desc: string
}

export interface FeatureDetail {
  title: string
  desc: string
  activePoint: number
  points: FeaturePoint[]
  image: string
}

export interface Review {
  content: string
  author: string
  role: string
}

export interface BananaProductPageProps {
  /** NEW 标签文本 */
  badgeText: string
  /** Hero 标题 JSX（支持高亮 span） */
  heroTitle: React.ReactNode
  /** Hero 描述 JSX */
  heroDesc: React.ReactNode
  /** Hero 展示图片路径 */
  heroImage: string
  /** 功能网格区域标题 */
  featuresTitle: string
  /** 功能网格区域描述 */
  featuresDesc: string
  /** 功能网格卡片列表（6 项） */
  features: FeatureItem[]
  /** 功能详情板块列表（通常 3 项） */
  featureDetails: FeatureDetail[]
  /** 用户评价列表 */
  reviews?: Review[]
  /** CTA 区域标题 */
  ctaTitle: string
  /** CTA 区域描述 */
  ctaDesc: string
}

// ==================== Sub-components ====================

const defaultReviews: Review[] = [
  {
    content: '生成的图片质量非常高，完全超出了我的预期。特别是多图融合功能，非常智能。',
    author: '张设计师',
    role: 'UI 设计总监',
  },
  {
    content: '后台管理功能很强大，可以灵活配置模板，非常适合企业内部使用。',
    author: '李产品',
    role: '产品经理',
  },
  {
    content: 'API 接口文档清晰，集成速度很快，技术支持也很给力。',
    author: '王开发',
    role: '技术负责人',
  },
]

/** 受信赖的技术展示条 */
function ProductFeatures() {
  return (
    <div className="border-y border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold tracking-wide text-slate-500 uppercase">
          受信赖的 AI 图像生成技术
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-400">
            <SparklesIcon className="h-6 w-6" /> Gemini
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-400">
            <SparklesIcon className="h-6 w-6" /> Stable Diffusion
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-400">
            <SparklesIcon className="h-6 w-6" /> Midjourney
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-400">
            <SparklesIcon className="h-6 w-6" /> DALL·E 3
          </div>
        </div>
      </Container>
    </div>
  )
}

/** 用户评价区域 */
function LandingUserReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="bg-white py-24 dark:bg-slate-900">
      <Container>
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-900 dark:text-white">
          用户评价
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-md border border-slate-200 bg-slate-50 p-8 transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-slate-600 dark:text-slate-300">
                &ldquo;{review.content}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">{review.author}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// ==================== Main Component ====================

export default function BananaProductPage({
  badgeText,
  heroTitle,
  heroDesc,
  heroImage,
  featuresTitle,
  featuresDesc,
  features,
  featureDetails: initialDetails,
  reviews = defaultReviews,
  ctaTitle,
  ctaDesc,
}: BananaProductPageProps) {
  const [featureDetails, setFeatureDetails] = useState<FeatureDetail[]>(initialDetails)
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
    <div className="relative overflow-x-hidden font-sans text-slate-900 dark:bg-slate-900 dark:text-white">
      {/* ===== Hero Section ===== */}
      <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible select-none">
          <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#0055ff]/20 mix-blend-multiply blur-[80px] dark:bg-[#0055ff]/10 dark:mix-blend-normal" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[length:24px_24px]" />
          <div className="absolute top-20 right-10 hidden h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-blue-400/30 to-transparent blur-2xl md:block" />
          <div className="absolute bottom-40 left-10 hidden h-24 w-24 animate-bounce rounded-full bg-gradient-to-tr from-purple-400/30 to-transparent blur-xl md:block" />
        </div>

        <Container className="relative z-10 text-center">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800">
              <span className="rounded bg-[#0055ff] px-1.5 py-0.5 text-[11px] font-bold tracking-wider text-white">
                NEW
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300">{badgeText}</span>
            </div>

            <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              {heroTitle}
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              {heroDesc}
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="#"
                className="group inline-flex items-center justify-center rounded-lg bg-[#0055ff] px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-[#0055ff]/20 transition-all hover:bg-[#0043cc]"
              >
                开始构建
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={toDemo}
                className="group inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-base font-medium text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                查看案例
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* ===== Demo Image ===== */}
      <div ref={demoContainerRef} id="__demo_container__" className="py-12 md:py-20">
        <Container>
          <div className="relative mx-auto max-w-5xl rounded-md border border-slate-200/50 bg-slate-100/40 p-2 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md border border-slate-200/50 bg-white/60 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/60">
              {/* 首屏 Hero 图：12 个 AI 方案页共用，加 priority 消除 LCP 警告并提前加载 */}
              <Image
                src={heroImage}
                alt="产品展示"
                width={1280}
                height={720}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ===== Features Grid ===== */}
      <div className="bg-slate-50 py-16 md:py-24 dark:bg-slate-800/50">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {featuresTitle}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">{featuresDesc}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const FeatureIcon = resolveIcon(feature.icon)
              return (
                <div
                  key={feature.title}
                  className="group rounded-md border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </div>

      {/* ===== Feature Details ===== */}
      <Container className="flex flex-col gap-16 py-12 md:gap-24 md:py-16">
        {featureDetails.map((detail, index) => (
          <div key={index} className="group">
            <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
              <div className={clsx('flex flex-col gap-4', { 'lg:order-last': index % 2 === 1 })}>
                <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-medium text-[#0055ff]">
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

                <h2 className="mb-3 text-2xl leading-tight font-semibold text-slate-900 md:text-3xl dark:text-white">
                  {detail.title}
                </h2>

                <div className="flex flex-col gap-1">
                  {detail.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="group/item flex w-full cursor-pointer gap-3 rounded-xl pr-3 transition-all duration-300"
                      style={{
                        background:
                          detail.activePoint === pIndex
                            ? 'linear-gradient(to right, color-mix(in srgb, #0055ff, transparent 90%), transparent)'
                            : 'transparent',
                      }}
                      onMouseEnter={() => handlePointHover(index, pIndex)}
                    >
                      <div className="flex flex-col items-center gap-[2px] py-3 pl-3">
                        <div className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-[#0055ff]">
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
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover/item:opacity-50"
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
                        {pIndex < detail.points.length - 1 && (
                          <div className="relative min-h-[16px] w-[2px] grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                              className={clsx(
                                'absolute top-0 left-0 w-full rounded-full bg-[#0055ff] transition-all duration-500 ease-out',
                                {
                                  'h-full': detail.activePoint === pIndex,
                                  'h-0': detail.activePoint !== pIndex,
                                  'opacity-0': detail.activePoint > pIndex,
                                }
                              )}
                            />
                          </div>
                        )}
                      </div>
                      <div className="grow cursor-default">
                        <div className="relative transition-all duration-300 ease-out">
                          <h3
                            className={clsx(
                              'flex items-center gap-3 p-3 pl-0 text-base leading-normal font-medium transition-colors duration-300',
                              detail.activePoint === pIndex
                                ? 'text-slate-900 dark:text-white'
                                : 'text-slate-500 dark:text-slate-400'
                            )}
                          >
                            {point.title}
                          </h3>
                          <div
                            className={clsx(
                              'grid transition-[grid-template-rows] duration-300 ease-out',
                              detail.activePoint === pIndex ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            )}
                          >
                            <div className="overflow-hidden">
                              <div
                                className={clsx(
                                  '-translate-y-1 pt-0 pb-3 text-sm leading-relaxed text-slate-500 opacity-0 transition-all delay-75 duration-300 dark:text-slate-400',
                                  { 'translate-y-0 opacity-100': detail.activePoint === pIndex }
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

                <div className="mt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-[#0055ff] px-6 py-2.5 font-medium text-white shadow-md shadow-[#0055ff]/20 transition-all hover:bg-[#0043cc]"
                  >
                    立即体验
                    <ChevronRightIcon className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="relative h-full">
                <div className="relative h-full rounded-md border border-slate-200/50 bg-slate-100/40 p-2 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/40">
                  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-md border border-slate-200/50 bg-white/60 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/60">
                    <Image
                      src={detail.image}
                      alt={detail.title}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>

      {/* ===== Trusted Tech ===== */}
      <ProductFeatures />

      {/* ===== Reviews ===== */}
      <LandingUserReviews reviews={reviews} />

      {/* ===== AiScene ===== */}
      <AiScene />

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-800/30">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] h-[30%] w-[30%] rounded-full bg-blue-400/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-5%] h-[30%] w-[30%] rounded-full bg-purple-400/10 blur-[80px]" />
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            {ctaTitle}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            {ctaDesc}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-[#0055ff] px-10 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-[#0043cc]"
            >
              免费试用
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-10 py-3 text-lg font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              联系商务
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
