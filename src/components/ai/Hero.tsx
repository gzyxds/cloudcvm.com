'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  CodeBracketIcon,
  CloudArrowDownIcon,
  UserGroupIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

/**
 * 产品特性接口
 * @interface Feature
 * @property {string} name - 特性名称
 * @property {string} href - 链接地址
 */
interface Feature {
  name: string
  href: string
}

/**
 * 功能卡片接口
 * @interface Card
 * @property {string} title - 卡片标题
 * @property {string} description - 卡片描述
 * @property {string} iconType - 图标类型
 */
interface Card {
  title: string
  description: string
  iconType: string
}

/**
 * 产品特性数据配置
 * 展示艺创AI的核心功能模块
 */
const features: Feature[] = [
  { name: 'AI数字人', href: '/human' },
  { name: '知识库', href: '/ai' },
  { name: '智能绘画', href: '/chat' },
  { name: '论文创作', href: '/paper' },
  { name: 'PHP&Java', href: '/' }
]

/**
 * 功能卡片数据配置
 * 突出艺创AI的核心优势和服务能力
 */
const cards: Card[] = [
  {
    iconType: 'code',
    title: '双语言版本',
    description: 'PHP/Java双版本支持'
  },
  {
    title: '私有部署',
    description: '安全可控的私有化部署',
    iconType: 'cloud'
  },
  {
    title: '专业团队',
    description: '一对一技术支持',
    iconType: 'group'
  },
  {
    title: '开源方案',
    description: '灵活定制，售后无忧',
    iconType: 'star'
  }
]

/**
 * 根据图标类型获取对应的图标组件
 * @param {string} iconType - 图标类型标识
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByType(iconType: string) {
  const iconMap = {
    code: CodeBracketIcon,
    cloud: CloudArrowDownIcon,
    group: UserGroupIcon,
    star: StarIcon
  }
  return iconMap[iconType as keyof typeof iconMap] || CodeBracketIcon
}

/**
 * 二维码弹窗组件
 * 用于显示客服联系方式
 * @param {boolean} isOpen - 是否打开弹窗
 * @param {() => void} onClose - 关闭弹窗回调
 * @returns {JSX.Element} 二维码弹窗组件
 */
function QRModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="关闭弹窗"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">联系客服</h3>
          <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">二维码占位</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">扫描二维码添加客服微信</p>
        </div>
      </div>
    </div>
  )
}

/**
 * 功能卡片组件
 * 展示艺创AI的核心功能特性
 * @param {Card} card - 卡片数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 功能卡片组件
 */
