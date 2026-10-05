'use client'

import { useActiveSection } from '@/hooks/useActiveSection'
import { Container } from '@/components/ui/Container'

export interface SectionNavLink {
  id: string
  label: string
}

/**
 * 页面锚点导航小岛（about / aiimage 共用，此前两页各自内联逐字重复）。
 *
 * sticky 顶栏 + 横向滚动分区锚点，滚动时经 IntersectionObserver 高亮当前
 * 分区（useActiveSection）。links 数组引用变化无影响——hook 内部以
 * `join('|')` 字符串作依赖键，不会反复重建 observer。
 */
export function SectionNav({ links }: { links: SectionNavLink[] }) {
  const activeSection = useActiveSection(links.map((item) => item.id))

  return (
    <nav className="sticky top-14 z-40 border-b border-neutral-200 bg-white/90 shadow-sm backdrop-blur-md">
      <Container>
        <div className="scrollbar-hide -mb-px flex justify-start overflow-x-auto sm:justify-center">
          {links.map((item) => {
            const isActive = item.id === activeSection
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 border-b-2 px-4 py-3.5 text-sm font-medium transition-colors sm:px-6 sm:py-4 ${
                  isActive
                    ? 'border-brand-500 text-brand-500'
                    : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </Container>
    </nav>
  )
}

export default SectionNav
