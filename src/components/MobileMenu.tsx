'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import {
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import type {
  MegaMenuItem,
  MegaMenuCategory,
} from '@/components/MegaMenu'
import type { MobileMenuSection } from '@/data/navigation'
import {
  badgeStyles,
  mobilePrimaryButton,
  mobileSecondaryButton,
} from '@/components/navStyles'

/* ─────────────────────── 样式与辅助函数 ─────────────────────── */

const badgeLabels: Record<string, string> = {
  hot: 'HOT',
  new: 'NEW',
  beta: 'BETA',
}

/**
 * 合并分类下的常规项与精选项。
 * 桌面端精选卡中可能存在未列入 items 的产品（如智言AI作图），
 * 移动端需一并展示，保证与桌面端内容一致、不缺失。
 */
function mergeFeaturedItems(category: MegaMenuCategory): MegaMenuItem[] {
  const items = [...category.items]
  const ids = new Set(items.map((item) => item.id))
  for (const featured of category.featured || []) {
    if (featured.id && !ids.has(featured.id)) {
      items.push(featured)
      ids.add(featured.id)
    }
  }
  return items
}

/** 直链菜单的当前页判断（首页除外，避免 '/' 误伤所有路径） */
function isLinkCurrent(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/'
  return href === pathname || pathname.startsWith(`${href}/`)
}

/* ─────────────────────── 产品行（右栏） ─────────────────────── */

/**
 * 移动端产品入口行。
 * 对齐桌面端 ProductLink：图标 + 名称 + 角标一行，描述一行省略，
 * 不加边框和底色，仅保留悬停反馈，保证左右布局下足够简洁。
 */
