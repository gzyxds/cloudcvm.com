import type { JSX } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  FaceSmileIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

/**
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">{feature.name}</h3>
                  </div>

                  <p className="mb-8 text-lg leading-8 text-neutral-600">{feature.description}</p>

                  {/* 特性列表 */}
                  <div className="mb-8 space-y-4">
                    {feature.stats.map((stat) => (
                      <div key={stat.label} className="flex items-start space-x-3">
                        <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500"></div>
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
                      <div className="aspect-video overflow-hidden rounded-lg bg-neutral-100">
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
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg bg-neutral-100">
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

// 数字人页面主组件

export default CoreFeaturesSection
