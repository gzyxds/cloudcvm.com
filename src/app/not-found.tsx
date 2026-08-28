'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const suggestions = [
  { name: '返回首页', description: '回到 CloudCVM 官网首页', href: '/', icon: HomeIcon },
  { name: '产品中心', description: '浏览云计算与 AI 产品', href: '/ecs/', icon: MagnifyingGlassIcon },
  { name: '联系我们', description: '获取专业技术支持', href: '/contact/', icon: EnvelopeIcon },
]

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
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex flex-grow flex-col">
        {/* Hero 区域 */}
        <section className="relative isolate flex flex-grow items-center overflow-hidden bg-white py-16 sm:py-24">
          {/* 背景装饰 */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, #3860F4 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(56,96,244,0.06),transparent)]" />
          </div>

          <Container className="relative">
            <div className="mx-auto max-w-4xl text-center">
              {/* 404 数字 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                <span className="text-[8rem] font-bold leading-none tracking-tighter text-brand-100 sm:text-[10rem] lg:text-[12rem]">
                  404
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[8rem] font-bold leading-none tracking-tighter text-brand-500 sm:text-[10rem] lg:text-[12rem]">
                  404
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                抱歉，页面找不到了
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
              >
                您访问的页面可能已被移除、名称已更改，或者暂时无法访问。
                不妨试试下方的快捷入口，或返回首页继续浏览。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button href="/" color="blue" variant="erlieSolid" className="rounded-lg px-8 py-3">
                  返回首页
                </Button>
                <Button
                  href="/contact/"
                  variant="erlieOutline"
                  color="slate"
                  className="rounded-lg px-8 py-3"
                >
                  联系客服
                </Button>
              </motion.div>
            </div>

            {/* 快捷入口卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3"
            >
              {suggestions.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-slate-200/50"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-500" />
                  </Link>
                )
              })}
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
