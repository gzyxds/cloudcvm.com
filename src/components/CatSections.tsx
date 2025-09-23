'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * CatSections 组件 - 电签POS机服务区域
 * 移动端优化的网格式UI，简化布局和交互元素
 * 响应式设计，在不同屏幕尺寸下提供最佳用户体验
 * 支持二维码弹出框功能
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
    <div className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 服务卡片网格 - 移动端两行两列优化 */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {/* 联系咨询 */}
          <div className="bg-[#f3f5f8] border-2 border-white rounded p-3 transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(55,99,170,0.1),-8px_-8px_20px_#fff] sm:p-6" style={{boxShadow: '8px 8px 20px rgba(55,99,170,0.1), -8px -8px 20px #fff'}}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  产品咨询
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  专业团队为您提供电签POS机解决方案
                </p>
              </div>
              <button
                onClick={handleButtonClick}
                className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                联系我们
              </button>
            </div>
          </div>

          {/* 产品服务 */}
          <div className="bg-[#f3f5f8] border-2 border-white rounded p-3 transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(55,99,170,0.1),-8px_-8px_20px_#fff] sm:p-6" style={{boxShadow: '8px 8px 20px rgba(55,99,170,0.1), -8px -8px 20px #fff'}}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  代理合作
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  加入代理商计划，享受分润和返现政策
                </p>
              </div>
              <button
                onClick={handleButtonClick}
                className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                了解更多
              </button>
            </div>
          </div>

          {/* 合作伙伴 */}
          <div className="col-span-2 bg-[#f3f5f8] border-2 border-white rounded p-3 transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(55,99,170,0.1),-8px_-8px_20px_#fff] sm:col-span-1 sm:p-6 lg:col-span-1" style={{boxShadow: '8px 8px 20px rgba(55,99,170,0.1), -8px -8px 20px #fff'}}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  技术支持
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  7×24小时技术支持，保障您的业务正常运行
                </p>
              </div>
              <button
                onClick={handleButtonClick}
                className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-6 sm:py-2.5 sm:text-sm"
              >
                了解详情
              </button>
            </div>
          </div>

          {/* 免费开始体验 - 移动端占据整行 */}
          <div
            className="group col-span-2 transform overflow-hidden rounded-lg border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-4 sm:col-span-2 sm:p-6 lg:col-span-3 lg:p-8"
            style={{
              backgroundImage: 'linear-gradient(135deg, #f3f5f8 50%, #0052d9 50%)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              position: 'relative',
              zIndex: 0
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h2 className="mb-2 text-lg font-bold text-blue-600 sm:mb-3 sm:text-xl lg:text-2xl">
                  免费体验云计算服务
                </h2>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm lg:text-base">
                  无需前期投入，立即体验弹性计算、存储和网络服务
                </p>
              </div>
              <button
                onClick={handleButtonClick}
                className="mt-3 inline-flex flex-shrink-0 items-center border border-transparent px-6 py-2 text-xs font-medium text-gray-900 shadow-sm transition-colors duration-200 hover:bg-gray-100 focus:outline-none sm:mt-0 sm:ml-4 sm:px-8 sm:py-2.5 sm:text-sm"
                style={{ backgroundColor: '#ffffff' }}
              >
                立即体验
              </button>
            </div>
          </div>
        </div>
      </div>

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
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseQRCode}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  联系我们
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  扫描二维码获取更多信息
                </p>

                {/* 双二维码布局 */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* 客服二维码 */}
                  <div className="text-center">
                    <div className="mb-2">
                      <Image
                        src="/images/contact/userhlc.png"
                        alt="客服二维码"
                        width={120}
                        height={120}
                        className="h-32 w-32 border border-gray-200 object-contain shadow-lg mx-auto"
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-medium">客服微信</p>
                  </div>

                  {/* 公众号二维码 */}
                  <div className="text-center">
                    <div className="mb-2">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="公众号二维码"
                        width={120}
                        height={120}
                        className="h-32 w-32 border border-gray-200 object-contain shadow-lg mx-auto"
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-medium">微信公众号</p>
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
