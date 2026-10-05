import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'

/** chat 页产品优势区块（2026-10-05 自 page.tsx 拆分） */
function AdvantagesSection(): JSX.Element {
  // 渐变色配置
  const gradientColors = [
    'from-brand-500 to-brand-600',
    'from-brand-500 to-brand-500',
    'from-brand-400 to-brand-500',
    'from-brand-600 to-brand-700',
  ]
  const bulletColors = ['bg-brand-500', 'bg-brand-500', 'bg-brand-400', 'bg-brand-600']

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-neutral-950">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-500 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            艺创AI智能对话绘画解决方案，助力企业提升创作效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {[
            {
              title: 'AI聊天对话',
              description:
                '对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作',
              stats: '秒级',
              unit: 'AI回复',
            },
            {
              title: 'AI智能创作',
              description:
                '根据不同模型进行提问，AI会针对输入的问题进行深度创作，显著提升内容创作能力，满足多样化创作需求',
              stats: '100%',
              unit: '智能化创作',
            },
            {
              title: 'AI绘画创作',
              description:
                '已对接MJ、SD绘图、DALLE-3等众多绘画模型，作图更强大。适用于各类图像创作需求，包括图片创作、风景生成等场景',
              stats: '多模型',
              unit: '绘画支持',
            },
            {
              title: 'AI专业技能',
              description:
                '预设多种专业技能模板，涵盖编程、设计、营销、教育等领域。让AI在特定领域发挥专业水准，精准服务各行业需求',
              stats: '专业领域',
              unit: '精准服务',
            },
          ].map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div
                  className={`bg-gradient-to-br ${gradientColors[index % 4]} relative overflow-hidden p-6 text-white sm:p-8`}
                >
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 bg-white/10 sm:h-24 sm:w-24 sm:translate-x-12 sm:-translate-y-12"></div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-sm font-semibold opacity-90 sm:mb-3 sm:text-lg">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold sm:text-5xl">{advantage.stats}</span>
                      {advantage.unit && (
                        <span className="ml-2 text-lg font-medium sm:text-xl">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="mb-4 text-sm font-semibold text-neutral-900 sm:mb-6 sm:text-base dark:text-white">
                    {advantage.description.split('，')[0]}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.description
                      .split('，')
                      .slice(1)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div
                            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${bulletColors[index % 4]} mt-1.5 mr-2 flex-shrink-0 sm:mt-2 sm:mr-3`}
                          ></div>
                          <span className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-300">
                            {feature.trim()}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default AdvantagesSection
