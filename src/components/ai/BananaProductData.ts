/**
 * Banana 产品系列数据配置
 * 集中管理 12 个 AI 产品的特性数据，由 BananaProductPage 共享组件消费
 */

// ==================== 产品 ID 类型 ====================
export type BananaProductId =
  | 'banana' | 'drama' | 'jimeng' | 'jmdraw'
  | 'manju' | 'model' | 'music' | 'ppt'
  | 'resume' | 'sora' | 'videoclip' | 'xhs'

// ==================== 图标名称映射 ====================
/** 图标字符串名 → Heroicon 组件的映射（在共享组件中解析） */
export type IconName = string

export interface ProductFeature {
  title: string
  desc: string
  icon: IconName
}

export interface FeaturePoint {
  title: string
  desc: string
}

export interface FeatureDetail {
  title: string
  desc: string
  activePoint: number
  points: FeaturePoint[]
  image: string
}

export interface Review {
  content: string
  author: string
  role: string
}

export interface BananaProductConfig {
  /** 产品 ID */
  id: BananaProductId
  /** 新品标签文本（如 "Nanobanana 香蕉绘画 2.0 发布"）*/
  newBadge: string
  /** Hero 标题 HTML（支持 <span> 高亮） */
  heroTitle: React.ReactNode
  /** Hero 描述段落 */
  heroDesc: React.ReactNode
  /** Hero 区域展示图片 */
  heroImage: string
  /** 功能网格区域标题 */
  featuresTitle: string
  /** 功能网格区域描述 */
  featuresDesc: string
  /** 功能网格卡片列表（6 项） */
  features: ProductFeature[]
  /** 功能详情板块列表（通常 3 项） */
  featureDetails: FeatureDetail[]
  /** CTA 区域标题 */
  ctaTitle: string
  /** CTA 区域描述 */
  ctaDesc: string
}
