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
 * 页面英雄区域组件 - 代理合作 Hero 区域
 * 采用统一方案页设计风格，图片背景
 */
function HeroBanner() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/agent.png')] bg-cover bg-center bg-no-repeat opacity-20" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            合作伙伴 / 5-7折优惠 / 7x24技术支持
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            代理合作
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            加入优刻云代理合作伙伴计划，享受 <span className="font-semibold text-[#0055ff]">5-7折优惠价格</span>，获得全方位销售支持和技术支持，共同开拓云计算市场，实现互利共赢。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:flex-wrap">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              立即申请代理
            </Button>
            <Button href="#faq" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              了解详情
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
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
