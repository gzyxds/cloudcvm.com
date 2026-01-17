'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
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
  ArrowPathIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

// 数据源定义
const tabs = [
  {
    name: 'AI 视觉创作',
    title: 'AI 视觉与创意生成解决方案',
    icon: PhotoIcon,
    gradient: 'from-slate-50/80 via-blue-50/30 to-slate-50/80 dark:from-slate-900/80 dark:via-blue-900/20 dark:to-slate-900/80',
    features: [
      {
        icon: VideoCameraIcon,
        title: 'Sora2视频',
        desc: '新一代视频生成模型，支持长视频创作',
      },
      {
        icon: PhotoIcon,
        title: '香蕉绘画Nanobanana',
        desc: '专业级AI绘画工具，精准控制画面细节',
      },
      {
        icon: SparklesIcon,
        title: 'AI视频 & AI绘画',
        desc: '一站式智能视频与图像生成平台',
      },
      {
        icon: CodeBracketIcon,
        title: '艺术二维码',
        desc: '融合品牌元素的个性化艺术二维码生成',
      },
      {
        icon: PhotoIcon,
        title: '豆包文生图',
        desc: '基于字节跳动豆包模型的图像生成能力',
      },
      {
        icon: ArrowPathIcon,
        title: 'AI改图',
        desc: '智能图像编辑，支持局部重绘与风格迁移',
      },
      {
        icon: MicrophoneIcon,
        title: 'AI配音工具',
        desc: '逼真的语音合成，支持多种情感与音色',
      },
    ],
  },
  {
    name: '智能对话 Agent',
    title: '智能体与对话交互系统',
    icon: ChatBubbleLeftRightIcon,
    gradient: 'from-blue-50/80 via-indigo-50/30 to-blue-50/80 dark:from-blue-900/80 dark:via-indigo-900/20 dark:to-blue-900/80',
    features: [
      {
        icon: CpuChipIcon,
        title: '智能体',
        desc: '自定义专属AI智能体，满足个性化需求',
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: 'AI对话',
        desc: '基于大语言模型的流畅自然交互体验',
      },
      {
        icon: CodeBracketIcon,
        title: '对话html预览',
        desc: '实时预览对话中生成的HTML代码效果',
      },
      {
        icon: CloudArrowUpIcon,
        title: '对话上传文件',
        desc: '支持在对话中直接上传并解析文件内容',
      },
      {
        icon: CommandLineIcon,
        title: '智能体DSL',
        desc: '通过DSL灵活编排智能体工作流',
      },
      {
        icon: SparklesIcon,
        title: '对话文案AI补全',
        desc: '智能预测并补全用户输入内容',
      },
      {
        icon: MicrophoneIcon,
        title: '语音播报',
        desc: '将对话回复自动转换为语音播报',
      },
      { icon: ShareIcon, title: '分享对话', desc: '一键生成链接，便捷分享精彩对话' },
    ],
  },
  {
    name: '知识库与文档',
    title: '企业级知识库与文档处理',
    icon: DocumentTextIcon,
    gradient: 'from-emereldald-50/80 vttaleal-50/50 emer-ldmerald-50/80 darkemerrldm-eme2ald-900/20 teaa:via-teal-900/20emeraldk:to-2merald-900/20',
    features: [
      {
        icon: DocumentTextIcon,
        title: '知识库',
        desc: '构建企业私有知识库，数据安全可控',
      },
      {
        icon: CloudArrowUpIcon,
        title: '文件导入导出',
        desc: '支持多种格式文档的批量导入与导出',
      },
      {
        icon: ArrowPathIcon,
        title: '问答对导入',
        desc: '快速导入QA问答对，优化模型回复',
      },
      {
        icon: ChartBarIcon,
        title: '拆分问答对',
        desc: '智能拆分长文档为独立的问答对片段',
      },
      {
        icon: DocumentTextIcon,
        title: '文档问答',
        desc: '基于文档内容的精准问答与检索',
      },
      {
        icon: DocumentTextIcon,
        title: 'PDF解析工具',
        desc: '高效提取PDF文档中的文本与表格',
      },
      {
        icon: DocumentTextIcon,
        title: '文件生成',
        desc: '自动生成报告、合同等标准化文档',
      },
    ],
  },
  {
    name: '模型与数据能力',
    title: '多模型管理与数据解析',
    icon: CpuChipIcon,
    gradient: 'from-indigo-50/80 via-blue-50/30 to-indigo-50/80 dark:from-indigo-900/80 dark:via-blue-900/20 dark:to-indigo-900/80',
    features: [
      {
        icon: CpuChipIcon,
        title: 'MCP',
        desc: '支持模型上下文协议，增强模型能力',
      },
      {
        icon: CpuChipIcon,
        title: '模型管理',
        desc: '统一管理与调度各类大语言模型',
      },
      {
        icon: PhotoIcon,
        title: '大模型视觉识别',
        desc: '赋予模型强大的图像理解与分析能力',
      },
      {
        icon: GlobeAltIcon,
        title: '网页解析',
        desc: '智能提取网页正文与关键信息',
      },
      {
        icon: PhotoIcon,
        title: '图文解析',
        desc: '多模态内容深度理解与结构化提取',
      },
      {
        icon: DocumentTextIcon,
        title: '内容总结',
        desc: '快速提炼长文核心观点与摘要',
      },
      {
        icon: ChartBarIcon,
        title: '图表生成',
        desc: '根据数据自动生成可视化图表',
      },
    ],
  },
  {
    name: '营销与应用集成',
    title: '全渠道营销与应用生态集成',
    icon: MegaphoneIcon,
    gradient: 'from-sky-50/80 via-indigo-50/30 to-sky-50/80 dark:from-sky-900/80 dark:via-indigo-900/20 dark:to-sky-900/80',
    features: [
      {
        icon: ChatBubbleLeftRightIcon,
        title: '发布至微信公众号',
        desc: '一键推送文章至微信公众号平台',
      },
      {
        icon: PhotoIcon,
        title: '发布至朋友圈海报',
        desc: '自动生成适合朋友圈传播的营销海报',
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: '发布至企业微信',
        desc: '无缝打通企业微信，赋能内部办公',
      },
      {
        icon: CpuChipIcon,
        title: '发布至影刀RPA',
        desc: '集成RPA能力，实现业务流程自动化',
      },
      {
        icon: PresentationChartLineIcon,
        title: '思维导图',
        desc: '一键生成结构清晰的思维导图',
      },
      {
        icon: ChartBarIcon,
        title: 'GEO排名',
        desc: '基于地理位置的搜索排名优化工具',
      },
      {
        icon: PresentationChartLineIcon,
        title: 'AI PPT',
        desc: '输入主题即可自动生成精美PPT',
      },
      {
        icon: SparklesIcon,
        title: '爆款文章生成',
        desc: '辅助创作高流量、高转化的爆款文章',
      },
    ],
  },
]

