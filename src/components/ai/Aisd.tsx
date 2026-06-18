'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import {
  ArrowRightIcon,
  BookOpenIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PhoneIcon,
  LightBulbIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

/**
 * 服务项目接口
 * @interface ServiceItem
 * @property {string} title - 服务标题
 * @property {string} description - 服务描述
 * @property {string} href - 链接地址
 * @property {React.ComponentType<any>} icon - Heroicons 图标组件
 * @property {string} alt - 图标描述
 */
interface ServiceItem {
  title: string
  description: string
  href: string
  icon: React.ComponentType<any>
  alt: string
}

/**
 * 服务项目数据配置
 * 展示艺创AI的企业解决方案
 * 使用 Heroicons 直角图标
 */
const services: ServiceItem[] = [
  {
    title: '企业知识库',
    description: '一站式AI 知识库搭建系统，轻松创建企业知识库',
    href: 'https://cnai.art',
    icon: BookOpenIcon,
    alt: '全能AI知识库系统',
  },
  {
    title: '数字分身',
    description: '可以私有化的短视频批量混剪&数字人克隆矩阵平台',
    href: 'https://v.cnai.art',
    icon: UserIcon,
    alt: 'AI数字分身系统',
  },
  {
    title: '聊天绘画',
    description:
      'AI智能对话、AI创作模型、AI绘画、分销推广、卡密兑换、模型计费等丰富的营销功能',
    href: 'https://www.cnai.art',
    icon: ChatBubbleLeftRightIcon,
    alt: '接入AI接口',
  },
  {
    title: '论文创作',
    description: '10分钟生成3万字论文的系统,AI即可快速为您生成论文大纲',
    href: 'https://www.cnai.art',
    icon: DocumentTextIcon,
    alt: '训练大语言模型',
  },
]

/**
 * 打字机效果Hook
 * @param {string} text - 要显示的文本
 * @param {number} speed - 打字速度（毫秒）
 * @returns {string} 当前显示的文本
 */
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    setDisplayText('')
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, speed)

    return () => clearInterval(typing)
  }, [text, speed])

  return displayText
}

/**
 * 服务卡片组件
 * 展示艺创AI的企业解决方案服务
 * @param {ServiceItem} service - 服务数据
 * @returns {JSX.Element} 服务卡片组件
 */
function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = service.icon

  return (
    <div className="group flex h-full transform flex-col overflow-hidden rounded-md border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800">
      <div className="p-5">
        <div className="mb-3 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
            <IconComponent
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        <a
          href={service.href}
          className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="transition-all duration-300 group-hover:mr-1">
            查看详情
          </span>
          <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

/**
 * 服务特点数据配置
 * 展示艺创AI的服务优势和特点
 */
const serviceFeatures = [
  {
    icon: PhoneIcon,
    title: '全天候售后服务',
    description: '7x24小时专业工程师保障服务',
  },
  {
    icon: LightBulbIcon,
    title: '极速服务应答',
    description: '秒级应答为业务保驾护航',
  },
  {
    icon: LockClosedIcon,
    title: '客户价值为先',
    description: '从服务价值到创造客户价值',
  },
  {
    icon: ShieldCheckIcon,
    title: '智能化转型',
    description: '技术过硬、私有部署',
  },
]

/**
 * 服务特点展示组件
 * 展示艺创AI的核心服务优势，支持移动端两列两排布局
 * @returns {JSX.Element} 服务特点组件
 */
function ServiceFeatures() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* 服务特点展示 */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <Container className="py-6 sm:py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-12 sm:w-12 dark:bg-gray-700">
                    <IconComponent className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm leading-tight font-medium text-gray-900 sm:text-base dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </footer>
  )
}

/**
 * Aisd组件 - 艺创AI企业解决方案展示区域
 * 参考 Aisd.astro 设计，展示企业AI解决方案
 * 特点：居中布局、打字机效果、服务卡片展示、响应式设计、暗黑模式兼容
 *
 * 功能包括：
 * 1. 展示企业解决方案标题和描述
 * 2. 打字机效果的动态文本
 * 3. 四个核心服务项目卡片
 * 4. 响应式网格布局
 * 5. 支持暗黑模式
 * 6. 悬停交互效果
 * 7. 服务特点展示区域
 * @returns {JSX.Element} Aisd组件
 */
export default function Aisd() {
  const typingText = useTypewriter('引领企业实现数字化、智能化转型', 100)

  return (
    <>
      {/* 服务特点展示 */}
      <ServiceFeatures />

      <section className="relative w-full overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[130%] -translate-x-1/2 rounded-b-[100%] bg-gradient-to-b from-blue-50/50 to-transparent blur-xl dark:from-blue-900/20 dark:to-transparent"></div>

        {/* 标题区域 */}
        <Container className="relative text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl dark:text-blue-400">
            艺创AI企业解决方案·用AI为企业赋能
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {typingText}
          </p>
        </Container>

        {/* 服务项目网格 */}
        <Container className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