function FeatureCard({ card, index }: { card: Card; index: number }) {
  const IconComponent = getIconByType(card.iconType)

  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-3 sm:p-4 lg:p-6 hover:shadow-md hover:border-[#0055ff]/30 transition-all duration-200">
      {/* 图标区域 */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0055ff]/10 rounded-lg flex items-center justify-center mb-2 sm:mb-4">
        <IconComponent className="h-5 w-5 text-[#0055ff]" />
      </div>
      {/* 内容区域 */}
      <div className="space-y-1 sm:space-y-2">
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{card.title}</h4>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}



/**
 * Hero组件 - 艺创AI首页英雄区域
 * 采用简洁的模拟面设计风格，以蓝色调为主，统一视觉效果
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计、暗黑模式兼容
 * 
 * 功能包括：
 * 1. 展示网站的主要标题和简介
 * 2. 提供产品特性标签
 * 3. 提供行动按钮（联系客服、查看演示）
 * 4. 展示产品功能卡片
 * 5. 响应式设计，适配不同屏幕尺寸
 * 6. 支持暗黑模式
 * 7. 集成二维码弹窗功能
 * @returns {JSX.Element} Hero组件
 */
export default function Hero() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  /**
   * 处理联系客服按钮点击
   */
  const handleContactClick = () => {
    setIsQRModalOpen(true)
  }

  /**
   * 关闭二维码弹窗
   */
  const handleCloseQRModal = () => {
    setIsQRModalOpen(false)
  }

  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
        {/* AI背景装饰 */}
        <div className="absolute inset-0">
          {/* 原有的光晕效果 */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0055ff]/10 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0055ff]/8 rounded-full blur-3xl opacity-40"></div>
          
          {/* AI芯片图案 - 调整位置到右上角 */}
          <div className="absolute top-16 right-16 w-40 h-40 opacity-25">
            <div className="w-full h-full border-2 border-[#0055ff]/40 rounded-lg relative">
              <div className="absolute inset-2 border border-[#0055ff]/30 rounded">
                <div className="grid grid-cols-3 gap-1 p-2 h-full">
                  <div className="bg-[#0055ff]/30 rounded-sm"></div>
                  <div className="bg-[#0055ff]/40 rounded-sm"></div>
                  <div className="bg-[#0055ff]/30 rounded-sm"></div>
                  <div className="bg-[#0055ff]/40 rounded-sm"></div>
                  <div className="bg-[#0055ff]/50 rounded-sm"></div>
                  <div className="bg-[#0055ff]/40 rounded-sm"></div>
                  <div className="bg-[#0055ff]/30 rounded-sm"></div>
                  <div className="bg-[#0055ff]/40 rounded-sm"></div>
                  <div className="bg-[#0055ff]/30 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 神经网络连接线 - 调整位置到左下角 */}
          <div className="absolute bottom-16 left-16 w-56 h-56 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* 节点 */}
              <circle cx="50" cy="50" r="5" fill="#0055ff" opacity="0.7"/>
              <circle cx="150" cy="50" r="5" fill="#0055ff" opacity="0.7"/>
              <circle cx="100" cy="100" r="6" fill="#0055ff" opacity="0.9"/>
              <circle cx="50" cy="150" r="5" fill="#0055ff" opacity="0.7"/>
              <circle cx="150" cy="150" r="5" fill="#0055ff" opacity="0.7"/>
              
              {/* 连接线 */}
              <line x1="50" y1="50" x2="100" y2="100" stroke="#0055ff" strokeWidth="1.5" opacity="0.5"/>
              <line x1="150" y1="50" x2="100" y2="100" stroke="#0055ff" strokeWidth="1.5" opacity="0.5"/>
              <line x1="100" y1="100" x2="50" y2="150" stroke="#0055ff" strokeWidth="1.5" opacity="0.5"/>
              <line x1="100" y1="100" x2="150" y2="150" stroke="#0055ff" strokeWidth="1.5" opacity="0.5"/>
              <line x1="50" y1="50" x2="150" y2="50" stroke="#0055ff" strokeWidth="1" opacity="0.4"/>
              <line x1="50" y1="150" x2="150" y2="150" stroke="#0055ff" strokeWidth="1" opacity="0.4"/>
            </svg>
          </div>
          
          {/* 数据流动效果 - 调整位置和大小 */}
          <div className="absolute top-1/2 right-1/3 w-72 h-3 opacity-25">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#0055ff]/50 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          {/* 二进制代码装饰 - 调整位置和透明度 */}
          <div className="absolute top-1/3 right-8 text-[#0055ff]/15 text-sm font-mono leading-tight opacity-40 select-none">
            01001001 01000001<br/>
            01000001 01001001<br/>
            01000111 01000011<br/>
            01000001 01001001
          </div>
          
          {/* 新增：左上角装饰点 */}
          <div className="absolute top-8 left-8 opacity-20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#0055ff]/40 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-[#0055ff]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-[#0055ff]/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* 左侧内容区 */}
            <div className="text-center lg:text-left space-y-8">
              {/* 主标题 */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="text-[#0055ff] block mb-2">艺创AI</span>
                  <span className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-medium">
                    新一代AI系统赋能企业
                  </span>
                </h1>
                
                {/* 简洁装饰线 */}
                <div className="w-20 h-1 bg-[#0055ff] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              {/* 描述文本 */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                一站式 ( 渐进式 ) AIGC 系统，提供面向个人用户 (ToC)、开发者 (ToD) 和企业 (ToB) 的全面AI解决方案、一次购买、永久免费更新
              </p>

              {/* 特性标签 - 统一蓝色调 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {features.map((feature) => (
                  <a 
                    key={feature.name}
                    href={feature.href} 
                    className="px-4 py-2 bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 rounded-lg text-sm font-medium hover:bg-[#0055ff]/20 transition-colors"
                    aria-label={feature.name}
                  >
                    {feature.name}
                  </a>
                ))}
              </div>
              
              {/* 按钮组 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={handleContactClick}
                  className="px-8 py-3 bg-[#0055ff] hover:bg-[#0044dd] text-white font-semibold rounded-lg border border-[#0055ff] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                  aria-label="联系客服"
                >
                  <span>联系客服</span>
                  <ChatBubbleLeftRightIcon className="w-5 h-5 ml-2" />
                </button>
                
                <a 
                  href="/demo" 
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg hover:border-[#0055ff] transition-all duration-200 flex items-center justify-center"
                  aria-label="查看演示"
                >
                  <span>查看演示</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* 右侧展示区 - 简洁模拟面设计 */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8">
                
                {/* 顶部标签区 */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {features.slice(0, 4).map((feature) => (
                    <span key={feature.name} className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 rounded-md">
                      {feature.name}
                    </span>
                  ))}
                </div>

                {/* 功能卡片网格 */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {cards.map((card, index) => (
                    <FeatureCard key={index} card={card} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 二维码弹窗 */}
      <QRModal 
        isOpen={isQRModalOpen}
        onClose={handleCloseQRModal}
      />
    </>
  )
}
