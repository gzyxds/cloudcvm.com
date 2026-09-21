'use client'

import { useState, useCallback, memo } from 'react'
import { useDebouncedHover } from '@/hooks/useDebouncedHover'
import { Container } from '@/components/ui/Container'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import {
  SparklesIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  MegaphoneIcon,
  PresentationChartLineIcon,
  MicrophoneIcon,
  PhotoIcon,
  ShareIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  CommandLineIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  DocumentMagnifyingGlassIcon,
  ServerStackIcon,
  EyeIcon,
  ViewfinderCircleIcon,
  DevicePhoneMobileIcon,
  MapIcon,
  MagnifyingGlassIcon,
  FireIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  action: { label: string; href: string }
}

interface TabData {
  name: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  features: FeatureItem[]
}

// ─── 数据源 ───
const tabs: TabData[] = [
  {
    name: 'AI 视觉创作',
    title: 'AI 视觉与创意生成解决方案',
    icon: PhotoIcon,
    features: [
      {
        icon: VideoCameraIcon,
        title: 'Sora2视频',
        desc: '新一代视频生成模型，支持长视频创作',
        action: { label: '立即体验', href: '/sora' },
      },
      {
        icon: PaintBrushIcon,
        title: '香蕉绘画Nanobanana',
        desc: '专业级AI绘画工具，精准控制画面细节',
        action: { label: '立即体验', href: '/banana' },
      },
      {
        icon: SparklesIcon,
        title: 'AI视频 & AI绘画',
        desc: '一站式智能视频与图像生成平台',
        action: { label: '立即体验', href: '/jimeng' },
      },
      {
        icon: CodeBracketIcon,
        title: '艺术二维码',
        desc: '融合品牌元素的个性化艺术二维码生成',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: PuzzlePieceIcon,
        title: '豆包文生图',
        desc: '基于字节跳动豆包模型的图像生成能力',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: WrenchScrewdriverIcon,
        title: 'AI改图',
        desc: '智能图像编辑，支持局部重绘与风格迁移',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: MicrophoneIcon,
        title: 'AI配音工具',
        desc: '逼真的语音合成，支持多种情感与音色',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
    ],
  },
  {
    name: '智能对话 Agent',
    title: '智能体与对话交互系统',
    icon: ChatBubbleLeftRightIcon,
    features: [
      {
        icon: CpuChipIcon,
        title: '智能体',
        desc: '自定义专属AI智能体，满足个性化需求',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: 'AI对话',
        desc: '基于大语言模型的流畅自然交互体验',
        action: { label: '了解详情', href: '/chat' },
      },
      {
        icon: CodeBracketIcon,
        title: '对话html预览',
        desc: '实时预览对话中生成的HTML代码效果',
        action: { label: '立即体验', href: '/ai' },
      },
      {
        icon: CloudArrowUpIcon,
        title: '对话上传文件',
        desc: '支持在对话中直接上传并解析文件内容',
        action: { label: '立即体验', href: '/ai' },
      },
      {
        icon: CommandLineIcon,
        title: '智能体DSL',
        desc: '通过DSL灵活编排智能体工作流',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: SparklesIcon,
        title: '对话文案AI补全',
        desc: '智能预测并补全用户输入内容',
        action: { label: '立即体验', href: '/chat' },
      },
      {
        icon: MicrophoneIcon,
        title: '语音播报',
        desc: '将对话回复自动转换为语音播报',
        action: { label: '立即体验', href: '/chat' },
      },
      {
        icon: ShareIcon,
        title: '分享对话',
        desc: '一键生成链接，便捷分享精彩对话',
        action: { label: '立即体验', href: '/chat' },
      },
    ],
  },
  {
    name: '知识库与文档',
    title: '企业级知识库与文档处理',
    icon: DocumentTextIcon,
    features: [
      {
        icon: BookOpenIcon,
        title: '知识库',
        desc: '构建企业私有知识库，数据安全可控',
        action: { label: '了解详情', href: '/work' },
      },
      {
        icon: ArrowUpTrayIcon,
        title: '文件导入导出',
        desc: '支持多种格式文档的批量导入与导出',
        action: { label: '了解详情', href: '/work' },
      },
      {
        icon: ArrowDownTrayIcon,
        title: '问答对导入',
        desc: '快速导入QA问答对，优化模型回复',
        action: { label: '了解详情', href: '/work' },
      },
      {
        icon: ChartBarIcon,
        title: '拆分问答对',
        desc: '智能拆分长文档为独立的问答对片段',
        action: { label: '了解详情', href: '/work' },
      },
      {
        icon: DocumentTextIcon,
        title: '文档问答',
        desc: '基于文档内容的精准问答与检索',
        action: { label: '立即体验', href: '/work' },
      },
      {
        icon: DocumentMagnifyingGlassIcon,
        title: 'PDF解析工具',
        desc: '高效提取PDF文档中的文本与表格',
        action: { label: '立即体验', href: '/work' },
      },
      {
        icon: RocketLaunchIcon,
        title: '文件生成',
        desc: '自动生成报告、合同等标准化文档',
        action: { label: '立即体验', href: '/work' },
      },
    ],
  },
  {
    name: '模型与数据能力',
    title: '多模型管理与数据解析',
    icon: CpuChipIcon,
    features: [
      {
        icon: CpuChipIcon,
        title: 'MCP',
        desc: '支持模型上下文协议，增强模型能力',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: ServerStackIcon,
        title: '模型管理',
        desc: '统一管理与调度各类大语言模型',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: EyeIcon,
        title: '大模型视觉识别',
        desc: '赋予模型强大的图像理解与分析能力',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: GlobeAltIcon,
        title: '网页解析',
        desc: '智能提取网页正文与关键信息',
        action: { label: '立即体验', href: '/ai' },
      },
      {
        icon: ViewfinderCircleIcon,
        title: '图文解析',
        desc: '多模态内容深度理解与结构化提取',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: DocumentTextIcon,
        title: '内容总结',
        desc: '快速提炼长文核心观点与摘要',
        action: { label: '立即体验', href: '/ai' },
      },
      {
        icon: ChartBarIcon,
        title: '图表生成',
        desc: '根据数据自动生成可视化图表',
        action: { label: '立即体验', href: '/ai' },
      },
    ],
  },
  {
    name: '营销与应用集成',
    title: '全渠道营销与应用生态集成',
    icon: MegaphoneIcon,
    features: [
      {
        icon: DevicePhoneMobileIcon,
        title: '发布至微信公众号',
        desc: '一键推送文章至微信公众号平台',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: PhotoIcon,
        title: '发布至朋友圈海报',
        desc: '自动生成适合朋友圈传播的营销海报',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: '发布至企业微信',
        desc: '无缝打通企业微信，赋能内部办公',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: CpuChipIcon,
        title: '发布至影刀RPA',
        desc: '集成RPA能力，实现业务流程自动化',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: MapIcon,
        title: '思维导图',
        desc: '一键生成结构清晰的思维导图',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
      {
        icon: MagnifyingGlassIcon,
        title: 'GEO排名',
        desc: '基于地理位置的搜索排名优化工具',
        action: { label: '了解详情', href: '/ai' },
      },
      {
        icon: PresentationChartLineIcon,
        title: 'AI PPT',
        desc: '输入主题即可自动生成精美PPT',
        action: { label: '立即体验', href: '/ppt' },
      },
      {
        icon: FireIcon,
        title: '爆款文章生成',
        desc: '辅助创作高流量、高转化的爆款文章',
        action: { label: '立即体验', href: 'https://aigc.gmlart.cn' },
      },
    ],
  },
]

/**
 * 全场景AI解决方案展示组件 - 企业级云计算风格
 */
export const AiScene = memo(function AiScene() {
  const [active, setActive] = useState(0)
  const currentTab = tabs[active] || tabs[0]
  // 该处原本使用 60ms（其余 Tab 区块为 100ms），为保留原有交互手感，此处显式传入 60
  const { handleHover: handleMouseEnter, handleLeave: handleMouseLeave } = useDebouncedHover(
    setActive,
    60
  )

  const openQrModal = useCallback((type: 'solution' | 'consult') => {
    const config =
      type === 'solution'
        ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
        : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
    }
  }, [])

  return (
    <section className="w-full bg-[#f5f6f7] py-16 md:py-24 dark:bg-gray-900">
      <Container>
        {/* 顶部标题 */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
            全场景 AI 解决方案
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500 sm:text-lg dark:text-gray-400">
            赋能企业与个人的超级智能体平台，助力业务数智化升级
          </p>
        </div>

        {/* 主体卡片容器 */}
        <div className="flex min-h-[580px] flex-col overflow-hidden rounded-md border border-gray-200 bg-white lg:flex-row dark:border-gray-700 dark:bg-gray-800">
          {/* 左侧导航 */}
          <nav className="w-full shrink-0 border-b border-gray-200 bg-gray-50 lg:w-[240px] lg:border-r lg:border-b-0 xl:w-[280px] dark:border-gray-700 dark:bg-gray-800/60">
            {/* 移动端横向滚动 */}
            <div className="no-scrollbar overflow-x-auto lg:overflow-y-auto">
              {/* 移动端滚动阴影 */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-6 bg-gradient-to-r from-gray-50 to-transparent lg:hidden dark:from-gray-800/60" />
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-6 bg-gradient-to-l from-gray-50 to-transparent lg:hidden dark:from-gray-800/60" />

              <div className="flex min-w-max p-0 lg:min-w-0 lg:flex-col">
                {tabs.map((t, idx) => (
                  <button
                    key={t.name}
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    className={clsx(
                      'relative flex min-w-[110px] items-center gap-3 border-r-2 border-transparent px-5 py-4 text-left transition-colors duration-200 outline-none lg:min-w-0 lg:border-r-0 lg:border-l-[3px]',
                      active === idx
                        ? 'border-blue-600 bg-white font-semibold text-blue-600 dark:border-blue-400 dark:bg-gray-800 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-100/60 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/40 dark:hover:text-gray-200'
                    )}
                  >
                    <t.icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm whitespace-nowrap lg:text-base">{t.name}</span>
                    <ChevronRightIcon
                      className={clsx(
                        'ml-auto hidden h-4 w-4 transition-all duration-200 lg:block',
                        active === idx ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* 右侧内容 */}
          <div className="flex min-w-0 flex-1 flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col"
              >
                {/* 分类标题 */}
                <div className="border-b border-gray-100 px-6 pt-6 pb-4 lg:px-8 lg:pt-8 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 lg:text-xl dark:text-white">
                    {currentTab.title}
                  </h3>
                </div>

                {/* 功能卡片网格 */}
                <div className="grid flex-1 grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2 dark:bg-gray-700">
                  {currentTab.features.map((f, i) => (
                    <motion.div
                      key={`${active}-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: Math.min(i * 0.03, 0.15), duration: 0.2 }}
                      className="group dark:hover:bg-gray-750 flex gap-4 bg-white p-5 transition-colors duration-150 hover:bg-gray-50 lg:p-6 dark:bg-gray-800"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                        <f.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="mb-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600 lg:text-base dark:text-white dark:group-hover:text-blue-400">
                          {f.title}
                        </h4>
                        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                          {f.desc}
                        </p>
                        <a
                          href={f.action.href}
                          target={f.action.href.startsWith('http') ? '_blank' : undefined}
                          rel={f.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          {f.action.label}
                          <ArrowRightIcon className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 底部操作栏 */}
                <div className="flex flex-col items-stretch gap-3 border-t border-gray-100 bg-gray-50/50 px-6 py-4 sm:flex-row sm:items-center lg:px-8 lg:py-5 dark:border-gray-700 dark:bg-gray-800/50">
                  <button
                    onClick={() => openQrModal('solution')}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    了解方案详情
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                  <button
                    onClick={() => openQrModal('consult')}
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    联系售前咨询
                    <ChatBubbleLeftRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
})
