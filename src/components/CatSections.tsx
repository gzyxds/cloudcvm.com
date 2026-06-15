'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  LifebuoyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container } from '@/components/Container'

// ============================================================
// 类型定义
// ============================================================
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  cta: string
  onCtaClick: () => void
}

// ============================================================
// 服务卡片（产品咨询 / 代理合作 / 技术支持）
// ============================================================
function ServiceCard({ icon: Icon, title, description, cta, onCtaClick }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-5',
        'transition-all duration-300',
        'hover:border-primary-500/25 hover:shadow-lg hover:shadow-primary-500/5'
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div
            className={cn(
              'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg',
              'bg-primary-500/10 text-primary-500',
              'group-hover:bg-primary-600 group-hover:text-white',
              'transition-colors duration-300'
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p>
        </div>

        <button
          onClick={onCtaClick}
          className={cn(
            'mt-5 inline-flex items-center gap-1 text-base font-medium text-primary-500',
            'transition-colors hover:text-primary-600'
          )}
        >
          {cta}
          <span aria-hidden="true" className="ml-0.5 transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </div>
  )
}

// ============================================================
// 主组件
// ============================================================
export default function CatSections() {
  const [showQRCode, setShowQRCode] = useState(false)

  const handleButtonClick = () => setShowQRCode(true)
  const handleCloseQRCode = () => setShowQRCode(false)

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            icon={ChatBubbleLeftRightIcon}
            title="产品咨询"
            description="专业团队为您提供电签POS机解决方案"
            cta="联系我们"
            onCtaClick={handleButtonClick}
          />

          <ServiceCard
            icon={UserGroupIcon}
            title="代理合作"
            description="加入代理商计划，享受分润和返现政策"
            cta="了解更多"
            onCtaClick={handleButtonClick}
          />

          <ServiceCard
            icon={LifebuoyIcon}
            title="技术支持"
            description="7×24小时技术支持，保障您的业务正常运行"
            cta="了解详情"
            onCtaClick={handleButtonClick}
          />

          {/* 免费体验 - 保留斜切风格 */}
          <div
            className={cn(
              'group relative col-span-1 overflow-hidden rounded-xl border border-slate-200',
              'shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/8',
              'sm:col-span-2 lg:col-span-3'
            )}
            style={{
              background: 'linear-gradient(135deg, #ffffff 55%, #3860F4 55%)'
            }}
          >
            <div className="relative z-10 flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center lg:p-10">
              <div className="flex-1 max-w-xl">
                {/* 徽章 */}
                <div className="mb-3 inline-flex items-center rounded-full bg-primary-50 px-3 py-0.5 text-base font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
                  <RocketLaunchIcon className="mr-1.5 h-4 w-4" />
                  限时优惠
                </div>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  免费体验云计算服务
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  无需前期投入，立即体验弹性计算、存储和网络服务
                </p>
              </div>

              <a
                href="https://console.cloudcvm.com/cart/goodsList.htm"
                className={cn(
                  'inline-flex flex-shrink-0 items-center justify-center rounded-lg',
                  'bg-white px-8 py-3 text-lg font-semibold text-primary-600',
                  'shadow-sm transition-all duration-200',
                  'hover:bg-slate-50 hover:shadow-md',
                  'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500'
                )}
              >
                立即体验
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
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
            onClick={handleCloseQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

            {/* 模态框 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseQRCode}
                className={cn(
                  'absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center',
                  'rounded-full bg-slate-100 text-slate-500',
                  'transition-colors hover:bg-slate-200 hover:text-slate-700'
                )}
                aria-label="关闭"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              {/* 内容 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">联系我们</h3>
                <p className="mb-8 text-base text-slate-500">扫描二维码获取更多信息</p>

                {/* 双二维码 */}
                <div className="mb-6 grid grid-cols-2 gap-6">
                  {/* 客服二维码 */}
                  <div className="group text-center">
                    <div className="mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all group-hover:shadow-md">
                      <Image
                        src="/images/contact/userhlc.png"
                        alt="客服二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-slate-600">客服微信</p>
                  </div>

                  {/* 公众号二维码 */}
                  <div className="group text-center">
                    <div className="mb-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all group-hover:shadow-md">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="公众号二维码"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-slate-600">微信公众号</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
