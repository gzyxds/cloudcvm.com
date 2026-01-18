'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Plus, Minus, Users, Cpu, GraduationCap, Headphones, Megaphone } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/Container'

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
        id: 'emotion',
        title: '情感陪伴',
        description: '支持文本、语音、图像多种输入，多模态协同，丰富交流情境，提供更真实陪伴',
        imageUrl: '/images/screenshots/scene-emotion.jpg'
      },
      {
        id: 'roleplay',
        title: '角色扮演',
        description: '灵活扮演各类角色，遵循人设逻辑，长期记忆记住用户喜好与过往交流，构建沉浸式互动体验',
        imageUrl: '/images/screenshots/scene-roleplay.jpg'
      },
      {
        id: 'story',
        title: '剧情创作',
        description: '协同用户进行小说、剧本等创意写作，激发灵感，自动续写情节，打造个性化故事世界',
        imageUrl: '/images/screenshots/scene-story.jpg'
      },
    ],
  },
  {
    id: 'hardware',
    label: '硬件助手',
    icon: Cpu,
    items: [
      {
        id: 'smart-home',
        title: '智能家居',
        description: '语音控制全屋设备，智能场景联动，打造懂你的智慧生活空间',
        imageUrl: '/images/screenshots/scene-smart-home.jpg'
      },
      {
        id: 'wearable',
        title: '穿戴设备',
        description: '健康监测，实时助手，随时随地提供贴心服务与数据分析',
        imageUrl: '/images/screenshots/scene-wearable.jpg'
      },
    ],
  },
  {
    id: 'education',
    label: '学习教育',
    icon: GraduationCap,
    items: [
      {
        id: 'tutor',
        title: 'AI 辅导',
        description: '个性化学习路径规划与答疑，针对薄弱点进行专项训练提升',
        imageUrl: '/images/screenshots/scene-emotion.jpg'
      },
      {
        id: 'language',
        title: '语言学习',
        description: '沉浸式口语对练环境，实时纠正发音与语法，快速提升语言能力',
        imageUrl: '/images/screenshots/scene-roleplay.jpg'
      },
    ],
  },
  {
    id: 'service',
    label: '客服与销售',
    icon: Headphones,
    items: [
      {
        id: 'support',
        title: '智能客服',
        description: '7x24小时自动应答，精准理解用户意图，高效解决各类咨询问题',
        imageUrl: '/images/screenshots/scene-story.jpg'
      },
      {
        id: 'sales',
        title: '销售助手',
        description: '实时分析客户意向，智能推荐话术与策略，助力销售转化率提升',
        imageUrl: '/images/screenshots/scene-smart-home.jpg'
      },
    ],
  },
  {
    id: 'marketing',
    label: '营销提效',
    icon: Megaphone,
    items: [
      {
        id: 'copywriting',
        title: '文案生成',
        description: '快速生成多渠道、多风格的营销文案，大幅提升内容生产效率',
        imageUrl: '/images/screenshots/scene-wearable.jpg'
      },
      {
        id: 'poster',
        title: '海报设计',
        description: '一键智能生成营销海报与视觉素材，满足多样化品牌宣传需求',
        imageUrl: '/images/screenshots/scene-emotion.jpg'
      },
    ],
  },
]

// --- 子组件：图片预览 (右侧) ---

function ImagePreview({ imageUrl, title }: { imageUrl: string, title: string }) {
  return (
    <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
      {/* 骨架屏/背景色 */}
      <div className="absolute inset-0 bg-slate-50 animate-pulse" />

      {/* 图片 */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center transition-opacity duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        priority
      />
    </div>
  )
}

// --- 主组件 ---

export default function Erlie() {
  const [activeCategory, setActiveCategory] = useState<string>('social')
  const [activeItem, setActiveItem] = useState<string>('emotion')

  // 获取当前分类的数据
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0]

  // 获取当前选中的项目数据
  const currentItem = currentCategory.items.find(i => i.id === activeItem) || currentCategory.items[0]

  // 切换分类时，默认选中第一个项目
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId)
    const cat = CATEGORIES.find(c => c.id === catId)
    if (cat && cat.items.length > 0) {
      setActiveItem(cat.items[0].id)
    }
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-28">
      <Container>

        {/* 标题 */}
        <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-bold text-[#0055ff] mb-6 sm:mb-8 lg:mb-12 leading-tight">
          多样的大模型应用场景
        </h2>

        {/* Tab 导航栏 */}
        <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-3 mb-8 sm:mb-10 lg:mb-14 border-b border-slate-100 pb-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={clsx(
                  "relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm sm:text-[15px] lg:text-[16px] font-medium transition-all duration-300",
                  isActive
                    ? "text-[#0055ff] bg-blue-50/80 shadow-sm ring-1 ring-blue-100"
                    : "text-[#64748B] hover:text-[#1e293b] hover:bg-slate-50"
                )}
              >
                <cat.icon className={clsx("w-4 h-4 sm:w-5 sm:h-5 transition-colors", isActive ? "text-[#0055ff]" : "text-[#94a3b8] group-hover:text-[#64748b]")} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* 内容区域：左侧手风琴 + 右侧预览 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* 左侧手风琴 - 宽度占比调整 */}
          <div className="lg:col-span-4 flex flex-col gap-1">
            {currentCategory.items.map((item) => {
              const isOpen = activeItem === item.id
              return (
                <div
                  key={item.id}
                  className={clsx(
                    "border-b border-slate-100 last:border-0 transition-all duration-300",
                    isOpen ? "pb-4 sm:pb-6" : "pb-3 sm:pb-4"
                  )}
                >
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className="w-full flex items-center justify-between group text-left py-3 sm:py-4 focus:outline-none"
                  >
                    <span className={clsx(
                      "text-lg sm:text-[20px] lg:text-[22px] transition-colors duration-300",
                      isOpen ? "text-[#0055ff] font-bold" : "text-[#4e5969] font-medium group-hover:text-[#0055ff]"
                    )}>
                      {item.title}
                    </span>
                    <div className={clsx(
                      "transition-transform duration-300 text-[#86909c]",
                      isOpen ? "rotate-0 text-[#0055ff]" : "group-hover:text-[#4e5969]"
                    )}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-[15px] lg:text-[16px] text-[#4e5969] leading-relaxed mb-4 sm:mb-6">
                          {item.description}
                        </p>

                        {/* 移动端显示的按钮组 */}
                        <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
                           <button className="px-5 py-2 sm:px-6 bg-[#0055ff] text-white text-xs sm:text-sm font-medium rounded-sm shadow-sm hover:bg-[#0044cc]">
                             立即体验
                           </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}

            {/* 桌面端按钮组 */}
            <div className="hidden lg:flex items-center gap-4 mt-10">
              <button className="px-8 py-3 bg-[#0055ff] text-white text-[15px] font-medium rounded-sm hover:bg-[#0044cc] transition-all shadow-md hover:shadow-lg shadow-blue-500/20">
                立即体验
              </button>
              <button className="px-8 py-3 bg-white text-[#4e5969] border border-[#e5e6eb] text-[15px] font-medium rounded-sm hover:text-[#1d2129] hover:border-[#c9cdd4] transition-all hover:bg-[#eff6ff]/50">
                在线咨询
              </button>
            </div>
          </div>

          {/* 右侧预览区 - 宽度占比调整 */}
          <div className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.imageUrl}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
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
