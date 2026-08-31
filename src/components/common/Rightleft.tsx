'use client'

import { useState, type MouseEvent, type CSSProperties } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  MonitorPlay,
  ScanFace,
  BarChart3,
  FileText,
  Bot,
  Sparkles,
  ArrowRight,
  Check,
  type LucideIcon,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* 能力数据接口定义                                                    */
/* ------------------------------------------------------------------ */
interface CapabilityFeature {
  title: string
  description: string
}

interface ZhiyanProduct {
  /** 类型标签：AI / 数字 / 语音 / 智能 */
  tag: string
  name: string
  description: string
  /** 产品详情链接 */
  href: string
}

interface CapabilityItem {
  id: string
  /** Tab 显示名称 */
  name: string
  /** Tab 图标 */
  icon: LucideIcon
  /** 卡片标题 */
  title: string
  /** 卡片描述 */
  description: string
  /** 卡片特性列表（3 条） */
  features?: CapabilityFeature[]
  /** 可选：智言AI 分类下的子产品列表（存在时以产品网格展示） */
  products?: ZhiyanProduct[]
  /** 右侧媒体图片 */
  image: string
  imageAlt: string
  /** 查看详情链接 */
  detailHref: string
}

/* ------------------------------------------------------------------ */
/* 能力数据 — 本站艺创 AI 五大核心能力                                 */
/* ------------------------------------------------------------------ */
const capabilities: CapabilityItem[] = [
  {
    id: 'zhiyan-ai',
    name: '智言AI',
    icon: Sparkles,
    title: '智言AI',
    description: '覆盖主流 AI 应用，适合私有化产品交付',
    products: [
      {
        tag: 'AI',
        name: 'AI 生图',
        description: '文生图、图生图、风格模板和结果图库。',
        href: '/aiimage',
      },
      {
        tag: 'AI',
        name: 'AI 视频',
        description: '文生视频、图生视频、任务队列和回调通知。',
        href: '/videoclip',
      },
      {
        tag: '数字',
        name: '数字人',
        description: '形象、声音、口播视频和素材管理。',
        href: '/human',
      },
      {
        tag: 'AI',
        name: 'AI 写作',
        description: '文本创作、对话助手、提示词模板和多模型调用。',
        href: '/paper',
      },
      {
        tag: '语音',
        name: '语音克隆',
        description: '音色训练、TTS 合成、音频任务和历史管理。',
        href: '/ai',
      },
      {
        tag: '智能',
        name: '智能体/工作流',
        description: '面向复杂业务的多步骤自动化能力扩展。',
        href: '/agent',
      },
      {
        tag: 'AI',
        name: 'AI PPT',
        description: '主题生成、内容大纲、版式设计和演示素材辅助。',
        href: '/ppt',
      },
      {
        tag: 'AI',
        name: 'AI 客服',
        description: '知识库问答、业务咨询、自动接待和线索沉淀。',
        href: '/chat',
      },
    ],
    image: '/images/screenshots/gmlart.webp',
    imageAlt: '智言 AI 全栈应用能力总览',
    detailHref: '/ai',
  },
  {
    id: 'chat-draw',
    name: '聊天绘画',
    icon: MonitorPlay,
    title: '聊天绘画',
    description:
      '聚合对接 MJ 绘画、SD 绘画等多种绘画通道，实现 AI 对话与 AI 绘画的融合创作，集创作、运营与变现于一体的一站式内容平台',
    features: [
      { title: 'AI 智能对话', description: '多模态模型驱动，人机交互自然流畅' },
      { title: 'AI 绘画创作', description: '支持文生图、图生图等创意生成方式' },
      {
        title: '商业变现闭环',
        description: '会员套餐、充值积分、分销推广完整体系',
      },
    ],
    image: '/images/screenshots/Rightleft-1.webp',
    imageAlt: '聊天绘画创作平台界面',
    detailHref: '/aiimage',
  },
  {
    id: 'digital-human',
    name: '数字分身',
    icon: ScanFace,
    title: '数字分身',
    description:
      '专为企业主与个人博主打造的短视频 IP 数字人系统，支持真人声音与形象克隆，一键合成知识付费、带货、宣传等口播视频',
    features: [
      { title: '形象声音克隆', description: '真实还原个人形象与声音特征' },
      { title: '一键口播合成', description: '输入文案即可快速生成专业短视频' },
      { title: '多场景分发', description: '覆盖知识付费、带货、宣传等场景' },
    ],
    image: '/images/screenshots/Rightleft-2.webp',
    imageAlt: '数字分身短视频创作界面',
    detailHref: '/human',
  },
  {
    id: 'knowledge-base',
    name: '全能知识库',
    icon: BarChart3,
    title: '全能知识库',
    description:
      '支持问答式与文档式知识库，导入文档完成向量化训练后结合大模型智能回答，并可对外发布网页、代码与 API 接口，适用于企业智能客服与智能文档场景',
    features: [
      { title: '多格式导入', description: '支持 txt、doc、pdf、md 等常见文档' },
      {
        title: '向量化检索',
        description: '基于向量化训练提升回答专业性与实用性',
      },
      {
        title: '开放对接',
        description: '网页窗口、iframe、JS 与 API 多种接入方式',
      },
    ],
    image: '/images/screenshots/Rightleft-3.webp  ',
    imageAlt: '企业知识库智能问答界面',
    detailHref: '/agent',
  },
  {
    id: 'paper',
    name: '论文创作',
    icon: FileText,
    title: '论文创作',
    description:
      '基于预训练大模型的智能写作助手，几分钟即可生成万字长文，适用于期刊论文、科普文章、学生作业、商业报告与新闻报道等多种场景',
    features: [
      { title: '万字长文生成', description: '快速产出结构完整的长篇内容' },
      { title: '多类型模板', description: '覆盖论文、报告、新闻等写作场景' },
      { title: '高效省时', description: '显著降低写作门槛与时间成本' },
    ],
    image: '/images/screenshots/Rightleft-4.webp',
    imageAlt: 'AI 论文与长文创作界面',
    detailHref: '/paper',
  },
  {
    id: 'ai-chat',
    name: 'AI 智聊',
    icon: Bot,
    title: 'AI 智聊',
    description:
      '快速搭建 AI 智能聊天系统，覆盖公众号、小程序、PC 与 APP 多端，支持智能对话与多轮上下文理解，帮助企业快速落地 AI 客服与业务助手',
    features: [
      { title: '多端支持', description: '公众号、小程序、PC、APP 全覆盖' },
      { title: '智能对话', description: '多轮上下文理解，回答准确自然' },
      { title: '快速部署', description: '开箱即用，快速接入业务场景' },
    ],
    image: '/images/screenshots/Rightleft-5.webp',
    imageAlt: 'AI 智能聊天对话界面',
    detailHref: '/chat',
  },
]

