'use client'

import Image, { type ImageProps } from 'next/image'

import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import screenshotContacts from '@/images/screenshots/achievements.png'
import screenshotExpenses from '@/images/screenshots/contacts.png'
interface Feature {
  name: string
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: '资源监控',
    summary: '实时监控云资源使用情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示CPU、内存、存储等关键指标的使用情况，并在达到阈值时及时发出预警通知。',
    image: screenshotContacts,
    icon: ChartBarIcon,
  },
  {
    name: '弹性伸缩',
    summary: '根据业务负载自动调整计算资源，确保性能与成本的最优平衡。',
    description:
      '智能感知业务高峰，自动扩展或收缩计算资源，既保证服务质量，又避免资源浪费。',
    image: screenshotContacts,
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary: '全方位的云安全防护，为您的业务保驾护航。',
    description:
      '提供多层次安全防护，包括访问控制、数据加密、安全组策略等，全面保障您的云上资产安全。',
    image: screenshotContacts,
    icon: ShieldCheckIcon,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(
        className,
        !isActive &&
          'opacity-75 transition-opacity duration-300 hover:opacity-100',
        'group',
      )}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg transition-colors duration-300',
          isActive ? 'bg-blue-600' : 'bg-slate-500 group-hover:bg-blue-500',
          'dark:shadow-lg dark:shadow-blue-500/20',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium transition-colors duration-300',
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-slate-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-300',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900 dark:text-white">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  )
}

/**
 * 移动端功能特性展示组件
 * 参考 test.tsx 的设计风格，采用垂直布局并支持深色模式
 * @returns 移动端功能特性布局
 */
function FeaturesMobile() {
  return (
    <div className="lg:hidden">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
            更快部署
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            云计算让业务更高效
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 36 36"
                        aria-hidden="true"
                      >
                        <IconComponent />
                      </svg>
                    </div>
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
        <div className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-3 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
            {/* 移动端模拟界面头部 */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                云计算控制台
              </div>
            </div>

            {/* 移动端模拟界面标题栏 */}
            <div className="mb-2 border border-gray-200/50 bg-gray-50/80 p-2 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
              <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                资源管理中心
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                实时监控云计算资源
              </p>
            </div>

            {/* 移动端模拟功能模块 */}
            <div className="mb-2 space-y-2">
              {features.slice(0, 3).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="border border-gray-200/30 bg-gray-50/60 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                        <svg
                          className="h-3 w-3 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-medium text-gray-900 dark:text-white">
                          {feature.name}
                        </h4>
                        <div className="mt-1">
                          <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                            <div
                              className="h-1 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                              style={{ width: `${50 + index * 15}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 移动端模拟状态栏 */}
            <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                <span>系统正常</span>
              </div>
              <span>刚刚更新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 桌面端功能特性展示组件
 * 采用左右分栏布局并支持深色模式
 * @returns 桌面端功能特性布局
 */
function FeaturesDesktop() {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              更快部署
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              云计算助力业务腾飞
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
        <div className="sm:px-6 lg:px-0">
          <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
            {/* 模拟界面头部 */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                云计算控制台
              </div>
            </div>

            {/* 模拟界面标题栏 */}
            <div className="mb-3 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
              <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                资源管理中心
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                实时监控和管理您的云计算资源
              </p>
            </div>

            {/* 模拟功能模块 */}
            <div className="mb-3 grid grid-cols-1 gap-3">
              {features.slice(0, 3).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="group border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <svg
                            className="h-4 w-4 text-blue-600 dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {feature.name}
                        </h4>
                        <p className="mt-1 truncate text-xs text-gray-600 dark:text-gray-400">
                          {feature.summary}
                        </p>
                        <div className="mt-2">
                          <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                            <div
                              className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                              style={{ width: `${60 + index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 模拟状态栏 */}
            <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>系统正常</span>
                </span>
                <span>CPU: 45%</span>
                <span>内存: 62%</span>
              </div>
              <div className="text-right">
                <span>最后更新: 刚刚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 左右分栏展示组件
 * 展示产品的功能特性，支持响应式布局和深色模式
 * 采用左右分栏布局设计
 * @returns 左右分栏功能特性区块
 */
export function Leftright() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container className="md:px-6 lg:px-8">
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
