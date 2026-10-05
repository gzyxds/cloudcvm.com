import type { JSX } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  PencilIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

/** 核心功能展示区块（2026-10-05 自 page.tsx 拆分） */
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
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
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
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
                    <div className="flex h-10 w-10 items-center justify-center bg-brand-500">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{feature.name}</h3>
                  </div>

                  <p className="mb-8 text-lg leading-8 text-neutral-600">{feature.description}</p>

                  {/* 特性列表 */}
                  <div className="mb-8 space-y-4">
                    {feature.stats.map((stat) => (
                      <div key={stat.label} className="flex items-start space-x-3">
                        <div className="mt-3 h-2 w-2 flex-shrink-0 bg-brand-500"></div>
                        <div>
                          <dt className="font-semibold text-neutral-900">{stat.label}</dt>
                          <dd className="text-neutral-600">{stat.value}</dd>
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
                    {feature.videoUrl ? (
                      <div className="aspect-video overflow-hidden bg-neutral-100">
                        {/* 手动播放（controls）：autoPlay/muted 是为自动播放准备的，移除后由用户决定播放；
                            有 poster 时 preload="none"，点击播放前完全不下载视频字节 */}
                        <video
                          src={feature.videoUrl}
                          controls
                          preload="none"
                          poster={feature.image}
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放。
                        </video>
                      </div>
                    ) : feature.image ? (
                      <div className="aspect-video overflow-hidden bg-neutral-100">
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video items-center justify-center overflow-hidden bg-neutral-100">
                        <div className="text-center text-neutral-500">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200">
                            <feature.icon className="h-8 w-8 text-neutral-400" />
                          </div>
                          <p className="text-sm">功能演示图片</p>
                        </div>
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
            className="inline-flex items-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default CoreFeaturesSection
