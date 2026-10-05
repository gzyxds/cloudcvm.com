'use client'

import { useEffect, useRef, useState } from 'react'

interface BackgroundVideoProps {
  /** 视频地址；进入视口前不写入 src，避免不可见/被 CSS 隐藏时提前下载 */
  src: string
  /** 海报图（可选），视频加载前显示 */
  poster?: string
  className?: string
}

/**
 * 装饰性背景视频：进入视口才写入 src 并播放，离开视口暂停。
 *
 * 背景：此前多处写 `<video autoPlay muted loop className="hidden sm:block">`，
 * CSS 隐藏只影响显示，不影响浏览器下载与解码——移动端隐藏视频照常播放，
 * 页底视频进入视口前就开始拉流。统一收敛为本组件（2026-10-05）。
 *
 * 移动端由外层 className（如 hidden sm:block）隐藏时，元素不参与交叉计算，
 * 因此完全不会写入 src；断点切换（如窗口拉宽）后自动开始加载与播放。
 */
export function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInView(entry.isIntersecting)
        }
      },
      { rootMargin: '200px' } // 提前一小段加载，滚入视口时已可播放
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  // 进入视口播放；src 与 inView 同一次提交写入，首帧数据未就绪时等 loadeddata 再播
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (inView) {
      const tryPlay = () => video.play().catch(() => {})
      if (video.readyState >= 2) {
        tryPlay()
      } else {
        video.addEventListener('loadeddata', tryPlay, { once: true })
        return () => video.removeEventListener('loadeddata', tryPlay)
      }
    } else {
      video.pause()
    }
  }, [inView])

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
      {...(inView ? { src } : {})}
    />
  )
}
