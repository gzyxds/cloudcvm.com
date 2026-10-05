'use client'

import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronUp, Headphones, Phone, ShoppingCart, X } from 'lucide-react'

/* ─────────────────────── 气泡弹窗外壳 ─────────────────────── */

interface BubbleProps {
  open: boolean
  /** 关闭态位移 + 缩放（各气泡出场参数不同，见调用处） */
  closedClass: string
  /** 过渡时长（客服二维码 200ms，咨询/购物车 250ms） */
  durationClass: string
  /** 气泡自身外观（边框、圆角、最小宽等） */
  className?: string
  style?: CSSProperties
  onEnter: () => void
  onLeave: () => void
  children: ReactNode
}

/**
 * 悬停气泡的统一外壳，替代此前三处逐字重复的 framer-motion AnimatePresence 弹窗。
 *
 * 常驻挂载 + CSS 过渡（visibility/opacity/transform）实现进出场：
 * 关闭态 `invisible` + `pointer-events-none` + `inert`，既不参与渲染、
 * 不拦截鼠标，也不进入焦点链；打开态反向翻转类名即可。visibility 是离散属性，
 * 配合 transition 会在「关」时延迟到过渡末尾才隐藏、在「开」时立即显示，
 * 与 framer-motion 的 AnimatePresence 进出场行为一致。
 *
 * 本文件位于根布局，属于全站共享 chunk——不再静态引入 framer-motion 后，
 * 52 个页面的共享 JS 都不再包含该依赖（Header/Footer 均不引用它）。
 */
