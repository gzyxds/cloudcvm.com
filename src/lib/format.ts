/**
 * 价格格式化 —— 全站统一入口
 *
 * 背景：此前 `¥${x.toLocaleString()}` 与 `¥${x.toFixed(2)}` 两种写法散落在
 * 7 个文件中，改动格式需逐处修改。收敛后只在此处调整。
 *
 * 已知不一致（待产品确认后再统一）：
 * - 商品卡片用整数千分位（`¥1,288`）
 * - 规格报价用两位小数（`¥1288.00`，无千分位）
 * 两个函数刻意保留各自输出，避免未经确认就改动线上价格展示。
 */

// 固定 zh-CN：无参 toLocaleString() 依赖运行时 locale，
// 构建机与浏览器不一致时会导致 hydration 不匹配。
const integerFormatter = new Intl.NumberFormat('zh-CN', {
  maximumFractionDigits: 0,
})

/** 整数千分位，如 `¥1,288`（商品卡片现价 / 原价） */
export function formatPrice(value: number): string {
  return `¥${integerFormatter.format(value)}`
}

/** 固定两位小数，如 `¥1288.00`（规格报价，沿用原 toFixed(2) 输出） */
export function formatPriceWithDecimals(value: number): string {
  return `¥${value.toFixed(2)}`
}
