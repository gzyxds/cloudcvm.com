import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import {
  FaceSmileIcon,
  SpeakerWaveIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const advantages: Advantage[] = [
  {
    title: '数字分身训练数据',
    description: '基于深度学习的数字人训练数据集，包含多种表情、动作和语音样本',
    stats: '10万+',
    unit: '训练样本',
    icon: FaceSmileIcon,
  },
  {
    title: '声音复刻训练数据',
    description: '高质量音频数据集，支持多语言、多音色的声音克隆和合成',
    stats: '50万+',
    unit: '音频片段',
    icon: SpeakerWaveIcon,
  },
  {
    title: '数字人整体效果',
    description: '逼真的数字人形象，支持实时表情同步和自然动作生成',
    stats: '99%',
    unit: '相似度',
    icon: SparklesIcon,
  },
  {
    title: '集成接入方式',
    description: '提供完整的API接口和SDK，支持快速集成到各种应用场景',
    stats: '5分钟',
    unit: '快速接入',
    icon: RocketLaunchIcon,
  },
]

// Hero区域组件 - 数字人首页英雄区域

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
        {/* 标题区域 */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-500 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            多维度产品优势，助力企业数字化升级
          </p>
        </div>
        {/* 产品优势卡片网格 */}
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-0 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
              >
                {/* 数据展示区域 */}
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
                {/* 内容区域 */}
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
