'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BoltIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  BeakerIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  RectangleStackIcon,
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
 * 页面导航链接数据 - GPU 云服务器产品维度
 */
const SECTION_LINKS: SectionLink[] = [
  { id: 'overview', label: '产品特性' },
  { id: 'scenarios', label: '适用场景' },
  { id: 'packages', label: '实例规格' },
  { id: 'images', label: '框架镜像' },
  { id: 'advantages', label: '核心优势' },
  { id: 'products', label: '配套产品' },
  { id: 'cta', label: '立即体验' },
]

/**
 * 产品特性卡片数据 - GPU 云服务器六大核心特性
 */
const OVERVIEW_ITEMS: CommonCardItem[] = [
  {
    icon: BoltIcon,
    eyebrow: '超强算力',
    title: 'NVIDIA GPU 并行计算',
    description: '搭载 NVIDIA Tesla / A 系列 GPU，提供数千核心级并行算力，显著加速深度学习训练与推理任务。',
  },
  {
    icon: SparklesIcon,
    eyebrow: '异构加速',
    title: 'CUDA / Tensor Core 加速',
    description: '全面支持 NVIDIA CUDA、Tensor Core、RT Core 等硬件加速技术，满足 AI 训练、科学计算与图形渲染需求。',
  },
  {
    icon: ArrowPathIcon,
    eyebrow: '弹性灵活',
    title: '按需弹性，灵活扩缩容',
    description: '支持按秒计费与包年包月等多种计费方式，实例规格可按需调整，GPU 数量灵活配置，匹配业务算力需求。',
  },
  {
    icon: RectangleStackIcon,
    eyebrow: '丰富框架',
    title: '主流深度学习框架支持',
    description: '预置 TensorFlow、PyTorch、MXNet、PaddlePaddle 等主流深度学习框架镜像，开箱即用快速开始模型训练。',
  },
  {
    icon: GlobeAltIcon,
    eyebrow: '多地域部署',
    title: '全球多地域节点覆盖',
    description: '覆盖中国大陆及海外多地域节点，就近部署低延迟访问，满足跨境 AI 业务与海外用户访问需求。',
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: '稳定可靠',
    title: '企业级 SLA 保障',
    description: '基于成熟云服务器架构构建，提供快照备份、安全防护与监控告警能力，为 AI 训练任务提供稳定算力支撑。',
  },
]

/**
 * 适用场景卡片数据 - GPU 云服务器六大典型场景
 */
const SCENARIO_ITEMS: CommonCardItem[] = [
  {
    icon: SparklesIcon,
    title: '深度学习训练',
    description: '面向大模型训练、图像识别、语音识别等深度学习场景，提供高带宽 NVLink 互联的多 GPU 并行算力。',
    tags: ['大模型', '训练', 'Transformer'],
  },
  {
    icon: BoltIcon,
    title: 'AI 推理加速',
    description: '为在线预测、实时推荐、智能客服等推理业务提供高吞吐低延迟的 GPU 推理加速能力。',
    tags: ['推理', '低延迟', '高吞吐'],
  },
  {
    icon: BeakerIcon,
    title: '科学计算',
    description: '为计算流体力学、分子动力学、金融分析、气象模拟等科学计算场景提供超强浮点并行算力。',
    tags: ['HPC', '分子动力学', 'CFD'],
  },
  {
    icon: CpuChipIcon,
    title: '图形图像处理',
    description: '支持专业图形渲染、影视特效制作、三维建模等图形处理任务，兼容 OpenGL / Vulkan 等图形 API。',
    tags: ['渲染', '图形工作站', 'OpenGL'],
  },
  {
    icon: DocumentTextIcon,
    title: '视频编解码',
    description: '面向视频转码、直播推流、超分辨率等视频处理场景，提供 NVENC / NVDEC 硬件编解码加速。',
    tags: ['转码', '直播', '超分'],
  },
  {
    icon: CursorArrowRaysIcon,
    title: '云游戏',
    description: '提供云端游戏渲染与实时串流能力，为云游戏平台提供高性能 GPU 渲染与低延迟音视频传输方案。',
    tags: ['云游戏', '串流', '低延迟'],
  },
]

