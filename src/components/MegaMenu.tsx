'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import {
  badgeStyles,
  megaPanelContainer,
  megaPanelScroll,
  megaSideRail,
  megaSideLeft,
  megaSideRight,
  megaMain,
  categoryButtonBase,
  categoryButtonIdle,
  categoryButtonActive,
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

export interface MegaMenuPanelProps {
  categories: MegaMenuCategory[]
  quickTags?: QuickTag[]
  footerActions?: FooterAction[]
  showSearch?: boolean
  searchPlaceholder?: string
  defaultActiveCategory?: string
  viewAllHref?: string
  /**
   * 底部提示文案，默认不显示（传非空字符串才显示提示条）
   * @default ''
   */
  tipText?: string
  /** 点击面板内任一导航入口后的回调（由 Header 负责关闭统一面板） */
  onNavigate?: () => void
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

/**
 * MegaMenuPanel — 全宽下拉菜单的「单一面板内容」
 *
 * 只负责渲染三段式内容（左侧分类 / 中间主区 / 右侧辅助区）以及内部
 * 分类切换、搜索过滤等交互。面板的显示/隐藏、悬停关闭与定位统一由
 * Header 的单一受控面板管理，本组件不再持有 Popover 状态，
 * 避免多个菜单各自开合造成面板重叠闪烁。
 */
export function MegaMenuPanel({
  categories,
  quickTags,
  footerActions,
  showSearch = true,
  searchPlaceholder = '搜索产品名称',
  defaultActiveCategory,
  viewAllHref,
  tipText = '',
  onNavigate,
}: MegaMenuPanelProps): React.ReactElement {
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

  const handleNavigate = useCallback(() => {
    onNavigate?.()
  }, [onNavigate])

  return (
    <div className={megaPanelContainer}>
      <div className={megaPanelScroll} style={{ scrollbarGutter: 'stable' }}>
        {/* 三段式布局：左侧分类导航 + 中间主内容区 + 右侧辅助区 */}
        <div className="flex min-h-[480px]">
          {/* ── 左侧：产品大类导航 ── */}
          <aside className={clsx(megaSideRail, megaSideLeft)}>
            {/* 分类按钮 hover 时显示 1px 细灰分割线（颜色同“快速直达”下方分隔线） */}
            <nav className="space-y-0.5">
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
                    onClick={handleNavigate}
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
                      onClick={handleNavigate}
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
                                    onClick={handleNavigate}
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
                            className="grid grid-cols-2 gap-x-3 gap-y-2 xl:grid-cols-3"
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
                                  onClick={handleNavigate}
                                />
                              </motion.div>
                            ))}
                          </motion.div>
                        </section>
                      )}

                      {/* 无结果 */}
                      {filteredItems.length === 0 && debouncedQuery && (
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
                <Link href={viewAllHref} onClick={handleNavigate} className={megaPromoCard}>
                  {/* 第一行：图标与标题并排 */}
                  <span className="flex items-center gap-2.5">
                    <span aria-hidden="true" className={megaPromoIcon}>
                      <Squares2X2Icon className="size-5" />
                    </span>
                    <span className={megaPromoTitle}>还有更多选择</span>
                  </span>
                  {/* 第二行：描述贴左对齐 */}
                  <span className={`block ${megaPromoDesc}`}>
                    查看完整目录，找到适合业务的产品与服务。
                  </span>
                  {/* 第三行：整行直角按钮 */}
                  <span className={megaPromoLink}>
                    查看全部
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-150 group-hover/promo:translate-x-0.5"
                    />
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
                          onClick={handleNavigate}
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
      {/* 第一行：图标与名称并排，徽章紧随 */}
      <div className="flex items-center gap-2">
        {item.icon && (
          <span className={featuredCardIcon}>
            <item.icon aria-hidden="true" className="size-5" />
          </span>
        )}
        <span className="line-clamp-1 min-w-0 text-sm font-medium text-neutral-800 transition-colors group-hover/card:text-brand-600">
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
      {/* 第二行：描述占满整行，贴卡片左缘对齐（与图标左缘一致） */}
      {item.description && (
        <p className="mt-1.5 line-clamp-2 text-left text-xs leading-relaxed text-neutral-500">
          {item.description}
        </p>
      )}
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
      {/* 第一行：图标与名称并排 */}
      <div className="flex items-center gap-2">
        {item.icon && (
          <span className={productLinkIcon}>
            <item.icon aria-hidden="true" className="size-4" />
          </span>
        )}
        <span className="line-clamp-1 min-w-0 text-sm font-medium text-neutral-800 transition-colors group-hover/link:text-brand-600">
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
      {/* 第二行：描述贴左对齐 */}
      {item.description && (
        <p className="mt-1 line-clamp-1 text-left text-xs text-neutral-500">
          {item.description}
        </p>
      )}
    </Link>
  )
})

export default MegaMenuPanel
