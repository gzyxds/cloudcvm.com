import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline'
import { PixelBlastBackground } from '@/components/effects/PixelBlastBackground'

interface Feature {
  name: string
  href: string
}

interface Card {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

function HeroSection(): JSX.Element {
  // 产品特性标签配置
  const features: Feature[] = [
    { name: '智能交互', href: '/' },
    { name: '形象定制', href: '/' },
    { name: '声音克隆', href: '/' },
    { name: '形象克隆', href: '/' },
  ]

  // 功能卡片配置 - 数字人核心特性
  const cards: Card[] = [
    {
      icon: CpuChipIcon,
      title: '智能交互',
      description: '自然语言对话，情感识别表达',
    },
    {
      icon: PaintBrushIcon,
      title: '形象定制',
      description: '多样化数字人形象，个性化定制',
    },
    {
      icon: GlobeAltIcon,
      title: '多场景应用',
      description: '客服、教育、直播、营销全覆盖',
    },
    {
      icon: BoltIcon,
      title: '实时渲染',
      description: '高清画质，流畅动作表现',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 dark:from-neutral-950 dark:via-neutral-950 dark:to-brand-900">
      {/* PixelBlast 动态背景效果（客户端小岛，2026-10-05 抽取） */}
      <PixelBlastBackground />
      {/* 背景装饰效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-brand-500/8 opacity-40 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 bg-brand-500/6 opacity-30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>
        <div className="absolute top-6 left-6 opacity-20 sm:top-8 sm:left-8 md:top-10 md:left-10">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/40 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/30 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/40 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区域 */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 */}
              <div className="mb-2 inline-flex items-center rounded-md border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-500 sm:px-4 sm:py-2 sm:text-sm">
                <BoltIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                虚拟数字人
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="mb-1 block text-brand-500 sm:mb-2">数字分身</span>
                <span className="text-xl leading-tight font-semibold text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                  赋能企业智能化转型
                </span>
              </h1>
            </div>
            {/* 描述文本 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 dark:text-neutral-300">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              <p className="mx-auto max-w-xl text-sm text-neutral-500 sm:text-base lg:mx-0 dark:text-neutral-400">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1.5 text-xs font-medium text-neutral-900 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-100 sm:px-3 sm:py-2 sm:text-sm"
                  aria-label={feature.name}
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* 按钮组 - 增强视觉效果和响应式 - 增大按钮尺寸 */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:gap-6 lg:justify-start">
              <Button
                href="/demo"
                variant="solid"
                color="blue"
                className="group w-full rounded-xl px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>立即体验</span>
                <ChatBubbleLeftRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href="#features"
                variant="outline"
                className="group w-full rounded-xl px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>了解更多</span>
                <ChevronRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>

          {/* 右侧展示区域 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-brand-500/10 to-brand-500/10 opacity-50 blur-xl sm:-inset-3 md:-inset-4"></div>
            <div className="group relative rounded-md border border-neutral-200/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8 lg:p-10 dark:border-neutral-700/50 dark:bg-neutral-800/80">
              {/* 顶部标签区域 */}
              <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2 md:mb-10 md:gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="cursor-pointer rounded-md border border-brand-500/20 bg-brand-500/10 px-2 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-500/20 sm:px-3 sm:py-2 sm:text-sm md:px-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {feature.name}
                  </span>
                ))}
              </div>
              {/* 功能卡片网格 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group/card rounded-md border border-neutral-200/50 bg-neutral-50/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg sm:p-4 md:p-5 lg:p-7 dark:border-neutral-600/50 dark:bg-neutral-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 图标区域 */}
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-brand-500/10 transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-brand-500/40 sm:mb-3 sm:h-10 sm:w-10 md:mb-5 md:h-12 md:w-12">
                      <card.icon
                        className="h-4 w-4 text-brand-500 transition-colors group-hover/card:text-brand-500 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    {/* 内容区域 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="text-xs leading-tight font-bold text-neutral-900 sm:text-sm md:text-base lg:text-lg dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// 产品优势展示组件

export default HeroSection
