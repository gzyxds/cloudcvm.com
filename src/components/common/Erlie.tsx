'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Plus, Minus, Users, Cpu, GraduationCap, Headphones, Megaphone } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

// --- 类型定义 ---

interface SceneItem {
  id: string
  title: string
  description: string
  imageUrl: string
}

interface SceneCategory {
  id: string
  label: string
  icon: React.ElementType
  items: SceneItem[]
}

// --- 数据源 ---

const CATEGORIES: SceneCategory[] = [
  {
    id: 'social',
    label: '社交娱乐',
    icon: Users,
    items: [
      {
        id: 'social-emotion',
        title: '情感陪伴',
        description: '支持文本、语音、图像多种输入，多模态协同，丰富交流情境，提供更真实陪伴',
        imageUrl: '/images/screenshots/scene-emotion.webp'
      },
      {
        id: 'social-roleplay',
        title: '角色扮演',
        description: '灵活扮演各类角色，遵循人设逻辑，长期记忆记住用户喜好与过往交流，构建沉浸式互动体验',
        imageUrl: '/images/screenshots/scene-roleplay.webp'
      },
      {
        id: 'social-story',
        title: '剧情创作',
        description: '协同用户进行小说、剧本等创意写作，激发灵感，自动续写情节，打造个性化故事世界',
        imageUrl: '/images/screenshots/scene-story.webp'
      },
      {
        id: 'social-game',
        title: '游戏互动',
        description: '智能NPC对话、游戏攻略助手、实时对战分析，让游戏体验更加丰富有趣',
        imageUrl: '/images/screenshots/scene-smart-home.webp'
      },
    ],
  },
  {
    id: 'hardware',
    label: '硬件助手',
    icon: Cpu,
    items: [
      {
        id: 'hardware-smart-home',
        title: '智能家居',
        description: '语音控制全屋设备，智能场景联动，打造懂你的智慧生活空间',
        imageUrl: '/images/screenshots/scene-smart-home.webp'
      },
      {
        id: 'hardware-wearable',
        title: '穿戴设备',
        description: '健康监测，实时助手，随时随地提供贴心服务与数据分析',
        imageUrl: '/images/screenshots/scene-wearable.webp'
      },
      {
        id: 'hardware-robot',
        title: '机器人控制',
        description: '为服务机器人、工业机器人提供智能决策与自主导航能力',
        imageUrl: '/images/screenshots/scene-emotion.webp'
      },
      {
        id: 'hardware-vehicle',
        title: '车载系统',
        description: '智能语音交互、导航规划、车况监测，让出行更加安全便捷',
        imageUrl: '/images/screenshots/scene-roleplay.webp'
      },
    ],
  },
  {
    id: 'education',
    label: '学习教育',
    icon: GraduationCap,
    items: [
      {
        id: 'education-tutor',
        title: 'AI 辅导',
        description: '个性化学习路径规划与答疑，针对薄弱点进行专项训练提升',
        imageUrl: '/images/screenshots/scene-emotion.webp'
      },
      {
        id: 'education-language',
        title: '语言学习',
        description: '沉浸式口语对练环境，实时纠正发音与语法，快速提升语言能力',
        imageUrl: '/images/screenshots/scene-roleplay.webp'
      },
      {
        id: 'education-knowledge',
        title: '知识问答',
        description: '覆盖多学科知识库，智能检索与解答，成为你的随身百科全书',
        imageUrl: '/images/screenshots/scene-story.webp'
      },
      {
        id: 'education-exam',
        title: '考试备考',
        description: '智能题库推荐、错题分析、考点预测，助你高效备战各类考试',
        imageUrl: '/images/screenshots/scene-smart-home.webp'
      },
    ],
  },
  {
    id: 'service',
    label: '客服与销售',
    icon: Headphones,
    items: [
      {
        id: 'service-support',
        title: '智能客服',
        description: '7x24小时自动应答，精准理解用户意图，高效解决各类咨询问题',
        imageUrl: '/images/screenshots/scene-story.webp'
      },
      {
        id: 'service-sales',
        title: '销售助手',
        description: '实时分析客户意向，智能推荐话术与策略，助力销售转化率提升',
        imageUrl: '/images/screenshots/scene-smart-home.webp'
      },
      {
        id: 'service-booking',
        title: '预约管理',
        description: '智能预约调度、自动提醒通知、冲突检测，优化服务流程效率',
        imageUrl: '/images/screenshots/scene-wearable.webp'
      },
      {
        id: 'service-feedback',
        title: '工单处理',
        description: '自动分类工单、智能分配处理人、跟踪进度，提升服务响应速度',
        imageUrl: '/images/screenshots/scene-emotion.webp'
      },
    ],
  },
  {
    id: 'marketing',
    label: '营销提效',
    icon: Megaphone,
    items: [
      {
        id: 'marketing-copywriting',
        title: '文案生成',
        description: '快速生成多渠道、多风格的营销文案，大幅提升内容生产效率',
        imageUrl: '/images/screenshots/scene-wearable.webp'
      },
      {
        id: 'marketing-poster',
        title: '海报设计',
        description: '一键智能生成营销海报与视觉素材，满足多样化品牌宣传需求',
        imageUrl: '/images/screenshots/scene-emotion.webp'
      },
      {
        id: 'marketing-analysis',
        title: '数据分析',
        description: '多维度营销数据分析、用户画像洞察、ROI预测，驱动精准营销决策',
        imageUrl: '/images/screenshots/scene-roleplay.webp'
      },
      {
        id: 'marketing-seo',
        title: 'SEO优化',
        description: '智能关键词分析、内容优化建议、排名监控，提升搜索引擎曝光',
        imageUrl: '/images/screenshots/scene-story.webp'
      },
    ],
  },
]

