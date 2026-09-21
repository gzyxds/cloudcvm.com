'use client'

import { useCallback, useEffect, useRef } from 'react'

/**
 * Tab / 卡片悬停切换的防抖 Hook
 *
 * 背景：TwoColumnShowcase、Leftright、ServiceTabs、AiScene 四处各自实现了一份
 * 完全相同的定时器样板（ref + clearTimeout + setTimeout + 离开时清除），
 * 其中 3 处**遗漏了组件卸载时的清理**，存在定时器泄漏与卸载后 setState 的风险。
 *
 * 关于延迟：四处原本并不一致（三处 100ms、AiScene 60ms）。
 * 为不擅自改变交互手感，延迟由调用方显式传入，此处只提供默认值。
 *
 * @param onTrigger 防抖结束后执行的回调，接收触发时传入的值
 * @param delay 防抖延迟（毫秒），默认 100
 * @returns `handleHover(value)` 绑定 onMouseEnter；`handleLeave` 绑定 onMouseLeave
 *
 * @example
 * const { handleHover, handleLeave } = useDebouncedHover(setActiveTab, 100)
 * <button onMouseEnter={() => handleHover(tab.id)} onMouseLeave={handleLeave} />
 */
export function useDebouncedHover<T>(onTrigger: (value: T) => void, delay = 100) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const handleHover = useCallback(
    (value: T) => {
      clear()
      timerRef.current = setTimeout(() => onTrigger(value), delay)
    },
    [clear, onTrigger, delay]
  )

  // 卸载时清理，避免定时器在组件销毁后仍触发 setState
  useEffect(() => clear, [clear])

  return { handleHover, handleLeave: clear }
}
