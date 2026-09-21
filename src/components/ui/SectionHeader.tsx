import type { ReactNode } from 'react'
import clsx from 'clsx'

export interface SectionHeaderProps {
  /** 徽标文字，如「产品终端」 */
  badge?: string
  /** 主标题 */
  title: ReactNode
  /** 标题下方的描述文案 */
  description?: ReactNode
  /** 扩展/覆盖容器样式（默认 `mx-auto max-w-2xl text-center`） */
  className?: string
}

/**
 * 区块标题组件 —— 统一「徽标 + 标题 + 描述」三件套
 *
 * 背景：该结构此前在 ProductFeaturesSection / ProductTerminalsSection /
 * AIProductsSection 三处**逐字重复**，改样式要同步改三遍，故收敛为公共组件。
 *
 * 适用范围：居中、brand 色系、徽标为圆角胶囊的标准区块标题。
 * 已知变体（差异较大，**刻意不合入**本组件，避免参数膨胀）：
 * - `sections/shared/Faqs.tsx`：徽标 `rounded-md`、标题 `text-3xl/sm:text-4xl`、容器无 max-w
 * - `sections/shared/CapabilityGrid.tsx`：无徽标、硬编码色值、含高亮 span、带入场动画
 * - `app/host/page.tsx`：左对齐、h1 级字号、含高亮 span（属 Hero 文案，非区块标题）
 */
export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={clsx('mx-auto max-w-2xl text-center', className)}>
      {badge && (
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-600/20 ring-inset">
          {badge}
        </span>
      )}
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">{description}</p>
      )}
    </div>
  )
}
