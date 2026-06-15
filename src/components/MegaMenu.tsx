'use client'

import React, { useState, useCallback, useEffect, useMemo, useRef, useId } from 'react'
import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'

/* ─────────────────────── 类型定义 ─────────────────────── */

export interface MegaMenuItem {
  id?: string
  name: string
  description?: string
  href: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  tag?: string
  badgeType?: 'hot' | 'new' | 'beta' | 'default'
  index?: number
  requiredRole?: string[]
  disabled?: boolean
}

export interface MegaMenuCategory {
  id: string
  name: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  items: MegaMenuItem[]
  featured?: MegaMenuItem[]
  isHot?: boolean
  requiredRole?: string[]
  disabled?: boolean
}

export interface QuickTag {
  name: string
  href: string
}

export interface FooterAction {
  name: string
  href: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface MegaMenuProps {
  triggerText: string
  title?: string
  subtitle?: string
  categories: MegaMenuCategory[]
  quickTags?: QuickTag[]
  showSearch?: boolean
  searchPlaceholder?: string
  footerActions?: FooterAction[]
  /**
   * 面板宽度（像素数值）。
   * Headless UI v2 将面板渲染到 portal，Tailwind max-w-* class 在 portal
   * 内不生效，需通过内联 style 设置 maxWidth 才能正确约束面板宽度。
   * @default 960
   */
  panelWidth?: number
  userRoles?: string[]
  defaultActiveCategory?: string
  triggerClassName?: string
  viewAllHref?: string
  /**
   * 面板对齐方式
   * - 'left': 面板左边缘对齐触发按钮左边缘（适合左侧导航项）
   * - 'right': 面板右边缘对齐触发按钮右边缘（适合右侧导航项）
   * @default 'left'
   */
  panelAlign?: 'left' | 'right'
}

/* ─────────────────────── 样式常量 ─────────────────────── */

const badgeStyles: Record<string, string> = {
  hot: 'bg-[#ff4d4f] text-white',
  new: 'bg-brand-500 text-white',
  beta: 'bg-amber-500 text-white',
  default: 'bg-slate-100 text-slate-600',
}

/* ─────────────────────── 辅助函数 ─────────────────────── */

function hasPermission(requiredRole?: string[], userRoles?: string[]): boolean {
  if (!requiredRole || requiredRole.length === 0) return true
  if (!userRoles || userRoles.length === 0) return false
  return requiredRole.some((role) => userRoles.includes(role))
}

function filterByPermission<T extends { requiredRole?: string[] }>(items: T[], userRoles?: string[]): T[] {
  return items.filter((item) => hasPermission(item.requiredRole, userRoles))
}

/** 从 items 中排除已在 featured 中出现的项目 */
function excludeFeaturedItems(items: MegaMenuItem[], featured?: MegaMenuItem[]): MegaMenuItem[] {
  if (!featured || featured.length === 0) return items
  const featuredIds = new Set(featured.map((f) => f.id || f.name))
  return items.filter((item) => !featuredIds.has(item.id || item.name))
}

/* ─────────────────────── Framer Motion Variants ─────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.08 } },
}

/* ─────────────────────── 主组件 ─────────────────────── */

export function MegaMenu({
  triggerText,
  title,
  subtitle,
  categories: rawCategories,
  quickTags,
  showSearch = true,
  searchPlaceholder = '搜索产品名称',
  footerActions,
  panelWidth = 960,
  userRoles,
  defaultActiveCategory,
  triggerClassName = '',
  viewAllHref,
  panelAlign = 'left',
}: MegaMenuProps): React.ReactElement {
  /* 权限过滤 */
  const categories = useMemo(
    () =>
      filterByPermission(rawCategories, userRoles).map((cat) => ({
        ...cat,
        items: filterByPermission(cat.items, userRoles),
        featured: cat.featured ? filterByPermission(cat.featured, userRoles) : undefined,
      })),
    [rawCategories, userRoles]
  )

  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    defaultActiveCategory || categories[0]?.id || ''
  )
  const [searchQuery, setSearchQuery] = useState('')
  const indicatorId = useId() // 为每个 MegaMenu 实例生成唯一 ID，避免 layoutId 冲突

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId)

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId)
    setSearchQuery('')
  }, [])

  const filteredItems = useMemo(() => {
    if (!activeCategory) return []
    return searchQuery
      ? activeCategory.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : excludeFeaturedItems(activeCategory.items, activeCategory.featured)
  }, [searchQuery, activeCategory])

  useEffect(() => {
    if (categories.length > 0 && !categories.find((c) => c.id === activeCategoryId)) {
      setActiveCategoryId(categories[0].id)
    }
  }, [categories, activeCategoryId])

  /* ── 双路悬停驱动逻辑 ──
   *
   * Headless UI v2 的 anchor 属性会将 PopoverPanel 渲染到 portal，
   * 因此面板脱离了外层 wrapper div。需要分别追踪两路鼠标状态：
   *   - trigger 路由：wrapper div（包含触发按钮）
   *   - panel 路由：PopoverPanel 自身
   * 只有两路都报告离开时，才执行延迟关闭。
   */
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  /** 双路 hover 状态：仅当两路都 false 才允许关闭 */
  const hoverRef = useRef({ trigger: false, panel: false })

  /** 延迟关闭（如果两路鼠标都不在） */
  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      if (!hoverRef.current.trigger && !hoverRef.current.panel) {
        if (buttonRef.current?.getAttribute('aria-expanded') === 'true') {
          buttonRef.current?.click()
        }
      }
    }, 150)
  }, [])

  // 组件卸载时清理定时器，防止内存泄漏
  useEffect(() => {
    return () => {
      clearTimeout(closeTimerRef.current)
    }
  }, [])

  /** 鼠标进入 wrapper（触发按钮区域） */
  const handleTriggerEnter = useCallback(() => {
    clearTimeout(closeTimerRef.current)
    hoverRef.current.trigger = true
    if (buttonRef.current?.getAttribute('aria-expanded') !== 'true') {
      buttonRef.current?.click()
    }
  }, [])

  /** 鼠标离开 wrapper */
  const handleTriggerLeave = useCallback(() => {
    hoverRef.current.trigger = false
    scheduleClose()
  }, [scheduleClose])

  /** 鼠标进入 PopoverPanel（portal 内） */
  const handlePanelEnter = useCallback(() => {
    clearTimeout(closeTimerRef.current)
    hoverRef.current.panel = true
  }, [])

  /** 鼠标离开 PopoverPanel */
  const handlePanelLeave = useCallback(() => {
    hoverRef.current.panel = false
    scheduleClose()
  }, [scheduleClose])

  return (
    <div className="relative" onMouseEnter={handleTriggerEnter} onMouseLeave={handleTriggerLeave}>
      <Popover className="contents">
        {({ open, close }) => (
          <>
            {/* 触发按钮 */}
            <PopoverButton
              ref={buttonRef}
              className={`relative flex items-center gap-x-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 outline-none ${
                open
                  ? 'bg-brand-50 text-brand-500'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-brand-500'
              } ${triggerClassName}`}
            >
              {triggerText}
              <ChevronDownIcon
                aria-hidden="true"
                className={`size-4 flex-none transition-transform duration-200 ${
                  open ? 'rotate-180 text-brand-500' : 'text-slate-400'
                }`}
              />
            </PopoverButton>

          {/* 下拉面板 — Headless UI v2 anchor 渲染到 portal，需用 style 内联 maxWidth */}
          <PopoverPanel
            transition
            anchor={{
              to: panelAlign === 'right' ? 'bottom end' : 'bottom start',
              gap: '8px',
            }}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
            style={{ maxWidth: panelWidth, width: '100vw' }}
            className="z-50 origin-top overflow-visible transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {/* ── 箭头角标：指向触发按钮 ── */}
            <div
              className={`absolute -top-[7px] h-3.5 w-3.5 rotate-45 border-l border-t border-slate-200/80 bg-[#f8fafc] shadow-[-2px_-2px_4px_rgb(0,0,0,0.04)] ${
                panelAlign === 'right' ? 'right-[24px]' : 'left-[24px]'
              }`}
              aria-hidden="true"
            />
            {/* ── 面板主体（overflow-hidden 限制在这层） ── */}
            <div className="overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-[0_12px_40px_rgb(0,0,0,0.1)] ring-1 ring-black/[0.03]">
            <div className="flex max-h-[min(580px,calc(100vh-100px))] min-h-[320px]">
              {/* ── 左侧：一级分类导航 ── */}
              <div className="flex w-[200px] flex-shrink-0 flex-col border-r border-slate-100 bg-[#f8fafc]">
                {/* 标题区 */}
                {(title || subtitle) && (
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                    <div className="min-w-0">
                      {title && (
                        <p className="truncate text-sm font-semibold leading-tight text-slate-900">
                          {title}
                        </p>
                      )}
                      {subtitle && (
                        <p className="mt-0.5 text-xs leading-tight text-slate-400">{subtitle}</p>
                      )}
                    </div>
                    {viewAllHref && (
                      <Link
                        href={viewAllHref}
                        onClick={() => close()}
                        className="ml-2 flex-shrink-0 text-xs font-medium text-brand-500 transition-colors hover:text-brand-600"
                      >
                        查看全部
                      </Link>
                    )}
                  </div>
                )}

                {/* 分类列表 */}
                <nav className="flex-1 overflow-y-auto py-1.5" aria-label="产品分类">
                  {categories.map((category) => {
                    const isActive = category.id === activeCategoryId
                    const Icon = category.icon

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onMouseEnter={() => handleCategoryChange(category.id)}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`group/cat relative flex w-full items-center justify-between px-5 py-2.5 text-left transition-all duration-150 outline-none ${
                          isActive
                            ? 'bg-white font-medium text-brand-600'
                            : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          {Icon && (
                            <Icon
                              aria-hidden="true"
                              className={`size-5 flex-shrink-0 transition-colors duration-150 ${
                                isActive ? 'text-brand-500' : 'text-slate-400 group-hover/cat:text-slate-500'
                              }`}
                            />
                          )}
                          <span className="truncate text-sm">{category.name}</span>
                        </span>
                        {category.isHot && (
                          <span className="ml-1.5 flex-shrink-0 rounded-[2px] bg-[#ff4d4f] px-1 py-0.5 text-[11px] leading-none font-bold text-white">
                            HOT
                          </span>
                        )}
                        {isActive && (
                          <motion.div
                            layoutId={`activeCategory-${indicatorId}`}
                            className="absolute inset-y-0 left-0 w-[2px] bg-brand-500"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          />
                        )}
                      </button>
                    )
                  })}
                </nav>
              </div>

              {/* ── 右侧：二级内容区 ── */}
              <div className="flex flex-1 flex-col overflow-hidden bg-white">
                {/* 搜索和快捷标签 */}
                <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-5 py-3">
                  {showSearch && (
                    <div className="relative min-w-0 flex-1">
                      <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="h-9 w-full rounded-md border border-slate-200 bg-slate-50/80 py-1.5 pr-3 pl-9 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-brand-300 focus:bg-white focus:ring-[3px] focus:ring-brand-500/10"
                      />
                    </div>
                  )}

                  {quickTags && quickTags.length > 0 && (
                    <div className="hidden flex-shrink-0 flex-wrap items-center gap-1.5 md:flex">
                      {quickTags.map((tag) => (
                        <Link
                          key={tag.name}
                          href={tag.href}
                          onClick={() => close()}
                          className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-slate-600 transition-all hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 内容滚动区 */}
                <div className="flex-1 overflow-y-auto px-5 py-5">
                  <AnimatePresence mode="wait">
                    {activeCategory && (
                      <motion.div
                        key={activeCategory.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' as const }}
                      >
                        {/* 热门推荐 */}
                        {activeCategory.featured && activeCategory.featured.length > 0 && !searchQuery && (
                          <section className="mb-5">
                            <SectionTitle color="brand" text="热门产品" />
                            <motion.div
                              className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3"
                              variants={containerVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                            >
                              {activeCategory.featured.map((item, idx) => (
                                <motion.div key={item.id || item.name} variants={itemVariants}>
                                  <FeaturedProductCard
                                    item={item}
                                    index={item.index || idx + 1}
                                    onClick={() => close()}
                                  />
                                </motion.div>
                              ))}
                            </motion.div>
                          </section>
                        )}

                        {/* 全部产品 */}
                        {filteredItems.length > 0 && (
                          <section>
                            {activeCategory.featured &&
                              activeCategory.featured.length > 0 &&
                              !searchQuery && <SectionTitle color="muted" text="全部产品" />}
                            <motion.div
                              className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3"
                              variants={containerVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                            >
                              {filteredItems.map((item) => (
                                <motion.div key={item.id || item.name} variants={itemVariants}>
                                  <ProductLink item={item} onClick={() => close()} />
                                </motion.div>
                              ))}
                            </motion.div>
                          </section>
                        )}

                        {/* 无结果 */}
                        {filteredItems.length === 0 && searchQuery && (
                          <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                            <MagnifyingGlassIcon className="mb-2 size-8 opacity-40" />
                            <p className="text-sm">未找到相关产品</p>
                            <p className="mt-0.5 text-xs text-slate-400">请尝试其他关键词</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 底部操作栏 */}
                {footerActions && footerActions.length > 0 && (
                  <div className="border-t border-slate-100 bg-slate-50/50 px-5 py-2.5">
                    <div className="flex items-center gap-5">
                      {footerActions.map((action) => {
                        const Icon = action.icon
                        return (
                          <Link
                            key={action.name}
                            href={action.href}
                            onClick={() => close()}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
                          >
                            {Icon && <Icon aria-hidden="true" className="size-4 text-brand-500" />}
                            {action.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
    </div>
  )
}

/* ─────────────────────── 子组件 ─────────────────────── */

/** 分区标题 */
const SectionTitle = React.memo(function SectionTitle({ color, text }: { color: 'brand' | 'muted'; text: string }) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5">
      <span className={`h-4 w-1 rounded-full ${color === 'brand' ? 'bg-brand-500' : 'bg-slate-300'}`} />
      <h4 className="text-[13px] font-semibold uppercase tracking-wide text-slate-500">{text}</h4>
    </div>
  )
})

/** 热门产品卡片 */
const FeaturedProductCard = React.memo(function FeaturedProductCard({
  item,
  index,
  onClick,
}: {
  item: MegaMenuItem
  index: number
  onClick?: () => void
}) {
  const formattedIndex = index.toString().padStart(2, '0')

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group/card relative flex items-start gap-4 rounded-md p-4 transition-all duration-150 hover:bg-slate-50"
    >
      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center text-[15px] font-bold leading-none text-brand-500">
        {formattedIndex}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-900 transition-colors group-hover/card:text-brand-600 line-clamp-1">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded-[2px] px-1 py-0.5 text-[11px] leading-none font-medium ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{item.description}</p>
        )}
      </div>
    </Link>
  )
})

/** 普通产品链接 */
const ProductLink = React.memo(function ProductLink({ item, onClick }: { item: MegaMenuItem; onClick?: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group/link flex items-center gap-4 rounded-md p-4 transition-all duration-150 hover:bg-slate-50"
    >
      {item.icon && (
        <div className="flex size-9 flex-none items-center justify-center rounded-[4px] bg-brand-50 text-brand-500 transition-all duration-150 group-hover/link:bg-brand-500 group-hover/link:text-white group-hover/link:shadow-sm">
          <item.icon aria-hidden="true" className="size-[18px]" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-900 transition-colors group-hover/link:text-brand-600 line-clamp-1">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded-[2px] px-1 py-0.5 text-[11px] leading-none font-medium ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{item.description}</p>
        )}
      </div>
    </Link>
  )
})

export default MegaMenu
