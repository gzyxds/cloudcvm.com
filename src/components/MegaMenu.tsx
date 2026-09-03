'use client'

import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import {
  navTriggerBase,
  navTriggerIdle,
  navTriggerActive,
  badgeStyles,
  popoverPanelBase,
  megaPanelContainer,
  megaPanelScroll,
  megaSideRail,
  megaSideLeft,
  megaSideRight,
  megaMain,
  categoryButtonBase,
  categoryButtonIdle,
  categoryButtonActive,
  categoryUnderline,
  searchInput,
  quickTag,
  sectionTitle,
  sectionTitleBar,
  sectionTitleText,
  featuredCard,
  featuredCardIcon,
  productLink,
  productLinkIcon,
  quickActionLink,
  megaPromoCard,
  megaPromoIcon,
  megaPromoTitle,
  megaPromoDesc,
  megaPromoLink,
} from '@/components/navStyles'

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
}

export interface MegaMenuCategory {
  id: string
  name: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  items: MegaMenuItem[]
  featured?: MegaMenuItem[]
  isHot?: boolean
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
  categories: MegaMenuCategory[]
  quickTags?: QuickTag[]
  showSearch?: boolean
  searchPlaceholder?: string
  footerActions?: FooterAction[]
  defaultActiveCategory?: string
  triggerClassName?: string
  viewAllHref?: string
  /**
   * 底部提示文案，默认不显示（传非空字符串才显示提示条）
   * @default ''
   */
  tipText?: string
  /** 触发按钮右上角的角标（如 NEW / AI系统），传入 ReactNode */
  triggerBadge?: React.ReactNode
  /** 当前路由命中本组分类时高亮触发按钮（“所在分组”反馈） */
  isCurrent?: boolean
}

/* ─────────────────────── 辅助函数 ─────────────────────── */

/** 从 items 中排除已在 featured 中出现的项目（以 id 为唯一键，无 id 则降级为 name） */
function excludeFeaturedItems(
  items: MegaMenuItem[],
  featured?: MegaMenuItem[],
): MegaMenuItem[] {
  if (!featured || featured.length === 0) return items
  const featuredIds = new Set(featured.map((f) => f.id ?? f.name))
  return items.filter((item) => !featuredIds.has(item.id ?? item.name))
}

/* ─────────────────────── Framer Motion Variants ─────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.08 } },
}

/* ─────────────────────── 主组件 ─────────────────────── */

