'use client'

import { JSX, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BoltIcon,
  UserGroupIcon,
  PlayIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  VideoCameraIcon,
  PencilIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AIscene } from '@/components/ai/AIscene'
import { Menu, MenuButton } from '@headlessui/react'
import PixelBlast from '@/components/common/PixelBlast'

// 产品优势配置数据
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

// 应用场景配置数据
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

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

// Hero区域组件 - 数字人首页英雄区域
interface Feature {
  name: string
  href: string
}

interface Card {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* PixelBlast 动态背景效果 */}
      <div className="absolute inset-0 opacity-30">
        <PixelBlast
          variant="diamond"
          pixelSize={3}
          color="#4b14ff"
          patternScale={2}
          patternDensity={1}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.9}
          transparent
          edgeFade={0.25}
        />
      </div>

      {/* 背景装饰效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-[#0055ff]/8 opacity-40 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 bg-[#0055ff]/6 opacity-30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>
        <div className="absolute top-6 left-6 opacity-20 sm:top-8 sm:left-8 md:top-10 md:left-10">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/30 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区域 */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 */}
              <div className="mb-2 inline-flex items-center rounded-md border border-[#0055ff]/20 bg-[#0055ff]/10 px-3 py-1.5 text-xs font-medium text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm">
                <BoltIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                虚拟数字人
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="mb-1 block text-[#0055ff] sm:mb-2">
                  数字分身
                </span>
                <span className="text-xl leading-tight font-semibold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                  赋能企业智能化转型
                </span>
              </h1>
            </div>
            {/* 描述文本 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base lg:mx-0 dark:text-gray-400">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs font-medium text-gray-900 transition-all duration-200 hover:border-gray-300 hover:bg-gray-100 sm:px-3 sm:py-2 sm:text-sm"
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
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
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
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
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
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 opacity-50 blur-xl sm:-inset-3 md:-inset-4"></div>
            <div className="group relative rounded-xl border border-gray-200/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8 lg:p-10 dark:border-gray-700/50 dark:bg-gray-800/80">
              {/* 顶部标签区域 */}
              <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2 md:mb-10 md:gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="cursor-pointer rounded-md border border-[#0055ff]/20 bg-[#0055ff]/10 px-2 py-1.5 text-xs font-medium text-[#0055ff] transition-colors hover:bg-[#0055ff]/20 sm:px-3 sm:py-2 sm:text-sm md:px-4"
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
                    className="group/card rounded-lg border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 hover:shadow-lg sm:p-4 md:p-5 lg:p-7 dark:border-gray-600/50 dark:bg-gray-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 图标区域 */}
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-[#0055ff]/20 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 sm:mb-3 sm:h-10 sm:w-10 md:mb-5 md:h-12 md:w-12">
                      <card.icon
                        className="h-4 w-4 text-[#0055ff] transition-colors group-hover/card:text-[#0066ff] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    {/* 内容区域 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="text-xs leading-tight font-bold text-gray-900 sm:text-sm md:text-base lg:text-lg dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400">
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
        {/* 标题区域 */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-blue-600 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
            多维度产品优势，助力企业数字化升级
          </p>
        </div>
        {/* 产品优势卡片网格 */}
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-0 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
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
                {/* 内容区域 */}
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

/**
 * 演示中心组件 - 参考demo页面设计风格
 */
// 演示账号接口定义
interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// 在线演示组件
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
              AI数字人SaaS系统2.0
              <br className="hidden sm:block" />
              演示中心
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
              通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
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
              {/* 主要演示视频 */}
              <div className="bg-white p-4 shadow-lg sm:p-6">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="h-auto w-full"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      数字人管理平台
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式管理您的所有数字人资产
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

// 应用场景展示组件
function ScenariosSection(): JSX.Element {
  const [activeScenario, setActiveScenario] =
    useState<keyof typeof scenarioData>('virtualIP')

  // 场景数据配置
  const scenarioData = {
    virtualIP: {
      title: '带货视频',
      subtitle: '热门场景',
      description:
        '面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。',
      features: [
        { name: '品牌代言', desc: '提升品牌辨识度' },
        { name: '内容创作', desc: '高质量虚拟角色' },
        { name: '社交互动', desc: '增强用户体验' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d7597b2e51444a40_1697534317820.mp4',
      icon: VideoCameraIcon,
      tagText: '带货视频',
      tagDesc: '品牌营销解决方案',
    },
    digitalEmployee: {
      title: '数字员工',
      subtitle: '企业应用',
      description:
        '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
      features: [
        { name: '智能客服', desc: '7×24小时在线服务' },
        { name: '销售助手', desc: '提高转化率' },
        { name: '培训讲师', desc: '标准化培训内容' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58de8e04fa71151b_1697611541810.mp4',
      icon: UserGroupIcon,
      tagText: '数字员工',
      tagDesc: '智能业务助手',
    },
    contentCreation: {
      title: '内容创作',
      subtitle: '创意应用',
      description:
        '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
      features: [
        { name: '视频脚本', desc: '专业视频脚本' },
        { name: '营销文案', desc: '提高转化率' },
        { name: '多语言翻译', desc: '拓展全球市场' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/77eb68b8aabcb8aa_1697534305029.mp4',
      icon: PencilIcon,
      tagText: '内容创作',
      tagDesc: '智能创作助手',
    },
    virtualLive: {
      title: '虚拟直播',
      subtitle: '直播应用',
      description:
        '提供24小时不间断的虚拟主播直播服务，降低直播成本，提升直播效果和用户粘性。',
      features: [
        { name: '24小时直播', desc: '全天候在线' },
        { name: '互动问答', desc: '智能回复观众' },
        { name: '商品推荐', desc: '精准营销' },
      ],
      videoUrl:
        'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4',
      icon: TvIcon,
      tagText: '虚拟直播',
      tagDesc: '24小时在线主播',
    },
  }

  const currentScenario = scenarioData[activeScenario]

  return (
    <section className="bg-white py-20">
      <Container>
        {/* 标题区域 - 参考demo页面设计 */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-sm font-medium text-blue-700">场景应用</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            应用场景
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航 - 现代化简约风格 - 优化移动端滚动 */}
        <div className="mb-16 flex justify-center">
          <div className="scrollbar-hide inline-flex max-w-full overflow-x-auto bg-gray-50 p-1.5 shadow-sm">
            <button
              className={`relative min-w-[100px] px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'virtualIP'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('virtualIP')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <VideoCameraIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                带货视频
              </span>
              {activeScenario === 'virtualIP' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'digitalEmployee'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('digitalEmployee')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <UserGroupIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                数字员工
              </span>
              {activeScenario === 'digitalEmployee' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'contentCreation'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('contentCreation')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <PencilIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                内容创作
              </span>
              {activeScenario === 'contentCreation' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'virtualLive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('virtualLive')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <TvIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                虚拟直播
              </span>
              {activeScenario === 'virtualLive' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
          </div>
        </div>

        {/* 场景内容 - 参考demo页面的左右布局 */}
        <div className="grid items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* 左侧内容 */}
          <div
            className={`space-y-8 ${
              activeScenario === 'digitalEmployee' ? 'order-2 lg:order-1' : ''
            }`}
          >
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1">
                <span className="text-xs font-medium text-blue-600">
                  {currentScenario.subtitle}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">
                {currentScenario.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {currentScenario.description}
              </p>
            </div>

            {/* 功能特性 - 简洁样式 */}
            <div className="space-y-3">
              {currentScenario.features.map(
                (feature: { name: string; desc: string }, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {feature.name}
                      </span>
                      <span className="ml-2 text-gray-500">
                        - {feature.desc}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* 按钮组 - 优化移动端按钮大小 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="flex h-auto min-h-[44px] items-center justify-center rounded-none bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-blue-700 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                onClick={() => (window.location.href = '/demo')}
              >
                <PlayIcon className="mr-2 h-4 w-4" />
                立即试用
              </Button>
              <Button
                variant="outline"
                className="flex h-auto min-h-[44px] items-center justify-center rounded-none border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                href="#"
              >
                <UserGroupIcon className="mr-2 h-4 w-4" />
                购买授权
              </Button>
            </div>
          </div>

          {/* 右侧视频 */}
          <div
            className={`relative ${
              activeScenario === 'digitalEmployee' ? 'order-1 lg:order-2' : ''
            }`}
          >
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:rounded-3xl sm:p-8">
              <video
                src={currentScenario.videoUrl}
                className="w-full rounded-2xl shadow-lg"
                preload="metadata"
                playsInline
                controls
                autoPlay
                muted
                loop
              >
                您的浏览器不支持 video 标签。
              </video>
            </div>
            {/* 悬浮标签 */}
            <div
              className={`absolute rounded-2xl border border-gray-100 bg-white p-4 shadow-lg ${
                activeScenario === 'digitalEmployee'
                  ? '-top-4 -left-4'
                  : '-top-4 -right-4'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-blue-50">
                  <currentScenario.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {currentScenario.tagText}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentScenario.tagDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 核心功能数据接口定义
 * @interface CoreFeature
 * @property {string} name - 功能名称
 * @property {string} description - 功能描述
 * @property {React.ComponentType} icon - 功能图标组件
 * @property {string} image - 功能展示图片
 * @property {string} [videoUrl] - 可选的视频地址
 * @property {Array} stats - 功能统计数据
 */
interface CoreFeature {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  image: string
  videoUrl?: string
  stats: {
    label: string
    value: string
  }[]
}

/**
 * 核心功能展示组件 - 简洁版设计
 * 展示数字人产品的核心功能和特性，采用简洁清晰的设计风格
 * 特点：简洁布局、清晰层次、易于阅读
 */
function CoreFeaturesSection(): JSX.Element {
  // 核心功能数据配置
  const coreFeatures: CoreFeature[] = [
    {
      name: '数字分身',
      description:
        '轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！',
      icon: FaceSmileIcon,
      image: '/images/product/human1.png',
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
      description:
        '基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。',
      icon: UserGroupIcon,
      image: '/images/product/human2.png',
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
      image: '/images/product/saas.svg',
      videoUrl:
        'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4',
      stats: [
        { label: '一键生成', value: '智能快速生成视频' },
        { label: '场景丰富', value: '多样化视频模板' },
        { label: '高效营销', value: '提升内容转化率' },
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
            强大的AI技术能力，为您提供全方位的数字人解决方案
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
                      <BoltIcon className="h-5 w-5" />
                      立即体验
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <CreditCardIcon className="h-5 w-5" />
                      购买授权
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <FaceSmileIcon className="h-5 w-5" />
                      体验Demo
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      联系客服
                    </Button>
                  </div>
                </div>

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {feature.videoUrl ? (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <video
                          src={feature.videoUrl}
                          controls
                          autoPlay
                          muted
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放。
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
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

// 数字人页面主组件
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
        <AIscene />

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
                  className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
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
                        准备好开启您的
                        <span className="text-blue-600">AI数字人之旅</span>
                        了吗？
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                        专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点。版本免费迭代升级+售后技术支撑，让你无后顾之忧！
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
                        <Button className="w-full rounded-none bg-blue-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto sm:py-4">
                          立即体验
                        </Button>
                        <Button
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
                            AI数字人
                          </h4>
                          <p className="mt-1 text-center text-xs text-gray-500">
                            双版本支持
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
                                AI数字人
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
      </main>
      <Footer />
    </>
  )
}
