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
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/* ================================================================
   Animation Variants
   ================================================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
}

/* ================================================================
   Data
   ================================================================ */

const serviceSupports = [
  {
    title: '自助文档',
    description: '全面贴心的使用文档',
    subDescription: '触手可及的云产品使用指导服务',
    icon: DocumentTextIcon,
    action: '立即查看',
    href: '/document',
    gradient: 'from-brand-500 to-brand-400',
  },
  {
    title: '技术工单',
    description: '7×24小时服务',
    subDescription: '提供使用指导、故障排查等技术支持',
    icon: TicketIcon,
    action: '立即提交',
    href: '/ticket',
    gradient: 'from-purple-500 to-purple-400',
  },
  {
    title: '热线电话',
    description: '7×24小时服务',
    subDescription: '0595-22113999，即时响应您的需求',
    icon: PhoneIcon,
    action: '立即拨打',
    href: 'tel:0595-22113999',
    gradient: 'from-emerald-500 to-emerald-400',
  },
  {
    title: '在线客服',
    description: '工作日 09:00-18:00',
    subDescription: '资深顾问为您定制最佳解决方案',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
    href: '/chat',
    gradient: 'from-amber-500 to-amber-400',
  },
]

const backupSteps = [
  { step: 1, title: '填写备案信息', description: '登录控制台填写主体及网站信息' },
  { step: 2, title: '优刻云审核', description: '专业备案专员1个工作日内初审' },
  { step: 3, title: '省管局审核', description: '提交管局，等待管局短信核验及审核' },
  { step: 4, title: '备案成功', description: '审核通过，下发备案号' },
]

const refundSteps = [
  { step: 1, title: '提交工单', description: '在控制台提交退订工单申请' },
  { step: 2, title: '人工审核确认', description: '客服专员核实订单及退款金额' },
  { step: 3, title: '生成退订订单', description: '系统生成退款单，原路退回' },
  { step: 4, title: '收到退款', description: '款项退回到您的账户' },
]

/* ================================================================
   Hero Banner
   ================================================================ */

function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #3860F4 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(56,96,244,0.06),transparent)]" />
        <div className="absolute right-0 top-0 h-[20rem] w-[40rem] bg-gradient-to-bl from-brand-50/50 to-transparent" />
        <div className="absolute -bottom-20 left-0 h-[20rem] w-[30rem] bg-gradient-to-tr from-purple-50/30 to-transparent" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/50 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-brand-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            7×24h 云端护航
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            全方位服务
            <span className="relative mx-2 text-brand-500">
              保障
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 60 6" fill="none" preserveAspectRatio="none">
                <path d="M0 3 Q 15 0, 30 3 T 60 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-neutral-500 max-w-2xl mx-auto">
            优刻云专业的服务工程师团队为您提供全天候云端护航服务。
            无论是技术难题还是业务咨询，我们都随时待命，助您轻松上云。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <a
              href="/ticket"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-500 hover:bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <TicketIcon className="w-4 h-4" />
              提交工单
            </a>
            <a
              href="/document"
              className="inline-flex items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
            >
              <DocumentTextIcon className="w-4 h-4" />
              查看文档
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/* ================================================================
   Service Support Cards
   ================================================================ */

