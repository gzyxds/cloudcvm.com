'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRightIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CogIcon,
  ChevronDownIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// Note: Metadata is handled by layout.tsx for client components

/**
 * 代理优势数据
 */
const agentAdvantages = [
  {
    title: '丰厚返佣',
    description: '5-7折优惠价格',
    subDescription: '根据采购量和渠道能力给予不同折扣',
    icon: CurrencyDollarIcon,
  },
  {
    title: '全产品线',
    description: '云服务器全系列',
    subDescription: '云服务器、物理裸机、服务器托管、机柜租用',
    icon: CogIcon,
  },
  {
    title: '专业支持',
    description: '7x24小时技术支持',
    subDescription: '专业技术团队提供全方位技术支持',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: '营销支持',
    description: '全方位营销支持',
    subDescription: '提供营销物料、培训支持、市场推广支持',
    icon: MegaphoneIcon,
  },
]

/**
 * 代理支持服务数据
 */
const agentSupports = [
  {
    title: '培训支持',
    description: '产品培训',
    subDescription: '提供全面的产品知识培训和销售技巧培训',
    icon: AcademicCapIcon,
  },
  {
    title: '市场支持',
    description: '营销物料',
    subDescription: '提供专业的营销物料和市场推广支持',
    icon: MegaphoneIcon,
  },
  {
    title: '销售支持',
    description: '销售指导',
    subDescription: '专业销售团队提供销售指导和客户支持',
    icon: CurrencyDollarIcon,
  },
  {
    title: '技术支持',
    description: '技术保障',
    subDescription: '7x24小时技术支持，确保服务质量',
    icon: WrenchScrewdriverIcon,
  },
]

/**
 * 加入条件数据
 */
const joinConditions = [
  {
    title: '公司规模',
    description: '具备正规企业资质',
    subDescription: '拥有合法的企业营业执照和相关资质',
    icon: BuildingOfficeIcon,
  },
  {
    title: '人员规模',
    description: '专职服务团队',
    subDescription: '至少拥有1名销售人员、1名售前支撑人员',
    icon: UsersIcon,
  },
  {
    title: '服务能力',
    description: '认可产品理念',
    subDescription: '认可主题云产品并愿意长期合作',
    icon: CogIcon,
  },
]

/**
 * 推广流程步骤
 */
const promotionSteps = [
  {
    step: 1,
    title: '注册账号',
    description: '注册主题云账号并完成个人实名认证',
    action: '立即加入',
  },
  {
    step: 2,
    title: '提交申请',
    description: '如实填写代理申请资料，并提交审核',
    action: '立即申请',
  },
  {
    step: 3,
    title: '资质审核',
    description: '通过资质审核，并签署代理合作协议',
    action: '查看进度',
  },
  {
    step: 4,
    title: '开始营业',
    description: '接入业务平台，并开始营业',
    action: '业务平台',
  },
]

/**
 * 常见问题数据
 */
const faqs = [
  {
    question: '如何进行代理合作？',
    answer:
      '①注册主题云账号，并完成实名认证；\n②在代理合作页面点击"立即申请"提交申请资料；\n③通过资质审核后，与主题云签署合作协议；\n④获得云产品并开始营业。',
  },
  {
    question: '代理资质有什么要求？',
    answer:
      '①具备正规企业资质；\n②具备专职服务团队，至少拥有1名销售人员、1名售前支撑人员；\n③认可主题云产品并愿意合作。',
  },
  {
    question: '哪些产品可代理？',
    answer: '云服务器、物理裸机、服务器托管、机柜租用全系列产品均可代理。',
  },
  {
    question: '代理合作可优惠多少？',
    answer: '5-7折优惠。我们将根据代理伙伴的采购量和渠道能力给予不同折扣。',
  },
]

