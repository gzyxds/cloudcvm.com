# Next.js 16 官方规范审查与开发文档校对报告

> 审查日期：2026-10-05  
> 范围：当前工作区 `D:/github/cloudcvm.com` 的代码、配置、六份原有开发文档，以及**安装在本仓库的 Next.js 16.3.5 随包官方文档**。工作区存在未提交的业务代码变更；本次以磁盘现状为依据，**未修改业务代码或清理目录**。  
> 结论：App Router 与静态导出方案总体可用，不能笼统判为“不符合 Next.js 规范”；有 **1 项本地质量门禁阻断**、若干 SEO/性能/文档准确性问题。以下将**框架兼容性**、**可验证的实现问题**和**可选最佳实践**分别标注，避免将建议说成官方强制规则。

## 一、基线与核查办法

| 项目      | 源码事实                                                                                                                                      | 判断                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 框架版本  | `node_modules/next/package.json:3` 为 **16.3.5**；`package.json:37-40` 声明 Next 16 / React 19                                                | 对照同版本随包文档，不套用旧版经验                                       |
| 路由/部署 | `src/app` 下 **48 个 `page.tsx`、21 个 `layout.tsx`**；`next.config.js:4-10` 启用 `output: 'export'` / `images.unoptimized` / `trailingSlash` | App Router + 构建时静态生成；`wrangler.jsonc:5-9` 将 `out/` 作为静态资产 |
| 页面内容  | 主要为静态展示和浏览器端交互，无项目 API 路由 / Server Actions                                                                                | 目前与静态导出边界相容；引入服务端动态能力前需重新设计部署               |
| 工程检查  | `package.json:6-16` 有 `build`、`lint`、`typecheck`、`validate-seo`；`.github/workflows/ci.yml:19-31` 串联 CI                                 | 检查链存在；曾因生成备份目录误扫失败，后续已修复                         |
| SEO 来源  | 审查时 `src/config/seo.config.ts` 配置 **43** 个路径；用户后续确认补齐五条后为 **48** 条                                                      | 与 48 个 `page.tsx` 一致（原差异保留于下文历史发现）                     |

官方主要依据为随包 `node_modules/next/dist/docs/01-app/`，外链见文末。**未做线上部署与浏览器实测；构建尝试因已有其他 `next build` 占用而未完成。** 历史文档中的 53/53 或 51 个静态产物等计数不等于本次构建结果。

## 二、按优先级列出发现

### P0 — 本地 `npm run lint` 被非源码备份目录阻断（发现时已复现，后续已修复）

> 后续处理：已在 `eslint.config.mjs` 精确忽略 `.next-stale-bak/**`，再次运行 `npm run lint -- --quiet` 通过；下文保留发现时证据。

- **证据**：`package.json:10` 执行 `eslint .`；`eslint.config.mjs:36-45` 忽略 `.next/**`、`out/**` 等，但不忽略工作区未跟踪目录 `.next-stale-bak/`。本次全量运行 `eslint . --quiet` 得到 **635 errors**，输出大量指向 `.next-stale-bak/dev/build/chunks/` 和生成的 `dev/types/validator.ts`；而单独对 `src` 运行 `eslint src --quiet` 为 **0 error**。
- **影响**：当前工作区的 lint 门禁失败，严重干扰真实源码诊断；CI 全新检出通常没有该目录，但不能因此宣称本地全量检查通过。该目录可能属于其他任务，**勿自动删除或搬动**。
- **建议**：先确认生成目录的归属；若保留，单独在 ESLint 的 `globalIgnores` 中加精确 `.next-stale-bak/**`，并检查类似生成/备份目录是否可用更稳妥的模式排除。继续维持 `eslint .` 全量门禁，对脚本目录被忽略的风险单独评估，不以 `eslint src` 取代 CI。
- **验收**：`npm run lint` 对本工作区返回 0；单独引入测试违规时仍能正确失败。

### P1 — SEO 路径与页面覆盖率不一致（2026-10-05 已按收录要求补齐）

- **发现时证据**：48 个页面对比当时 `src/config/seo.config.ts` 的 43 项，遗漏 **`/aiimage`、`/cbm`、`/gpu`、`/lighthouse`、`/token`**；当时没有不存在的路由。`src/app/sitemap.ts:1-11` / `robots.ts:1-11` 按框架文件约定生成文件，做法正确。
- **后续处置**：用户确认加入后，已将 5 条写入 `seo.config.ts`，当前预期为 **48 个页面 / 48 条 sitemap**，更新频率按同类产品页设为 `weekly`，优先级为 `0.8`；此处保留原发现作为审查记录。
- **建议**：逐页确认可索引性及是否有 canonical/noindex 策略；应收录则补配置，不应收录则在页面 metadata 配置 noindex 并记录理由。建立“路由列表 ↔ sitemap 列表”的自动比较测试，允许明确列入不收录白名单。
- **验收**：已核对源配置中的 48 条路径与 48 个页面完全对应，无重复或多余项；直接调用 `generateSitemap()` 检查到新增 5 条完整 URL 且共 48 条互不重复。构建因环境安全保护未完成，仍需在可构建环境中核对新 `out/sitemap.xml`。