/**
 * 实例规格数据 - GPU 云服务器典型实例规格
 */
const PACKAGE_ITEMS = [
  {
    name: '推理型',
    cpu: '8 核 vCPU',
    memory: '32 GB',
    storage: '100 GB SSD',
    bandwidth: '5 Gbps',
    traffic: '按需计费',
    highlight: '适合 AI 推理、图像识别、NLP 推理',
    price: '¥8.80/小时起',
  },
  {
    name: '标准训练型',
    cpu: '16 核 vCPU',
    memory: '64 GB',
    storage: '300 GB NVMe',
    bandwidth: '10 Gbps',
    traffic: '按需计费',
    highlight: '适合中等规模模型训练',
    price: '¥25.60/小时起',
  },
  {
    name: '高性能训练型',
    cpu: '32 核 vCPU',
    memory: '128 GB',
    storage: '800 GB NVMe',
    bandwidth: '25 Gbps',
    traffic: '按需计费',
    highlight: '适合多 GPU 大模型训练',
    price: '¥58.00/小时起',
  },
  {
    name: '旗舰训练型',
    cpu: '64 核 vCPU',
    memory: '512 GB',
    storage: '2 TB NVMe',
    bandwidth: '100 Gbps',
    traffic: '按需计费',
    highlight: '适合大模型分布式训练',
    price: '¥198.00/小时起',
  },
]

/**
 * 框架镜像数据 - GPU 云服务器主流深度学习框架
 */
const IMAGE_ITEMS = [
  {
    category: '深度学习框架',
    apps: ['PyTorch', 'TensorFlow', 'Keras', 'MXNet', 'PaddlePaddle', 'JAX'],
  },
  {
    category: '大模型工具链',
    apps: ['Hugging Face', 'Transformers', 'Deepspeed', 'vLLM', 'LangChain'],
  },
  {
    category: '开发与容器',
    apps: ['Docker', 'NVIDIA NGC', 'JupyterLab', 'Anaconda', 'Miniconda'],
  },
  {
    category: 'CUDA / 驱动',
    apps: ['CUDA 11.x', 'CUDA 12.x', 'cuDNN', 'NCCL', 'Triton'],
  },
  {
    category: '科学计算',
    apps: ['NumPy', 'SciPy', 'Pandas', 'OpenCV', 'MATLAB'],
  },
  {
    category: '推理部署',
    apps: ['TensorRT', 'ONNX Runtime', 'FastAPI', 'TorchServe', 'TF Serving'],
  },
]

/**
 * 核心优势卡片数据 - GPU 云服务器四大核心优势
 */
const ADVANTAGE_ITEMS: CommonCardItem[] = [
  {
    icon: BoltIcon,
    title: '超强并行算力',
    description:
      '搭载 NVIDIA 最新一代 GPU，提供数千核心级并行计算能力，配合 NVLink 高速互联，显著加速深度学习训练与推理任务。',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: '开箱即用镜像',
    description:
      '预置主流深度学习框架与 CUDA 环境镜像，无需手动配置驱动与软件依赖，数分钟即可开始模型训练与推理。',
  },
  {
    icon: ArrowPathIcon,
    title: '弹性灵活计费',
    description:
      '支持按需计费与包年包月等多种计费方式，实例规格可按需调整，GPU 数量灵活配置，匹配业务发展节奏。',
  },
  {
    icon: GlobeAltIcon,
    title: '多地域部署',
    description:
      '覆盖中国大陆及海外多地域节点，就近部署实现低延迟访问，满足跨境 AI 业务与海外用户访问需求。',
  },
]

/**
 * 配套产品卡片数据 - 与 GPU 云服务器协同的云产品
 */
