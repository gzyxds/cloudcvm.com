'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// Metadata needs to be in a server component or layout
// export const metadata: Metadata = {
//   title: '服务保障 - 优刻云计算',
//   description: '...',
// }

/**
 * 多渠道服务支撑数据
 */
const serviceSupports = [
  {
    title: '自助文档',
    description: '全面贴心的使用文档',
    subDescription: '触手可及的云产品使用指导服务',
    icon: DocumentTextIcon,
    action: '立即查看',
    href: '/document',
    delay: 0.1,
  },
  {
    title: '技术工单',
    description: '7x24小时服务',
    subDescription: '提供使用指导、故障排查等技术支持',
    icon: TicketIcon,
    action: '立即提交',
    href: '/ticket',
    delay: 0.2,
  },
  {
    title: '热线电话',
    description: '7x24小时服务',
    subDescription: '0595-22113999，即时响应您的需求',
    icon: PhoneIcon,
    action: '立即拨打',
    href: 'tel:0595-22113999',
    delay: 0.3,
  },
  {
    title: '在线客服',
    description: '工作日 09:00-18:00',
    subDescription: '资深顾问为您定制最佳解决方案',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
    href: '/chat',
    delay: 0.4,
  },
]

/**
 * 免费备案流程步骤
 */
const backupSteps = [
  {
    step: 1,
    title: '填写备案信息',
    description: '登录控制台填写主体及网站信息',
  },
  {
    step: 2,
    title: '主题云审核',
    description: '专业备案专员1个工作日内初审',
  },
  {
    step: 3,
    title: '省管局审核',
    description: '提交管局，等待管局短信核验及审核',
  },
  {
    step: 4,
    title: '备案成功',
    description: '审核通过，下发备案号',
  },
]

/**
 * 无忧退款流程步骤
 */
const refundSteps = [
  {
    step: 1,
    title: '提交工单',
    description: '在控制台提交退订工单申请',
  },
  {
    step: 2,
    title: '人工审核确认',
    description: '客服专员核实订单及退款金额',
  },
  {
    step: 3,
    title: '生成退订订单',
    description: '系统生成退款单，原路退回',
  },
  {
    step: 4,
    title: '收到退款',
    description: '款项退回到您的账户',
  },
]

/**
 * 页面头部横幅组件 - 服务保障Hero区域
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* 背景装饰 - Linear 风格渐变 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(0,85,255,0.05),transparent)] opacity-100" />
        <div className="absolute right-0 top-0 h-[20rem] w-[40rem] bg-gradient-to-bl from-blue-50/50 to-transparent" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            全方位服务保障
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            主题云专业的服务工程师团队为您提供 <span className="font-semibold text-[#0055ff]">7x24h</span> 云端护航服务。
            无论是技术难题还是业务咨询，我们都随时待命，助您轻松上云。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/ticket"
              color="blue"
              className="rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0043cc]"
            >
              提交工单
            </Button>
            <Button
              href="/document"
              variant="outline"
              className="rounded-md border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              查看文档
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

/**
 * 多渠道不间断服务支撑区域组件
 */
function ServiceSupportSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            多渠道不间断服务支撑
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            我们要做的不仅仅是售卖一台云服务器，而是为您提供全方位的云端服务体验
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {serviceSupports.map((support) => {
            const Icon = support.icon
            return (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: support.delay }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#0055ff] group-hover:bg-[#0055ff] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900">
                    {support.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 font-medium">
                    {support.description}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {support.subDescription}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href={support.href}
                    className="group/link flex items-center text-sm font-semibold text-[#0055ff] transition-colors hover:text-[#0043cc]"
                  >
                    {support.action}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * 流程步骤组件
 */
function ProcessSteps({ steps }: { steps: typeof backupSteps }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-6 lg:pl-0 lg:pt-8"
        >
          {/* 连接线 (Desktop) */}
          {index < steps.length - 1 && (
            <div className="absolute right-[-50%] top-12 hidden h-px w-full bg-slate-200 lg:block" />
          )}
          {/* 连接线 (Mobile) */}
          {index < steps.length - 1 && (
            <div className="absolute bottom-[-2rem] left-10 block h-8 w-px bg-slate-200 lg:hidden" />
          )}

          <div className="relative flex flex-col items-start lg:items-center lg:text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0055ff] text-sm font-bold text-white shadow-md shadow-blue-500/20 ring-4 ring-blue-50">
              {step.step}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              {step.title}
            </h4>
            <p className="mt-2 text-sm text-slate-500 max-w-[12rem]">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * 免费备案流程区域组件
 */
function BackupProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            免费备案
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            在中华人民共和国境内提供互联网信息服务，应当依法履行备案手续，主题云可为您免费提供备案服务
          </p>
        </div>
        <ProcessSteps steps={backupSteps} />
      </Container>
    </section>
  )
}

/**
 * 无忧退款流程区域组件
 */
function RefundProcessSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            无忧退款
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            如果您购买主题云产品后有任何退订需求，您可以随时在官网产品中心提交工单发起退订申请
          </p>
        </div>
        <ProcessSteps steps={refundSteps} />
      </Container>
    </section>
  )
}

/**
 * 期待您的声音区域组件
 */
function FeedbackSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* 左侧模拟界面设计 - Bento Style Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-2xl">
              {/* 模拟浏览器头部 */}
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm border border-slate-100">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 flex-1 rounded bg-slate-50 px-3 py-1 text-xs text-slate-400 font-mono">
                  support.cloudcvm.com
                </div>
              </div>

              {/* 模拟内容 */}
              <div className="space-y-4">
                {/* 消息卡片 1 */}
                <div className="flex gap-4 rounded-lg bg-white p-4 shadow-sm border border-slate-100">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-[#0055ff]">
                    <UserGroupIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-24 rounded bg-slate-100" />
                    <div className="h-3 w-full rounded bg-slate-50" />
                    <div className="h-3 w-2/3 rounded bg-slate-50" />
                  </div>
                </div>

                {/* 消息卡片 2 (用户) */}
                <div className="flex flex-row-reverse gap-4 rounded-lg bg-[#0055ff]/5 p-4 border border-blue-100">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#0055ff] flex items-center justify-center text-white">
                    <span className="text-xs font-bold">ME</span>
                  </div>
                  <div className="flex-1 space-y-2 text-right">
                    <div className="ml-auto h-4 w-20 rounded bg-blue-100" />
                    <div className="ml-auto h-3 w-3/4 rounded bg-blue-50" />
                  </div>
                </div>

                {/* 状态指示 */}
                <div className="mt-4 flex items-center justify-between rounded-lg bg-green-50 px-4 py-2 border border-green-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-700">服务在线</span>
                  </div>
                  <span className="text-xs text-green-600 font-mono">0.05s latency</span>
                </div>
              </div>
            </div>

            {/* 背景装饰块 */}
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
          </motion.div>

          {/* 右侧内容区域 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                期待您的声音
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                我们非常重视每一位用户的反馈，无论是产品建议还是服务投诉，我们都将认真对待并及时处理。
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0055ff] text-white">
                    <EnvelopeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">投诉建议</dt>
                    <dd className="mt-1 text-slate-600">
                      如果您对我们的服务有任何不满或建议，请发送邮件至{' '}
                      <a href="mailto:support@cloudcvm.com" className="font-medium text-[#0055ff] hover:underline">
                        support@cloudcvm.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0055ff] text-white">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">响应时间</dt>
                    <dd className="mt-1 text-slate-600">
                      我们将在收到反馈后的 24 小时内与您联系，并持续跟进直至问题解决。
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10">
                <Button href="/feedback" color="blue" className="rounded-md">
                  填写反馈表单 <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <ServiceSupportSection />
        <BackupProcessSection />
        <RefundProcessSection />
        <FeedbackSection />
      </main>
      <Footer />
    </>
  )
}
