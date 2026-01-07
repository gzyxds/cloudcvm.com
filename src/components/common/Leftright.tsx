'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

/**
 * 解决方案数据接口
 */
interface SolutionItem {
  id: string
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  link?: string
  theme: 'dark' | 'light'
}

/**
 * 解决方案分类接口
 */
interface SolutionCategory {
  id: string
  name: string
  items: SolutionItem[]
}

// 数据源定义
const solutionsData: SolutionCategory[] = [
  {
    id: 'industry',
    name: '行业解决方案',
    items: [
      {
        id: 'auto',
        title: '汽车',
        description: '优刻云携手合作伙伴，基于云计算、大数据、AI、5G等前沿技术，赋能汽车产业数智升级，共建智能汽车新生态',
        imageUrl: '/images/screenshots/solution-industry-auto.jpg',
        theme: 'dark'
      },
      {
        id: 'finance',
        title: '金融',
        description: '通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新，实现数字化转型',
        imageUrl: '/images/screenshots/solution-industry-finance.jpg',
        theme: 'dark'
      },
      {
        id: 'medical',
        title: '医疗',
        description: '基于优刻云高性能、高可靠、高安全的数字化底座，携手医疗伙伴，为客户提供完善的医疗应用和服务体系',
        imageUrl: '/images/screenshots/solution-industry-medical.jpg',
        theme: 'dark'
      },
      {
        id: 'manufacturing',
        title: '制造',
        description: '华为工业互联网平台FusionPlant，助力企业实现业务在云上敏捷开发，边缘可信运行，持续释放潜在业务价值',
        imageUrl: '/images/screenshots/solution-industry-manufacturing.jpg',
        theme: 'light'
      },
      {
        id: 'education',
        title: '教育',
        description: '面向市/区/县教育局及辖区内中小学提供场景化解决方案，将智慧化教育带给每个学校、每个家庭、每个孩子',
        imageUrl: '/images/screenshots/solution-industry-education.jpg',
        theme: 'dark'
      },
      {
        id: 'government',
        title: '政府',
        description: '聚焦政务与城市数字化，面向场景进行流程再造与优化，真正提升人民的获得感、幸福感和安全感',
        imageUrl: '/images/screenshots/solution-industry-government.jpg',
        theme: 'dark'
      }
    ]
  },
  {
    id: 'general',
    name: '通用解决方案',
    items: [
      {
        id: 'data-enablement',
        title: '优刻云数据使能解决方案',
        description: '以数据治理为基础，数据智能为动力，释放数据价值，助力各行各业数字化转型',
        imageUrl: '/images/screenshots/solution-general-data-enablement.jpg',
        theme: 'dark'
      },
      {
        id: 'sap',
        title: 'SAP上云解决方案',
        description: '支持S/4 ERP、Business one等SAP系统上云，帮助企业实现极简运维与智慧运营',
        imageUrl: '/images/screenshots/solution-general-sap.jpg',
        theme: 'dark'
      },
      {
        id: 'data-circulation',
        title: '优刻云数据要素流通解决方案',
        description: '提供可信、可控、可证的数据要素流通基础设施，支撑高质量数据供给，促进合规高效数据流通',
        imageUrl: '/images/screenshots/solution-general-data-circulation.jpg',
        theme: 'dark'
      },
      {
        id: 'digital-marketing',
        title: '数字化营销解决方案',
        description: '提升用户增长运营效益，构建渠道&门店数字化能力，实现全面营销数字化转型',
        imageUrl: '/images/screenshots/solution-general-digital-marketing.jpg',
        theme: 'light'
      },
      {
        id: 'growth-enterprise',
        title: '优刻云成长型企业数字化转型包',
        description: '联合业界知名应用厂商，针对成长型企业市场推出的系列化数字化转型包',
        imageUrl: '/images/screenshots/solution-general-growth-enterprise.jpg',
        theme: 'dark'
      }
    ]
  },
  {
    id: 'practice',
    name: '解决方案实践',
    items: [
      {
        id: 'dify',
        title: '快速搭建Dify-LLM应用开发平台',
        description: '云上快速部署单机版、高可用版Dify LLM应用开发平台，使开发者可以快速搭建生产级的生成式AI应用',
        imageUrl: '/images/screenshots/solution-practice-dify.jpg',
        theme: 'light'
      },
      {
        id: 'embedding',
        title: '部署Embedding及Reranker模型',
        description: '通过优刻云Flexus云服务器X实例高效部署Embedding和Reranker模型，助力快速搭建企业专属知识库',
        imageUrl: '/images/screenshots/solution-practice-embedding.jpg',
        theme: 'dark'
      },
      {
        id: 'data-insight',
        title: '快速体验智能问数',
        description: '实现从用户自然语言提问到智能数据查询、分析与可视化反馈的工作流系统，为企业构建自动化数据洞察助手',
        imageUrl: '/images/screenshots/solution-practice-data-insight.jpg',
        theme: 'dark'
      },
      {
        id: 'digital-human',
        title: '数字人交互智能问答解决方案',
        description: '基于优刻云数字内容生产线 MetaStudio，ModelArts Studio大模型即服务平台和Dify快速部署数字人交互服务',
        imageUrl: '/images/screenshots/solution-practice-digital-human.jpg',
        theme: 'light'
      },
      {
        id: 'ocr',
        title: '文字识别-发票识别与验真',
        description: '基于优刻云文字识别 OCR增值税发票识别与发票验真技术构建，自动识别和录入增值税发票各字段信息，实现财税报销自动化',
        imageUrl: '/images/screenshots/solution-practice-ocr.jpg',
        theme: 'light'
      },
      {
        id: 'ha-web',
        title: '高可用网站架构云化',
        description: '快速在优刻云上部署高可用的云上网站架构，支持业务流量跨可用区进行分发，并具备跨可用区故障容灾的能力',
        imageUrl: '/images/screenshots/solution-practice-ha-web.jpg',
        theme: 'light'
      }
    ]
  }
]

