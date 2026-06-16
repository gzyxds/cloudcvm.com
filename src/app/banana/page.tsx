import type { Metadata } from 'next'
import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

// ==================== Metadata ====================
export const metadata: Metadata = {
  title: { absolute: 'Nanobanana 香蕉绘画 - 开源免费的 AI 图像生成系统 | 智言AI' },
  description:
    '智言AI Nanobanana 香蕉绘画平台提供一站式 AI 图像创作解决方案。基于 Gemini 3 Pro Image Preview 模型,支持高质量文生图、图生图及多图融合。预置多个模板开箱即用,保持角色一致性,支持文本渲染,生成速度极快。提供完整源码与私有化部署支持,助力企业低成本打造专属 AI 绘画应用。',
  keywords: 'Nanobanana,香蕉绘画,AI绘画,文生图,图生图,多图融合,Gemini 3 Pro,图像生成模型,智言AI,开源AI系统,私有化部署,AI绘画工具',
  openGraph: {
    title: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | 智言AI',
    description: '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合。预置模板开箱即用,保持角色一致性,生成速度极快,提供完整源码。',
    images: ['/product/human-1.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanobanana 香蕉绘画 - 打造您的专属 AI 绘画平台 | 智言AI',
    description: '基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,支持文生图、图生图与多图融合,预置模板开箱即用。',
    images: ['/product/human-1.png'],
  },
}

// ==================== Main Page Component ====================
export default function BananaPage() {
  return (
    <>
      <Header />
      <main>
        <BananaProductPage
          badgeText="Nanobanana 香蕉绘画 2.0 发布"
          heroTitle={<>打造您的 <span className="text-[#0055ff]">专属 AI 绘画世界</span></>}
          heroDesc={<>基于 Gemini 3 Pro Image Preview 的新一代 AI 绘画平台,一键生成高质量图像。<br className="hidden sm:block" />预置模板开箱即用,保持角色一致性,开启智能绘画创作新时代。</>}
          heroImage="/images/aisolution/banana-1.webp"
          featuresTitle="全能型 Nanobanana 香蕉绘画平台"
          featuresDesc="集文生图、图生图、多图融合于一体,为您提供一站式解决方案"
          features={[
            { title: '文生图（Text-to-Image）', desc: '基于 Gemini 3 Pro Image Preview 模型,只需输入自然语言提示词,即可生成高质量图像。', icon: 'DocumentText' },
            { title: '图生图（Image-to-Image）', desc: '上传 1-5 张参考图片,结合提示词生成新图像,保持风格与主体一致性。', icon: 'Photo' },
            { title: '多图融合', desc: '支持多张图片智能融合,理解图片中物体的逻辑关系,生成更加丰富的画面。', icon: 'Sparkles' },
            { title: '角色一致性保持', desc: '有效保持角色一致性,支持固定角色、画风与色调,沉淀品牌专属视觉资产。', icon: 'User' },
            { title: '文本渲染', desc: '强大的文本渲染能力,支持在图像中生成清晰准确的文字内容。', icon: 'Pencil' },
            { title: '预置模板开箱即用', desc: '预置多个绘画模板,开箱即用,后台可自由配置提示词、封面和参考图数量。', icon: 'Cube' },
          ]}
          featureDetails={[
            {
              title: '文生图：用文字直接创造精美图像',
              desc: '基于 Gemini 3 Pro Image Preview 模型的文生图能力,只需输入提示词,即可生成高质量图像。生成速度极快,让创意瞬间变为现实。',
              activePoint: 0,
              points: [
                { title: '自然语言提示词', desc: '支持自然语言描述,无需专业绘画技能,用文字即可表达创意想法。' },
                { title: '高质量图像输出', desc: '基于 Gemini 3 Pro Image Preview 模型,生成细节丰富、色彩饱满的高质量图像。' },
                { title: '极速生成体验', desc: '生成速度非常快,大幅缩短等待时间,提升创作效率。' },
                { title: '风格与角色可复用', desc: '支持固定角色、画风与色调,沉淀品牌专属视觉资产,持续迭代系列内容。' },
              ],
              image: '/images/aisolution/banana-1.webp',
            },
            {
              title: '图生图：让参考图成为创作起点',
              desc: '支持上传 1-5 张参考图片,结合提示词生成新图像。保持角色一致性,理解图片中物体的逻辑关系,让创作更加精准。',
              activePoint: 0,
              points: [
                { title: '多图参考输入', desc: '支持上传 1-5 张参考图片,提供更丰富的创作素材和灵感来源。' },
                { title: '角色一致性保持', desc: '有效保持角色一致性,确保生成图像中的角色特征与参考图高度一致。' },
                { title: '智能逻辑理解', desc: '能够理解图片中物体的逻辑关系,生成更加合理、自然的画面。' },
                { title: '风格与细节传承', desc: '从参考图中学习风格、构图和细节,生成与原图风格协调的新图像。' },
              ],
              image: '/images/aisolution/banana-1.webp',
            },
            {
              title: '模板配置与后台管理：开箱即用的企业级方案',
              desc: '预置多个绘画模板,开箱即用。后台支持自由配置提示词、封面和参考图数量,可查看生成记录和积分消耗情况,满足企业级管理需求。',
              activePoint: 0,
              points: [
                { title: '预置模板开箱即用', desc: '预置多个绘画模板,无需配置即可使用,快速上手,降低学习成本。' },
                { title: '灵活的模板配置', desc: '后台可自由配置生图模板的提示词、封面和参考图数量,满足不同场景需求。' },
                { title: '生成记录与积分管理', desc: '后台可查看生成记录和积分消耗情况,支持配置用户生成消耗积分和是否免费。' },
                { title: '自定义应用名称', desc: '后台可自由修改应用在前台显示的名称,打造品牌专属体验。' },
              ],
              image: '/images/aisolution/banana-1.webp',
            },
          ]}
          ctaTitle="准备好开始创作了吗？"
          ctaDesc="立即加入 智言AI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的AI应用。"
        />
      </main>
      <Footer />
    </>
  )
}
