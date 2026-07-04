'use client'

import { motion } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CpuChipIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

const features = [
  {
    name: 'AI 智能对话',
    description: '运用自然语言处理技术，实现智能知识库搜索和问答，7×24小时全天候服务，大幅提升用户体验与运营效率。',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: '知识库应用',
    description: '支持创建多个知识库，灵活适配不同业务场景，打造企业专属的智能知识管理平台。',
    icon: DocumentTextIcon,
  },
  {
    name: '多样化发布',
    description: '应用支持网页嵌入、JS 代码接入、API 接口三种发布方式，满足多场景部署需求。',
    icon: GlobeAltIcon,
  },
  {
    name: 'AI 大语言模型',
    description: '支持 GPT3.5、GPT4.0、ChatGLM 等多种主流大语言模型，灵活切换满足不同业务需求。',
    icon: CpuChipIcon,
  },
  {
    name: '数据训练',
    description: '通过后台高效训练数据，用户可快速查阅各类内部资料和文档，知识检索快人一步。',
    icon: CircleStackIcon,
  },
  {
    name: '数据测试',
    description: '训练完成的数据可在后台进行多维度测试，持续优化模型表现，确保输出质量。',
    icon: BeakerIcon,
  },
  {
    name: '移动端自适应',
    description: '完美支持多端访问，PC、平板、手机自适应布局，随时随地管理您的 AI 应用。',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '多场景适用',
    description: '适用于企业智能客服、文档管理、专家顾问助理等多业务场景，一站式 AI 赋能。',
    icon: UserGroupIcon,
  },
]

/**
 * 产品功能特色 — 简洁卡片网格
 */
export function ProductFeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
            产品功能特色
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            强大的 AI 功能体系
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            从智能对话到知识库应用，从数据训练到多端适配，全方位满足企业 AI 需求
          </p>
        </div>

        {/* 圆角容器 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 rounded-2xl bg-gray-50 px-6 py-16 sm:mt-20 sm:px-16 lg:mt-24"
        >
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center sm:flex sm:text-left lg:block lg:text-center"
              >
                <div className="sm:shrink-0">
                  <div className="flow-root">
                    <div className="mx-auto inline-flex size-16 items-center justify-center rounded-xl bg-white text-brand-500 shadow-sm ring-1 ring-gray-200/60">
                      <feature.icon aria-hidden="true" className="size-8" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-base font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