### P1 — 现有 SEO 校验脚本可能给出“假通过”

- **证据**：`scripts/validate-seo.js:56-75,102-120` 分别读取 `public/` 与 `out/`，用 `staticValid || builtValid` 判定通过；只要求固定标签/指令存在（77-150），**未断言必须验证当前构建的 out、未校验 URL 是否真实存在、未自动核对 sitemap 路径与 48 个页面是否一致**。
- **影响**：历史 `out/` 或静态副本可能让 CI 在生成文件丢失/过期时误报成功；该问题属于脚本逻辑风险，本次未制造缺失文件做破坏性验证。
- **建议**：让 CI 在 `npm run build` 后只校验 `out/robots.txt` 和 `out/sitemap.xml`；解析 XML URL 与构建产物逐项对照。需要兼容开发阶段静态文件时改为显式参数模式，不要默认 OR 兜底。
- **验收**：临时测试夹具缺 `out/sitemap.xml`、含错误域名、含不存在页面时检查均应失败；正式构建时通过。

### P1 — 首页“按滚动加载”的叙述与实现/官方语义不符

- **证据**：`src/app/page.tsx:10-20` 静态导入 Header、Footer、视频轮播及 **8 个楼层**；`page.tsx:33-79` 对 **10 个楼层**使用 `dynamic()`，其中 `Price` 位于页面第三层（`page.tsx:118-121`），不是“首屏以下”。`Testimonials` / `LogoClouds` 不带 `'use client'`，仍被动态导入。当前 `SectionSkeleton` 多数固定 **400px**，LogoClouds **200px**（`page.tsx:27-29,64-66`）。
- **官方口径**：`next/dynamic` 用于懒加载 Client Components/库；**Server Component 动态导入时，不会因此对该 Server Component 本身应用客户端懒加载**。无滚动视口条件时不得保证“滚动到才加载”；静态导出中的 Server Component 构建期运行，生成 HTML/RSC payload。
- **建议**：在真实 `out/` 的 HTML、网络面板及 Performance 中核查骨架出现时机、下载瀑布、LCP/CLS；优先评估靠前的 `Price` 静态导入，再给确需占位的区块设置稳定高度。对纯展示 Server Components 重新评估 `dynamic()` 收益，不按文件数推断首屏 JS 减少量。
- **验收**：移动/桌面冷启动与路由切换无首屏闪烁、明显 CLS；构建产物的关键文案不依赖 JS 才出现。

### P1 — 静态资源失效与内容可信度需业务复核

- **证据**：`src/app/retail/page.tsx` 仍有 `backgroundImage: 'url(/_nuxt/img/consult_icon.1f4d6cc.png)'`，`public/` 无 `_nuxt/`；`src/components/sections/ai/FAQSection.tsx:136-145` 写入 `contact@aitech.com` 和 `+8610012345678`。`src/app/layout.tsx:82-99` 结构化数据写死 `foundingDate`、`TollFree` 等声明；这些是否准确**无法仅凭代码判定**。
- **建议**：把遗留图片引用改为确实存在且经设计确认的资源；联系人、经营资质/服务承诺、结构化数据交由产品/运营确认。不要仅因文档审查就改动业务文案或推定它们是真的。
- **验收**：本地静态预览中资源请求无 404；联系方式与结构化数据经业务确认。

### P2 — 错误边界名称与作用范围不准确

- **证据**：`src/app/error.tsx:19-25` 组件命名 `GlobalError`，文件实为根路由段 `error.tsx`；按官方层级它**不捕获同段 `src/app/layout.tsx` 错误**。文档旧称“全局错误边界”。
- **建议**：文档称“根路由段错误边界”；需要捕获根 layout 的错误时另加 `src/app/global-error.tsx`（必须提供独立 `<html>`/`<body>`，谨慎处理样式）。现有 `error.tsx` 仍有价值，无需为术语错误盲改功能。
- **验收**：在受控环境测试页面组件错误与根布局错误，两种恢复路径符合预期。

### P2 — `next/image` 与 SEO 元数据的版本化优化