export function MegaMenu({
  triggerText,
  categories,
  quickTags,
  showSearch = true,
  searchPlaceholder = '搜索产品名称',
  footerActions,
  defaultActiveCategory,
  triggerClassName = '',
  viewAllHref,
  tipText = '',
  triggerBadge,
  isCurrent = false,
}: MegaMenuProps): React.ReactElement {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    defaultActiveCategory || categories[0]?.id || '',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

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
            item.description
              ?.toLowerCase()
              .includes(debouncedQuery.toLowerCase()),
        )
      : excludeFeaturedItems(activeCategory.items, activeCategory.featured)
  }, [debouncedQuery, activeCategory])

  useEffect(() => {
    if (
      categories.length > 0 &&
      !categories.find((c) => c.id === activeCategoryId)
    ) {
      setActiveCategoryId(categories[0].id)
    }
  }, [categories, activeCategoryId])

  /* ── 双路悬停驱动逻辑 ──
   *
   * 面板虽以 fixed 定位悬浮在视口坐标上，但仍是 wrapper div 的 DOM 子节点，
   * 悬停面板同样算在 wrapper 内。仍追踪两路鼠标状态：
   *   - trigger 路由：wrapper div（包含触发按钮）
   *   - panel 路由：PopoverPanel 自身
   * 只有两路都报告离开时，才执行延迟关闭。
   */
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
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

  /* ── 面板定位 ──
   *
   * 头部是 position: fixed，页面滚动时触发按钮的视口位置不变。
   * 因此不再用 Headless UI anchor（Floating UI 会在滚动时重算 transform，
   * 叠加 CSS transition 造成面板“追尾”抖动），改为打开时测量按钮视口坐标，
   * 用 position: fixed + left:0/right:0 让面板满屏宽度并钉在视口固定位置；
   * 内容在面板内用 max-w-[1800px] 居中，与页面容器对齐。
   * top 取触发按钮底边 +1px，紧贴头部分割线展开，鼠标移动无空白穿越区。
   * 滚动时零重算，仅 resize 时重测。
   */
  const [panelPos, setPanelPos] = useState<{ top: number } | null>(null)

  const updatePanelPos = useCallback(() => {
    const btn = buttonRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    // 面板满屏宽度（left:0/right:0），只需记录距视口顶部的距离
    setPanelPos({ top: rect.bottom + 1 })
  }, [])

  // 触发按钮 aria-expanded 变化（hover/点击/键盘打开）时重测面板位置
  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return
    const observer = new MutationObserver(updatePanelPos)
    observer.observe(btn, {
      attributes: true,
      attributeFilter: ['aria-expanded'],
    })
    return () => observer.disconnect()
  }, [updatePanelPos])

  // 仅窗口尺寸变化时重测（不做 scroll 监听 → 滚动时零抖动）
  useEffect(() => {
    if (!panelPos) return
    window.addEventListener('resize', updatePanelPos)
    return () => window.removeEventListener('resize', updatePanelPos)
  }, [panelPos, updatePanelPos])

  return (
    <div
      className="relative"
      onMouseEnter={handleTriggerEnter}
      onMouseLeave={handleTriggerLeave}
    >
      <Popover className="contents">
        {({ open, close }) => (
          <>
            {/* 触发按钮 */}
            <PopoverButton
              ref={buttonRef}
              aria-current={isCurrent ? 'page' : undefined}
              className={`${navTriggerBase} ${
                open || isCurrent ? navTriggerActive : navTriggerIdle
              } ${triggerClassName}`}
            >
              {/* 角标与文字同行排列（不再绝对定位），避免压到相邻菜单项 */}
              <span className="inline-flex items-center gap-1.5">
                {triggerText}
                {triggerBadge}
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className={`size-4 flex-none transition-transform duration-200 ${
                  open
                    ? 'rotate-180 text-brand-600'
                    : isCurrent
                      ? 'text-brand-600'
                      : 'text-neutral-500'
                }`}
              />
            </PopoverButton>

            {/* 下拉面板 — 基于 fixed 头部视口坐标定位，滚动时零重算、零抖动 */}
            <PopoverPanel
              transition
              onMouseEnter={handlePanelEnter}
              onMouseLeave={handlePanelLeave}
              style={
                panelPos ? { top: panelPos.top, left: 0, right: 0 } : undefined
              }
              className={popoverPanelBase}
            >
              <div className={megaPanelContainer}>
                <div
                  className={megaPanelScroll}
                  style={{ scrollbarGutter: 'stable' }}
                >
                  {/* 三段式布局：左侧分类导航 + 中间主内容区 + 右侧辅助区 */}
                  <div className="flex min-h-[480px]">
                    {/* ── 左侧：产品大类导航 ── */}
                    <aside className={clsx(megaSideRail, megaSideLeft)}>
                      <nav className="space-y-0.5">
                        {categories.map((category) => {
                          const isActive = category.id === activeCategoryId
                          const Icon = category.icon
                          return (
                            <button
                              key={category.id}
                              type="button"
                              aria-current={isActive ? 'true' : undefined}
                              onMouseEnter={() =>
                                handleCategoryChange(category.id)
                              }
                              onClick={() => handleCategoryChange(category.id)}
                              className={clsx(
                                categoryButtonBase,
                                isActive
                                  ? categoryButtonActive
                                  : categoryButtonIdle,
                              )}
                            >
                              {Icon && (
                                <Icon
                                  aria-hidden="true"
                                  className="size-4 shrink-0"
                                />
                              )}
                              <span className="min-w-0 flex-1 truncate">
                                {category.name}
                              </span>
                              {category.isHot && (
                                <span className="rounded-sm bg-red-500 px-1 py-0.5 text-[10px] leading-none font-bold text-white">
                                  HOT
                                </span>
                              )}
                              {/* 选中态下划线 */}
                              <span
                                aria-hidden="true"
                                className={clsx(
                                  categoryUnderline,
                                  isActive
                                    ? 'opacity-100'
                                    : 'opacity-0 group-hover:opacity-25',
                                )}
                              />
                            </button>
                          )
                        })}
                      </nav>
                    </aside>

                    {/* ── 中间：主内容区 ── */}
                    <div className={megaMain}>
                      {/* ── 当前分类标题 + 搜索与查看全部 ── */}
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="min-w-0 truncate text-base font-medium text-neutral-800">
                          {activeCategory?.name}
                        </h3>
                        <div className="flex shrink-0 items-center gap-3">
                          {showSearch && (
                            <div className="relative w-[280px] min-w-0 xl:w-[370px]">
                              <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-500" />
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={searchPlaceholder}
                                className={searchInput}
                              />
                            </div>
                          )}
                          {viewAllHref && (
                            <Link
                              href={viewAllHref}
                              onClick={() => close()}
                              className="shrink-0 text-xs font-medium text-brand-600 transition-colors hover:text-brand-700"
                            >
                              查看全部 →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* ── 快捷标签（可选） ── */}
                      {quickTags && quickTags.length > 0 && (
                        <div className="flex items-center gap-2 border-b border-neutral-100 py-3">
                          <span className="shrink-0 text-xs text-neutral-500">
                            快速直达：
                          </span>
                          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
                            {quickTags.map((tag) => (
                              <Link
                                key={tag.name}
                                href={tag.href}
                                onClick={() => close()}
                                className={quickTag}
                              >
                                {tag.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── 内容主体 ── */}
                      <div className="pt-5 pb-4">
                        <AnimatePresence mode="wait">
                          {activeCategory && (
                            <motion.div
                              key={activeCategory.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 0.15,
                                ease: 'easeInOut' as const,
                              }}
                            >
                              {/* 主内容：热门推荐 + 全部产品 */}
                              <div>
                                {/* 热门推荐 */}
                                {activeCategory.featured &&
                                  activeCategory.featured.length > 0 &&
                                  !debouncedQuery && (
                                    <section className="mb-8">
                                      <SectionTitle text="热门推荐" />
                                      <motion.div
                                        className="grid grid-cols-2 gap-2 xl:grid-cols-3"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                      >
                                        {activeCategory.featured.map((item) => (
                                          <motion.div
                                            key={item.id || item.name}
                                            variants={itemVariants}
                                          >
                                            <FeaturedProductCard
                                              item={item}
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
                                      !debouncedQuery && (
                                        <SectionTitle text="全部产品" />
                                      )}
                                    <motion.div
                                      className="grid grid-cols-2 gap-x-3 gap-y-1 xl:grid-cols-3"
                                      variants={containerVariants}
                                      initial="hidden"
                                      animate="show"
                                      exit="exit"
                                    >
                                      {filteredItems.map((item) => (
                                        <motion.div
                                          key={item.id || item.name}
                                          variants={itemVariants}
                                        >
                                          <ProductLink
                                            item={item}
                                            onClick={() => close()}
                                          />
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  </section>
                                )}

                                {/* 无结果 */}
                                {filteredItems.length === 0 &&
                                  debouncedQuery && (
                                    <div className="flex flex-col items-center justify-center py-16 text-neutral-400">
                                      <MagnifyingGlassIcon className="mb-3 size-10 text-neutral-300" />
                                      <p className="text-sm font-medium text-neutral-700">
                                        未找到相关产品
                                      </p>
                                      <p className="mt-1 text-xs text-neutral-500">
                                        请尝试其他关键词搜索
                                      </p>
                                    </div>
                                  )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* ── 右侧：运营与辅助区 ── */}
                    {(footerActions?.length || viewAllHref) && (
                      <aside className={clsx(megaSideRail, megaSideRight)}>
                        {/* 白蓝推广卡：整卡可点，浅蓝底 + 细蓝边，不与主内容抢视觉 */}
                        {viewAllHref && (
                          <Link
                            href={viewAllHref}
                            onClick={() => close()}
                            className={megaPromoCard}
                          >
                            <span aria-hidden="true" className={megaPromoIcon}>
                              <Squares2X2Icon className="size-5" />
                            </span>
                            <span className="min-w-0">
                              <span className={`block ${megaPromoTitle}`}>
                                还有更多选择
                              </span>
                              <span className={`block ${megaPromoDesc}`}>
                                查看完整目录，找到适合业务的产品与服务。
                              </span>
                              <span className={megaPromoLink}>
                                查看全部
                                <ArrowRightIcon
                                  aria-hidden="true"
                                  className="size-3.5 transition-transform duration-150 group-hover/promo:translate-x-0.5"
                                />
                              </span>
                            </span>
                          </Link>
                        )}
                        {/* px-2：标题与列表统一内缩，与上方推广卡内容左边缘对齐 */}
                        {footerActions && footerActions.length > 0 && (
                          <div className="px-2">
                            <SectionTitle text="快速通道" />
                            <div className="space-y-0.5">
                              {footerActions.map((action) => {
                                const Icon = action.icon
                                return (
                                  <Link
                                    key={action.name}
                                    href={action.href}
                                    onClick={() => close()}
                                    className={quickActionLink}
                                  >
                                    {Icon && (
                                      <Icon
                                        aria-hidden="true"
                                        className="size-5 shrink-0 text-brand-500"
                                      />
                                    )}
                                    {action.name}
                                    <ArrowRightIcon
                                      aria-hidden="true"
                                      className="ml-auto size-3.5 shrink-0 text-neutral-400 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand-500"
                                    />
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </aside>
                    )}
                  </div>
                </div>

                {/* ── 底部提示（固定在面板底部，不滚动；tipText 为空时不显示） ── */}
                {tipText && (
                  <div className="border-t border-neutral-100 py-3">
                    <p className="text-xs text-neutral-500">{tipText}</p>
                  </div>
                )}
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
const SectionTitle = React.memo(function SectionTitle({
  text,
}: {
  text: string
}) {
  return (
    <div className={sectionTitle}>
      <span aria-hidden="true" className={sectionTitleBar} />
      <h4 className={sectionTitleText}>{text}</h4>
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
    <Link href={item.href} onClick={onClick} className={featuredCard}>
      {item.icon && (
        <span className={featuredCardIcon}>
          <item.icon aria-hidden="true" className="size-5" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="line-clamp-1 text-sm font-medium text-neutral-800 transition-colors group-hover/card:text-brand-600">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded px-1.5 py-0.5 text-[10px] leading-none font-medium ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-neutral-500">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  )
})

/** 普通产品链接 */
const ProductLink = React.memo(function ProductLink({
  item,
  onClick,
}: {
  item: MegaMenuItem
  onClick?: () => void
}) {
  return (
    <Link href={item.href} onClick={onClick} className={productLink}>
      {item.icon && (
        <span className={productLinkIcon}>
          <item.icon aria-hidden="true" className="size-4" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="line-clamp-1 text-sm font-medium text-neutral-800 transition-colors group-hover/link:text-brand-600">
            {item.name}
          </span>
          {item.tag && (
            <span
              className={`flex-shrink-0 rounded px-1.5 py-0.5 text-[10px] leading-none font-medium ${
                badgeStyles[item.badgeType || 'default']
              }`}
            >
              {item.tag}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 line-clamp-1 text-xs text-neutral-500">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  )
})

export default MegaMenu
