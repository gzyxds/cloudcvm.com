import type { JSX } from 'react'
import { type Metadata } from 'next'
import {
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  FaceSmileIcon,
  CpuChipIcon,
  PencilIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FAQSection } from '@/components/sections/ai/FAQSection'
import AiSolutionSection from '@/components/sections/ai/AiSolutionSection'
import { AiScene } from '@/components/sections/ai/AiScene'
import { AiFeaturesSection, type AiFeatureCard } from '@/components/sections/ai/AiFeaturesSection'
import { AiDemoSection, type AiDemoAccount } from '@/components/sections/ai/AiDemoSection'
import {
  AiCoreFeaturesSection,
  type AiCoreFeature,
} from '@/components/sections/ai/AiCoreFeaturesSection'
import HeroSection from './components/HeroSection'
import AdvantagesSection from './components/AdvantagesSection'
import WorkflowSection from './components/WorkflowSection'
import CtaSection from './components/CtaSection'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: { absolute: '艺创AI_AI系统源码_AI智能聊天系统_AI绘画系统' },
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: ['AI系统源码', 'AI智能聊天系统', 'AI绘画系统', '艺创AI'],
}

// ==================== 页面数据（区块模板由 sections/ai 共享组件承载） ====================

const featureCards: AiFeatureCard[] = [
  {
    id: 1,
    name: 'AI智能对话',
    description:
      '智能聊天对话，AI秒回答。对接ChatAI接口，可以对自然语言进行深度理解，识别出用户的意图和需求，从而提供更加精准的回答和服务。',
    features: [
      '自然语言深度理解，精准识别用户意图',
      '秒级响应，提升服务体验',
      '多场景适配，满足多行业需求',
    ],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: 'AI模型创作',
    description:
      '它无所不知，无所不能。根据不同模型进行提问，AI会针对输入的问题进行深度创作，提高创作能力；可定义不同的技能模型，用户根据不同技能进行提问，技能分类得越细，AI回答得越准确。',
    features: [
      '多模型支持，满足多样化创作需求',
      '技能模型可自定义，分类越细，回答越精准',
      '深度创作，提升内容质量与创新力',
    ],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: 'AI绘画',
    description:
      '只需一句话，生成精美画作。支持知数云MJ。即将支持gpt3.5、api2d3.5生图、意间AI、SD、Midjourney官方、灵犀星火；已支持以图生图！生图速度快，不用排队等半天。',
    features: [
      '一句话生成精美画作，操作简单高效',
      '支持多平台模型，生图速度快，无需排队',
      '支持以图生图，创作更自由',
    ],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: '丰富的营销功能',
    description:
      'VIP会员、挽留优惠券。1、会员期间不消耗次数，可无限使用；2、系统赠送优惠券挽留用户，每个套餐赠送的优惠券金额不同，给用户更大的优惠或更多的权益，以吸引其继续购买。',
    features: [
      'VIP会员期间不限次数，畅享全部功能',
      '系统自动赠送优惠券，提升用户复购率',
      '多种套餐权益，满足不同用户需求',
    ],
    icon: CpuChipIcon,
  },
]

const demoAccounts: AiDemoAccount[] = [
  {
    title: 'PC端后台',
    url: 'https://cnai.art',
    username: '自行注册',
    password: '自行注册',
    description: '完整的AI聊天绘画管理后台',
  },
  {
    title: '演示后台',
    url: 'https://chat-demo.chatmoney.cn/admin',
    username: 'admin',
    password: '123456',
    description: '代理商专用管理系统',
  },
  {
    title: '移动端',
    url: 'https://cnai.art/mobile',
    username: '自行注册',
    password: '自行注册',
    description: 'AI创作服务管理平台',
  },
]

const coreFeatures: AiCoreFeature[] = [
  {
    name: 'AI对话',
    description:
      '对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作。',
    icon: PencilIcon,
    image: '/images/product/chat.webp',
    stats: [
      { label: 'AI秒级回复', value: '对接GPT接口，快速响应您的每一个问题' },
      { label: '精准内容生成', value: '智能理解需求，生成高质量文案和专业解答' },
      { label: '高效办公助手', value: '提升工作效率，助力内容创作与日常沟通' },
    ],
  },
  {
    name: 'AI智能创作',
    description:
      '根据不同模型进行提问，AI会针对输入的问题进行深度创作，显著提升内容创作能力，满足多样化创作需求',
    icon: SpeakerWaveIcon,
    image: '/images/product/AI智能创作.webp',
    stats: [
      { label: '多模型支持', value: '支持多种AI模型' },
      { label: '深度内容生成', value: 'AI深度理解创作' },
      { label: '提升创作能力', value: '高效优质内容' },
    ],
  },
  {
    name: 'AI绘画',
    description: '只需一句话，让文字秒变精美画作。支持多种绘画风格，一键快速生成高质量画作。',
    icon: PencilIcon,
    image: '/images/product/AI绘画.webp',
    stats: [
      { label: '文生图', value: '输入描述，AI自动生成精美图片' },
      { label: '多风格支持', value: '支持多种绘画风格，满足不同创作需求' },
      { label: '高效生成', value: '一键生成，快速获得高质量画作' },
    ],
  },
  {
    name: 'AI技能',
    description:
      '支持自定义各类AI技能模型，可根据具体场景定制专属技能。技能分类越细致，AI回答越精准，全面满足多样化业务需求。',
    icon: AcademicCapIcon,
    image: '/images/product/AI技能.webp',

    stats: [
      { label: '技能自定义', value: '支持自定义各类AI技能模型' },
      { label: '细分技能', value: '分类越细,回答越精准' },
      { label: '多场景适用', value: '适用于客服、教育、医疗等行业' },
    ],
  },
]

/**
 * 艺创AI 聊天绘画系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：原 1287 行单文件拆分为编排层 +
 * `components/` 4 个页面专属区块 + 3 个与 paper 页共享的 sections/ai 模板
 * （AiFeaturesSection / AiDemoSection / AiCoreFeaturesSection），区块顺序不变。
 */
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">
        <HeroSection />
        <AiSolutionSection />
        <AdvantagesSection />
        <AiDemoSection
          accounts={demoAccounts}
          title="艺创AI-聊天绘画系统"
          description="通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。"
          image={{ src: '/images/product/ai.webp', alt: 'AI智能系统演示' }}
          imageCaption={{ title: 'AI聊天绘画平台', desc: '一站式AI创作与智能对话体验' }}
          applyHref="#"
          contactHref="#"
        />
        <AiCoreFeaturesSection
          features={coreFeatures}
          mediaClassName="border border-neutral-200 p-2 shadow-sm"
        />
        <AiScene />
        <AiFeaturesSection cards={featureCards} />
        <WorkflowSection />
        <CtaSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
