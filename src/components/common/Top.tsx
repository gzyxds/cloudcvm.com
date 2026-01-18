'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Headphones, Phone, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * 顶部悬浮组件
 * 提供客服、咨询、购物车等功能，支持悬停显示二维码和点击弹出模态框
 * 采用现代化设计风格，参考test.tsx的交互设计
 */
export default function Top() {
  const [isVisible, setIsVisible] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [showClickQRCode, setShowClickQRCode] = useState(false)

  // 监听滚动事件，当页面滚动超过300px时显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // 监听滚动事件
    window.addEventListener('scroll', toggleVisibility)

    // 监听自定义事件，用于从其他组件触发二维码弹窗
    const handleShowQRCodeModal = () => {
      setShowClickQRCode(true)
    }

    window.addEventListener('showQRCodeModal', handleShowQRCodeModal)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('showQRCodeModal', handleShowQRCodeModal)
    }
  }, [])

  /**
   * 滚动到页面顶部
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /**
   * 处理点击弹出二维码的函数
   */
  const handleClickQRCode = () => {
    setShowClickQRCode(true)
  }

  /**
   * 关闭点击弹出的二维码
   */
  const handleCloseClickQRCode = () => {
    setShowClickQRCode(false)
  }

  return (
    <>
      <div className="fixed right-4 bottom-32 z-50 flex flex-col gap-3">
        {/* 客服按钮 - 蓝色渐变，参考test.tsx的设计 */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onMouseEnter={() => setShowQRCode(true)}
              onMouseLeave={() => setShowQRCode(false)}
            >
              <button
                className="flex h-28 w-12 flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
                aria-label="联系客服"
                onClick={handleClickQRCode}
              >
                <Headphones className="mb-2 h-6 w-6" />
                <div className="text-xs leading-tight font-medium">
                  <div>客服</div>
                  <div>咨询</div>
                </div>
              </button>

              {/* 二维码悬停弹窗 */}
              <AnimatePresence>
                {showQRCode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full bottom-0 mr-3 min-w-[200px] border border-gray-100 bg-white shadow-2xl backdrop-blur-sm"
                    style={{
                      boxShadow:
                        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    }}
                    onMouseEnter={() => setShowQRCode(true)}
                    onMouseLeave={() => setShowQRCode(false)}
                  >
                    <div className="p-5">
                      <div className="text-center">
                        <div className="mb-4 text-sm text-gray-600">
                          扫码联系客服
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/images/contact/Tencent.png"
                            alt="客服二维码"
                            width={144}
                            height={144}
                            className="h-36 w-36 border border-gray-200 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 小三角指示器 */}
                    <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white/95 drop-shadow-sm"></div>
                    {/* 装饰性边框 */}
                    <div className="pointer-events-none absolute inset-0 border border-gray-100/50"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 咨询/购物车按钮 - 白色按钮包含两个选项，参考test.tsx的设计 */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"

            >
              <div className="flex h-28 w-12 flex-col overflow-hidden border border-gray-200/50 bg-white shadow-lg">
                {/* 咨询选项 */}
                <button
                  className="flex flex-1 flex-col items-center justify-center border-b border-gray-100 text-gray-700 transition-colors hover:bg-gray-50"
                  onMouseEnter={() => setShowConsultation(true)}
                  onMouseLeave={() => setShowConsultation(false)}
                >
                  <Phone className="mb-1 h-4 w-4" />
                  <span className="text-xs font-medium">咨询</span>
                </button>

                {/* 购物车选项 */}
                <Link
                  href="https://console.cloudcvm.com/cart/shoppingCar.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 flex-col items-center justify-center text-gray-700 transition-colors hover:bg-gray-50"
                  aria-label="购物车"
                  onMouseEnter={() => setShowShoppingCart(true)}
                  onMouseLeave={() => setShowShoppingCart(false)}
                >
                  <ShoppingCart className="mb-1 h-4 w-4" />
                  <span className="text-xs font-medium">购物车</span>
                </Link>
              </div>

              {/* 咨询详情弹窗 */}
              <AnimatePresence>
                {showConsultation && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute right-full bottom-0 mr-3 min-w-[240px] rounded-md border border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
                    onMouseEnter={() => setShowConsultation(true)}
                    onMouseLeave={() => setShowConsultation(false)}
                  >
                    <div className="p-6">
                      <div className="text-left">
                        <div className="mb-4 text-sm font-semibold text-gray-800">
                          优刻云
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="text-xs font-medium text-gray-700">智能客服</div>
                            <Link
                              href="/aiservice"
                              className="text-xs text-blue-500 hover:text-blue-600 hover:underline"
                            >
                              点击咨询
                            </Link>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-gray-700">售后咨询</div>
                            <Link
                              href="https://qm.qq.com/q/s1poMRyNJm?from=tim"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-500 hover:text-blue-600 hover:underline"
                            >
                              QQ客服
                            </Link>
                          </div>
                          <div className="border-t border-gray-200/70 my-3 pt-3">
                            <div className="text-xs font-medium text-gray-700 mb-1">Telegram</div>

                            <Link
                              href="https://t.me/Youkeyun"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
                            >
                              @Youkeyun
                            </Link>
                          </div>
                          <div className="border-t border-gray-200/70 my-3 pt-3 text-center">
                            <div className="text-xs font-medium text-gray-700 mb-3">腾讯客服</div>
                            <div className="flex justify-center">
                              <Image
                                src="/images/contact/QQ.png"
                                alt="微信客服二维码"
                                width={110}
                                height={110}
                                className="border border-gray-200 rounded-md shadow-sm transition-all duration-300 hover:shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 小三角 */}
                    <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 购物车详情弹窗 */}
              <AnimatePresence>
                {showShoppingCart && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute right-full bottom-0 mr-3 min-w-[200px] rounded-md border border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
                    onMouseEnter={() => setShowShoppingCart(true)}
                    onMouseLeave={() => setShowShoppingCart(false)}
                  >
                    <div className="p-6">
                      <div className="text-center">
                        <div className="mb-3 text-sm font-semibold text-gray-800">
                          购物车
                        </div>
                        <div className="text-xs text-gray-600">
                          查看您的购物车商品
                        </div>
                      </div>
                    </div>

                    {/* 小三角指示器 */}
                    <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white/95 drop-shadow-sm"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 返回顶部按钮 - 白色圆形，参考test.tsx的设计 */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center border border-gray-200/50 bg-white text-gray-700 shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
              aria-label="返回顶部"
            >
              <ChevronUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 点击弹出的二维码模态框，参考test.tsx的设计 */}
      <AnimatePresence>
        {showClickQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
            onClick={handleCloseClickQRCode}
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
                onClick={handleCloseClickQRCode}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <X className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  联系客服
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  扫描二维码添加客服微信
                </p>

                {/* 二维码 */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src="/images/contact/Tencent.png"
                      alt="客服二维码"
                      width={192}
                      height={192}
                      className="h-48 w-48 border border-gray-200 object-contain shadow-lg"
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
