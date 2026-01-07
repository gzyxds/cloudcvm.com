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
  title: '艺创AI_AI系统源码_AI论文写作系统_AI论文生成器',
  description:
    '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: [
    'AI论文写作系统,AI论文生成器,论文写作工具,智能写作系统,AI写作助手',
  ],
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
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">应用场景</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            多场景应用，助力学术写作与研究工作
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - AI智能对话 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI智能对话</h3>
                <div className="font-medium text-blue-600">秒级回复</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              对接GPT接口，AI秒级回复，提供精准服务
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自然语言深度理解，精准识别用户意图
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  秒级响应，提升服务体验
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  多场景适配，满足多行业需求
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - AI智能创作 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI智能创作</h3>
                <div className="font-medium text-blue-600">深度创作</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              多模型支持，满足多样化创作需求
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  多模型支持，满足多样化创作需求
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  技能模型可自定义，分类越细，回答越精准
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  深度创作，提升内容质量与创新力
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 学生作业 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <PencilIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">学生作业</h3>
                <div className="font-medium text-blue-600">学习辅助</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              学生可以利用AI写作系统来获得关于特定主题的论文建议、参考文献和写作指导，提高写作能力和学术水平
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  提供论文建议和写作指导
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  智能推荐参考文献，节省查找时间
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  提升写作能力和学术水平
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 营销功能 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">营销功能</h3>
                <div className="font-medium text-blue-600">商业变现</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              VIP会员、优惠券等丰富营销工具
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  VIP会员期间不限次数，畅享全部功能
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  系统自动赠送优惠券，提升用户复购率
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  多种套餐权益，满足不同用户需求
                </span>
              </li>
            </ul>
          </div>
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
              艺创AI-论文创作
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
                href="https://paper.gmlart.cn/"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="h-auto min-h-[44px] rounded-none border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="https://paper.gmlart.cn/"
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
                  src="/images/product/论文创作.png"
                  alt="论文创作演示"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      论文创作平台
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式论文创作与智能对话体验
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
      name: '期刊论文写作',
      description:
        '研究人员可以使用AI写作系统来生成论文的初稿或补充材料，显著提升研究效率，加速学术成果产出。',
      icon: PencilIcon,
      image: '/images/product/期刊论文.png',
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
      image: '/images/product/期刊论文.png',
      stats: [
        { label: '简化表达', value: '化繁为简解释' },
        { label: '生动示例', value: '趣味类比说明' },
        { label: '智能配图', value: '图文结合理解' },
      ],
    },
    {
      name: '实时通知',
      description:
        '以走马灯形式展示系统重要通知、用户动态和更新信息，让用户及时了解平台动态。',
      icon: MegaphoneIcon,
      image: '/images/product/实时通知.png',
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
      image: '/images/product/论文创作.png',
      stats: [
        { label: '多端适配', value: '手机、平板、电脑全适配' },
        { label: '响应式设计', value: '界面布局自动调整' },
        { label: '统一管理', value: '一套后台多端应用' },
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
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
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
      <main>
        {/* 英雄区块开始 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 pb-16">
          {/* 现代化背景装饰 */}
          <div className="absolute inset-0">
            {/* 几何装饰元素 */}
            <div className="absolute top-10 left-10 h-24 w-24 rounded-full bg-blue-100/40 blur-2xl"></div>
            <div className="absolute right-20 bottom-10 h-32 w-32 rounded-full bg-indigo-100/30 blur-3xl"></div>
            {/* 网格背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
          </div>

          <Container className="relative z-10">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* 左侧内容 - 优化布局和层次 */}
              <div className="w-full text-center lg:w-1/2 lg:text-left">
                {/* 主标题 - 增强视觉层次 */}
                <h1 className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-gray-900 lg:text-6xl">
                  <span className="relative inline-block">
                    <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500"></span>
                  </span>
                  <br />
                  <span className="text-blue-600">
                    艺创AI
                  </span>
                  <br />
                  <span className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    智能论文创作系统
                  </span>
                </h1>

                {/* 副标题 - 优化描述内容 */}
                <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed font-medium text-gray-600 lg:mx-0">
                  集成最新GPT-4、Claude、文心一言等顶级AI模型，
                  <span className="font-semibold text-blue-600">
                    打造一站式论文创作平台
                  </span>
                </p>

                {/* 核心特性标签 */}
                <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    智能写作
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    文献检索
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    格式排版
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    查重降重
                  </span>
                </div>

                {/* 数据指标 - 重新设计布局 */}
                <div className="mb-8 grid grid-cols-3 gap-4">
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          1000
                        </span>
                        <span className="ml-1 text-sm font-semibold text-blue-600">
                          +
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        企业用户
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          50
                        </span>
                        <span className="ml-1 text-sm font-semibold text-blue-600">
                          万+
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        AI创作
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          99.9
                        </span>
                        <span className="ml-1 text-sm font-semibold text-blue-600">
                          %
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        系统稳定
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 按钮组 - 现代化设计 - 紧凑样式 */}
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button
                    href="https://paper.gmlart.cn/"
                    className="h-auto rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    <PencilIcon className="mr-2 h-4 w-4" />
                    立即开始创作
                  </Button>
                  <Button
                    href="https://paper.gmlart.cn/"
                    target="_blank"
                    variant="outline"
                    className="h-auto rounded-xl border-2 border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <PlayIcon className="mr-2 h-4 w-4" />
                    观看演示
                  </Button>
                </div>
              </div>

              {/* 右侧图形 - 现代化展示 - 紧凑布局 */}
              <div className="relative w-full lg:w-1/2">
                <div className="relative">
                  {/* 主图 - 现代化设计 */}
                  <div className="relative mx-auto max-w-md">
                    {/* 模拟AI创作界面 */}
                    <div className="w-full rounded-2xl border border-gray-100/50 bg-white/90 p-6 backdrop-blur-sm">
                      {/* 模拟标题栏 - 现代化设计 */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
                            <ChatBubbleLeftRightIcon className="h-3 w-3 text-blue-600" />
                          </div>
                          <div className="h-2 w-20 rounded-full bg-gradient-to-r from-blue-100 to-blue-200"></div>
                        </div>
                      </div>

                      {/* 模拟AI对话内容区 */}
                      <div className="space-y-4">
                        {/* 对话标题 */}
                        <div className="h-8 w-4/5 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100"></div>

                        {/* 对话内容 */}
                        <div className="space-y-2">
                          <div className="h-2 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-2 w-5/6 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-2 w-4/6 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                        </div>

                        {/* 功能区域 */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="flex h-20 items-center justify-center rounded-lg border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100">
                            <div className="h-6 w-6 rounded bg-blue-200"></div>
                          </div>
                          <div className="flex h-20 items-center justify-center rounded-lg border border-purple-200/50 bg-gradient-to-br from-purple-50 to-purple-100">
                            <div className="h-6 w-6 rounded bg-purple-200"></div>
                          </div>
                        </div>

                        {/* 工具栏区域 */}
                        <div className="space-y-1.5 border-t border-gray-100 pt-3">
                          <div className="h-1.5 w-3/4 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-1.5 w-2/3 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                        </div>
                      </div>
                    </div>

                    {/* 功能标签 - 现代化设计 - 紧凑样式 */}
                    <div className="absolute -top-6 -right-6 flex transform items-center rounded-xl border border-blue-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                        <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          智能对话
                        </p>
                        <p className="text-xs font-medium text-blue-600">
                          AI助手交互
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 flex transform items-center rounded-xl border border-green-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          论文创作
                        </p>
                        <p className="text-xs font-medium text-green-600">
                          AI原创论文写作
                        </p>
                      </div>
                    </div>

                    {/* 创作工具标签 */}
                    <div className="absolute top-1/2 -right-4 flex translate-x-1/2 -translate-y-1/2 transform items-center rounded-xl border border-purple-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                        <PencilIcon className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          智能创作
                        </p>
                      </div>
                    </div>

                    {/* 装饰性几何元素 */}
                    <div className="absolute -top-3 -left-3 h-6 w-6 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-20"></div>
                    <div className="absolute -right-3 -bottom-3 h-4 w-4 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-purple-500 opacity-20 delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部技术标签 - 现代化设计 - 紧凑布局 */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">自然语言处理</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">学术写作</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">文献分析</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">智能排版</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">查重降重</span>
              </div>
            </div>
          </Container>
        </section>

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
          </Container>
        </section>

        {/* 准备好开启您的AI数字人之旅了吗？ */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>
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
                      艺创AI<span className="text-blue-600">论文创作</span>
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
                        href="/demo"
                        className="w-full rounded-none bg-blue-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto sm:py-4"
                      >
                        立即体验
                      </Button>
                      <Button
                        href="/demo"
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
          </Container>
        </section>
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
