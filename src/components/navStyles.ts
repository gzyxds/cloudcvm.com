/**
 * 导航栏共享样式常量
 *
 * 菜单栏由 Header / MegaMenu / MobileMenu 等组件共同拼装，为避免各文件
 * 重复写死 Tailwind 类名和颜色，这里统一收敛到语义常量。
 *
 * 配色约定：全部走 tailwind.css 中定义的 design token——
 * 品牌色用 brand-*，中性色用 neutral-*，阴影用 shadow-*，圆角用 rounded-*。
 * 本文件禁止出现硬编码色值，换主题只需改 tailwind.css 一处。
 */

/** 桌面一级导航触发按钮的基础布局（不含颜色状态） */
export const navTriggerBase =
  'relative inline-flex h-[62px] items-center gap-x-1 whitespace-nowrap px-3.5 text-sm font-medium transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30'

/** 桌面一级导航默认 / 悬停状态（保持默认：仅文字变色，不加按钮底色） */
export const navTriggerIdle = 'text-neutral-800 hover:text-brand-600'

/** 桌面一级导航展开 / 当前页高亮状态（文字强调 + 底部品牌色下划线） */
export const navTriggerActive =
  'text-brand-600 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-brand-500'

/** 桌面直链菜单（最新活动、电商云、控制台等）完整类名 */
export const navLinkBase = `${navTriggerBase} ${navTriggerIdle}`

/** 顶部分隔线（仅布局，外边距由使用处按需补充） */
export const navDividerBase = 'h-5 w-px shrink-0 bg-neutral-200'

/** 下拉面板基础外观 */
export const popoverPanelBase =
  'fixed z-50 origin-top overflow-visible bg-white shadow-panel transition-[opacity,transform] duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'

/** 三段式面板公共容器 */
export const megaPanelContainer = 'mx-auto max-w-[1680px] px-8 2xl:px-[120px]'
export const megaPanelScroll =
  'max-h-[calc(100vh-62px-60px)] min-h-[480px] overflow-y-auto'
export const megaSideRail = 'shrink-0 bg-white'
export const megaSideLeft = 'w-52 border-r border-neutral-200 py-7 pr-6'
export const megaSideRight =
  'hidden w-[360px] flex-col gap-6 border-l border-neutral-200 py-7 pl-8 xl:flex 2xl:w-[400px]'
export const megaMain = 'min-w-0 flex-1 px-8 py-7'

/** 左侧分类按钮 */
export const categoryButtonBase =
  'group relative flex w-full items-center px-0 py-2.5 text-left text-sm transition-colors duration-150 outline-none'
export const categoryButtonIdle = 'text-neutral-700 hover:text-brand-600'
export const categoryButtonActive = 'font-medium text-brand-600'
export const categoryUnderline =
  'pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-brand-500 transition-opacity duration-150 group-hover:bg-brand-300'

/** 搜索与快捷标签 */
export const searchInput =
  'h-9 w-full rounded-md border border-transparent bg-neutral-50 py-1 pr-10 pl-3 text-sm text-neutral-800 transition-colors outline-none placeholder:text-neutral-400 focus:border-brand-300 focus:bg-white'
export const quickTag =
  'shrink-0 rounded-md bg-neutral-100 px-3 text-xs font-medium leading-8 text-neutral-700 transition-colors hover:bg-brand-500 hover:text-white'

/** 分区标题 */
export const sectionTitle = 'mb-3 flex items-center gap-2'
export const sectionTitleBar = 'block h-3.5 w-0.5 rounded-full bg-brand-500'
export const sectionTitleText = 'text-sm font-medium text-neutral-800'

/** 产品卡片 */
export const featuredCard =
  'group/card flex items-start gap-3 rounded-md px-3 py-3 transition-colors hover:bg-neutral-50'
export const featuredCardIcon =
  'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-brand-500'
export const productLink =
  'group/link flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-neutral-50'
export const productLinkIcon =
  'flex h-5 w-5 shrink-0 items-center justify-center text-brand-500'

/** 徽章配色，供桌面端与移动端共用 */
export const badgeStyles: Record<string, string> = {
  hot: 'bg-red-500 text-white',
  new: 'bg-brand-500 text-white',
  beta: 'bg-amber-500 text-white',
  default: 'bg-neutral-100 text-neutral-500',
}

/** 右侧快捷入口 */
export const quickActionLink =
  'group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-brand-50 hover:text-brand-600'

/** 右侧「还有更多选择」白蓝推广卡（白底 + 细蓝边 + 轻投影，hover 才显浅蓝，简洁不抢视觉） */
export const megaPromoCard =
  'group/promo flex items-start gap-4 rounded-md border border-brand-100 bg-white p-5 shadow-sm transition-colors duration-150 hover:border-brand-200 hover:bg-brand-50/60'
export const megaPromoIcon =
  'flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-500/10 text-brand-600 transition-colors duration-150 group-hover/promo:bg-brand-500/15 group-hover/promo:text-brand-700'
export const megaPromoTitle = 'text-sm font-medium text-neutral-900'
export const megaPromoDesc = 'mt-1 text-xs leading-relaxed text-neutral-500'
export const megaPromoLink =
  'mt-3 inline-flex items-center gap-1 rounded-md bg-brand-500 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 group-hover/promo:bg-brand-600'

/** 主 CTA 按钮（直角设计，无圆角） */
export const primaryButton =
  'inline-flex items-center justify-center gap-2 bg-brand-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand-600'

/** 移动端次要按钮 */
export const mobileSecondaryButton =
  'flex flex-1 items-center justify-center gap-x-2 rounded-md bg-neutral-100 px-4 py-2.5 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-brand-600'

/** 移动端主要按钮 */
export const mobilePrimaryButton =
  'flex flex-1 items-center justify-center gap-x-2 rounded-md bg-brand-500 px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-brand-600'

/** 移动端紧凑主按钮 */
export const compactPrimaryButton =
  'flex items-center justify-center gap-x-1.5 rounded-md bg-brand-500 px-2.5 py-2 text-xs font-medium text-white transition-colors hover:bg-brand-600'
