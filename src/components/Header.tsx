'use client'

import React, { JSX, useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ServerIcon,
  UserPlusIcon,
  VideoCameraIcon,
  PhotoIcon,
  MusicalNoteIcon,
  PresentationChartBarIcon,
  DocumentDuplicateIcon,
  ScissorsIcon,
  PencilSquareIcon,
  SparklesIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Logo } from '@/components/Logo'

// 菜单项类型定义
interface MenuItem {
  name: string
  description: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  hot?: boolean // 热门标签
}

interface CallToAction {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 云计算产品与服务菜单配置
const products: MenuItem[] = [
  {
    name: '云服务器ECS',
    description: '稳定高效的计算服务',
    href: '/ecs',
    icon: ServerIcon,
  },
  {
    name: '云电脑桌面',
    description: '便捷安全的远程办公',
    href: '/windows',
    icon: ComputerDesktopIcon,
  },
  {
    name: '虚拟主机',
    description: '简单易用的建站服务',
    href: '/host',
    icon: FingerPrintIcon,
  },
  {
    name: 'CDN服务',
    description: '全球内容加速分发',
    href: '/cdn',
    icon: SquaresPlusIcon,
  },
  {
    name: '独立服务器',
    description: '专属物理服务器租用',
    href: '/server',
    icon: ArrowPathIcon,
  },
  {
    name: 'SSL证书',
    description: 'HTTPS加密',
    href: '/ssl',
    icon: ShieldCheckIcon,
  },
]

// 人工智能产品菜单配置
const aiProducts: MenuItem[] = [
  {
    name: '艺创AI',
    description: '私有部署个性化定制',
    href: '/ai',
    icon: CursorArrowRaysIcon,
    hot: true, // 添加热门标签
  },
  {
    name: '数字分身',
    description: '虚拟数字人服务',
    href: '/human',
    icon: ChartPieIcon,
  },
  {
    name: '数企知识库',
    description: '智能知识管理',
    href: '/work',
    icon: FingerPrintIcon,
  },
  {
    name: '聊天绘画',
    description: '智能知识管理',
    href: '/chat',
    icon: ChartPieIcon,
  },
  {
    name: '论文创作',
    description: '智能内容生成',
    href: '/paper',
    icon: SquaresPlusIcon,
  },
  {
    name: '体验产品',
    description: '产品演示',
    href: '/demo',
    icon: SquaresPlusIcon,
  },
]

// 行业解决方案菜单配置
const solutions: MenuItem[] = [
  {
    name: '香蕉绘画',
    description: 'AI图像生成系统',
    href: '/banana',
    icon: PhotoIcon,
  },
  {
    name: '短剧小说创作',
    description: '网文短剧写作工具',
    href: '/drama',
    icon: PencilSquareIcon,
  },
  {
    name: '即梦AI视频',
    description: 'AI视频生成系统',
    href: '/jimeng',
    icon: VideoCameraIcon,
  },
  {
    name: '即梦AI绘画',
    description: 'AI绘画生成系统',
    href: '/jmdraw',
    icon: SparklesIcon,
  },
  {
    name: 'Wan漫剧',
    description: '角色模板视频生成',
    href: '/manju',
    icon: FilmIcon,
  },
  {
    name: '电商试衣换装',
    description: 'AI模特换装系统',
    href: '/model',
    icon: UserIcon,
  },
  {
    name: 'AI音乐',
    description: 'AI音乐生成系统',
    href: '/music',
    icon: MusicalNoteIcon,
  },
  {
    name: 'AI PPT',
    description: '智能演示文稿制作',
    href: '/ppt',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'AI简历',
    description: '智能简历生成系统',
    href: '/resume',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Sora视频生成',
    description: 'AI视频创作系统',
    href: '/sora',
    icon: VideoCameraIcon,
  },
  {
    name: '视频混剪助手',
    description: '视频剪辑软件',
    href: '/videoclip',
    icon: ScissorsIcon,
  },
  {
    name: '小红书助手',
    description: '热门内容创作工具',
    href: '/xhs',
    icon: DocumentTextIcon,
  },
]

// 企业解决方案菜单配置
const enterpriseSolutions: MenuItem[] = [
  {
    name: '电商解决方案',
    description: '智能建站解决方案',
    href: '/ecommerce',
    icon: ChartPieIcon,
  },
  {
    name: 'CMS解决方案',
    description: '内容管理系统解决方案',
    href: '/cms',
    icon: DocumentTextIcon,
  },
  {
    name: '视频解决方案',
    description: '视频行业专属解决方案',
    href: '/video',
    icon: ShieldCheckIcon,
  },
  {
    name: '零售解决方案',
    description: '零售行业专属解决方案',
    href: '/retail',
    icon: SquaresPlusIcon,
  },
]

// 公司信息菜单配置
const company: MenuItem[] = [
  {
    name: '关于我们',
    description: '了解公司历史与文化',
    href: '/about',
    icon: UserIcon,
  },
  // { name: '招贤纳士', description: '加入我们的团队', href: '/recruitment', icon: DocumentTextIcon },
  {
    name: '技术支持',
    description: '获取专业技术帮助',
    href: '/support',
    icon: QuestionMarkCircleIcon,
  },
  // { name: '新闻中心', description: '公司最新动态', href: '/news', icon: MagnifyingGlassIcon },
  {
    name: '推广合作',
    description: '推广合作',
    href: '/agent',
    icon: DocumentTextIcon,
  },
  {
    name: '联系我们',
    description: '联系我们',
    href: '/contact',
    icon: UserIcon,
  },
]

// 行动按钮配置
const callsToAction: CallToAction[] = [
  { name: '产品文档', href: '/docs', icon: PlayCircleIcon },
  { name: '联系销售', href: '/contact', icon: PhoneIcon },
]

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
          <PopoverGroup className="hidden lg:flex lg:gap-x-1">
            {/* 最新活动菜单 - 带HOT标签的直链菜单 */}
            <a
              href="/new"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
            >
              最新活动
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                HOT
              </span>
            </a>

