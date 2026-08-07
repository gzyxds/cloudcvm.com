'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  BellIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  FilmIcon,
  GlobeAltIcon,
  LightBulbIcon,
  LockClosedIcon,
  PaintBrushIcon,
  PlayIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  SwatchIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/**
 * 图标组件类型定义
 */
type IconComponent = React.ComponentType<{ className?: string }>

/**
 * 通用数据接口定义
 */
interface SectionLink {
  id: string
  label: string
}

interface CommonCardItem {
  icon: IconComponent
  title: string
  description: string
  eyebrow?: string
  tags?: string[]
}

/**
 * 页面导航链接数据
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'overview', label: '核心能力' },
  { id: 'scenarios', label: '创作功能' },
  { id: 'pricing', label: '计费套餐' },
  { id: 'models', label: '模型渠道' },
  { id: 'architecture', label: '技术架构' },
  { id: 'advantages', label: '角色入口' },
  { id: 'products', label: '开放 API' },
  { id: 'workflow', label: '使用流程' },
  { id: 'cta', label: '立即体验' },
]

/**
 * 平台特性卡片数据 - 智言 AI 作图 六大核心能力（FEATURE 01/06 - 06/06）
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: PaintBrushIcon,
    eyebrow: 'FEATURE 01/06',
    title: 'AI 创作',
    description:
      '创作中心选择图片或视频模型，支持尺寸、张数、时长等参数，可上传示例图（最多 4 张）并一键润色提示词；对话创作以 SSE 流式先沟通风格方案，确认设计卡后再扣费出图 / 出视频。',
  },
  {
    icon: CpuChipIcon,
    eyebrow: 'FEATURE 02/06',
    title: '模型与渠道',
    description:
      '后台配置供应商凭证，渠道下挂图片 / 视频 / 文字模型，各类型独立积分单价；支持 OpenAI 兼容与同系统对接，一键同步上游模型、单价与套餐，定时监控价格保持差价。',
  },
  {
    icon: CircleStackIcon,
    eyebrow: 'FEATURE 03/06',
    title: '积分、套餐与支付',
    description:
      '积分余额 / 单价 / 扣费支持最多四位小数；套餐可编排积分包、折扣、固定单价、免费额度、尺寸系数与模型白名单；支持易支付 V1/V2（支付宝 / 微信 / QQ）在线开通与充值。',
  },
  {
    icon: Squares2X2Icon,
    eyebrow: 'FEATURE 04/06',
    title: '作品与素材',
    description:
      '任务记录参数与计费折叠查看，图 / 视频在线预览；管理端汇总生成内容、储存位置、大小与清理倒计时，支持批量删除并同步清理储存与广场投稿；「同款创作」降低二次创作成本。',
  },
  {
    icon: CodeBracketIcon,
    eyebrow: 'FEATURE 05/06',
    title: '开放接口（OpenAPI）',
    description:
      '个人中心创建开放密钥（仅创建时完整展示一次），兼容 OpenAI 风格 models、packages、chat/completions（含 SSE）与 images/generations，扣费走账号积分，便于第三方系统对接。',
  },
  {
    icon: ServerStackIcon,
    eyebrow: 'FEATURE 06/06',
    title: '平台底座',
    description:
      '登录注册支持验证码、短信 / 邮箱、聚合登录与实名认证；网站设置覆盖品牌、公告、储存（本机 / FTP / SFTP / S3）与作图计费；运维中心提供云端授权、在线升级与更新日志。',
  },
]

/**
 * 创作能力卡片数据
 */
