import type { ComponentType, JSX, SVGProps } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export interface AiFeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

/**
 * 「功能特色」区块（work / paper / chat 共用）。
 *
 * 2026-10-05 自三页同模板内联实现收敛：标题/描述与卡片数据经 props 传入；
 * 卡片圆角差异（rounded-xl / rounded-md）经 `roundedClass` 传入保持原视觉。
 */
export function AiFeaturesSection({
  cards,
  roundedClass = 'rounded-md',
  title = '功能特色',
  description = '提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。',
}: {
  cards: AiFeatureCard[]
  roundedClass?: 'rounded-xl' | 'rounded-md'
  title?: string
  description?: string
}): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600">{description}</p>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-x-8">
          {cards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className={`overflow-hidden ${roundedClass} outline-1 outline-neutral-200 transition-all duration-200 hover:shadow-lg hover:outline-neutral-300`}
              >
                <div className="flex items-center gap-x-4 border-b border-neutral-900/5 bg-neutral-50 p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-neutral-900/10">
                    <IconComponent className="h-6 w-6 text-brand-500" aria-hidden="true" />
                  </div>
                  <div className="text-sm leading-6 font-medium text-neutral-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4">
                  <p className="mb-4 text-sm leading-6 text-neutral-700">{feature.description}</p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                        <span className="text-sm leading-5 text-neutral-600">{featureItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-600">
                      立即体验
                    </button>
                    <button className="flex-1 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:border-neutral-400 hover:text-neutral-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 text-center">
          <Button
            href="#"
            className="rounded-xl bg-brand-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-brand-600"
          >
            探索更多功能
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default AiFeaturesSection
