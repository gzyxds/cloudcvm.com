'use client'
import React, { useState, useMemo } from 'react'
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
  Search,
  ChevronRight,
  Copy,
  CheckCircle2,
  AlertCircle,
  Clock,
  Tag,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Cpu,
  Bot,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * 产品演示数据
 * 包含各产品的基本信息、描述和演示站点信息
 */
const demoProducts = [
  {
    id: 'digital-human',
    name: '数字人SaaS系统',
    description:
      '通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。',
    icon: Monitor,
    category: 'AI应用',
    status: 'stable' as const,
    version: 'v3.2.1',
    demos: [
      {
        title: 'PC演示前台',
        type: 'frontend' as const,
        url: 'https://v.cnai.art/',
        qrcode: '/images/contact/userhlc.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: '站点管理端',
        type: 'admin' as const,
        url: 'https://demo.cnai.art/admin/',
        qrcode: '/images/contact/QQ.png',
        credentials: { username: 'demo', password: 'demo' },
      },
      {
        title: 'WAP演示',
        type: 'mobile' as const,
        url: 'https://v.cnai.art/mobile',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
    ],
  },
  {
    id: 'knowledge-base',
    name: '全能知识库PHP',
    description:
      '基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心。',
    icon: Globe,
    category: '知识管理',
    status: 'stable' as const,
    version: 'v2.8.0',
    demos: [
      {
        title: '演示前台',
        type: 'frontend' as const,
        url: 'https://www.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: '后台演示',
        type: 'admin' as const,
        url: 'https://ai-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'admin', password: '123456' },
      },
    ],
  },
  {
    id: 'ai-chat-drawing',
    name: '聊天绘画系统',
    description:
      '集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型。',
    icon: Palette,
    category: 'AI创作',
    status: 'stable' as const,
    version: 'v4.1.3',
    demos: [
      {
        title: '创作平台',
        type: 'frontend' as const,
        url: 'https://cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: '管理后台',
        type: 'admin' as const,
        url: 'https://chat-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'admin', password: '123456' },
      },
    ],
  },
  {
    id: 'long-writing',
    name: '论文创作系统',
    description:
      '专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。',
    icon: FileText,
    category: 'AI写作',
    status: 'stable' as const,
    version: 'v1.9.5',
    demos: [
      {
        title: '写作平台',
        type: 'frontend' as const,
        url: 'https://cp.chatmoney.cn/generate/1',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: '体验后台',
        type: 'admin' as const,
        url: 'https://cp-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'admin', password: '123456' },
      },
    ],
  },
  {
    id: 'digital-human-java',
    name: 'AI数字分身2.0',
    description:
      '2.0版数字人SaaS系统，融合了最新的AI技术和数字人交互体验。通过我们的在线演示系统，您可以亲身体验升级版AI数字人的强大功能。',
    icon: Monitor,
    category: 'AI应用',
    status: 'new' as const,
    version: 'v2.0.0',
    demos: [
      {
        title: '2.0管理后台',
        type: 'admin' as const,
        url: 'https://java-demo.cnai.art/admin/',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'ava_demo', password: 'ava123' },
      },
      {
        title: '移动端',
        type: 'mobile' as const,
        url: 'https://java.cnai.art/mobile',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
    ],
  },
  {
    id: 'knowledge-base-java',
    name: '全能知识库Java',
    description:
      'Java版全能AI知识库系统，基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，集成AVA智能助手功能。',
    icon: Globe,
    category: '知识管理',
    status: 'new' as const,
    version: 'v1.2.0',
    demos: [
      {
        title: 'Java版知识库前台',
        type: 'frontend' as const,
        url: 'https://java-kb.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: 'Java版知识库后台',
        type: 'admin' as const,
        url: 'https://java-kb-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'java_kb_admin', password: 'java_kb123' },
      },
    ],
  },
  {
    id: 'ai-chat-drawing-java',
    name: '聊天绘画Java',
    description:
      'Java版智能聊天绘画系统，集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AVA进行对话，并生成高质量的艺术作品，提供更智能的创作体验。',
    icon: Palette,
    category: 'AI创作',
    status: 'beta' as const,
    version: 'v0.9.2',
    demos: [
      {
        title: 'Java创作平台',
        type: 'frontend' as const,
        url: 'https://java-art.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: 'Java绘画管理后台',
        type: 'admin' as const,
        url: 'https://java-art-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'java_art_admin', password: 'java_art123' },
      },
    ],
  },
  {
    id: 'long-writing-java',
    name: '论文创作Java',
    description:
      'Java版论文创作系统，专为学术研究者和学生设计的AI写作助手。集成AVA智能助手，提供更专业的写作指导，显著提高论文写作效率和质量。',
    icon: FileText,
    category: 'AI写作',
    status: 'beta' as const,
    version: 'v0.8.1',
    demos: [
      {
        title: 'Java写作平台',
        type: 'frontend' as const,
        url: 'https://java-writing.chatmoney.cn/generate/1',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: 'Java写作后台',
        type: 'admin' as const,
        url: 'https://java-writing-demo.chatmoney.cn/admin',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: 'java_writing_admin', password: 'java_writing123' },
      },
    ],
  },
  {
    id: 'zhiyan-aigc',
    name: '智言AIGC',
    description:
      '一站式AIGC内容生成平台，集成AI写作、绘画、视频等多模态创作能力，帮助企业快速生成高质量营销内容和创意素材，提升内容创作效率。',
    icon: Bot,
    category: 'AI应用',
    status: 'beta' as const,
    version: 'v2.0.0',
    demos: [
      {
        title: 'PC前台',
        type: 'frontend' as const,
        url: 'https://aigc.cnai.art',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
    ],
  },
  {
    id: 'zhiyan-platform',
    name: '智言AI平台框架',
    description:
      '企业级AI平台框架，提供完整的AI应用构建底座。支持多模型接入、知识库管理、插件扩展等功能，帮助企业快速搭建自有AI平台。',
    icon: Sparkles,
    category: 'AI平台',
    status: 'stable' as const,
    version: 'v1.0.0',
    demos: [
      {
        title: '平台官网',
        type: 'frontend' as const,
        url: 'https://www.buidai.com/',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
      {
        title: '前台演示',
        type: 'frontend' as const,
        url: 'https://www.gmlart.cn/',
        qrcode: '/images/contact/weixin.png',
        credentials: { username: '自行注册', password: '自行注册' },
      },
    ],
  },
]

/** 版本类型标签样式映射 */
const statusConfig = {
  stable: { label: '稳定版', icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  new:    { label: '最新',   icon: AlertCircle,  className: 'bg-blue-50 text-blue-700 border-blue-200' },
  beta:   { label: 'Beta',   icon: Clock,        className: 'bg-amber-50 text-amber-700 border-amber-200' },
}

/** 演示类型标签配置 */
const demoTypeConfig = {
  frontend: { label: '前台',   className: 'bg-slate-100 text-slate-600' },
  admin:    { label: '管理端', className: 'bg-violet-50 text-violet-600' },
  mobile:   { label: '移动端', className: 'bg-sky-50 text-sky-600' },
}

/** 产品分类列表（去重） */
const allCategories = ['全部', ...Array.from(new Set(demoProducts.map((p) => p.category)))]

/**
 * 复制文本并短暂显示已复制状态的 Hook
 */
function useCopyText() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 1500)
  }
  return { copiedKey, copy }
}

