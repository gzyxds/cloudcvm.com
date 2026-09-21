'use client'

import { useEffect, useState } from 'react'

/**
 * 监听页面滚动，返回当前视口中「可见比例最高」的区块 id。
 *
 * 用于页面锚点导航（SectionNav）的高亮联动。此前该逻辑在 gpu / gov / game /
 * finance / mobile / lighthouse / token / aiimage / cbm / about / VideoContent /
 * CMSContent 等 12 处逐字重复实现，现统一收敛。
 *
 * 实现要点：
 * - `rootMargin: '-30% 0px -55% 0px'` 将判定视口压缩到页面中上部，
 *   使「滚动到某区块」与「导航高亮切换」在体感上对齐；
 * - 多个区块同时可见时取 `intersectionRatio` 最大者，避免快速滚动时高亮抖动。
 *
 * @param sectionIds 需要监听的 section id 列表（顺序即优先级）
 * @returns 当前激活的 section id，未匹配时返回第一个 id 或空串
 *
 * @example
 * const active = useActiveSection(SECTION_LINKS.map((item) => item.id))
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  // 依赖字符串化的 key：调用方常见写法是内联 `SECTION_LINKS.map(...)`，
  // 数组每次渲染都是新引用，直接作为依赖会导致 IntersectionObserver 反复重建。
  const key = sectionIds.join('|')

  useEffect(() => {
    const sections = key
      .split('|')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return activeSection
}