const SCENARIO_ITEMS: CommonCardItem[] = [
  {
    icon: PaintBrushIcon,
    title: '创作中心',
    description: '选择图片或视频模型，设置尺寸、张数、时长等参数，可上传最多 4 张示例图，支持提示词一键润色。',
    tags: ['文生图', '图生图', '批量生成'],
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '对话创作',
    description: '先与文字模型以 SSE 流式沟通风格方案，确认设计卡后再扣费出图 / 出视频，创作方向更可控。',
    tags: ['SSE 流式', '设计卡', '风格方案'],
  },
  {
    icon: BoltIcon,
    title: '进度同步',
    description: '本站 WebSocket 实时推送生成进度，进程重启后可恢复未完成任务，长任务无需守着等待。',
    tags: ['WebSocket', '实时推送', '任务恢复'],
  },
  {
    icon: CircleStackIcon,
    title: '结果落盘',
    description: '生成成功后写入默认储存桶并以公开地址展示；可配置保存天数、到期自动清理，已投稿广场的作品永久保留。',
    tags: ['公开地址', '自动清理', '永久保留'],
  },
  {
    icon: BellIcon,
    title: '消息提醒',
    description: '出图成功 / 失败可通过八爪鱼渠道推送给用户，关键结果不错过。',
    tags: ['八爪鱼', '成功 / 失败通知'],
  },
  {
    icon: LightBulbIcon,
    title: '广场与收藏',
    description: '任务记录参数与计费折叠查看；收藏 / 投稿广场后可通过「同款创作」预填创作页，降低二次创作成本。',
    tags: ['任务记录', '同款创作', '收藏投稿'],
  },
]

/**
 * 计费套餐数据
 */
const PRICING_ITEMS = [
  {
    name: '在线创作计费',
    icon: BoltIcon,
    price: '按量扣积分',
    description: '图片按基价 × 张数 × 尺寸系数计费；视频 / 文字按单价 × 次数（视频可按时长），积分余额 / 单价 / 扣费支持最多四位小数。',
    features: ['图片：基价 × 张数 × 尺寸系数', '视频 / 文字：单价 × 次数', '各类型独立积分单价', '无需最低消费'],
  },
  {
    name: '套餐订阅',
    icon: ShieldCheckIcon,
    price: '积分包 / 折扣',
    description: '套餐可编排积分包、折扣、固定单价、免费额度、尺寸系数与模型白名单；用户在线开通套餐，一人同时仅一个套餐生效。',
    features: ['积分包与折扣', '固定单价与免费额度', '尺寸系数与模型白名单', '在线开通'],
  },
  {
    name: '在线充值',
    icon: CircleStackIcon,
    price: '支付宝 / 微信 / QQ',
    description: '支持档位或自定义数量在线充积分；易支付 V1/V2（支付宝 / 微信 / QQ），管理员可查单、手工补单。',
    features: ['档位或自定义数量充值', '易支付 V1/V2', '管理员查单', '手工补单'],
  },
]

/**
 * 模型与渠道数据
 */
const MODEL_ITEMS = [
  {
    category: '图片模型',
    apps: ['文生图', '图生图', '示例图参考', '尺寸 / 张数参数'],
  },
  {
    category: '视频模型',
    apps: ['文生视频', '图生视频', '时长参数', '异步轮询'],
  },
  {
    category: '文字模型',
    apps: ['风格沟通', 'SSE 流式', '设计卡确认', '对话创作'],
  },
  {
    category: 'OpenAI 兼容',
    apps: ['HTTP 出图', 'images/generations', 'chat/completions', '同步 / 异步轮询'],
  },
  {
    category: '同系统对接',
    apps: ['对端站点', '开放密钥', '账号积分扣费', '渠道互通'],
  },
  {
    category: '渠道管理',
    apps: ['多模型下挂', '独立积分单价', '一键同步上游', '定时监控价格'],
  },
]

