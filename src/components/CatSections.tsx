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
import { Container } from '@/components/Container'

/**
 * CatSections 组件 - 电签POS机服务区域
 *
 * 采用 Bento Grid 布局展示核心业务，包括产品咨询、代理合作、技术支持和免费体验入口。
 * 遵循 Linear-style 设计规范，使用细边框、微阴影和科技蓝配色。
 *
 * @returns {JSX.Element} 渲染的服务分类区域组件
 */
export default function CatSections() {
  const [showQRCode, setShowQRCode] = useState(false)

  /**
   * 处理按钮点击事件，显示二维码弹出框
   */
  const handleButtonClick = () => {
    setShowQRCode(true)
  }

  /**
   * 关闭二维码弹出框
   */
  const handleCloseQRCode = () => {
    setShowQRCode(false)
  }

  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-16">
      <Container>
        {/* 服务卡片网格 - 采用 Bento Grid 布局 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* 产品咨询 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  产品咨询
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  专业团队为您提供电签POS机解决方案
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="mt-5 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700"
              >
                联系我们 <span aria-hidden="true" className="ml-1">→</span>
              </button>
            </div>
          </div>

          {/* 代理合作 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  代理合作
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  加入代理商计划，享受分润和返现政策
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="mt-5 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700"
              >
                了解更多 <span aria-hidden="true" className="ml-1">→</span>
              </button>
            </div>
          </div>

          {/* 技术支持 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <LifebuoyIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  技术支持
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  7×24小时技术支持，保障您的业务正常运行
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="mt-5 inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700"
              >
                了解详情 <span aria-hidden="true" className="ml-1">→</span>
              </button>
            </div>
          </div>

          {/* 免费体验 - 占据整行，恢复斜切风格 */}
          <div
            className="group relative col-span-1 overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-3"
            style={{
              background: 'linear-gradient(135deg, #ffffff 55%, #0055ff 55%)'
            }}
          >
            <div className="relative z-10 flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center lg:p-10">
              <div className="flex-1 max-w-xl">
                <div className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-base font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
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

              <button
                onClick={handleButtonClick}
                className="inline-flex flex-shrink-0 items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#0055ff] shadow-sm transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055ff]"
              >
                立即体验
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* 二维码弹出框模态框 */}
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

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseQRCode}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                aria-label="关闭"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  联系我们
                </h3>
                <p className="mb-8 text-base text-slate-500">
                  扫描二维码获取更多信息
                </p>

                {/* 双二维码布局 */}
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

                {/* 提示文字 */}
                <p className="text-sm text-slate-400">
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
