'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudArrowUpIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  FolderIcon,
  ForwardIcon,
  GiftIcon,
  KeyIcon,
  LockClosedIcon,
  MegaphoneIcon,
  PhoneIcon,
  PlayCircleIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShareIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
  StarIcon,
  TagIcon,
  TrophyIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * 页面导航链接接口
 */
interface SectionLink {
  id: string
  label: string
}

/**
 * 页面导航链接数据
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'advantages', label: '产品优势' },
  { id: 'features', label: '系统功能' },
  { id: 'demo', label: '产品演示' },
  { id: 'faq', label: '常见问题' },
]

/**
 * 产品优势项接口定义
 */
interface AdvantageItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * 产品演示项接口定义
 */
interface DemoItem {
  title: string
  description: string
  image: string
  rating: number
}

/**
 * 系统功能项接口定义
 */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * FAQ项接口定义
 */
interface FAQItem {
  question: string
  answer: string
}

/**
 * 页面英雄区域组件
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[460px] w-full items-center overflow-hidden bg-slate-50 pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/video.png')] bg-cover bg-center bg-no-repeat opacity-20" />

      <Container className="relative z-10 w-full py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl font-bold tracking-tight text-[#0055ff] sm:text-4xl lg:text-5xl lg:leading-tight">
            国内外短剧平台
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            全新升级，精心打造的旗舰版短剧系统。支持完善的投流功能、广告回传功能、自定义充值套餐等多维度营销数据，助力您的短剧事业腾飞。
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:mt-8">
            <div className="flex items-center text-slate-600">
              <CheckCircleIcon
                className="mr-2 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              750+上线案例
            </div>
            <div className="flex items-center text-slate-600">
              <CheckCircleIcon
                className="mr-2 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              开源可二开
            </div>
            <div className="flex items-center text-slate-600">
              <CheckCircleIcon
                className="mr-2 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              多端同步
            </div>
            <div className="flex items-center text-slate-600">
              <CheckCircleIcon
                className="mr-2 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              广告回传
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4 sm:flex-wrap">
            <Button href="#demo" variant="erlieSolid" color="blue" className="rounded-lg w-full sm:w-auto">
              <PlayCircleIcon
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              查看演示
            </Button>
            <Button href="#advantages" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              了解更多
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 产品优势区域组件 - 展示短剧系统的核心优势
 * 采用卡片式网格布局，突出产品特色
 */
function AdvantagesSection() {
  const advantages: AdvantageItem[] = [
    {
      icon: TrophyIcon,
      title: '明星产品',
      description: '拥有750+上线案例，稳定运营，案例真实可靠可联系客服查询',
      color: 'text-yellow-600',
    },
    {
      icon: CodeBracketIcon,
      title: '开源可二开',
      description:
        '源代码开源可二开，稳定迭代更新，进行系统化升级，带给每一位用户更好的开发体验。',
      color: 'text-green-600',
    },
    {
      icon: CurrencyDollarIcon,
      title: '营销充值体系完善',
      description:
        '拥有积分、VIP、分销、媒资、裂变等多种功能，支持矩阵式玩法。',
      color: 'text-yellow-600',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: '多端同步',
      description:
        '具备微信小程序、微信公众号、APP、抖音小程序等多端应用，可根据自身发展需求自由选择。',
      color: 'text-blue-600',
    },
    {
      icon: SpeakerWaveIcon,
      title: '广告回传',
      description:
        '提供巨量、微信、快手等平台的广告数据回传功能，优化投放效果。',
      color: 'text-red-600',
    },
    {
      icon: ChartBarIcon,
      title: '投流功能',
      description: '支持不同推广链接对应不同充值方案，灵活多样的营销策略。',
      color: 'text-green-600',
    },
    {
      icon: BoltIcon,
      title: '高性能技术',
      description: '采用分布式调度引擎，实现流畅视频播放，有效节约成本。',
      color: 'text-blue-600',
    },
    {
      icon: ShieldCheckIcon,
      title: '安全防护',
      description: '采用多重安全机制，保护用户数据和隐私，确保系统稳定运行。',
      color: 'text-green-600',
    },
  ]

  return (
    <section id="advantages" className={clsx('scroll-mt-20 py-16', 'bg-slate-50')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-slate-900',
            )}
          >
            <StarIcon
              className="mr-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
            产品优势
            <StarIcon
              className="ml-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                'group relative border p-6 transition-all duration-300 rounded-xl overflow-hidden',
                'border-slate-200 bg-white hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
              )}
            >
              {/* 选中时的背景渐变 */}
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center">
                <h3
                  className={clsx(
                    'mb-3 flex items-center justify-center text-lg font-semibold',
                    'text-slate-900',
                  )}
                >
                  <advantage.icon
                    className="mr-2 h-6 w-6 text-[#0055ff]"
                    aria-hidden="true"
                  />
                  {advantage.title}
                </h3>
                <p
                  className={clsx(
                    'text-sm leading-relaxed',
                    'text-slate-600',
                  )}
                >
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品演示区域组件 - 展示短剧系统的核心功能演示
 */