const MobileProductRow = React.memo(function MobileProductRow({
  item,
  onNavigate,
}: {
  item: MegaMenuItem
  onNavigate?: () => void
}) {
  const badgeLabel = item.badgeType
    ? badgeLabels[item.badgeType] || item.tag
    : item.tag

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group flex items-start gap-2 rounded-md px-2 py-2 transition-colors hover:bg-neutral-50 active:bg-brand-50"
    >
      {item.icon && (
        <span className="mt-0.5 flex size-5 flex-none items-center justify-center">
          <item.icon
            aria-hidden="true"
            className="size-4 shrink-0 text-brand-500"
          />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-sm font-medium text-neutral-800 transition-colors group-hover:text-brand-600">
            {item.name}
          </span>
          {badgeLabel && (
            <span
              className={`flex-none rounded px-1.5 py-0.5 text-[10px] leading-none font-bold ${badgeStyles[item.badgeType || 'default']}`}
            >
              {badgeLabel}
            </span>
          )}
        </span>
        {item.description && (
          <span className="mt-0.5 block truncate text-xs text-neutral-500">
            {item.description}
          </span>
        )}
      </span>
    </Link>
  )
})

/* ─────────────────────── 主组件 ─────────────────────── */

export interface MobileMenuProps {
  /** 菜单分区配置（从 navigation.ts 导入） */
  sections: MobileMenuSection[]
  /** 菜单内任意导航触发后的回调（Header 用它关闭抽屉） */
  onNavigate?: () => void
}

/**
 * 移动端侧边栏菜单组件
 *
 * 参考桌面端 MegaMenu 的左右结构重新设计：
 * - 一级：六个分区（icon + 标题）列表；
 * - 二级：选中分区后进入“左窄右宽”双栏，左侧为分类导航，
 *   右侧为当前分类的产品列表，去掉手风琴与卡片网格，保持简洁。
 */
export const MobileMenu = React.memo(function MobileMenu({
  sections,
  onNavigate,
}: MobileMenuProps) {
  const pathname = usePathname()
  /** 当前展开的分区（null = 一级列表） */
  const [activeSection, setActiveSection] =
    useState<MobileMenuSection | null>(null)
  /** 二级左侧当前选中的分类 id */
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

  const activeCategory = activeSection
    ? activeSection.categories.find(
        (category) => category.id === activeCategoryId,
      ) ?? activeSection.categories[0]
    : null

  const openSection = (section: MobileMenuSection) => {
    setActiveSection(section)
    setActiveCategoryId(section.categories[0]?.id ?? null)
  }

  const newActive = isLinkCurrent('/new', pathname)
  const eccloudActive = isLinkCurrent('/eccloud', pathname)

  /* ── 二级：左右双栏 ── */
  if (activeSection) {
    return (
      <div>
        {/* 顶部返回条 + 当前分区名 */}
        <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
          <button
            type="button"
            aria-label="返回上级菜单"
            onClick={() => setActiveSection(null)}
            className="flex size-8 flex-none items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-brand-600"
          >
            <ArrowLeftIcon aria-hidden="true" className="size-4" />
          </button>
          <span className="flex min-w-0 items-center gap-2">
            {activeSection.icon && (
              <activeSection.icon
                aria-hidden="true"
                className="size-4 shrink-0 text-brand-500"
              />
            )}
            <span className="truncate text-sm font-semibold text-neutral-900">
              {activeSection.label}
            </span>
          </span>
        </div>

        {/* 左窄右宽：分类栏 + 产品列表 */}
        <div className="mt-3 flex items-stretch">
          <aside className="w-32 shrink-0">
            <div className="space-y-1">
              {activeSection.categories.map((category) => {
                const isActive = category.id === activeCategory?.id
                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[13px] leading-tight font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-600'
                    }`}
                  >
                    {category.icon && (
                      <category.icon
                        aria-hidden="true"
                        className={`size-4 shrink-0 ${
                          isActive ? 'text-brand-600' : 'text-neutral-400'
                        }`}
                      />
                    )}
                    <span className="min-w-0 break-words">
                      {category.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </aside>

          <main className="ml-3 min-w-0 flex-1 border-l border-neutral-200 pl-3">
            {activeCategory ? (
              <div className="space-y-0.5">
                {mergeFeaturedItems(activeCategory).map((item) => (
                  <MobileProductRow
                    key={item.id || item.name}
                    item={item}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            ) : (
              <p className="px-2 py-6 text-center text-xs text-neutral-400">
                该分区暂无内容
              </p>
            )}
          </main>
        </div>
      </div>
    )
  }

  /* ── 一级：分区列表 + 常用直链 + 账号操作 ── */
  return (
    <div>
      {/* 六个菜单分区（点击进入二级左右布局） */}
      <div className="space-y-0.5">
        {sections.map((section) => (
          <button
            key={section.label}
            type="button"
            onClick={() => openSection(section)}
            className="group flex w-full items-center justify-between rounded-md py-2 pr-1 pl-2 text-left transition-colors hover:bg-neutral-50 active:bg-brand-50"
          >
            <span className="flex min-w-0 items-center gap-2">
              {section.icon && (
                <section.icon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-brand-500"
                />
              )}
              <span className="truncate text-sm font-medium text-neutral-800 transition-colors group-hover:text-brand-600">
                {section.label}
              </span>
              {section.badge && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none font-bold ${section.badge.className || 'bg-brand-500 text-white'}`}
                >
                  {section.badge.text}
                </span>
              )}
            </span>
            <ChevronRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-neutral-300 transition-colors group-hover:text-brand-500"
            />
          </button>
        ))}
      </div>

      {/* 常用直链：与桌面端导航保持一致，不进入双栏 */}
      <div className="mt-3 space-y-0.5 border-t border-neutral-200 pt-3">
        <Link
          href="/new"
          onClick={onNavigate}
          className={`flex w-full items-center justify-between rounded-md py-2 pr-1 pl-2 text-sm font-medium transition-colors hover:bg-neutral-50 ${
            newActive ? 'text-brand-600' : 'text-neutral-700 hover:text-brand-600'
          }`}
        >
          <span>最新活动</span>
          <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] leading-none font-bold text-white">
            HOT
          </span>
        </Link>
        <Link
          href="/eccloud"
          onClick={onNavigate}
          className={`block w-full rounded-md py-2 pr-1 pl-2 text-sm font-medium transition-colors hover:bg-neutral-50 ${
            eccloudActive
              ? 'text-brand-600'
              : 'text-neutral-700 hover:text-brand-600'
          }`}
        >
          电商云
        </Link>
        <a
          href="https://console.cloudcvm.com/cart/goodsList.htm"
          onClick={onNavigate}
          className="block w-full rounded-md py-2 pr-1 pl-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-brand-600"
        >
          产品订购
        </a>
      </div>

      {/* 账号操作区 */}
      <div className="mt-4 flex gap-3">
        <a
          href="https://console.cloudcvm.com/login.htm"
          onClick={onNavigate}
          className={mobileSecondaryButton}
        >
          <UserIcon aria-hidden="true" className="size-4" />
          登录/注册
        </a>
        <a
          href="https://console.cloudcvm.com/login.htm"
          onClick={onNavigate}
          className={mobilePrimaryButton}
        >
          <ComputerDesktopIcon aria-hidden="true" className="size-4" />
          控制台
        </a>
      </div>
    </div>
  )
})

export default MobileMenu