- **证据**：`next.config.js:6-8` 全站 `images.unoptimized: true`，禁用默认图像转换；`src/components/ui/Logo.tsx`、`src/components/sections/ai/BananaProductPage.tsx`、`src/components/carousel/VideoCarousel.tsx` 等使用 `priority`，随包官方 `image.md` 明确 Next 16 起它被弃用，推荐 `preload`，多数场景可用 `loading="eager"` / `fetchPriority="high"`。`src/components/sections/shared/Advantage.tsx` 保留 1 处装饰性 `<img loading="lazy" alt="">`，在当前静态导出下不必机械视为违规；但仍应保证布局稳定。
- **建议**：按是否真实 LCP 逐处替换旧 `priority` 用法，避免每个卡片都高优先级。优化实际图片字节需预处理或静态导出兼容的自定义 loader；不要把 `next/image` 简化成“完全等价于 `<img>`”。根布局 `src/app/layout.tsx:13-57` 已正确使用 Metadata API，但在 `:67-75` 手写 viewport、验证标签（metadata 也含 verification）：检查导出 HTML 有无重复，再决定迁往官方 `viewport` 导出或删重复标签；不要未经检查就断言重复。
- **验收**：页面源代码无重复 viewport/verification meta，LCP 元素 preload/fetchPriority 数量合理，图片宽高稳定。

### P2 — sitemap 更新时效与部署域名一致性

- **证据**：`src/config/sitemap.config.ts:9-20` 对每条路径统一设置 `lastModified = new Date()`，所以每次重新构建会令**所有页面**显示同一构建时间，与实际内容修改时间可能不符；`src/config/seo.config.ts:9` 在构建时使用 `NEXT_PUBLIC_SITE_URL`，与 `src/app/layout.tsx:14` 的 metadataBase、robots/sitemap 生成相联。
- **建议**：有真实内容更新时间则用内容日期；没有则省略可选 `lastModified`，避免误导爬虫。部署前校验域名、协议、尾斜杠、canonical、OG、sitemap 相互一致。robots 规则 `src/config/robots.config.ts:16,20-37` 对 `*` 与特定 bot 单独成组，需用生产 robots 测试器确认目标搜索引擎对 `/_next/` 和其他限制的解释，不应假设通用组自动叠加到每个特定组。
- **验收**：抽检多条 sitemap `<lastmod>` 与内容更新事实匹配；部署域名在各类 metadata 中一致。

### P2 — 工程基线与功能扩展红线

- **证据**：`package.json:9` 保留 `next start`，静态导出部署实际为 `out/`；`.github/workflows/ci.yml:16` 使用 Node 20；随包安装指南最低 **Node 20.9**，旧《技术文档》写 >=18。`src/app/robots.ts` / `sitemap.ts` 的 `dynamic = 'force-static'` 可保留，但注释写“Next.js 15”已过期；静态导出不支持动态 request-time APIs、Server Actions、默认 image loader、ISR、Next server redirects/headers/proxy。
- **建议**：Node 环境说明更新为 >=20.9；实际预览用 `node scripts/serve-out.js` 或静态服务器；如考虑表单持久化、动态登录等，先决定外部 API/服务架构或切换 SSR 部署，不要按通用 Next 模板直接添加 Server Actions。`npm start` 可保留为将来切换部署模式的脚本，但本模式不要推荐用户用它预览。
- **验收**：CI Node 版本满足官方最低版本；部署方案与功能清单无不兼容项。

## 三、符合官方模式、无需为了“规范化”强改的部分

1. `src/app/layout.tsx:59-110` 的 `<html>`/`<body>` 根布局和 Server Component 元数据导出符合 App Router 模式；业务页面在布局/page 保留 metadata，客户端交互下沉。
2. `next.config.js` 的静态导出 + `trailingSlash` 与静态托管方向一致；关闭默认图片优化是常见兼容方案，但不能自动获得图片压缩收益。
3. `src/app/robots.ts` / `sitemap.ts` 是 Next 的**特殊元数据文件**，构建为 `.txt` / `.xml`；并非普通的 `/robots`、`/sitemap` 页面。
4. `tsconfig.json:7,17-24` 启用严格模式和 Next 插件；`eslint.config.mjs` 已使用 Next 16 的 flat config，`package.json:10` 用 `eslint .` 而非已移除的 `next lint`。
5. `src/app/not-found.tsx` 与 `src/app/error.tsx` 提供自定义异常体验。`/human` 在 `src/app/human/page.tsx:1,29-35` 的 Client Component 内用 `dynamic({ ssr: false })` 加载浏览器特效，与官方约束吻合。
6. 根 `loading.tsx` 先前造成**本项目**首屏骨架闪现，移除有实测背景；这不是静态导出在官方文档上的禁令。需要 loading 时可通过分段、稳定占位与实测重新评估。

