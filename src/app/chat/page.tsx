import { JSX } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { FAQSection } from '@/components/ai/FAQSection'
import Aisd from '@/components/ai/Aisd'
import { AIscene } from '@/components/ai/AIscene'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  UsersIcon,
  MicrophoneIcon,
  PencilIcon,
  VideoCameraIcon,
  PlayIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '艺创AI_AI系统源码_AI智能聊天系统_AI绘画系统',
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: ['AI系统源码', 'AI智能聊天系统', 'AI绘画系统', '艺创AI'],
}

// ==================== 数据类型定义 ====================

// 产品优势数据接口
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 应用场景数据接口
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

// 功能特色卡片接口
interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 演示账号接口
interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// ==================== 静态数据配置 ====================
// 产品优势数据
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

// 应用场景数据
const scenarios: Scenario[] = [
  {
    id: 'live-streaming',
    name: '带货视频',
    description: '数字人主播，24小时不间断直播带货',
    features: ['品牌代言', '内容创作', '社交互动'],
    icon: TvIcon,
    video: '/videos/live-streaming.mp4',
  },
  {
    id: 'digital-employee',
    name: '数字员工',
    description: '智能客服助手，提供专业咨询服务',
    features: ['智能问答', '情感识别', '多语言支持'],
    icon: UserGroupIcon,
    video: '/videos/digital-employee.mp4',
  },
  {
    id: 'content-creation',
    name: '内容创作',
    description: 'AI驱动的内容生成和创意制作',
    features: ['脚本生成', '视频制作', '多媒体输出'],
    icon: AcademicCapIcon,
    video: '/videos/content-creation.mp4',
  },
  {
    id: 'virtual-broadcast',
    name: '虚拟直播',
    description: '虚拟主播直播，降低运营成本',
    features: ['实时互动', '自动回复', '数据分析'],
    icon: MegaphoneIcon,
    video: '/videos/virtual-broadcast.mp4',
  },
]

// 功能特色数据
const featureCards: FeatureCard[] = [
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

// 功能特色展示组件
function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            功能特色
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-x-8"
        >
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className="overflow-hidden rounded-xl outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span className="text-sm leading-5 text-gray-600">
                          {featureItem}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即体验
                    </button>
                    <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 text-center">
          <Button
            href="#"
            className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            探索更多功能
          </Button>
        </div>
      </Container>
    </section>
  )
}