/** 「立即体验」统一入口 */
const EXPERIENCE_HREF = 'https://www.gmlart.cn'

/**
 * 大模型融合云平台能力展示组件
 * 严格复刻参考设计「AI 应用」能力模块（腾讯云 tpm-portal-capability）：
 * 头部左对齐、Tab 蓝色下划线、毛玻璃左文右图卡片、直角渐变按钮
 */
export function Rightleft() {
  const [activeId, setActiveId] = useState<string>(capabilities[0].id)
  const active =
    capabilities.find((item) => item.id === activeId) ?? capabilities[0]

  /**
   * 按钮鼠标跟随光效：参考设计通过 --capability-btn-mx/my 定位径向渐变
   */
  const handleBtnMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty(
      '--capability-btn-mx',
      `${e.clientX - rect.left}px`,
    )
    e.currentTarget.style.setProperty(
      '--capability-btn-my',
      `${e.clientY - rect.top}px`,
    )
  }

  return (
    <section className="overflow-hidden bg-white py-[60px]">
      <Container>
        {/* 头部：左对齐，标签 + 标题 */}
        <div>
          <span className="text-xs leading-5 font-medium text-[#a7a7a7]">
            AI 应用
          </span>
          <h2 className="mt-2 text-[32px] leading-10 font-medium text-black lg:text-[36px] lg:leading-[44px]">
            大模型融合云平台，领航数字未来
          </h2>
        </div>

        {/* 能力 Tab 切换栏：靠左展示，激活项项目蓝色高亮 */}
        <div className="scrollbar-hide mt-[11px] flex w-full items-center justify-start gap-6 overflow-x-auto">
          {capabilities.map((item) => {
            const Icon = item.icon
            const isActive = item.id === active.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                aria-pressed={isActive}
                className={clsx(
                  'group relative flex shrink-0 items-center gap-2 px-4 py-[13px] text-sm leading-[22px] font-medium transition-colors duration-300',
                  isActive ? 'text-transparent' : 'text-[rgba(0,0,0,0.9)]',
                )}
              >
                <Icon
                  strokeWidth={1.5}
                  aria-hidden
                  className={clsx(
                    'h-5 w-5 transition-colors duration-300',
                    isActive
                      ? 'text-[#0052d9]'
                      : 'text-[#8A97B5] group-hover:text-[#0052d9]',
                  )}
                />
                <span
                  className={clsx(
                    'whitespace-nowrap transition-all duration-300',
                    isActive ? 'text-[#0052d9]' : 'group-hover:text-[#0052d9]',
                  )}
                >
                  {item.name}
                </span>
                {/* 激活项底部蓝色下划线 */}
                <span
                  aria-hidden
                  className={clsx(
                    'absolute bottom-0 left-0 h-[2px] bg-[#0052d9] transition-all duration-300',
                    isActive ? 'w-full' : 'w-0',
                  )}
                />
              </button>
            )
          })}
        </div>

        {/* 能力卡片：桌面左文右图，移动端上图下文 */}
        <div className="mt-4">
          <div className="flex flex-col-reverse overflow-hidden bg-white/85 backdrop-blur-[10px] lg:min-h-[462px] lg:flex-row lg:pt-8">
            {/* 左侧文字内容（桌面 48%） */}
            <div
              key={`label-${active.id}`}
              className="flex w-full animate-fade-in flex-col p-5 lg:w-[48%] lg:shrink-0 lg:pr-0 lg:pb-8"
            >
              <h3 className="text-lg leading-[26px] font-medium text-[#091221] lg:text-[28px] lg:leading-9">
                {active.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#4b5b76] lg:text-sm lg:leading-[22px]">
                {active.description}
              </p>

              {/* 分隔线：仅移动端显示 */}
              <div
                aria-hidden
                className="mt-4 mb-4 h-px bg-[#E4EAF6] lg:hidden"
              />

              {/* 智言AI 分类：产品网格；其余分类：特性列表 */}
              {active.products ? (
                <div className="mt-0 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-6 lg:gap-4">
                  {active.products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="group flex items-start gap-2.5 rounded-sm border border-[#E4EAF6] bg-[#F8FAFC] p-3 transition-colors duration-300 hover:border-[#0052d9]/40 hover:bg-white"
                    >
                      <span className="mt-0.5 shrink-0 rounded bg-[#EAF1FF] px-1.5 py-0.5 text-[10px] leading-4 font-medium text-[#0052d9]">
                        {product.tag}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm leading-[22px] font-medium text-[#333] transition-colors duration-300 group-hover:text-[#0052d9]">
                          {product.name}
                        </span>
                        <span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-[#4b5b76]">
                          {product.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="mt-0 flex flex-col gap-3 lg:mt-8 lg:gap-4">
                  {active.features?.map((feature) => (
                    <div key={feature.title} className="flex items-start">
                      <Check
                        strokeWidth={2}
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0074e8]"
                      />
                      <div className="ml-2.5 lg:ml-3">
                        <h4 className="text-sm leading-[22px] font-medium text-[#333]">
                          {feature.title}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#4b5b76] lg:text-sm lg:leading-[22px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 操作区：立即体验 + 查看详情 */}
              <div className="mt-6 flex items-center gap-3 lg:gap-5">
                <Link
                  href={EXPERIENCE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={handleBtnMove}
                  style={
                    {
                      '--capability-btn-mx': '50%',
                      '--capability-btn-my': '50%',
                    } as CSSProperties
                  }
                  className="group relative inline-flex h-9 w-1/2 min-w-0 items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r from-[#0059eb] to-[#2677ff] text-sm leading-[22px] font-normal text-white lg:w-auto lg:min-w-[160px]"
                >
                  {/* 鼠标跟随光效 */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(200px circle at var(--capability-btn-mx) var(--capability-btn-my), rgba(255,255,255,0.28), rgba(255,255,255,0) 65%)',
                    }}
                  />
                  <span className="relative z-[2]">立即体验</span>
                </Link>
                <Link
                  href={active.detailHref}
                  className="group inline-flex h-9 w-1/2 items-center justify-center gap-1 rounded-sm text-sm leading-[22px] font-normal whitespace-nowrap text-[rgba(0,0,0,0.9)] transition-colors duration-300 hover:text-[#0052d9] lg:w-auto lg:justify-start lg:gap-1.5"
                >
                  查看详情
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* 右侧媒体区域（移动端在上，高 240px） */}
            <div
              key={`media-${active.id}`}
              className="relative h-[240px] w-full shrink-0 animate-fade-in overflow-hidden bg-[#EAF1FF] lg:ml-8 lg:h-auto lg:flex-1"
            >
              {/* 图片缩小居中显示，四周留出浅蓝背景 */}
              <div className="absolute inset-3 sm:inset-4 lg:inset-6">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