function DemoSection() {
  const demos: DemoItem[] = [
    {
      title: '单/排行榜/追剧',
      description: '根据用户喜好推荐单集、排行榜和追剧内容。',
      image: '/images/product/videodemo.jpg',
      rating: 4.5,
    },
    {
      title: '短剧瀑布流',
      description: '提供丰富的短剧内容，瀑布流式展示，方便用户浏览。',
      image: '/images/product/videodemo1.jpg',
      rating: 5.0,
    },
    {
      title: '官方播放',
      description: '官方正版播放，高清流畅，用户体验极佳。',
      image: '/images/product/videodemo2.jpg',
      rating: 5.0,
    },
  ]

  return (
    <section id="demo" className="scroll-mt-20 py-16 bg-white">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-slate-900',
            )}
          >
            <ComputerDesktopIcon
              className="mr-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
            产品演示
            <ComputerDesktopIcon
              className="ml-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                'group overflow-hidden border transition-all duration-300 rounded-xl',
                'border-slate-200 bg-white hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
              )}
            >
              <div
                className={clsx(
                  'relative aspect-video overflow-hidden',
                  'bg-slate-100',
                )}
              >
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3
                  className={clsx(
                    'mb-2 text-lg font-semibold',
                    'text-slate-900',
                  )}
                >
                  {demo.title}
                </h3>
                <p
                  className={clsx(
                    'mb-4 text-sm',
                    'text-slate-600',
                  )}
                >
                  {demo.description}
                </p>
                <div
                  className="flex items-center"
                  role="img"
                  aria-label={`评分 ${demo.rating} 分`}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={clsx(
                        'h-4 w-4',
                        i < Math.floor(demo.rating)
                          ? 'text-[#0055ff]'
                          : i < demo.rating
                            ? 'text-[#0055ff]'
                            : 'text-slate-300',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 系统特色功能区域组件
 */
function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      icon: PlayCircleIcon,
      title: '多种格式播放',
      description: '支持mp4、m3u8、mov等',
      color: 'text-blue-600',
    },
    {
      icon: CloudIcon,
      title: '独立云存储',
      description: 'SaaS子站点支持独立云存储',
      color: 'text-blue-600',
    },
    {
      icon: ShareIcon,
      title: '分销体系',
      description: '支持分销商分销，二级分佣',
      color: 'text-blue-600',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: '多端用户登录',
      description: '支持手机号、微信、账号密码',
      color: 'text-blue-600',
    },
    {
      icon: KeyIcon,
      title: '卡密兑换功能',
      description: '后台批量生成卡密，前端一键兑换',
      color: 'text-blue-600',
    },
    {
      icon: ForwardIcon,
      title: '自动切换剧集',
      description: '自动切换下一集，无需滑动',
      color: 'text-blue-600',
    },
    {
      icon: ClockIcon,
      title: '历史记录展示',
      description: '无痕记录用户的追剧历史，收藏记录',
      color: 'text-blue-600',
    },
    {
      icon: CloudArrowUpIcon,
      title: '一键批量导入',
      description: '批量上传剧集到后台',
      color: 'text-blue-600',
    },
    {
      icon: CreditCardIcon,
      title: '多种付费模式',
      description: '支持VIP套餐开通以及积分充值',
      color: 'text-blue-600',
    },
    {
      icon: CurrencyDollarIcon,
      title: '批量设置价格',
      description: '快捷批量设置剧集价格',
      color: 'text-blue-600',
    },
    {
      icon: GiftIcon,
      title: '多种任务获积分',
      description: '分享获积分、广告获积分、绑定获积分',
      color: 'text-blue-600',
    },
    {
      icon: RocketLaunchIcon,
      title: '成品系统快速交付',
      description: '成品系统最快1天交付上线',
      color: 'text-blue-600',
    },
    {
      icon: ArrowPathIcon,
      title: '一键更新',
      description: '系统功能升级只需一键更新',
      color: 'text-blue-600',
    },
    {
      icon: CpuChipIcon,
      title: '高性能技术框架',
      description: '分布式调度引擎，解决系统性能问题',
      color: 'text-blue-600',
    },
    {
      icon: PhoneIcon,
      title: '手机号注册',
      description: '后台可调节开关的手机号注册功能，用于留资',
      color: 'text-blue-600',
    },
    {
      icon: UserGroupIcon,
      title: '分销商申请',
      description: '可在后台设置多种分销商等级，让用户付费开通',
      color: 'text-blue-600',
    },
    {
      icon: UsersIcon,
      title: '团队管理',
      description: '清晰明了查看自己的团队人员信息，以及充值信息',
      color: 'text-blue-600',
    },
    {
      icon: BanknotesIcon,
      title: '提现功能',
      description: '用户可自主申请提现，后台可设置最大最小提现额度以及频次',
      color: 'text-blue-600',
    },
    {
      icon: StarIcon,
      title: '积分管理',
      description: '后台可设置多种积分套餐，冲多少送多少等优惠活动',
      color: 'text-blue-600',
    },
    {
      icon: CheckBadgeIcon,
      title: '任务体系',
      description:
        '绑定昵称、分享好友、激励广告、拉新注册等都可设置一定的积分赠送活动',
      color: 'text-blue-600',
    },
    {
      icon: CreditCardIcon,
      title: '剧集扣费体系',
      description: '可免费观看一定集数之后进行付费',
      color: 'text-blue-600',
    },
    {
      icon: TagIcon,
      title: '一键设置价格',
      description:
        '不用再对每部剧进行一集一集价格设置，可批量设置VIP价格、免费集数等',
      color: 'text-blue-600',
    },
    {
      icon: LockClosedIcon,
      title: '付费解锁',
      description: '可设置付费解锁、看广告解锁等',
      color: 'text-blue-600',
    },
    {
      icon: BookmarkIcon,
      title: '追剧历史',
      description: '记录用户的追剧历史以及收藏记录',
      color: 'text-blue-600',
    },
    {
      icon: ChartBarIcon,
      title: '数据埋点',
      description: '后台数据可统计哪部剧、哪一集播放量的数据',
      color: 'text-blue-600',
    },
    {
      icon: MegaphoneIcon,
      title: '广告功能',
      description: '具备激励广告、banner广告、插屏广告、原生广告等一键设置',
      color: 'text-blue-600',
    },
    {
      icon: FolderIcon,
      title: '媒资管理',
      description: '具备抖音、微信媒资管理功能，一键同步剧集',
      color: 'text-blue-600',
    },
    {
      icon: ArrowTrendingUpIcon,
      title: '广告回传',
      description: '提供巨量、百度、腾讯等回传方式，让你投放数据一目了然',
      color: 'text-blue-600',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: '小程序一键发布',
      description: '小程序可后台一键发布，无需代码编译',
      color: 'text-blue-600',
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: '自定义投流',
      description: '不同的投放链接具备不同的充值套餐',
      color: 'text-blue-600',
    },
    {
      icon: CalendarDaysIcon,
      title: '签到任务',
      description: '可每日签到、补签等活动',
      color: 'text-blue-600',
    },
    {
      icon: PresentationChartLineIcon,
      title: '数据分析',
      description: '用户行为分析、广告效果分析',
      color: 'text-blue-600',
    },
    {
      icon: ShieldCheckIcon,
      title: '安全保障',
      description: '数据加密、防盗链、版权保护',
      color: 'text-blue-600',
    },
  ]

  return (
    <section id="features" className="scroll-mt-20 py-16 bg-slate-50">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-slate-900',
            )}
          >
            <CogIcon
              className="mr-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
            系统特色功能
            <CogIcon
              className="ml-2 inline h-8 w-8 text-[#0055ff]"
              aria-hidden="true"
            />
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              className={clsx(
                'group relative border p-6 transition-all duration-300 rounded-xl',
                'border-slate-200 bg-white hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
              )}
            >
              <div className="mb-4">
                <feature.icon
                  className="h-8 w-8 text-[#0055ff]"
                  aria-hidden="true"
                />
              </div>
              <h3
                className={clsx(
                  'mb-2 text-lg font-semibold',
                  'text-slate-900',
                )}
              >
                {feature.title}
              </h3>
              <p
                className={clsx(
                  'text-sm leading-relaxed',
                  'text-slate-600',
                )}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * FAQ区域组件 - 短剧系统常见问题解答
 */
