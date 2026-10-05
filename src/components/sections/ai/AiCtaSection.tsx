import type { JSX, ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export interface AiCtaCheckItem {
  title: string
  desc: string
}

export interface AiCtaFeatureCard {
  title: string
  /** 移动端短描述 */
  mobileDesc: string
  /** 桌面端长描述 */
  desktopDesc: string
  /** 图标 SVG path d */
  pathD: string
}

/**
 * 底部品牌 CTA 区块（work / paper / chat / human 四页共用，同模板）。
 *
 * 2026-10-05 自四页同模板内联实现收敛：标题/描述/左列要点/右侧四卡与
 * 按钮链接经 props 传入；视觉漂移（human 的圆角阴影卡片）经卡片
 * className props 保持原样。按钮不再开放 className 逃生舱口——
 * 2026-10-05 按钮档位统一后，主按钮 solid+blue+lg、次按钮 outline+blue+lg
 * 由组件内单一配方承载（原 work 缺 shadow-lg 与 chat/paper/human 不一致，已归并）。
 */
export function AiCtaSection({
  title,
  description,
  checkItems,
  featureCards,
  primaryHref,
  secondaryHref,
  mobileCardClassName = 'flex flex-col items-center justify-center border border-neutral-200 bg-neutral-50 p-4',
  desktopCardClassName = 'flex flex-col items-center justify-center border border-neutral-200 bg-white p-3',
}: {
  title: ReactNode
  description: ReactNode
  /** 左列 4 个对勾要点 */
  checkItems: AiCtaCheckItem[]
  /** 右侧 4 张功能卡（移动端/桌面端各渲染一次） */
  featureCards: AiCtaFeatureCard[]
  /** 主按钮链接（human 页按钮无 href 属存量死链，保持原状） */
  primaryHref?: string
  secondaryHref?: string
  mobileCardClassName?: string
  desktopCardClassName?: string
}): JSX.Element {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[1800px] px-1 sm:px-2 lg:px-4">
          <div className="relative overflow-hidden border border-neutral-200 bg-white">
            {/* 装饰元素 - 仅在大屏显示 */}
            <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
              <svg
                className="h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
              </svg>
            </div>

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
              {/* 左侧内容 */}
              <div className="relative z-10 p-6 sm:p-8 lg:col-span-3 lg:p-12">
                <div className="max-w-xl">
                  <h3 className="mb-4 text-xl leading-tight font-bold text-neutral-900 sm:text-2xl lg:text-3xl">
                    {title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {description}
                  </p>

                  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {checkItems.map((item) => (
                      <div key={item.title} className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-brand-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-neutral-900 sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-500 sm:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {primaryHref ? (
                      <Button
                        href={primaryHref}
                        variant="solid"
                        color="blue"
                        size="lg"
                        className="w-full shadow-lg sm:w-auto"
                      >
                        立即体验
                      </Button>
                    ) : (
                      <Button
                        variant="solid"
                        color="blue"
                        size="lg"
                        className="w-full shadow-lg sm:w-auto"
                      >
                        立即体验
                      </Button>
                    )}
                    {secondaryHref ? (
                      <Button
                        href={secondaryHref}
                        target="_blank"
                        variant="outline"
                        color="blue"
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        咨询价格
                      </Button>
                    ) : (
                      <Button variant="outline" color="blue" size="lg" className="w-full sm:w-auto">
                        咨询价格
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* 右侧功能卡片 - 在移动端显示在下方 */}
              <div className="relative lg:col-span-2">
                {/* 移动端显示 */}
                <div className="p-6 lg:hidden">
                  <div className="grid grid-cols-2 gap-3">
                    {featureCards.map((card) => (
                      <div key={card.title} className={mobileCardClassName}>
                        <div className="mb-2 flex h-8 w-8 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={card.pathD}
                            />
                          </svg>
                        </div>
                        <h4 className="text-center text-sm font-medium text-neutral-900">
                          {card.title}
                        </h4>
                        <p className="mt-1 text-center text-xs text-neutral-500">
                          {card.mobileDesc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 桌面端显示 */}
                <div className="absolute inset-0 hidden lg:block">
                  <div className="flex h-full w-full items-center p-6">
                    <div className="h-full w-full border border-neutral-200 bg-neutral-50 p-4">
                      <div className="grid h-full grid-cols-2 gap-4">
                        {featureCards.map((card) => (
                          <div key={card.title} className={desktopCardClassName}>
                            <div className="mb-2 flex h-10 w-10 items-center justify-center bg-brand-50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-brand-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={card.pathD}
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-medium text-neutral-900">{card.title}</h4>
                            <p className="mt-1 text-center text-sm text-neutral-500">
                              {card.desktopDesc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AiCtaSection
