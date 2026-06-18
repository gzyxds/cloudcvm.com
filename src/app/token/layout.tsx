import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== TokenHub AI 大模型网关页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: 'AI大模型网关，API接口，大模型服务平台',
  description:
    'TokenHub致力于为企业和开发者提供统一的大模型服务入口，整合大模型能力，并引入优质第三方模型，覆盖通用对话、深度推理、代码生成、视觉理解、图像生成、视频生成等多类场景。平台支持按量调用、保障型资源、专属部署等多种服务模式，帮助企业简单、高效地获取 AI 算力。',
  keywords: [
    'TokenHub',
    'Token',
    '大模型',
    '优刻云TokenHub',
    'AI大模型网关',
    '大模型服务平台',
    'API接口',
    '通用对话',
    '深度推理',
    '代码生成',
    '视觉理解',
    '图像生成',
    '视频生成',
  ],
  openGraph: {
    title: 'AI大模型网关，API接口，大模型服务平台',
    description:
      'TokenHub致力于为企业和开发者提供统一的大模型服务入口，整合大模型能力并引入优质第三方模型，覆盖对话、推理、代码、视觉、图像、视频等多类场景。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI大模型网关，API接口，大模型服务平台',
    description:
      'TokenHub致力于为企业和开发者提供统一的大模型服务入口，覆盖通用对话、深度推理、代码生成、视觉理解等多类场景。',
  },
}

/**
 * TokenHub AI 大模型网关页面布局组件
 * @param children - 子组件内容
 */
export default function TokenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