/**
 * 角色与入口卡片数据
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: GlobeAltIcon,
    title: '管理员端',
    description:
      '运营仪表盘 · 用户与套餐 · 模型渠道 · 支付与储存 · 素材与订单 · 网站设置 · 云端授权与升级，运营全流程统一管理。',
  },
  {
    icon: PaintBrushIcon,
    title: '普通用户端',
    description:
      '个人工作台 · 创作中心 · 对话创作 · 任务记录 · 素材广场 · 积分套餐与充值 · 个人中心，专注创作全流程。',
  },
  {
    icon: CommandLineIcon,
    title: '清晰入口规则',
    description:
      '落地页免登录展示站点品牌与公告；普通用户登录后进入创作首页 / 个人工作台；侧栏按「工作台 / 创作 / 作品与素材 / 账户与套餐」分组。',
  },
  {
    icon: ServerStackIcon,
    title: '完整平台底座',
    description:
      '登录注册支持验证码、短信 / 邮箱、聚合登录与实名认证；网站设置覆盖品牌、公告（富文本 HTML）、储存（本机 / FTP / SFTP / S3）与作图计费；用户管理提供档案详情与创作 / 积分 / 订单等关联 Tab；运维中心提供云端授权、在线升级与更新日志时间线。',
  },
]

/**
 * 开放接口 OpenAPI 卡片数据
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: LockClosedIcon,
    title: '开放密钥',
    description: '个人中心可创建开放密钥，仅在创建时完整展示一次，保障密钥安全。',
    tags: ['密钥管理', '个人中心'],
  },
  {
    icon: CpuChipIcon,
    title: 'models 接口',
    description: '兼容 OpenAI 风格 /models 接口，查询可用模型列表。',
    tags: ['OpenAI 风格', '模型列表'],
  },
  {
    icon: SwatchIcon,
    title: 'packages 接口',
    description: '兼容 OpenAI 风格 /packages 接口，查询平台积分套餐信息。',
    tags: ['积分套餐', '查询'],
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'chat/completions',
    description: '兼容 OpenAI 风格对话接口，支持 SSE 流式返回。',
    tags: ['SSE', '流式'],
  },
  {
    icon: PaintBrushIcon,
    title: 'images/generations',
    description: '兼容 OpenAI 风格出图接口，支持同步或异步轮询。',
    tags: ['同步', '异步轮询'],
  },
  {
    icon: CircleStackIcon,
    title: '账号积分扣费',
    description: 'API 调用扣费走账号积分，便于第三方系统或同系统渠道对接。',
    tags: ['账号积分', '渠道对接'],
  },
]

/**
 * 典型使用流程数据
 */
const WORKFLOW_ITEMS: CommonCardItem[] = [
  {
    icon: UserIcon,
    title: '注册 / 登录',
    description: '落地页免登录即可了解平台；注册支持验证码、短信 / 邮箱、聚合登录与实名认证，登录后进入创作首页 / 个人工作台。',
  },
  {
    icon: CircleStackIcon,
    title: '开通套餐或充值积分',
    description: '在线开通套餐或按档位 / 自定义数量充值；图片按基价 × 张数 × 尺寸系数，视频 / 文字按单价 × 次数（视频可按时长）。',
  },
  {
    icon: PaintBrushIcon,
    title: '创作中心 / 对话创作',
    description: '在创作中心选择图片或视频模型生成；也可先与文字模型沟通风格方案，确认设计卡后再扣费出图 / 出视频。',
  },
  {
    icon: BoltIcon,
    title: '结果入库 · 进度推送',
    description: '结果写入默认储存桶并以公开地址展示；WebSocket 实时推送进度，出图成功 / 失败可通过八爪鱼渠道提醒。',
  },
  {
    icon: Squares2X2Icon,
    title: '任务记录 · 广场再创作',
    description: '任务记录查看参数与计费；收藏 / 投稿广场后可通过「同款创作」预填创作页，降低二次创作成本。',
  },
  {
    icon: CodeBracketIcon,
    title: '开放密钥接入自有系统',
    description: '（可选）个人中心创建开放密钥，兼容 OpenAI 风格接口，扣费走账号积分，对接第三方或同系统渠道。',
  },
]

/**
 * 自定义 Hook：监听滚动以更新当前激活的导航项
 */
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

/**
 * 动画卡片组件
 */
function GlassCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-md border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

