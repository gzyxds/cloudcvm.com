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
 * @interface FeatureItem
 * @property {string} name - 功能名称
 * @property {string} description - 功能详细描述
 * @property {any} icon - 功能对应的图标组件
 */
interface FeatureItem {
  name: string
  description: string
  icon: any
}

/**
 * 右侧卡片的功能列表数据
 * 包含6个核心功能模块：智能广场、模型推理、模型定制、PromptPilot、应用实验室、知识库
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
 * 极速体验必定AI-BuidAI组件 (VolcanoArkExperience)
 *
 * 这是一个双卡片布局组件，参考了"极速体验必定AI-BuidAI"的设计风格。
 * 布局结构：
 * - 顶部标题：居中显示的"极速体验必定AI-BuidAI"
 * - 双列布局：
 *   - 左侧卡片：极速体验模型 (包含文本、按钮和模拟的聊天界面图)
 *   - 右侧卡片：API构建应用 (包含文本、按钮和6宫格功能特性列表)
 *
 * 设计特点：
 * - 宽度：使用 System Container (max-w-[1800px])
 * - 风格：白色卡片背景，细微边框，圆角设计
 * - 响应式：在移动端自动堆叠为单列
 */
export function Rightleft() {
  return (
    <section className="bg-[#F7F8FB] py-20 sm:py-24 lg:py-32">
      <Container>
        {/* 顶部标题区域 */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d2129] sm:text-4xl">
            极速体验必定AI-BuidAI
          </h2>
        </div>

        {/* 双卡片主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 左侧卡片：极速体验模型 */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-[#1d2129] mb-4">
                极速体验模型
              </h3>
              <p className="text-[#4e5969] text-base leading-relaxed mb-8 flex-grow">
                体验超全模型，领取超大免费权益，每款豆包大语言提供50万Tokens免费额度，企业用户参与协作计划可获得500万Tokens免费额度
              </p>
              <div className="mb-8">
                <button className="bg-[#1664ff] text-white px-8 py-2.5 rounded hover:bg-[#4086ff] transition-colors font-medium text-sm">
                  立即体验
                </button>
              </div>

              {/* 模拟聊天界面截图区域 - 使用真实产品截图 */}
              <div className="relative w-full h-[300px] sm:h-[400px] bg-[#F7F8FA] rounded-xl border border-slate-100 overflow-hidden mt-auto">
                <Image
                  src="https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_9c738c3983371d4652420bd4110aae53.png"
                  alt="极速体验模型界面"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* 右侧卡片：API构建应用 */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-[#1d2129] mb-4">
                API构建应用
              </h3>
              <p className="text-[#4e5969] text-base leading-relaxed mb-8">
                平台提供模型精调、推理、评测等全方位功能与服务，提供联网内容等丰富插件功能、知识库与智能体集成能力，保障企业级AI应用落地
              </p>
              <div className="mb-10">
                <button className="bg-[#1664ff] text-white px-8 py-2.5 rounded hover:bg-[#4086ff] transition-colors font-medium text-sm">
                  立即使用
                </button>
              </div>

              {/* 功能特性网格 - 2x3 布局 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mt-auto">
                {apiFeatures.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#1664ff]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="h-7 w-7 text-[#1664ff]/80 group-hover:text-[#1664ff] transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1d2129] text-base mb-1.5 group-hover:text-[#1664ff] transition-colors">{feature.name}</h4>
                      <p className="text-sm text-[#86909c] leading-relaxed">
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