export function AIscene() {
  const [active, setActive] = useState(0)
  const currentTab = tabs[active] || tabs[0]

  // 二维码弹窗 - 触发自定义事件
  const openQrModal = (type: 'solution' | 'consult') => {
    const config =
      type === 'solution'
        ? { title: '了解方案详情', desc: '扫码获取完整方案', image: '/qrcode.png' }
        : { title: '联系售前咨询', desc: '扫码添加微信顾问', image: '/wechat.png' }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('showQRCodeModal', { detail: config })
      )
    }
  }

  return (
    <section className="w-full py-12 sm:py-24 font-sans bg-white dark:bg-gray-900">
      <Container>
        {/* 顶部标题 */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            全场景{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2055FA] via-[#1B52F8] to-[#A07CFE]">
              AI 解决方案
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            赋能企业与个人的超级智能体平台，助力业务数智化升级
          </p>
        </div>

        {/* 主体卡片容器 */}
        <div className="relative rounded-3xl overflow-hidden border border-white/50 dark:border-gray-700/50 shadow-2xl shadow-gray-200/50 dark:shadow-none min-h-[600px] flex flex-col lg:flex-row transition-all duration-500 backdrop-blur-xl bg-white/40 dark:bg-gray-800/40">
          {/* 动态背景装饰 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={clsx(
                "absolute inset-0 z-0 bg-gradient-to-br",
                currentTab.gradient
              )}
            />
          </AnimatePresence>

          {/* 装饰性光晕 - 固定 */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/40 dark:bg-white/5 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-white/40 dark:bg-white/5 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>

          {/* 导航区域 */}
          <aside className="relative z-10 w-full lg:w-1/4 bg-white/30 dark:bg-gray-800/30 border-b lg:border-b-0 lg:border-r border-white/40 dark:border-gray-700/40 backdrop-blur-md flex flex-col">
            {/* 移动端横向滚动/桌面端垂直列表 */}
            <div className="flex-1 overflow-x-auto lg:overflow-y-auto no-scrollbar">
              <div className="flex lg:flex-col p-2 lg:p-4 gap-2">
                {tabs.map((t, idx) => (
                  <button
                    key={t.name}
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => setActive(idx)}
                    className={clsx(
                      'group relative flex items-center px-6 py-4 lg:py-5 rounded-xl transition-all duration-300 min-w-[140px] lg:min-w-0 text-left outline-none',
                      active === idx
                        ? 'bg-white dark:bg-gray-800 text-[#0055ff] dark:text-white ring-1 ring-slate-200 dark:ring-gray-700'
                        : 'text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200 hover:bg-white/60 dark:hover:bg-gray-800/60'
                    )}
                  >
                    {/* 激活指示条 */}
                    <div
                      className={clsx(
                        'absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0055ff] rounded-r-full transition-all duration-300',
                        active === idx ? 'opacity-100' : 'opacity-0'
                      )}
                    ></div>

                    <t.icon
                      className={clsx(
                        'h-6 w-6 mr-4 transition-colors shrink-0',
                        active === idx
                          ? 'text-[#0055ff] dark:text-blue-400'
                          : 'text-slate-400 group-hover:text-slate-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                      )}
                    />
                    <span className="text-lg font-medium truncate">
                      {t.name}
                    </span>

                    {/* 箭头 */}
                    <ChevronRightIcon
                      className={clsx(
                        'ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 hidden lg:block',
                        active === idx
                          ? 'opacity-100 translate-x-0 text-gray-400'
                          : ''
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* 内容面板 */}
          <section className="relative z-10 flex-1 p-6 sm:p-8 lg:p-12 flex flex-col overflow-hidden">
             <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                {/* 头部信息 */}
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                    {currentTab.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#0055ff] to-blue-400 rounded-full"></div>
                </div>

                {/* 功能网格 */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 content-start mb-8">
                  {currentTab.features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-slate-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#0055ff] dark:text-blue-400 group-hover:bg-[#0055ff] group-hover:text-white transition-all duration-300">
                          <f.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 text-slate-900 dark:text-white group-hover:text-[#0055ff] dark:group-hover:text-blue-400 transition-colors">
                          {f.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <a
                          href="https://cloud.buidai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-gray-300 bg-slate-100 dark:bg-gray-700 hover:bg-[#0055ff] hover:text-white rounded-lg transition-all"
                        >
                          立即创作
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 底部操作栏 */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-gray-800 flex flex-wrap gap-4">
                  <button
                    onClick={() => openQrModal('solution')}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 dark:text-white bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg transition-all hover:bg-slate-50 dark:hover:bg-gray-700 hover:border-slate-300 dark:hover:border-gray-600"
                  >
                    了解方案详情
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>

                  <button
                    onClick={() => openQrModal('consult')}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-600 dark:text-gray-300 bg-transparent hover:bg-slate-50 dark:hover:bg-gray-800 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 rounded-lg transition-all"
                  >
                    联系售前咨询
                    <ChatBubbleLeftRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
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
}