## 四、开发文档统一结果（六份均已校对）

| 文件                                          | 此次处理                                                                                                          | 如何阅读                                 |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [技术文档](./技术文档.md)                     | 改 Node 最低版本、错误边界范围、`npm start` 用法、图片优化口径、48/43 差异、首页 `Price` 的动态导入；补本报告入口 | 项目架构介绍；统计以源码为准             |
| [React开发规范](./React开发规范.md)           | 将原“通用 AI 提示词”改成本项目静态导出适用规范；删除对未安装 Shadcn/Radix/Zod、Server Actions/SSR/ISR 的强制要求  | **现行操作规范**                         |
| [首页楼层组件分析](./首页楼层组件分析.md)     | 校正 9+9 为 8 静态 + 10 动态；home/shared 各 9；解释 `dynamic()` 非视口加载、Server Components 的收益             | 首页专项诊断；建议需实测                 |
| [代码规范与优化方案](./代码规范与优化方案.md) | 增加历史基线提示与现行规范入口，纠正 `loading.tsx` 为项目体验决策                                                 | 2026-09 旧方案及阶段记录，旧命令不可照抄 |
| [代码规范与优化](./代码规范与优化.md)         | 增加历史执行日志提示，避免把阶段中间状态误认成今天的状态                                                          | 保留会话追溯                             |
| [项目长期记忆](./项目长期记忆.md)             | 增加日期/语境提示与本报告入口                                                                                     | 保留项目决策与踩坑，不当作实时统计       |

### 统一后的文档约定

- **当前技术事实以代码和 `package.json` 为准**；Next API 约束以安装版本随包文档为准。
- “历史记录”章节不追溯改写当时的输出/失败数字；后来的校对通过文件顶部提示与本报告指向，避免伪造历史。
- 性能/SEO 的收益数字必须附实测手段和日期；“全部”“必须”“官方不支持”等用词只在官方确有对应限制时使用。
- 本次未改动源码、业务文案、已存在的个人/工程备份目录；原有未提交业务改动保持不动。

## 五、验证记录及尚未完成的工作

| 验证                                    | 本次结果                                                        | 注意                                                                |
| --------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| `tsc --noEmit`（项目内 TypeScript CLI） | **通过，exit 0**                                                | 基于当前磁盘工作区及已有 `.next` 类型；不代表 Linux 干净检出        |
| `eslint src --quiet`                    | **通过，0 error**                                               | 仅隔离源码错误；不是 `npm run lint` 的替代品                        |
| `eslint . --quiet`                      | **失败，635 errors**                                            | 主要命中未跟踪 `.next-stale-bak` 生成内容；建议先精确忽略再全量运行 |
| `npm run build`                         | **未成功执行**：`Another next build process is already running` | 原有构建占用；没有停止其进程、删除锁文件或清理构建目录              |
| `npm run validate-seo`                  | **本次未作为有效验证执行**                                      | 未完成本次 build；旧 `out/` 可能过期，且现行脚本逻辑不够严格        |
| 页面浏览器验收 / Cloudflare 发布        | **本次未执行**                                                  | LCP/CLS、真实静态资源请求、生产爬虫行为需后续独立验证               |

建议执行顺序：**①确认构建进程并等待其结束（不要强行覆盖）→②精确处理备份目录 lint 排除→③重跑 `npm run typecheck && npm run lint && npm run build && npm run validate-seo` →④本地预览 `out/` 并查控制台/网络/Core Web Vitals →⑤完善 SEO 校验器（五个页面已按业务确认加入）→⑥再做性能与 UI 迭代。** 每一步单独验证并保留视觉回归记录。

## 官方参考（与安装版本一致）

- 静态导出及不支持能力：[Static Exports](https://nextjs.org/docs/app/guides/static-exports)（仓库 `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`）
- 客户端/服务端动态导入区别：[Lazy Loading](https://nextjs.org/docs/app/guides/lazy-loading)（`.../02-guides/lazy-loading.md`）
- 根错误边界与 `global-error`：[error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)（`.../03-api-reference/03-file-conventions/error.md`）
- 图片 `priority` 弃用与 `unoptimized`：[Image](https://nextjs.org/docs/app/api-reference/components/image)（`.../03-api-reference/02-components/image.md`）
- Node 版本、脚本、构建/lint：[Installation](https://nextjs.org/docs/app/getting-started/installation)（`.../01-getting-started/01-installation.md`）
- sitemap/robots 特殊文件：[sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)、[robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)（`.../03-api-reference/03-file-conventions/01-metadata/`）
- 部署前检查：[Production Checklist](https://nextjs.org/docs/app/guides/production-checklist)（`.../02-guides/production-checklist.md`）
