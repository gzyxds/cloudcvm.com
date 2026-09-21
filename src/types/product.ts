/**
 * 商品数据接口 —— 全站统一的「可购买商品」结构
 *
 * 背景：此前在 `components/ai/data/products.ts` 与
 * `components/common/EcommerceProducts.tsx` 各定义一份且字段完全一致，
 * 改动任一处都要同步两遍，故收敛到 `types/`。
 *
 * 注意：另有 `ServiceTabs.tsx` 中的「服务卡片」类型也曾命名为 `Product`，
 * 但其结构是 `id / name / tags`，语义不同，已重命名为 `ServiceProduct`，
 * 不要与此接口混用。
 */
export interface Product {
  /** 商品主图路径 */
  image: string
  title: string
  /** 规格/版本副标题，如 `[PHP源码版]` */
  subtitle: string
  description: string
  features: string[]
  price: number
  originalPrice: number
  link: string
  rating: number
  sales: number
  buyLink: string
  /** 插件形态商品：展示与跳转逻辑略有差异 */
  isPlugin?: boolean
}
