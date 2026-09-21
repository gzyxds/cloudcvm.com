import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FAQSection } from '@/components/sections/ai/FAQSection'
// 导入艺创AI企业解决方案组件 - 展示企业AI解决方案服务
import AiSolutionSection from '@/components/sections/ai/AiSolutionSection'
// 导入热门产品组件 - 展示不同场景的产品解决方案
import HotProducts from '@/components/sections/ai/HotProducts'
// 导入产品展示组件 - 展示艺创AI核心产品系列
import { ProductsSection } from '@/components/sections/ai/ProductsSection'
// 导入应用场景组件 - 展示AI在不同行业的应用场景
import { AiScene } from '@/components/sections/ai/AiScene'
// 导入AI产品展示组件 - 展示AI相关产品和解决方案
import { AIProductsSection } from '@/components/sections/ai/AIProductsSection'
// 导入产品终端展示组件 - 展示多端支持和全平台覆盖
import { ProductTerminalsSection } from '@/components/sections/ai/ProductTerminalsSection'
// 导入产品功能特色组件 - 展示AI产品的核心功能特色
import { ProductFeaturesSection } from '@/components/sections/ai/ProductFeaturesSection'
// 导入 AI 页面首屏区块 - 打字机 + 图片跑马灯
import AiHeroSection from '@/components/sections/ai/AiHeroSection'

/**
 * 页面元数据
 */
export const metadata = {
  title: { absolute: '艺创AI_AI系统程序源码_AI数字人SaaS系统_AI企业知识库_企业级AI平台系统' },
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: [
    '艺创AI',
    'AI系统源码',
    'AI数字人',
    'AI绘画',
    'AI聊天',
    'AI论文写作',
    'SaaS系统',
    '私有化部署',
  ],
}

/**
 * AIGC页面主组件
 * 展示艺创AI企业解决方案的完整功能和特性
 * @returns JSX.Element
 */
export default function AIGCPage() {
  return (
    <>
      <Header />
      <main>
        {/* AI 首屏区块 - 展示AI产品特色和优势 */}
        <AiHeroSection />
        {/* 艺创AI企业解决方案区块 - 展示企业AI解决方案和核心服务 */}
        <AiSolutionSection />
        <HotProducts />
        {/* 产品展示区域 - 展示艺创AI核心产品系列 */}
        <ProductsSection />
        {/* 应用场景区域 - 展示AI在不同行业的应用场景 */}
        <AiScene />
        <AIProductsSection />
        <ProductTerminalsSection />
        <ProductFeaturesSection />
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
