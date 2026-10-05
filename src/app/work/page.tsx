import type { JSX } from 'react'
import { type Metadata } from 'next'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  PencilIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  UsersIcon,
  MicrophoneIcon,
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
  title: { absolute: '艺创AI_全能AI知识库系统_数字人解决方案_企业级AI平台' },
  description:
    '艺创AI全能AI知识库系统是一款基于PHP和Java双语言开发的AI知识库系统,支持私有化部署,提供知识库训练、智能问答、数字人等多种功能,是企业打造数字化转型的理想选择',
  keywords: [
    '全能AI知识库系统',
    'AI数字人系统',
    '企业AI解决方案',
    '智能知识库',
    '数字人克隆',
    'AI系统源码',
  ],
}

// ==================== 页面数据（区块模板由 sections/ai 共享组件承载） ====================

const featureCards: AiFeatureCard[] = [
  {
    id: 1,
    name: '机器人管理',
    description:
      '创建机器人，可单独创建和设置私有机器人。发布机器人，支持发布多种渠道，如网页、JS嵌入、API接口、微信公众号等等。',
    features: ['支持私有机器人独立配置', '多渠道发布：网页、JS嵌入、API、公众号等'],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: '知识库数据训练',
    description:
      '通过数据训练，用户在前台通过聊天对话模式快速查阅各种内部资料和文档。使用机器学习技术，让系统自动学习并优化知识库中的知识，提高知识库的准确性和智能性。',
    features: ['对话式查阅企业内部资料', '机器学习自动优化知识库'],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: 'AI数字人演示',
    description:
      '结合语音合成、语音识别、语义理解、图像处理、机器翻译、虚拟形象驱动等多项AI核心技术，实现信息播报、互动交流、业务咨询、服务导览等多项功能，满足新闻、政企、文旅、金融等多场景需求。',
    features: ['多模态AI能力融合', '适配多行业多场景应用'],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: 'AI大语言模型',
    description:
      '支持GPT3.5、GPT4.0、api2d3.5、api2d4.0、ChatGLM（清华）等大语言模型，满足多样化智能对话和内容生成需求。',
    features: ['多模型灵活接入', '支持主流国产与国际大模型'],
    icon: CpuChipIcon,
  },
]

const demoAccounts: AiDemoAccount[] = [
  {
    title: 'PC端后台',
    url: 'https://www.cnai.art',
    username: '自行注册',
    password: '自行注册',
    description: '完整的数字人管理后台',
  },
  {
    title: '体验后台',
    url: 'https://ai-demo.chatmoney.cn/admin',
    username: 'admin',
    password: '123456',
    description: '代理商专用管理系统',
  },
  {
    title: '移动端',
    url: 'https://www.cnai.art/mobile',
    username: '自行注册',
    password: '自行注册',
    description: 'SaaS服务管理平台',
  },
]

