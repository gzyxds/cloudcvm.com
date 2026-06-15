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

function ImagePreview({ imageUrl, title }: { imageUrl: string, title: string }) {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[520px] rounded-xl overflow-hidden border border-[#E2E8F0] bg-gradient-to-br from-[#eff6ff] via-white to-[#f8fafc]">
      {/* 装饰背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0055ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* 骨架屏 */}
      <div className="absolute inset-0 bg-slate-100/50 animate-pulse" />

      {/* 图片 */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center transition-opacity duration-500 relative z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        priority
      />

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent z-20" />
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
    <section className="bg-gradient-to-b from-white via-[#f8fafc] to-white py-16 sm:py-20 lg:py-28">
      <Container>

        {/* 标题 */}
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            多样的<span className="text-[#0055ff]">大模型应用场景</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#64748B] leading-relaxed">
            基于先进的自研架构，为您提供全方位的云端基础设施服务，助力业务快速实现数字化转型。
          </p>
        </motion.div>

        {/* Tab 导航栏 */}
        <div className="flex justify-start mb-8 sm:mb-10 lg:mb-14 overflow-x-auto no-scrollbar border-b border-[#E2E8F0]">
          <div className="inline-flex w-full">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  onMouseEnter={() => handleTabHover(cat.id)}
                  onMouseLeave={handleTabLeave}
                  className={clsx(
                    "relative flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors duration-200 whitespace-nowrap flex-1",
                    isActive
                      ? "text-[#0055ff]"
                      : "text-[#64748B] hover:text-[#0F172A]"
                  )}
                >
                  <cat.icon className={clsx("w-4 h-4 sm:w-5 sm:h-5 transition-colors", isActive ? "text-[#0055ff]" : "text-[#94a3b8]")} />
                  {cat.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff]" />
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
                        className="w-full flex items-center justify-between group text-left py-3 sm:py-4 focus:outline-none"
                      >
                        <span className={clsx(
                          "text-base sm:text-lg lg:text-xl transition-colors duration-300",
                          isOpen ? "text-[#0055ff] font-bold" : "text-[#0F172A] font-medium group-hover:text-[#0055ff]"
                        )}>
                          {item.title}
                        </span>
                        <div className={clsx(
                          "transition-transform duration-300",
                          isOpen ? "text-[#0055ff]" : "text-[#94A3B8] group-hover:text-[#64748B]"
                        )}>
                          {isOpen ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
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
                            <p className="text-sm sm:text-[15px] lg:text-base text-[#64748B] leading-relaxed mb-4 sm:mb-5">
                              {item.description}
                            </p>

                            {/* 移动端按钮 */}
                            <div className="flex items-center gap-3 lg:hidden">
                              <Button
                                href="/chat"
                                color="blue"
                                variant="erlieSolid"
                                className="rounded-lg px-5 py-2 text-xs sm:text-sm font-semibold"
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
            <div className="hidden lg:flex items-center gap-4 mt-8">
              <Button
                href="/chat"
                color="blue"
                variant="erlieSolid"
                className="rounded-lg px-8 py-3 text-sm font-semibold"
              >
                立即体验
              </Button>
              <Button
                href="/chat"
                variant="erlieOutline"
                color="slate"
                className="rounded-lg px-8 py-3 text-sm font-semibold"
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
