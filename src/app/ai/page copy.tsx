import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
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

/**
 * 页面元数据
 */
export const metadata = {
  title: '艺创AI_AI系统程序源码_AI数字人SaaS系统_AI企业知识库_企业级AI平台系统',
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
}

/**
 * 特性项接口定义
 */
interface FeatureItem {
  name: string
  href: string
}

/**
 * 功能卡片接口定义
 */
interface CardItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

/**
 * Hero区域组件 - 艺创AI首页英雄区域
 * 采用简洁的模拟面设计风格，以蓝色调为主，统一视觉效果
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计、暗黑模式兼容
 *
 * 功能包括：
 * 1. 展示网站的主要标题和简介
 * 2. 提供产品特性标签
 * 3. 提供行动按钮（联系客服、查看演示）
 * 极简视觉效果
 * 4. 展示产品功能卡片
 * 5. 响应式设计，适配不同屏幕尺寸
 * 6. 支持暗黑模式
 *
 * @returns {JSX.Element} Hero区域组件
 */
function HeroSection() {
  // 产品特性标签数据
  const features: FeatureItem[] = [
    { name: '数字人', href: '/human' },
    { name: '知识库', href: '/ai' },
    { name: '智能绘画', href: '/chat' },
    { name: '论文创作', href: '/paper' },
    { name: 'PHP&Java', href: '/' },

  ]

  // 功能卡片数据
  const cards: CardItem[] = [
    {
      icon: CpuChipIcon,
      title: '双语言版本',
      description: 'PHP/Java双版本支持',
    },
    {
      icon: CloudIcon,
      title: '私有部署',
      description: '安全可控的私有化部署',
    },
    {
      icon: UserGroupIcon,
      title: '专业团队',
      description: '一对一技术支持',
    },
    {
      icon: ShieldCheckIcon,
      title: '开源方案',
      description: '灵活定制，售后无忧',
    },
  ]

  {
    /* Hero */
  }
  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 xl:pt-48 xl:pb-40">
      {/* SVG网格背景图案 - 参考test.tsx的完整实现 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* AI背景装饰 - 简化版 */}
      <div className="absolute inset-0">
        {/* 简化的光晕效果 - 响应式调整 */}
        <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-[#0055ff]/8 opacity-40 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 bg-[#0055ff]/6 opacity-30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>

        {/* 简化的装饰点 - 响应式调整 */}
        <div className="absolute top-6 left-6 opacity-20 sm:top-8 sm:left-8 md:top-10 md:left-10">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/30 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区 - 优化排版和间距 */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            {/* 主标题区域 - 增强视觉层次 */}
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 - 响应式优化 */}
              <div className="mb-2 inline-flex items-center rounded-md border border-[#0055ff]/20 bg-[#0055ff]/10 px-3 py-1.5 text-xs font-medium text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm">
                <BoltIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                新一代AI解决方案
              </div>

              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="mb-1 block bg-gradient-to-r from-[#0055ff] to-[#0066ff] bg-clip-text text-[#0055ff] sm:mb-2">
                  艺创AI
                </span>
                <span className="text-xl leading-tight font-semibold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                  赋能企业智能化转型
                </span>
              </h1>
            </div>

            {/* 描述文本 - 优化可读性和响应式 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-700 sm:text-xl lg:mx-0 dark:text-gray-200">
                一站式渐进式AIGC系统
              </p>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
                提供面向个人用户(ToC)、开发者(ToD)和企业(ToB)的全面AI解决方案
              </p>
              <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base lg:mx-0 dark:text-gray-400">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 - 简洁简约设计 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature, index) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 sm:px-4 sm:py-2 sm:text-base"
                  aria-label={feature.name}
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* 按钮组 - 增强视觉效果和响应式 - 增大按钮尺寸 */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:gap-6 lg:justify-start">
              <Button
                href="/demo"
                variant="solid"
                color="blue"
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>立即体验</span>
                <ChatBubbleLeftRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href="#features"
                variant="outline"
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>了解更多</span>
                <ChevronRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>

          {/* 右侧展示区 - 优化设计和交互 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            {/* 背景装饰 - 响应式调整 */}
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 opacity-50 blur-xl sm:-inset-3 md:-inset-4"></div>

            <div className="group relative rounded-xl border border-gray-200/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8 lg:p-10 dark:border-gray-700/50 dark:bg-gray-800/80">
              {/* 顶部标签区 - 简洁简约设计 */}
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-6 sm:gap-3 md:mb-8 lg:mb-10">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 sm:px-4 sm:py-2 sm:text-base"
                  >
                    {feature.name}
                  </span>
                ))}
              </div>

              {/* 功能卡片网格 - 优化布局和动画 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group/card rounded-lg border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 hover:shadow-lg sm:p-4 md:p-5 lg:p-7 dark:border-gray-600/50 dark:bg-gray-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 图标区域 - 增强视觉效果 */}
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-[#0055ff]/20 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 sm:mb-3 sm:h-10 sm:w-10 md:mb-5 md:h-12 md:w-12">
                      <card.icon
                        className="h-4 w-4 text-[#0055ff] transition-colors group-hover/card:text-[#0066ff] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        aria-hidden="true"
                      />
                    </div>

                    {/* 内容区域 - 优化排版 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="text-xs leading-tight font-bold text-gray-900 sm:text-sm md:text-base lg:text-lg dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
{
  /* Hero */
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
        <HeroSection />
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
