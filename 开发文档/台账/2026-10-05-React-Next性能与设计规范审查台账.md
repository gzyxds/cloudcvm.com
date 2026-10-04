# React / Next.js 性能与设计规范审查台账

> 审查日期：2026-10-05  
> 状态：**仅审查与提出建议，未实施优化**。审查对象为本地工作区当时的源码；仓库在审查开始前已有未提交改动，本台账不将其算作本次改动。  
> 规则依据：`vercel-react-best-practices` 的 `rules/*.md`；框架语义以仓库随包 `node_modules/next/dist/docs/01-app/` 为准。**规则影响等级不等于已测得的网站严重度**。

## 一、审查边界与结论

- 技术基线：`package.json:35-42` 为 Next.js 16 / React 19 / Framer Motion / Three.js；`next.config.js:4-10` 为 App Router 静态导出（`out/`）、`images.unoptimized: true`、尾斜杠。Server Components 在构建时渲染，**不要为静态站推荐 Server Actions、运行时 SSR/ISR 或默认图片优化接口**。
- 方法：只读审查路由、共享客户端入口、轮播、WebGL、图片/视频、长页面和设计 token；核对关键资源在磁盘上的字节数。**本次未运行构建、浏览器网络/性能面板、Lighthouse 或 React Profiler；所有网络字节、LCP、INP、CLS、FPS、chunk 大小均未实测**。`out/` 是已有产物，未用其作为当前源码的性能证明。
- 总体判断：优先解决**隐藏视频仍被播放**与 **WebGL 生命周期清理**这类代码可确认的问题；然后针对共享 JS、非首屏媒体和图片优先级做浏览器基线测试。没有证据把“页面行数多”“用了 Framer Motion”或“4 个 MP4 合计 9.85 MiB”直接等同于用户一次访问的下载量。
- 优先级说明：**P1** = 建议先验证并治理的高影响范围/明确实现问题；**P2** = 基线实测后优化；**P3** = 一致性与维护规范。P1 不代表已经线上复现性能事故。

## 二、问题 → 对应规则 → 修改建议（按优先级）

