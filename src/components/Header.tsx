'use client'

import React, { JSX, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
  UserIcon,
  BeakerIcon,
  SparklesIcon,
  GlobeAltIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Logo } from '@/components/Logo'
import { MegaMenu, MegaMenuCategory } from '@/components/MegaMenu'
import { MobileMenu } from '@/components/MobileMenu'
import {
  productCategories,
  aiAppCategories,
  aiSolutionCategories,
  enterpriseCategories,
  companyCategories,
  docsCategories,
  commonFooterActions,
  productQuickTags,
  aiQuickTags,
  enterpriseQuickTags,
  mobileMenuSections,
} from '@/data/navigation'

/**
 * lg(1024-1279) 与 xl(1280-1535) 下隐藏左侧靠后的 MegaMenu，
 * 统一收进「更多」下拉，避免窗口缩小时菜单栏被挤压、错位。
 */
const overflowCategoriesLg: MegaMenuCategory[] = [
  {
    id: 'more-lg',
    name: '更多导航',
    icon: SquaresPlusIcon,
    items: [
      {
        name: '人工智能与应用',
        description: 'AI 能力与智能服务',
        href: '/ai',
        icon: BeakerIcon,
      },
      {
        name: 'AI解决方案',
        description: '行业场景化解决方案',
        href: '/ai',
        icon: SparklesIcon,
      },
      {
        name: '企业解决方案',
        description: '企业级产品矩阵',
        href: '/ecommerce',
        icon: GlobeAltIcon,
      },
      {
        name: '关于我们',
        description: '了解公司与服务',
        href: '/about',
        icon: UserIcon,
      },
    ],
  },
]

const overflowCategoriesXl: MegaMenuCategory[] = [
  {
    id: 'more-xl',
    name: '更多导航',
    icon: SquaresPlusIcon,
    items: [
      {
        name: 'AI解决方案',
        description: '行业场景化解决方案',
        href: '/ai',
        icon: SparklesIcon,
      },
      {
        name: '企业解决方案',
        description: '企业级产品矩阵',
        href: '/ecommerce',
        icon: GlobeAltIcon,
      },
      {
        name: '关于我们',
        description: '了解公司与服务',
        href: '/about',
        icon: UserIcon,
      },
    ],
  },
]

/**
 * 溢出菜单：与 MegaMenu 同构 —— Headless UI 状态为唯一来源，
 * 鼠标悬停通过 aria-expanded 判断 + 程序化 click 打开/关闭；
 * 点击/键盘/ Esc 均由 Headless UI 自身管理，行为与主菜单一致。
 * 面板同样用 fixed 视口坐标钉住，滚动时零重算、零抖动。
 */
