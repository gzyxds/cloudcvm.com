'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Container } from '@/components/Container'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  cta: string
  onCtaClick: () => void
}

function ServiceCard({ icon: Icon, title, description, cta, onCtaClick }: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-colors">
      <div className="mb-4 w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
        {description}
      </p>
      <button
        onClick={onCtaClick}
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        {cta}
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </button>
    </div>
  )
}

export default function CatSections() {
  const [showQRCode, setShowQRCode] = useState(false)

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: 'url("/images/background/background-5.webp")' }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={ChatBubbleLeftRightIcon}
            title="产品咨询"
            description="专业团队为您提供云计算解决方案"
            cta="联系我们"
            onCtaClick={() => setShowQRCode(true)}
          />
          <ServiceCard
            icon={UserGroupIcon}
            title="代理合作"
            description="加入代理商计划，享受分润和返现政策"
            cta="了解更多"
            onCtaClick={() => setShowQRCode(true)}
          />
          <ServiceCard
            icon={LifebuoyIcon}
            title="技术支持"
            description="7×24小时技术支持，保障您的业务正常运行"
            cta="了解详情"
            onCtaClick={() => setShowQRCode(true)}
          />

          {/* 免费体验横幅 */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-blue-600 rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-6 py-8 lg:px-10 lg:py-10">
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white mb-3">
                  <RocketLaunchIcon className="mr-1.5 h-4 w-4" />
                  限时优惠
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  免费体验云计算服务
                </h2>
                <p className="mt-2 text-base text-blue-100">
                  无需前期投入，立即体验弹性计算、存储和网络服务
                </p>
              </div>
              <a
                href="https://console.cloudcvm.com/cart/goodsList.htm"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              >
                立即体验
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setShowQRCode(false)}
          >
            <div className="absolute inset-0 bg-black/50" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="关闭"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">联系我们</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">扫描二维码获取更多信息</p>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="text-center">
                    <div className="mb-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-2">
                      <Image
                        src="/images/contact/userhlc.png"
                        alt="客服二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">客服微信</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-2">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="公众号二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">微信公众号</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
