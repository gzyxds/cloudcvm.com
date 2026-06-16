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
  QrCodeIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * 官方线上支持渠道配置
 */
const onlineSupport = [
  {
    title: '在线工单',
    description: '获取产品技术支持，部署解决方案支持',
    icon: TicketIcon,
    metricLabel: '响应时长',
    metricValue: '< 30 min',
    action: '提交工单',
    href: '/ticket',
    delay: 0.1,
  },
  {
    title: '售前客服',
    description: '专属客户经理在线解答，提供1V1购买咨询',
    icon: ChatBubbleLeftRightIcon,
    metricLabel: '服务时间',
    metricValue: '9:00-18:00',
    action: '立即咨询',
    href: '/chat',
    delay: 0.2,
  },
  {
    title: '售后客服',
    description: '365天全年无休，3分钟极速响应',
    icon: UserGroupIcon,
    metricLabel: '服务时间',
    metricValue: '7×24h',
    action: '立即咨询',
    href: '/chat',
    delay: 0.3,
  },
  {
    title: '帮助中心',
    description: '覆盖产品介绍、购买、入门、操作等帮助内容',
    icon: DocumentTextIcon,
    metricLabel: '文档数量',
    metricValue: '500+',
    action: '查看详情',
    href: '/document',
    delay: 0.4,
  },
]

/**
 * 页面头部横幅组件
 * 企业级简洁居中布局：大标题 + 指标概览条 + CTA
 */
