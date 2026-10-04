# React / Next.js 开发规范（本项目适用版）

> 更新：2026-10-05。依据本仓库当前实现及 `node_modules/next/dist/docs/` 中 Next.js 16.3.5 官方文档。此文件是**项目开发规范**，不是适用于所有 Next 项目的提示词。详细证据、问题优先级和改进验收见 [Next.js 官方规范审查与文档校对](./Next.js官方规范审查与文档校对.md)；已执行的历史事项见 [代码规范与优化](./代码规范与优化.md)。

## 1. 适用边界

- `src/app` 是 App Router，`next.config.js` 使用 `output: 'export'`、`trailingSlash: true`、`images.unoptimized: true`；部署产物为 `out/` 静态文件。
- 页面与布局默认 Server Components；只在需要交互、客户端状态、浏览器 API 时设置 `'use client'`。静态导出时 Server Components 仍在构建期渲染，能减少客户端 JS。
- **不得照搬原通用模板的 Server Actions、SSR、ISR、request-time cookies/headers、运行时依赖 Request 的 Route Handlers、Next 运行时 headers/rewrites/redirects 和默认图片优化。** 如要接入这些能力，需先更换部署架构，单独设计后端，再修订规范。
- 现有 UI 依赖是 Headless UI、Heroicons、Lucide、Tailwind CSS 4、Framer Motion；**没有** Shadcn UI、Radix UI、Zod，不把它们写成强制依赖。新增依赖先论证必要性与静态导出兼容性。

## 2. 路由与组件

1. 在 `page.tsx` / `layout.tsx` 中保持 SEO `metadata` 和页面编排；交互下沉到局部 Client Component。Server → Client 传递的 props 必须可序列化。
2. 可复用导航外壳优先用 `src/components/layout/SiteShell.tsx`，不要在同一页面同时重复渲染 Header/Footer。现有 layout 的 metadata 不得在重构时遗失。
3. 内部导航优先 `next/link`；跨域、下载、`mailto:`、`tel:` 等使用合适的 `<a>`。避免用 `window.location.href` 做本站内部导航。
4. `src/app/error.tsx` 是根路由段的错误边界，不捕获根布局本身的错误；如需此能力评估 `global-error.tsx`（需自带 `<html>` / `<body>`）。`not-found.tsx` 负责 404。加载边界**并非**静态导出禁用能力，但恢复根级 `loading.tsx` 前须检查导出 HTML、首屏闪烁和 CLS。
5. `next/dynamic` 用于拆包或按需加载；**不会自动按滚动视口懒加载**。Server Component 动态导入的拆包效果与 Client Component 不同；`ssr: false` 只能放在 Client Component 内。大组件性能优化须测量后再做。

## 3. 代码、样式与资源

- 以 `tsconfig.json` 严格模式、`eslint.config.mjs` 和 `prettier.config.js` 为执行规则；运行 `npm run typecheck`、`npm run lint`。`next build` 从 Next 16 起不自动运行 lint。
- 使用稳定的列表 key，避免非必要副作用与重复状态；大型页面组件按独立职责拆分，但不要为了行数强行抽象。共享业务数据放 `src/data/`，共享 Hook 放 `src/hooks/`。
- 新界面沿用 `src/styles/tailwind.css` 的品牌 token 和现有 Headless UI；存量 CSS Module 维护时避免破坏视觉。保持语义标签、键盘操作、可见焦点和 `prefers-reduced-motion` 降级。
- `images.unoptimized: true` 表示 Next 默认图像转换关闭，**不表示 `next/image` 与 `<img>` 所有行为完全相同**。预处理图片字节，保持尺寸以避免 CLS；LCP 图按版本文档审核 `preload` / `fetchPriority`，Next 16 的 `priority` 已弃用。现存 `<img>` 不必机械改写，先检查尺寸及用途。
- 不提交虚构图片/链接。公开文案、联系方式与统计脚本应由产品/运营确认；外部脚本加载和隐私合规单独审查。

## 4. SEO、构建与部署验收

- `src/config/seo.config.ts` 是 sitemap 路径列表来源，`src/app/robots.ts` / `sitemap.ts` 构建生成 `robots.txt` / `sitemap.xml`。目前 48 个页面、48 条 sitemap；新增页面时须核对是否应收录，不应收录者明确记录 noindex 策略。
- `metadataBase` 使用 `NEXT_PUBLIC_SITE_URL` 的构建时值；改部署域名时须重建并核对 canonical、OG、robots 与 sitemap。避免默认每次构建都把全站页面的 `<lastmod>` 标成构建日期而实际内容未更新。
- 环境 Node.js >= 20.9；CI `.github/workflows/ci.yml` 使用 Node 20。执行 `npm ci`、`npm run typecheck`、`npm run lint`、`npm run build`、`npm run validate-seo`。**`npm start` 不用来预览静态导出的 `out/`**；可用 `node scripts/serve-out.js` 或静态服务器进行实际产物检查。
- 全量 lint 若误扫本地生成备份目录（如 `.next-stale-bak/`）需先隔离该目录或调整 ESLint 忽略配置；不能把生成代码报错误判成 `src` 的错误，也不能因为 `eslint src` 通过就当作 CI 完全通过。

## 5. 与其他文档的关系

- [技术文档](./技术文档.md)：架构与路由介绍；动态统计以实际代码为准。
- [代码规范与优化方案](./代码规范与优化方案.md)：2026-09 历史基线和长期改造记录，旧路径与旧方案**不能直接执行**。
- [代码规范与优化](./代码规范与优化.md)：历史会话执行日志，不代表当前待办。
- [首页楼层组件分析](./首页楼层组件分析.md)：首页专项分析，已按 `page.tsx` 校正动态/静态导入数。
- [项目长期记忆](./项目长期记忆.md)：技术决策与踩坑记录；历史数字需要对照日期。

## 官方依据（仓库内随包文档）

- `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`
- `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/error.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/01-installation.md`