function ServiceSupportSection() {
  return (
    <section className="relative bg-neutral-50 py-20 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            多渠道不间断服务支撑
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
            我们要做的不仅仅是售卖一台云服务器，而是为您提供全方位的云端服务体验
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
          className="mx-auto mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {serviceSupports.map((support) => {
            const Icon = support.icon
            return (
              <motion.div
                key={support.title}
                variants={fadeUpItem}
                className="group relative flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-500/20 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                  {support.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {support.description}
                </p>
                <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                  {support.subDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={support.href}
                    className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors group/link"
                  >
                    {support.action}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

/* ================================================================
   Process Steps
   ================================================================ */

function ProcessSteps({ steps }: { steps: typeof backupSteps }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Connection line (desktop) */}
          {index < steps.length - 1 && (
            <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-px lg:block"
              style={{ width: 'calc(100% - 3rem)' }}
            >
              <div className="h-full w-full bg-gradient-to-r from-brand-200 to-neutral-200" />
            </div>
          )}

          {/* Step number */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-500/20 ring-4 ring-brand-50">
            {step.step}
          </div>

          <h4 className="mt-5 text-base font-semibold text-neutral-900 tracking-tight">
            {step.title}
          </h4>
          <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-[14rem]">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

/* ================================================================
   Process Sections (备案 + 退款)
   ================================================================ */

function ProcessSection({
  title,
  description,
  steps,
  bgClass,
}: {
  title: string
  description: string
  steps: typeof backupSteps
  bgClass: string
}) {
  return (
    <section className={bgClass}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-2xl text-center lg:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
            {description}
          </p>
        </motion.div>
        <ProcessSteps steps={steps} />
      </Container>
    </section>
  )
}

function BackupProcessSection() {
  return (
    <ProcessSection
      title="免费备案"
      description="在中华人民共和国境内提供互联网信息服务，应当依法履行备案手续，优刻云可为您免费提供备案服务"
      steps={backupSteps}
      bgClass="bg-white py-20 sm:py-28"
    />
  )
}

function RefundProcessSection() {
  return (
    <ProcessSection
      title="无忧退款"
      description="如果您购买优刻云产品后有任何退订需求，您可以随时在官网产品中心提交工单发起退订申请"
      steps={refundSteps}
      bgClass="bg-neutral-50 py-20 sm:py-28"
    />
  )
}

/* ================================================================
   Feedback / CTA Section
   ================================================================ */

function FeedbackSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28">

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              {/* Browser chrome */}
              <div className="mb-5 flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 shadow-sm border border-neutral-100">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-neutral-50 px-3 py-1 text-xs text-neutral-400 font-mono">
                  support.cloudcvm.com
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                {/* Agent message */}
                <div className="flex gap-3 rounded-xl bg-white p-4 shadow-sm border border-neutral-100">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-brand-100 flex items-center justify-center text-brand-500">
                    <UserGroupIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-3.5 w-20 rounded-md bg-neutral-200" />
                      <span className="text-[10px] text-neutral-400 font-mono">刚刚</span>
                    </div>
                    <div className="h-3 w-full rounded-md bg-neutral-100" />
                    <div className="h-3 w-2/3 rounded-md bg-neutral-100" />
                  </div>
                </div>

                {/* User message */}
                <div className="flex flex-row-reverse gap-3 rounded-xl bg-brand-50/50 p-4 border border-brand-100">
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-brand-500 flex items-center justify-center text-white">
                    <span className="text-xs font-bold">ME</span>
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-[10px] text-neutral-400 font-mono">1min ago</span>
                      <div className="h-3.5 w-16 rounded-md bg-brand-200" />
                    </div>
                    <div className="ml-auto h-3 w-3/4 rounded-md bg-brand-100" />
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2.5 border border-emerald-100">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 tracking-wide">服务在线</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-mono font-medium">响应: 0.05s</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              期待您的声音
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-500 leading-relaxed">
              我们非常重视每一位用户的反馈，无论是产品建议还是服务投诉，我们都将认真对待并及时处理。
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:border-brand-200 transition-colors duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-neutral-900 text-sm tracking-tight">投诉建议</dt>
                  <dd className="mt-1 text-sm text-neutral-500">
                    请发送邮件至{' '}
                    <a href="mailto:support@cloudcvm.com" className="font-semibold text-brand-500 hover:text-brand-600 transition-colors">
                      support@cloudcvm.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:border-brand-200 transition-colors duration-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-neutral-900 text-sm tracking-tight">响应时间</dt>
                  <dd className="mt-1 text-sm text-neutral-500">
                    我们将在收到反馈后的 24 小时内与您联系，并持续跟进直至问题解决。
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8">
              <a
                href="/feedback"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand-500 hover:bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <SparklesIcon className="w-4 h-4" />
                填写反馈表单
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ================================================================
   Main Page
   ================================================================ */

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
