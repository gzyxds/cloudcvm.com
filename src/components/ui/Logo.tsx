import Image, { type ImageProps } from 'next/image'

/**
 * Logo 组件：使用 Next.js 的 Image 渲染站点 Logo。
 * 设计思路：
 * - 组件内部固定 src/alt/width/height，保证尺寸与语义稳定，避免被外部覆盖导致布局抖动。
 * - 仅向下传递除 src/alt/width/height 之外的 ImageProps（如 className、priority、sizes 等）。
 * 技术考量：
 * - 将 props 的类型从 SVG 的 props 切换为 ImageProps，避免把针对 SVG 的事件处理器（如 onKeyDown 的 SVG 类型）传播到 HTMLImageElement，引发 TS2322 类型不兼容。
 * 潜在影响：
 * - 若调用方之前向 Logo 传递了 SVG 专属属性，将不再生效；应改为传递 Image 支持的属性。
 * @param props 允许的 Image 属性（不包含 src/alt/width/height）
 * @returns 站点 Logo 图片
 */
export function Logo(props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>) {
  // 使用 Image 组件加载外部 SVG 文件
  // Header 内固定可见（首屏），加 priority 避免被判定为未优化的 LCP 元素
  return (
    <Image src="/images/logos/logo.svg" alt="优刻云" width={109} height={40} priority {...props} />
  )
}
