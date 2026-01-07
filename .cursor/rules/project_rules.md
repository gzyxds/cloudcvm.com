# CloudCVM.com 项目开发规则

> **项目**: CloudCVM.com - 优刻云计算官方网站  
> **技术栈**: Next.js 15 + React 19 + TypeScript 5.8 + Tailwind CSS 4.1

## 核心技术栈

- **框架**: Next.js 15 (App Router, Server Components 优先)
- **UI库**: React 19
- **类型系统**: TypeScript 5.8+ (strict mode)
- **样式系统**: Tailwind CSS 4.1+ (CSS-first 配置, @theme 语法)
- **动画库**: Framer Motion 12+
- **图标库**: Heroicons 2+ / Lucide React
- **3D渲染**: Three.js 0.179+
- **工具库**: clsx (类名管理)

## 目录结构规范

```
src/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── [product]/         # 产品页面路由
├── components/            # 可复用组件库
│   ├── ai/               # AI产品专用组件
│   ├── common/           # 通用业务组件
│   ├── carousel/         # 轮播组件模块
│   ├── css/             # CSS模块文件
│   └── [ComponentName].tsx # 页面级组件
├── config/               # 配置文件
├── images/               # 图片资源
└── styles/               # 全局样式
    └── tailwind.css      # Tailwind CSS入口与主题配置
```

## 文件命名规范

- **组件文件**: `PascalCase.tsx` (如 `HeaderCarousel.tsx`)
- **页面文件**: 统一使用 `page.tsx`, `layout.tsx`, `loading.tsx`
- **配置文件**: `kebab-case.config.js` (如 `next.config.js`)
- **工具文件**: `camelCase.ts`
- **CSS模块**: `[ComponentName].module.css`

## React 组件开发规范

### 组件分类

1. **通用组件**: `src/components/common/` (Button, Container 等) - 高度可复用，无业务逻辑
2. **业务组件**: `src/components/[feature]/` (ai/, carousel/ 等) - 与特定业务功能绑定
3. **页面级组件**: 完整页面功能模块 (Hero, Header, Footer)

### 组件编写模板

```tsx
import Link from 'next/link'
import clsx from 'clsx'

interface ComponentProps {
  title: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export default function Component({
  title,
  subtitle,
  className,
  children,
}: ComponentProps) {
  return (
    <div className={clsx('base-styles', className)}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </div>
  )
}
```

### 服务端 vs 客户端组件

- **默认服务端**: Next.js App Router 默认为 Server Components
- **客户端组件**: 需要使用 Hooks (`useState`, `useEffect`) 或事件监听时，必须在文件顶部添加 `'use client'` 指令

### 导入顺序

1. React / Next.js 内置模块
2. 第三方依赖 (clsx, framer-motion 等)
3. 本地绝对路径导入 (`@/components/...`, `@/styles/...`)
4. 本地相对路径导入 (`./...`)
5. 样式文件导入

## 样式系统 (Tailwind CSS 4)

### 使用原则

1. **优先使用 Utility Classes**: 直接在 JSX 中编写 Tailwind 类名
2. **使用 clsx 管理条件类名**:
   ```tsx
   import clsx from 'clsx'
   <div className={clsx('base-class', condition && 'active-class', className)} />
   ```
3. **CSS Variables**: 对于动态值或主题配置，使用 CSS 变量
4. **CSS Modules**: 仅在需要复杂动画或无法用 Tailwind 简单实现的场景下使用 (位于 `src/components/css/`)

### 主题配置

项目使用 Tailwind CSS 4 的 `@theme` 语法，配置在 `src/styles/tailwind.css`:

```css
@theme {
  --color-indigo-500: #0055ff;
  --font-sans: var(--font-inter);
  --font-display: var(--font-lexend);
  --container-2xl: 80rem;
}
```

## TypeScript 规范

1. **接口命名**: 使用 `PascalCase`，以 `Props` 或 `Config` 结尾
2. **类型导出**: 使用 `type` 关键字导出类型
3. **严格模式**: 启用 TypeScript strict 模式
   - 所有变量必须有类型
   - 避免使用 `any`
   - 使用 `unknown` 替代 `any` 处理不确定类型
4. **路径别名**: 使用 `@/` 别名引用 `src/` 目录

## 命名约定

- **组件**: `PascalCase` (`HeaderCarousel`, `ProductTraits`)
- **函数**: `camelCase` (`handleSubmit`, `formatDate`)
- **常量**: `UPPER_SNAKE_CASE` (`API_BASE_URL`, `MAX_RETRIES`)
- **布尔值**: `is/has/should` 前缀 (`isActive`, `hasError`, `shouldRender`)

## 代码格式化

- **单引号**: `true`
- **分号**: `false`
- **Tailwind 插件**: Enabled (自动排序类名)

## 性能优化

1. **代码分割**: 使用 `next/dynamic` 动态导入大型组件
2. **图片优化**: 使用 Next.js `Image` 组件，首屏图片使用 `priority`
3. **静态导出**: 项目配置为静态导出模式 (`output: 'export'`)

## SEO 规范

每个页面必须配置完整的 SEO 元数据：

```tsx
export const metadata: Metadata = {
  title: '页面标题 - CloudCVM',
  description: '页面描述（150-200字）',
  keywords: ['关键词1', '关键词2'],
  openGraph: {
    title: '页面标题',
    description: '页面描述',
    images: ['/images/og-image.jpg'],
  },
}
```

## 最佳实践

1. **单一职责**: 每个组件只负责一个功能
2. **可复用性**: 设计通用组件，避免重复代码
3. **可维护性**: 清晰的命名和注释
4. **类型安全**: 完善 TypeScript 类型定义，避免使用 `any`
5. **响应式设计**: Mobile-First 方法，使用 Tailwind 响应式类名