// 容器动画变体：用于控制子元素的 stagger 效果
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // 稍微加快交错速度
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

// 列表项动画变体：从下往上浮现
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easeOutQuint for smooth feel
    }
  }
}

/**
 * 解决方案展示组件
 * 100% 复刻还原参考设计
 */
export function Leftright() {
  const [activeTab, setActiveTab] = useState('industry')

  const activeCategory = solutionsData.find(c => c.id === activeTab) || solutionsData[0]

  return (
    <section className="bg-white py-24 sm:py-32 min-h-screen flex flex-col justify-center">
      <Container>
        {/* 顶部标题 */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-6xl mb-6">
            成熟行业实践，释放云上数字生产力
          </h2>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            汇聚各行业数字化转型成功经验，提供场景化解决方案，助力企业降本增效，加速业务创新
          </p>
        </div>

        {/* Tab 导航 */}
        <div className="flex justify-center mb-16 sm:mb-24">
          <div className="inline-flex space-x-12 border-b border-gray-100">
            {solutionsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={clsx(
                  'pb-5 text-lg font-medium transition-colors relative px-4',
                  activeTab === category.id
                    ? 'text-[#0055ff]'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                )}
              >
                {category.name}
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* 解决方案卡片列表 - 全屏通栏布局 */}
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 2xl:gap-8"
          >
            {activeCategory.items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={clsx(
                  "group relative h-[60vh] min-h-[500px] max-h-[800px] overflow-hidden rounded-2xl cursor-pointer",
                  "border border-slate-200/60 bg-white", // 基础边框
                  "hover:border-[#0055ff]/30 hover:shadow-[0_20px_40px_-12px_rgba(0,85,255,0.15)]", // Hover 状态：淡蓝边框 + 柔和发光阴影
                  "transition-all duration-500 ease-out"
                )}
              >
                {/* 背景图片 */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw"
                  priority={true}
                />

                {/* 渐变遮罩：增加底部深度，确保文字清晰 */}
                <div className={clsx(
                  "absolute inset-0 transition-opacity duration-500",
                  item.theme === 'dark'
                    ? "bg-gradient-to-b from-black/10 via-black/30 to-black/90"
                    : "bg-gradient-to-b from-black/5 via-black/10 to-black/70"
                )} />

                {/* 内容区域 */}
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
                  <h3 className={clsx(
                    "text-3xl font-bold mt-2 transition-transform duration-500 group-hover:-translate-y-2",
                    "text-white drop-shadow-md tracking-tight"
                  )}>
                    {item.title}
                  </h3>

                  <div className="transform translate-y-4 transition-transform duration-500 group-hover:-translate-y-6">
                    <p className={clsx(
                      "text-lg leading-relaxed line-clamp-4 mb-6 opacity-90 font-medium",
                      "text-white/90 drop-shadow-sm"
                    )}>
                      {item.description}
                    </p>

                    {/* 箭头图标 */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-75">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#0055ff] transition-colors duration-300">
                        <ChevronRightIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装饰：顶部高光条 (模拟玻璃反光) */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Container>
        {/* 底部链接 */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center px-10 py-4 rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0055ff] hover:text-[#0055ff] transition-all duration-300 shadow-sm hover:shadow-lg text-lg font-medium group"
          >
            查看所有解决方案
            <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  )
}
