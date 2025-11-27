import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/ai/FAQSection'
// 导入艺创AI企业解决方案组件 - 展示企业AI解决方案服务
import Aisd from '@/components/ai/Aisd'
// 导入热门产品组件 - 展示不同场景的产品解决方案
import HotProducts from '@/components/ai/HotProducts'
// 导入产品展示组件 - 展示艺创AI核心产品系列
import { ProductsSection } from '@/components/ai/ProductsSection'
// 导入应用场景组件 - 展示AI在不同行业的应用场景
import { AIscene } from '@/components/ai/AIscene'
// 导入AI产品展示组件 - 展示AI相关产品和解决方案
import { AIProductsSection } from '@/components/ai/AIProductsSection'
// 导入产品终端展示组件 - 展示多端支持和全平台覆盖
import { ProductTerminalsSection } from '@/components/ai/ProductTerminalsSection'
// 导入产品功能特色组件 - 展示AI产品的核心功能特色
import { ProductFeaturesSection } from '@/components/ai/ProductFeaturesSection'
// 导入AI轮播组件 - 展示AI产品特色和优势
import Carousel from '@/components/ai/Aicarousel'

/**
 * 页面元数据
 */
export const metadata = {
  title: '艺创AI_AI系统程序源码_AI数字人SaaS系统_AI企业知识库_企业级AI平台系统',
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
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
        {/* AI轮播展示区域 - 展示AI产品特色和优势 */}
        <Carousel />
        {/* 艺创AI企业解决方案区块 - 展示企业AI解决方案和核心服务 */}
        <Aisd />
        <HotProducts />
        {/* 产品展示区域 - 展示艺创AI核心产品系列 */}
        <ProductsSection />
        {/* 应用场景区域 - 展示AI在不同行业的应用场景 */}
        <AIscene />
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
