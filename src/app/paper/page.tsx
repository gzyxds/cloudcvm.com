import type { JSX } from 'react'
import { type Metadata } from 'next'
import {
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  FaceSmileIcon,
  CpuChipIcon,
  PencilIcon,
  SpeakerWaveIcon,
  MegaphoneIcon,
  VideoCameraIcon,
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
  title: { absolute: '艺创AI_AI系统源码_AI论文写作系统_AI论文生成器' },
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: ['AI论文写作系统,AI论文生成器,论文写作工具,智能写作系统,AI写作助手'],
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
    url: 'https://paper.gmlart.cn/',
    username: '自行注册',
    password: '自行注册',
    description: '完整的AI聊天绘画管理后台',
  },
  {
    title: '移动端',
    url: 'https://paper.gmlart.cn/mobile',
    username: '暂不提供',
    password: '暂不提供',
    description: 'AI创作服务管理平台',
  },
]

const coreFeatures: AiCoreFeature[] = [
  {
    name: '期刊论文写作',
    description:
      '研究人员可以使用AI写作系统来生成论文的初稿或补充材料，显著提升研究效率，加速学术成果产出。',
    icon: PencilIcon,
    image: '/images/product/期刊论文.webp',
    stats: [
      { label: '快速生成', value: '智能生成论文初稿和补充材料，大幅缩短写作时间' },
      { label: '文献推荐', value: '智能推荐相关研究文献，构建完整的理论基础' },
      { label: '格式规范', value: '自动格式化和参考文献引用，符合学术标准' },
    ],
  },
  {
    name: '科普写作',
    description:
      '让科学知识更有趣！AI助你将复杂的科学概念转化为通俗易懂的科普文章，配合生动示例和智能配图，让读者轻松理解科学知识。',
    icon: SpeakerWaveIcon,
    image: '/images/product/期刊论文.webp',
    stats: [
      { label: '简化表达', value: '化繁为简解释' },
      { label: '生动示例', value: '趣味类比说明' },
      { label: '智能配图', value: '图文结合理解' },
    ],
  },
  {
    name: '实时通知',
    description: '以走马灯形式展示系统重要通知、用户动态和更新信息，让用户及时了解平台动态。',
    icon: MegaphoneIcon,
    image: '/images/product/实时通知.webp',
    stats: [
      { label: '实时推送', value: '即时消息通知' },
      { label: '动态展示', value: '走马灯滚动播放' },
      { label: '内容管理', value: '灵活配置通知' },
    ],
  },
  {
    name: '多终端自适应',
    description:
      '支持手机、平板、电脑访问。通过自适应，完美解决移动端的管理需求，一套后台多端应用。',
    icon: VideoCameraIcon,
    image: '/images/product/论文创作.webp',
    stats: [
      { label: '多端适配', value: '手机、平板、电脑全适配' },
      { label: '响应式设计', value: '界面布局自动调整' },
      { label: '统一管理', value: '一套后台多端应用' },
    ],
  },
]

/**
 * 艺创AI 论文写作系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：原 1509 行单文件拆分为编排层 +
 * `components/` 4 个页面专属区块 + 3 个与 chat 页共享的 sections/ai 模板
 * （AiFeaturesSection / AiDemoSection / AiCoreFeaturesSection），区块顺序不变。
 */
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AiSolutionSection />
        <AdvantagesSection />
        <AiDemoSection
          accounts={demoAccounts}
          title="艺创AI-论文创作"
          description="通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。"
          image={{ src: '/images/product/论文创作.webp', alt: '论文创作演示' }}
          imageCaption={{ title: '论文创作平台', desc: '一站式论文创作与智能对话体验' }}
          applyHref="https://paper.gmlart.cn/"
          contactHref="https://paper.gmlart.cn/"
        />
        <AiCoreFeaturesSection features={coreFeatures} />
        <AiScene />
        <AiFeaturesSection cards={featureCards} roundedClass="rounded-xl" />
        <WorkflowSection />
        <CtaSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
