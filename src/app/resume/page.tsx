import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

export const metadata: Metadata = {
  title: { absolute: 'AI简历 - 开源免费的智能简历生成与分析系统 | 必定AI-BuidAI' },
  description: '必定AI-BuidAI AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI研发的智能文案生成平台。通过简单的基本信息输入，即可快速生成结构完整的个人简历。并可基于已有内容进行深度解析，评估亮点并提供优化建议。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'AI简历,智能简历,简历生成,简历分析,简历优化,简历模板,必定AI,BuidAI,简历制作工具,开源AI系统,私有化部署,简历源码',
  openGraph: { title: 'AI简历 - 一键生成智能分析 | 必定AI-BuidAI', description: '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。通过简单的基本信息输入，即可快速生成结构完整的个人简历。', images: ['/product/resume.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AI简历 - 一键生成智能分析 | 必定AI-BuidAI', description: '致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。', images: ['/product/resume.png'] },
}

export default function ResumePage() {
  return (<><Header /><main><BananaProductPage
    badgeText="AI简历 2.0 发布"
    heroTitle={<>一键生成 <span className="text-[#0055ff]">智能分析</span></>}
    heroDesc={<>致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。<br className="hidden sm:block" />通过简单的基本信息输入，即可快速生成结构完整的个人简历。</>}
    heroImage="/images/aisolution/resume-4.png"
    featuresTitle=""
    featuresDesc="集智能问答、简历模板、在线编辑、模块管理、AI分析于一体，为您提供一站式简历制作解决方案"
    features={[
      { title: '智能问答', desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。', icon: 'ChatBubbleLeftRight' },
      { title: '简历模板', desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。', icon: 'RectangleStack' },
      { title: '在线编辑', desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。', icon: 'Pencil' },
      { title: '模块管理', desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。', icon: 'SquaresPlus' },
      { title: 'AI分析', desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。', icon: 'Sparkles' },
      { title: '自定义配置', desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。', icon: 'Cog6Tooth' },
    ]}
    featureDetails={[
      { title: '智能问答，快速生成', desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。基于AI研发的智能文案生成平台，帮助您节省时间的同时，显著提升简历质量与影响力。', activePoint: 0, points: [{ title: '智能问答', desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。' }, { title: '快速生成', desc: '通过简单的基本信息输入，即可快速生成结构完整的个人简历，大幅提升制作效率。' }, { title: '内容优化', desc: '基于AI算法，自动优化简历内容，确保语言表达专业、逻辑清晰。' }, { title: '多格式导出', desc: '支持多种格式导出，如 PDF、Word 等，满足不同投递需求。' }], image: '/images/aisolution/resume-1.png' },
      { title: '简历模板，专业设计', desc: '提供数十款专业简历模板，涵盖不同行业和职位。支持在线编辑与下载，实时预览效果，随时调整优化内容。', activePoint: 0, points: [{ title: '丰富模板库', desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。' }, { title: '在线编辑', desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。' }, { title: '模块管理', desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。' }, { title: '自定义样式', desc: '支持自定义简历样式，包括字体、颜色、布局等，打造个性化简历。' }], image: '/images/aisolution/resume-2.png' },
      { title: 'AI分析，深度优化', desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。', activePoint: 0, points: [{ title: 'AI分析', desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。' }, { title: '优化建议', desc: '基于AI算法，提供针对性的优化建议，帮助提升简历质量和竞争力。' }, { title: '自定义配置', desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。' }, { title: '数据统计', desc: '后台可查看生成记录和积分消耗情况，全面掌握使用情况。' }], image: '/images/aisolution/resume-3.png' },
    ]}
    ctaTitle="准备好开始创作了吗？"
    ctaDesc="立即加入 BuidAI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。"
  /></main><Footer /></>)
}
