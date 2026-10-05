import type { JSX } from 'react'
import { type Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FAQSection } from '@/components/sections/ai/FAQSection'
import AiSolutionSection from '@/components/sections/ai/AiSolutionSection'
import { AiScene } from '@/components/sections/ai/AiScene'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AdvantagesSection from './components/AdvantagesSection'
import DemoSection from './components/DemoSection'
import CoreFeaturesSection from './components/CoreFeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import CtaSection from './components/CtaSection'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: { absolute: '艺创AI_全能AI知识库系统_数字人解决方案_企业级AI平台' },
  description:
    '艺创AI全能AI知识库系统是一款基于PHP和Java双语言开发的AI知识库系统,支持私有化部署,提供知识库训练、智能问答、数字人等多种功能,是企业打造数字化转型的理想选择',
  keywords: [
    '全能AI知识库系统',
    'AI数字人系统',
    '企业AI解决方案',
    '智能知识库',
    '数字人克隆',
    'AI系统源码',
  ],
}

/**
 * 艺创AI 企业知识库页面（Server Component）
 *
 * 2026-10-05 巨型页治理：原 1685 行单文件拆分为本编排层 +
 * `components/` 下 7 个区块组件（Hero/Features/Advantages/Demo/
 * CoreFeatures/Workflow/Cta），全部为纯展示 Server Component，
 * 结构不变、区块顺序不变。
 */
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-4 sm:pt-0">
        <HeroSection />
        <AiSolutionSection />
        <AdvantagesSection />
        <DemoSection />
        <CoreFeaturesSection />
        <AiScene />
        <FeaturesSection />
        <WorkflowSection />
        <CtaSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
