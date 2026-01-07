'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { seoConfig } from '@/config/seo.config'

/**
 * 统计分析组件
 * 集成统计工具：百度统计、Microsoft Clarity
 * 符合 Next.js 15 + React 19 项目规范
 * 
 * @returns JSX 元素或 null
 */
export default function Analytics() {
  const { baidu, clarity } = seoConfig.analytics


  // 确保 Hooks 在组件顶层调用，不受条件影响
  useEffect(() => {
    // 确保在客户端环境中初始化全局变量
    if (typeof window !== 'undefined') {
      // 初始化百度统计全局变量
      if (baidu) {
        window._hmt = window._hmt || []
      }
    }
  }, [baidu])

  // 如果所有统计工具都未配置，则不渲染任何统计代码
  if (!baidu && !clarity) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Analytics: 未配置任何统计工具')
    }
    return null
  }

  return (
    <>
      {/* 百度统计 */}
      {baidu && (
        <Script
          id="baidu-analytics"
          strategy="afterInteractive"
          onLoad={() => {
            if (process.env.NODE_ENV === 'development') {
              console.log('百度统计加载成功')
            }
          }}
          onError={(e) => {
            if (process.env.NODE_ENV === 'development') {
              console.error('百度统计加载失败:', e)
            }
          }}
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${baidu}";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      )}



      {/* Microsoft Clarity */}
      {clarity && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          onLoad={() => {
            if (process.env.NODE_ENV === 'development') {
              console.log('Microsoft Clarity 加载成功')
            }
          }}
          onError={(e) => {
            if (process.env.NODE_ENV === 'development') {
              console.error('Microsoft Clarity 加载失败:', e)
            }
          }}
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarity}");
            `,
          }}
        />
      )}
    </>
  )
}

// TypeScript 全局声明
declare global {

  interface Window {
    _hmt: any[]
    clarity: (...args: any[]) => void
  }
}