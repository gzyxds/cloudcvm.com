'use client'

import { Container } from '@/components/Container'
import {
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  CommandLineIcon,
  BeakerIcon,
  BookOpenIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * 功能特性数据接口定义
 */
interface FeatureItem {
  name: string
  description: string
  icon: any
}

/**
 * 右侧卡片的功能列表数据
 */
const apiFeatures: FeatureItem[] = [
  {
    name: '智能广场',
    description: '多种模态模型体验，开箱即用',
    icon: Squares2X2Icon,
  },
  {
    name: '模型推理',
    description: '支持在线和批量推理，灵活适配',
    icon: CpuChipIcon,
  },
  {
    name: '模型定制',
    description: '支持模型精调、模型评测',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'PromptPilot',
    description: '轻松打造精准prompt，高效优化',
    icon: CommandLineIcon,
  },
  {
    name: '应用实验室',
    description: '多种开发方式，搭建企业级应用',
    icon: BeakerIcon,
  },
  {
    name: '知识库',
    description: '企业级全模态知识问答 RAG 服务',
    icon: BookOpenIcon,
  },
]

/**
 * 极速体验必定AI-BuidAI组件
 */
export function Rightleft() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-12 sm:py-16 lg:py-24">
      <Container>
        {/* 顶部标题区域 */}
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">
            极速体验艺创AI
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#64748B] max-w-lg mx-auto">
            一站式AI开发平台，快速构建智能应用
          </p>
        </div>

        {/* 双卡片主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

          {/* 左侧卡片：极速体验模型 */}
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-[#0055ff]/30">
            <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                极速体验模型
              </h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                体验超全模型，领取超大免费权益，每款豆包大语言提供50万Tokens免费额度，企业用户参与协作计划可获得500万Tokens免费额度
              </p>
              <div className="mb-5 sm:mb-6">
                <button className="bg-[#0055ff] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm hover:bg-[#0043cc] transition-colors font-medium text-sm shadow-sm hover:shadow-md hover:shadow-[#0055ff]/20">
                  立即体验
                </button>
              </div>

              {/* 模拟聊天界面截图区域 */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[320px] bg-gradient-to-b from-[#F0F5FF] to-white rounded-lg sm:rounded-xl border border-[#E2E8F0] overflow-hidden mt-auto">
                <Image
                  src="/images/aisolution/common-1.png"
                  alt="极速体验模型界面"
                  fill
                  className="object-cover object-top p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* 右侧卡片：API构建应用 */}
          <div className="flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-[#0055ff]/30">
            <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                API构建应用
              </h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                平台提供模型精调、推理、评测等全方位功能与服务，提供联网内容等丰富插件功能、知识库与智能体集成能力，保障企业级AI应用落地
              </p>
              <div className="mb-5 sm:mb-6">
                <button className="bg-[#0055ff] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-sm hover:bg-[#0043cc] transition-colors font-medium text-sm shadow-sm hover:shadow-md hover:shadow-[#0055ff]/20">
                  立即使用
                </button>
              </div>

              {/* 功能特性网格 - 移动端单列，平板及以上双列 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mt-auto">
                {apiFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#0055ff]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#0055ff]/80 group-hover:text-[#0055ff] transition-colors" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-[#0F172A] text-sm sm:text-base mb-1 group-hover:text-[#0055ff] transition-colors">{feature.name}</h4>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                        {feature.description}
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