const PRODUCT_ITEMS: CommonCardItem[] = [
  {
    icon: ServerStackIcon,
    title: '对象存储',
    description: '为训练数据集与模型文件提供高可用、低成本的海量存储方案，支持高吞吐数据读写。',
    tags: ['数据集', '模型存储', '高吞吐'],
  },
  {
    icon: Squares2X2Icon,
    title: '容器服务',
    description: '基于 Kubernetes 的容器编排服务，支持 GPU 资源调度与隔离，快速部署分布式训练集群。',
    tags: ['Kubernetes', 'GPU 调度', '分布式'],
  },
  {
    icon: ShieldCheckIcon,
    title: 'Web 应用防火墙',
    description: '为 GPU 推理服务提供 SQL 注入、XSS 攻击等常见 Web 威胁防护，保障线上推理业务安全。',
    tags: ['安全防护', 'WAF'],
  },
  {
    icon: DocumentTextIcon,
    title: '日志与监控',
    description: '提供 GPU 利用率、显存、训练任务等全方位监控告警能力，实时掌握算力使用情况。',
    tags: ['监控', '告警', '日志'],
  },
  {
    icon: GlobeAltIcon,
    title: 'CDN 加速',
    description: '将推理结果与模型资源分发至全球边缘节点，加速 AI 应用访问，提升用户体验。',
    tags: ['分发', '全球加速'],
  },
  {
    icon: RectangleStackIcon,
    title: '弹性云服务器',
    description: '业务规模增长后，可平滑迁移至高规格 GPU 实例或弹性云服务器集群，享受更灵活的计算能力。',
    tags: ['升级', '弹性扩展'],
  },
]

/**
 * 自定义 Hook：监听滚动以更新当前激活的导航项
 * @param sectionIds - 需要监听的 section id 数组
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
 * 动画卡片组件 - 实现玻璃拟态与微交互
 * @param children - 子组件内容
 * @param className - 额外的 CSS 类名
 * @param delay - 动画延迟时间（秒）
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
 * @param eyebrow - 分区标签
 * @param title - 分区标题
 * @param description - 分区描述
 * @param align - 对齐方式
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
 * 根据当前滚动位置高亮对应的导航项
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
 * 展示 GPU 云服务器的产品定位与核心价值
 */
function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-slate-50 pt-16 sm:pt-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0 bg-[url('/images/solutions/gpu.webp')] bg-cover bg-center bg-no-repeat opacity-55" />

      <Container className="relative z-10 w-full py-12 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex h-7 items-center rounded-full border border-[#0055ff]/20 bg-[#eff6ff] px-3 text-xs font-semibold text-[#0055ff]">
            GPU 云服务器 / 并行计算 / 弹性计算 / 人工智能 / 深度学习
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            GPU云服务器
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl lg:leading-relaxed">
            提供 GPU 算力的弹性计算服务，具有超强的并行计算能力，作为 IaaS 层的尖兵利器，服务于深度学习训练推理、
            科学计算、图形图像处理、视频编解码与云游戏等场景，支持多种 NVIDIA GPU 实例规格灵活选择。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-4 sm:flex-wrap">
            <Button href="/contact" color="blue" variant="erlieSolid" className="rounded-lg w-full sm:w-auto">
              立即选购
            </Button>
            <Button href="#overview" variant="erlieOutline" color="slate" className="rounded-lg w-full sm:w-auto">
              了解产品详情
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * 产品特性区域组件
 * 展示 GPU 云服务器的六大核心特性
 */
