'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TicketIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PhoneIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  QrCodeIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * 官方线上支持服务
 */
const onlineSupport = [
  {
    title: '在线工单',
    description: '获取产品技术支持，部署解决方案支持',
    icon: TicketIcon,
    action: '提交工单',
    href: '/ticket',
    delay: 0.1,
  },
  {
    title: '售前客服',
    description: '专属客户经理在线解答，提供1V1购买咨询',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
    href: '/chat',
    delay: 0.2,
  },
  {
    title: '售后客服',
    description: '365天全年无休，3分钟极速响应',
    icon: UserGroupIcon,
    action: '立即咨询',
    href: '/chat',
    delay: 0.3,
  },
  {
    title: '帮助中心',
    description: '覆盖产品介绍、购买、入门、操作等帮助内容',
    icon: DocumentTextIcon,
    action: '查看详情',
    href: '/document',
    delay: 0.4,
  },
]

/**
 * 页面头部横幅组件
 */
function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* 背景装饰 - Linear 风格渐变 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(0,85,255,0.05),transparent)] opacity-100" />
        <div className="absolute right-0 top-0 h-[20rem] w-[40rem] bg-gradient-to-bl from-blue-50/50 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* 左侧内容区 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-sm font-medium text-[#0055ff] backdrop-blur-sm">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#0055ff] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0055ff]"></span>
              </span>
              全渠道服务支持
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              联系我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              优刻云拥有专业的售前咨询、1v1资深顾问指导、热情的售后支持。
              <br className="hidden sm:inline" />
              随时等候您的垂询，祝您轻松上云，技术无忧！
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                href="#online-support"
                color="blue"
                className="rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0043cc]"
              >
                在线咨询
              </Button>
              <Button
                href="#contact-info"
                variant="outline"
                className="rounded-md border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                查看联系方式
              </Button>
            </div>
          </motion.div>

          {/* 右侧装饰区 - 模拟工单/对话界面 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#0055ff]">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">在线客服</div>
                    <div className="text-xs text-slate-500">Typical reply time: &lt; 3m</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Online
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-100" />
                  <div className="rounded-2xl rounded-tl-none bg-slate-100 px-4 py-2 text-sm text-slate-600">
                    您好，我想咨询一下云服务器的价格。
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#0055ff]" />
                  <div className="rounded-2xl rounded-tr-none bg-[#0055ff] px-4 py-2 text-sm text-white shadow-md shadow-blue-500/20">
                    您好！很高兴为您服务。我们提供多种配置的云服务器，目前新用户还有特惠活动...
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#0055ff] opacity-0" />
                  <div className="rounded-2xl rounded-tr-none bg-[#0055ff] px-4 py-2 text-sm text-white shadow-md shadow-blue-500/20">
                    请问您主要用于什么业务场景呢？我可以为您推荐最适合的配置。
                  </div>
                </div>
              </div>
            </div>
            {/* 装饰圆点 */}
            <div className="absolute -right-4 -top-4 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 官方线上支持区域组件
 */
function OnlineSupportSection() {
  return (
    <section id="online-support" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            官方线上支持
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            专业的技术支持团队，为您提供全方位的产品技术支持和解决方案
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {onlineSupport.map((support) => {
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
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {support.description}
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
 * 联系我们区域组件
 */
function ContactInfoSection() {
  return (
    <section id="contact-info" className="bg-white py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            联系方式
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            多种联系方式，为您提供专业的咨询和合作服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. 核心联系 (大卡片) - 微信/公众号 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:border-[#0055ff]/30 hover:shadow-2xl hover:shadow-[#0055ff]/5 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0055ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#0055ff]/20 transition-colors" />
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0055ff]/10 flex items-center justify-center text-[#0055ff]">
                  <QrCodeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">扫码快速联系</h3>
                  <p className="text-sm text-slate-500">微信扫一扫，直连人工客服</p>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center gap-4 md:gap-8 py-4 md:py-8">
                {/* 微信客服二维码 */}
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white p-2 md:p-3 rounded-2xl shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <Image src="/images/contact/userhlc.png" alt="微信客服" fill className="object-contain rounded-xl" unoptimized />
                    {/* 扫描线动画 */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#0055ff]/50 shadow-[0_0_20px_rgba(0,85,255,0.5)] animate-scan" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 text-sm md:text-base">客服微信</p>
                    <p className="text-xs text-slate-500 mt-0.5 md:mt-1">userhlc</p>
                  </div>
                </div>

                {/* 公众号二维码 */}
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white p-2 md:p-3 rounded-2xl shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-500 delay-100 overflow-hidden">
                    <Image src="/images/contact/gzh.png" alt="微信公众号" fill className="object-contain rounded-xl" unoptimized />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-slate-900 text-sm md:text-base">微信公众号</p>
                    <p className="text-xs text-slate-500 mt-0.5 md:mt-1">关注动态</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 在线咨询 (中等卡片) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:border-[#0055ff]/30 transition-all duration-300"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#0055ff]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0055ff]">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">在线咨询</h3>
                    <p className="text-sm text-slate-500">工作日 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-green-700">Online</span>
                </div>
             </div>
             <div className="mt-8 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-slate-600">平均响应时间</p>
                  <p className="text-2xl font-bold text-slate-900">&lt; 3 分钟</p>
                </div>
                <Button href="/chat" color="blue" className="rounded-full px-6">
                  立即咨询
                </Button>
             </div>
          </motion.div>

          {/* 3. 电话咨询 (小卡片) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-[#0055ff]/5 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between gap-6">
               <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#0055ff] group-hover:text-white transition-colors duration-300">
                  <PhoneIcon className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-slate-900">电话咨询</h3>
                  <p className="text-sm text-slate-500 mt-1">7x24小时服务热线</p>
                  <a href="tel:0595-22113999" className="text-xl font-bold text-[#0055ff] mt-2 block hover:underline">
                    0595-22113999
                  </a>
               </div>
            </div>
          </motion.div>

          {/* 4. 邮件咨询 (小卡片) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-6 relative overflow-hidden group hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-[#0055ff]/5 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between gap-6">
               <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#0055ff] group-hover:text-white transition-colors duration-300">
                  <EnvelopeIcon className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-slate-900">邮件咨询</h3>
                  <p className="text-sm text-slate-500 mt-1">商务合作/建议反馈</p>
                  <a href="mailto:contact@cloudcvm.com" className="text-sm font-medium text-slate-900 mt-2 block hover:text-[#0055ff] truncate" title="contact@cloudcvm.com">
                    contact@cloudcvm.com
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 底部 CTA 区域
 */
function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0055ff] py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
         <div className="absolute left-[50%] top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)] opacity-100" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            还有其他问题?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            如果您有任何其他问题或需要更详细的信息，请随时联系我们的客户服务团队，我们将竭诚为您服务。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="mailto:contact@cloudcvm.com"
              color="white"
              className="rounded-md px-6 py-2.5 text-sm font-semibold text-[#0055ff] shadow-sm hover:bg-blue-50"
            >
              发送邮件咨询
            </Button>
            <Button
              href="tel:+86059522113999"
              className="rounded-md border border-white/30 bg-transparent px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              电话联系我们 <span aria-hidden="true">→</span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 联系我们页面主组件
 */
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <OnlineSupportSection />
        <ContactInfoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
