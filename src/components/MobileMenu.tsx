'use client'

import React from 'react'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import type { MegaMenuItem, FooterAction, MegaMenuCategory } from '@/components/MegaMenu'
import type { MobileMenuSection } from '@/data/navigation'
import { commonFooterActions } from '@/data/navigation'

/* ─────────────────────── 样式常量 ─────────────────────── */

const badgeLabels: Record<string, string> = {
  hot: 'HOT',
  new: 'NEW',
  beta: 'BETA',
}

/** 徽章配色，与桌面端 MegaMenu 的 badgeStyles 保持一致 */
const badgeColors: Record<string, string> = {
  hot: 'bg-red-500 text-white',
  new: 'bg-brand-500 text-white',
  beta: 'bg-amber-500 text-white',
  default: 'bg-slate-100 text-slate-600',
}

/* ─────────────────────── 辅助函数 ─────────────────────── */

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

/* ─────────────────────── 子组件 ─────────────────────── */

/** 移动端菜单项卡片（整卡可点击） */
const MobileMenuItem = React.memo(function MobileMenuItem({
  item,
}: {
  item: MegaMenuItem
}) {
  const badgeLabel = item.badgeType ? badgeLabels[item.badgeType] || item.tag : item.tag

  return (
    <Link
      href={item.href}
      className="flex flex-col rounded-md border border-slate-200/60 px-3 py-2 transition-colors active:border-brand-300/60 active:bg-brand-50/40"
    >
      <div className="mb-1.5 flex items-center">
        {item.icon && (
          <span className="mr-2 flex size-7 flex-none items-center justify-center rounded bg-slate-50">
            <item.icon aria-hidden="true" className="size-4 text-brand-500" />
          </span>
        )}
        <span className="flex min-w-0 flex-wrap items-center font-medium text-slate-900">
          {item.name}
          {badgeLabel && (
            <span
              className={`ml-1 inline-flex items-center rounded px-1.5 py-0.5 text-xs leading-none font-bold ${badgeColors[item.badgeType || 'default']}`}
            >
              {badgeLabel}
            </span>
          )}
        </span>
      </div>
      {item.description && (
        <p className="text-xs text-slate-500">{item.description}</p>
      )}
    </Link>
  )
})

/** 移动端菜单底部 CTA 按钮 */
const MobileMenuFooter = React.memo(function MobileMenuFooter({
  actions,
}: {
  actions: FooterAction[]
}) {
  return (
    <div className="mt-3 border-t border-gray-200 pt-3">
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.name}
              href={action.href}
              className="flex items-center justify-center gap-x-1.5 bg-brand-500 px-2.5 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-brand-600"
            >
              {Icon && <Icon aria-hidden="true" className="size-3" />}
              {action.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
})

/* ─────────────────────── 主组件 ─────────────────────── */

export interface MobileMenuProps {
  /** 菜单分区配置（从 navigation.ts 导入） */
  sections: MobileMenuSection[]
}

/**
 * 移动端侧边栏菜单组件
 *
 * 数据驱动的移动端导航菜单，复用 navigation.ts 中的
 * MegaMenuCategory 数据，保证与桌面端 MegaMenu 同步。
 * 多分类分区保留分类分组标题，与桌面端分类 Tab 的信息结构对齐。
 */
export const MobileMenu = React.memo(function MobileMenu({
  sections,
}: MobileMenuProps) {
  return (
    <div className="space-y-1">
      {sections.map((section) => {
        const showCategoryHeader = section.categories.length > 1

        return (
          <Disclosure key={section.label} as="div" defaultOpen={false}>
            {({ open }) => (
              <>
                <DisclosureButton
                  className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    open
                      ? 'text-brand-500'
                      : 'text-neutral-700 hover:text-brand-500'
                  }`}
                >
                  <span className="flex items-center">
                    {section.label}
                    {section.badge && (
                      <span
                        className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-bold ${section.badge.className || 'bg-brand-500 text-white'}`}
                      >
                        {section.badge.text}
                      </span>
                    )}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 flex-none transition-transform ${
                      open ? 'rotate-180 text-brand-500' : 'text-gray-400'
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-1 pr-1 pl-3">
                  {section.categories.map((category) => {
                    const items = mergeFeaturedItems(category)
                    if (items.length === 0) return null
                    return (
                      <div key={category.id} className="mb-3 last:mb-0">
                        {showCategoryHeader && (
                          <div className="mb-1.5 flex items-center gap-1 px-1 text-xs font-semibold text-slate-400">
                            {category.icon && (
                              <category.icon aria-hidden="true" className="size-3.5" />
                            )}
                            {category.name}
                          </div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                          {items.map((item) => (
                            <MobileMenuItem
                              key={item.id || item.name}
                              item={item}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                  {section.showFooter !== false && (
                    <MobileMenuFooter actions={commonFooterActions} />
                  )}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
})

export default MobileMenu