| 编号 / 等级 | 问题与源码证据 | 对应规则 | 修改建议与验证 | 证据性质 |
| --- | --- | --- | --- | --- |
| P-01 / P1 | `VideoCarousel.tsx:223-243,250-268,560-570` 对活跃 slide 的 `<video>` 在 `useEffect` 中调用 `play()`，但它在手机端只由 CSS `hidden lg:block` 隐藏；四个 slide 均有 `src`，且 `preload="metadata"`。`public/videos/VideoCarousel{,1,2,3}.mp4` 合计 **10,329,941 B ≈ 9.85 MiB**，不是一次访问的已下载量。 | `bundle-conditional`（**媒体按需播放为类比**，非该规则原文的模块加载场景）；Next 图片/媒体按需原则 | 在移动端根本不播放桌面视频，可按视口分支仅挂载相应媒体或用可靠可见性状态控制 `play/pause`；非活跃视频按需设 `src` 或 `preload="none"`，保留 poster。用移动端网络面板确认视频请求和播放、切换、桌面首帧。 | 调用链明确；实际下载待测 |
| P-02 / P1 | `PixelBlast.tsx:403-404,644-675,722-748` 的 `visibilityRef` 初值为 `true`，目前没有看到改变它的路径；每帧持续 RAF。effect 清理只停 RAF、断开 ResizeObserver，几何体/material/composer/renderer 仅在重建分支 `:460-471` 被释放；依赖更新后非重建分支 `:695-720` 也未重启被清理的 RAF。`human/page.tsx:29-35,122-140` 虽使用动态导入，但 Hero 无条件挂载特效。 | `bundle-conditional`（**按需启动的类比**）；WebGL 生命周期回收属**技能规则外的补充审查** | 先修复 effect 清理/重建的资源所有权，确保卸载释放 WebGL、监听与 RAF，依赖变化后可正确重启；再按 `IntersectionObserver`/`visibilitychange`、`prefers-reduced-motion` 与设备能力决定是否启动。验收路由往返后的 GPU/内存和隐藏标签页 RAF。 | 清理路径明确；泄漏量/卡顿待测 |
| P-03 / P1 | `src/app/layout.tsx:104-108` 所有页面挂载 `FloatingToolbar`；该客户端组件 `:1-5,21-45` 静态引入 Framer Motion 并注册全局滚动监听，很多路由自身又挂载客户端 Header。共享客户端负担应优先检查。 | `bundle-conditional`、`bundle-dynamic-imports`；`client-event-listeners` 仅用于检查监听管理，**不是已发现重复监听** | 在真实构建中比对共享 chunk 与 hydration；将滚动触发/小按钮留为轻量外壳，弹窗动画与二维码内容按打开状态再加载，或先评估 CSS 过渡的可行性。保留客服即时可用，不应盲目把整个工具栏延迟到用户看不见。 | 挂载/导入确定；JS 体积待测 |
| P-04 / P1 | `Header.tsx:1,7,26-49,687-710` 为全客户端 Header，静态导入移动端 `Dialog`、`MobileMenu` 与各类导航数据；桌面端首次访问也会解析共享导航入口。 | `bundle-conditional`、`bundle-dynamic-imports` | 测量 Header chunk 和 `MobileMenu` 依赖占比；如确有收益，只在打开移动菜单时挂载/加载菜单主体，保留打开按钮、键盘焦点管理与菜单首开体验；静态可见的桌面导航不宜为了拆包引入闪烁。 | 代码事实；收益待测 |
| P-05 / P1 | `CatSections.tsx:76-91`、`Faqs.tsx:429-451` 和 `about/page.tsx:665-689` 存在长页面下部、移动端 CSS 隐藏的 `autoPlay loop preload="metadata"` 视频；`work/page.tsx:630-645` 为每个含 URL 的功能卡均挂载自动播放视频。CSS 隐藏或在页面下方**并不保证浏览器不请求/不播放**。 | `bundle-conditional`（**媒体启停类比**） | 对非首屏/不可见/省流模式提供 poster，进入视口时赋 `src` 并播放、离屏时暂停；为可操作的视频保留手动播放入口。分别记录移动/桌面冷启动视频请求数、传输字节与并发解码数。 | 属性与挂载明确；浏览器请求行为待测 |
| P-06 / P2 | `src/app/page.tsx:22-79,120-135` 注释称下方十个区块“用户滚动到才加载”，实际页面无视口条件，渲染时即列出 `dynamic()` 组件。Next 16 随包 `lazy-loading.md:28-60,74-76` 说明动态导入 ≠ 条件/滚动懒加载，Server Component 自身也不会因此按客户端组件拆包；`Price` 在第三层，是否首屏以下随视口而异。 | `bundle-dynamic-imports`、`bundle-conditional`；Next 官方 `lazy-loading.md` | 先用构建后的 Network/HTML 验证各 chunk 的下载时序与布局位移；只对真正高成本且非关键的客户端区块引入明确的视口条件。首屏保留稳定内容/尺寸，**不要机械地把首屏静态组件改成 dynamic**；同步更正注释。 | 注释与实现不符；净收益待测 |
| P-07 / P2 | `manju/page.tsx:47` 使用 `wanxiang.webp`（**1,675,774 B ≈ 1.60 MiB**）；`BananaProductPage.tsx:257-300,302-315` 中图片在独立 Demo 段，紧随文字 Hero，仍被设为 `priority` 并注释为“首屏 Hero”。它是否为 LCP 取决于视口；`next.config.js:6-8` 已关闭默认图片变体优化。 | `rendering-resource-hints`；Next 官方 `image.md` 的 `preload` / `fetchPriority` / `loading` 语义（**Next 16 `priority` 已弃用**） | 针对 `/manju/` 各视口实测 LCP 元素；如 Demo 图片并非首屏 LCP，则移除高优先级，采用正常/懒加载；如确是 LCP，再考虑恰当 `fetchPriority`/`preload`。无论如何预先生成恰当像素与压缩率的静态 WebP/AVIF，不建议在静态导出中直接“开启默认图片优化”。 | 文件字节及优先级明确；LCP 待测 |
| P-08 / P2 | `about/page.tsx:1-5`、`aiimage/page.tsx:1-4` 将长页面作为单个客户端入口，含动画/导航/静态介绍内容；局部交互与大量静态标记混在一起。 | `bundle-conditional`、`server-serialization`（拆分边界时仅传必要 props）；Next 官方 `static-exports.md:49-57` | 先确定互动区域和依赖边界，把纯展示区留在构建时渲染的 Server Component，交互部分下沉客户端小岛；对比 route JS、hydration 时长与 SEO HTML。页面行数**不是**体积指标。 | 边界确定；收益待测 |
| P-09 / P2 | `AiHeroSection.tsx:90-147,190-193,280-367` 在承载双版本图片跑马灯的父组件内逐字符更新打字机状态；`LogoClouds.tsx:77-89,103-135,159-166` 生成 **64 个** logo 节点并用无限 CSS 动画。重复 DOM 不等于重复下载。 | `rerender-memo`；`rendering-content-visibility` **仅适用于独立长列表/楼层的离屏布局绘制，不建议直接套在跑马灯内部** | 将打字机状态放入独立子组件；Profiler 验证其余 Hero 是否随字符更新。对合作伙伴区按首屏距离评估楼层级 `content-visibility: auto` 与 `contain-intrinsic-size`，验证锚点滚动与 CLS；精简重复节点须保证无缝循环。 | 重渲染传播/DOM 数可推断；实际耗时待测 |
| P-10 / P2 | `Advantage.tsx:295-331,340-347` 同一 RAF 中逐面板交错读取 `getBoundingClientRect/getComputedStyle` 和写入 CSS 变量，可能触发重复布局计算；现有 RAF 节流与后续 `{ passive: true }` 监听是**已采取的优化**。`public/images/screenshots/Advantage-1.svg` 大小 **1,013,388 B ≈ 0.97 MiB**。 | `js-batch-dom-css`；`rendering-content-visibility` 仅在该长区块离屏渲染有意义时试用 | 把面板几何与 stickyTop 读取集中在写样式之前；用 Performance 的 forced reflow/long frame 对比。检查 SVG 是否嵌大块位图/冗余路径，安全压缩并回归视觉；该区块图片已经 `loading="lazy"`，不要误写成首页首屏阻塞。 | 读写交错/文件大小明确；性能影响待测 |
| P-11 / P2 | `VideoCarousel.tsx:393-398` 在 `useMemo` 中对来源可能是 `customSlides`/`propSlides` 的数组直接 `.sort()`，会改变调用者传入数组；默认数组也会被原地排序。 | `js-tosorted-immutable` | 用 `toSorted()` 或 `[...items].sort()` 保持入参不变；检查浏览器兼容目标并验证排序与切换逻辑。此项是确定的不可变性问题，**不是已量化的性能收益**。 | 静态确认 |
| P-12 / P2 | `src/components/css/LogoClouds.module.css:4-16,55-77` 持续动画，手机端反而加速；`AiHeroSection.tsx:149-180` 注入无限跑马灯动画且无此处的减弱策略。`Advantage.module.css` 与 `Scenario.tsx` 已有 reduced-motion 实现，不应称全站缺失。 | 技能未覆盖无障碍减弱动画的专项规则，属**项目交互/性能设计规范补充**；媒体启停可参考 `bundle-conditional` 的按需思想 | 统一 `prefers-reduced-motion` 降级；非核心循环动画在离屏/隐藏标签页暂停；移动端避免为了活跃感提高 FPS/运动频次，验证低端机电量与可读性。 | 动画样式确定；影响待测 |
| P-13 / P3 | `src/styles/tailwind.css:19-23,68-80,125-145` 已有 `brand-500: #3860f4` 等色彩、圆角与阴影 token；`BananaProductPage.tsx:260,269,285-287` 和 `LogoClouds.tsx:109,147` 等仍用 `#0055ff` 硬编码，跨页面强调色分裂。 | **设计系统一致性，非 Vercel 性能规则** | 在设计确认品牌主色与历史视觉后把新组件统一到现有 `brand-*` token；已有特殊活动色保留语义命名，回归亮/暗色、对比度。勿为了性能目标批量替换品牌视觉。 | 静态确认 |

