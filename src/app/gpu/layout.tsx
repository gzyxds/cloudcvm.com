import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== GPU 云服务器页面 SEO 元数据配置 ====================
export const metadata: Metadata = {
  title: 'GPU云服务器_并行计算_弹性计算_人工智能_深度学习',
  description:
    'GPU 云服务器是提供 GPU 算力的弹性计算服务，具有超强的并行计算能力，作为 IaaS 层的尖兵利器，服务于深度学习训练推理、科学计算、图形图像处理、视频编解码、云游戏等场景，提供多种 NVIDIA GPU 实例规格选择。',
  keywords: [
    'GPU云服务器',
    'GPU服务器',
    '人工智能',
    '深度学习训练',
    '科学计算',
    '图形图像处理',
    '视频编解码',
    '云游戏',
    '并行计算',
    '异构计算',
    '云计算',
    'NVIDIA GPU',
    '推理加速',
    'AI 训练',
    '大模型',
  ],
  openGraph: {
    title: 'GPU云服务器_并行计算_弹性计算_人工智能_深度学习',
    description:
      'GPU 云服务器是提供 GPU 算力的弹性计算服务，具有超强的并行计算能力，服务于深度学习训练、科学计算、图形图像处理、视频编解码等场景。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPU云服务器_并行计算_弹性计算_人工智能_深度学习',
    description:
      'GPU 云服务器是提供 GPU 算力的弹性计算服务，具有超强的并行计算能力，服务于深度学习训练、科学计算、图形图像处理、视频编解码等场景。',
  },
}

/**
 * GPU 云服务器页面布局组件
 * 提供统一的导航栏、页脚和 SEO 配置
 * @param children - 子组件内容
 */
export default function GPUInstanceLayout({
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