function OverflowMenu({ categories }: { categories: MegaMenuCategory[] }) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  /** 双路 hover 状态：仅当两路都 false 才允许关闭 */
  const hoverRef = useRef({ trigger: false, panel: false })
  const [panelPos, setPanelPos] = useState<{ top: number; left: number } | null>(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  /** 延迟关闭（如果两路鼠标都不在） */
  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => {
      if (!hoverRef.current.trigger && !hoverRef.current.panel) {
        if (buttonRef.current?.getAttribute('aria-expanded') === 'true') {
          buttonRef.current?.click()
        }
      }
    }, 150)
  }, [])

  const handleOpen = useCallback(() => {
    clearCloseTimer()
    hoverRef.current.trigger = true
    if (buttonRef.current?.getAttribute('aria-expanded') !== 'true') {
      buttonRef.current?.click()
    }
  }, [])

  const handleClose = useCallback(() => {
    hoverRef.current.trigger = false
    scheduleClose()
  }, [scheduleClose])

  const handlePanelEnter = useCallback(() => {
    clearCloseTimer()
    hoverRef.current.panel = true
  }, [])

  const handlePanelLeave = useCallback(() => {
    hoverRef.current.panel = false
    scheduleClose()
  }, [scheduleClose])

  // 组件卸载时清理定时器，防止内存泄漏
  useEffect(() => {
    return () => clearCloseTimer()
  }, [])

  /* ── 面板定位（与 MegaMenu 一致：fixed 视口坐标，滚动时零重算） ── */
  const updatePanelPos = useCallback(() => {
    const btn = buttonRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const width = 280
    const pad = 16
    const maxLeft = window.innerWidth - width - pad
    const left = Math.min(Math.max(rect.left, pad), Math.max(maxLeft, pad))
    setPanelPos({ top: rect.bottom + 9, left })
  }, [])

  // 触发按钮 aria-expanded 变化（hover/点击/键盘打开）时重测面板位置
  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return
    const observer = new MutationObserver(updatePanelPos)
    observer.observe(btn, { attributes: true, attributeFilter: ['aria-expanded'] })
    return () => observer.disconnect()
  }, [updatePanelPos])

  // 仅窗口尺寸变化时重测（不做 scroll 监听 → 滚动时零抖动）
  useEffect(() => {
    if (!panelPos) return
    window.addEventListener('resize', updatePanelPos)
    return () => window.removeEventListener('resize', updatePanelPos)
  }, [panelPos, updatePanelPos])

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            ref={buttonRef}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className={`relative flex items-center gap-x-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 outline-none lg:px-2 xl:px-2 2xl:px-3 ${
              open ? 'text-brand-500' : 'text-slate-700 hover:text-brand-500'
            }`}
          >
            更多
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </PopoverButton>
          <PopoverPanel
            transition
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
            style={panelPos ? { top: panelPos.top, left: panelPos.left } : undefined}
            className="fixed z-50 w-[280px] origin-top rounded-b-lg bg-white p-3 shadow-[0_12px_28px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-[opacity,transform] duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="space-y-0.5">
              {categories[0].items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-slate-50"
                >
                  {item.icon && (
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-400 group-hover:text-brand-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-slate-900 group-hover:text-brand-500">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-slate-500">{item.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  )
}

/**
 * Header组件 - 网站顶部导航栏
 *
 * 功能特性：
 * - 响应式设计，支持桌面端和移动端
 * - 多级下拉菜单，包含产品、AI、解决方案、公司信息
 * - 桌面端窗口缩小时，自动将靠后菜单收进「更多」下拉
 * - 移动端侧边栏菜单
 * - 用户登录/注册入口
 * - 无障碍访问支持
 *
 * @returns {JSX.Element} Header组件
 */
export function Header(): JSX.Element {
  // 移动端菜单开关状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  // 页面滚动后给固定头部加轻微阴影，与内容区分开
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 box-border w-full bg-white font-[TTTGB-regular,pingfang_SC,helvetica_neue,arial,hiragino_sans_gb,microsoft_yahei_ui,microsoft_yahei,simsun,sans-serif] text-[14px] antialiased transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'shadow-none'
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between px-4 py-2 lg:px-8"
      >
        {/* 左侧：Logo和桌面端导航菜单 */}
        <div className="flex items-center">
          {/* 网站Logo */}
          <Link href="/" className="flex items-center">
            <span className="sr-only">优刻云</span>
            <Logo className="h-8 w-auto" />
          </Link>

          {/* 分隔线 */}
          <div className="mx-4 hidden h-6 w-px bg-gray-200 lg:block"></div>

          {/* 桌面端导航菜单组 */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-0.5">
            {/* 最新活动菜单 - 带HOT标签的直链菜单 */}
            <a
              href="/new"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500 lg:px-2 xl:px-2 2xl:px-3"
            >
              最新活动
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                HOT
              </span>
            </a>

            {/* 产品与服务下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="产品与服务"
              categories={productCategories}
              quickTags={productQuickTags}
              footerActions={commonFooterActions}
              viewAllHref="/products"
              triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
              triggerBadge={(
                <span className="rounded-full bg-brand-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                  NEW
                </span>
              )}
            />

            {/* 电商云菜单 - 直链菜单 */}
            <a
              href="/eccloud"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500 lg:px-2 xl:px-2 2xl:px-3"
            >
              电商云
            </a>

            {/* 人工智能与应用下拉菜单 - 企业级二级菜单 */}
            <div className="hidden xl:block">
              <MegaMenu
                triggerText="人工智能与应用"
                categories={aiAppCategories}
                quickTags={aiQuickTags}
                footerActions={commonFooterActions}
                triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
                triggerBadge={(
                  <span className="rounded-full bg-brand-500/10 px-1.5 py-0.5 text-xs font-bold text-brand-500">
                    AI系统
                  </span>
                )}
              />
            </div>

            {/* AI解决方案下拉菜单 - 企业级二级菜单 */}
            <div className="hidden 2xl:block">
              <MegaMenu
                triggerText="AI解决方案"
                categories={aiSolutionCategories}
                quickTags={aiQuickTags}
                footerActions={commonFooterActions}
                viewAllHref="/ai"
                triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
              />
            </div>

            {/* 企业解决方案下拉菜单 - 企业级二级菜单 */}
            <div className="hidden 2xl:block">
              <MegaMenu
                triggerText="企业解决方案"
                categories={enterpriseCategories}
                quickTags={enterpriseQuickTags}
                footerActions={commonFooterActions}
                triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
              />
            </div>

            {/* 关于我们下拉菜单 - 企业级二级菜单 */}
            <div className="hidden 2xl:block">
              <MegaMenu
                triggerText="关于我们"
                categories={companyCategories}
                footerActions={commonFooterActions}
                triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
              />
            </div>

            {/* lg 断点溢出菜单 */}
            <div className="hidden lg:block xl:hidden">
              <OverflowMenu categories={overflowCategoriesLg} />
            </div>

            {/* xl 断点溢出菜单 */}
            <div className="hidden xl:block 2xl:hidden">
              <OverflowMenu categories={overflowCategoriesXl} />
            </div>


            {/* 艺创智能 */}
            {/* <a
              href="/yichuang-ai"
              className="px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:text-brand-500 transition-colors"
            >
              艺创智能
            </a> */}
            {/* 172号卡菜单 */}
            {/* <a
              href="/172-card"
              className="px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:text-brand-500 transition-colors"
            >
              172号卡
            </a> */}
          </PopoverGroup>
        </div>

        {/* 移动端：汉堡菜单按钮 */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700"
          >
            <span className="sr-only">打开主菜单</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* 右侧：桌面端直链菜单和用户操作区 */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-0.5 xl:gap-x-0.5 2xl:gap-x-1">
          {/* 文档中心 - 企业级二级菜单（右侧对齐，防止溢出右边缘） */}
          <MegaMenu
            triggerText="文档中心"
            categories={docsCategories}
            showSearch={false}
            viewAllHref="/docs"
            triggerClassName="lg:px-2 xl:px-2 2xl:px-3"
          />

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-2"></div>
          {/* 产品订购 */}
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500 lg:px-2 xl:px-2 2xl:px-3"
          >
            产品订购
          </a>
          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-2"></div>

          {/* 控制台 */}
          <a
            href="https://console.cloudcvm.com"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500 lg:px-2 xl:px-2 2xl:px-3"
          >
            控制台
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-2"></div>

          {/* 登录 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500 lg:px-2 xl:px-2 2xl:px-3"
          >
            登录
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200 lg:mx-1 xl:mx-1 2xl:mx-2"></div>

          {/* 免费注册 - 主要CTA按钮 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="inline-flex items-center justify-center gap-2 border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:outline-none lg:px-3 xl:px-3 2xl:px-4"
          >
            <UserPlusIcon className="h-4 w-4" aria-hidden="true" />
            免费注册
          </a>
        </div>
      </nav>
      {/* 分割线 */}
      <div className="h-px w-full bg-gray-200"></div>
      {/* 移动端侧边栏菜单 */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-[60] bg-gray-900/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white p-4 shadow-xl sm:max-w-sm sm:ring-1 sm:ring-gray-200">
          {/* 移动端菜单头部：Logo和关闭按钮 */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <Link href="/" className="flex items-center">
              <span className="sr-only">优刻云</span>
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-500 transition-colors hover:text-neutral-700"
            >
              <span className="sr-only">关闭菜单</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* 移动端菜单内容区域 */}
          <div className="mt-4 flow-root">
            <div className="-my-2 divide-y divide-gray-200">
              <div className="space-y-1 py-4">
                {/* 移动端最新活动链接 - 带HOT标签 */}
                <a
                  href="/new"
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:text-brand-500"
                >
                  最新活动
                  <span className="absolute top-1 right-3 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                    HOT
                  </span>
                </a>


                {/* 移动端产品分类菜单（数据驱动，与桌面端 MegaMenu 数据同步） */}
                <MobileMenu sections={mobileMenuSections} />

                {/* 移动端电商云链接（与桌面端一致，无角标） */}
                <a
                  href="/eccloud"
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:text-brand-500"
                >
                  电商云
                </a>

                {/* 移动端产品订购链接（对齐桌面端右侧导航） */}
                <a
                  href="https://console.cloudcvm.com/cart/goodsList.htm"
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:text-brand-500"
                >
                  产品订购
                </a>

                {/* 移动端用户操作区：登录注册按钮组 */}
                <div className="mt-2 flex gap-3">
                  {/* 登录注册按钮 - 次要样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className="flex flex-1 items-center justify-center gap-x-2 bg-gray-100 px-4 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:bg-gray-200 hover:text-brand-500"
                  >
                    <UserIcon className="h-5 w-5" />
                    登录/注册
                  </a>

                  {/* 控制台按钮 - 主要CTA样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className="flex flex-1 items-center justify-center gap-x-2 border border-transparent bg-brand-500 px-4 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:outline-none"
                  >
                    <ComputerDesktopIcon className="h-5 w-5" />
                    控制台
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
