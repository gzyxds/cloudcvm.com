'use client'

import Image from 'next/image'
import { useState } from 'react'

const navigation = {
  products: [
    { name: '云服务器 ECS', href: '/ecs/' },
    { name: '轻量云主机', href: '/ecs/' },
    { name: '独立服务器', href: '/server/' },
    { name: 'Windows服务器', href: '/windows/' },
    { name: '虚拟主机', href: '/host/' },
    { name: '内容分发网络 CDN', href: '/cdn/' },
    { name: 'SSL证书', href: '/ssl/' },
  ],
  aiServices: [
    { name: '艺创AI平台', href: '/ai/' },
    { name: '数字分身', href: '/human/' },
    { name: 'AI聊天绘画', href: '/chat/' },
    { name: '企业知识库', href: '/work/' },
    { name: '论文创作', href: '/paper/' },
    { name: 'AI视频生成', href: '/video/' },
    { name: '产品演示', href: '/demo/' },
  ],
  aiSolutions: [
    { name: 'AI PPT制作', href: '/ppt/' },
    { name: 'AI 简历生成', href: '/resume/' },
    { name: 'AI 音乐创作', href: '/music/' },
    { name: 'AI 短剧解说', href: '/drama/' },
    { name: 'AI 视频剪辑', href: '/videoclip/' },
    { name: '小红书文案', href: '/xhs/' },
  ],
  solutions: [
    { name: '电商解决方案', href: '/ecommerce/' },
    { name: '零售解决方案', href: '/retail/' },
    { name: '金融解决方案', href: '/finance/' },
    { name: '游戏解决方案', href: '/game/' },
    { name: '政府解决方案', href: '/gov/' },
    { name: '移动解决方案', href: '/mobile/' },
  ],
  support: [
    { name: '帮助中心', href: '/support/' },
    { name: '智能客服', href: '/aiservice/' },
    { name: '备案服务', href: 'https://beian.miit.gov.cn/' },
    { name: '联系我们', href: '/contact/' },
  ],
  about: [
    { name: '公司简介', href: '/about/' },
    { name: '技术支持', href: '/support/' },
    { name: '推广合作', href: '/agent/' },
  ],
  friendlyLinks: [
    { name: '艺创AI', href: 'https://www.urlnet.cn' },
    { name: 'AIGC', href: 'https://aigc.gmlart.cn/' },
    { name: 'AI系统源码', href: 'https://www.artaigc.cn' },
    { name: 'PaYphp', href: 'https://www.payphp.cn' },
    { name: '论文创作', href: 'https://paper.gmlart.cn' },
    { name: '智言AI', href: 'https://buidai.com/' },
    { name: '智言API', href: 'https://api.gmlart.cn/' },
    { name: '数字分身', href: 'https://v.cnai.art' },
    { name: '企业知识库', href: 'https://www.cnai.art' },
    { name: '聊天绘画', href: 'https://cnai.art' },
    { name: '免费领卡', href: 'https://urlka.cn/' },
  ],
}

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({})

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }))
  }

  const AccordionSection = ({
    title,
    items,
    sectionKey,
  }: {
    title: string
    items: { name: string; href: string }[]
    sectionKey: string
  }) => {
    const isExpanded = expandedSections[sectionKey]

    return (
      <div className="border-b border-gray-200 md:border-none dark:border-gray-700">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:cursor-default"
          aria-expanded={isExpanded}
        >
          <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <svg
            className={`h-5 w-5 transform transition-transform duration-200 md:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${
            isExpanded ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none md:pb-0'
          }`}
        >
          <ul role="list" className="space-y-4 md:mt-6">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-1 text-sm/6 text-gray-600 hover:text-gray-900 md:py-0 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* 全屏分割线 */}
      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-6 pt-6 pb-4 sm:pt-10 lg:px-8 lg:pt-14">
          <div className="xl:grid xl:grid-cols-7 xl:gap-8">
            {/* 移动端手风琴布局，桌面端网格布局 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6 xl:col-span-6">
              <AccordionSection
                title="基础云计算"
                items={navigation.products}
                sectionKey="products"
              />
              <AccordionSection
                title="人工智能"
                items={navigation.aiServices}
                sectionKey="aiServices"
              />
              <AccordionSection
                title="AI解决方案"
                items={navigation.aiSolutions}
                sectionKey="aiSolutions"
              />
              <AccordionSection
                title="行业解决方案"
                items={navigation.solutions}
                sectionKey="solutions"
              />
              <AccordionSection
                title="支持与服务"
                items={navigation.support}
                sectionKey="support"
              />
              <AccordionSection
                title="关于我们"
                items={navigation.about}
                sectionKey="about"
              />
            </div>
            <div className="mt-10 xl:mt-0 xl:col-span-1">
              <div className="flex justify-center xl:justify-start">
                <Image
                  src="/images/logos/logo.svg"
                  alt="优刻云"
                  width={109}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              {/* 二维码区域 */}
              <div className="mt-8">
                <div className="mx-auto grid max-w-sm grid-cols-3 gap-4 xl:mx-0">
                  {/* 微信公众号二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="关注微信公众号"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      关注微信公众号
                    </p>
                  </div>
                  {/* 扫码加入社群二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/Tencent.png"
                        alt="扫码联系客服"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      扫码联系客服
                    </p>
                  </div>
                  {/* 微信小程序二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/QQ.png"
                        alt="关注微信小程序"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      腾讯在线客服
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 区域 */}
          <div className="mt-6 border-t border-gray-900/10 pt-6 md:flex md:items-center md:justify-between dark:border-white/10">
            {/* 桌面端：标题和链接并排显示，与底部版权信息保持一致的布局 */}
            <div className="hidden md:flex md:items-center md:gap-x-6">
              <h3 className="text-sm/6 font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                友情链接：
              </h3>
              <div className="flex flex-wrap gap-x-6">
                {navigation.friendlyLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm/6 whitespace-nowrap text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* 移动端：优化的折叠功能 */}
            <div className="md:hidden">
              {/* 折叠按钮 */}
              <button
                type="button"
                onClick={() => toggleSection('friendlyLinks')}
                className="flex w-full items-center justify-between py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={!!expandedSections['friendlyLinks']}
                aria-controls="friendlyLinks-content"
                aria-label="展开或收起友情链接"
              >
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  友情链接
                </h3>
                <svg
                  className={`h-5 w-5 transform text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
                    expandedSections['friendlyLinks'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* 折叠内容 */}
              <div
                id="friendlyLinks-content"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSections['friendlyLinks']
                    ? 'max-h-96 pb-3'
                    : 'max-h-0'
                }`}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {navigation.friendlyLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm/6 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 底部版权信息 */}
          <div className="mt-6 border-t border-gray-900/10 pt-6 md:flex md:items-center md:justify-between dark:border-white/10">
            <p className="mt-6 text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
              &copy; {new Date().getFullYear()} 优刻云计算. All rights reserved.{' '}
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white"
              >
                赣ICP备2023002309号-3
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
