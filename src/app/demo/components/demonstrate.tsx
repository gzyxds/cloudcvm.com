'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import {
  X,
  ExternalLink,
  Smartphone,
  Monitor,
  Globe,
  Palette,
  FileText,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * 产品演示数据
 * 包含各个产品的基本信息、描述和演示站点信息
 */
const demoProducts = [
  {
    id: 'digital-human',
    name: '数字人SaaS系统',
    description:
      '通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。',
    icon: Monitor,
    color: 'from-blue-500 to-blue-600',
    demos: [
      {
        title: 'PC演示前台',
        url: 'https://v.cnai.art/',
        qrcode: '/images/contact/userhlc.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: '站点管理端',
        url: 'https://demo.cnai.art/admin/',
        qrcode: '/images/contact/QQ.png',
        credentials: {
          username: 'demo',
          password: 'demo',
        },
      },
      {
        title: 'WAP演示',
        url: 'https://v.cnai.art/mobile',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
    ],
  },
  {
    id: 'knowledge-base',
    name: '全能知识库PHP版',
    description:
      '基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心。',
    icon: Globe,
    color: 'from-indigo-500 to-indigo-600',
    demos: [
      {
        title: '演示前台',
        url: 'https://www.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: '后台演示',
        url: 'https://ai-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'admin',
          password: '123456',
        },
      },
    ],
  },
  {
    id: 'ai-chat-drawing',
    name: '聊天绘画系统',
    description:
      '集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型。',
    icon: Palette,
    color: 'from-purple-500 to-purple-600',
    demos: [
      {
        title: '创作平台',
        url: 'https://cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: '管理后台',
        url: 'https://chat-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'admin',
          password: '123456',
        },
      },
    ],
  },
  {
    id: 'long-writing',
    name: '论文创作系统',
    description:
      '专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。',
    icon: FileText,
    color: 'from-emerald-500 to-emerald-600',
    demos: [
      {
        title: '写作平台',
        url: 'https://cp.chatmoney.cn/generate/1',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: '体验后台',
        url: 'https://cp-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'admin',
          password: '123456',
        },
      },
    ],
  },
  {
    id: 'digital-human-java',
    name: '数字分身2.0版  ',
    description:
      '2.0版数字人SaaS系统，融合了最新的AI技术和数字人交互体验。通过我们的在线演示系统，您可以亲身体验升级版AI数字人的强大功能和直观界面，无需安装，即刻体验。',
    icon: Monitor,
    color: 'from-cyan-500 to-cyan-600',
    demos: [
      {
        title: '2.0管理后台',
        url: 'https://java-demo.cnai.art/admin/',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'ava_demo',
          password: 'ava123',
        },
      },
      {
        title: '移动端',
        url: 'https://java.cnai.art/mobile',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
    ],
  },
  {
    id: 'knowledge-base-java',
    name: '全能知识库Java版',
    description:
      'Java版全能AI知识库系统，基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心，集成AVA智能助手功能。',
    icon: Globe,
    color: 'from-teal-500 to-teal-600',
    demos: [
      {
        title: 'Java版知识库前台',
        url: 'https://java-kb.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: 'Java版知识库后台',
        url: 'https://java-kb-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'java_kb_admin',
          password: 'java_kb123',
        },
      },
    ],
  },
  {
    id: 'ai-chat-drawing-java',
    name: '聊天绘画Java版',
    description:
      'Java版智能聊天绘画系统，集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AVA进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型，提供更智能的创作体验。',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    demos: [
      {
        title: 'Java创作平台',
        url: 'https://java-art.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: 'Java绘画管理后台',
        url: 'https://java-art-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'java_art_admin',
          password: 'java_art123',
        },
      },
    ],
  },
  {
    id: 'long-writing-java',
    name: '论文创作Java版',
    description:
      'Java版论文创作系统，专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。集成AVA智能助手，提供更专业的写作指导。',
    icon: FileText,
    color: 'from-lime-500 to-lime-600',
    demos: [
      {
        title: 'Java写作平台',
        url: 'https://java-writing.chatmoney.cn/generate/1',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: '自行注册',
          password: '自行注册',
        },
      },
      {
        title: 'Java写作后台',
        url: 'https://java-writing-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: {
          username: 'java_writing_admin',
          password: 'java_writing123',
        },
      },
    ],
  },
]

