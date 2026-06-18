'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  EyeIcon,
  FilmIcon,
  GlobeAltIcon,
  LightBulbIcon,
  LockClosedIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  SwatchIcon,
  ChartBarIcon,
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
  { id: 'overview', label: '平台特性' },
  { id: 'scenarios', label: '应用场景' },
  { id: 'pricing', label: '服务模式' },
  { id: 'models', label: '接入模型' },
  { id: 'advantages', label: '平台优势' },
  { id: 'products', label: '配套服务' },
  { id: 'cta', label: '立即体验' },
]

/**
 * 平台特性卡片数据 - TokenHub 六大核心特性
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: PuzzlePieceIcon,
    eyebrow: '统一入口',
    title: '一站式 API 接入',
    description: '统一的 API 接口与 Token 管理，一次接入即可调用多个大模型，无需逐一适配各厂商的接口规范与认证体系。',
  },
  {
    icon: Squares2X2Icon,
    eyebrow: '多模型聚合',
    title: '主流及第三方模型全覆盖',
    description: '整合优质自研与第三方大模型，覆盖通用对话、深度推理、代码生成、视觉理解、图像与视频生成等多类场景能力。',
  },
  {
    icon: BoltIcon,
    eyebrow: '高性能',
    title: '低延迟、高并发推理',
    description: '基于高性能 GPU 推理集群，提供毫秒级响应与万级并发承载能力，满足生产环境对实时性与稳定性的严格要求。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '安全合规',
    title: '企业级数据安全',
    description: '支持私有网络部署、数据加密传输与访问控制策略，确保企业数据在调用过程中的安全性与合规性。',
  },
  {
    icon: CommandLineIcon,
    eyebrow: '灵活集成',
    title: 'SDK + API 无缝嵌入',
    description: '提供多语言 SDK、RESTful API 与 WebSocket 流式接口，轻松嵌入现有业务系统与开发工作流。',
  },
  {
    icon: ChartBarIcon,
    eyebrow: '可观测性',
    title: '用量监控与成本管理',
    description: '实时监控 API 调用量、Token 消耗与响应延迟，提供多维度报表与预算告警，帮助企业精细化运营 AI 成本。',
  },
]

/**
 * 应用场景卡片数据
 */
const SCENARIO_ITEMS: CommonCardItem[] = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: '通用对话',
    description: '构建智能客服、AI 助手、虚拟角色等对话式 AI 应用，支持多轮对话、上下文记忆与个性化指令。',
    tags: ['智能客服', 'AI 助手', '虚拟角色'],
  },
  {
    icon: LightBulbIcon,
    title: '深度推理',
    description: '面向复杂逻辑推理、数学解题、代码审计等场景，调用具有深度思考能力的模型，输出结构化分析结果。',
    tags: ['逻辑推理', '数学', '代码审计'],
  },
  {
    icon: CodeBracketIcon,
    title: '代码生成',
    description: '根据自然语言描述自动生成代码、补全函数、编写测试用例，支持主流编程语言与框架。',
    tags: ['代码补全', '测试生成', '多语言'],
  },
  {
    icon: EyeIcon,
    title: '视觉理解',
    description: '对图片、文档进行内容识别、OCR 提取、场景分析，支持多模态输入与图文混合推理。',
    tags: ['OCR', '图像识别', '多模态'],
  },
  {
    icon: PaintBrushIcon,
    title: '图像生成',
    description: '基于文本描述生成高质量图像，支持风格定制、分辨率调节与批量生成，满足设计与创意需求。',
    tags: ['文生图', '风格定制', '批量生成'],
  },
  {
    icon: FilmIcon,
    title: '视频生成',
    description: '利用前沿视频生成模型，将文本或图像转化为动态视频内容，适用于营销宣传与创意制作。',
    tags: ['文生视频', '图生视频', '营销素材'],
  },
]

/**
 * 服务模式数据
 */
