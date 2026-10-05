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
  ChevronRightIcon,
  SparklesIcon,
  PlayIcon,
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

// ==================== 页面专属区块（Hero / 应用场景） ====================

function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-brand-500) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-500/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36">
        <div className="mb-8 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-sm font-medium text-neutral-700">AI论文服务正常运行中</span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：文字内容 */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="block">艺创AI</span>
              <span className="mt-1 block text-brand-500">论文创作</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base lg:mx-0 lg:text-lg">
              集成最新 GPT-4、Claude、文心一言等顶级 AI 模型，
              <span className="font-semibold text-brand-500"> 打造一站式论文创作平台</span>
            </p>

            {/* 功能 Pill 标签 */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {['智能写作', '文献检索', '格式排版', '查重降重', 'AI润色'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-200 hover:text-brand-500"
                >
                  <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="https://paper.gmlart.cn/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-600 hover:shadow-md"
              >
                <PencilIcon className="h-4 w-4" />
                立即开始创作
              </a>
              <a
                href="https://paper.gmlart.cn/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
              >
                <PlayIcon className="h-4 w-4" />
                观看演示
              </a>
            </div>

            {/* 信任指标 */}
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              {[
                { value: '1000+', label: '企业用户' },
                { value: '50万+', label: '论文生成' },
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

          {/* 右侧：论文创作演示卡片 */}
          <div className="relative">
            <div className="relative rounded-md border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                    <AcademicCapIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">论文创作助手</h3>
                    <p className="text-xs text-neutral-500">AI驱动 · 学术写作</p>
                  </div>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
              </div>

              <div className="mb-5 min-h-[180px] space-y-3 rounded-xl bg-brand-50/50 p-4 sm:min-h-[240px]">
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  <p className="mb-1 text-sm font-medium text-neutral-700">论文大纲生成</p>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full rounded bg-brand-100" />
                    <div className="h-2 w-4/5 rounded bg-brand-100" />
                    <div className="h-2 w-3/5 rounded bg-brand-100" />
                  </div>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  <p className="mb-1 text-sm font-medium text-neutral-700">文献综述助手</p>
                  <div className="flex gap-2">
                    {['NLP', 'CV', 'DL', 'KG'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-brand-100 px-2 py-0.5 font-mono text-xs font-semibold text-brand-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '大纲生成', g: 'from-brand-500 to-brand-400' },
                  { label: '文献检索', g: 'from-purple-500 to-purple-400' },
                  { label: '智能排版', g: 'from-brand-500 to-brand-400' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-gradient-to-br ${item.g} p-3.5 text-center text-white transition-transform duration-200 hover:scale-[1.03]`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
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
              基于前沿AI技术，为学术写作提供专业可靠的智能化解决方案
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '自然语言处理', code: 'NLP' },
              { name: '学术写作引擎', code: 'AWE' },
              { name: '文献智能分析', code: 'LIA' },
              { name: '深度语义理解', code: 'DSU' },
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
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">应用场景</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-brand-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            多场景应用，助力学术写作与研究工作
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - AI智能对话 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">AI智能对话</h3>
                <div className="font-medium text-brand-500">秒级回复</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">对接GPT接口，AI秒级回复，提供精准服务</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">自然语言深度理解，精准识别用户意图</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">秒级响应，提升服务体验</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多场景适配，满足多行业需求</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - AI智能创作 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <AcademicCapIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">AI智能创作</h3>
                <div className="font-medium text-brand-500">深度创作</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">多模型支持，满足多样化创作需求</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多模型支持，满足多样化创作需求</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">
                  技能模型可自定义，分类越细，回答越精准
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">深度创作，提升内容质量与创新力</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 学生作业 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <PencilIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">学生作业</h3>
                <div className="font-medium text-brand-500">学习辅助</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">
              学生可以利用AI写作系统来获得关于特定主题的论文建议、参考文献和写作指导，提高写作能力和学术水平
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">提供论文建议和写作指导</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">智能推荐参考文献，节省查找时间</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">提升写作能力和学术水平</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 营销功能 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <CpuChipIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">营销功能</h3>
                <div className="font-medium text-brand-500">商业变现</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">VIP会员、优惠券等丰富营销工具</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">VIP会员期间不限次数，畅享全部功能</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">系统自动赠送优惠券，提升用户复购率</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多种套餐权益，满足不同用户需求</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 艺创AI 论文写作系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：共享区块统一调用 sections/ai 模板，
 * 页面专属的 Hero 与应用场景保留在本文件，区块顺序与视觉不变。
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
        <AiWorkflowSection />
        <AiCtaSection
          title={
            <>
              艺创AI<span className="text-brand-500">论文创作</span>
              系统
            </>
          }
          description="基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。"
          checkItems={ctaCheckItems}
          featureCards={ctaFeatureCards}
          primaryHref="/demo"
          secondaryHref="/demo"
          primaryButtonClassName="w-full rounded-xl bg-brand-500 px-6 py-3 font-bold text-white shadow-lg hover:bg-brand-600 sm:w-auto sm:py-4"
        />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