### 不作为本轮问题的正确实践

- `Analytics.tsx:39-43,67-71` 已对第三方统计采用 `next/script` 的 `afterInteractive`，契合 `bundle-defer-third-party`，不能写成同步阻塞。
- `Header.tsx:322-327` 的滚动监听已使用 `{ passive: true }`；`FloatingToolbar.tsx:32` 的 `scroll` 监听未指定该选项，建议**检查并保持与无 `preventDefault()` 用途相符**，但 `client-passive-event-listeners` 重点针对 touch/wheel，不应将其包装成已复现的滚动阻塞。
- `VideoCarousel.tsx:223-232` 已暂停非活跃 slide；`Advantage.tsx` 已做 RAF 节流；`next/image` 仍能保留宽高和加载属性，但 `images.unoptimized` 不会自动生成多尺寸/压缩图片。以上均不应抹掉。

## 三、适用于本项目的性能 / 设计规范

1. **构建与组件边界**：静态页面优先 Server Component 构建期输出，交互只落到小型 Client Component；`next/dynamic` 用于“非首屏且确需的客户端资源”，按需加载须有**明确启用条件**。Server → Client props 仅传必要的可序列化值，见 `server-serialization`。
2. **关键路径**：以各视口真实 LCP 资源决定 `fetchPriority` / `preload`；首屏骨架必须保留接近最终尺寸，禁止为“拆包率”牺牲稳定布局。其余资源先按视口、交互和需求决定是否请求，见 `bundle-conditional` / `rendering-resource-hints`。
3. **图片与视频**：静态导出场景在构建前预处理图片，并明确像素/宽高与尺寸；轮播只给当前设备/当前 slide 配置可播放源；视频具备 poster、可见性启停和省流降级，不把 CSS `display:none` 当作网络控制。媒体规范的后半部分是**本项目补充**，并非技能逐字规则。
4. **交互与动效**：连续动画仅在可见、用户未要求减弱动效时运行，卸载清理 RAF、observer、计时器和 WebGL 资源；高频状态限制在小组件中。对于视频、轮播、菜单验证键盘操作、焦点可达与静态后备内容。
5. **设计系统**：以 `src/styles/tailwind.css` 的 `brand-*`、字阶、圆角、阴影为新页面默认值；已有特殊主题应有语义化 token，不混用品牌蓝硬编码。切换断点时保持层级、可读性、可见焦点和稳定的图文比例；既有 UI 要做截图对比，性能优化不可改变业务可见性。
6. **性能预算与验收**：每次做 P1/P2 优化，先在 `out/` 对应的真实静态预览中采集首页、`/human/`、`/manju/`、`/work/` 的移动/桌面冷启动 Network、Performance 与 React Profiler 基线；记录路由 JS（压缩后）、媒体请求数/传输量、LCP 元素和耗时、INP、CLS、long tasks、离屏/后台 CPU-GPU。改动后与同设备/网络/缓存条件基线比较，不以历史构建表格或资源总大小代替真实结果。