function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Product Features"
          title="提供 GPU 算力的弹性计算服务"
          description="以超强并行算力为核心，面向深度学习训练推理、科学计算、图形图像处理等场景，提供多种 NVIDIA GPU 实例规格，开箱即用的深度学习镜像。"
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
                深度学习镜像 · 开箱即用
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                预置 PyTorch、TensorFlow、PaddlePaddle 等主流深度学习框架与 CUDA 环境镜像，
                无需手动配置驱动与软件依赖，数分钟即可启动实例并开始模型训练与推理，大幅降低上云门槛。
              </p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold text-[#eff6ff]">典型适用场景</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 深度学习训练与推理
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 大模型分布式训练
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 科学计算 / HPC
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 图形图像处理与渲染
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 视频编解码 / 云游戏
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 产品特性卡片 Bento Grid */}
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
 * 适用场景区域组件
 * 展示 GPU 云服务器的六大典型场景
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
              六大典型使用场景
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              从深度学习训练推理到大模型分布式训练，从科学计算到图形图像处理与视频编解码，GPU 云服务器覆盖丰富的并行算力业务场景。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['AI 训练', '推理加速', 'HPC', '渲染', '视频', '云游戏'].map((tag) => (
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
 * 实例规格区域组件
 * 展示 GPU 云服务器的典型实例配置
 */
function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Instance Specs"
          title="多档次实例规格灵活选择"
          description="提供推理型到旗舰训练型多档实例规格，CPU、GPU、显存、网络带宽灵活配置，按需计费与包年包月可选，匹配业务算力需求。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.name} delay={index * 0.1} className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <span className="inline-flex items-center rounded-md bg-[#eff6ff] px-2 py-1 text-xs font-semibold text-[#0055ff]">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">{item.highlight}</p>
              <div className="mt-5 space-y-3 border-t border-slate-200 pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">vCPU</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.cpu}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">内存</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.memory}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">系统盘</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.storage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">带宽</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.bandwidth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">流量包</span>
                  <span className="font-semibold text-slate-900 font-mono">{item.traffic}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#0055ff]">
                <span>查看套餐详情</span>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 框架镜像区域组件
 * 展示 GPU 云服务器的主流深度学习框架与工具链
 */
function ImagesSection() {
  return (
    <section id="images" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Framework Images"
          title="主流深度学习框架 · 开箱即用"
          description="预置 PyTorch、TensorFlow、PaddlePaddle 等主流深度学习框架与 CUDA 环境，支持大模型工具链与推理部署，快速启动 AI 任务。"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGE_ITEMS.map((item, index) => (
            <GlassCard key={item.category} delay={index * 0.08} className="bg-slate-50/50">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0055ff] shadow-sm">
                  <Squares2X2Icon className="h-5 w-5" />
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
 * 核心优势区域组件
 * 展示 GPU 云服务器的四大核心优势
 */
function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Core Advantages"
          title="超强并行算力 · 弹性灵活 · 多地域部署"
          description="围绕深度学习与并行计算场景深度优化，提供 NVIDIA GPU 并行算力、预置深度学习镜像、弹性灵活计费，赋能 AI 业务快速上线。"
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
 * 配套产品区域组件
 * 展示与 GPU 云服务器协同使用的相关云产品
 */
function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-16 md:py-24 border-y border-slate-200">
      <Container>
        <SectionHeader
          eyebrow="Related Products"
          title="配套云产品组合"
          description="与对象存储、容器服务、日志监控、CDN 加速等产品协同使用，构建从训练数据存储到推理部署、从安全到运维的完整 AI 业务方案。"
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
 * 引导用户选购 GPU 云服务器或咨询方案
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
            开启超强并行算力体验
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            预置深度学习框架镜像一键部署，多种 NVIDIA GPU 实例规格灵活选择，按需计费与包年包月可选，
            为您的 AI 训练推理、科学计算、图形图像处理与视频编解码业务提供稳定算力支撑。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" color="white" variant="erlieSolid" className="rounded-xl px-8 py-3 font-medium text-[#0055ff]">
              立即选购实例
            </Button>
            <Button href="/demo" variant="erlieOutline" color="white" className="rounded-xl border-white/30 px-8 py-3 font-medium hover:bg-white/10">
              咨询定制方案
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

/**
 * GPU 云服务器主页面
 *
 * 采用现代科技风、Bento Grid 布局与轻量级交互动画，
 * 完全适配多端响应式展示。
 * 面向 AI / HPC / 图形处理等场景提供 GPU 并行算力的产品介绍。
 */
export default function GPUInstancePage() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-[#0055ff]/20 selection:text-[#0055ff]">
      <HeroSection />
      <SectionNav />
      <OverviewSection />
      <ScenariosSection />
      <PackagesSection />
      <ImagesSection />
      <AdvantagesSection />
      <ProductsSection />
      <CTASection />
    </div>
  )
}