function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* 极简背景装饰 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,85,255,0.04),transparent_70%)]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* 标题 */}
          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            联系我们
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#64748B] sm:text-lg max-w-2xl mx-auto">
            优刻云拥有专业的售前咨询、1v1 资深顾问指导、热情的售后支持，
            随时等候您的垂询，助您轻松上云，技术无忧。
          </p>

          {/* CTA 按钮组 */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              href="#online-support"
              color="blue"
              variant="erlieSolid"
              className="rounded-lg px-6 py-3 text-sm font-semibold"
            >
              在线咨询
            </Button>
            <Button
              href="#contact-info"
              variant="erlieOutline"
              color="slate"
              className="rounded-lg px-6 py-3 text-sm font-semibold"
            >
              查看联系方式
            </Button>
          </div>
        </motion.div>

        {/* 服务指标概览条 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex items-center justify-center gap-4 text-sm text-[#94A3B8] sm:text-base sm:gap-6"
        >
          <span>
            <span className="font-semibold text-[#0F172A]">&lt; 3 min</span> 平均响应
          </span>
          <span className="text-[#CBD5E1]">|</span>
          <span>
            <span className="font-semibold text-[#0F172A]">7×24h</span> 服务时间
          </span>
          <span className="text-[#CBD5E1]">|</span>
          <span>
            <span className="font-semibold text-[#0F172A]">在线/工单/电话</span> 多方式支持
          </span>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 官方线上支持区域组件
 * 采用控制台资源卡片风格：header（图标+标题+状态）+ body（描述）+ footer（指标+操作）
 */
function OnlineSupportSection() {
  return (
    <section id="online-support" className="relative bg-[#F8FAFC] py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#0055ff]/[0.03] blur-3xl" />
      </div>

      <Container className="relative">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
            <span className="text-sm font-medium text-[#0055ff] tracking-wide">
              官方线上支持
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            全渠道服务
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
            专业的技术支持团队，为您提供全方位的产品技术支持和解决方案
          </p>
        </motion.div>

        {/* 支持渠道卡片网格 */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {onlineSupport.map((support) => {
            const Icon = support.icon
            return (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: support.delay }}
                className="group relative flex flex-col rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60"
              >
                {/* 卡片头部 */}
                <div className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff] transition-colors group-hover:border-[#0055ff]/30 group-hover:bg-[#eff6ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="block text-base font-semibold text-[#0F172A] truncate">
                    {support.title}
                  </span>
                </div>

                {/* 卡片主体 */}
                <div className="flex flex-auto flex-col px-5 py-4">
                  <p className="flex-auto text-sm leading-relaxed text-[#64748B]">
                    {support.description}
                  </p>
                </div>

                {/* 卡片底部 — 指标与操作 */}
                <div className="flex items-center justify-between border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#94A3B8]">{support.metricLabel}</span>
                    <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-mono font-semibold text-[#0055ff]">
                      {support.metricValue}
                    </span>
                  </div>
                  <Link
                    href={support.href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#94A3B8] transition-colors group-hover:text-[#0055ff]"
                  >
                    {support.action}
                    <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
 * 联系方式区域组件
 * Bento Grid 非对称布局：大卡片（微信二维码）+ 中等卡片（在线咨询）+ 小卡片（电话/邮件）
 */
function ContactInfoSection() {
  return (
    <section id="contact-info" className="relative bg-white py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0055ff]/[0.02] blur-3xl" />
      </div>

      <Container className="relative">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0055ff]" />
            <span className="text-sm font-medium text-[#0055ff] tracking-wide">
              联系方式
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            多渠道直达
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
            多种联系方式，为您提供专业的咨询和合作服务
          </p>
        </motion.div>

        {/* Bento Grid 联系卡片 */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. 微信扫码 — 大卡片 lg:col-span-2 lg:row-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 group relative flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60"
          >
            {/* 卡片头部 */}
            <div className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff]">
                <QrCodeIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-[#0F172A]">
                  扫码快速联系
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span className="text-xs font-medium text-[#10B981]">Active</span>
              </div>
            </div>

            {/* 卡片主体 — 二维码展示 */}
            <div className="flex flex-auto items-center justify-center gap-6 px-5 py-6 sm:gap-10">
              {/* 微信客服 */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-[#E2E8F0] bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-105 sm:h-36 sm:w-36 sm:p-3">
                  <Image
                    src="/images/contact/Tencent.png"
                    alt="微信客服"
                    fill
                    className="object-contain rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#0F172A] sm:text-base">Tencent 微信</p>
                  <p className="mt-0.5 text-xs text-[#64748B]">236749035</p>
                </div>
              </div>

              {/* 公众号 */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-[#E2E8F0] bg-white p-2 shadow-sm transition-transform duration-500 delay-100 group-hover:scale-105 sm:h-36 sm:w-36 sm:p-3">
                  <Image
                    src="/images/contact/gzh.png"
                    alt="微信公众号"
                    fill
                    className="object-contain rounded-lg"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#0F172A] sm:text-base">微信公众号</p>
                  <p className="mt-0.5 text-xs text-[#64748B]">关注动态</p>
                </div>
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
              <p className="text-center text-xs text-[#94A3B8]">
                微信扫一扫，直连人工客服
              </p>
            </div>
          </motion.div>

          {/* 2. 在线咨询 — 中等卡片 lg:col-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative flex flex-col rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60"
          >
            {/* 卡片头部 */}
            <div className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff]">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-[#0F172A]">在线咨询</span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span className="text-xs font-medium text-[#10B981]">Online</span>
              </div>
            </div>

            {/* 卡片主体 */}
            <div className="flex flex-auto flex-col px-5 py-4">
              <p className="flex-auto text-sm leading-relaxed text-[#64748B]">
                工作日专属客户经理在线解答，为您提供 1V1 专业咨询服务
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#94A3B8]">平均响应</span>
                  <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-mono font-semibold text-[#0055ff]">
                    &lt; 3 min
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-[#94A3B8]">服务时间</span>
                  <span className="text-xs font-medium text-[#0F172A]">工作日 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="flex items-center justify-between border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
              <span className="text-xs text-[#94A3B8]">在线客服实时响应</span>
              <Link
                href="/chat"
                className="inline-flex items-center gap-1 rounded-md bg-[#0055ff] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#0043cc]"
              >
                立即咨询
                <ArrowRightIcon className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* 3. 电话咨询 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60"
          >
            {/* 卡片头部 */}
            <div className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff] transition-colors group-hover:border-[#0055ff]/30 group-hover:bg-[#eff6ff]">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <span className="block text-base font-semibold text-[#0F172A] truncate">
                电话咨询
              </span>
            </div>

            {/* 卡片主体 */}
            <div className="flex flex-auto flex-col px-5 py-4">
              <p className="text-sm leading-relaxed text-[#64748B]">7×24 小时服务热线</p>
              <a
                href="tel:0595-22113999"
                className="mt-3 block text-xl font-bold text-[#0055ff] transition-colors hover:text-[#0043cc]"
              >
                0595-22113999
              </a>
            </div>

            {/* 卡片底部 */}
            <div className="border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#94A3B8]">服务时间</span>
                <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-mono font-semibold text-[#0055ff]">
                  7×24h
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. 邮件咨询 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:shadow-md hover:shadow-slate-200/60"
          >
            {/* 卡片头部 */}
            <div className="flex items-center gap-x-3 border-b border-[#F1F5F9] px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff] transition-colors group-hover:border-[#0055ff]/30 group-hover:bg-[#eff6ff]">
                <EnvelopeIcon className="h-5 w-5" />
              </div>
              <span className="block text-base font-semibold text-[#0F172A] truncate">
                邮件咨询
              </span>
            </div>

            {/* 卡片主体 */}
            <div className="flex flex-auto flex-col px-5 py-4">
              <p className="text-sm leading-relaxed text-[#64748B]">商务合作 / 建议反馈</p>
              <a
                href="mailto:contact@cloudcvm.com"
                className="mt-3 block text-sm font-medium text-[#0F172A] transition-colors hover:text-[#0055ff] truncate"
                title="contact@cloudcvm.com"
              >
                contact@cloudcvm.com
              </a>
            </div>

            {/* 卡片底部 */}
            <div className="border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#94A3B8]">响应时间</span>
                <span className="rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-xs font-mono font-semibold text-[#0055ff]">
                  &lt; 24h
                </span>
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
    <section className="relative isolate overflow-hidden bg-[#0055ff] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)] opacity-100" />
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            还有其他问题？
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
            如果您有任何其他问题或需要更详细的信息，请随时联系我们的客户服务团队，我们将竭诚为您服务。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <Button
              href="mailto:contact@cloudcvm.com"
              color="white"
              variant="erlieSolid"
              className="rounded-lg px-6 py-3 text-sm font-semibold"
            >
              发送邮件咨询
            </Button>
            <Button
              href="tel:+86059522113999"
              variant="erlieOutline"
              color="white"
              className="rounded-lg px-6 py-3 text-sm font-semibold"
            >
              电话联系我们{' '}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
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
