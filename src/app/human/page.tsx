import type { JSX } from 'react'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  FaceSmileIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
  VideoCameraIcon,
  PlayIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { PixelBlastBackground } from '@/components/effects/PixelBlastBackground'
import { AiScene } from '@/components/sections/ai/AiScene'
import ScenariosSection from './components/ScenariosSection'
import {
  AiCoreFeaturesSection,
  type AiCoreFeature,
} from '@/components/sections/ai/AiCoreFeaturesSection'
import {
  AiCtaSection,
  type AiCtaCheckItem,
  type AiCtaFeatureCard,
} from '@/components/sections/ai/AiCtaSection'

interface Feature {
  name: string
  href: string
}
interface Card {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}
// ==================== 页面数据（区块模板由 sections/ai 共享组件承载） ====================

interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const advantages: Advantage[] = [
  {
    title: '数字分身训练数据',
    description: '基于深度学习的数字人训练数据集，包含多种表情、动作和语音样本',
    stats: '10万+',
    unit: '训练样本',
    icon: FaceSmileIcon,
  },
  {
    title: '声音复刻训练数据',
    description: '高质量音频数据集，支持多语言、多音色的声音克隆和合成',
    stats: '50万+',
    unit: '音频片段',
    icon: SpeakerWaveIcon,
  },
  {
    title: '数字人整体效果',
    description: '逼真的数字人形象，支持实时表情同步和自然动作生成',
    stats: '99%',
    unit: '相似度',
    icon: SparklesIcon,
  },
  {
    title: '集成接入方式',
    description: '提供完整的API接口和SDK，支持快速集成到各种应用场景',
    stats: '5分钟',
    unit: '快速接入',
    icon: RocketLaunchIcon,
  },
]

