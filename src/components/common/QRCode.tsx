'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * 预设配置类型
 */
export type QRCodePreset = 'customer-service' | 'wechat-official' | 'custom'

/**
 * 二维码弹出组件的属性接口
 * @interface QRCodeModalProps
 */
interface QRCodeModalProps {
  /** 触发按钮的文本内容 */
  buttonText: string
  /** 二维码图片路径 */
  qrCodeSrc: string
  /** 二维码图片的alt文本 */
  qrCodeAlt: string
  /** 弹窗标题 */
  title: string
  /** 弹窗描述文本 */
  description: string
  /** 按钮的自定义样式类名 */
  buttonClassName?: string
  /** 二维码图片尺寸（宽度和高度相同） */
  qrCodeSize?: number
  /** 提示文字 */
  hintText?: string
}

/**
 * 预设配置数据
 */
const QR_CODE_PRESETS = {
  'customer-service': {
    qrCodeSrc: '/images/contact/userhlc.png',
    qrCodeAlt: '客服二维码',
    title: '联系客服',
    description: '扫描二维码，添加客服微信',
    hintText: '工作时间：9:00-18:00'
  },
  'wechat-official': {
    qrCodeSrc: '/images/contact/gzh.png',
    qrCodeAlt: '微信公众号二维码',
    title: '关注公众号',
    description: '扫描二维码，关注我们的微信公众号',
    hintText: '获取最新产品资讯和优惠信息'
  }
} as const

/**
 * 简化的二维码按钮组件属性接口
 */
interface SimpleQRCodeButtonProps {
  /** 预设配置类型 */
  preset?: QRCodePreset
  /** 触发按钮的文本内容 */
  buttonText?: string
  /** 按钮的自定义样式类名 */
  buttonClassName?: string
  /** 自定义配置（当preset为'custom'时使用） */
  customConfig?: {
    qrCodeSrc: string
    qrCodeAlt: string
    title: string
    description: string
    hintText?: string
  }
}

/**
 * 双二维码弹出组件的属性接口
 * @interface DualQRCodeModalProps
 */
interface DualQRCodeModalProps {
  /** 是否显示弹窗 */
  isOpen: boolean
  /** 关闭弹窗的回调函数 */
  onClose: () => void
  /** 触发按钮的文本内容 */
  buttonText: string
  /** 第一个二维码配置 */
  firstQRCode: {
    src: string
    alt: string
    label: string
    description?: string
  }
  /** 第二个二维码配置 */
  secondQRCode: {
    src: string
    alt: string
    label: string
    description?: string
  }
  /** 弹窗标题 */
  title: string
  /** 弹窗描述文本 */
  description: string
  /** 按钮的自定义样式类名 */
  buttonClassName?: string
  /** 二维码图片尺寸（宽度和高度相同） */
  qrCodeSize?: number
  /** 提示文字 */
  hintText?: string
}

/**
 * 可复用的二维码弹出组件
 * 基于Top.tsx的设计风格，提供统一的二维码弹窗体验
 * 支持单个二维码显示，响应式布局适配不同屏幕尺寸
 *
 * @param props - 组件属性
 * @returns JSX.Element
 */
