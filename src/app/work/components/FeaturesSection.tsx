import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  FaceSmileIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

/** 功能特色卡片数据与展示区块（2026-10-05 自 page.tsx 拆分） */
interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '机器人管理',
    description:
      '创建机器人，可单独创建和设置私有机器人。发布机器人，支持发布多种渠道，如网页、JS嵌入、API接口、微信公众号等等。',
    features: ['支持私有机器人独立配置', '多渠道发布：网页、JS嵌入、API、公众号等'],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: '知识库数据训练',
    description:
      '通过数据训练，用户在前台通过聊天对话模式快速查阅各种内部资料和文档。使用机器学习技术，让系统自动学习并优化知识库中的知识，提高知识库的准确性和智能性。',
    features: ['对话式查阅企业内部资料', '机器学习自动优化知识库'],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: 'AI数字人演示',
    description:
      '结合语音合成、语音识别、语义理解、图像处理、机器翻译、虚拟形象驱动等多项AI核心技术，实现信息播报、互动交流、业务咨询、服务导览等多项功能，满足新闻、政企、文旅、金融等多场景需求。',
    features: ['多模态AI能力融合', '适配多行业多场景应用'],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: 'AI大语言模型',
    description:
      '支持GPT3.5、GPT4.0、api2d3.5、api2d4.0、ChatGLM（清华）等大语言模型，满足多样化智能对话和内容生成需求。',
    features: ['多模型灵活接入', '支持主流国产与国际大模型'],
    icon: CpuChipIcon,
  },
]
function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            核心功能特色
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600">
            全面的AI解决方案，为您的业务提供强大的智能化支持
          </p>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-x-8">
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className="overflow-hidden border border-neutral-200 outline-1 outline-neutral-200 transition-all duration-200 hover:border-neutral-300 hover:outline-neutral-300"
              >
                <div className="flex items-center gap-x-4 border-b border-neutral-900/5 bg-neutral-50 p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white ring-1 ring-neutral-900/10">
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
            className="bg-brand-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-brand-600"
          >
            探索更多功能
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection
