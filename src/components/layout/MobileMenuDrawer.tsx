'use client'

import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { navGroups } from '@/data/navigation'

export interface MobileMenuDrawerProps {
  open: boolean
  onClose: (open: boolean) => void
}

/**
 * 移动端侧边栏抽屉（Dialog + MobileMenu）。
 *
 * 从 Header 拆出并经 `next/dynamic({ ssr: false })` 按需加载：
 * headlessui 与 MobileMenu 相关代码只在用户首次打开菜单时才进入浏览器，
 * 不再随全站共享 chunk 下发（桌面端用户永不下载）。Header 侧保留
 * 打开按钮，抽屉挂载后由 headlessui Dialog 接管焦点陷阱与 Esc 关闭。
 */
export function MobileMenuDrawer({ open, onClose }: MobileMenuDrawerProps) {
  return (
    <Dialog open={open} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-[60] bg-neutral-950/50" />
      <DialogPanel
        id="mobile-menu-drawer"
        className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white p-5 shadow-panel sm:max-w-sm sm:ring-1 sm:ring-neutral-200"
      >
        {/* 移动端菜单头部：Logo和关闭按钮 */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <Link href="/" className="flex items-center">
            <span className="sr-only">优刻云</span>
            <Logo className="h-8 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => onClose(false)}
            className="rounded-md p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800"
          >
            <span className="sr-only">关闭菜单</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* 移动端菜单内容区域：新版 MobileMenu 统一渲染分区、直链与账号操作 */}
        <div className="mt-4 flow-root">
          <MobileMenu sections={navGroups} onNavigate={() => onClose(false)} />
        </div>
      </DialogPanel>
    </Dialog>
  )
}

export default MobileMenuDrawer
