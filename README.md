# CloudCVM - 优刻云计算官方网站

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Code Quality](https://img.shields.io/badge/Code_Quality-A+-brightgreen?style=flat-square)

优刻云计算官方网站是一个现代化的云计算服务平台，专为中小微企业和开发者提供全球化云服务解决方案。基于 Next.js 16 + React 19 + TypeScript 5.8 + Tailwind CSS 4.1 构建，展示了企业级 Web 应用开发的最佳实践。

## 🚀 项目概述

优刻云计算是一个专业的云计算基础设施服务提供商，致力于为数百万中小微企业和开发者降低全球化上云成本。本项目包含完整的产品展示、用户认证系统、响应式设计和现代化的用户界面。

### 核心特性

- 🎨 **现代化设计**: 基于 Tailwind CSS 4.1 的响应式设计
- ⚡ **高性能**: Next.js 16 App Router 架构，支持 SSR 和 SSG
- 🔒 **用户认证**: 完整的登录和注册系统
- 📱 **移动优先**: 完全响应式设计，适配所有设备
- 🎯 **SEO 优化**: 内置 SEO 最佳实践和元数据管理
- 🛠️ **TypeScript**: 完整的类型安全支持
- 🎭 **组件化**: 可复用的 React 组件库

## 🛠️ 技术栈

### 核心框架

- **Next.js 16**: React 全栈框架，支持 App Router
- **React 19**: 最新版本的 React 库
- **TypeScript 5.8**: 静态类型检查

### 样式和 UI

- **Tailwind CSS 4.1**: 实用优先的 CSS 框架
- **@tailwindcss/forms**: 表单样式插件
- **@headlessui/react**: 无样式的可访问 UI 组件
- **clsx**: 条件类名工具

### 开发工具

- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **Sharp**: 图像优化

### 字体

- **Inter**: 主要文本字体
- **Lexend**: 显示字体

## 📁 项目结构

```
cloudcvm.com/
├── .github/workflows/ci.yml        # CI：npm ci → typecheck → lint → build → validate-seo
├── .husky/                         # pre-commit 钩子（lint-staged：eslint --fix + prettier --write）
├── public/                         # 静态资源（直接映射到站点根目录）
│   ├── images/                     # 图片（以 WebP 为主；联系人二维码/Logo 等保留原格式）
│   ├── videos/                     # 首页轮播视频（4 个 mp4）
│   └── favicon.ico / favicon.png / manifest.json
├── scripts/                        # 工具脚本（被 ESLint 忽略）
│   ├── optimize-images.js          # PNG/JPG → WebP（两道闸门：变大即丢弃 / 收益<15% 丢弃）
│   ├── update-image-refs.js        # 改写代码中的图片引用（含 .css 的 url()）
│   ├── cleanup-originals.js        # 删除原图（先反查引用再删）
│   ├── validate-seo.js             # 校验 out/ 的 robots.txt / sitemap.xml
│   ├── generate-ico.js             # 由 favicon.png 生成 favicon.ico
│   ├── serve-out.js                # 本地预览静态产物 out/（:8099）
│   └── fix-rsc-prefetch.js         # postbuild：修 Windows 本地构建的 RSC 预取路径
├── src/
│   ├── app/                        # App Router：48 个路由页 + 21 个 layout
│   │   ├── layout.tsx              # 根布局（全局 metadata / JSON-LD / 主题色）
│   │   ├── page.tsx                # 首页
│   │   ├── error.tsx / not-found.tsx
│   │   ├── robots.ts / sitemap.ts  # robots.txt / sitemap.xml 生成器
│   │   └── <route>/page.tsx        # 各业务页（ecs、ai、cdn、retail、human、ssl …）
│   ├── components/                 # 51 个组件，按职责分层
│   │   ├── ui/         (4)         # Button、Container、Logo、SectionHeader
│   │   ├── layout/     (7)         # SiteShell、Header、Footer、MegaMenu、MobileMenu …
│   │   ├── sections/  (33)         # 页面区块：home/(9)、shared/(13)、ai/(10+data)
│   │   ├── effects/    (1)         # PixelBlast（three.js，仅 /human 用，dynamic + ssr:false）
│   │   ├── analytics/  (1)         # Analytics
│   │   ├── carousel/   (1)         # VideoCarousel
│   │   └── css/        (4)         # CSS Module（存量冻结，新样式走 Tailwind）
│   ├── config/                     # seo / robots / sitemap 配置
│   ├── data/                       # navigation.ts（导航数据）
│   ├── hooks/                      # useActiveSection、useDebouncedHover
│   ├── images/                     # 少量经模块导入的图（avatars、screenshots）
│   ├── lib/                        # format.ts、utils.ts
│   ├── styles/tailwind.css         # 全站 Design Token 源（brand 色阶、radius、shadow、keyframes）
│   └── types/                      # product.ts、css.d.ts
├── 开发文档/                        # 项目文档（长期记忆 / 技术文档 / 规范与优化记录）
├── next.config.js                  # output:'export' / images.unoptimized / trailingSlash
├── wrangler.jsonc                  # Cloudflare Workers 部署（out/ 作为静态资产）
├── eslint.config.mjs               # ESLint 9 flat config
├── postcss.config.js / prettier.config.js / tsconfig.json
├── AGENTS.md / CLAUDE.md           # Next 16 自动生成，指向版本匹配的官方文档
└── out/ / .next/                   # 构建产物（git 忽略）
```

## 🚀 快速开始

### 环境要求

- Node.js 20.9 或更高版本（Next.js 16 的最低要求）
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**（如果适用）或解压模板文件

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

4. **访问应用**

   打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 可用脚本

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🎨 页面和组件说明

### 主要页面

全站 48 个静态页面，按业务线划分：

1. **首页 (`/`)**: 活动轮播 → 云服务器 Hero → 产品标签页 → 价格 → 解决方案 → 案例 → FAQ → 页脚
2. **云计算产品页**: `/ecs`、`/host`、`/server`、`/windows`、`/cdn`、`/ssl`、`/gpu`、`/lighthouse`
3. **AI 产品页**: `/ai`、`/chat`、`/human`、`/work`、`/paper`、`/video` 等
4. **行业解决方案页**: `/ecommerce`、`/retail`、`/finance`、`/game`、`/gov`、`/mobile`

> 页面 SEO metadata 分散在各 `layout.tsx`；新增页面时不要丢。

### 核心组件

- **首页区块** `sections/home/`：Hero、Leftright、Rightleft、Price、PrimaryFeatures、TwoColumnShowcase、Testimonials、Zone、LogoClouds
- **跨页共享区块** `sections/shared/`：ServiceTabs、PriceCard、Faqs、Scenario、Solution、Advantage、BentoGrids、CapabilityGrid 等
- **AI 专区区块** `sections/ai/`：AiHeroSection、AiScene、HotProducts、AiSolutionSection、ProductsSection 等
- **布局组件** `layout/`：SiteShell（14 个 layout 用的通用外壳）、Header + MegaMenu/MobileMenu、Footer
- **基础组件** `ui/`：Button、Container、Logo、SectionHeader

## 📊 代码质量分析

### ✅ 项目优势

- **现代技术栈**：使用最新的 Next.js 16、React 19、TypeScript 5.8
- **代码规范**：通过 ESLint、Prettier 确保代码质量
- **组件化设计**：良好的组件分层和复用性
- **响应式设计**：完整的移动端适配
- **无障碍性**：使用 Headless UI 确保可访问性
- **类型安全**：严格的 TypeScript 配置
- **性能优化**：静态导出配置，适合 CDN 部署

### 🔍 现状说明

- **Tailwind v4 主题配置位置**：主题 token（brand 色阶、radius、shadow、keyframes）定义在
  `src/styles/tailwind.css` 的 `@theme` 段——**没有也不需要 `tailwind.config.js`**（v4 起配置文件不再必需）
- **图片优化**：静态导出禁用了 Next.js 图片优化（`images.unoptimized: true`），图片必须在构建前用
  `scripts/` 流水线处理（见「性能优化建议 §1」）
- **组件注释**：45 个组件中 41 个已带函数级 JSDoc；新增代码沿用同一约定
- **错误处理**：已有 `src/app/error.tsx`（错误边界）与 `src/app/not-found.tsx`（404 页），静态导出产物中同时生成 `out/404.html`

## 🔧 自定义指南

### 修改品牌信息

1. **更新网站标题和描述**

   编辑 `src/app/layout.tsx` 中的 metadata 配置：

   ```typescript
   export const metadata: Metadata = {
     title: {
       template: '%s - 您的品牌名',
       default: '您的品牌名 - 您的标语',
     },
     description: '您的产品描述',
   }
   ```

2. **替换 Logo**

   更新 `src/components/ui/Logo.tsx` 组件中的 Logo 内容

3. **修改主题色彩**

   编辑 `src/styles/tailwind.css` 的 `@theme` 段（全站 Design Token 的唯一定义处）

### 组件开发规范

- 遵循现有的组件结构和命名规范
- 使用 TypeScript 进行严格类型定义
- 采用 Tailwind CSS 进行样式设计
- 确保组件的可复用性和可维护性
- 添加完整的 JSDoc 注释
- 支持无障碍性（a11y）标准

## 🛠️ 开发工作流

### 代码质量检查

```bash
# 检查 ESLint 规则
npm run lint

# 检查 TypeScript 类型
npx tsc --noEmit

# 检查代码格式
npx prettier --check .

# 自动修复格式问题
npx prettier --write .
```

### Git 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能开发
git commit -m "feat(auth): 添加用户登录功能"

# 问题修复
git commit -m "fix(ui): 修复移动端导航菜单显示问题"

# 文档更新
git commit -m "docs(readme): 更新安装说明"

# 代码重构
git commit -m "refactor(components): 优化按钮组件结构"
```

### 分支管理

- `main`：唯一长期分支；**push 即触发 CI 与 Cloudflare 生产构建发布**
- 需要评审的改动：开 `feature/*` 分支 → PR（CI + Vercel 预览）→ 合回 main

## 🚀 性能优化建议

### 1. 图片优化

项目自带图片流水线（`scripts/`），新增图片后按序执行：

```bash
npm run images:optimize            # PNG/JPG → WebP（转完更大或收益 <15% 会自动丢弃）
node scripts/update-image-refs.js  # 改写代码引用（含 .css 的 url()）
node scripts/cleanup-originals.js  # 删除原图（先反查引用再删）
```

> ⚠️ 静态导出下 `next/image` 只是普通 `<img>`（`images.unoptimized: true`），图片优化必须在构建前完成。

### 2. 代码分割

```tsx
// 动态导入大型组件
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})
```

### 3. 缓存策略

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### 添加新页面

在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件：

```typescript
// src/app/about/page.tsx
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
}

export default function About() {
  return (
    <div>
      <h1>关于我们</h1>
      {/* 页面内容 */}
    </div>
  )
}
```

### 自定义组件

所有组件都位于 `src/components/` 目录中，您可以：

1. 修改现有组件的样式和内容
2. 创建新的可复用组件
3. 调整组件的 props 和功能

## 🎯 SEO 优化

该模板已内置 SEO 最佳实践：

- **元数据管理**: 每个页面都有独立的 metadata 配置
- **语义化 HTML**: 使用正确的 HTML 标签结构
- **图片优化**: 使用 Next.js Image 组件自动优化
- **性能优化**: 代码分割和懒加载

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署

### 其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🔍 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

配置详见 `package.json` 中的 `browserslist` 字段。

## 📝 许可证

本网站模板是商业产品，遵循 [Tailwind Plus 许可证](https://tailwindcss.com/plus/license)。

## 📚 学习资源

要了解更多关于本模板使用的技术，请参考以下资源：

- [Tailwind CSS 文档](https://tailwindcss.com/docs) - Tailwind CSS 官方文档
- [Next.js 文档](https://nextjs.org/docs) - Next.js 官方文档
- [React 文档](https://react.dev) - React 官方文档
- [TypeScript 文档](https://www.typescriptlang.org/docs) - TypeScript 官方文档
- [Headless UI 文档](https://headlessui.dev) - Headless UI 官方文档

## 🤝 技术支持

如果您在使用过程中遇到问题，建议：

1. 查阅相关技术文档
2. 检查 GitHub Issues
3. 联系 Tailwind Plus 支持团队

---

**注意**: 这是一个高级模板，建议具备 React、Next.js 和 Tailwind CSS 基础知识后使用。