// --- 子组件：图片预览 (右侧) ---

/**
 * 图片预览组件
 * @param {string} imageUrl - 图片地址
 * @param {string} title - 图片标题
 */
function ImagePreview({ imageUrl, title }: { imageUrl: string, title: string }) {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:h-[400px] sm:aspect-auto sm:rounded-xl lg:h-[520px]">
      {/* 骨架屏 */}
      <div className="absolute inset-0 z-0 bg-slate-100 animate-pulse" />

      {/* 图片 */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="relative z-10 object-cover object-center transition-opacity duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        priority
      />
    </div>
  )
}

// --- 主组件 ---

export default function Erlie() {
  const [activeCategory, setActiveCategory] = useState<string>('social')
  const [activeItem, setActiveItem] = useState<string>('social-emotion')
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 获取当前分类的数据
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0]

  // 获取当前选中的项目数据
  const currentItem = currentCategory.items.find(i => i.id === activeItem) || currentCategory.items[0]

  /**
   * 切换分类时，默认选中第一个项目
   * @param {string} catId - 分类 ID
   */
  const handleCategoryChange = useCallback((catId: string) => {
    setActiveCategory(catId)
    const cat = CATEGORIES.find(c => c.id === catId)
    if (cat && cat.items.length > 0) {
      setActiveItem(cat.items[0].id)
    }
  }, [])

  /**
   * 处理 Tab 悬停事件
   * 使用防抖机制，延迟 100ms 切换
   * @param {string} catId - 分类 ID
   */
  const handleTabHover = useCallback((catId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      handleCategoryChange(catId)
    }, 100)
  }, [handleCategoryChange])

  /**
   * 处理鼠标离开 Tab 区域
   */
  const handleTabLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }, [])

  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-28" style={{ backgroundImage: 'url("/images/background/background-6.webp")' }}>
      <Container>

        {/* 标题 */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            大模型应用场景
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-slate-500 leading-relaxed">
            基于先进的自研架构，为您提供全方位的云端基础设施服务，助力业务快速实现数字化转型。
          </p>
        </motion.div>

        {/* Tab 导航栏 */}
        {/* Tab 导航栏 */}
        <div className="mb-6 sm:mb-10 lg:mb-14 overflow-x-auto scrollbar-hide border-b border-slate-200">
          <div className="flex min-w-full sm:min-w-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  onMouseEnter={() => handleTabHover(cat.id)}
                  onMouseLeave={handleTabLeave}
                  className={clsx(
                    "relative flex min-h-[44px] flex-1 items-center justify-center gap-1.5 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:gap-2 sm:px-6 sm:py-4 sm:text-base",
                    isActive
                      ? "text-brand-500"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  <cat.icon className={clsx("h-4 w-4 shrink-0 transition-colors sm:h-5 sm:w-5", isActive ? "text-brand-500" : "text-slate-400")} />
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* 内容区域：左侧手风琴 + 右侧预览 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* 左侧手风琴 */}
          <div className="lg:col-span-5 flex flex-col gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                suppressHydrationWarning
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {currentCategory.items.map((item, index) => {
                  const isOpen = activeItem === item.id
                  return (
                    <motion.div
                      suppressHydrationWarning
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={clsx(
                        "border-b border-[#E2E8F0] last:border-0 transition-all duration-300",
                        isOpen ? "pb-4 sm:pb-5" : "pb-3 sm:pb-4"
                      )}
                    >
                      <button
                        onClick={() => setActiveItem(item.id)}
                        className="group flex w-full items-center justify-between py-3 text-left focus:outline-none sm:py-4"
                      >
                        <span className={clsx(
                          "text-base transition-colors duration-300 sm:text-lg lg:text-xl",
                          isOpen ? "font-semibold text-brand-500" : "font-medium text-slate-900 group-hover:text-brand-500"
                        )}>
                          {item.title}
                        </span>
                        <div className={clsx(
                          "transition-transform duration-300",
                          isOpen ? "text-brand-500" : "text-slate-400 group-hover:text-slate-500"
                        )}>
                          {isOpen ? <Minus className="h-4 w-4 sm:h-5 sm:w-5" /> : <Plus className="h-4 w-4 sm:h-5 sm:w-5" />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            suppressHydrationWarning
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mb-4 text-sm leading-relaxed text-slate-500 sm:mb-5 sm:text-[15px] lg:text-base">
                              {item.description}
                            </p>

                            {/* 移动端按钮 */}
                            <div className="flex items-center gap-3 lg:hidden">
                              <Button
                                href="/chat"
                                color="blue"
                                variant="primary"
                                className="min-h-[44px] rounded-md px-5 text-xs font-semibold sm:text-sm"
                              >
                                立即体验
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* 桌面端按钮组 */}
            <div className="mt-8 hidden items-center gap-4 lg:flex">
              <Button
                href="/chat"
                color="blue"
                variant="primary"
                className="rounded-md px-8 py-3 text-sm font-semibold"
              >
                立即体验
              </Button>
              <Button
                href="/chat"
                variant="primaryOutline"
                color="slate"
                className="rounded-md px-8 py-3 text-sm font-semibold"
              >
                在线咨询
              </Button>
            </div>
          </div>

          {/* 右侧预览区 */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                suppressHydrationWarning
                key={currentItem.imageUrl}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <ImagePreview
                  imageUrl={currentItem.imageUrl}
                  title={currentItem.title}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  )
}