const coreFeatures: AiCoreFeature[] = [
  {
    name: '智能文案创作',
    description:
      '智能文案创作助手！基于AI大语言模型，一键生成爆款短视频剧本、直播话术和图文内容，让创作更轻松高效！',
    icon: PencilIcon,
    image: '/images/product/Sound.webp',
    stats: [
      { label: '短视频剧本', value: '智能生成爆款视频文案' },
      { label: '平台适配', value: '小红书/抖音等平台风格' },
      { label: '灵感洞察', value: '全网热点智能推荐' },
    ],
  },
  {
    name: '营销获客',
    description:
      '为短视频创作者及抖音经营者提供智能灵感挖掘、智能剧本创作、智能视频生成、智能客服回复等AI工具，增强曝光及品牌影响力，全面提升获客转化率。',
    icon: SpeakerWaveIcon,
    image: '/images/product/Marketing.webp',
    stats: [
      { label: '灵感挖掘', value: '智能剧本创作' },
      { label: '创意文案', value: '营销文案生成' },
      { label: '获客转化', value: '提升营销效果' },
    ],
  },
  {
    name: '智能文案',
    description:
      '为内容创作者提供全网灵感洞察、智能文案生成服务，结合AI大语言模型和创意写作能力，一键生成爆款内容。',
    icon: PencilIcon,
    videoUrl:
      'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-writing.37942fd6.mp4',
    stats: [
      { label: '短视频剧本', value: '智能生成爆款视频文案和直播话术' },
      { label: '平台适配', value: '小红书/抖音等平台风格文案生成' },
      { label: '灵感洞察', value: '全网热点分析，智能创意推荐' },
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
function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
      {/* 几何背景装饰 - 响应式尺寸优化 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="xs:-top-32 xs:-right-32 xs:w-60 xs:h-60 animate-blob absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-400 opacity-20 mix-blend-multiply blur-xl filter sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
        <div className="xs:-bottom-32 xs:-left-32 xs:w-60 xs:h-60 animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
        <div className="xs:w-60 xs:h-60 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-brand-400 opacity-20 mix-blend-multiply blur-xl filter sm:h-80 sm:w-80"></div>
      </div>

      {/* 动态渐变背景 - 光效和网格 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--color-brand-500)_10%,transparent),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_25%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_26%,transparent_27%,transparent_74%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_75%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_76%,transparent_77%,transparent),linear-gradient(color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_24%,transparent_25%,transparent_26%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_27%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_74%,transparent_75%,transparent_76%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_77%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent))] bg-[length:75px_75px]"></div>
      </div>

      {/* 响应式容器 - 优化超小屏幕适配 */}
      <div className="xs:px-4 xs:pt-20 xs:pb-16 relative z-10 mx-auto max-w-[1800px] px-3 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28">
        {/* 状态标签 - 响应式间距和字体 */}
        <div className="xs:mb-6 mb-4 flex justify-center sm:mb-8">
          <div className="xs:gap-2 xs:px-4 xs:py-2 inline-flex items-center gap-1.5 border border-brand-100 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
            <div className="xs:w-2 xs:h-2 h-1.5 w-1.5 animate-pulse bg-success"></div>
            <span className="xs:text-sm text-xs font-medium text-neutral-700">
              AI服务正常运行中
            </span>
          </div>
        </div>

        <div className="xs:gap-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* 左侧内容区 - 优化移动端间距 */}
          <div className="xs:space-y-6 space-y-4 text-center sm:space-y-8 lg:text-left">
            {/* 主标题 - 增强响应式字体大小 */}
            <div className="xs:space-y-4 space-y-3 sm:space-y-6">
              <h1 className="xs:text-3xl text-2xl leading-tight font-bold text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">企业级AI</span>
                <span className="block text-brand-500">智能知识库</span>
                <span className="block">企业AI解决方案</span>
              </h1>
              <p className="xs:text-base xs:px-0 mx-auto max-w-2xl px-2 text-sm leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 lg:text-xl">
                融合前沿AI技术与企业实际需求，提供智能问答、知识管理、数字人定制等一站式服务，助力企业数字化转型升级
              </p>
            </div>

            {/* 核心功能标签 - 优化移动端显示 */}
            <div className="xs:gap-3 xs:px-0 mx-auto flex max-w-2xl flex-wrap justify-center gap-2 px-3 sm:gap-4 lg:mx-0 lg:justify-start">
              {[
                {
                  name: '智能问答',
                  time: '24/7',
                  icon: ChatBubbleLeftRightIcon,
                },
                { name: '数字人定制', time: '5min', icon: UsersIcon },
                { name: '语音合成', time: '<3s', icon: MicrophoneIcon },
                { name: '知识训练', time: '1h', icon: AcademicCapIcon },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group xs:gap-3 xs:px-4 xs:py-3 inline-flex touch-manipulation items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <Icon className="xs:h-5 xs:w-5 h-4 w-4 text-neutral-600 transition-colors group-hover:text-brand-500" />
                    <span className="xs:text-base text-sm font-medium text-neutral-800">
                      {feature.name}
                    </span>
                    <span className="xs:px-2.5 xs:text-sm rounded-full bg-brand-50 px-2 py-0.5 font-mono text-xs text-brand-500">
                      {feature.time}
                    </span>
                  </div>
                )
              })}
            </div>
            {/* 行动按钮 - 增强移动端适配 */}
            <div className="xs:flex-row xs:gap-3 xs:px-0 flex flex-col justify-center gap-2.5 px-4 sm:gap-4 lg:justify-start">
              <Button
                href="#demo"
                variant="solid"
                color="blue"
                className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation rounded-xl px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
              >
                立即体验
              </Button>
              <Button
                href="https://v.cnai.art"
                target="_blank"
                variant="outline"
                color="slate"
                className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
              >
                联系客服
              </Button>
            </div>

            {/* 实时数据展示 - 优化移动端布局 */}
            <div className="xs:gap-6 flex justify-center gap-4 sm:gap-8 lg:justify-start">
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  100万+
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">企业用户</div>
              </div>
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  99.9%
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">可用性</div>
              </div>
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  &lt;3秒
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">响应</div>
              </div>
            </div>
          </div>

          {/* 右侧展示区 - 增强移动端适配 */}
          <div className="xs:mt-8 xs:mx-4 relative mx-2 mt-6 sm:mx-0 lg:mt-0">
            {/* 主展示容器 - 优化响应式尺寸 */}
            <div className="relative">
              {/* 展示卡片 - 全面优化移动端高度和间距 */}
              <div className="xs:p-4 xs:min-h-[380px] relative min-h-[320px] border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-3 transition-all duration-300 sm:min-h-[460px] sm:p-6 md:min-h-[500px]">
                {/* 顶部状态栏 - 增强移动端布局 */}
                <div className="xs:mb-4 mb-3 flex items-center justify-between sm:mb-6">
                  <div className="xs:gap-2 flex items-center gap-1.5 sm:gap-3">
                    <div className="xs:w-7 xs:h-7 flex h-6 w-6 items-center justify-center bg-brand-500 sm:h-9 sm:w-9">
                      <ChatBubbleLeftRightIcon className="xs:w-4 xs:h-4 h-3 w-3 text-white sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="xs:text-sm text-xs font-bold text-neutral-900 sm:text-base">
                        企业AI助手
                      </h3>
                      <p className="xs:text-xs text-[10px] text-neutral-500 sm:text-sm">
                        智能知识库 · 数字人服务
                      </p>
                    </div>
                  </div>
                  <div className="xs:gap-1.5 flex items-center gap-1 sm:gap-2">
                    <div className="xs:w-1.5 xs:h-1.5 h-1 w-1 animate-pulse bg-success sm:h-2 sm:w-2"></div>
                    <span className="xs:text-xs xs:inline hidden text-[10px] text-neutral-600 sm:text-sm">
                      在线服务中
                    </span>
                    <span className="xs:hidden text-[10px] text-neutral-600">在线</span>
                  </div>
                </div>

                {/* 对话展示区 - 全面优化移动端设计 */}
                <div className="xs:p-3 xs:mb-4 xs:min-h-[170px] mb-3 min-h-[140px] border border-brand-100 bg-gradient-to-br from-brand-50 to-brand-50 p-2.5 transition-all duration-300 sm:mb-6 sm:min-h-[220px] sm:p-5 md:min-h-[250px]">
                  <div className="xs:space-y-3 space-y-2.5 sm:space-y-5">
                    {/* AI消息 */}
                    <div className="xs:gap-2 flex animate-fade-in items-start gap-1.5 sm:gap-3">
                      <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-brand-600 bg-brand-500 sm:h-8 sm:w-8">
                        <ChatBubbleLeftRightIcon
                          className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                          aria-hidden="true"
                        />
                        <span className="sr-only">AI助手</span>
                      </div>
                      <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-neutral-200 bg-white p-2 sm:max-w-xs sm:p-3.5">
                        <p className="xs:text-xs text-[10px] leading-relaxed text-neutral-800 sm:text-sm">
                          您好！我是您的专属AI助手，可以为您提供智能问答、知识检索和数字人定制服务
                        </p>
                      </div>
                    </div>

                    {/* 用户消息 */}
                    <div className="xs:gap-2 animation-delay-300 flex animate-fade-in items-start justify-end gap-1.5 sm:gap-3">
                      <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-brand-600 bg-brand-500 p-2 sm:max-w-xs sm:p-3.5">
                        <p className="xs:text-xs text-[10px] leading-relaxed text-white sm:text-sm">
                          我需要为公司培训部门定制一个专业的数字人讲师
                        </p>
                      </div>
                      <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-neutral-800 bg-neutral-700 sm:h-8 sm:w-8">
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
                  {/* 知识库功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-brand-600 bg-gradient-to-br from-brand-500 to-brand-500 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <PencilIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      知识库
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-brand-100 opacity-80">
                      智能问答系统
                    </p>
                  </div>

                  {/* 数字人功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-brand-700 bg-gradient-to-br from-brand-500 to-brand-600 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <VideoCameraIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      数字人
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-brand-100 opacity-80">
                      虚拟形象生成
                    </p>
                  </div>

                  {/* 语音合成功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-purple-500 bg-gradient-to-br from-purple-500 to-purple-400 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <MicrophoneIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      语音合成
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-purple-100 opacity-80">
                      AI声音克隆
                    </p>
                  </div>
                </div>
              </div>

              {/* 装饰浮动元素 - 全面优化移动端位置和大小 */}
              <div className="xs:-top-2 xs:-right-2 xs:p-2 absolute -top-1.5 -right-1.5 transform animate-float border border-neutral-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-top-3 sm:-right-3 sm:p-3 md:-top-4 md:-right-4">
                <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                  <svg
                    className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-brand-500 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="xs:text-xs bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-[9px] font-medium whitespace-nowrap text-transparent sm:text-sm">
                    智能问答
                  </span>
                </div>
              </div>
              <div className="xs:-bottom-2 xs:-left-2 xs:p-2 animation-delay-2000 absolute -bottom-1.5 -left-1.5 transform animate-float border border-neutral-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-bottom-3 sm:-left-3 sm:p-3 md:-bottom-4 md:-left-4">
                <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                  <VideoCameraIcon className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-neutral-950 sm:h-4 sm:w-4" />
                  <span className="xs:text-[10px] text-[8px] font-medium whitespace-nowrap text-neutral-950 sm:text-sm">
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
            <h3 className="xs:text-lg xs:mb-2 mb-1.5 text-base font-semibold text-neutral-900 sm:text-xl">
              核心技术优势
            </h3>
            <p className="xs:text-sm xs:px-0 px-4 text-xs text-neutral-600">
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
                className="xs:p-4 group cursor-pointer touch-manipulation border border-neutral-200 bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/50"
              >
                <div className="xs:text-xs xs:mb-1 mb-0.5 font-mono text-[10px] font-semibold text-brand-500 group-hover:text-brand-600">
                  {tech.desc}
                </div>
                <div className="xs:text-sm text-xs font-medium text-neutral-700 group-hover:text-neutral-900">
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
            企业级智能客服解决方案，助力企业提升服务效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {[
            {
              title: '快速部署',
              description:
                '企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口，快速训练专属客服，灵活集成部署，24小时在线服务',
              stats: '5分钟',
              unit: '部署时间',
            },
            {
              title: '企业知识库',
              description:
                '企业可以上传产品文档、合同内容等信息，完成训练后，仅限内部员工访问使用，多类型文档支持，内部安全访问，高效信息检索',
              stats: '100%',
              unit: '安全可控',
            },
            {
              title: '专家顾问助理',
              description:
                '基于先进AI模型，提供专业的顾问咨询服务，快速响应各类专业咨询需求，领先研究模型，98.5%准确率，500ms响应时间',
              stats: 'MOS4.0',
              unit: '服务评分',
            },
            {
              title: '数据训练',
              description:
                '支持多种类型知识库训练，可灵活配置访问权限，实现知识共享与管理，多类型知识库，灵活权限配置，自动优化内容',
              stats: '24/7',
              unit: '持续优化',
            },
          ].map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800"
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
 * 艺创AI 企业知识库页面（Server Component）
 *
 * 2026-10-05 巨型页治理：共享区块统一调用 sections/ai 模板
 * （Features/Demo/CoreFeatures/Workflow/Cta），页面专属的 Hero 与
 * 产品优势保留在本文件，区块顺序与视觉不变。
 */
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-4 sm:pt-0">
        <HeroSection />
        <AiSolutionSection />
        <AdvantagesSection />
        <AiDemoSection
          accounts={demoAccounts}
          title="全能知识库PHP&Java"
          description="通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。"
          image={{ src: '/images/product/work.webp', alt: '工作演示' }}
          imageCaption={{ title: '数字人管理平台', desc: '一站式管理您的所有数字人资产' }}
          applyHref="#"
          contactHref="#"
          imageCardClassName="border border-neutral-200 bg-white p-4 sm:p-6"
        />
        <AiCoreFeaturesSection features={coreFeatures} />
        <AiScene />
        <AiFeaturesSection
          cards={featureCards}
          title="核心功能特色"
          description="全面的AI解决方案，为您的业务提供强大的智能化支持"
        />
        <AiWorkflowSection />
        <AiCtaSection
          title={
            <>
              艺创AI<span className="text-brand-500">企业知识库</span>
              系统
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