function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: '短剧系统支持哪些功能？',
      answer:
        '短剧系统支持多种格式播放、独立云存储、分销体系、多端用户登录、卡密兑换、自动切换剧集、历史记录展示等全面功能，满足短剧平台运营的各种需求。',
    },
    {
      question: '系统是否支持多端应用？',
      answer:
        '是的，我们的短剧系统具备微信小程序、微信公众号、APP、抖音小程序等多端应用，您可以根据自身发展需求自由选择部署方案。',
    },
    {
      question: '广告回传功能如何使用？',
      answer:
        '系统提供巨量、微信、快手等主流平台的广告数据回传功能，可以有效优化投放效果，提升广告ROI，支持精准的数据分析和营销策略调整。',
    },
    {
      question: '源代码是否开源？',
      answer:
        '是的，我们提供完整的开源方案，源代码可二次开发，支持稳定迭代更新和系统化升级，为每一位用户提供更好的开发体验和定制化服务。',
    },
    {
      question: '营销充值体系包含哪些功能？',
      answer:
        '系统拥有完善的营销充值体系，包括积分、VIP、分销、媒资、裂变等多种功能，支持矩阵式玩法，可以灵活配置不同的营销策略和充值方案。',
    },
    {
      question: '技术支持和售后服务如何？',
      answer:
        '我们提供专业的技术支持团队，包括系统部署指导、功能定制开发、问题快速响应等全方位服务。拥有750+成功案例，稳定运营，案例真实可靠。',
    },
  ]

  return (
    <section id="faq" className={clsx('scroll-mt-20 py-16', 'bg-white')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'text-3xl font-bold tracking-tight sm:text-4xl',
              'text-slate-900',
            )}
          >
            常见问题
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-slate-600')}
          >
            解答您关于短剧系统的疑问
          </p>
        </div>
        <div
          className="mt-12 grid gap-6 md:grid-cols-2"
          role="list"
          aria-label="常见问题列表"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                'border p-6 rounded-xl transition-all duration-300',
                'border-slate-200 bg-white hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50',
              )}
              role="listitem"
            >
              <h3
                className={clsx(
                  'mb-3 text-lg font-semibold',
                  'text-slate-900',
                )}
              >
                {faq.question}
              </h3>
              <p className={clsx('text-slate-600')}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 监听当前活跃section的hook
 */
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    )

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * 页面锚点导航组件
 */
function SectionNav() {
  const activeSection = useActiveSection(SECTION_LINKS.map((item) => item.id))

  return (
    <nav className="sticky top-14 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="-mb-px flex justify-start sm:justify-center overflow-x-auto scrollbar-hide">
          {SECTION_LINKS.map((item) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 border-b-2 px-4 py-3.5 text-sm font-medium transition-colors sm:px-6 sm:py-4 ${
                  isActive
                    ? 'border-[#0055ff] text-[#0055ff]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

/**
 * Video页面内容组件 - 包含所有交互元素
 */
export default function VideoPageContent() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionNav />
        <AdvantagesSection />
        <FeaturesSection />
        <DemoSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
