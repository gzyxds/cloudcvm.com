import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

export const metadata: Metadata = {
  title: { absolute: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 智言AI' },
  description: '智言AI Wan漫剧是一款智能AI视频生成工具，服务于创作者、动画爱好者及视觉工作者。提供&ldquo;角色主演&rdquo;和&ldquo;首尾帧生成&rdquo;两大创作模式，支持上传真人或虚拟形象作为模板，快速生成定制视频。无需专业门槛，轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。基于开源技术构建，提供完整源码与私有化部署支持。',
  keywords: 'Wan漫剧,角色模板视频生成,首尾帧动画生成,AI视频生成,角色主演,智能视频创作,必定AI,智言AI,视频制作工具,开源AI系统,私有化部署,视频生成源码,多镜头叙事',
  openGraph: { title: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 智言AI', description: '智能AI视频生成工具，支持角色主演和首尾帧生成两大创作模式，轻松实现角色化叙事与自由视觉创作，助力高效产出高质量动态内容。', images: ['/images/aisolution/wanxiang.webp'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Wan漫剧 - 角色模板视频生成与首尾帧动画创作工具 | 智言AI', description: '智能AI视频生成工具，支持角色主演和首尾帧生成两大创作模式，无需专业门槛，轻松实现角色化叙事与自由视觉创作。', images: ['/images/aisolution/wanxiang.webp'] },
}

export default function ManjuPage() {
  return (<><Header /><main><BananaProductPage
    badgeText="Wan漫剧 2.0 发布"
    heroTitle={<>打造您的<span className="text-[#0055ff]">专属 AI 视频世界</span></>}
    heroDesc={<>Wan漫剧是一款智能 AI 视频生成工具，服务于创作者、动画爱好者及视觉工作者。<br className="hidden sm:block" />提供&ldquo;角色主演&rdquo;和首尾帧生成两大创作模式，轻松实现角色化叙事与自由视觉创作。</>}
    heroImage="/images/aisolution/wanxiang.webp"
    featuresTitle=""
    featuresDesc="集角色模板视频生成、首尾帧动画生成、专业镜头配置于一体，为您提供一站式解决方案"
    features={[
      { title: '角色模板视频生成', desc: '上传人物或角色形象作为模板并自动保存至个人角色库，可重复调用，快速生成以该角色为主角的定制化叙事视频。', icon: 'User' },
      { title: '首尾帧动画生成', desc: '设定起始与结束画面，智能生成流畅过渡的动态视频，简化动画创作流程，无需专业门槛即可制作高质量动画。', icon: 'Photo' },
      { title: '分辨率与时长自定义', desc: '支持多种分辨率与视频时长选择，适配不同平台发布与使用场景需求，满足各种创作需求。', icon: 'Cube' },
      { title: '专业镜头与光影配置', desc: '内置运镜轨迹、景别切换及光影效果模板，一键提升视频电影感与表现力，让作品更具专业水准。', icon: 'Sparkles' },
      { title: '智能提示词优化扩写', desc: '自动优化用户输入的文本描述，丰富细节并提升 AI 生成内容的质量与准确性，让创作更加精准高效。', icon: 'DocumentText' },
      { title: '多镜头叙事', desc: '支持多镜头组合叙事，通过智能镜头切换和场景转换，打造更加生动丰富的故事内容。', icon: 'Pencil' },
    ]}
    featureDetails={[
      { title: '角色模板视频生成，打造专属IP', desc: '上传人物或角色形象作为模板并自动保存至个人角色库，可重复调用，快速生成以该角色为主角的定制化叙事视频。无需专业门槛，轻松实现角色化叙事，助力高效产出高质量动态内容。', activePoint: 0, points: [{ title: '角色模板上传', desc: '支持上传真人或虚拟形象作为模板，自动保存至个人角色库，方便重复使用。' }, { title: '角色库管理', desc: '个人角色库可存储多个角色模板，随时调用，满足不同创作场景需求。' }, { title: '定制化叙事视频', desc: '基于角色模板快速生成定制化叙事视频，让角色成为故事的主角。' }, { title: '角色一致性保障', desc: '有效保持角色特征一致性，确保生成视频中的角色形象与模板高度一致。' }], image: '/images/aisolution/wanxiang.webp' },
      { title: '首尾帧动画生成，简化创作流程', desc: '设定起始与结束画面，智能生成流畅过渡的动态视频，简化动画创作流程。无需专业动画技能，即可轻松实现角色化叙事与自由视觉创作，大幅提升创作效率。', activePoint: 0, points: [{ title: '首尾帧设定', desc: '设定起始与结束画面，智能生成流畅过渡的动态视频，简化动画创作流程。' }, { title: '智能过渡生成', desc: 'AI 智能生成流畅的过渡动画，让画面切换自然流畅，提升观看体验。' }, { title: '无需专业门槛', desc: '无需专业动画技能，即可轻松实现角色化叙事与自由视觉创作。' }, { title: '高效创作流程', desc: '大幅简化动画创作流程，提升创作效率，让创意快速落地。' }], image: '/images/aisolution/wanxiang.webp' },
      { title: '专业镜头与光影配置，提升电影质感', desc: '内置运镜轨迹、景别切换及光影效果模板，一键提升视频电影感与表现力。支持多种分辨率与视频时长选择，适配不同平台发布与使用场景需求，让作品更具专业水准。', activePoint: 0, points: [{ title: '运镜轨迹模板', desc: '内置多种运镜轨迹模板，包括推拉摇移等专业运镜效果，一键应用。' }, { title: '景别切换', desc: '支持多种景别切换，包括远景、中景、近景、特写等，丰富画面表现力。' }, { title: '光影效果模板', desc: '内置多种光影效果模板，包括日景、夜景、黄昏等，营造不同氛围。' }, { title: '分辨率与时长自定义', desc: '支持多种分辨率与视频时长选择，适配不同平台发布与使用场景需求。' }], image: '/images/aisolution/wanxiang.webp' },
    ]}
    ctaTitle="准备好开始创作了吗？"
    ctaDesc="立即加入 智言AI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。"
  /></main><Footer /></>)
}