## 四、建议的实施顺序（本台账未执行）

1. **立即核查并修正逻辑**：P-01 移动端隐藏视频的 `play()`；P-02 WebGL 清理、依赖变化与 visibility；P-11 props 数组原地排序。优先保护正确性与设备资源。
2. **建立测量基线**：四条代表路由在冷启动及回访下记录 JS、媒体、LCP/CLS/交互；确认 P-03/04 的共享 bundle 是否真值得拆分，P-05/07 的非首屏媒体或 preload 是否形成竞态。
3. **按证据改边界**：先缩小全站工具栏和移动菜单客户端负担，再处理首页楼层、长页面、AI 跑马灯与优势区；每一步保留截图、关键交互、SEO HTML 回归。
4. **收敛设计规范**：动效降级、媒体可见性、品牌 token 与代码注释同步更新；回填每条台账的“实测前/后数据、处理 PR/提交、结果与风险”。

## 五、依据与排除项

- 技能规则文件：`vercel-react-best-practices/rules/{bundle-conditional,bundle-dynamic-imports,server-serialization,rerender-memo,rendering-content-visibility,rendering-resource-hints,js-batch-dom-css,js-tosorted-immutable}.md`。标“类比”或“补充”的事项**不是**该规则直接定义的违规。
- Next.js 16 随包文档：`node_modules/next/dist/docs/01-app/02-guides/{lazy-loading,static-exports}.md`；`node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`。
- 与既有文档的关系：`开发文档/React开发规范.md` 是通用项目开发约束；`开发文档/Next.js官方规范审查与文档校对.md` 是框架与文档校对。本文件专注**性能与交互设计的可执行台账**，不覆盖已有审查或宣称历史问题仍未修复。
- 未审查外部视频真实体积、生产 CDN 压缩/缓存策略和真实用户监控；任何具体性能收益均需要上线前后数据证实。
