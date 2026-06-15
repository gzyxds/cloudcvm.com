import Link from 'next/link'
import clsx from 'clsx'

/**
 * CloudCVM Button Design System
 *
 * Variants:
 * - solid     — 标准填充按钮
 * - outline   — 标准描边按钮
 * - primary   — 主要 CTA（原 erlieSolid）
 * - primaryOutline — 次要 CTA（原 erlieOutline）
 * - glass     — 玻璃拟态按钮（新增）
 *
 * Colors per variant:
 * - solid:     slate | blue | white
 * - outline:   slate | blue | white
 * - primary:   blue | white
 * - primaryOutline: slate | white
 * - glass:     light | dark
 */

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200',
  outline:
    'group inline-flex ring-1 items-center justify-center py-2 px-4 text-sm rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200',
  primary:
    'group inline-flex items-center justify-center py-3 px-8 text-[15px] font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
  primaryOutline:
    'group inline-flex items-center justify-center py-3 px-8 text-[15px] font-medium rounded-lg border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
  glass:
    'group inline-flex items-center justify-center py-3 px-8 text-[15px] font-medium rounded-lg backdrop-blur-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-brand-500 text-white hover:text-slate-100 hover:bg-brand-600 active:bg-brand-700 active:text-blue-100 focus-visible:outline-brand-500',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-brand-500 focus-visible:ring-slate-300',
    blue: 'ring-blue-200 text-blue-700 hover:text-blue-900 hover:ring-blue-300 active:bg-blue-50 active:text-blue-600 focus-visible:outline-brand-500 focus-visible:ring-blue-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
  primary: {
    blue: 'bg-brand-500 text-white shadow-brand-500/20 hover:bg-brand-600 focus-visible:outline-brand-500',
    white:
      'bg-white text-brand-500 shadow-slate-200/20 hover:bg-brand-50 focus-visible:outline-white',
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
    dark:
      'bg-neutral-900/60 border-white/10 text-white hover:bg-neutral-900/80 hover:border-white/20 focus-visible:outline-white',
  },
}

// ── Type system ────────────────────────────────────────────────

type ButtonVariant = 'solid' | 'outline' | 'primary' | 'primaryOutline' | 'glass'

type ColorForVariant<V extends ButtonVariant> =
  V extends 'solid' ? keyof typeof variantStyles.solid :
  V extends 'outline' ? keyof typeof variantStyles.outline :
  V extends 'primary' ? keyof typeof variantStyles.primary :
  V extends 'primaryOutline' ? keyof typeof variantStyles.primaryOutline :
  V extends 'glass' ? keyof typeof variantStyles.glass :
  never

// Support legacy erlieSolid / erlieOutline variants
type LegacyVariant = 'erlieSolid' | 'erlieOutline'

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
  )

/**
 * CloudCVM Button — unified button component
 */
export function Button({
  className,
  variant = 'solid',
  color,
  ...props
}: ButtonProps) {
  // Normalize legacy variant names
  const normalizedVariant = (
    variant === 'erlieSolid' ? 'primary' :
    variant === 'erlieOutline' ? 'primaryOutline' :
    variant
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

  const composedClassName = clsx(baseStyles[normalizedVariant], variantClassName, className)

  return typeof props.href === 'undefined' ? (
    <button className={composedClassName} {...props} />
  ) : (
    <Link className={composedClassName} {...props} />
  )
}
