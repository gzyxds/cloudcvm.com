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
  MicrophoneIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
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
import { AiWorkflowSection } from '@/components/sections/ai/AiWorkflowSection'
import {
  AiCtaSection,
  type AiCtaCheckItem,
  type AiCtaFeatureCard,
} from '@/components/sections/ai/AiCtaSection'

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

// ==================== CTA 数据 ====================

const ctaCheckItems: AiCtaCheckItem[] = [
  { title: '高清还原', desc: '100%真实感官体验' },
  { title: '专业服务', desc: '7×24小时技术支持' },
  { title: '数据安全', desc: '企业级安全保障' },
  { title: '持续更新', desc: '定期功能迭代升级' },
]

const ctaFeatureCards: AiCtaFeatureCard[] = [
  {
    title: 'AI知识库',
    mobileDesc: '三版本支持',
    desktopDesc: 'PHP/Java双版本支持',
    pathD: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: '私有部署',
    mobileDesc: '安全可控',
    desktopDesc: '安全可控的私有化部署',
    pathD:
      'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: '专业团队',
    mobileDesc: '一对一支持',
    desktopDesc: '一对一技术支持',
    pathD:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: '开源方案',
    mobileDesc: '灵活定制',
    desktopDesc: '灵活定制，售后无忧',
    pathD:
      'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
]

// ==================== 页面专属区块（Hero / 产品优势） ====================

function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* 简约背景 — 点阵 + 光晕 */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-brand-500) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-500/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-ai-accent/[0.03] blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36">
        {/* 在线状态指示 */}
        <div className="mb-8 flex animate-slide-up justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-sm font-medium text-neutral-700">AI服务正常运行中</span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：文字内容 */}
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block">艺创AI</span>
                <span className="mt-1 block text-brand-500">聊天绘画</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base lg:mx-0 lg:text-lg">
                集成最新 GPT-4、DALL·E 3、Midjourney 等顶级 AI 模型，
                <span className="font-semibold text-brand-500"> 一站式 AI 创作平台</span>，
                让创意无限可能
              </p>
            </div>

            {/* 功能 Pill 标签 */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {[
                { name: '智能对话', time: '24/7', icon: ChatBubbleLeftRightIcon },
                { name: 'AI绘画', time: '5min', icon: SparklesIcon },
                { name: '智能创作', time: '<3s', icon: PencilIcon },
                { name: '营销变现', time: '1h', icon: MegaphoneIcon },
              ].map((f, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm transition-all duration-200 hover:border-brand-200 hover:shadow-sm"
                >
                  <f.icon className="h-4 w-4 text-neutral-500" />
                  <span className="font-medium text-neutral-800">{f.name}</span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 font-mono text-xs font-semibold text-brand-500">
                    {f.time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                href="/demo"
                variant="solid"
                color="blue"
                size="xl"
                className="gap-2 shadow-sm hover:shadow-md"
              >
                <RocketLaunchIcon className="h-4 w-4" />
                立即体验
              </Button>
              <Button href="/contact" variant="outline" size="xl" className="gap-2">
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                联系客服
              </Button>
            </div>

            {/* 信任指标 */}
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              {[
                { value: '1000+', label: '企业用户' },
                { value: '50万+', label: 'AI创作' },
                { value: '99.9%', label: '系统稳定' },
              ].map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold tracking-tight text-brand-500 sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-0.5 text-xs text-neutral-500 sm:text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：演示卡片 */}
          <div className="relative">
            <div className="relative rounded-md border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              {/* 卡片头部 */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">艺创AI助手</h3>
                    <p className="text-xs text-neutral-500">智能对话 · 图像生成</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="text-xs text-neutral-500">在线</span>
                </div>
              </div>

              {/* 对话区 */}
              <div className="mb-5 min-h-[200px] space-y-4 rounded-xl bg-brand-50/50 p-4 sm:min-h-[260px]">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="max-w-[75%] rounded-xl rounded-tl-sm bg-white px-4 py-2.5 shadow-sm">
                    <p className="text-sm text-neutral-700">
                      您好！我可以帮您进行AI创作、图片生成等服务
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-[75%] rounded-xl rounded-tr-sm bg-brand-500 px-4 py-2.5">
                    <p className="text-sm text-white">请帮我生成一张未来科技城市的图片</p>
                  </div>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-800">
                    <UsersIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* 功能网格 */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: 'AI创作',
                    desc: '智能文案',
                    icon: PencilIcon,
                    g: 'from-brand-500 to-brand-400',
                  },
                  {
                    label: 'AI绘画',
                    desc: '图像生成',
                    icon: SparklesIcon,
                    g: 'from-ai-accent to-ai-accent-400',
                  },
                  {
                    label: '语音助手',
                    desc: '语音交互',
                    icon: MicrophoneIcon,
                    g: 'from-brand-500 to-brand-400',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-gradient-to-br ${item.g} p-3.5 text-white transition-transform duration-200 hover:scale-[1.03]`}
                  >
                    <item.icon className="mb-2 h-5 w-5" />
                    <h4 className="text-sm font-semibold">{item.label}</h4>
                    <p className="mt-0.5 text-[11px] text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 技术优势 */}
        <div className="mt-16 sm:mt-24">
          <div className="mb-8 text-center">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
              核心技术优势
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              基于前沿AI技术，为企业提供专业可靠的智能化解决方案
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '自然语言处理', code: 'NLP' },
              { name: '计算机视觉', code: 'CV' },
              { name: '深度学习', code: 'DL' },
              { name: '知识图谱', code: 'KG' },
              { name: '多模态融合', code: 'MM' },
            ].map((tech, i) => (
              <div
                key={i}
                className="group rounded-md border border-neutral-200 bg-white p-4 text-center transition-all duration-200 hover:border-brand-200 hover:shadow-sm"
              >
                <div className="mb-1 font-mono text-xs font-bold tracking-wide text-brand-500">
                  {tech.code}
                </div>
                <div className="text-sm font-medium text-neutral-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function AdvantagesSection(): JSX.Element {
  // 渐变色配置
  const gradientColors = [
    'from-brand-500 to-brand-600',
    'from-brand-500 to-brand-500',
    'from-brand-400 to-brand-500',
    'from-brand-600 to-brand-700',
  ]
  const bulletColors = ['bg-brand-500', 'bg-brand-500', 'bg-brand-400', 'bg-brand-600']

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-neutral-950">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-500 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            艺创AI智能对话绘画解决方案，助力企业提升创作效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {[
            {
              title: 'AI聊天对话',
              description:
                '对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作',
              stats: '秒级',
              unit: 'AI回复',
            },
            {
              title: 'AI智能创作',
              description:
                '根据不同模型进行提问，AI会针对输入的问题进行深度创作，显著提升内容创作能力，满足多样化创作需求',
              stats: '100%',
              unit: '智能化创作',
            },
            {
              title: 'AI绘画创作',
              description:
                '已对接MJ、SD绘图、DALLE-3等众多绘画模型，作图更强大。适用于各类图像创作需求，包括图片创作、风景生成等场景',
              stats: '多模型',
              unit: '绘画支持',
            },
            {
              title: 'AI专业技能',
              description:
                '预设多种专业技能模板，涵盖编程、设计、营销、教育等领域。让AI在特定领域发挥专业水准，精准服务各行业需求',
              stats: '专业领域',
              unit: '精准服务',
            },
          ].map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div
                  className={`bg-gradient-to-br ${gradientColors[index % 4]} relative overflow-hidden p-6 text-white sm:p-8`}
                >
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 bg-white/10 sm:h-24 sm:w-24 sm:translate-x-12 sm:-translate-y-12"></div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-sm font-semibold opacity-90 sm:mb-3 sm:text-lg">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold sm:text-5xl">{advantage.stats}</span>
                      {advantage.unit && (
                        <span className="ml-2 text-lg font-medium sm:text-xl">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="mb-4 text-sm font-semibold text-neutral-900 sm:mb-6 sm:text-base dark:text-white">
                    {advantage.description.split('，')[0]}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.description
                      .split('，')
                      .slice(1)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div
                            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${bulletColors[index % 4]} mt-1.5 mr-2 flex-shrink-0 sm:mt-2 sm:mr-3`}
                          ></div>
                          <span className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-300">
                            {feature.trim()}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * 艺创AI 聊天绘画系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：共享区块统一调用 sections/ai 模板，
 * 页面专属的 Hero 与产品优势保留在本文件，区块顺序与视觉不变。
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
        <AiWorkflowSection />
        <AiCtaSection
          title={
            <>
              艺创AI<span className="text-brand-500">企业知识库</span>系统
            </>
          }
          description="基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。"
          checkItems={ctaCheckItems}
          featureCards={ctaFeatureCards}
          primaryHref="#demo"
          secondaryHref="https://v.cnai.art"
        />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
