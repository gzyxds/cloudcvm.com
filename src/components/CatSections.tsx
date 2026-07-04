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

/** 服务卡片属性 */
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  cta: string
  onCtaClick: () => void
}

/** 服务卡片子组件 */
function ServiceCard({ icon: Icon, title, description, cta, onCtaClick }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-xl bg-white p-6 ring-1 ring-black/[0.06] transition-all duration-300 hover:shadow-lg hover:shadow-black/[0.04] hover:ring-black/[0.10]">
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-500 text-white shadow-sm">
        <Icon className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <button
        type="button"
        onClick={onCtaClick}
        className="mt-5 inline-flex items-center text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
      >
        {cta}
        <ArrowRightIcon className="ml-1 size-4" />
      </button>
    </div>
  )
}

/** 底部服务与 CTA 区块 */
export default function CatSections() {
  const [showQRCode, setShowQRCode] = useState(false)

  return (
    <section className="bg-[url('/images/background/background-5.webp')] bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24">
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
            description="7×24 小时技术支持，保障您的业务正常运行"
            cta="了解详情"
            onCtaClick={() => setShowQRCode(true)}
          />

          {/* 免费体验横幅 */}
          <div className="col-span-1 relative overflow-hidden rounded-xl bg-brand-600 sm:col-span-2 lg:col-span-3">
            {/* 视频背景（移动端隐藏） */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover sm:block"
            >
              <source src="https://qcloudimg.tencent-cloud.cn/raw/d9b1e0c770a35534d47c6562b6d4489d.mp4" type="video/mp4" />
            </video>
            {/* 暗色叠加层 */}
            <div className="pointer-events-none absolute inset-0 hidden bg-brand-600/60 sm:block" />
            <div className="relative flex flex-col justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center lg:px-10 lg:py-10">
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  <RocketLaunchIcon className="mr-1.5 size-4" />
                  限时优惠
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white lg:text-3xl">
                  免费体验云计算服务
                </h2>
                <p className="mt-2 text-base text-brand-100">
                  无需前期投入，立即体验弹性计算、存储和网络服务
                </p>
              </div>
              <a
                href="https://console.cloudcvm.com/cart/goodsList.htm"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-sm transition-colors hover:bg-brand-50"
              >
                立即体验
                <ArrowRightIcon className="ml-2 size-4" />
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
              className="relative w-full max-w-sm rounded-xl bg-white shadow-xl ring-1 ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowQRCode(false)}
                className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="关闭"
              >
                <XMarkIcon className="size-5" />
              </button>

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900">联系我们</h3>
                <p className="mt-2 text-sm text-gray-500">
                  扫描二维码获取更多信息
                </p>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                      <Image
                        src="/images/contact/userhlc.png"
                        alt="客服二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-600">
                      客服微信
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="公众号二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-600">
                      微信公众号
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  长按二维码保存到相册
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