export function QRCodeModal({
  buttonText,
  qrCodeSrc,
  qrCodeAlt,
  title,
  description,
  buttonClassName = '',
  qrCodeSize = 192,
  hintText = '长按二维码保存到相册'
}: QRCodeModalProps) {
  const [showQRCode, setShowQRCode] = useState(false)

  /**
   * 处理按钮点击事件，显示二维码弹出框
   */
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={buttonClassName || "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"}
      >
        {buttonText}
      </button>

      {/* 二维码弹出框模态框 - 使用Portal渲染到body */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6"
              onClick={handleCloseModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh'
              }}
            >
            {/* 增强的背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-md z-[99998]"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto'
              }}
            ></motion.div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70 z-[99999]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-[99999] flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  {description}
                </p>

                {/* 二维码 */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src={qrCodeSrc}
                      alt={qrCodeAlt}
                      width={qrCodeSize}
                      height={qrCodeSize}
                      className="border border-gray-200 object-contain shadow-lg"
                      style={{ width: qrCodeSize, height: qrCodeSize }}
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="mt-6 text-xs text-gray-500">
                  {hintText || '长按二维码保存到相册，或使用微信扫一扫'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}

/**
 * 可复用的双二维码弹出组件
 * 基于Top.tsx的设计风格，提供统一的双二维码弹窗体验
 * 支持两个二维码并排显示，响应式布局适配不同屏幕尺寸
 *
 * @param props - 组件属性
 * @returns JSX.Element
 */
export function DualQRCodeModal({
  isOpen,
  onClose,
  buttonText,
  firstQRCode,
  secondQRCode,
  title,
  description,
  buttonClassName = '',
  qrCodeSize = 120,
  hintText = '长按二维码保存到相册'
}: DualQRCodeModalProps) {
  return (
    <>
      {/* 二维码弹出框模态框 - 使用Portal渲染到body */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6"
              onClick={onClose}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
              height: '100vh'
            }}
          >
            {/* 增强的背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 backdrop-blur-md z-[99998]"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto'
              }}
            ></motion.div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-4 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70 z-[99999]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  {description}
                </p>

                {/* 双二维码布局 - 参考VideoCarousel.tsx设计 */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* 第一个二维码 */}
                  <div className="text-center">
                    <div className="mb-3 text-sm font-medium text-gray-700">
                      {firstQRCode.label}
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={firstQRCode.src}
                        alt={firstQRCode.alt}
                        width={qrCodeSize}
                        height={qrCodeSize}
                        className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                       {firstQRCode.description || '微信客服咨询'}
                     </p>
                  </div>

                  {/* 第二个二维码 */}
                  <div className="text-center">
                    <div className="mb-3 text-sm font-medium text-gray-700">
                      {secondQRCode.label}
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={secondQRCode.src}
                        alt={secondQRCode.alt}
                        width={qrCodeSize}
                        height={qrCodeSize}
                        className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                       {secondQRCode.description || '获取最新资讯'}
                     </p>
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="mt-6 text-xs text-gray-500">{hintText}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}

/**
 * 简化的二维码按钮组件
 * 提供预设配置，使用更简洁的API
 */
export function QRCodeButton({
  preset = 'customer-service',
  buttonText,
  buttonClassName = '',
  customConfig
}: SimpleQRCodeButtonProps) {
  // 获取配置
  const config = preset === 'custom' && customConfig
    ? customConfig
    : QR_CODE_PRESETS[preset as keyof typeof QR_CODE_PRESETS]

  // 默认按钮文本
  const defaultButtonText = preset === 'customer-service' ? '联系客服' : '关注公众号'
  const finalButtonText = buttonText || defaultButtonText

  return (
    <QRCodeModal
      buttonText={finalButtonText}
      qrCodeSrc={config.qrCodeSrc}
      qrCodeAlt={config.qrCodeAlt}
      title={config.title}
      description={config.description}
      hintText={config.hintText}
      buttonClassName={buttonClassName}
    />
  )
}

/**
 * 客服二维码按钮组件（预设）
 */
export function CustomerServiceQRCode({
  buttonText = '联系客服',
  buttonClassName = ''
}: {
  buttonText?: string
  buttonClassName?: string
}) {
  return (
    <QRCodeButton
      preset="customer-service"
      buttonText={buttonText}
      buttonClassName={buttonClassName}
    />
  )
}

/**
 * 微信公众号二维码按钮组件（预设）
 */
export function WechatOfficialQRCode({
  buttonText = '关注公众号',
  buttonClassName = ''
}: {
  buttonText?: string
  buttonClassName?: string
}) {
  return (
    <QRCodeButton
      preset="wechat-official"
      buttonText={buttonText}
      buttonClassName={buttonClassName}
    />
  )
}

/**
 * 双二维码按钮组合组件的属性接口
 */
interface DualQRCodeButtonGroupProps {
  /** 左侧按钮配置 */
  leftButton: {
    text: string
    className?: string
    icon?: React.ReactNode
  }
  /** 右侧按钮配置 */
  rightButton: {
    text: string
    className?: string
    icon?: React.ReactNode
  }
  /** 左侧二维码配置 */
  leftQRCode: {
    src?: string
    url?: string
    alt?: string
    title: string
    description: string
  }
  /** 右侧二维码配置 */
  rightQRCode: {
    src?: string
    url?: string
    alt?: string
    title: string
    description: string
  }
  /** 弹窗标题 */
  title?: string
  /** 弹窗描述 */
  description?: string
  /** 容器样式类名 */
  containerClassName?: string
}

/**
 * 双二维码按钮组合组件
 * 包含两个按钮和一个双二维码模态框
 */
export function DualQRCodeButtonGroup({
  leftButton,
  rightButton,
  leftQRCode,
  rightQRCode,
  title = '扫码联系我们',
  description = '选择下方二维码进行联系',
  containerClassName = ''
}: DualQRCodeButtonGroupProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* 按钮组 */}
      <div className={`flex gap-4 justify-start ${containerClassName}`}>
        <button
          onClick={handleOpenModal}
          className={
            leftButton.className
              ? `w-full sm:w-auto sm:min-w-[160px] sm:max-w-[220px] inline-flex items-center justify-center font-medium ${leftButton.className}`
              : `w-full sm:w-auto sm:min-w-[160px] sm:max-w-[220px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors duration-200 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800`
          }
        >
          {leftButton.icon && <span className="mr-2">{leftButton.icon}</span>}
          {leftButton.text}
        </button>
        <button
          onClick={handleOpenModal}
          className={
            rightButton.className
              ? `w-full sm:w-auto sm:min-w-[160px] sm:max-w-[220px] inline-flex items-center justify-center font-medium ${rightButton.className}`
              : `w-full sm:w-auto sm:min-w-[160px] sm:max-w-[220px] inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors duration-200 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100`
          }
        >
          {rightButton.icon && <span className="mr-2">{rightButton.icon}</span>}
          {rightButton.text}
        </button>
      </div>

      {/* 双二维码模态框 */}
      <DualQRCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buttonText=""
        title={title}
        description={description}
        firstQRCode={{
          src: leftQRCode.src || leftQRCode.url || '/images/contact/userhlc.png',
          alt: leftQRCode.alt || leftQRCode.title,
          label: leftQRCode.title,
          description: leftQRCode.description
        }}
        secondQRCode={{
          src: rightQRCode.src || rightQRCode.url || '/images/contact/gzh.png',
          alt: rightQRCode.alt || rightQRCode.title,
          label: rightQRCode.title,
          description: rightQRCode.description
        }}
      />
    </>
  )
}

/**
 * 默认导出双二维码组件
 */
export default DualQRCodeButtonGroup
