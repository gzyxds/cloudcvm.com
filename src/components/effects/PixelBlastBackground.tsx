'use client'

import dynamic from 'next/dynamic'

// three.js + postprocessing 约 200KB(gzip)，仅 /human 页作装饰背景。
// 动态导入且不参与 SSR（Server Component 不允许 ssr:false，故包在这层
// 客户端小岛里），避免拖慢首屏与构建产物体积。
const PixelBlast = dynamic(() => import('@/components/effects/PixelBlast'), {
  ssr: false,
})

/**
 * /human 页英雄区背景特效的固定配置小岛（2026-10-05 自页面抽取）。
 * 服务端 HeroSection 直接放置本组件，客户端只水合这一小块，
 * 整页不再需要 'use client'。
 */
export function PixelBlastBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <PixelBlast
        variant="diamond"
        pixelSize={3}
        color="var(--color-ai-accent)"
        patternScale={2}
        patternDensity={1}
        enableRipples
        rippleSpeed={0.3}
        rippleThickness={0.1}
        rippleIntensityScale={1}
        speed={0.9}
        transparent
        edgeFade={0.25}
      />
    </div>
  )
}

export default PixelBlastBackground