function Bubble({
  open,
  closedClass,
  durationClass,
  className,
  style,
  onEnter,
  onLeave,
  children,
}: BubbleProps) {
  return (
    <div
      aria-hidden={!open}
      inert={!open}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={style}
      className={`absolute right-full bottom-0 mr-3 transition-all ${durationClass} ${
        open
          ? 'visible translate-y-0 scale-100 opacity-100'
          : `invisible ${closedClass} pointer-events-none opacity-0`
      } ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

/* ─────────────────────── 顶部悬浮工具栏 ─────────────────────── */

/**
 * 顶部悬浮组件
 * 提供客服、咨询、购物车等功能，支持悬停显示二维码和点击弹出模态框
 * 采用现代化设计风格，参考test.tsx的交互设计
 */
export default function FloatingToolbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [showClickQRCode, setShowClickQRCode] = useState(false)

  // 监听滚动事件，当页面滚动超过300px时显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    // 这里从不调用 preventDefault，标 passive 交给合成器线程处理，滚动不阻塞主线程
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    // 监听自定义事件，用于从其他组件触发二维码弹窗（AiScene / demo 页会派发）
    const handleShowQRCodeModal = () => {
      setShowClickQRCode(true)
    }

    window.addEventListener('showQRCodeModal', handleShowQRCodeModal)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('showQRCodeModal', handleShowQRCodeModal)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleCloseClickQRCode = () => {
    setShowClickQRCode(false)
  }

  return (
    <>
      <div className="fixed right-4 bottom-32 z-50 flex flex-col gap-3">
        {/* 客服按钮 - 蓝色渐变，参考test.tsx的设计；进出场用 CSS 过渡 + 逐项延迟替代 framer-motion */}
        <div
          className={`relative transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100' : 'pointer-events-none scale-50 opacity-0'
          }`}
        >
          <button
            className="flex h-28 w-12 flex-col items-center justify-center bg-gradient-to-b from-brand-500 to-brand-500 text-white shadow-lg transition-all hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:outline-none"
            aria-label="联系客服"
            onClick={() => setShowClickQRCode(true)}
            onMouseEnter={() => setShowQRCode(true)}
            onMouseLeave={() => setShowQRCode(false)}
          >
            <Headphones className="mb-2 h-6 w-6" />
            <div className="text-xs leading-tight font-medium">
              <div>客服</div>
              <div>咨询</div>
            </div>
          </button>

          {/* 二维码悬停弹窗 */}
          <Bubble
            open={showQRCode}
            closedClass="translate-y-2.5 scale-[0.8]"
            durationClass="duration-200"
            className="min-w-[200px] border border-neutral-100 bg-white shadow-2xl backdrop-blur-sm"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            onEnter={() => setShowQRCode(true)}
            onLeave={() => setShowQRCode(false)}
          >
            <div className="p-5">
              <div className="text-center">
                <div className="mb-4 text-sm text-neutral-600">扫码联系客服</div>
                <div className="flex justify-center">
                  <Image
                    src="/images/contact/Tencent.png"
                    alt="客服二维码"
                    width={144}
                    height={144}
                    className="h-36 w-36 border border-neutral-200 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 小三角指示器 */}
            <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white/95 drop-shadow-sm"></div>
            {/* 装饰性边框 */}
            <div className="pointer-events-none absolute inset-0 border border-neutral-100/50"></div>
          </Bubble>
        </div>

        {/* 咨询/购物车按钮 - 白色按钮包含两个选项，参考test.tsx的设计 */}
        <div
          className={`relative transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100 delay-100' : 'pointer-events-none scale-50 opacity-0'
          }`}
        >
          <div className="flex h-28 w-12 flex-col overflow-hidden border border-neutral-200/50 bg-white shadow-lg">
            {/* 咨询选项 */}
            <button
              className="flex flex-1 flex-col items-center justify-center border-b border-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-50"
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
              className="flex flex-1 flex-col items-center justify-center text-neutral-700 transition-colors hover:bg-neutral-50"
              aria-label="购物车"
              onMouseEnter={() => setShowShoppingCart(true)}
              onMouseLeave={() => setShowShoppingCart(false)}
            >
              <ShoppingCart className="mb-1 h-4 w-4" />
              <span className="text-xs font-medium">购物车</span>
            </Link>
          </div>

          {/* 咨询详情弹窗 */}
          <Bubble
            open={showConsultation}
            closedClass="translate-y-1.5 scale-95"
            durationClass="duration-300"
            className="min-w-[240px] rounded-md border border-neutral-200 bg-white/95 shadow-lg backdrop-blur-md"
            onEnter={() => setShowConsultation(true)}
            onLeave={() => setShowConsultation(false)}
          >
            <div className="p-6">
              <div className="text-left">
                <div className="mb-4 text-sm font-semibold text-neutral-800">优刻云</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-neutral-700">智能客服</div>
                    <Link
                      href="/aiservice"
                      className="text-xs text-brand-500 hover:text-brand-500 hover:underline"
                    >
                      点击咨询
                    </Link>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-neutral-700">售后咨询</div>
                    <Link
                      href="https://qm.qq.com/q/s1poMRyNJm?from=tim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-500 hover:text-brand-500 hover:underline"
                    >
                      QQ客服
                    </Link>
                  </div>
                  <div className="my-3 border-t border-neutral-200/70 pt-3">
                    <div className="mb-1 text-xs font-medium text-neutral-700">Telegram</div>

                    <Link
                      href="https://t.me/Youkeyun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-500 transition-colors duration-200 hover:text-brand-600 hover:underline"
                    >
                      @Youkeyun
                    </Link>
                  </div>
                  <div className="my-3 border-t border-neutral-200/70 pt-3 text-center">
                    <div className="mb-3 text-xs font-medium text-neutral-700">腾讯客服</div>
                    <div className="flex justify-center">
                      <Image
                        src="/images/contact/QQ.png"
                        alt="微信客服二维码"
                        width={110}
                        height={110}
                        className="rounded-md border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 小三角 */}
            <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
          </Bubble>

          {/* 购物车详情弹窗 */}
          <Bubble
            open={showShoppingCart}
            closedClass="translate-y-1.5 scale-95"
            durationClass="duration-300"
            className="min-w-[200px] rounded-md border border-neutral-200 bg-white/95 shadow-lg backdrop-blur-md"
            onEnter={() => setShowShoppingCart(true)}
            onLeave={() => setShowShoppingCart(false)}
          >
            <div className="p-6">
              <div className="text-center">
                <div className="mb-3 text-sm font-semibold text-neutral-800">购物车</div>
                <div className="text-xs text-neutral-600">查看您的购物车商品</div>
              </div>
            </div>

            {/* 小三角指示器 */}
            <div className="absolute top-5 left-full h-0 w-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white/95 drop-shadow-sm"></div>
          </Bubble>
        </div>

        {/* 返回顶部按钮 - 白色圆形，参考test.tsx的设计 */}
        <button
          onClick={scrollToTop}
          className={`flex h-12 w-12 items-center justify-center border border-neutral-200/50 bg-white text-neutral-700 shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:outline-none ${
            isVisible ? 'scale-100 opacity-100 delay-200' : 'pointer-events-none scale-50 opacity-0'
          }`}
          aria-label="返回顶部"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

      {/* 点击弹出的二维码模态框，参考test.tsx的设计
          常驻挂载 + visibility 过渡（同 Bubble 策略）：关闭态 invisible + pointer-events-none + inert */}
      <div
        aria-hidden={!showClickQRCode}
        inert={!showClickQRCode}
        onClick={handleCloseClickQRCode}
        className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 md:p-6 ${
          showClickQRCode ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        {/* 背景遮罩 */}
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"></div>

        {/* 模态框内容 */}
        <div
          className={`relative mx-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-neutral-200/70 transition-all duration-300 ease-out ${
            showClickQRCode
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-2.5 scale-90 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 关闭按钮 */}
          <button
            onClick={handleCloseClickQRCode}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100/80 transition-all duration-200 hover:scale-105 hover:bg-neutral-200"
            aria-label="关闭"
          >
            <X className="h-4 w-4 text-neutral-700" />
          </button>

          {/* 内容区域 */}
          <div className="p-8 text-center">
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">联系客服</h3>
            <p className="mb-6 text-sm text-neutral-600">扫描二维码添加客服微信</p>

            {/* 二维码 */}
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/contact/Tencent.png"
                  alt="客服二维码"
                  width={192}
                  height={192}
                  className="h-48 w-48 border border-neutral-200 object-contain shadow-lg"
                />
              </div>
            </div>

            {/* 提示文字 */}
            <p className="text-xs text-neutral-500">长按二维码保存到相册</p>
          </div>
        </div>
      </div>
    </>
  )
}