const coreFeatures: AiCoreFeature[] = [
  {
    name: '数字分身',
    description: '轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！',
    icon: FaceSmileIcon,
    image: '/images/product/human1.webp',
    stats: [
      { label: '高清还原', value: '100%真实感官体验' },
      { label: '形象生成', value: '100%快速生成' },
      { label: '定制形象', value: '个性化定制服务' },
    ],
  },
  {
    name: '声音克隆',
    description:
      '有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！',
    icon: SpeakerWaveIcon,
    image: '/images/product/Sound.webp',
    stats: [
      { label: '声音还原', value: '100%真实还原' },
      { label: '语音转换', value: '100%智能转换' },
      { label: '超逼真', value: '100%自然效果' },
    ],
  },
  {
    name: '用户管理',
    description: '基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。',
    icon: UserGroupIcon,
    image: '/images/product/human2.webp',
    stats: [
      { label: '多级分站', value: '灵活的分站管理' },
      { label: '账户管理', value: '完善的账户体系' },
      { label: '权限管理', value: '精细的权限控制' },
    ],
  },
  {
    name: 'AI视频',
    description:
      'AI一键自动生成视频，从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率。',
    icon: VideoCameraIcon,
    image: '/images/product/saas.webp',
    videoUrl: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4',
    stats: [
      { label: '一键生成', value: '智能快速生成视频' },
      { label: '场景丰富', value: '多样化视频模板' },
      { label: '高效营销', value: '提升内容转化率' },
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
    title: 'AI数字人',
    mobileDesc: '双版本支持',
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
      'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
]

// ==================== 页面专属区块（Hero / 产品优势 / 在线演示 / 接入流程） ====================

interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

function HeroSection(): JSX.Element {
  // 产品特性标签配置
  const features: Feature[] = [
    { name: '智能交互', href: '/' },
    { name: '形象定制', href: '/' },
    { name: '声音克隆', href: '/' },
    { name: '形象克隆', href: '/' },
  ]

  // 功能卡片配置 - 数字人核心特性
  const cards: Card[] = [
    {
      icon: CpuChipIcon,
      title: '智能交互',
      description: '自然语言对话，情感识别表达',
    },
    {
      icon: PaintBrushIcon,
      title: '形象定制',
      description: '多样化数字人形象，个性化定制',
    },
    {
      icon: GlobeAltIcon,
      title: '多场景应用',
      description: '客服、教育、直播、营销全覆盖',
    },
    {
      icon: BoltIcon,
      title: '实时渲染',
      description: '高清画质，流畅动作表现',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 dark:from-neutral-950 dark:via-neutral-950 dark:to-brand-900">
      {/* PixelBlast 动态背景效果（客户端小岛，2026-10-05 抽取） */}
      <PixelBlastBackground />
      {/* 背景装饰效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-brand-500/8 opacity-40 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 bg-brand-500/6 opacity-30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>
        <div className="absolute top-6 left-6 opacity-20 sm:top-8 sm:left-8 md:top-10 md:left-10">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/40 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/30 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-brand-500/40 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区域 */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 */}
              <div className="mb-2 inline-flex items-center rounded-md border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-500 sm:px-4 sm:py-2 sm:text-sm">
                <BoltIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                虚拟数字人
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="mb-1 block text-brand-500 sm:mb-2">数字分身</span>
                <span className="text-xl leading-tight font-semibold text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                  赋能企业智能化转型
                </span>
              </h1>
            </div>
            {/* 描述文本 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 dark:text-neutral-300">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              <p className="mx-auto max-w-xl text-sm text-neutral-500 sm:text-base lg:mx-0 dark:text-neutral-400">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1.5 text-xs font-medium text-neutral-900 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-100 sm:px-3 sm:py-2 sm:text-sm"
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
                className="group w-full rounded-xl px-8 py-4 text-lg font-semibold sm:w-auto"
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
                className="group w-full rounded-xl px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>了解更多</span>
                <ChevronRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>

          {/* 右侧展示区域 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-brand-500/10 to-brand-500/10 opacity-50 blur-xl sm:-inset-3 md:-inset-4"></div>
            <div className="group relative rounded-md border border-neutral-200/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8 lg:p-10 dark:border-neutral-700/50 dark:bg-neutral-800/80">
              {/* 顶部标签区域 */}
              <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2 md:mb-10 md:gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="cursor-pointer rounded-md border border-brand-500/20 bg-brand-500/10 px-2 py-1.5 text-xs font-medium text-brand-500 transition-colors hover:bg-brand-500/20 sm:px-3 sm:py-2 sm:text-sm md:px-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {feature.name}
                  </span>
                ))}
              </div>
              {/* 功能卡片网格 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group/card rounded-md border border-neutral-200/50 bg-neutral-50/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg sm:p-4 md:p-5 lg:p-7 dark:border-neutral-600/50 dark:bg-neutral-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 图标区域 */}
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-brand-500/10 transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-brand-500/40 sm:mb-3 sm:h-10 sm:w-10 md:mb-5 md:h-12 md:w-12">
                      <card.icon
                        className="h-4 w-4 text-brand-500 transition-colors group-hover/card:text-brand-500 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    {/* 内容区域 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="text-xs leading-tight font-bold text-neutral-900 sm:text-sm md:text-base lg:text-lg dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
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

// 产品优势展示组件

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
        {/* 标题区域 */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-500 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            多维度产品优势，助力企业数字化升级
          </p>
        </div>
        {/* 产品优势卡片网格 */}
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-0 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
              >
                {/* 数据展示区域 */}
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
                {/* 内容区域 */}
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

function DemoSection(): JSX.Element {
  // 演示账号配置
  const demoAccounts: DemoAccount[] = [
    {
      title: 'PC端后台',
      url: 'https://v.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '完整的数字人管理后台',
    },
    {
      title: '代理商后台',
      url: 'https://demo.cnai.art/admin',
      username: 'demo',
      password: 'demo',
      description: '代理商专用管理系统',
    },
    {
      title: 'SaaS平台端',
      url: 'https://saas.cnai.art/platform',
      username: '暂不提供',
      password: '暂不提供',
      description: 'SaaS服务管理平台',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20">
      {/* 背景装饰元素 */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-10 h-32 w-32 bg-brand-100 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-48 w-48 bg-brand-100 blur-2xl sm:h-60 sm:w-60 sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
          {/* 左侧内容 */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <div className="mb-4 inline-flex items-center bg-brand-100 px-3 py-1.5 text-xs font-medium text-brand-600 sm:mb-6 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 bg-brand-500"></span>
              在线演示
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-neutral-900 sm:mb-6 sm:text-3xl">
              AI数字人SaaS系统2.0
              <br className="hidden sm:block" />
              演示中心
            </h2>
            <p className="mb-6 text-base leading-relaxed text-neutral-600 sm:mb-8 sm:text-lg">
              通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
            </p>

            <div className="mb-6 bg-white p-4 shadow-lg sm:mb-8 sm:p-6">
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-8 w-8 items-center justify-center bg-brand-50 sm:mr-3 sm:h-10 sm:w-10">
                  <PlayIcon className="h-4 w-4 text-brand-500 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-medium sm:text-lg">演示账号信息</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {demoAccounts.map((account) => (
                  <div
                    key={account.title}
                    className="flex flex-col justify-between bg-neutral-50 p-3 sm:flex-row sm:items-center"
                  >
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs font-medium text-neutral-900 sm:text-sm">
                        {account.title}
                      </p>
                      <p className="text-xs break-all text-brand-500 sm:break-normal">
                        {account.url}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-neutral-500 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">{account.username}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-neutral-500 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">{account.password}</span>
                      </div>
                      <Button
                        href={account.url}
                        variant="outline"
                        className="mt-2 h-7 border-brand-500 text-xs text-brand-500 hover:bg-brand-50 sm:mt-0 sm:h-8"
                      >
                        访问
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-auto min-h-[44px] rounded-xl bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-brand-600 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="h-auto min-h-[44px] rounded-xl border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示视频（进入视口才加载播放，离开视口暂停） */}
              <div className="bg-white p-4 shadow-lg sm:p-6">
                <BackgroundVideo
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-neutral-900 sm:text-sm">
                      数字人管理平台
                    </h4>
                    <p className="text-xs text-neutral-500">一站式管理您的所有数字人资产</p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-1.5 w-1.5 bg-danger sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-warning sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-success sm:h-2 sm:w-2"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 -left-3 transform bg-gradient-to-br from-brand-500 to-brand-600 p-3 shadow-lg transition-transform duration-300 hover:scale-105 sm:-top-6 sm:-left-6 sm:p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium tracking-wide text-white sm:text-base">
                      在线演示
                    </p>
                    <p className="text-xs text-brand-100/90 sm:text-sm">实时体验</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// 应用场景展示组件

function WorkflowSection(): JSX.Element {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center rounded-sm border border-neutral-200 bg-brand-50 px-3 py-1">
            <span className="font-mono text-xs font-semibold text-brand-500">快速部署</span>
          </div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-neutral-950 md:text-3xl">
            接入流程
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base font-medium text-neutral-500 md:text-lg">
            标准化服务流程，助您快速完成数字人系统部署
          </p>
          <Button variant="solid" color="blue" href="https://v.cnai.art" target="_blank">
            立即接入
          </Button>
        </div>

        {/* 流程步骤 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* 步骤1：需求沟通 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              01
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  01
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                需求沟通
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                提供产品信息，沟通数字人类型、使用场景和交付形式
              </p>
            </div>
          </div>

          {/* 步骤2：确认合作 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              02
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  02
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                确认合作
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                通过控制台直接下单，或线下沟通商务合作
              </p>
            </div>
          </div>

          {/* 步骤3：资产制作 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              03
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  03
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                资产制作
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                采集数据，制作数字人形象和声音资产
              </p>
            </div>
          </div>

          {/* 步骤4：正式上线 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              04
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  04
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                正式上线
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                数字人上线，调用接口驱动或通过平台直接使用
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 艺创AI 数字人系统页面（Server Component）
 *
 * 2026-10-05 巨型页治理：共享区块统一调用 sections/ai 模板，
 * 页面专属区块保留在本文件；客户端边界收敛为两处小岛
 * （ScenariosSection 场景切换 state、PixelBlastBackground WebGL 特效）。
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
        <AiCoreFeaturesSection features={coreFeatures} />
        <AiScene />
        <WorkflowSection />
        <AiCtaSection
          title={
            <>
              准备好开启您的
              <span className="text-brand-500">AI数字人之旅</span>
              了吗？
            </>
          }
          description="专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点。版本免费迭代升级+售后技术支撑，让你无后顾之忧！"
          checkItems={ctaCheckItems}
          featureCards={ctaFeatureCards}
          primaryButtonClassName="w-full rounded-xl bg-brand-500 px-6 py-3 font-bold text-white shadow-lg hover:bg-brand-600 sm:w-auto sm:py-4"
          mobileCardClassName="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4 shadow-sm"
          desktopCardClassName="flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-sm"
        />
      </main>
      <Footer />
    </>
  )
}
