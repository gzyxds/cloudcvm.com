'use client'

import React from 'react'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import type { MegaMenuItem, FooterAction } from '@/components/MegaMenu'
import type { MobileMenuSection } from '@/data/navigation'
import { commonFooterActions } from '@/data/navigation'

/* ─────────────────────── 样式常量 ─────────────────────── */

const badgeLabels: Record<string, string> = {
  hot: 'HOT',
  new: 'NEW',
  beta: 'BETA',
}

/* ─────────────────────── 辅助函数 ─────────────────────── */

/** 从多个 category 中扁平化提取所有 items */
function flattenItems(categories: { items: MegaMenuItem[] }[]): MegaMenuItem[] {
  return categories.flatMap((cat) => cat.items)
}

/* ─────────────────────── 子组件 ─────────────────────── */

/** 移动端菜单项卡片 */
const MobileMenuItem = React.memo(function MobileMenuItem({
  item,
}: {
  item: MegaMenuItem
}) {
  const badgeLabel = item.badgeType ? badgeLabels[item.badgeType] || item.tag : item.tag

  return (
<div className="flex flex-col rounded-md border border-slate-100 px-3 py-2 transition-colors">
      <div className="mb-2 flex items-center">
        {item.icon && (
          <div className="mr-2 flex size-7 items-center justify-center">
            <item.icon aria-hidden="true" className="size-4 text-brand-500" />
          </div>
        )}
        <Link
          href={item.href}
          className="block font-medium text-slate-900 transition-colors hover:text-brand-600"
        >
          {item.name}
          {badgeLabel && (
            <span
              className={`ml-1 inline-flex items-center rounded-full px-1.5 py-0.5 text-xs leading-none font-bold text-white ${
                item.badgeType === 'new' ? 'bg-brand-500' : 'bg-red-500'
              }`}
            >
              {badgeLabel}
            </span>
          )}
        </Link>
      </div>
      {item.description && (
        <p className="text-xs text-slate-500">{item.description}</p>
      )}
    </div>
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
              className="flex items-center justify-center gap-x-1.5 bg-brand-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-brand-600"
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
 */
export const MobileMenu = React.memo(function MobileMenu({
  sections,
}: MobileMenuProps) {
  return (
    <div className="space-y-1">
      {sections.map((section) => {
        const allItems = flattenItems(section.categories)

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
                  {section.label}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 flex-none transition-transform ${
                      open ? 'rotate-180 text-brand-500' : 'text-gray-400'
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-1 pr-1 pl-3">
                  <div className="grid grid-cols-2 gap-2">
                    {allItems.map((item) => (
                      <MobileMenuItem
                        key={item.id || item.name}
                        item={item}
                      />
                    ))}
                  </div>
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
