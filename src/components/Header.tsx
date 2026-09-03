'use client'

import React, {
  JSX,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
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
import {
  MegaMenuPanel,
  MegaMenuCategory,
  MegaMenuItem,
  QuickTag,
  FooterAction,
} from '@/components/MegaMenu'
import { MobileMenu } from '@/components/MobileMenu'
import {
  navTriggerBase,
  navTriggerIdle,
  navTriggerActive,
  navLinkBase,
  navDividerBase,
  primaryButton,
  mobileSecondaryButton,
  mobilePrimaryButton,
} from '@/components/navStyles'
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

/* ─────────────────────── 导航面板配置类型 ─────────────────────── */

interface MegaMenuOptions {
  categories: MegaMenuCategory[]
  quickTags?: QuickTag[]
  footerActions?: FooterAction[]
  showSearch?: boolean
  searchPlaceholder?: string
  viewAllHref?: string
  tipText?: string
}

interface MoreMenuOptions {
  items: MegaMenuItem[]
}

interface NavMenuConfig {
  /** 唯一 id，同时作为统一面板的 key */
  id: string
  kind: 'mega' | 'more'
  label: string
  /** 响应式显隐包装类（缺省 = 常驻） */
  wrapClass?: string
  /** 触发按钮右上角角标（如 NEW / AI系统） */
  badge?: React.ReactNode
  options: MegaMenuOptions | MoreMenuOptions
}

/**
 * 左侧导航配置（顺序即渲染顺序；电商云直链穿插于产品与人工智能之间）
 * 与右侧配置共同描述导航栏全部下拉菜单，面板渲染与 hover 管理统一
 * 在 Header 中进行，保证同一时刻只有一个下拉面板。
 */
const leftMenuConfigs: NavMenuConfig[] = [
  {
    id: 'product',
    kind: 'mega',
    label: '产品与服务',
    badge: (
      <span className="rounded-full bg-brand-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
        NEW
      </span>
    ),
    options: {
      categories: productCategories,
      quickTags: productQuickTags,
      footerActions: commonFooterActions,
      viewAllHref: '/products',
    },
  },
  {
    id: 'ai-app',
    kind: 'mega',
    label: '人工智能与应用',
    wrapClass: 'hidden xl:block',
    badge: (
      <span className="rounded-full bg-brand-500/10 px-1.5 py-0.5 text-xs font-bold text-brand-500">
        AI系统
      </span>
    ),
    options: {
      categories: aiAppCategories,
      quickTags: aiQuickTags,
      footerActions: commonFooterActions,
    },
  },
  {
    id: 'ai-solution',
    kind: 'mega',
    label: 'AI解决方案',
    wrapClass: 'hidden 2xl:block',
    options: {
      categories: aiSolutionCategories,
      quickTags: aiQuickTags,
      footerActions: commonFooterActions,
      viewAllHref: '/ai',
    },
  },
  {
    id: 'enterprise',
    kind: 'mega',
    label: '企业解决方案',
    wrapClass: 'hidden 2xl:block',
    options: {
      categories: enterpriseCategories,
      quickTags: enterpriseQuickTags,
      footerActions: commonFooterActions,
    },
  },
  {
    id: 'company',
    kind: 'mega',
    label: '关于我们',
    wrapClass: 'hidden 2xl:block',
    options: {
      categories: companyCategories,
      footerActions: commonFooterActions,
    },
  },
  {
    id: 'more-lg',
    kind: 'more',
    label: '更多',
    wrapClass: 'hidden lg:block xl:hidden',
    options: { items: overflowCategoriesLg[0].items },
  },
  {
    id: 'more-xl',
    kind: 'more',
    label: '更多',
    wrapClass: 'hidden xl:block 2xl:hidden',
    options: { items: overflowCategoriesXl[0].items },
  },
]

/** 右侧导航配置（文档中心等） */
const rightMenuConfigs: NavMenuConfig[] = [
  {
    id: 'docs',
    kind: 'mega',
    label: '文档中心',
    options: {
      categories: docsCategories,
      showSearch: false,
      viewAllHref: '/docs',
    },
  },
]

const allMenuConfigs = [...leftMenuConfigs, ...rightMenuConfigs]

/**
 * 判断当前路由是否命中分类下的任一入口（含精选项）。
 * 命中后一级菜单保持高亮，帮助用户感知当前所在的分组。
 */
function categoryMatches(
  categories: MegaMenuCategory[],
  pathname: string,
): boolean {
  return categories.some((category) =>
    [...(category.items ?? []), ...(category.featured ?? [])].some(
      (item) => item.href === pathname || pathname.startsWith(`${item.href}/`),
    ),
  )
}

/** 直链菜单的当前页判断（首页除外，避免 '/' 误伤所有路径） */
function isLinkCurrent(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/'
  return href === pathname || pathname.startsWith(`${href}/`)
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
 * 下拉交互说明：
 * 所有下拉触发器共享 Header 层唯一受控面板。鼠标悬停/键盘激活某个
 * 触发器时只替换面板内容，不会出现多个 Popover 面板叠加开合导致的
 * 闪烁交叉；面板展开时头部分隔线透明化，消除面板上沿“多余边框”观感。
 *
 * @returns {JSX.Element} Header组件
 */
export function Header(): JSX.Element {
  // 移动端菜单开关状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  // 页面滚动后给固定头部加轻微阴影，与内容区分开
  const [scrolled, setScrolled] = useState(false)
  // 当前打开的统一面板 id（null = 全部关闭）
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)
  // 「更多」紧凑面板相对视口的 left（打开时测量，避免超出右缘）
  const [compactPanelLeft, setCompactPanelLeft] = useState<number | null>(null)

  // 当前路由，用于一级菜单与直链的“所在分组”高亮
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>())
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  /** 双路 hover 状态：仅当两路都 false 才允许关闭 */
  const hoverRef = useRef({ trigger: false, panel: false })

  const productMenuActive = categoryMatches(productCategories, pathname)
  const aiAppMenuActive = categoryMatches(aiAppCategories, pathname)
  const aiSolutionMenuActive = categoryMatches(aiSolutionCategories, pathname)
  const enterpriseMenuActive = categoryMatches(enterpriseCategories, pathname)
  const companyMenuActive = categoryMatches(companyCategories, pathname)
  const docsMenuActive = categoryMatches(docsCategories, pathname)

  const newLinkActive = isLinkCurrent('/new', pathname)
  const eccloudLinkActive = isLinkCurrent('/eccloud', pathname)

  /** id → 当前路由是否命中该分组（触发按钮高亮用） */
  const menuCurrentMap: Record<string, boolean> = {
    product: productMenuActive,
    'ai-app': aiAppMenuActive,
    'ai-solution': aiSolutionMenuActive,
    enterprise: enterpriseMenuActive,
    company: companyMenuActive,
    docs: docsMenuActive,
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── 统一面板开合逻辑 ── */

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const closeMenu = useCallback(() => {
    clearCloseTimer()
    setActiveMenuId(null)
  }, [clearCloseTimer])

  /** 延迟关闭（仅当鼠标既不在导航行、也不在面板内时执行） */
  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => {
      if (!hoverRef.current.trigger && !hoverRef.current.panel) {
        setActiveMenuId(null)
      }
    }, 150)
  }, [clearCloseTimer])

  /** 「更多」紧凑面板跟随触发按钮的水平位置，并防止超出视口右缘 */
  const updateCompactPanelLeft = useCallback((menuId: string) => {
    const btn = triggerRefs.current.get(menuId)
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const width = 300
    const pad = 16
    const maxLeft = window.innerWidth - width - pad
    const left = Math.min(Math.max(rect.left, pad), Math.max(maxLeft, pad))
    setCompactPanelLeft(left)
  }, [])

  const openMenu = useCallback(
    (menuId: string, isMore = false) => {
      clearCloseTimer()
      hoverRef.current.trigger = true
      if (isMore) updateCompactPanelLeft(menuId)
      setActiveMenuId((prev) => (prev === menuId ? prev : menuId))
    },
    [clearCloseTimer, updateCompactPanelLeft],
  )

  const handlePanelEnter = useCallback(() => {
    clearCloseTimer()
    hoverRef.current.panel = true
  }, [clearCloseTimer])

  const handlePanelLeave = useCallback(() => {
    hoverRef.current.panel = false
    scheduleClose()
  }, [scheduleClose])

  /** 鼠标离开整条导航行（触发按钮区域）后才允许延迟关闭 */
  const handleNavRowLeave = useCallback(() => {
    hoverRef.current.trigger = false
    scheduleClose()
  }, [scheduleClose])

  /**
   * 触发按钮点击：键盘激活（detail === 0）做开/关切换；
   * 鼠标点击仅负责“未打开时打开”，面板已被 hover 打开时保持，
   * 避免“悬停展开后又因点击被立即关闭”的闪断。
   */
  const handleTriggerClick = useCallback(
    (menu: NavMenuConfig) => (e: React.MouseEvent<HTMLButtonElement>) => {
      const isOpen = activeMenuId === menu.id
      if (e.detail === 0) {
        const nextOpen = !isOpen
        if (nextOpen && menu.kind === 'more') {
          updateCompactPanelLeft(menu.id)
        }
        setActiveMenuId(nextOpen ? menu.id : null)
        return
      }
      if (!isOpen) {
        if (menu.kind === 'more') updateCompactPanelLeft(menu.id)
        setActiveMenuId(menu.id)
      }
    },
    [activeMenuId, updateCompactPanelLeft],
  )

  const setTriggerRef = useCallback((menuId: string) => {
    return (el: HTMLButtonElement | null) => {
      if (el) triggerRefs.current.set(menuId, el)
      else triggerRefs.current.delete(menuId)
    }
  }, [])

  const activeMenu = activeMenuId
    ? allMenuConfigs.find((menu) => menu.id === activeMenuId) ?? null
    : null

  // 路由变化时收起面板
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  // 面板打开期间：Esc 关闭、点击/焦点移出 header 时关闭
  useEffect(() => {
    if (!activeMenuId) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    const onPointerDown = (e: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }
    const onFocusIn = (e: FocusEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('focusin', onFocusIn)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('focusin', onFocusIn)
    }
  }, [activeMenuId, closeMenu])

  // 「更多」紧凑面板打开时，窗口尺寸变化需重测水平位置
  useEffect(() => {
    if (!activeMenu || activeMenu.kind !== 'more') return
    const onResize = () => updateCompactPanelLeft(activeMenu.id)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeMenu, updateCompactPanelLeft])

  /** 渲染单个下拉触发按钮 */
  const renderTrigger = (menu: NavMenuConfig) => {
    const isOpen = activeMenuId === menu.id
    const isCurrent = menuCurrentMap[menu.id] ?? false
    const isActive = isOpen || isCurrent
    return (
      <button
        key={menu.id}
        ref={setTriggerRef(menu.id)}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`nav-panel-${menu.id}`}
        onMouseEnter={() => openMenu(menu.id, menu.kind === 'more')}
        onClick={handleTriggerClick(menu)}
        className={`${navTriggerBase} ${
          isActive ? navTriggerActive : navTriggerIdle
        }`}
      >
        {/* 角标与文字同行排列，避免压到相邻菜单项 */}
        <span className="inline-flex items-center gap-1.5">
          {menu.label}
          {menu.badge}
        </span>
        <ChevronDownIcon
          aria-hidden="true"
          className={`size-4 flex-none transition-transform duration-200 ${
            isOpen
              ? 'rotate-180 text-brand-600'
              : isCurrent
                ? 'text-brand-600'
                : 'text-neutral-500'
          }`}
        />
      </button>
    )
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 right-0 left-0 z-50 box-border w-full bg-white font-[TTTGB-regular,pingfang_SC,helvetica_neue,arial,hiragino_sans_gb,microsoft_yahei_ui,microsoft_yahei,simsun,sans-serif] text-[14px] antialiased transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      {/* 导航行：鼠标离开整行才进入延迟关闭，跨菜单横向移动不抖动 */}
      <nav
        aria-label="Global"
        className="mx-auto max-w-full px-5 lg:px-8 2xl:px-[120px]"
        onMouseLeave={handleNavRowLeave}
      >
        <div className="flex h-[62px] items-center justify-between">
          {/* 左侧：Logo和桌面端导航菜单 */}
          <div className="flex items-center">
            {/* 网站Logo */}
            <Link href="/" className="flex items-center">
              <span className="sr-only">优刻云</span>
              <Logo className="h-8 w-auto" />
            </Link>

            {/* 桌面端导航菜单组 */}
            <div className="hidden lg:ml-6 lg:flex lg:gap-x-1 xl:ml-8">
              {/* 最新活动菜单 - 带HOT标签的直链菜单 */}
              <Link
                href="/new"
                aria-current={newLinkActive ? 'page' : undefined}
                className={`${navLinkBase} ${newLinkActive ? navTriggerActive : ''}`}
              >
                最新活动
                <span className="absolute top-4 right-0.5 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] leading-none font-bold text-white">
                  HOT
                </span>
              </Link>

              {/* 产品与服务（紧随“最新活动”） */}
              {leftMenuConfigs
                .filter((menu) => menu.id === 'product')
                .map((menu) => (
                  <div key={menu.id} className={menu.wrapClass || undefined}>
                    {renderTrigger(menu)}
                  </div>
                ))}

              {/* 电商云菜单 - 直链菜单 */}
              <Link
                href="/eccloud"
                aria-current={eccloudLinkActive ? 'page' : undefined}
                className={`${navLinkBase} ${eccloudLinkActive ? navTriggerActive : ''}`}
              >
                电商云
              </Link>

              {/* 其余下拉菜单（响应式逐级显示，靠后的在窄屏收进“更多”） */}
              {leftMenuConfigs
                .filter((menu) => menu.id !== 'product')
                .map((menu) => (
                  <div key={menu.id} className={menu.wrapClass || undefined}>
                    {renderTrigger(menu)}
                  </div>
                ))}
            </div>
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
          {/* 2xl 容器有 px-[120px] gutter，用负右边距抵消，使整组贴到视口右缘 */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-1 2xl:-mr-[120px]">
            {rightMenuConfigs.map((menu) => (
              <div key={menu.id} className={menu.wrapClass || undefined}>
                {renderTrigger(menu)}
              </div>
            ))}

            {/* 分隔线：文字项之间等距分隔，与主 CTA 前的分隔线统一 */}
            <span aria-hidden="true" className={`${navDividerBase} mx-1`} />
            {/* 产品订购 */}
            <a
              href="https://console.cloudcvm.com/cart/goodsList.htm"
              className={navLinkBase}
            >
              产品订购
            </a>
            <span aria-hidden="true" className={`${navDividerBase} mx-1`} />
            {/* 控制台 */}
            <a href="https://console.cloudcvm.com" className={navLinkBase}>
              控制台
            </a>
            <span aria-hidden="true" className={`${navDividerBase} mx-1`} />
            {/* 登录 */}
            <a
              href="https://console.cloudcvm.com/login.htm"
              className={navLinkBase}
            >
              登录
            </a>

            {/* 分隔线：把文字型外链与主 CTA 分开，避免视觉黏连 */}
            <span aria-hidden="true" className={`${navDividerBase} mx-1`} />

            {/* 免费注册 - 主要CTA按钮 */}
            <a
              href="https://console.cloudcvm.com/login.htm"
              className={`${primaryButton} lg:px-3 xl:px-4`}
            >
              <UserPlusIcon className="h-4 w-4" aria-hidden="true" />
              免费注册
            </a>
          </div>
        </div>
      </nav>

      {/* 分割线：面板展开时透明（仍占位，避免布局跳动），消除面板上沿“多余边框”观感 */}
      <div
        aria-hidden="true"
        className={`h-px w-full bg-neutral-200 transition-opacity duration-200 ${
          activeMenuId ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* ── 唯一的下拉面板（固定钉在头部下方，所有菜单共享） ──
          同一时刻只存在一个面板：切换菜单只替换内容，不会出现
          旧面板淡出 + 新面板淡入叠加的闪烁交叉。 */}
      {activeMenu && (
        <div
          id={`nav-panel-${activeMenu.id}`}
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
          className="absolute inset-x-0 top-full z-50"
        >
          {activeMenu.kind === 'mega' ? (
            <div className="bg-white shadow-panel">
              <MegaMenuPanel
                key={activeMenu.id}
                categories={(activeMenu.options as MegaMenuOptions).categories}
                quickTags={(activeMenu.options as MegaMenuOptions).quickTags}
                footerActions={
                  (activeMenu.options as MegaMenuOptions).footerActions
                }
                showSearch={(activeMenu.options as MegaMenuOptions).showSearch}
                searchPlaceholder={
                  (activeMenu.options as MegaMenuOptions).searchPlaceholder
                }
                viewAllHref={(activeMenu.options as MegaMenuOptions).viewAllHref}
                tipText={(activeMenu.options as MegaMenuOptions).tipText}
                onNavigate={closeMenu}
              />
            </div>
          ) : (
            <div
              className="absolute top-full w-[300px] rounded-b-lg bg-white p-2 shadow-panel"
              style={{ left: compactPanelLeft ?? 16 }}
            >
              <div className="space-y-0.5">
                {(activeMenu.options as MoreMenuOptions).items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      item.href === pathname ? 'page' : undefined
                    }
                    className="group block rounded-md p-2.5 transition-colors hover:bg-neutral-50"
                  >
                    {/* 第一行：图标与名称并排 */}
                    <div className="flex items-center gap-2.5">
                      {item.icon && (
                        <item.icon className="h-5 w-5 shrink-0 text-neutral-400 transition-colors group-hover:text-brand-500" />
                      )}
                      <p
                        className={`line-clamp-1 min-w-0 text-sm font-medium transition-colors ${
                          item.href === pathname
                            ? 'text-brand-600'
                            : 'text-neutral-800 group-hover:text-brand-600'
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                    {/* 第二行：描述贴左对齐 */}
                    {item.description && (
                      <p className="mt-1 text-left text-xs text-neutral-500">
                        {item.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 移动端侧边栏菜单 */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-[60] bg-neutral-950/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white p-5 shadow-panel sm:max-w-sm sm:ring-1 sm:ring-neutral-200">
          {/* 移动端菜单头部：Logo和关闭按钮 */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <Link href="/" className="flex items-center">
              <span className="sr-only">优刻云</span>
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
            >
              <span className="sr-only">关闭菜单</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* 移动端菜单内容区域 */}
          <div className="mt-4 flow-root">
            <div className="-my-2 divide-y divide-neutral-200">
              <div className="space-y-1 py-4">
                {/* 移动端最新活动链接 - 带HOT标签 */}
                <Link
                  href="/new"
                  aria-current={newLinkActive ? 'page' : undefined}
                  className={`relative block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:text-brand-600 ${
                    newLinkActive ? 'text-brand-600' : 'text-neutral-700'
                  }`}
                >
                  最新活动
                  <span className="absolute top-2 right-3 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] leading-none font-bold text-white">
                    HOT
                  </span>
                </Link>

                {/* 移动端产品分类菜单（数据驱动，与桌面端 MegaMenu 数据同步） */}
                <MobileMenu sections={mobileMenuSections} />

                {/* 移动端电商云链接（与桌面端一致，无角标） */}
                <Link
                  href="/eccloud"
                  aria-current={eccloudLinkActive ? 'page' : undefined}
                  className={`relative block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:text-brand-600 ${
                    eccloudLinkActive ? 'text-brand-600' : 'text-neutral-700'
                  }`}
                >
                  电商云
                </Link>

                {/* 移动端产品订购链接（对齐桌面端右侧导航） */}
                <a
                  href="https://console.cloudcvm.com/cart/goodsList.htm"
                  className="relative block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:text-brand-600"
                >
                  产品订购
                </a>

                {/* 移动端用户操作区：登录注册按钮组 */}
                <div className="mt-4 flex gap-3">
                  {/* 登录注册按钮 - 次要样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className={mobileSecondaryButton}
                  >
                    <UserIcon className="h-5 w-5" />
                    登录/注册
                  </a>

                  {/* 控制台按钮 - 主要CTA样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className={mobilePrimaryButton}
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