/**
 * 凭证行组件 — 带一键复制
 */
function CredentialRow({
  label,
  value,
  copyKey,
  copiedKey,
  onCopy,
}: {
  label: string
  value: string
  copyKey: string
  copiedKey: string | null
  onCopy: (v: string, k: string) => void
}) {
  const copied = copiedKey === copyKey
  return (
    <div className="flex items-center justify-between gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2">
      <span className="w-10 flex-none text-xs text-slate-400">{label}</span>
      <span className="min-w-0 flex-1 truncate font-mono text-xs text-slate-700">{value}</span>
      <button
        onClick={() => onCopy(value, copyKey)}
        className="flex-none text-slate-400 transition-colors hover:text-brand-500"
        title="复制"
      >
        {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}

/**
 * 单个演示站点卡片
 */
function DemoCard({
  demo,
  index,
  copiedKey,
  onCopy,
}: {
  demo: (typeof demoProducts)[0]['demos'][0]
  index: number
  copiedKey: string | null
  onCopy: (v: string, k: string) => void
}) {
  const typeConf = demoTypeConfig[demo.type]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="flex flex-col rounded-md border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md"
    >
      {/* 卡片头部 */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={`rounded px-1.5 py-0.5 text-[11px] font-medium ${typeConf.className}`}>
            {typeConf.label}
          </span>
          <h3 className="text-sm font-semibold text-slate-800">{demo.title}</h3>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-brand-500" />
        </div>
      </div>

      {/* 卡片内容 */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* 二维码 */}
        <div className="flex justify-center">
          <div className="relative rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm">
            <Image
              src={demo.qrcode}
              alt={`${demo.title}二维码`}
              width={96}
              height={96}
              className="h-24 w-24 rounded object-cover"
              unoptimized
            />
            <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 shadow">
              <Smartphone className="h-2.5 w-2.5 text-white" />
            </span>
          </div>
        </div>

        {/* 访问地址 */}
        <div className="rounded border border-slate-200 bg-slate-50 px-3 py-2">
          <div className="mb-1 text-[11px] text-slate-400">访问地址</div>
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 truncate font-mono text-xs text-brand-600 hover:text-brand-700 hover:underline"
          >
            <span className="truncate">{demo.url}</span>
            <ArrowUpRight className="h-3 w-3 flex-none" />
          </a>
        </div>

        {/* 凭证信息 */}
        <div className="space-y-1.5">
          <CredentialRow
            label="账号"
            value={demo.credentials.username}
            copyKey={`${demo.url}-user`}
            copiedKey={copiedKey}
            onCopy={onCopy}
          />
          <CredentialRow
            label="密码"
            value={demo.credentials.password}
            copyKey={`${demo.url}-pass`}
            copiedKey={copiedKey}
            onCopy={onCopy}
          />
        </div>

        {/* 操作按钮 */}
        <div className="mt-auto flex gap-2">
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded bg-brand-500 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
          >
            <ExternalLink className="h-3 w-3" />
            进入演示
          </a>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50">
            立即购买
          </button>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 左侧导航产品条目
 */
function NavItem({
  product,
  active,
  onClick,
}: {
  product: (typeof demoProducts)[0]
  active: boolean
  onClick: () => void
}) {
  const Icon = product.icon
  const st = statusConfig[product.status]
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded px-3 py-2.5 text-left transition-all duration-150 ${
        active
          ? 'bg-brand-50 text-brand-600'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon className={`h-4 w-4 flex-none transition-colors ${active ? 'text-brand-500' : 'text-slate-400 group-hover:text-slate-600'}`} />
      <span className="min-w-0 flex-1 truncate text-sm font-medium">{product.name}</span>
      {active && <ChevronRight className="h-3.5 w-3.5 flex-none text-brand-400" />}
      {!active && (
        <span className={`hidden rounded border px-1 py-0.5 text-[10px] font-medium leading-none group-hover:inline-block ${st.className}`}>
          {st.label}
        </span>
      )}
    </button>
  )
}

/**
 * 产品演示主组件
 * 采用企业级云控制台三栏布局：左侧分类导航 + 产品列表，右侧主内容区
 */
const Demonstrate: React.FC = () => {
  const [activeId, setActiveId]       = useState(demoProducts[0].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [showQRModal, setShowQRModal] = useState(false)
  const [modalType, setModalType]     = useState<'demo' | 'service'>('demo')
  const { copiedKey, copy }           = useCopyText()

  /** 过滤后的产品列表 */
  const filteredProducts = useMemo(() => {
    return demoProducts.filter((p) => {
      const matchCategory = activeCategory === '全部' || p.category === activeCategory
      const matchSearch   = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  const activeProduct = demoProducts.find((p) => p.id === activeId) ?? demoProducts[0]

  /** 打开二维码弹窗 */
  const openModal = (type: 'demo' | 'service') => {
    setModalType(type)
    setShowQRModal(true)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── 页面顶部 Hero ─────────────────────────────── */}
      <header className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex flex-col gap-1 py-10 md:flex-row md:items-end md:justify-between">
            <div>
              {/* 面包屑 */}
              <nav className="mb-3 flex items-center gap-1.5 text-xs text-slate-400">
                <span>控制台</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-slate-600">系统演示</span>
              </nav>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                产品演示中心
              </h1>
              <p className="mt-1.5 text-sm text-slate-500">
                在线体验各类AI SaaS产品，无需安装，即刻试用
              </p>
            </div>
            {/* 顶部徽标行 */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 rounded border border-slate-200 bg-white px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                安全隔离环境
              </span>
              <span className="flex items-center gap-1.5 rounded border border-slate-200 bg-white px-3 py-1.5">
                <Layers className="h-3.5 w-3.5 text-brand-500" />
                {demoProducts.length} 套系统
              </span>
              <span className="flex items-center gap-1.5 rounded border border-slate-200 bg-white px-3 py-1.5">
                <Cpu className="h-3.5 w-3.5 text-violet-500" />
                AI 驱动
              </span>
            </div>
          </div>
        </Container>
      </header>

      {/* ── 移动端产品切换（lg 以下显示） ────────────────── */}
      <div className="border-b border-slate-100 bg-white lg:hidden">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <span className="flex-none text-xs text-slate-400">产品:</span>
            {demoProducts.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`flex-none rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeId === p.id
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-600 active:bg-slate-200'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 主体双栏布局 ───────────────────────────────── */}
      <Container>
        <div className="py-6">
          <div className="flex gap-5 lg:items-stretch">

            {/* ── 左侧导航栏 ──────────────────────────────── */}
            <aside className="hidden w-60 flex-none lg:block xl:w-64">
              <div className="flex h-full flex-col rounded-md border border-slate-200 bg-white shadow-sm">
                {/* 搜索框 */}
                <div className="flex-none border-b border-slate-100 p-3">
                  <label className="relative flex items-center">
                    <span className="absolute left-3 flex items-center">
                      <Search className="h-3.5 w-3.5 text-slate-400" />
                    </span>
                    <input
                      type="text"
                      placeholder="搜索产品..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded border border-slate-200 bg-slate-50 py-2 pl-8 pr-3 text-xs text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-brand-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,85,255,0.08)]"
                    />
                  </label>
                </div>

                {/* 分类筛选 */}
                <div className="flex-none border-b border-slate-100 p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <Tag className="h-3 w-3" />
                    分类筛选
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                          activeCategory === cat
                            ? 'bg-brand-500 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 产品列表 — 撑满剩余高度，内容溢出可滚 */}
                <nav className="flex-1 overflow-y-auto p-2">
                  {filteredProducts.length === 0 ? (
                    <p className="py-6 text-center text-xs text-slate-400">无匹配产品</p>
                  ) : (
                    <ul className="space-y-0.5">
                      {filteredProducts.map((product) => (
                        <li key={product.id}>
                          <NavItem
                            product={product}
                            active={activeId === product.id}
                            onClick={() => setActiveId(product.id)}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
              </div>
            </aside>

            {/* ── 主内容区 ───────────────────────────────── */}
            <main className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* 产品信息头部卡片 */}
                  <div className="mb-5 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* 图标 */}
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                          <activeProduct.icon className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-base font-bold text-slate-900">{activeProduct.name}</h2>
                            {/* 状态徽标 */}
                            {(() => {
                              const st = statusConfig[activeProduct.status]
                              const Icon = st.icon
                              return (
                                <span className={`flex items-center gap-1 rounded border px-1.5 py-0.5 text-[11px] font-medium ${st.className}`}>
                                  <Icon className="h-3 w-3" />
                                  {st.label}
                                </span>
                              )
                            })()}
                            <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">
                              {activeProduct.version}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-slate-400">{activeProduct.category}</p>
                        </div>
                      </div>

                      {/* 操作按钮组 */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openModal('demo')}
                          className="rounded border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                        >
                          申请专属演示
                        </button>
                        <button
                          onClick={() => openModal('service')}
                          className="rounded bg-brand-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
                        >
                          联系技术顾问
                        </button>
                      </div>
                    </div>

                    {/* 描述 */}
                    <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-500">
                      {activeProduct.description}
                    </p>

                    {/* 演示环境说明条 */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        演示数据实时重置
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-brand-400" />
                        隔离沙箱环境
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-amber-400" />
                        7×24 小时可用
                      </span>
                    </div>
                  </div>

                  {/* 演示站点卡片列表 */}
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-700">
                      演示站点
                      <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-normal text-slate-500">
                        {activeProduct.demos.length} 个
                      </span>
                    </h3>
                    <span className="text-xs text-slate-400">扫码或点击进入演示</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {activeProduct.demos.map((demo, idx) => (
                      <DemoCard
                        key={idx}
                        demo={demo}
                        index={idx}
                        copiedKey={copiedKey}
                        onCopy={copy}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </Container>

      {/* ── 二维码弹窗 ──────────────────────────────────── */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setShowQRModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-80 rounded-md border border-slate-200 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 弹窗头部 */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {modalType === 'demo' ? '申请专属演示' : '联系技术顾问'}
                </h3>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {/* 弹窗内容 */}
              <div className="flex flex-col items-center gap-4 px-5 py-6">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <Image
                    src="/images/contact/weixin.png"
                    alt="联系二维码"
                    width={140}
                    height={140}
                    className="h-36 w-36 rounded object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-center text-sm text-slate-500">
                  {modalType === 'demo'
                    ? '扫描二维码，联系我们申请专属演示环境'
                    : '扫描二维码，获取一对一技术顾问支持'}
                </p>
                <button
                  onClick={() => setShowQRModal(false)}
                  className="w-full rounded bg-brand-500 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Demonstrate
