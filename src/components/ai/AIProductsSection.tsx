import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import Link from 'next/link'

/**
 * AI产品数据接口
 */
interface AIProduct {
  name: string
  description: string
  icon: React.ElementType
  features: string[]
  href: string
}

/**
 * AI产品数据
 */
const aiProducts: AIProduct[] = [
  {
    name: 'AI智聊系统开发',
    description:
      '快速搭建AI智能聊天系统，包含：公众号端，小程序端，PC端，APP端',
    icon: ChatBubbleLeftRightIcon,
    features: ['多端支持', '智能对话', '快速部署'],
    href: '/ai',
  },
  {
    name: 'AI绘画系统开发',
    description: '快速搭建AI绘画软件，包含：公众号端，小程序端，抖音小程序端',
    icon: PaintBrushIcon,
    features: ['创意生成', '多平台发布', '高质量输出'],
    href: '/banana',
  },
  {
    name: '接入AI接口',
    description: '为企业办公工具接入AI接口,包含：企业微信，钉钉，飞书',
    icon: CpuChipIcon,
    features: ['无缝集成', '企业级安全', '高效协作'],
    href: '/token',
  },
  {
    name: '训练大语言模型',
    description: '打造专属企业知识库的AI模型,包含：客服，数字人直播，AI女友',
    icon: CloudIcon,
    features: ['定制化训练', '专业知识库', '多场景应用'],
    href: '/ai',
  },
]

/**
 * AI产品展示组件
 * 展示AI相关产品和解决方案，包括AI智聊系统、AI绘画系统等
 */
export function AIProductsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
            AI 解决方案
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            AI智能聊天 · AI绘画 · 大模型知识库训练
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            艺创AI企业解决方案，快速搭建，多端支持，助力企业智能化转型
          </p>
        </div>

        {/* 产品卡片网格 */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          {aiProducts.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-brand-200 hover:shadow-md"
            >
              {/* 卡片头部：图标 + 名称 */}
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <product.icon aria-hidden="true" className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                {/* 悬停箭头 */}
                <ArrowRightIcon className="mt-1 size-5 shrink-0 text-gray-300 transition-all duration-200 group-hover:text-brand-500 group-hover:translate-x-0.5" />
              </div>

              {/* 特性标签 */}
              {product.features.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:ring-brand-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