/**
 * 页面头部横幅组件 - 代理合作Hero区域
 * 采用 Linear 风格，使用 Framer Motion 实现入场动画
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* 背景装饰 - 使用更柔和的渐变 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0055ff]/20 to-[#eff6ff] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* 左侧文字内容 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              代理合作
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              加入主题云代理合作伙伴计划，享受 <span className="font-semibold text-[#0055ff]">5-7折优惠价格</span>，获得全方位销售支持和技术支持，共同开拓云计算市场，实现互利共赢。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Button
                variant="solid"
                color="blue"
                className="group relative rounded-md bg-[#0055ff] px-5 py-2.5 font-medium text-white transition-all duration-200 hover:bg-[#0043cc] hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="mr-3 text-sm">立即申请代理</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRightIcon className="h-3 w-3 text-[#0055ff]" />
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="group relative rounded-md border border-slate-200 bg-white px-5 py-2.5 font-medium text-slate-600 transition-all duration-200 hover:border-[#0055ff] hover:bg-blue-50 hover:text-[#0055ff]"
              >
                <Link href="#faq" className="flex items-center">
                  <span className="mr-2 text-sm">了解详情</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* 功能标签 */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-full bg-blue-50 px-3 py-1 text-slate-600 ring-1 ring-inset ring-blue-700/10">
                <CurrencyDollarIcon className="mr-1.5 h-4 w-4 text-[#0055ff]" />
                <span className="text-sm font-medium">5-7折优惠</span>
              </div>
              <div className="flex items-center rounded-full bg-blue-50 px-3 py-1 text-slate-600 ring-1 ring-inset ring-blue-700/10">
                <WrenchScrewdriverIcon className="mr-1.5 h-4 w-4 text-[#0055ff]" />
                <span className="text-sm font-medium">7x24技术支持</span>
              </div>
              <div className="flex items-center rounded-full bg-blue-50 px-3 py-1 text-slate-600 ring-1 ring-inset ring-blue-700/10">
                <MegaphoneIcon className="mr-1.5 h-4 w-4 text-[#0055ff]" />
                <span className="text-sm font-medium">营销支持</span>
              </div>
            </div>
          </motion.div>

          {/* 右侧模拟界面设计 - 优化为 Linear 风格 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-xl border border-slate-200 bg-white/50 p-2 shadow-2xl backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                {/* 模拟浏览器头部 */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
                  <div className="flex space-x-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]"></div>
                  </div>
                  <div className="flex h-6 items-center rounded bg-slate-100 px-3 text-[10px] font-medium text-slate-500">
                    cloudcvm.com/agent/dashboard
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* 模拟 Dashboard 内容 */}
                <div className="grid grid-cols-12 gap-4 p-4">
                  {/* 左侧侧边栏 */}
                  <div className="col-span-3 hidden flex-col gap-2 sm:flex">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 rounded bg-white border border-slate-200"></div>
                    ))}
                  </div>

                  {/* 主内容区 */}
                  <div className="col-span-12 sm:col-span-9 space-y-4">
                     {/* 统计卡片 */}
                     <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-sm">
                           <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                           <div className="h-6 w-16 bg-[#0055ff]/20 rounded"></div>
                        </div>
                        <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-sm">
                           <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                           <div className="h-6 w-16 bg-green-100 rounded"></div>
                        </div>
                        <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-sm">
                           <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                           <div className="h-6 w-16 bg-orange-100 rounded"></div>
                        </div>
                     </div>

                     {/* 图表区域 */}
                     <div className="h-32 rounded-lg bg-white border border-slate-200 p-4 shadow-sm flex items-end justify-between gap-2">
                        {[40, 70, 45, 90, 60, 80, 50, 75].map((h, i) => (
                          <div key={i} className="w-full bg-[#0055ff]/10 rounded-t" style={{ height: `${h}%` }}></div>
                        ))}
                     </div>

                     {/* 列表区域 */}
                     <div className="space-y-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200 shadow-sm">
                             <div className="flex gap-2">
                                <div className="h-8 w-8 rounded bg-slate-100"></div>
                                <div className="space-y-1">
                                   <div className="h-2 w-24 bg-slate-200 rounded"></div>
                                   <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                </div>
                             </div>
                             <div className="h-4 w-12 bg-green-100 rounded"></div>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* 底部状态指示 - 悬浮效果 */}
              <div className="absolute -bottom-4 -right-4 flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs font-medium text-slate-600">系统运行正常</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* 底部装饰 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0055ff]/20 to-[#eff6ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

/**
 * 代理优势区域组件
 * 使用 Bento Grid 布局
 */
function AgentAdvantagesSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* 左侧招募信息 */}
          <div className="lg:sticky lg:top-24">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              诚招代理合作伙伴
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              主题云面向全国诚招代理合作伙伴，我们提供优质的云计算产品和服务，
              丰厚的代理返佣政策，完善的技术支持和营销支持体系，
              助力合作伙伴快速开拓市场，实现共同发展。
            </p>

            <div className="space-y-4">
              {[
                { icon: CurrencyDollarIcon, text: '5-7折优惠价格，丰厚返佣政策' },
                { icon: CogIcon, text: '全产品线代理，云服务器全系列' },
                { icon: WrenchScrewdriverIcon, text: '7x24小时专业技术支持' },
                { icon: MegaphoneIcon, text: '全方位营销支持和培训支持' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#0055ff]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="solid" color="blue" className="rounded-md bg-[#0055ff] hover:bg-[#0043cc]">
                <Link href="/contact" className="flex items-center">
                  <span className="mr-3">立即申请代理</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                    <ArrowRightIcon className="h-3 w-3 text-[#0055ff]" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* 右侧优势卡片 - Bento Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {agentAdvantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  {/* 选中时的背景渐变 */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* 图标 */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#0055ff] transition-colors group-hover:bg-[#0055ff] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* 内容 */}
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">
                      {advantage.title}
                    </h4>
                    <p className="mb-2 font-medium text-slate-700">
                      {advantage.description}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {advantage.subDescription}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 代理支持区域组件
 */
function AgentSupportSection() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            全方位代理支持
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">
            我们为代理合作伙伴提供全方位的支持服务，包括培训支持、市场支持、销售支持和技术支持，
            助力合作伙伴快速成长，实现业务目标。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agentSupports.map((support, index) => {
            const Icon = support.icon
            return (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* 悬停时的背景装饰 */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0055ff]/5 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"></div>

                <div className="relative z-10">
                    {/* 图标 */}
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-colors group-hover:bg-[#0055ff] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                    </div>

                    {/* 内容 */}
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">
                    {support.title}
                    </h4>
                    <p className="mb-2 font-medium text-slate-700">
                    {support.description}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500">
                    {support.subDescription}
                    </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 加入条件区域组件
 */
function JoinConditionsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            加入条件
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">
            我们欢迎具备一定资质和服务能力的企业加入我们的代理合作伙伴计划，
            共同为客户提供优质的云计算服务。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {joinConditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-8 text-center transition-all duration-300 hover:border-[#0055ff]/20 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
              >
                {/* 图标 */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-[#0055ff] group-hover:ring-[#0055ff]">
                  <Icon className="h-8 w-8 text-[#0055ff] transition-colors group-hover:text-white" />
                </div>

                {/* 内容 */}
                <h4 className="mb-4 text-xl font-semibold text-slate-900">
                  {condition.title}
                </h4>
                <p className="mb-3 font-medium text-slate-700">
                  {condition.description}
                </p>
                <p className="leading-relaxed text-slate-500">
                  {condition.subDescription}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 推广流程区域组件
 */
function PromotionProcessSection() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            推广流程
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">
            简单四步，轻松成为主题云代理合作伙伴，开启您的云计算代理业务。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promotionSteps.map((step, index) => (
            <div
              key={step.step}
              className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg"
            >
              {/* 连接线 (仅在桌面端显示，且不是最后一个) */}
              {index < promotionSteps.length - 1 && (
                <div className="absolute -right-4 top-12 hidden h-0.5 w-8 bg-slate-200 lg:block group-hover:bg-[#0055ff]/30" />
              )}

              {/* 步骤图标 */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-slate-600 transition-colors group-hover:bg-[#0055ff] group-hover:text-white">
                {step.step}
              </div>

              {/* 步骤内容 */}
              <div className="mb-6 flex-1">
                <h5 className="mb-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h5>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>

              {/* 操作按钮 */}
              <Button
                variant="outline"
                className="w-full rounded-md border-slate-200 text-slate-600 hover:border-[#0055ff] hover:text-[#0055ff]"
              >
                {step.action}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * FAQ常见问题区域组件
 */
function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            常见问题
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">
            解答您在代理合作过程中可能遇到的常见问题，帮助您更好地了解我们的合作模式。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 transition-colors hover:bg-white hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <h3 className="text-lg font-medium text-slate-900">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4">
                      <div className="leading-relaxed text-slate-600">
                        {faq.answer.split('\n').map((line, i) => (
                          <p key={i} className="mb-1 last:mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 代理合作页面主组件
 * 展示主题云的代理合作计划，包括代理优势、支持服务、加入条件等
 * @returns JSX.Element
 */
export default function AgentPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* 代理优势区域 */}
        <AgentAdvantagesSection />

        {/* 代理支持区域 */}
        <AgentSupportSection />

        {/* 加入条件区域 */}
        <JoinConditionsSection />

        {/* 推广流程区域 */}
        <PromotionProcessSection />

        {/* FAQ常见问题区域 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