/**
 * 产品演示组件
 *
 * 功能：
 * 1. 提供标签式切换不同产品演示的功能
 * 2. 展示产品演示站点信息，包括网址、账号和密码
 * 3. 提供二维码弹窗功能，用于申请专属演示或联系客服
 *
 * 设计特点：
 * - 采用现代化简约风格，以白、黑、蓝色调为主
 * - 采用左右布局设计，左侧导航，右侧内容
 * - 优化数据展示区域的排版，提升视觉层次感
 * - 使用较小的圆角，保持简洁现代感
 * - 确保响应式设计，适配不同设备
 */
const Demonstrate: React.FC = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState(demoProducts[0].id) // 当前激活的产品标签
  const [showQRModal, setShowQRModal] = useState(false) // 控制二维码弹窗显示
  const [modalType, setModalType] = useState<'demo' | 'service'>('demo') // 弹窗类型：演示或客服

  /**
   * 显示二维码弹窗
   * @param type - 弹窗类型：'demo'(演示)或'service'(客服)
   */
  const handleShowQRCode = (type: 'demo' | 'service') => {
    setModalType(type)
    setShowQRModal(true)
  }

  /**
   * 关闭二维码弹窗
   */
  const handleCloseQRModal = () => {
    setShowQRModal(false)
  }

  // 获取当前激活的产品数据
  const activeProduct = demoProducts.find((product) => product.id === activeTab)

  return (
    <div className="min-h-screen bg-white">
      {/* 页面标题区域 - 简约设计，增加留白 */}
      <header className="bg-gradient-to-b from-neutral-50 to-white pt-16 pb-8 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              系统演示站点
            </h1>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-brand-500"></div>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
              选择产品类型，体验我们的在线演示系统
            </p>
          </motion.div>
        </Container>
      </header>

      {/* 主要内容区域 - 左右布局设计 */}
      <main className="pb-20">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
              <div className="flex flex-col lg:flex-row">
                {/* 左侧产品导航菜单 */}
                <aside className="w-full border-r border-neutral-200 bg-neutral-50 lg:w-72 xl:w-80">
                  <div className="border-b border-neutral-200 p-5">
                    <h2 className="text-lg font-semibold text-neutral-900 tracking-tight">
                      艺创AI · 产品演示
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      选择要查看的产品演示
                    </p>
                  </div>
                  <nav className="p-4">
                    <ul className="space-y-2">
                      {demoProducts.map((product) => {
                        const IconComponent = product.icon
                        return (
                          <li key={product.id}>
                            <button
                              onClick={() => setActiveTab(product.id)}
                              className={`flex w-full items-center gap-3 rounded-lg p-3.5 text-left transition-all duration-200 ${
                                activeTab === product.id
                                  ? 'bg-white text-brand-500 shadow-sm ring-1 ring-brand-200'
                                  : 'text-neutral-600 hover:bg-white/60 hover:text-neutral-800'
                              }`}
                            >
                              <div className={`rounded-lg bg-gradient-to-r p-2 ${product.color}`}>
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium truncate">{product.name}</div>
                              </div>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </aside>

                {/* 右侧产品详情内容区域 */}
                <section className="flex-1 bg-white p-6 lg:p-8">
                  <AnimatePresence mode="wait">
                    {activeProduct && (
                      <motion.div
                        key={activeProduct.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        {/* 产品标题和描述 */}
                        <header className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className={`rounded-xl bg-gradient-to-r p-3 ${activeProduct.color} shadow-sm`}>
                              <activeProduct.icon className="h-7 w-7 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-neutral-900 tracking-tight sm:text-2xl">
                                {activeProduct.name}
                              </h2>
                              <div className="mt-1.5 h-0.5 w-12 rounded-full bg-brand-500"></div>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base leading-relaxed text-neutral-500">
                            {activeProduct.description}
                          </p>
                        </header>

                        {/* 演示站点卡片列表 - 现代化卡片设计 */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                          {activeProduct.demos.map((demo, index) => (
                            <motion.article
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-200"
                            >
                              {/* 演示站点标题栏 - 简约现代设计 */}
                              <header className="border-b border-neutral-100 bg-neutral-50 px-4 py-3">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">{demo.title}</h3>
                                  <div className="flex space-x-1">
                                    <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
                                    <div className="h-2 w-2 rounded-full bg-neutral-400"></div>
                                    <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                                  </div>
                                </div>
                              </header>

                              {/* 演示站点内容区域 - 优化间距和布局 */}
                              <div className="space-y-4 p-4">
                                {/* 二维码展示区 */}
                                <figure className="flex justify-center">
                                  <div className="relative rounded-lg border border-neutral-200 bg-white p-3">
                                    <Image
                                      src={demo.qrcode}
                                      alt={`${demo.title}二维码`}
                                      width={112}
                                      height={112}
                                      className="h-28 w-28 rounded-md object-cover"
                                      unoptimized
                                    />
                                    <div className="absolute -right-1 -bottom-1 rounded-full bg-brand-500 p-1.5 shadow-sm">
                                      <Smartphone className="h-3 w-3 text-white" />
                                    </div>
                                  </div>
                                </figure>

                                {/* 站点信息 */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-2.5">
                                    <span className="text-xs font-medium text-neutral-500">网址</span>
                                    <a href={demo.url} target="_blank" rel="noopener noreferrer" className="max-w-32 truncate text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors">
                                      {demo.url}
                                    </a>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="rounded-lg bg-neutral-50 p-2.5">
                                      <div className="mb-0.5 text-xs text-neutral-400">账号</div>
                                      <div className="text-xs font-medium text-neutral-900">{demo.credentials.username}</div>
                                    </div>
                                    <div className="rounded-lg bg-neutral-50 p-2.5">
                                      <div className="mb-0.5 text-xs text-neutral-400">密码</div>
                                      <div className="text-xs font-medium text-neutral-900">{demo.credentials.password}</div>
                                    </div>
                                  </div>
                                </div>

                                {/* 操作按钮 */}
                                <div className="grid grid-cols-2 gap-2">
                                  <a href={demo.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 py-2.5 text-xs font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200">
                                    <ExternalLink className="h-3 w-3" />
                                    查看演示
                                  </a>
                                  <button className="flex items-center justify-center gap-1.5 rounded-lg border border-neutral-200 bg-white py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200">
                                    立即购买
                                  </button>
                                </div>
                              </div>
                            </motion.article>
                          ))}
                        </div>

                        {/* 底部操作按钮区域 - 现代化按钮组设计 */}
                        <footer className="mt-8 flex flex-col justify-center gap-3 border-t border-neutral-200 pt-6 sm:flex-row">
                          <button
                            className="inline-flex items-center gap-2 rounded-[10px] bg-brand-500 hover:bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200"
                            onClick={() => handleShowQRCode('demo')}
                          >
                            申请专属演示
                          </button>
                          <button
                            className="inline-flex items-center gap-2 rounded-[10px] border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
                            onClick={() => handleShowQRCode('service')}
                          >
                            联系客服
                          </button>
                        </footer>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* 二维码弹窗组件 - 现代化模态框设计 */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={handleCloseQRModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
          >
            {/* 背景遮罩层 - 现代化毛玻璃效果 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* 模态框容器 - 现代化设计 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseQRModal}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="关闭弹窗"
              >
                <X className="h-4 w-4 text-neutral-500" />
              </button>

              <div className="space-y-6 p-8 text-center">
                <div className="space-y-2">
                  <h3 id="qr-modal-title" className="text-xl font-bold text-neutral-900 tracking-tight">
                    {modalType === 'demo' ? '申请专属演示' : '联系客服'}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {modalType === 'demo' ? '扫描二维码联系专属顾问' : '扫描二维码添加客服微信'}
                  </p>
                </div>

                <figure className="flex justify-center">
                  <div className="relative rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <Image
                      src="/images/contact/userhlc.png"
                      alt={modalType === 'demo' ? '专属演示二维码' : '客服二维码'}
                      width={192}
                      height={192}
                      className="h-48 w-48 rounded-lg object-contain"
                      unoptimized
                    />
                  </div>
                </figure>

                <p className="text-xs text-neutral-400">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Demonstrate
