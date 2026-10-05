import type { JSX } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AiScene } from '@/components/sections/ai/AiScene'
import HeroSection from './components/HeroSection'
import AdvantagesSection from './components/AdvantagesSection'
import DemoSection from './components/DemoSection'
import ScenariosSection from './components/ScenariosSection'
import CoreFeaturesSection from './components/CoreFeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import CtaSection from './components/CtaSection'

/**
 * 艺创AI 数字人系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：原 1639 行整页客户端组件拆分为本编排层 +
 * `components/` 7 个区块组件。客户端边界收敛为两处小岛：
 * ScenariosSection（场景切换 state）与 PixelBlastBackground（WebGL 特效，
 * three.js 仍经 next/dynamic 按需加载），其余全部构建期直出。
 * 区块顺序与视觉不变。
 */
export default function DigitalHumanPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">
        <HeroSection />
        <AdvantagesSection />
        <DemoSection />
        <ScenariosSection />
        <CoreFeaturesSection />
        <AiScene />
        <WorkflowSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
