import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center py-2 px-4 text-sm rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2',
  erlieSolid:
    'group inline-flex items-center justify-center py-3 px-8 text-[15px] font-medium rounded-sm shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
  erlieOutline:
    'group inline-flex items-center justify-center py-3 px-8 text-[15px] font-medium rounded-sm border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    blue: 'ring-blue-200 text-blue-700 hover:text-blue-900 hover:ring-blue-300 active:bg-blue-50 active:text-blue-600 focus-visible:outline-blue-600 focus-visible:ring-blue-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
  erlieSolid: {
    blue: 'bg-[#1664ff] text-white shadow-blue-500/20 hover:bg-[#1356db] focus-visible:outline-[#1664ff]',
    white:
      'bg-white text-[#1664ff] shadow-slate-200/20 hover:bg-[#eff6ff]/50 focus-visible:outline-white',
  },
  erlieOutline: {
    slate:
      'bg-white border-[#e5e6eb] text-[#4e5969] hover:border-[#c9cdd4] hover:bg-slate-50 hover:text-[#1d2129] focus-visible:outline-[#1664ff]',
    white:
      'bg-transparent border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
  | {
      variant: 'erlieSolid'
      color?: keyof typeof variantStyles.erlieSolid
    }
  | {
      variant: 'erlieOutline'
      color?: keyof typeof variantStyles.erlieOutline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({
  className,
  variant = 'solid',
  color,
  ...props
}: ButtonProps) {
  const variantClassName = (() => {
    switch (variant) {
      case 'solid': {
        const resolvedColor = (color ?? 'slate') as keyof typeof variantStyles.solid
        return variantStyles.solid[resolvedColor]
      }
      case 'outline': {
        const resolvedColor = (color ?? 'slate') as keyof typeof variantStyles.outline
        return variantStyles.outline[resolvedColor]
      }
      case 'erlieSolid': {
        const resolvedColor = (color ?? 'blue') as keyof typeof variantStyles.erlieSolid
        return variantStyles.erlieSolid[resolvedColor]
      }
      case 'erlieOutline': {
        const resolvedColor = (color ?? 'slate') as keyof typeof variantStyles.erlieOutline
        return variantStyles.erlieOutline[resolvedColor]
      }
    }
  })()

  const composedClassName = clsx(baseStyles[variant], variantClassName, className)

  return typeof props.href === 'undefined' ? (
    <button className={composedClassName} {...props} />
  ) : (
    <Link className={composedClassName} {...props} />
  )
}