const PRICING_ITEMS = [
  {
    name: '按量调用',
    icon: BoltIcon,
    price: '按 Token 计费',
    description: '根据实际 API 调用量与 Token 消耗计费，无需预付，适合探索期与波动流量场景。',
    features: ['按实际使用量计费', '无需最低消费', '所有模型即时可用', '适合原型验证与小规模应用'],
  },
  {
    name: '保障型资源',
    icon: ShieldCheckIcon,
    price: '月度/年度订阅',
    description: '预购专属并发配额与 Token 包，确保高峰期调用稳定性，享受大幅折扣优惠。',
    features: ['专属并发保障', 'Token 包折扣高达 50%', 'SLA 99.9% 可用性', '优先技术支持'],
  },
  {
    name: '专属部署',
    icon: ServerStackIcon,
    price: '定制报价',
    description: '在独立 GPU 集群上部署专属模型实例，独享推理算力，满足高安全与高性能定制需求。',
    features: ['独享 GPU 推理集群', 'VPC 私有网络部署', '模型定制与微调', '专属运维与监控'],
  },
]

/**
 * 接入模型数据
 */
const MODEL_ITEMS = [
  {
    category: '通用对话',
    apps: ['DeepSeek-V3', 'DeepSeek-R1', 'Qwen-Max', 'Yi-Large', 'GLM-4', 'Claude 3.5 Sonnet'],
  },
  {
    category: '深度推理',
    apps: ['DeepSeek-R1', 'OpenAI o1', 'Qwen-Max', 'Claude 3.5 Opus'],
  },
  {
    category: '代码生成',
    apps: ['DeepSeek-Coder', 'Code-Llama', 'Qwen-Coder', 'StarCoder'],
  },
  {
    category: '视觉理解',
    apps: ['Qwen-VL', 'GLM-4V', 'Claude 3.5 Vision', 'Gemini Pro Vision'],
  },
  {
    category: '图像生成',
    apps: ['Stable Diffusion', 'FLUX.1', 'Midjourney API', 'DALL-E'],
  },
  {
    category: '视频生成',
    apps: ['Sora API', 'Runway Gen-3', 'Kling', 'Pika'],
  },
]