/**
 * 通用分区标题组件
 */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <span className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0055ff]">
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl ${
          align === 'center' ? 'mx-auto max-w-2xl' : ''
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-relaxed text-slate-500 sm:text-lg ${
          align === 'center' ? 'mx-auto max-w-3xl' : ''
        }`}
      >
        {description}
      </p>
    </motion.div>
  )
}

/**
 * 页面锚点导航组件
 */
function SectionNav() {
  const activeSection = useActiveSection(SECTION_LINKS.map((item) => item.id))

  return (
    <nav className="sticky top-14 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="-mb-px flex justify-start sm:justify-center overflow-x-auto scrollbar-hide">
          {SECTION_LINKS.map((item) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 border-b-2 px-4 py-3.5 text-sm font-medium transition-colors sm:px-6 sm:py-4 ${
                  isActive
                    ? 'border-[#0055ff] text-[#0055ff]'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

/**
 * 页面英雄区域组件
 */
function HeroSection() {
  const heroBadges = [
    { icon: FilmIcon, label: '图像 / 视频 / 音乐生成' },
    { icon: UserIcon, label: '智能体 & Skills' },
    { icon: CircleStackIcon, label: '积分商业化' },
    { icon: CodeBracketIcon, label: '开放 API 扩展' },
  ]

  const channelPills = [
    { name: '图片', color: '#2563eb' },
    { name: '视频', color: '#8b5cf6' },
    { name: '音乐', color: '#ea580c' },
    { name: '对话', color: '#0891b2' },
  ]

  const monitorRows = [
    { task: 'AI 作图', id: '任务 #IMG20260806001', status: '已完成', detail: '已去水印' },
    { task: 'AI 作视频', id: '任务 #VID20260806002', status: '生成中', detail: '进度 76%' },
    { task: 'AI 作音乐', id: '任务 #MUS20260806003', status: '已完成', detail: '生成成功' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#eff6ff] to-slate-50">
      {/* 背景光晕装饰 */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0055ff]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-[-30%] h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <Container className="relative z-10 w-full pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
        >
          {/* 左列：文案区 */}
          <div>
            <span className="inline-flex max-w-full items-start gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold leading-snug text-[#0055ff] shadow-sm sm:text-[13px]">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0055ff] shadow-[0_0_0_4px_rgba(0,85,255,0.16)]" />
              AI 图像 · 视频 · 音乐 · 对话 一站式创作与商业运营平台
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-[1.24]">
              智言AI作图系统
              <br />
              <span className="bg-gradient-to-r from-[#0055ff] to-sky-400 bg-clip-text text-transparent">
                可私有化部署 · 多模态创作 · 商业变现
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-slate-500 sm:text-lg">
              智言 AI 作图是集 AI 图像 / 视频 / 音乐 / 对话创作于一体的多模态创作平台。
              支持智能体与 Skills、可视化工作流、积分商业化、分站加盟、QQ 机器人触达与开放 API，
              帮助创作者、站长与企业轻松创作并规模化变现。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="/contact" color="blue" variant="erlieSolid" className="w-full rounded-lg sm:w-auto">
                立即开始创作
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/demo" variant="erlieOutline" color="slate" className="w-full rounded-lg sm:w-auto">
                <PlayIcon className="mr-2 h-4 w-4" />
                购买源码
              </Button>
              <a
                href="#overview"
                className="inline-flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 transition-all hover:gap-3 hover:text-[#0055ff] sm:w-auto sm:justify-start"
              >
                了解更多
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-500"
                >
                  <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[#eff6ff] text-[#0055ff]">
                    <badge.icon className="h-3.5 w-3.5" />
                  </span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* 右列：创作任务中心（界面演示） */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl bg-gradient-to-br from-[#0055ff]/40 via-transparent to-sky-400/40 p-px shadow-xl shadow-slate-200/70"
            >
              <div className="rounded-[15px] bg-white p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-900">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                    AI 创作任务中心
                  </span>
                  <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[11.5px] font-semibold text-green-600">
                    生成队列运行中
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-[#f6f9ff] to-[#eef4ff] p-3.5 sm:p-4">
                    <p className="text-xs text-slate-500">今日生成任务</p>
                    <p className="mt-1 text-lg font-extrabold tracking-tight text-slate-900 sm:text-[21px]">
                      1,284
                      <em className="ml-1.5 rounded bg-green-50 px-1.5 py-0.5 align-middle text-[11.5px] font-bold not-italic text-green-600">
                        +32.5%
                      </em>
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-[#f6f9ff] to-[#eef4ff] p-3.5 sm:p-4">
                    <p className="text-xs text-slate-500">平均生成耗时</p>
                    <p className="mt-1 text-lg font-extrabold tracking-tight text-[#0055ff] sm:text-[21px]">
                      6.8s
                      <em className="ml-1.5 rounded bg-[#eff6ff] px-1.5 py-0.5 align-middle text-[11.5px] font-bold not-italic text-[#0055ff]">
                        稳定
                      </em>
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="text-xs font-semibold text-slate-500 sm:text-[12.5px]">覆盖创作模态</span>
                  <div className="flex flex-wrap gap-2">
                    {channelPills.map((pill) => (
                      <span
                        key={pill.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-semibold text-slate-600 sm:px-2.5 sm:py-1"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: pill.color }} />
                        {pill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3.5 overflow-hidden rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-3 py-2.5 text-xs font-semibold text-slate-500 sm:px-4">
                    <span>最新创作动态</span>
                    <span className="font-medium text-slate-400">WebSocket 实时推送</span>
                  </div>
                  {monitorRows.map((row) => (
                    <div
                      key={row.id}
                      className="flex items-center gap-2.5 border-t border-slate-200 px-3 py-2.5 first:border-t-0 sm:gap-3 sm:px-4"
                    >
                      <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                        <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col leading-tight">
                        <b className="text-[13px] font-semibold text-slate-800">{row.task}</b>
                        <span className="truncate text-[11px] text-slate-400">{row.id}</span>
                      </div>
                      <div className="ml-auto shrink-0 text-right leading-tight">
                        <b className="block text-[13.5px] font-semibold text-slate-800">{row.status}</b>
                        <span className="text-[11px] font-semibold text-green-600">{row.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <p className="mt-3 text-center text-[11.5px] text-slate-400">以上为界面演示数据</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 平台特性区域组件
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Platform"
          title="创作闭环 · 角色分流 · 开放对接"
          description="智言 AI 作图是一套面向个人与团队的 AI 图片 / 视频创作平台。基于通用前后端底座，提供从模型接入、积分计费、在线创作，到素材管理、作品广场与开放 API 的完整闭环，换品牌只改站点设置即可。"
        />

        {/* 核心介绍卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-[#0055ff] p-6 text-white sm:p-8 lg:p-10 shadow-xl shadow-[#0055ff]/20"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                一套底座 · 两条角色入口 · 六块核心能力
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                从在线创作到开放 API，形成可运营、可对接的完整闭环。管理员统一配置模型渠道、积分套餐与支付，
                普通用户通过个人工作台、创作中心与素材广场完成创作，落地页免登录即可了解平台能力。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">角色与核心能力</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 管理员：运营仪表盘 / 模型渠道 / 支付与储存
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 普通用户：工作台 / 创作中心 / 素材广场
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> AI 创作：文生图 / 图生图 / 文生视频
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 积分套餐：按量计费 / 套餐编排 / 在线充值
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 开放 API：OpenAI 风格 / 同系统对接
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 平台特性卡片 Bento Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OVERVIEW_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="mb-2 block text-xs font-semibold text-[#0055ff]">{item.eyebrow}</span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 创作功能区域组件
 */
function ScenariosSection() {
  return (
    <section id="scenarios" className="scroll-mt-32 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3.5 py-1 text-xs font-semibold text-[#0055ff]">
              Creation
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              从创作到交付的完整闭环
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              围绕 AI 图片 / 视频创作全流程提供六大能力：创作中心与对话创作负责生成，
              进度同步与消息提醒保障体验，结果落盘与广场收藏沉淀作品资产。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['创作中心', '对话创作', '任务记录', '素材广场', '积分套餐', '开放 API'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCENARIO_ITEMS.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1} className="bg-slate-50/50">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 计费套餐区域组件
 */
function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="积分计费 · 套餐编排 · 在线支付"
          description="积分余额 / 单价 / 扣费支持最多四位小数；图片按基价 × 张数 × 尺寸系数计费，视频 / 文字按单价 × 次数（视频可按时长），支持易支付在线开通套餐与充值。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_ITEMS.map((item, index) => (
            <GlassCard key={item.name} delay={index * 0.1} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <span className="text-sm font-semibold text-[#0055ff]">{item.price}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 mb-5">{item.description}</p>
              <div className="mt-auto space-y-2.5 border-t border-slate-200 pt-5">
                {item.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0055ff]" />
                    <span className="text-slate-600">{feat}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 模型渠道区域组件
 */
function ModelsSection() {
  return (
    <section id="models" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Models"
          title="模型与渠道 · 独立单价"
          description="管理后台配置供应商凭证，渠道下挂图片 / 视频 / 文字模型，各类型独立积分单价；支持 OpenAI 兼容与同系统对接，可一键同步上游模型、单价与套餐并监控差价。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODEL_ITEMS.map((item, index) => (
            <GlassCard key={item.category} delay={index * 0.08} className="bg-slate-50/50">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <CpuChipIcon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.apps.map((app) => (
                  <span
                    key={app}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 技术架构区域组件
 */
function ArchitectureSection() {
  const architectureItems = [
    {
      icon: CodeBracketIcon,
      title: '前端',
      description: 'Vue3 + Vben Admin + Ant Design Vue，Hash 路由，管理端与用户端同 SPA 按角色分流。',
      tags: ['Vue3', 'Vben Admin', 'Ant Design Vue'],
    },
    {
      icon: ServerStackIcon,
      title: '后端',
      description: 'Go + Gin + GORM，统一响应 { code, msg, data }，Bearer Token 鉴权。',
      tags: ['Go', 'Gin', 'GORM'],
    },
    {
      icon: CircleStackIcon,
      title: '数据',
      description: 'MySQL + Redis，表结构启动 AutoMigrate 自动同步。',
      tags: ['MySQL', 'Redis', 'AutoMigrate'],
    },
    {
      icon: GlobeAltIcon,
      title: '上游',
      description: 'OpenAI 兼容 HTTP 出图，视频走 /video/generations 异步轮询。',
      tags: ['OpenAI 兼容', '/video/generations'],
    },
    {
      icon: RocketLaunchIcon,
      title: '部署',
      description: '前端可打包嵌入后端静态资源，默认 API 前缀 /api/v1。',
      tags: ['静态资源嵌入', '/api/v1'],
    },
  ]

  return (
    <section id="architecture" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Architecture"
          title="技术架构 · 通用前后端底座"
          description="前端 Vue3 + Vben Admin + Ant Design Vue（Hash 路由，管理端与用户端同 SPA 按角色分流）；后端 Go + Gin + GORM（统一响应 { code, msg, data }，Bearer Token 鉴权）；数据 MySQL + Redis 并启动 AutoMigrate；上游兼容 OpenAI 风格 HTTP 出图；前端可打包嵌入后端静态资源，默认 API 前缀 /api/v1。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {architectureItems.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.08} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 角色与入口区域组件
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Roles"
          title="两条角色入口 · 一套完整底座"
          description="管理员负责运营配置与渠道管理，普通用户专注在线创作，入口规则清晰，平台底座完整支撑可运营、可对接的创作闭环。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1}>
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-500">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 开放接口区域组件
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="OpenAPI"
          title="开放接口 · OpenAI 风格兼容"
          description="个人中心创建开放密钥（仅创建时完整展示一次），兼容 models、packages、chat/completions（含 SSE）与 images/generations 接口，扣费走账号积分，便于第三方系统或同系统渠道对接。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.05} className="flex flex-col">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行动号召区域组件
 */
function CTASection() {
  return (
    <section id="cta" className="scroll-mt-20 bg-[#0055ff] py-16 md:py-24 text-center relative overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            立即体验
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            一套底座，两条角色入口，六块核心能力
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            从在线创作到开放 API，形成可运营、可对接的完整闭环。
            注册 / 登录后进入创作中心即可开始创作，专业技术团队全程支持您的 AI 作图平台落地。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              立即开始创作
            </Button>
            <Button href="/demo" variant="erlieOutline" color="white" className="rounded-xl border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              预约技术咨询
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 典型使用流程区域组件
 */
function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Workflow"
          title="典型使用流程 · 从注册到开放密钥"
          description="注册 / 登录 → 开通套餐或充值积分 → 创作中心 / 对话创作 → 结果入库、进度推送、可选消息提醒 → 任务记录查看 · 收藏 / 投稿广场 · 同款再创作 →（可选）开放密钥接入自有系统。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW_ITEMS.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.1} className="relative flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff] text-[#0055ff]">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text-4xl font-bold text-[#0055ff]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 智言 AI 作图平台主页面
 *
 * 面向个人与团队的 AI 图片 / 视频创作平台，
 * 覆盖创作中心、对话创作、积分计费与开放 API 的完整闭环。
 */
export default function AiImagePage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ScenariosSection />
      <PricingSection />
      <ModelsSection />
      <ArchitectureSection />
      <AdvantagesSection />
      <ProductsSection />
      <WorkflowSection />
      <CTASection />
    </div>
  )
}
