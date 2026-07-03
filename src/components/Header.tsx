'use client'

import React, { JSX, useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Logo } from '@/components/Logo'
import { MegaMenu } from '@/components/MegaMenu'
import { MobileMenu } from '@/components/MobileMenu'
import {
  productCategories,
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
 * Header组件 - 网站顶部导航栏
 *
 * 功能特性：
 * - 响应式设计，支持桌面端和移动端
 * - 多级下拉菜单，包含产品、AI、解决方案、公司信息
 * - 移动端侧边栏菜单
 * - 用户登录/注册入口
 * - 无障碍访问支持
 *
 * @returns {JSX.Element} Header组件
 */
export function Header(): JSX.Element {
  // 移动端菜单开关状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  // 移除横幅相关状态和事件监听

  return (
    <header className="scrollbar-width-none fixed top-0 right-0 left-0 z-50 box-border w-full bg-white font-[TTTGB-regular,pingfang_SC,helvetica_neue,arial,hiragino_sans_gb,microsoft_yahei_ui,microsoft_yahei,simsun,sans-serif] text-[14px] antialiased">
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
              className="relative rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500"
            >
              最新活动
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                HOT
              </span>
            </a>

            {/* 产品与服务下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="产品与服务"
              title="产品与服务"
              subtitle="热门云服务产品"
              categories={productCategories}
              quickTags={productQuickTags}
              footerActions={commonFooterActions}
              panelWidth={960}
              viewAllHref="/products"
              triggerBadge={(
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="size-full">
                  <circle cx="12" cy="12" r="5" fill="#ff4d4f" opacity="0.5">
                    <animate attributeName="r" values="5;11" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="12" cy="12" r="5" fill="#ff4d4f" opacity="0.4">
                    <animate attributeName="r" values="5;9" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0" dur="1.6s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="12" cy="12" r="5" fill="#ff4d4f" />
                  <circle cx="12" cy="12" r="2" fill="#fff" />
                </svg>
              )}
            />

            {/* 电商云菜单 - 带NEW标签的直链菜单 */}
            <a
              href="/eccloud"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500"
            >
              电商云
              <span className="absolute -top-1 -right-1 rounded-full bg-brand-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                NEW
              </span>
            </a>

            {/* 人工智能与应用下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="人工智能与应用"
              title="人工智能与应用"
              subtitle="AI 能力与智能服务"
              categories={productCategories.filter((c) => c.id === 'ai')}
              quickTags={aiQuickTags}
              footerActions={commonFooterActions}
              panelWidth={760}
            />

            {/* AI解决方案下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="AI解决方案"
              title="AI解决方案"
              subtitle="行业场景化解决方案"
              categories={aiSolutionCategories}
              quickTags={aiQuickTags}
              footerActions={commonFooterActions}
              panelWidth={960}
              viewAllHref="/solutions/ai"
            />

            {/* 企业解决方案下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="企业解决方案"
              title="企业解决方案"
              subtitle="企业级产品矩阵"
              categories={enterpriseCategories}
              quickTags={enterpriseQuickTags}
              footerActions={commonFooterActions}
              panelWidth={780}
            />

            {/* 关于我们下拉菜单 - 企业级二级菜单 */}
            <MegaMenu
              triggerText="关于我们"
              title="关于我们"
              subtitle="了解公司与服务"
              categories={companyCategories}
              footerActions={commonFooterActions}
              panelWidth={720}
            />


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
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-1">
          {/* 文档中心 - 企业级二级菜单（右侧对齐，防止溢出右边缘） */}
          <MegaMenu
            triggerText="文档中心"
            title="文档中心"
            subtitle="海量文档资源与工具"
            categories={docsCategories}
            showSearch={false}
            panelWidth={720}
            viewAllHref="/docs"
            panelAlign="right"
          />

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>
          {/* 产品订购 */}
          <a
            href="https://console.cloudcvm.com/cart/goodsList.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500"
          >
            产品订购
          </a>
          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 控制台 */}
          <a
            href="https://console.cloudcvm.com"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500"
          >
            控制台
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 登录 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-500"
          >
            登录
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 免费注册 - 主要CTA按钮 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="inline-flex items-center justify-center gap-2 border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
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

                {/* 移动端电商云链接 */}
                <a
                  href="/eccloud"
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:text-brand-500"
                >
                  电商云
                  <span className="absolute top-1 right-3 rounded-full bg-brand-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                    NEW
                  </span>
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
                    className="flex flex-1 items-center justify-center gap-x-2 border border-transparent bg-brand-500 px-4 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
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
