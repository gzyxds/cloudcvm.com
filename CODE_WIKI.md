# CloudCVM.com - Code Wiki 技术文档

> **项目名称**: cloudcvm.com (优刻云计算)  
> **版本**: 5.0.0  
> **项目类型**: 纯前端企业官网 / 云计算服务平台  
> **部署方式**: Next.js 静态导出 (`output: 'export'`)  
> **技术栈**: Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4  

---

## 目录

1. [项目整体架构](#1-项目整体架构)
2. [技术栈详解](#2-技术栈详解)
3. [目录结构](#3-目录结构)
4. [模块职责说明](#4-模块职责说明)
   - [4.1 页面路由模块 (src/app/)](#41-页面路由模块-srcapp)
   - [4.2 组件库 (src/components/)](#42-组件库-srccomponents)
   - [4.3 配置模块 (src/config/)](#43-配置模块-srcconfig)
   - [4.4 样式系统 (src/styles/)](#44-样式系统-srcstyles)
   - [4.5 工具库 (src/lib/)](#45-工具库-srclib)
   - [4.6 静态资源 (public/)](#46-静态资源-public)
   - [4.7 脚本工具 (scripts/)](#47-脚本工具-scripts)
5. [关键类与函数说明](#5-关键类与函数说明)
6. [依赖关系](#6-依赖关系)
7. [项目运行方式](#7-项目运行方式)
8. [设计规范与约定](#8-设计规范与约定)

---

## 1. 项目整体架构

### 1.1 架构概览

本项目是一个 **100% 纯前端、静态导出的 Next.js 15 企业官网**，无后端服务、无 API 路由、无数据库。所有页面在构建时预渲染为静态 HTML/CSS/JS，部署到任意静态文件服务器（如 Nginx、CDN）。

```
┌─────────────────────────────────────────────────────────────┐
│                     浏览器 (Client)                          │
├─────────────────────────────────────────────────────────────┤
│  React 19 Components  │  Framer Motion  │  Three.js / GSAP │
├─────────────────────────────────────────────────────────────┤
│                   Next.js 15 App Router                      │
│  ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐  │
│  │  首页   │ │ 云产品页 │ │  AI页面  │ │  解决方案页   │  │
│  │  (/)    │ │ (/ecs等) │ │ (/ai等)  │ │ (/ecommerce等)│  │
│  └─────────┘ └──────────┘ └──────────┘ └───────────────┘  │
├─────────────────────────────────────────────────────────────┤
│              静态构建输出 (next build → out/)                 │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 页面转化漏斗设计

首页遵循"视觉冲击 → 功能展示 → 解决方案 → 商业转化 → 社会证明 → 行动引导"的用户浏览路径:

```
Header → VideoCarousel → Hero → ServiceTabs → PrimaryFeatures
→ Leftright → Rightleft → Solution → Erlie → Scenario
→ Accordion → Price → BentoGrids → Advantage
→ Testimonials → Customer → Zone → Faqs → Logoclouds → CatSections → Footer
```

### 1.3 三大业务线

| 业务线 | 路由前缀 | 说明 |
|--------|----------|------|
| 云计算基础设施 | `/ecs`, `/host`, `/server`, `/windows`, `/cdn`, `/ssl` | 云服务器、虚拟主机、独立服务器、CDN、SSL |
| 人工智能产品 | `/ai`, `/chat`, `/work`, `/paper`, `/human`, `/video` | 艺创AI、数字分身、知识库、论文创作 |
| AI 解决方案 | `/banana`, `/jimeng`, `/jmdraw`, `/sora`, `/ppt` 等 12 个 | 面向特定场景的 AI 工具页面 |
| 行业解决方案 | `/ecommerce`, `/retail`, `/mobile`, `/game`, `/gov` 等 | 电商、金融、游戏、政府等行业云方案 |

---

## 2. 技术栈详解

### 2.1 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| [Next.js](https://nextjs.org/) | 15.4.8 | 全栈框架 (App Router) - 页面路由、SSG/SSR、元数据管理 |
| [React](https://react.dev/) | 19.0.1 | UI 组件框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.3 | 类型系统 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.11 | 原子化 CSS 框架 (v4 with `@theme` syntax) |

### 2.2 UI/交互库

| 技术 | 版本 | 用途 |
|------|------|------|
| [@headlessui/react](https://headlessui.com/) | 2.2.6 | 无障碍头部 UI 组件 (Popover, Dialog, Disclosure, Transition) |
| [@heroicons/react](https://heroicons.com/) | 2.2.0 | SVG 图标库 (outline + solid) |
| [lucide-react](https://lucide.dev/) | 0.540.0 | 现代 SVG 图标库 (用于 ServiceTabs 等组件) |
| [framer-motion](https://www.framer.com/motion/) | 12.23.12 | 声明式动画与手势库 |
| [GSAP](https://gsap.com/) | 3.14.2 | 高性能动画引擎 |
| [Three.js](https://threejs.org/) | 0.179.1 | 3D 图形渲染 |
| [postprocessing](https://github.com/pmndrs/postprocessing) | 6.38.2 | Three.js 后处理特效 |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | 条件类名合并工具 |

### 2.3 构建/开发工具

| 工具 | 用途 |
|------|------|
| ESLint 9 + `eslint-config-next` | 代码规范检查 |
| Prettier 3 + `prettier-plugin-tailwindcss` | 代码格式化与 Tailwind 类名排序 |
| PostCSS + `@tailwindcss/postcss` | CSS 预处理 |
| `@tailwindcss/forms` | 表单样式插件 |
| Sharp 0.34.3 | 图片优化 (用于 Image 组件) |

### 2.4 TypeScript 配置要点

- **目标**: ES6
- **模块解析**: bundler (Next.js 内部使用)
- **路径别名**: `@/*` → `./src/*`
- **严格模式**: 启用 (`strict: true`)
- **JSX**: preserve (由 Next.js 编译器处理)

---

## 3. 目录结构

```
e:\Github\cloudcvm.com\
├── .trae/                          # Trae AI 规则配置
│   └── rules/
│       ├── UI_DESIGN_STYLE.md      # UI 设计规范（核心设计文档）
│       ├── git-commit-message.md   # Git 提交信息规范
│       └── project_rules.md        # 项目规则
├── public/                         # 静态资源（直接映射到网站根目录）
│   └── images/                     # 按功能分目录的图片资源
│       ├── Logoclouds/             # 合作方 Logo
│       ├── aisolution/             # AI 解决方案配图
│       ├── background/             # 背景图
│       ├── carousel/               # 轮播图
│       ├── contact/                # 联系二维码 (QQ/微信/小程序等)
│       ├── logos/                  # 站点 Logo (SVG/JPG)
│       ├── product/                # 产品配图
│       ├── screenshots/            # 截图/视频素材
│       └── solutions/              # 解决方案配图
├── scripts/                        # 工具脚本
│   └── validate-seo.js            # SEO 验证脚本
├── src/                            # 源代码
│   ├── app/                        # Next.js 15 App Router 页面路由
│   │   ├── layout.tsx              # 根布局（全站 SEO/元数据/Analytics）
│   │   ├── page.tsx                # 首页
│   │   ├── not-found.tsx           # 自定义 404 页面
│   │   ├── robots.ts               # 动态生成 robots.txt
│   │   ├── sitemap.ts              # 动态生成 sitemap.xml
│   │   ├── about/                  # 关于我们
│   │   ├── contact/                # 联系我们
│   │   ├── support/                # 技术支持
│   │   ├── demo/                   # 产品演示
│   │   ├── ecs/                    # 云服务器 ECS
│   │   ├── host/                   # 虚拟主机
│   │   ├── server/                 # 独立服务器
│   │   ├── windows/                # Windows 服务器
│   │   ├── cdn/                    # CDN 服务
│   │   ├── ssl/                    # SSL 证书
│   │   ├── ai/                     # 艺创AI 主页
│   │   ├── chat/                   # AI 聊天绘画
│   │   ├── work/                   # 企业知识库
│   │   ├── paper/                  # 论文创作
│   │   ├── human/                  # 数字分身
│   │   ├── video/                  # AI 视频生成
│   │   ├── new/                    # 最新活动
│   │   ├── banana/                 # 香蕉绘画 (AI 图像生成)
│   │   ├── drama/                  # 短剧小说创作
│   │   ├── jimeng/                 # 即梦 AI 视频
│   │   ├── jmdraw/                 # 即梦 AI 绘画
│   │   ├── manju/                  # 漫剧创作
│   │   ├── model/                  # 电商试衣换装
│   │   ├── music/                  # AI 音乐
│   │   ├── ppt/                    # AI PPT
│   │   ├── resume/                 # AI 简历
│   │   ├── sora/                   # Sora 视频生成
│   │   ├── videoclip/              # 视频混剪助手
│   │   ├── xhs/                    # 小红书助手
│   │   ├── ecommerce/              # 电商解决方案
│   │   ├── retail/                 # 零售解决方案
│   │   ├── eccloud/                # 电商云
│   │   ├── cms/                    # 内容管理系统
│   │   ├── finance/                # 金融解决方案
│   │   ├── game/                   # 游戏解决方案
│   │   ├── gov/                    # 政府解决方案
│   │   ├── mobile/                 # 移动解决方案
│   │   ├── aiservice/              # 智能客服
│   │   └── agent/                  # 云端代理
│   ├── components/                 # 可复用组件库
│   │   ├── Header.tsx              # 全局导航栏（响应式/多级下拉菜单）
│   │   ├── Footer.tsx              # 全局页脚（导航/二维码/友情链接）
│   │   ├── Logo.tsx                # Logo 组件
│   │   ├── Hero.tsx                # 首页英雄区
│   │   ├── Advantage.tsx           # 竞争优势展示
│   │   ├── Analytics.tsx           # 数据统计埋点（百度/Microsoft Clarity）
│   │   ├── BentoGrids.tsx          # Bento 网格布局（手风琴特性卡片）
│   │   ├── Button.tsx              # 通用按钮组件
│   │   ├── CatSections.tsx         # 分类区块
│   │   ├── Container.tsx           # 响应式容器（max-w-[1800px]）
│   │   ├── Faqs.tsx                # FAQ 问答区块
│   │   ├── Fields.tsx              # 表单字段
│   │   ├── HeaderCarousel.tsx      # 头部轮播
│   │   ├── Logoclouds.tsx          # Logo 云展示
│   │   ├── Price.tsx               # 价格展示
│   │   ├── Pricing.tsx             # 定价方案
│   │   ├── PrimaryFeatures.tsx     # 核心特性展示
│   │   ├── ServiceTabs.tsx         # 服务标签页（带 Framer Motion 动画）
│   │   ├── Solution.tsx            # 解决方案展示
│   │   ├── Testimonials.tsx        # 客户评价
│   │   ├── Zone.tsx                # 区域组件
│   │   ├── NavLink.tsx             # 导航链接
│   │   ├── Products.tsx            # 产品展示
│   │   ├── SlimLayout.tsx          # 窄版布局（用于 404 等页面）
│   │   ├── ai/                     # AI 相关专用组件
│   │   │   ├── AIProductsSection.tsx      # AI 产品区块
│   │   │   ├── AIscene.tsx                # AI 应用场景
│   │   │   ├── Aicarousel.tsx             # AI 轮播
│   │   │   ├── Aisd.tsx                   # AI 服务设计
│   │   │   ├── FAQSection.tsx             # FAQ 区块
│   │   │   ├── Hero.tsx                   # AI 页面英雄区
│   │   │   ├── HotProducts.tsx            # 热门产品
│   │   │   ├── ProductFeaturesSection.tsx # 产品功能区块
│   │   │   ├── ProductTerminalsSection.tsx# 产品终端区块
│   │   │   ├── ProductsSection.tsx        # 产品模块
│   │   │   └── data/products.ts          # AI 产品数据配置
│   │   ├── carousel/               # 轮播组件
│   │   │   ├── VideoCarousel.tsx   # 首页视频轮播
│   │   │   └── index.ts
│   │   ├── common/                 # 通用业务组件
│   │   │   ├── Accordion.tsx       # 手风琴组件
│   │   │   ├── Cardprice.tsx       # 价格卡片
│   │   │   ├── Customer.tsx        # 客户案例
│   │   │   ├── Erlie.tsx           # 二列布局
│   │   │   ├── Leftright.tsx       # 左右布局
│   │   │   ├── Rightleft.tsx       # 右左布局
│   │   │   ├── PixelBlast.tsx      # 像素爆炸效果
│   │   │   ├── ProductTraits.tsx   # 产品特性
│   │   │   ├── QRCode.tsx          # 二维码组件
│   │   │   ├── Scenario.tsx        # 场景组件
│   │   │   ├── Superiority.tsx     # 优势组件
│   │   │   ├── Top.tsx             # 返回顶部按钮
│   │   │   └── ecshop.tsx          # 电商组件
│   │   └── css/
│   │       └── Logoclouds.module.css
│   ├── config/                     # 集中化配置文件
│   │   ├── seo.config.ts           # SEO 核心配置（站点信息/OG/分析工具/页面列表）
│   │   ├── robots.config.ts        # robots.txt 生成配置
│   │   ├── sitemap.config.ts       # sitemap.xml 生成配置
│   │   └── index.ts                # 统一导出 + 工具函数
│   ├── lib/                        # 工具库
│   ├── styles/                     # 全局样式
│   │   └── tailwind.css            # Tailwind CSS 4 主题定制 + 组件类
│   └── images/                     # 源码内引用图片
├── next.config.js                  # Next.js 配置（静态导出）
├── package.json                    # 项目依赖与脚本
├── tsconfig.json                   # TypeScript 配置
├── postcss.config.js               # PostCSS 配置
├── prettier.config.js              # Prettier 配置
├── .eslintrc.json                  # ESLint 配置
└── .gitignore                      # Git 忽略规则
```

---

## 4. 模块职责说明

### 4.1 页面路由模块 (`src/app/`)

使用 Next.js 15 **App Router** 的文件系统路由。每个路由目录对应一个 URL 路径。

#### 4.1.1 系统级文件

| 文件 | 职责 |
|------|------|
| [layout.tsx](file:///e:/Github/cloudcvm.com/src/app/layout.tsx) | **根布局组件** - 提供全局 HTML 结构、SEO 元数据、结构化数据(JSON-LD)、搜索引擎验证标签、统计脚本。所有子页面自动继承此布局。 |
| [page.tsx](file:///e:/Github/cloudcvm.com/src/app/page.tsx) | **首页组件** - 按转化漏斗组装 20+ 个子组件。 |
| [not-found.tsx](file:///e:/Github/cloudcvm.com/src/app/not-found.tsx) | **404 页面** - 自定义未找到页面。 |
| [robots.ts](file:///e:/Github/cloudcvm.com/src/app/robots.ts) | **robots.txt 生成器** - 调用 `robots.config.ts` 中的 `generateRobots()` 动态生成。 |
| [sitemap.ts](file:///e:/Github/cloudcvm.com/src/app/sitemap.ts) | **sitemap.xml 生成器** - 调用 `sitemap.config.ts` 中的 `generateSitemap()` 动态生成。 |

#### 4.1.2 页面结构模式

大部分产品/解决方案页面遵循统一的页面结构模式:

```tsx
// 典型页面结构 (以 /banana 为例)
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaClientPage from './BananaClientPage'

export const metadata: Metadata = { /* 页面专属 SEO 元数据 */ }

export default function BananaPage() {
  return (
    <>
      <Header />           {/* 全局导航栏 */}
      <main>
        <BananaClientPage />  {/* 页面主体内容 (客户端组件) */}
      </main>
      <Footer />           {/* 全局页脚 */}
    </>
  )
}
```

**设计模式说明**:
- **服务端组件 (page.tsx)**: 负责 SEO 元数据导出，服务端渲染 Header/Footer 框架
- **客户端组件 (*ClientPage.tsx)**: 包含交互逻辑 (useState, useRef, Framer Motion 等)，作为页面主体内容。通过 `'use client'` 指令标记

**`'use client'` 使用情况**:
- `Header.tsx` - 需要管理移动端菜单开关状态
- `Footer.tsx` - 需要管理移动端手风琴折叠状态
- `ServiceTabs.tsx` - 需要 Framer Motion 动画
- `Solution.tsx` - 需要交互状态
- `BentoGrids.tsx` - 需要手风琴展开状态
- `Analytics.tsx` - 需要在客户端注入统计脚本
- 各 AI 页面 `*ClientPage.tsx` - 需要复杂交互

#### 4.1.3 路由完整清单 (33+ 个页面)

| 路由 | 文件 | 页面类型 | 优先级 |
|------|------|----------|--------|
| `/` | `page.tsx` | 首页 | 1.0 |
| `/about` | `about/page.tsx` | 公司介绍 | 0.8 |
| `/ai` | `ai/page.tsx` | AI 产品主入口 | 0.9 |
| `/aiservice` | `aiservice/page.tsx` | 智能客服 | 0.9 |
| `/chat` | `chat/page.tsx` | AI 聊天绘画 | 0.8 |
| `/agent` | `agent/page.tsx` | 云端代理/推广合作 | 0.8 |
| `/ecs` | `ecs/page.tsx` | 云服务器 | 0.9 |
| `/cdn` | `cdn/page.tsx` | CDN 服务 | 0.8 |
| `/ssl` | `ssl/page.tsx` | SSL 证书 | 0.8 |
| `/host` | `host/page.tsx` | 虚拟主机 | 0.8 |
| `/server` | `server/page.tsx` | 独立服务器 | 0.8 |
| `/windows` | `windows/page.tsx` | Windows 服务器 | 0.8 |
| `/cms` | `cms/page.tsx` | 内容管理系统 | 0.7 |
| `/contact` | `contact/page.tsx` | 联系我们 | 0.7 |
| `/support` | `support/page.tsx` | 技术支持 | 0.7 |
| `/eccloud` | `eccloud/page.tsx` | 电商云 | 0.6 |
| `/ecommerce` | `ecommerce/page.tsx` | 电商解决方案 | 0.6 |
| `/human` | `human/page.tsx` | 数字分身 | 0.6 |
| `/retail` | `retail/page.tsx` | 零售解决方案 | 0.6 |
| `/video` | `video/page.tsx` | AI 视频生成 | 0.6 |
| `/work` | `work/page.tsx` | 企业知识库 | 0.6 |
| `/paper` | `paper/page.tsx` | 论文创作 | 0.5 |
| `/demo` | `demo/page.tsx` | 产品演示 | 0.5 |
| `/new` | `new/page.tsx` | 最新活动 | 0.6 |
| 12 个 AI 方案页 | `banana`, `drama`, `jimeng`, `jmdraw`, `manju`, `model`, `music`, `ppt`, `resume`, `sora`, `videoclip`, `xhs` | AI 专项工具 | 0.5 |
| 6 个行业方案页 | `mobile`, `game`, `finance`, `gov` 等 | 行业方案 | 0.6-0.7 |

### 4.2 组件库 (`src/components/`)

#### 4.2.1 全局布局组件

| 组件 | 文件 | 类型 | 职责 |
|------|------|------|------|
| **Header** | [Header.tsx](file:///e:/Github/cloudcvm.com/src/components/Header.tsx) | 客户端组件 | 全局导航栏。响应式设计（桌面端 Popover 下拉菜单 + 移动端 Dialog 侧边栏）。包含 5 个菜单分类：产品与服务、人工智能、AI 解决方案、企业解决方案、关于我们。每个菜单使用 Headless UI 的 `Popover`/`Disclosure` 实现。 |
| **Footer** | [Footer.tsx](file:///e:/Github/cloudcvm.com/src/components/Footer.tsx) | 客户端组件 | 全局页脚。6 列导航 + 二维码展示区 + 友情链接 + 社交媒体图标 + ICP 备案号。移动端使用手风琴折叠。 |
| **Logo** | [Logo.tsx](file:///e:/Github/cloudcvm.com/src/components/Logo.tsx) | 服务端组件 | 站点 Logo 图片组件。使用 Next.js `Image` 组件加载 SVG。固定尺寸 109×40。 |
| **Container** | [Container.tsx](file:///e:/Github/cloudcvm.com/src/components/Container.tsx) | 服务端组件 | 响应式容器包装器。最大宽度 1800px，水平居中。 |
| **Analytics** | [Analytics.tsx](file:///e:/Github/cloudcvm.com/src/components/Analytics.tsx) | 客户端组件 | 统计分析集成。通过 `next/script` 的 `afterInteractive` 策略异步加载百度统计和 Microsoft Clarity 脚本。 |

#### 4.2.2 首页核心组件

| 组件 | 文件 | 职责 |
|------|------|------|
| **VideoCarousel** | `carousel/VideoCarousel.tsx` | 首页视频轮播，位于 Header 下方 |
| **Hero** | [Hero.tsx](file:///e:/Github/cloudcvm.com/src/components/Hero.tsx) | 首屏英雄区。包含品牌口号、CTA 按钮、背景光效装饰。 |
| **ServiceTabs** | [ServiceTabs.tsx](file:///e:/Github/cloudcvm.com/src/components/ServiceTabs.tsx) | 服务分类标签页。使用 Framer Motion `AnimatePresence` 实现切换动画。展示云计算/AI/基础服务三大类。 |
| **PrimaryFeatures** | [PrimaryFeatures.tsx](file:///e:/Github/cloudcvm.com/src/components/PrimaryFeatures.tsx) | 核心功能特性展示。 |
| **Solution** | [Solution.tsx](file:///e:/Github/cloudcvm.com/src/components/Solution.tsx) | 解决方案卡片展示（音视频、互动直播、在线教育等）。支持交互式切换。 |
| **BentoGrids** | [BentoGrids.tsx](file:///e:/Github/cloudcvm.com/src/components/BentoGrids.tsx) | Bento 网格布局。桌面端为手风琴式展开卡片（鼠标悬停切换），移动端为网格布局。实现了 `AccordionFeatureCard` 和 `MobileFeatureCard` 两个子组件。 |
| **Price** | [Price.tsx](file:///e:/Github/cloudcvm.com/src/components/Price.tsx) | 价格展示区块。 |
| **Pricing** | [Pricing.tsx](file:///e:/Github/cloudcvm.com/src/components/Pricing.tsx) | 定价方案表格（爱好者/自由职业者/创业版/企业版）。 |
| **Advantage** | [Advantage.tsx](file:///e:/Github/cloudcvm.com/src/components/Advantage.tsx) | 竞争优势展示。 |
| **Testimonials** | [Testimonials.tsx](file:///e:/Github/cloudcvm.com/src/components/Testimonials.tsx) | 客户评价区块。 |
| **Faqs** | [Faqs.tsx](file:///e:/Github/cloudcvm.com/src/components/Faqs.tsx) | FAQ 常见问题解答。 |
| **Logoclouds** | [Logoclouds.tsx](file:///e:/Github/cloudcvm.com/src/components/Logoclouds.tsx) | 合作方 Logo 云展示。 |
| **Zone** | [Zone.tsx](file:///e:/Github/cloudcvm.com/src/components/Zone.tsx) | 数据中心/可用区展示。 |

#### 4.2.3 通用布局组件 (`common/`)

| 组件 | 职责 |
|------|------|
| **Accordion** | 手风琴折叠面板 |
| **Leftright** | 左图右文布局 |
| **Rightleft** | 右图左文布局 |
| **Erlie** | 二列布局 |
| **Scenario** | 应用场景展示 |
| **Customer** | 客户案例卡片 |
| **Cardprice** | 价格卡片 |
| **ProductTraits** | 产品特性列表 |
| **Superiority** | 优势说明组件 |
| **PixelBlast** | 像素爆炸视觉特效 |
| **QRCode** | 二维码展示组件 |
| **Top** | 返回顶部浮动按钮 |
| **ecshop** | 电商专用组件 |

#### 4.2.4 AI 专用组件 (`ai/`)

| 组件 | 职责 |
|------|------|
| **AIProductsSection** | AI 产品展示区块 |
| **AIscene** | AI 应用场景展示 (使用 `React.memo` 优化) |
| **Aicarousel** | AI 轮播组件 |
| **Aisd** | AI 服务设计展示 |
| **FAQSection** | AI 页面 FAQ 区块 |
| **Hero** | AI 页面专用 Hero 组件 |
| **HotProducts** | 热门 AI 产品推荐 |
| **ProductFeaturesSection** | AI 产品功能说明 |
| **ProductTerminalsSection** | AI 产品终端支持展示 |
| **ProductsSection** | AI 产品列表模块 |
| **data/products.ts** | AI 产品数据配置文件（静态数据） |

### 4.3 配置模块 (`src/config/`)

配置模块是本项目的亮点之一，实现了 **SEO 集中化管理**：

| 文件 | 职责 |
|------|------|
| [seo.config.ts](file:///e:/Github/cloudcvm.com/src/config/seo.config.ts) | **核心 SEO 配置**。包含: 站点基本信息（URL/名称/标题/描述/关键词）、搜索引擎验证码（Google/Baidu/360/Sogou/Shenma/Bing）、分析工具 ID（百度/Google Analytics/Clarity）、Open Graph 配置、Twitter Card 配置、33 个页面的 sitemap 路径及优先级 |
| [robots.config.ts](file:///e:/Github/cloudcvm.com/src/config/robots.config.ts) | **robots.txt 生成逻辑**。针对多种爬虫定制规则: 通用爬虫 (crawlDelay:1)、百度蜘蛛 (crawlDelay:2)、Googlebot、360Spider、搜狗蜘蛛，并屏蔽营销爬虫 (AhrefsBot/SemrushBot/MJ12bot) |
| [sitemap.config.ts](file:///e:/Github/cloudcvm.com/src/config/sitemap.config.ts) | **sitemap.xml 生成逻辑**。从 `seoConfig.pages` 读取路径列表，自动生成完整的 sitemap 条目 |
| [index.ts](file:///e:/Github/cloudcvm.com/src/config/index.ts) | **统一导出模块**。导出所有配置对象 + `seoUtils` 工具函数（`getFullUrl`/`getPageConfig`/`isUrlInSitemap`）+ `PageConfig` 类型定义 |

### 4.4 样式系统 (`src/styles/`)

唯一样式文件: [tailwind.css](file:///e:/Github/cloudcvm.com/src/styles/tailwind.css)

**核心定制内容**:

1. **Tailwind CSS 4 `@theme` 配置**:
   - 字体大小：从 `text-xs` 到 `text-9xl` 全部显式定义
   - 圆角：新增 `--radius-4xl: 2rem`
   - 字体族：`--font-sans` 和 `--font-display` 均为系统无衬线字体栈
   - 容器最大宽度：`--container-2xl: 80rem`

2. **品牌色系统**:
   - **Indigo 重写为科技蓝**: `--color-indigo-500/600` = `#0055ff`
   - **Primary 色系**: 基于 Indigo 600 的核心强调色系统
   - **Accent 色**: 与 Indigo 500 对齐

3. **自定义动画**:
   - `scan`: 扫描线效果（从上到下，2s 循环）
   - `progressBar`: 水平进度条动画（从 0 到 100%）
   - `verticalProgressBar`: 垂直进度条动画

4. **组件类 (Tailwind `@layer components`)**:
   - `.bento-card`: Bento 网格卡片样式（细边框、白底）
   - `.bento-grid`: Bento 网格容器（gap-4）
   - `.corner-marker`: 角标样式
   - `.border-glow`: 边框发光悬停效果（渐变背景 hover）
   - `.btn`: 通用按钮基础样式
   - `.btn-primary`: 主按钮样式（`bg-primary-500`、白色文字）

5. **滚动条工具类**:
   - `.scrollbar-hide`: 隐藏滚动条（兼容 Firefox + WebKit）

### 4.5 工具库 (`src/lib/`)

存放通用工具函数和类型定义。当前内容较少，主要工具函数集中在 `src/config/index.ts` 中的 `seoUtils`。

### 4.6 静态资源 (`public/`)

| 目录 | 内容 | 数量 |
|------|------|------|
| `public/images/Logoclouds/` | 合作方 Logo | 15 张 |
| `public/images/aisolution/` | AI 解决方案配图 | 37 张 |
| `public/images/background/` | 背景图 | 9 张 |
| `public/images/carousel/` | 轮播图 | 15 张 |
| `public/images/contact/` | 联系二维码 | 5 张 |
| `public/images/logos/` | 站点 Logo | 7 个 SVG/JPG |
| `public/images/product/` | 产品配图 | 60+ 张 |
| `public/images/screenshots/` | 截图/视频素材 | 60+ 张 |
| `public/images/solutions/` | 解决方案配图 | 10+ 张 |
| `public/` | favicon + og-image | 3 个文件 |

### 4.7 脚本工具 (`scripts/`)

| 脚本 | 用途 |
|------|------|
| [validate-seo.js](file:///e:/Github/cloudcvm.com/scripts/validate-seo.js) | SEO 验证脚本。检查构建后的 `out/` 目录中 robots.txt 和 sitemap.xml 是否正确生成 |

---

## 5. 关键类与函数说明

### 5.1 RootLayout - 根布局组件

**文件**: [src/app/layout.tsx](file:///e:/Github/cloudcvm.com/src/app/layout.tsx)

```tsx
export default function RootLayout({ children }: { children: React.ReactNode })
```

> 根布局组件。设置 `<html lang="zh-CN">`、全局样式、搜索引擎验证 meta 标签、JSON-LD 结构化数据（Organization schema）、Analytics 统计组件、返回顶部按钮。所有子页面自动包裹在该布局中。

**关键逻辑**:
1. 从 `seoConfig` 读取全站 SEO 信息
2. 构建 `metadata` 对象（用于 Next.js 的 `<head>` 管理）
3. 注入 JSON-LD 结构化数据（`Organization` schema）
4. 渲染 `<Analytics />` 统计组件
5. 渲染 `<Top />` 返回顶部按钮

### 5.2 Home - 首页组件

**文件**: [src/app/page.tsx](file:///e:/Github/cloudcvm.com/src/app/page.tsx)

```tsx
export default function Home(): JSX.Element
```

> 首页组件。按用户浏览路径和转化漏斗组装 20+ 个子组件。页面结构设计遵循：视觉冲击 → 功能展示 → 解决方案 → 商业转化 → 社会证明 → 行动引导。

**组件组装顺序**: Header → VideoCarousel → Hero → ServiceTabs → PrimaryFeatures → Leftright → Rightleft → Solution → Erlie → Scenario → Accordion → Price → BentoGrids → Advantage → Testimonials → Customer → Zone → Faqs → Logoclouds → CatSections → Footer

### 5.3 Header - 全局导航栏

**文件**: [src/components/Header.tsx](file:///e:/Github/cloudcvm.com/src/components/Header.tsx)

```tsx
export function Header(): JSX.Element
```

> 全局导航栏组件。关键特性: 响应式设计（桌面端 `Popover` 下拉菜单 + 移动端 `Dialog` 侧边栏）、5 个菜单分类、用户登录/注册入口。

**核心状态**:
- `mobileMenuOpen: boolean` - 移动端菜单开关

**菜单数据结构**:
```ts
interface MenuItem {
  name: string            // 菜单项名称
  description: string     // 简介描述
  href: string            // 链接地址
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>  // Heroicon 图标
  hot?: boolean           // 热门标签
}

interface CallToAction {
  name: string    // 按钮名称
  href: string    // 链接地址
  icon: React.ComponentType  // 图标
}
```

**菜单配置**（共 5 组静态数据）:
1. `products` (6 项): 云服务器ECS、云电脑桌面、虚拟主机、CDN、独立服务器、SSL证书
2. `aiProducts` (6 项): 艺创AI、数字分身、数企知识库、聊天绘画、论文创作、体验产品
3. `solutions` (12 项): 香蕉绘画、短剧小说、即梦AI视频、即梦AI绘画、漫剧创作等
4. `enterpriseSolutions` (8 项): 移动、游戏、金融、电商、CMS、视频、政府、零售
5. `company` (4 项): 关于我们、技术支持、推广合作、联系我们

**外部链接**:
- 控制台: `https://console.cloudcvm.com`
- 登录/注册: `https://console.cloudcvm.com/login.htm`
- 文档中心: `https://console.cloudcvm.com/plugin/26/source.htm`

### 5.4 Analytics - 统计分析组件

**文件**: [src/components/Analytics.tsx](file:///e:/Github/cloudcvm.com/src/components/Analytics.tsx)

```tsx
export default function Analytics()
```

> 统计分析集成组件。异步加载百度统计和 Microsoft Clarity 脚本。使用 Next.js `Script` 组件的 `afterInteractive` 策略，不阻塞页面渲染。

**支持的统计工具**:
- **百度统计**: 通过 `hm.baidu.com/hm.js` 异步加载
- **Microsoft Clarity**: 通过 `clarity.ms/tag` 异步加载

**配置来源**: `seoConfig.analytics.baidu` / `seoConfig.analytics.clarity`

### 5.5 BentoGrids - Bento 网格布局

**文件**: [src/components/BentoGrids.tsx](file:///e:/Github/cloudcvm.com/src/components/BentoGrids.tsx)

```tsx
export default function BentoGrids()
```

> Bento 网格组件。展示产品核心特性的手风琴布局。桌面端为手风琴式交互卡片（鼠标悬停展开，CSS flex 过渡动画），移动端为网格布局。默认展开第一张卡片。

**核心状态**: `expandedIndex: number` - 当前展开的卡片索引

**子组件**:
- `AccordionFeatureCard`: 桌面端手风琴卡片（含 `onMouseEnter` 触发 `onToggle`）
- `MobileFeatureCard`: 移动端静态卡片（网格布局）

**数据接口**:
```ts
interface FeatureCard {
  category: string        // 功能分类
  title: string           // 卡片标题
  description: string     // 功能描述
  features: string[]      // 核心功能特性列表
  bgImage: string         // 背景图片路径
  icon: React.ComponentType<{ className?: string }>  // 图标组件
  topLeftText: string     // 左上角文本
  bottomLeftText: string  // 左下角文本
}
```

### 5.6 ServiceTabs - 服务标签页

**文件**: [src/components/ServiceTabs.tsx](file:///e:/Github/cloudcvm.com/src/components/ServiceTabs.tsx)

```tsx
export default function ServiceTabs()
```

> 服务分类标签页组件。使用 Framer Motion `AnimatePresence` 实现标签切换动画。展示云计算、AI、基础服务三大分类。

**设计令牌 (Design Tokens)**: 组件内定义了 `tokens` 对象，包含颜色、间距等设计变量，确保视觉一致性。

### 5.7 配置模块核心函数

**seoUtils** ([src/config/index.ts](file:///e:/Github/cloudcvm.com/src/config/index.ts)):

| 函数 | 签名 | 说明 |
|------|------|------|
| `getFullUrl` | `(path: string) => string` | 拼接完整的站点 URL |
| `getPageConfig` | `(path: string) => PageConfig \| undefined` | 根据路径获取页面配置（优先级/更新频率） |
| `isUrlInSitemap` | `(url: string) => boolean` | 验证 URL 是否在 sitemap 配置中 |

**generateRobots** ([src/config/robots.config.ts](file:///e:/Github/cloudcvm.com/src/config/robots.config.ts)):
```ts
function generateRobots(): MetadataRoute.Robots
```
> 生成 robots.txt 规则对象。包含百度/Google/360/搜狗等特定爬虫规则，屏蔽营销爬虫。

**generateSitemap** ([src/config/sitemap.config.ts](file:///e:/Github/cloudcvm.com/src/config/sitemap.config.ts)):
```ts
function generateSitemap(): MetadataRoute.Sitemap
```
> 生成 sitemap.xml 条目数组。从 `seoConfig.pages` 读取 33 个页面路径，设置优先级和更新频率。

### 5.8 BananaClientPage - AI 方案客户端页面

**文件**: [src/app/banana/BananaClientPage.tsx](file:///e:/Github/cloudcvm.com/src/app/banana/BananaClientPage.tsx)

> 香蕉绘画页面客户端组件。展示 AI 图像生成产品信息，包含特性网格、功能详情板块、场景展示等。12 个 AI 方案页面（banana/drama/jimeng 等）均采用类似模式。

**核心接口**:
```ts
interface Feature {
  title: string    // 特性标题
  desc: string     // 特性描述
  icon: React.ElementType  // 图标组件
}

interface FeaturePoint {
  title: string    // 功能点标题
  desc: string     // 功能点描述
}

interface FeatureDetail {
  title: string           // 板块标题
  desc: string            // 板块描述
  activePoint: number     // 当前激活的功能点索引
  points: FeaturePoint[]  // 功能点列表
  image: string           // 展示图片 URL
}
```

---

## 6. 依赖关系

### 6.1 组件依赖图

```
layout.tsx (根布局)
├── styles/tailwind.css (全局样式)
├── config/seo.config.ts (SEO 配置)
├── Analytics (统计分析)
│   └── config/seo.config.ts
└── common/Top (返回顶部)

page.tsx (首页) 及子页面
├── Header
│   ├── Logo
│   ├── @headlessui/react (Popover, Dialog, Disclosure, DialogPanel)
│   └── @heroicons/react/24/outline + /20/solid
├── Footer
│   └── next/image
├── [各个业务组件]
│   ├── Container
│   ├── @headlessui/react
│   ├── @heroicons/react
│   ├── lucide-react (仅 ServiceTabs)
│   ├── framer-motion (仅 ServiceTabs)
│   └── clsx
└── Footer

AI 方案页面 (banana 等 12 个)
├── Header
├── *ClientPage (页面专属客户端组件)
│   ├── Container
│   ├── @heroicons/react
│   └── ai/AIscene (共享 AI 组件)
└── Footer
```

### 6.2 NPM 依赖树

**dependencies (运行时依赖)**:
```
next@15.4.8
├── react@19.0.1
├── react-dom@19.0.1
├── @headlessui/react@2.2.6
├── @heroicons/react@2.2.0
├── @tailwindcss/forms@0.5.10        (Tailwind 表单插件)
├── @tailwindcss/postcss@4.1.11      (Tailwind CSS v4 PostCSS 插件)
├── @types/three@0.179.0             (Three.js 类型定义)
├── clsx@2.1.1                       (类名合并)
├── framer-motion@12.23.12           (动画库)
├── gsap@3.14.2                      (动画引擎)
├── lucide-react@0.540.0             (图标库)
├── postprocessing@6.38.2            (Three.js 后处理)
├── tailwindcss@4.1.11               (CSS 框架)
├── three@0.179.1                    (3D 渲染)
└── typescript@5.8.3                 (类型系统)
```

**devDependencies (开发依赖)**:
```
├── @types/node@24.1.0
├── @types/react@19
├── @types/react-dom@19
├── eslint@9.32.0
├── eslint-config-next@15
├── prettier@3.6.2
├── prettier-plugin-tailwindcss@0.6.14
└── sharp@0.34.3                     (图片优化)
```

### 6.3 外部服务依赖

| 服务 | 用途 | 配置位置 |
|------|------|----------|
| 百度统计 (`hm.baidu.com`) | 用户行为分析 | `seoConfig.analytics.baidu` |
| Microsoft Clarity | 用户行为录屏/热力图 | `seoConfig.analytics.clarity` |
| 控制台系统 (`console.cloudcvm.com`) | 用户登录/管理后台 | 外部链接（非本仓库） |

---

## 7. 项目运行方式

### 7.1 环境要求

- **Node.js**: >= 18.x (推荐 20.x LTS)
- **npm**: >= 9.x

### 7.2 安装与开发

```bash
# 1. 克隆仓库
git clone <repo-url> cloudcvm.com
cd cloudcvm.com

# 2. 安装依赖
npm install

# 3. 启动开发服务器 (默认 http://localhost:3000)
npm run dev

# 4. 代码检查
npm run lint

# 5. 代码格式化
npx prettier --write "src/**/*.{ts,tsx,css}"
```

### 7.3 构建与部署

```bash
# 构建生产版本（静态导出到 out/ 目录）
npm run build

# 验证 SEO (检查 robots.txt 和 sitemap.xml)
npm run validate-seo

# 部署: 将 out/ 目录的所有文件上传到静态文件服务器
# 示例 Nginx 配置:
#   root /var/www/cloudcvm.com/out;
#   index index.html;
#   location / {
#     try_files $uri $uri.html $uri/ =404;
#   }
```

### 7.4 构建配置说明

[`next.config.js`](file:///e:/Github/cloudcvm.com/next.config.js):
```js
const nextConfig = {
  output: 'export',           // 静态导出模式
  images: { unoptimized: true }, // 禁用图片优化（静态导出要求）
  trailingSlash: true,        // URL 尾部斜杠（SEO 友好）
}
```

### 7.5 npm scripts 一览

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Next.js 开发服务器 (localhost:3000) |
| `npm run build` | 构建生产版本，输出到 `out/` 目录 |
| `npm start` | 启动生产服务器（需先 build） |
| `npm run lint` | ESLint 静态代码检查 |
| `npm run validate-seo` | 验证 SEO 文件（robots.txt / sitemap.xml） |

---

## 8. 设计规范与约定

### 8.1 代码规范

- **命名约定**:
  - 组件文件: PascalCase (如 `ServiceTabs.tsx`)
  - 配置/工具文件: kebab-case (如 `seo.config.ts`)
  - 组件导出: 优先命名导出 `export function ComponentName()`
  - 接口定义: 页面内就近定义，不单独抽取文件

- **注释规范**:
  - 所有函数/组件顶部必须有 JSDoc 风格注释（函数级注释）
  - 使用 `@param`、`@returns`、`@interface` 等标签

- **文件组织**:
  - 服务器组件（无交互）放在页面 `page.tsx`
  - 客户端组件（有 `useState`/`useEffect` 等）创建独立的 `*ClientPage.tsx`

### 8.2 UI 设计规范

完整设计规范参见 [.trae/rules/UI_DESIGN_STYLE.md](file:///e:/Github/cloudcvm.com/.trae/rules/UI_DESIGN_STYLE.md)

**核心要点**:

| 要素 | 规范 |
|------|------|
| 设计风格 | 现代工业科技风 (Linear-style) + 便当盒布局 (Bento Grids) |
| 默认模式 | **白天模式 (Light Mode)** |
| 主色 | `#0055ff` (科技蓝) |
| 背景 | `#FFFFFF` (页面) / `#F8FAFC` (Slate 50) |
| 边框 | `#E2E8F0` (Slate 200) |
| 标题色 | `#0F172A` (Slate 900) |
| 正文字色 | `#64748B` (Slate 500) |
| 圆角 | `rounded-lg` 或 `rounded-xl` |
| 字体 | 系统默认无衬线字体（禁止自定义字体） |
| 布局最大宽度 | 1800px |
| 动画库 | Framer Motion (页面过渡) |
| 卡片 hover | 细边框 → 边框变色 + 微阴影 |

### 8.3 Git 提交规范

参见 [.trae/rules/git-commit-message.md](file:///e:/Github/cloudcvm.com/.trae/rules/git-commit-message.md)

---

> **文档生成日期**: 2026-06-12  
> **文档版本**: 1.0.0  
> **适用范围**: cloudcvm.com v5.0.0