/**
 * 平台优势卡片数据
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: GlobeAltIcon,
    title: '多模型聚合',
    description:
      '一个 API 调用所有主流大模型，自动负载调度与模型路由，无需维护多套接口。模型能力持续升级，始终使用最新版本。',
  },
  {
    icon: BoltIcon,
    title: '高性能推理',
    description:
      '自建 GPU 推理集群，毫秒级响应延迟。支持流式输出（Server-Sent Events），实现类 ChatGPT 的逐字输出体验。',
  },
  {
    icon: ShieldCheckIcon,
    title: '安全可控',
    description:
      '支持私有网络部署、内容安全过滤、访问频率限制与权限管理。数据加密传输，不用于模型训练，全面保障数据主权。',
  },
  {
    icon: CpuChipIcon,
    title: '弹性扩展',
    description:
      '从容应对从原型验证到百万日活业务的全生命周期。按量调用零门槛起步，保障型资源支撑生产级流量，专属部署满足定制化需求。',
  },
]

/**
 * 配套服务卡片数据
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: CircleStackIcon,
    title: '向量数据库',
    description: '配套高性能向量存储与检索服务，支持 RAG 应用构建，将企业知识库与大模型深度结合。',
    tags: ['RAG', '知识库', '检索增强'],
  },
  {
    icon: SwatchIcon,
    title: '模型微调服务',
    description: '基于企业业务数据对开源模型进行微调训练，提升模型在特定领域的准确性与专业度。',
    tags: ['LoRA', '微调', '定制化'],
  },
  {
    icon: ServerStackIcon,
    title: 'GPU 云服务器',
    description: '直接租用高性能 GPU 实例，自行部署与训练开源模型，灵活满足研究型与自建推理需求。',
    tags: ['GPU', '训练', '自建'],
  },
  {
    icon: LockClosedIcon,
    title: '内容安全',
    description: '提供输入输出内容审核与敏感词过滤，拦截违规内容，保障 AI 应用合规上线运营。',
    tags: ['审核', '过滤', '合规'],
  },
  {
    icon: LightBulbIcon,
    title: 'Prompt 优化',
    description: '提供 Prompt 工程咨询与自动化优化工具，提升模型输出质量与稳定性，降低试错成本。',
    tags: ['Prompt', '优化', '咨询'],
  },
  {
    icon: GlobeAltIcon,
    title: 'CDN 加速',
    description: '将生成内容分发至全球边缘节点，加速 AI 生成图片与视频的交付速度，提升最终用户体验。',
    tags: ['加速', '分发', '全球'],
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
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-gradient-to-br from-slate-50 via-[#eff6ff] to-slate-50 pt-16 sm:pt-0">
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/lighthouse.webp')] bg-cover bg-center bg-no-repeat opacity-25" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            TokenHub / AI 大模型网关 / 统一 API 入口
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            AI 大模型服务平台 TokenHub
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            TokenHub 致力于为企业和开发者提供统一的大模型服务入口。整合主流及优质第三方模型，
            覆盖通用对话、深度推理、代码生成、视觉理解、图像生成、视频生成等多类场景。
            支持按量调用、保障型资源与专属部署三种服务模式，帮助您简单、高效地获取 AI 算力。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:flex-wrap">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              立即接入
            </Button>
            <Button href="#overview" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              Explore API Docs
            </Button>
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
          title="统一 API · 多模型 · 全场景覆盖"
          description="TokenHub 以一站式 API 为核心，聚合主流大模型能力，覆盖六大 AI 场景，提供高性能推理与灵活计费模式，让 AI 接入更简单。"
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
                一个 Token 调用所有模型
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                无需逐一对接各模型厂商的接口规范与认证体系。通过 TokenHub 统一 API，
                即可访问 DeepSeek、Qwen、GLM、Claude 等主流模型，自动路由与负载调度，开发效率大幅提升。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">支持能力类型</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 通用对话与深度推理
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 代码生成与解释
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 图像与视频理解
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 文生图与文生视频
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 流式与批量推理
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
 * 应用场景区域组件
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
              Scenarios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              六大 AI 应用场景
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从通用对话到视频生成，TokenHub 覆盖主流 AI 能力场景。
              一次接入即可满足多场景业务需求，避免对接多平台的复杂度与维护成本。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['对话', '推理', '代码', '视觉', '图像', '视频'].map((tag) => (
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
 * 服务模式区域组件
 */
function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="三种服务模式 · 灵活匹配业务阶段"
          description="从按量调用的零门槛起步，到保障型资源的生产级稳定性，再到专属部署的完全定制化，TokenHub 陪伴业务全生命周期成长。"
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
 * 接入模型区域组件
 */
function ModelsSection() {
  return (
    <section id="models" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Models"
          title="多模型聚合 · 持续扩充"
          description="整合主流自研与第三方大模型能力，覆盖对话、推理、代码、视觉、图像、视频六大类别，模型列表持续丰富与升级。"
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
 * 平台优势区域组件
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Why TokenHub"
          title="聚合 · 高效 · 安全 · 弹性"
          description="TokenHub 围绕「简化 AI 接入」这一核心使命，从模型聚合、推理性能、数据安全到弹性架构四大维度持续打磨产品能力。"
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
 * 配套服务区域组件
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Ecosystem"
          title="配套服务与工具链"
          description="围绕 TokenHub 核心 API 构建完整的 AI 开发生态，从向量数据库到模型微调再到内容安全，一站式满足 AI 应用落地全链路需求。"
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
            一个 API，调用所有主流大模型
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            覆盖通用对话、深度推理、代码生成、视觉理解、图像生成与视频生成六大场景。
            按量调用零门槛起步，专业技术团队全程支持，助您快速构建 AI 原生应用。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              立即接入 API
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
 * TokenHub AI 大模型服务平台主页面
 *
 * 面向企业与开发者，提供统一的多模型 API 网关服务，
 * 覆盖对话、推理、代码、视觉、图像、视频六大 AI 场景。
 */
export default function TokenPage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ScenariosSection />
      <PricingSection />
      <ModelsSection />
      <AdvantagesSection />
      <ProductsSection />
      <CTASection />
    </div>
  )
}
