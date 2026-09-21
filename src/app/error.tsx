'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

/**
 * 全站兜底错误页
 *
 * Next.js App Router 约定文件：捕获根布局以下所有未处理的渲染错误。
 * 此处自带 Header / Footer，因为错误发生时路由级布局不会渲染，
 * 若不提供导航，用户将无法自行离开该页面。
 *
 * 注意：组件必须为客户端组件，且只能通过 reset() 尝试恢复，
 * 生产环境不展示错误详情，避免泄露内部信息。
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 预留：接入前端监控时在此上报 error.digest
    if (process.env.NODE_ENV === 'development') {
      console.error('页面渲染出错:', error)
    }
  }, [error])

  return (
    <>
      <Header />
      <main className="flex flex-1 items-center py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold text-brand-500">500</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              页面加载出错了
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              很抱歉，当前页面无法完成渲染。您可以重试，或返回首页继续浏览。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" color="blue" onClick={() => reset()}>
                重试
              </Button>
              <Button variant="primaryOutline" color="slate" href="/">
                返回首页
              </Button>
            </div>

            {error.digest && (
              <p className="mt-6 text-xs text-neutral-400">错误编号：{error.digest}</p>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