            {/* 电商云菜单 - 带HOT标签的直链菜单 */}
            <a
              href="/eccloud"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
            >
              电商云
              <span className="absolute -top-1 -right-1 rounded-full bg-blue-600 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                NEW
              </span>
            </a>

            {/* 产品与服务下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    产品与服务
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                {item.name === '电商云' && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-blue-600 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    NEW
                                  </span>
                                )}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 人工智能与应用下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    人工智能与应用
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {aiProducts.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                {item.hot && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    HOT
                                  </span>
                                )}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-4 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 行业解决方案下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    AI解决方案
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {solutions.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-4 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 企业解决方案下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    企业解决方案
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {enterpriseSolutions.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-4 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 关于我们下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    关于我们
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {company.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-4 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 电商云菜单已移至产品与服务下拉菜单中 */}

            {/* 艺创智能 */}
            {/* <a
              href="/yichuang-ai"
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              艺创智能
            </a> */}
            {/* 172号卡菜单 */}
            {/* <a
              href="/172-card"
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
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
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            <span className="sr-only">打开主菜单</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* 右侧：桌面端直链菜单和用户操作区 */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-1">
          {/* 文档中心 */}
          <a
            href="/docs"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            文档中心
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 控制台 */}
          <a
            href="https://console.cloudcvm.com"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            控制台
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 登录 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            登录
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 免费注册 - 主要CTA按钮 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="inline-flex items-center justify-center gap-2 border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
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
              className="rounded-md p-2 text-gray-500 transition-colors hover:text-gray-700"
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
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  最新活动
                  <span className="absolute top-1 right-3 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                    HOT
                  </span>
                </a>

                {/* 移动端电商云链接 - 带HOT标签 */}
                <a
                  href="/eccloud"
                  className="relative block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  电商云
                  <span className="absolute top-1 right-3 rounded-full bg-blue-600 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                    NEW
                  </span>
                </a>

                {/* 移动端产品与服务折叠菜单 */}
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        产品与服务
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pr-1 pl-3">
                        <div className="grid grid-cols-2 gap-2">
                          {products.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                              <div className="mb-2 flex items-center">
                                <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-50">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-4 text-gray-600"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="block font-medium text-black transition-colors hover:text-gray-700"
                                >
                                  {item.name}
                                  {item.name === '电商云' && (
                                    <span className="ml-1 inline-flex items-center rounded-full bg-blue-600 px-1 py-0.5 text-xs leading-none font-bold text-white">
                                      NEW
                                    </span>
                                  )}
                                </a>
                              </div>
                              <p className="text-xs text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-2 gap-2">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-1.5 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-3"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 移动端人工智能与应用折叠菜单 */}
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        人工智能与应用
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pr-1 pl-3">
                        <div className="grid grid-cols-2 gap-2">
                          {aiProducts.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                              <div className="mb-2 flex items-center">
                                <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-50">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-4 text-gray-600"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="block font-medium text-black transition-colors hover:text-gray-700"
                                >
                                  {item.name}
                                  {item.hot && (
                                    <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                      HOT
                                    </span>
                                  )}
                                </a>
                              </div>
                              <p className="text-xs text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-2 gap-2">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-1.5 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-3"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 移动端解决方案折叠菜单 */}
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        解决方案
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pr-1 pl-3">
                        <div className="grid grid-cols-2 gap-2">
                          {solutions.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                              <div className="mb-2 flex items-center">
                                <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-50">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-4 text-gray-600"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="block font-medium text-black transition-colors hover:text-gray-700"
                                >
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-2 gap-2">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-1.5 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-3"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 移动端企业解决方案折叠菜单 */}
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        企业解决方案
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pr-1 pl-3">
                        <div className="grid grid-cols-2 gap-2">
                          {enterpriseSolutions.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                              <div className="mb-2 flex items-center">
                                <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-50">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-4 text-gray-600"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="block font-medium text-black transition-colors hover:text-gray-700"
                                >
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-2 gap-2">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-1.5 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-3"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 移动端关于我们折叠菜单 */}
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        关于我们
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pr-1 pl-3">
                        <div className="grid grid-cols-2 gap-2">
                          {company.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-gray-50"
                            >
                              <div className="mb-2 flex items-center">
                                <div className="mr-2 flex size-7 items-center justify-center rounded-lg bg-gray-50">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-4 text-gray-600"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="block font-medium text-black transition-colors hover:text-gray-700"
                                >
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-gray-200 pt-3">
                          <div className="grid grid-cols-2 gap-2">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-1.5 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-3"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 电商云菜单已移至产品与服务下拉菜单中 */}

                {/* 移动端艺创智能链接 */}
                {/*
                <a
                  href="/yichuang-ai"
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  艺创智能
                </a>
                */}

                {/* 移动端172号卡链接 */}
                {/*
                <a
                  href="/172-card"
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  172号卡
                </a>
                */}

                {/* 移动端用户操作区：登录注册按钮组 */}
                <div className="mt-2 flex gap-3">
                  {/* 登录注册按钮 - 次要样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className="flex flex-1 items-center justify-center gap-x-2 bg-gray-100 px-4 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-blue-600"
                  >
                    <UserIcon className="h-5 w-5" />
                    登录/注册
                  </a>

                  {/* 控制台按钮 - 主要CTA样式 */}
                  <a
                    href="https://console.cloudcvm.com/login.htm"
                    className="flex flex-1 items-center justify-center gap-x-2 border border-transparent bg-blue-600 px-4 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
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
