import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export interface SiteShellProps {
  children: ReactNode
  /** 页面背景，默认 `bg-slate-50`；需要纯白底时传 `bg-white` */
  className?: string
}

/**
 * 全站统一页面外壳：顶部导航 + 主内容区 + 页脚。
 *
 * 此前该结构在 about / aiimage / cbm / finance / game / gov / gpu / legal /
 * lighthouse / mobile / privacy / retail / terms / token 共 14 个 layout.tsx 中
 * 逐字重复，现收敛为单一组件，导航与页脚只打包一份。
 */
export function SiteShell({ children, className = 'bg-slate-50' }: SiteShellProps) {
  return (
    <div className={`flex min-h-screen flex-col font-sans text-slate-900 ${className}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