// 产品优势展示组件
function AdvantagesSection(): JSX.Element {
  // 渐变色配置
  const gradientColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-400 to-blue-500',
    'from-blue-700 to-blue-800',
  ]
  const bulletColors = [
    'bg-blue-600',
    'bg-blue-500',
    'bg-blue-400',
    'bg-blue-700',
  ]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-gray-900">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-blue-600 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
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
                className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
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
                      <span className="text-3xl font-bold sm:text-5xl">
                        {advantage.stats}
                      </span>
                      {advantage.unit && (
                        <span className="ml-2 text-lg font-medium sm:text-xl">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="mb-4 text-sm font-semibold text-gray-900 sm:mb-6 sm:text-base dark:text-white">
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
                          <span className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">
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

// ==================== 页面组件定义 ====================

// 在线演示组件
function DemoSection(): JSX.Element {
  // 演示账号数据
  const demoAccounts: DemoAccount[] = [
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

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20">
      {/* 背景装饰元素 */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-10 h-32 w-32 bg-blue-100 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-48 w-48 bg-indigo-100 blur-2xl sm:h-60 sm:w-60 sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
          {/* 左侧内容 */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <div className="mb-4 inline-flex items-center bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 sm:mb-6 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 bg-blue-600"></span>
              在线演示
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl">
              艺创AI-聊天绘画系统
              <br className="hidden sm:block" />
              演示中心
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
              通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。
            </p>

            <div className="mb-6 bg-white p-4 shadow-lg sm:mb-8 sm:p-6">
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-8 w-8 items-center justify-center bg-blue-50 sm:mr-3 sm:h-10 sm:w-10">
                  <PlayIcon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-medium sm:text-lg">
                  演示账号信息
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {demoAccounts.map((account, index) => (
                  <div
                    key={account.title}
                    className="flex flex-col justify-between bg-gray-50 p-3 sm:flex-row sm:items-center"
                  >
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs font-medium text-gray-900 sm:text-sm">
                        {account.title}
                      </p>
                      <p className="text-xs break-all text-blue-600 sm:break-normal">
                        {account.url}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-gray-500 sm:mr-2">
                          账号:
                        </span>
                        <span className="text-xs font-medium">
                          {account.username}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-gray-500 sm:mr-2">
                          密码:
                        </span>
                        <span className="text-xs font-medium">
                          {account.password}
                        </span>
                      </div>
                      <Button
                        href={account.url}
                        variant="outline"
                        className="mt-2 h-7 border-blue-600 text-xs text-blue-600 hover:bg-blue-50 sm:mt-0 sm:h-8"
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
                className="h-auto min-h-[44px] rounded-none bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="h-auto min-h-[44px] rounded-none border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>
          {/* 右侧内容 */}
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示图片 */}
              <div className="bg-white p-4 shadow-lg sm:p-6">
                <Image
                  src="/images/product/ai.svg"
                  alt="AI智能系统演示"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                  priority
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      AI聊天绘画平台
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式AI创作与智能对话体验
                    </p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-1.5 w-1.5 bg-red-500 sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-yellow-500 sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-green-500 sm:h-2 sm:w-2"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 -left-3 transform bg-gradient-to-br from-blue-600 to-blue-700 p-3 shadow-lg transition-transform duration-300 hover:scale-105 sm:-top-6 sm:-left-6 sm:p-4">
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
                    <p className="text-xs text-blue-100/90 sm:text-sm">
                      实时体验
                    </p>
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

// 核心功能展示组件
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: 'AI对话',
      description:
        '对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作。',
      icon: PencilIcon,
      image: '/images/product/chat.png',
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
      image: '/images/product/AI智能创作.png',
      stats: [
        { label: '多模型支持', value: '支持多种AI模型' },
        { label: '深度内容生成', value: 'AI深度理解创作' },
        { label: '提升创作能力', value: '高效优质内容' },
      ],
    },
    {
      name: 'AI绘画',
      description:
        '只需一句话，让文字秒变精美画作。支持多种绘画风格，一键快速生成高质量画作。',
      icon: PencilIcon,
      image: '/images/product/AI绘画.png',
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
      image: '/images/product/AI技能.png', // 新增图片路径

      stats: [
        { label: '技能自定义', value: '支持自定义各类AI技能模型' },
        { label: '细分技能', value: '分类越细,回答越精准' },
        { label: '多场景适用', value: '适用于客服、教育、医疗等行业' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            强大的AI技术能力，为您提供全方位的智能创作解决方案
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mx-auto mt-16 max-w-[1800px]">
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>

                  <p className="mb-8 text-lg leading-8 text-gray-600">
                    {feature.description}
                  </p>

                  {/* 特性列表 */}
                  <div className="mb-8 space-y-4">
                    {feature.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-start space-x-3"
                      >
                        <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <dt className="font-semibold text-gray-900">
                            {stat.label}
                          </dt>
                          <dd className="text-gray-600">{stat.value}</dd>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <Button
                      href="#"
                      variant="solid"
                      color="blue"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      立即体验
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      购买授权
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      体验Demo
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      联系客服
                    </Button>
                  </div>
                </div>

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 border border-gray-200 shadow-sm p-2">
                      <Image
                        src={feature.image}
                        alt={`${feature.name}功能演示`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-12 text-center sm:mt-16">
          <a
            href="#features"
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// 知识库英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">
        {/* 英雄区块开始 */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* 几何背景装饰 - 响应式尺寸优化 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="xs:-top-32 xs:-right-32 xs:w-60 xs:h-60 animate-blob absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
            <div className="xs:-bottom-32 xs:-left-32 xs:w-60 xs:h-60 animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
            <div className="xs:w-60 xs:h-60 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-xl filter sm:h-80 sm:w-80"></div>
          </div>

          {/* 动态渐变背景 - 光效和网格 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.03)_75%,rgba(59,130,246,0.03)_76%,transparent_77%,transparent),linear-gradient(rgba(59,130,246,0.03)_24%,transparent_25%,transparent_26%,rgba(59,130,246,0.03)_27%,rgba(59,130,246,0.03)_74%,transparent_75%,transparent_76%,rgba(59,130,246,0.03)_77%,rgba(59,130,246,0.03))] bg-[length:75px_75px]"></div>
          </div>

          {/* 响应式容器 - 优化超小屏幕适配 */}
          <div className="xs:px-4 xs:pt-20 xs:pb-16 relative z-10 mx-auto max-w-[1800px] px-3 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28">
            {/* 状态标签 - 响应式间距和字体 */}
            <div className="xs:mb-6 mb-4 flex justify-center sm:mb-8">
              <div className="xs:gap-2 xs:px-4 xs:py-2 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <div className="xs:w-2 xs:h-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></div>
                <span className="xs:text-sm text-xs font-medium text-gray-700">
                  AI服务正常运行中
                </span>
              </div>
            </div>

            <div className="xs:gap-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* 左侧内容区 - 优化移动端间距 */}
              <div className="xs:space-y-6 space-y-4 text-center sm:space-y-8 lg:text-left">
                {/* 主标题 - 增强响应式字体大小 */}
                <div className="xs:space-y-4 space-y-3 sm:space-y-6">
                  <h1 className="xs:text-3xl text-2xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="block">艺创AI</span>
                    <span className="block text-blue-600">
                      智能聊天绘画系统
                    </span>
                  </h1>
                  <p className="xs:text-base xs:px-0 mx-auto max-w-2xl px-2 text-sm leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
                    集成最新GPT-4、DALL-E 3、Midjourney等顶级AI模型，
                    <span className="font-semibold text-blue-600">
                      一站式AI创作平台
                    </span>
                    ， 让创意无限可能
                  </p>
                </div>

                {/* 核心功能标签 - 优化移动端显示 */}
                <div className="xs:gap-2 xs:px-0 mx-auto flex max-w-2xl flex-wrap justify-center gap-1.5 px-2 sm:gap-3 lg:mx-0 lg:justify-start">
                  {[
                    {
                      name: '智能对话',
                      time: '24/7',
                      icon: ChatBubbleLeftRightIcon,
                    },
                    { name: 'AI绘画', time: '5min', icon: UsersIcon },
                    { name: '智能创作', time: '<3s', icon: MicrophoneIcon },
                    { name: '营销变现', time: '1h', icon: AcademicCapIcon },
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={index}
                        className="xs:gap-2 xs:px-3 xs:py-2 group inline-flex touch-manipulation items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-2 py-1.5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
                      >
                        <Icon className="xs:w-4 xs:h-4 h-3 w-3 text-gray-600 transition-colors group-hover:text-blue-600" />
                        <span className="xs:text-sm text-xs font-medium text-gray-800">
                          {feature.name}
                        </span>
                        <span className="xs:text-xs xs:px-2 rounded-full bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] text-blue-600">
                          {feature.time}
                        </span>
                      </div>
                    )
                  })}
                </div>
                {/* 行动按钮 - 增强移动端适配 */}
                <div className="xs:flex-row xs:gap-3 xs:px-0 flex flex-col justify-center gap-2.5 px-4 sm:gap-4 lg:justify-start">
                  <Button
                    href="/demo"
                    variant="solid"
                    color="blue"
                    className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation rounded-xl px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
                  >
                    立即体验
                  </Button>
                  <Button
                    href="/contact"
                    target="_blank"
                    variant="outline"
                    color="slate"
                    className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation rounded-xl px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
                  >
                    联系客服
                  </Button>
                </div>

                {/* 实时数据展示 - 优化移动端布局 */}
                <div className="xs:gap-6 flex justify-center gap-4 sm:gap-8 lg:justify-start">
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      1000+
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">
                      企业用户
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      50万+
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">
                      AI创作
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      99.9%
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">
                      系统稳定
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧展示区 - 增强移动端适配 */}
              <div className="xs:mt-8 xs:mx-4 relative mx-2 mt-6 sm:mx-0 lg:mt-0">
                {/* 主展示容器 - 优化响应式尺寸 */}
                <div className="relative">
                  {/* 展示卡片 - 全面优化移动端高度和间距 */}
                  <div className="xs:p-4 xs:min-h-[380px] relative min-h-[320px] rounded-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-3 transition-all duration-300 sm:min-h-[460px] sm:rounded-xl sm:p-6 md:min-h-[500px]">
                    {/* 顶部状态栏 - 增强移动端布局 */}
                    <div className="xs:mb-4 mb-3 flex items-center justify-between sm:mb-6">
                      <div className="xs:gap-2 flex items-center gap-1.5 sm:gap-3">
                        <div className="xs:w-7 xs:h-7 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 sm:h-9 sm:w-9">
                          <ChatBubbleLeftRightIcon className="xs:w-4 xs:h-4 h-3 w-3 text-white sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="xs:text-sm text-xs font-bold text-gray-900 sm:text-base">
                            艺创AI助手
                          </h3>
                          <p className="xs:text-xs text-[10px] text-gray-500 sm:text-sm">
                            智能对话 | 图像生成
                          </p>
                        </div>
                      </div>
                      <div className="xs:gap-1.5 flex items-center gap-1 sm:gap-2">
                        <div className="xs:w-1.5 xs:h-1.5 h-1 w-1 animate-pulse rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                        <span className="xs:text-xs xs:inline hidden text-[10px] text-gray-600 sm:text-sm">
                          在线服务中
                        </span>
                        <span className="xs:hidden text-[10px] text-gray-600">
                          在线
                        </span>
                      </div>
                    </div>

                    {/* 对话展示区 - 全面优化移动端设计 */}
                    <div className="xs:p-3 xs:mb-4 xs:min-h-[170px] mb-3 min-h-[140px] rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-2.5 transition-all duration-300 hover:shadow-md sm:mb-6 sm:min-h-[220px] sm:rounded-xl sm:p-5 md:min-h-[250px]">
                      <div className="xs:space-y-3 space-y-2.5 sm:space-y-5">
                        {/* AI消息 */}
                        <div className="xs:gap-2 animate-fade-in flex items-start gap-1.5 sm:gap-3">
                          <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-sm sm:h-8 sm:w-8">
                            <ChatBubbleLeftRightIcon
                              className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="sr-only">AI助手</span>
                          </div>
                          <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] rounded-lg rounded-tl-none bg-white p-2 sm:max-w-xs sm:rounded-xl sm:p-3.5">
                            <p className="xs:text-xs text-[10px] leading-relaxed text-gray-800 sm:text-sm">
                              您好！我可以帮您进行AI创作、图片生成等服务
                            </p>
                          </div>
                        </div>

                        {/* 用户消息 */}
                        <div className="xs:gap-2 animate-fade-in animation-delay-300 flex items-start justify-end gap-1.5 sm:gap-3">
                          <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] rounded-lg rounded-tr-none bg-blue-600 p-2 sm:max-w-xs sm:rounded-xl sm:p-3.5">
                            <p className="xs:text-xs text-[10px] leading-relaxed text-white sm:text-sm">
                              请帮我生成一张未来科技城市的图片
                            </p>
                          </div>
                          <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg bg-gray-700 shadow-sm sm:h-8 sm:w-8">
                            <UsersIcon
                              className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="sr-only">用户</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 功能展示区 - 优化移动端网格布局 */}
                    <div className="xs:gap-2 grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
                      {/* AI创作功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation rounded-md bg-gradient-to-br from-blue-500 to-blue-600 p-2 text-white transition-all duration-300 sm:rounded-lg sm:p-3.5">
                        <PencilIcon
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          AI创作
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-blue-100 opacity-80">
                          智能文案生成
                        </p>
                      </div>

                      {/* AI绘画功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation rounded-md bg-gradient-to-br from-indigo-500 to-indigo-600 p-2 text-white transition-all duration-300 sm:rounded-lg sm:p-3.5">
                        <svg
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          AI绘画
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-indigo-100 opacity-80">
                          图像智能生成
                        </p>
                      </div>

                      {/* 语音助手功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation rounded-md bg-gradient-to-br from-purple-500 to-purple-600 p-2 text-white transition-all duration-300 sm:rounded-lg sm:p-3.5">
                        <MicrophoneIcon
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          语音助手
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-purple-100 opacity-80">
                          智能语音交互
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 装饰浮动元素 - 全面优化移动端位置和大小 */}
                  <div className="xs:-top-2 xs:-right-2 xs:p-2 animate-float absolute -top-1.5 -right-1.5 transform rounded-md bg-white p-1.5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-top-3 sm:-right-3 sm:rounded-lg sm:p-3 md:-top-4 md:-right-4">
                    <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                      <svg
                        className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-blue-600 sm:h-4 sm:w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="xs:text-xs bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-[9px] font-medium whitespace-nowrap text-transparent sm:text-sm">
                        智能问答
                      </span>
                    </div>
                  </div>
                  <div className="xs:-bottom-2 xs:-left-2 xs:p-2 animate-float animation-delay-2000 absolute -bottom-1.5 -left-1.5 transform rounded-md bg-white p-1.5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-bottom-3 sm:-left-3 sm:rounded-lg sm:p-3 md:-bottom-4 md:-left-4">
                    <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                      <VideoCameraIcon className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-black sm:h-4 sm:w-4" />
                      <span className="xs:text-[10px] text-[8px] font-medium whitespace-nowrap text-black sm:text-sm">
                        知识库数据训练
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术优势展示 - 优化移动端布局 */}
            <div className="xs:mt-16 mt-12 sm:mt-20">
              <div className="xs:mb-8 mb-6 text-center">
                <h3 className="xs:text-lg xs:mb-2 mb-1.5 text-base font-semibold text-gray-900 sm:text-xl">
                  核心技术优势
                </h3>
                <p className="xs:text-sm xs:px-0 px-4 text-xs text-gray-600">
                  基于前沿AI技术，为企业提供专业可靠的智能化解决方案
                </p>
              </div>
              <div className="xs:gap-3 xs:px-0 mx-auto grid max-w-5xl grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {[
                  { name: '自然语言处理', desc: 'NLP' },
                  { name: '计算机视觉', desc: 'CV' },
                  { name: '深度学习', desc: 'DL' },
                  { name: '知识图谱', desc: 'KG' },
                  { name: '多模态融合', desc: 'MM' },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="xs:p-4 group cursor-pointer touch-manipulation rounded-xl border border-gray-200 bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                  >
                    <div className="xs:text-xs xs:mb-1 mb-0.5 font-mono text-[10px] font-semibold text-blue-600 group-hover:text-blue-700">
                      {tech.desc}
                    </div>
                    <div className="xs:text-sm text-xs font-medium text-gray-700 group-hover:text-gray-900">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 自定义CSS动画样式 - 增加移动端优化 */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              .animation-delay-2000 {
                animation-delay: 2s;
              }
              .animation-delay-4000 {
                animation-delay: 4s;
              }
              .animation-delay-300 {
                animation-delay: 0.3s;
              }
              .rotate-3d {
                transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
              }
              /* 移动端触摸优化 */
              .touch-manipulation {
                touch-action: manipulation;
              }
              /* 减少移动端动画以提升性能 */
              @media (max-width: 640px) {
                .animate-float {
                  animation-duration: 4s;
                }
                .animate-blob {
                  animation-duration: 8s;
                }
              }
              /* 超小屏幕断点 */
              @media (min-width: 475px) {
                .xs\:block { display: block; }
                .xs\:inline { display: inline; }
                .xs\:flex { display: flex; }
                .xs\:hidden { display: none; }
              }
            `,
            }}
          />
        </section>
        {/* 英雄区块结束 */}

        <Aisd />

        <AdvantagesSection />
        <DemoSection />
        <CoreFeaturesSection />
        {/* 应用场景区域 */}
        <AIscene />
        {/* 功能特色区块 */}
        <FeaturesSection />

        {/* 接入流程 Section */}
        <section className="bg-gray-50 py-24">
          <Container>
            <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
              {/* 标题区域 */}
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-2xl font-bold">接入流程</h2>
                <p className="mb-3 text-sm text-gray-600">
                  为你提供快速、便捷的接入服务
                </p>
                <Button
                  href="https://v.cnai.art"
                  target="_blank"
                  className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  立即接入
                </Button>
              </div>

              {/* 流程步骤 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* 步骤1：需求沟通 */}
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm text-blue-600">01</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">需求沟通</h3>
                  <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                  <p className="text-xs text-gray-600">
                    提供产品信息，沟通数字人类型、使用场景和交付形式
                  </p>
                </div>

                {/* 步骤2：确认合作 */}
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm text-blue-600">02</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">确认合作</h3>
                  <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                  <p className="text-xs text-gray-600">
                    通过控制台直接下单，或线下沟通商务合作
                  </p>
                </div>

                {/* 步骤3：资产制作 */}
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm text-blue-600">03</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">资产制作</h3>
                  <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                  <p className="text-xs text-gray-600">
                    采集数据，制作数字人形象和声音资产
                  </p>
                </div>

                {/* 步骤4：正式上线 */}
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm text-blue-600">04</span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-base font-bold">正式上线</h3>
                  <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                  <p className="text-xs text-gray-600">
                    数字人上线，调用接口驱动或通过平台直接使用
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 准备好开启您的AI数字人之旅了吗？ */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-[1800px] px-1 sm:px-2 lg:px-4">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white sm:rounded-xl">
                {/* 装饰元素 - 仅在大屏显示 */}
                <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="black"
                      fillOpacity="0.02"
                    />
                    <circle
                      cx="300"
                      cy="300"
                      r="150"
                      fill="black"
                      fillOpacity="0.02"
                    />
                    <circle
                      cx="250"
                      cy="150"
                      r="50"
                      fill="black"
                      fillOpacity="0.02"
                    />
                    <circle
                      cx="150"
                      cy="250"
                      r="30"
                      fill="black"
                      fillOpacity="0.02"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                  {/* 左侧内容 */}
                  <div className="relative z-10 p-6 sm:p-8 lg:col-span-3 lg:p-12">
                    <div className="max-w-xl">
                      <h3 className="mb-4 text-xl leading-tight font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                        艺创AI<span className="text-blue-600">企业知识库</span>
                        系统
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                        基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。
                        提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。
                      </p>

                      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                              高清还原
                            </h4>
                            <p className="text-xs text-gray-500 sm:text-sm">
                              100%真实感官体验
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                              专业服务
                            </h4>
                            <p className="text-xs text-gray-500 sm:text-sm">
                              7×24小时技术支持
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                              数据安全
                            </h4>
                            <p className="text-xs text-gray-500 sm:text-sm">
                              企业级安全保障
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                              持续更新
                            </h4>
                            <p className="text-xs text-gray-500 sm:text-sm">
                              定期功能迭代升级
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                          href="#demo"
                          className="w-full rounded-none bg-blue-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto sm:py-4"
                        >
                          立即体验
                        </Button>
                        <Button
                          href="https://v.cnai.art"
                          target="_blank"
                          variant="outline"
                          className="w-full rounded-none border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 sm:w-auto sm:py-4"
                        >
                          咨询价格
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 右侧功能卡片 - 在移动端显示在下方 */}
                  <div className="relative lg:col-span-2">
                    {/* 移动端显示 */}
                    <div className="p-6 lg:hidden">
                      <div className="grid grid-cols-2 gap-3">
                        {/* AI数字人 */}
                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                          <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-center text-sm font-medium text-gray-900">
                            AI知识库
                          </h4>
                          <p className="mt-1 text-center text-xs text-gray-500">
                            三版本支持
                          </p>
                        </div>

                        {/* 私有部署 */}
                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                          <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-center text-sm font-medium text-gray-900">
                            私有部署
                          </h4>
                          <p className="mt-1 text-center text-xs text-gray-500">
                            安全可控
                          </p>
                        </div>

                        {/* 专业团队 */}
                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                          <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-center text-sm font-medium text-gray-900">
                            专业团队
                          </h4>
                          <p className="mt-1 text-center text-xs text-gray-500">
                            一对一支持
                          </p>
                        </div>

                        {/* 开源方案 */}
                        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                          <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-center text-sm font-medium text-gray-900">
                            开源方案
                          </h4>
                          <p className="mt-1 text-center text-xs text-gray-500">
                            灵活定制
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 桌面端显示 */}
                    <div className="absolute inset-0 hidden lg:block">
                      <div className="flex h-full w-full items-center p-6">
                        <div className="h-full w-full bg-gray-50 p-4 shadow-lg">
                          <div className="grid h-full grid-cols-2 gap-4">
                            {/* AI数字人 */}
                            <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                              <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-lg font-medium text-gray-900">
                                AI知识库
                              </h4>
                              <p className="mt-1 text-center text-sm text-gray-500">
                                PHP/Java双版本支持
                              </p>
                            </div>

                            {/* 私有部署 */}
                            <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                              <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-lg font-medium text-gray-900">
                                私有部署
                              </h4>
                              <p className="mt-1 text-center text-sm text-gray-500">
                                安全可控的私有化部署
                              </p>
                            </div>

                            {/* 专业团队 */}
                            <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                              <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-lg font-medium text-gray-900">
                                专业团队
                              </h4>
                              <p className="mt-1 text-center text-sm text-gray-500">
                                一对一技术支持
                              </p>
                            </div>

                            {/* 开源方案 */}
                            <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                              <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-blue-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>
                              </div>
                              <h4 className="text-lg font-medium text-gray-900">
                                开源方案
                              </h4>
                              <p className="mt-1 text-center text-sm text-gray-500">
                                灵活定制，售后无忧
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
