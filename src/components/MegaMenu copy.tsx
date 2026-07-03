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
  /**
   * 底部提示文案，传入空字符串可隐藏提示条
   * @default '提示：鼠标悬停分类可快速切换，也可使用搜索查找产品'
   */
  tipText?: string
}

/* ─────────────────────── 样式常量 ─────────────────────── */

const badgeStyles: Record<string, string> = {
  hot: 'bg-red-500 text-white',
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

/** 从 items 中排除已在 featured 中出现的项目（以 id 为唯一键，无 id 则降级为 name） */
function excludeFeaturedItems(items: MegaMenuItem[], featured?: MegaMenuItem[]): MegaMenuItem[] {
  if (!featured || featured.length === 0) return items
  const featuredIds = new Set(featured.map((f) => f.id ?? f.name))
  return items.filter((item) => !featuredIds.has(item.id ?? item.name))
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
  tipText = '提示：鼠标悬停分类可快速切换，也可使用搜索查找产品',
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
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const indicatorId = useId() // 为每个 MegaMenu 实例生成唯一 ID，避免 layoutId 冲突

  // 防抖：用户停止输入 200ms 后再执行过滤
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 200)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId)

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId)
    setSearchQuery('')
  }, [])

  const filteredItems = useMemo(() => {
    if (!activeCategory) return []
    return debouncedQuery
      ? activeCategory.items.filter(
          (item) =>
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            item.description?.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      : excludeFeaturedItems(activeCategory.items, activeCategory.featured)
  }, [debouncedQuery, activeCategory])

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
              gap: '9px',
            }}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
            style={{ maxWidth: panelWidth, width: '100vw' }}
            className="z-50 origin-top overflow-visible transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {/* ── 阴影层 ── */}
            <div aria-hidden="true" className="absolute inset-0 shadow-2xl ring-1 ring-black/5 rounded-lg" />
            {/* ── 面板主体 ── */}
            <div className="relative bg-white border-t border-gray-200">
              <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
                <div className="max-h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
                  {/* ── 标题与分类导航 ── */}
                  <div className="flex items-center justify-between border-b border-slate-100 py-4">
                    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                      {categories.map((category) => {
                        const isActive = category.id === activeCategoryId
                        const Icon = category.icon
                        return (
                          <button
                            key={category.id}
                            type="button"
                            aria-current={isActive ? 'true' : undefined}
                            onMouseEnter={() => handleCategoryChange(category.id)}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`inline-flex items-center gap-2 shrink-0 rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 outline-none ${
                              isActive
                                ? 'bg-brand-500 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            {Icon && <Icon aria-hidden="true" className="size-4" />}
                            <span>{category.name}</span>
                            {category.isHot && (
                              <span className="rounded-sm bg-red-500 px-1 py-0.5 text-[10px] leading-none font-bold text-white">
                                HOT
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {showSearch && (
                        <div className="relative min-w-0 w-[200px]">
                          <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            className="h-8 w-full rounded-md border border-slate-200 bg-slate-50 py-1 pr-2.5 pl-8 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-brand-300 focus:bg-white focus:ring-[3px] focus:ring-brand-500/10"
                          />
                        </div>
                      )}
                      {viewAllHref && (
                        <Link
                          href={viewAllHref}
                          onClick={() => close()}
                          className="shrink-0 text-xs font-medium text-brand-500 transition-colors hover:text-brand-600"
                        >
                          查看全部 →
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* ── 快捷标签（可选） ── */}
                  {quickTags && quickTags.length > 0 && (
                    <div className="flex items-center gap-2 py-3 border-t border-b border-slate-100">
                      <span className="text-xs text-slate-400 shrink-0">快速直达：</span>
                      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                        {quickTags.map((tag) => (
                          <Link
                            key={tag.name}
                            href={tag.href}
                            onClick={() => close()}
                            className="shrink-0 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500 transition-all hover:border-brand-200 hover:text-brand-600"
                          >
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── 内容主体 ── */}
                  <div className="py-6">
                    <AnimatePresence mode="wait">
                      {activeCategory && (
                        <motion.div
                          key={activeCategory.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' as const }}
                          className="grid grid-cols-1 gap-8 lg:grid-cols-5"
                        >
                          {/* 左列：热门推荐 + 全部产品 */}
                          <div className="lg:col-span-3">
                            {/* 热门推荐 */}
                            {activeCategory.featured && activeCategory.featured.length > 0 && !debouncedQuery && (
                              <section className="mb-8">
                                <SectionTitle text="热门推荐" />
                                <motion.div
                                  className="grid grid-cols-2 gap-3"
                                  variants={containerVariants}
                                  initial="hidden"
                                  animate="show"
                                  exit="exit"
                                >
                                  {activeCategory.featured.map((item) => (
                                    <motion.div key={item.id || item.name} variants={itemVariants}>
                                      <FeaturedProductCard item={item} onClick={() => close()} />
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </section>
                            )}

                            {/* 全部产品 */}
                            {filteredItems.length > 0 && (
                              <section>
                                {activeCategory.featured && activeCategory.featured.length > 0 && !debouncedQuery && (
                                  <SectionTitle text="全部产品" />
                                )}
                                <motion.div
                                  className="grid grid-cols-2 gap-x-4 gap-y-3"
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
                            {filteredItems.length === 0 && debouncedQuery && (
                              <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                                <MagnifyingGlassIcon className="mb-3 size-10 opacity-30" />
                                <p className="text-sm font-medium">未找到相关产品</p>
                                <p className="mt-1 text-xs text-slate-400">请尝试其他关键词搜索</p>
                              </div>
                            )}
                          </div>

                          {/* 右列：分割线 + 快速通道 */}
                          <div className="hidden lg:block lg:col-span-2">
                            <div className="border-l border-slate-100 pl-8 flex flex-col gap-4">
                              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-5">
                                <SectionTitle text="快速通道" />
                                <div className="mt-4 space-y-1">
                                  {footerActions && footerActions.length > 0 ? (
                                    footerActions.map((action) => {
                                      const Icon = action.icon
                                      return (
                                        <Link
                                          key={action.name}
                                          href={action.href}
                                          onClick={() => close()}
                                          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-brand-600"
                                        >
                                          {Icon && <Icon aria-hidden="true" className="size-5 text-brand-500" />}
                                          {action.name}
                                        </Link>
                                      )
                                    })
                                  ) : (
                                    <p className="text-sm text-slate-400 px-3 py-2">暂无快捷入口</p>
                                  )}
                                </div>
                              </div>
                              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-5">
                                <SectionTitle text="产品分类" />
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {categories.map((cat) => (
                                    <button
                                      key={cat.id}
                                      type="button"
                                      onMouseEnter={() => handleCategoryChange(cat.id)}
                                      onClick={() => handleCategoryChange(cat.id)}
                                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                                        cat.id === activeCategoryId
                                          ? 'bg-brand-500 text-white'
                                          : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-200 hover:text-brand-600'
                                      }`}
                                    >
                                      {cat.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* ── 底部提示（固定在面板底部，不滚动） ── */}
                <div className="border-t border-slate-100 py-2 px-0">
                  <p className="text-xs text-slate-400">
                    {tipText}
                  </p>
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
const SectionTitle = React.memo(function SectionTitle({ text }: { text: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-3 w-[3px] rounded-full bg-brand-500" />
      <h4 className="text-sm font-semibold text-slate-900">{text}</h4>
    </div>
  )
})

/** 热门推荐卡片 */
const FeaturedProductCard = React.memo(function FeaturedProductCard({
  item,
  onClick,
}: {
  item: MegaMenuItem
  onClick?: () => void
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group/card flex items-start gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 transition-all duration-200 hover:border-brand-200 hover:shadow-sm"
    >
      {item.icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors duration-200 group-hover/card:bg-brand-500 group-hover/card:text-white">
          <item.icon aria-hidden="true" className="size-5" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-900 transition-colors group-hover/card:text-brand-600 line-clamp-1">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded-sm px-1.5 py-0.5 text-[10px] leading-none font-semibold ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{item.description}</p>
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
      className="group/link flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-150 hover:bg-slate-50"
    >
      {item.icon && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-400 transition-colors duration-150 group-hover/link:bg-brand-50 group-hover/link:text-brand-500">
          <item.icon aria-hidden="true" className="size-4" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-900 transition-colors group-hover/link:text-brand-600 line-clamp-1">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded-sm px-1 py-0.5 text-[10px] leading-none font-medium ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 line-clamp-1 text-xs text-slate-400">{item.description}</p>
        )}
      </div>
    </Link>
  )
})

export default MegaMenu
