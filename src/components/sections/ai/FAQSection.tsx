'use client'

import { motion } from 'framer-motion'
import {
  CircleHelp,
  Zap,
  Shield,
  Laptop,
  GraduationCap,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { useState } from 'react'

/**
 * 常见问题数据
 */
const faqs = [
  {
    icon: <Laptop className="h-5 w-5 text-[#015bfe]" />,
    question: '你们开发AI系统的周期是多久?',
    answer:
      '一般根据你的项目大小和难易程度决定，一般都在5个工作日内可以完成很多工作，当然这里不包含定制开发。',
  },
  {
    icon: <Shield className="h-5 w-5 text-[#015bfe]" />,
    question: '你们的AI模型对接的哪些模型?',
    answer:
      '我们接入OpenAI官方最新接口，访问速度非常快，支持GPT4.0和GPT3.5，国内大语言模型如ChatGLM我们也是支持的。',
  },
  {
    icon: <Zap className="h-5 w-5 text-[#015bfe]" />,
    question: '你们的AI系统可以接入哪些平台?',
    answer:
      '主流的软件我们基本都能接入，比如企业微信、钉钉、飞书、微信公众号等或者你自己的App也可以。',
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-[#015bfe]" />,
    question: '你们训练AI模型的时间需要多久?',
    answer:
      '这个需要根据您提供的训练资料决定，根据你提供的训练资料才可以决定你的训练时间和学习过程。',
  },
]

/**
 * FAQ组件
 * 提供常见问题的交互式展示，包含动画效果和联系方式
 * @returns JSX.Element
 */
export function FAQSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="faq">
      <Container>
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 flex justify-center sm:mb-4">
              <CircleHelp className="h-8 w-8 text-[#015bfe] sm:h-10 sm:w-10" />
            </div>
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">常见问题</h2>
            <div className="mx-auto mb-4 h-1 w-16 bg-[#015bfe] sm:mb-5 sm:w-20 lg:mb-6 lg:w-24"></div>
            <p className="mx-auto max-w-2xl px-4 text-sm text-gray-600 sm:text-base">
              以下是我们客户经常问的一些问题，如果您有其他疑问，请随时联系我们
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          {/* 可折叠 FAQ 列表
              此前移动端与 PC 端各渲染一遍结构完全相同的 Disclosure，DOM 重复一倍，
              且两份实现还不一致（桌面端漏了 flex-shrink-0 与 leading-tight）。
              现合并为一份，通过响应式类区分尺寸。 */}
          <div className="space-y-3 lg:grid lg:grid-cols-1 lg:gap-4 lg:space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Disclosure defaultOpen={false}>
                  {({ open }) => (
                    <div className="border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200">
                      <DisclosureButton className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 focus:outline-none lg:p-6">
                        <div className="flex flex-1 items-center">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-[#015bfe]/10 lg:mr-4">
                            {faq.icon}
                          </div>
                          <h3 className="text-base leading-tight font-semibold text-gray-900 lg:text-lg">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="ml-3 flex-shrink-0 lg:ml-4">
                          {open ? (
                            <ChevronUpIcon className="h-5 w-5 text-[#015bfe] transition-transform duration-200 lg:h-6 lg:w-6" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-[#015bfe] transition-transform duration-200 lg:h-6 lg:w-6" />
                          )}
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pb-4 lg:px-6 lg:pb-6">
                        <div className="ml-11 border-t border-gray-100 pt-3 lg:ml-12 lg:pt-4">
                          <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 p-6 sm:mt-14 sm:p-8 lg:mt-16"
          >
            <div className="mb-6 text-center sm:mb-8">
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">还有其他问题?</h3>
              <p className="px-4 text-sm text-gray-600 sm:text-base">
                如果您有任何其他问题或需要更详细的信息，请随时联系我们的客户服务团队
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:contact@aitech.com"
                className="inline-flex items-center justify-center bg-[#015bfe] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
              >
                发送邮件咨询
              </a>
              <a
                href="tel:+8610012345678"
                className="inline-flex items-center justify-center border border-[#015bfe] bg-white px-4 py-2.5 text-sm font-medium text-[#015bfe] transition-colors hover:bg-[#015bfe]/5 sm:px-6 sm:py-3 sm:text-base"
              >
                电话联系我们
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
