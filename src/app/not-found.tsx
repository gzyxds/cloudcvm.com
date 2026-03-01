'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      if (path.endsWith('.html')) {
        const newPath = path.replace(/\.html$/, '')
        window.location.href = newPath
        return
      }
    }
  }, [])

  return (
    <SlimLayout>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
          404 错误
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">抱歉，当前页面无法访问</h1>
          <p className="mt-6 text-lg text-gray-600">
            当前页面不存在或已被移动
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/" color="blue" className="px-8 py-3">
              返回首页
            </Button>
            <Button href="/contact" variant="outline" className="px-8 py-3">
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </SlimLayout>
  )
}
