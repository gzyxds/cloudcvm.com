import Link from 'next/link'
import clsx from 'clsx'

/**
 * CloudCVM Button Design System
 *
 * Variants:
 * - solid     — 标准填充按钮
 * - outline   — 标准描边按钮（真 border，非 ring）
 * - primary   — 主要 CTA（原 erlieSolid）
 * - primaryOutline — 次要 CTA（原 erlieOutline）
 * - glass     — 玻璃拟态按钮（新增）
 *
 * Colors per variant:
 * - solid:     slate | blue | white
 * - outline:   slate（中性描边）| blue（品牌描边）| white
 * - primary:   blue | white
 * - primaryOutline: slate | white
 * - glass:     light | dark
 *
 * Sizes（2026-10-05 全站按钮尺寸档位，未传 size 时沿用各 variant 存量几何）:
 * - sm: px-4 py-2 text-sm（约 36px）— 卡片行内按钮 / 头部 CTA
 * - md: px-6 py-2.5 text-sm（约 40px）— 区块操作按钮
 * - lg: px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base（约 44/52px）— 大区块 CTA
 * - xl: px-8 py-4 text-base（约 56px）— 仅 hero 双按钮
 *
 * 字重一律 font-medium；主按钮 hover bg-brand-600、次按钮 hover border-neutral-300 + bg-neutral-50。
 * 圆角统一 rounded-btn（微圆角 8px，令牌 --radius-btn 在 tailwind.css，与面板 rounded-xl 解耦）。
 */

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base',
  xl: 'px-8 py-4 text-base',
} as const

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-btn font-medium focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200',
  outline:
    'group inline-flex items-center justify-center rounded-btn border font-medium focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200',
  primary:
    'group inline-flex items-center justify-center rounded-btn font-medium shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
  primaryOutline:
    'group inline-flex items-center justify-center rounded-btn border font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
  glass:
    'group inline-flex items-center justify-center rounded-btn border font-medium backdrop-blur-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
}

/** 未传 size 时各 variant 的存量几何（保持既有调用点零变化） */
const legacyGeometry = {
  solid: 'px-4 py-2 text-sm',
  outline: 'px-4 py-2 text-sm',
  primary: 'py-3 px-8 text-base',
  primaryOutline: 'py-3 px-8 text-base',
  glass: 'py-3 px-8 text-base',
}

const variantStyles = {
  solid: {
    slate:
      'bg-neutral-900 text-white hover:bg-neutral-700 hover:text-neutral-100 active:bg-neutral-800 active:text-neutral-300 focus-visible:outline-neutral-900',
    blue: 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 active:text-brand-100 focus-visible:outline-brand-500',
    white:
      'bg-white text-neutral-900 hover:bg-brand-50 active:bg-brand-200 active:text-neutral-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'border-neutral-200 bg-transparent text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 active:bg-neutral-100 active:text-neutral-600 focus-visible:outline-brand-500',
    blue: 'border-brand-500 text-brand-500 hover:border-brand-600 hover:bg-brand-50 active:bg-brand-100 active:text-brand-600 focus-visible:outline-brand-500',
    white:
      'border-neutral-700 text-white hover:border-neutral-500 active:border-neutral-700 active:text-neutral-400 focus-visible:outline-white',
  },
  primary: {
    blue: 'bg-brand-500 text-white shadow-brand-500/20 hover:bg-brand-600 focus-visible:outline-brand-500',
    white:
      'bg-white text-brand-500 shadow-neutral-200/20 hover:bg-brand-50 focus-visible:outline-white',
  },
  primaryOutline: {
    slate:
      'bg-white border-neutral-300 text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-800 focus-visible:outline-brand-500',
    white:
      'bg-transparent border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
  },
  glass: {
    light:
      'bg-white/70 border-white/40 text-neutral-800 hover:bg-white/90 hover:shadow-lg focus-visible:outline-brand-500',
    dark: 'bg-neutral-900/60 border-white/10 text-white hover:bg-neutral-900/80 hover:border-white/20 focus-visible:outline-white',
  },
}

// ── Type system ────────────────────────────────────────────────

type ButtonVariant = 'solid' | 'outline' | 'primary' | 'primaryOutline' | 'glass'
type ButtonSize = keyof typeof sizeStyles

type ButtonProps = (
  | { variant?: 'solid'; color?: keyof typeof variantStyles.solid }
  | { variant: 'outline'; color?: keyof typeof variantStyles.outline }
  | { variant: 'primary'; color?: keyof typeof variantStyles.primary }
  | { variant: 'primaryOutline'; color?: keyof typeof variantStyles.primaryOutline }
  | { variant: 'glass'; color?: keyof typeof variantStyles.glass }
  // Legacy variants — mapped to primary / primaryOutline below
  | { variant: 'erlieSolid'; color?: keyof typeof variantStyles.primary }
  | { variant: 'erlieOutline'; color?: keyof typeof variantStyles.primaryOutline }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  ) & { size?: ButtonSize }

/**
 * CloudCVM Button — unified button component
 */
export function Button({ className, variant = 'solid', color, size, ...props }: ButtonProps) {
  // Normalize legacy variant names
  const normalizedVariant = (
    variant === 'erlieSolid' ? 'primary' : variant === 'erlieOutline' ? 'primaryOutline' : variant
  ) as ButtonVariant

  const variantClassName = (() => {
    switch (normalizedVariant) {
      case 'solid': {
        const c = (color ?? 'slate') as keyof typeof variantStyles.solid
        return variantStyles.solid[c]
      }
      case 'outline': {
        const c = (color ?? 'slate') as keyof typeof variantStyles.outline
        return variantStyles.outline[c]
      }
      case 'primary': {
        const c = (color ?? 'blue') as keyof typeof variantStyles.primary
        return variantStyles.primary[c]
      }
      case 'primaryOutline': {
        const c = (color ?? 'slate') as keyof typeof variantStyles.primaryOutline
        return variantStyles.primaryOutline[c]
      }
      case 'glass': {
        const c = (color ?? 'light') as keyof typeof variantStyles.glass
        return variantStyles.glass[c]
      }
    }
  })()

  const composedClassName = clsx(
    baseStyles[normalizedVariant],
    size ? sizeStyles[size] : legacyGeometry[normalizedVariant],
    variantClassName,
    className
  )

  return typeof props.href === 'undefined' ? (
    <button className={composedClassName} {...props} />
  ) : (
    <Link className={composedClassName} {...props} />
  )
}
