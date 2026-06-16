'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import DemoShowcase from './components/demo'
/**
 * 产品演示页面
 * 包含导航菜单、英雄区域、产品展示和页脚
 * @returns {JSX.Element} 页面组件
 */
const DemoPage = () => {
  /**
   * 处理联系客服按钮点击事件
   * 触发BackToTop组件中的二维码弹窗
   */
  const handleContactService = () => {
    // 触发自定义事件，让BackToTop组件显示二维码弹窗
    window.dispatchEvent(new CustomEvent('showQRCodeModal'))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 导航菜单 */}
      <Header />

      {/* 简约英雄区域 */}
      <section className="relative overflow-hidden bg-gray-50 pt-10 dark:bg-gray-900">
        {/* 背景装饰光晕 */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-[#0055ff]/[0.06] blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-blue-400/[0.06] blur-3xl sm:h-80 sm:w-80" />
        </div>
        {/* 底部波浪分隔 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z" fill="white" className="dark:fill-gray-900" />
          </svg>
        </div>
        <Container className="relative py-14 lg:py-18">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
                <Star className="h-4 w-4" />
                用科技创造无限可能
              </div>

              <h1 className="mb-4 text-4xl leading-tight font-bold text-black md:text-5xl lg:text-6xl">
                产品体验
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
                基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button
                className="bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
                onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20/', '_blank')}
              >
                立即购买
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 px-8 py-3 font-medium text-gray-700 hover:bg-gray-50"
                onClick={handleContactService}
              >
                联系我们
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <main>
        {/* 产品展示区域 */}
        <DemoShowcase />
      </main>

      {/* 底部 */}
      <Footer />
    </div>
  )
}

export default DemoPage
