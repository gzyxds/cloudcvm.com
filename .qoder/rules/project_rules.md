# cloudcvm 项目开发规则

> 基于 Next.js 15 + React 19 + TypeScript 5.8 + Tailwind CSS 4.1 的现代化开发规范

## 1. 代码风格与格式化

### 1.1 Prettier 配置

- **强制使用 Prettier**：所有代码必须通过 `npm run lint` 检查
- **配置要求**：
  ```js
  // prettier.config.js
  {
    singleQuote: true,        // 使用单引号
    semi: false,              // 不使用分号
    plugins: ['prettier-plugin-tailwindcss'],  // 自动排序 Tailwind 类名
    tailwindStylesheet: './src/styles/tailwind.css'
  }
  ```
- **IDE 集成**：建议安装 Prettier 扩展并启用保存时自动格式化

### 1.2 ESLint 规则

- **基础配置**：继承 `next/core-web-vitals`，包含 React Hooks、Core Web Vitals 等规则
- **严格要求**：
  - 禁止使用 `console.log`（生产环境）
  - 强制使用 TypeScript 类型注解
  - 禁止未使用的变量和导入

### 1.3 TypeScript 严格模式

- **严格配置**：`strict: true`，禁止隐式 `any` 类型
- **路径别名**：使用 `@/*` 指向 `./src/*`，简化导入路径
- **类型定义**：优先使用接口（`interface`）而非类型别名（`type`）

### 1.4 Tailwind CSS 规范

- **类名管理**：使用 `clsx` 处理条件类名

  ```tsx
  import clsx from 'clsx'

  const buttonClass = clsx(
    'px-4 py-2 rounded-md font-medium transition-colors',
    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
    variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    disabled && 'opacity-50 cursor-not-allowed',
  )
  ```

- **避免内联样式**：优先使用 Tailwind 工具类，必要时通过 `tailwind.config.js` 扩展
- **响应式设计**：遵循移动优先原则，使用 `sm:`、`md:`、`lg:`、`xl:` 断点

## 2. 组件开发规范

### 2.1 组件结构与命名

- **目录组织**：
  ```
  src/components/
  ├── common/          # 通用组件（Button、Input 等）
  ├── layout/          # 布局组件（Header、Footer 等）
  ├── sections/        # 页面区块（Hero、Pricing 等）
  └── ui/              # UI 基础组件
  ```
- **命名规范**：
  - 组件文件：`PascalCase.tsx`（如 `PrimaryFeatures.tsx`）
  - 组件函数：与文件名保持一致
  - Props 接口：`组件名 + Props`（如 `ButtonProps`）

### 2.2 组件定义标准

- **函数式组件 + TypeScript**：

  ```tsx
  /**
   * 按钮组件 - 支持多种样式变体和状态
   * @param variant - 按钮样式变体
   * @param size - 按钮尺寸
   * @param disabled - 是否禁用
   * @param children - 按钮内容
   */
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    className?: string
    onClick?: () => void
    children: React.ReactNode
  }

  export function Button({
    variant = 'primary',
    size = 'md',
    disabled = false,
    className,
    onClick,
    children,
  }: ButtonProps) {
    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center font-medium transition-colors',
          // 尺寸样式
          size === 'sm' && 'px-3 py-1.5 text-sm',
          size === 'md' && 'px-4 py-2 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          // 变体样式
          variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
          variant === 'secondary' &&
            'bg-gray-200 text-gray-900 hover:bg-gray-300',
          variant === 'outline' &&
            'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
          // 状态样式
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
        disabled={disabled}
        onClick={onClick}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {children}
      </button>
    )
  }
  ```

### 2.3 无障碍性（A11y）要求

- **Headless UI 优先**：使用 `@headlessui/react` 构建复杂交互组件
  ```tsx
  import { Dialog, Transition } from '@headlessui/react'
  ```
- **ARIA 属性**：
  - 交互元素必须包含 `aria-label` 或 `aria-labelledby`
  - 表单控件需要 `aria-describedby`（错误提示）
  - 状态变化需要 `aria-live` 区域
- **键盘导航**：确保所有交互元素支持键盘操作
- **焦点管理**：模态框、下拉菜单等需要正确的焦点陷阱

### 2.4 组件复用与扩展

- **优先复用**：使用现有组件（`Container`、`Button`、`Fields` 等）
- **组合模式**：通过组合而非继承扩展功能
  ```tsx
  // 好的做法：组合
  <Container className="py-16">
    <div className="text-center">
      <Button variant="primary">开始使用</Button>
    </div>
  </Container>
  ```
- **Props 透传**：支持 `className` 和其他 HTML 属性
  ```tsx
  interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    // 自定义 props
  }
  ```

## 3. 文件与目录规范

### 3.1 命名约定

- **组件文件**：`PascalCase.tsx`（如 `PrimaryFeatures.tsx`、`Testimonials.tsx`）
- **工具函数/常量**：`camelCase.ts`（如 `apiUtils.ts`、`formatUtils.ts`）
- **页面目录**：`kebab-case`（如 `src/app/(auth)/login/`、`src/app/about/`）
- **类型定义**：`types.ts` 或 `index.ts`（导出类型）

### 3.2 项目目录结构

```
src/
├── app/                    # Next.js 15 App Router 页面
│   ├── (auth)/            # 路由组：认证相关页面
│   │   ├── login/
│   │   └── register/
│   ├── about/             # 关于页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # 组件目录
│   ├── common/           # 通用组件
│   ├── layout/           # 布局组件
│   └── sections/         # 页面区块
├── images/               # 图片资源
│   ├── avatars/
│   ├── logos/
│   └── screenshots/
├── lib/                  # 工具库
│   ├── api/             # API 相关
│   ├── utils/           # 工具函数
│   └── types/           # 类型定义
└── styles/              # 样式文件
    └── tailwind.css
```

### 3.3 静态资源管理

- **图片存放**：
  - 组件内使用：`src/images/`
  - 公共资源：`public/images/`
- **图片优化**：
  - ⚠️ **注意**：当前项目配置为静态导出（`output: 'export'`），图片优化已禁用
  - 使用 `next/image` 组件但设置 `unoptimized: true`
  - 手动优化图片尺寸和格式（推荐 WebP）
- **导入方式**：

  ```tsx
  import Image from 'next/image'
  import logoImage from '@/images/logos/company-logo.png'

  ;<Image
    src={logoImage}
    alt="公司标志"
    width={200}
    height={50}
    className="h-auto w-auto"
  />
  ```

## 4. 页面开发规范

### 4.1 Next.js 15 App Router 特性

- **文件约定**：
  - `page.tsx`：页面组件
  - `layout.tsx`：布局组件
  - `loading.tsx`：加载状态
  - `error.tsx`：错误边界
  - `not-found.tsx`：404 页面

### 4.2 元数据管理

- **静态元数据**：

  ```tsx
  import type { Metadata } from 'next'

  export const metadata: Metadata = {
    title: '页面标题 - Salient',
    description: '页面描述，用于 SEO 优化',
    keywords: ['关键词1', '关键词2'],
    openGraph: {
      title: '页面标题',
      description: '页面描述',
      images: ['/images/og-image.jpg'],
    },
  }
  ```

- **动态元数据**：
  ```tsx
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = await fetchData(params.id)
    return {
      title: `${data.title} - Salient`,
      description: data.description,
    }
  }
  ```

### 4.3 布局组件规范

- **根布局**（`app/layout.tsx`）：包含全局样式、字体、Provider 等
- **认证布局**（`app/(auth)/layout.tsx`）：使用 `SlimLayout` 组件
- **布局原则**：
  - 不包含业务逻辑，仅负责布局和样式
  - 支持嵌套布局
  - 合理使用 `children` 和插槽模式

### 4.4 静态导出配置

- **当前配置**：项目设置为静态导出（`output: 'export'`）
- **限制说明**：
  - 不支持服务端 API 路由
  - 图片优化被禁用
  - 不支持动态路由的 ISR
- **部署优化**：
  - 启用 `trailingSlash: true` 确保静态部署兼容性
  - 生成的文件在 `out/` 目录

## 5. 状态管理与数据流

### 5.1 状态管理策略

- **本地状态**：使用 React 19 的 `useState`、`useReducer`

  ```tsx
  // 简单状态
  const [isOpen, setIsOpen] = useState(false)

  // 复杂状态
  const [state, dispatch] = useReducer(reducer, initialState)
  ```

- **跨组件状态**：使用 `useContext` + `useReducer`

  ```tsx
  // contexts/AppContext.tsx
  const AppContext = createContext<AppContextType | undefined>(undefined)

  export function AppProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, initialState)
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    )
  }
  ```

- **服务端状态**：推荐使用 `TanStack Query`（React Query）
- **表单状态**：使用 `react-hook-form` + `zod` 验证

### 5.2 数据获取模式

- **静态数据**：直接在组件中定义或从 JSON 文件导入
- **客户端获取**：使用 `fetch` + `useEffect` 或 React Query
- **注意**：当前项目为静态导出，不支持服务端 API 路由

### 5.3 状态更新原则

- **不可变更新**：使用扩展运算符或 Immer
- **批量更新**：React 19 自动批处理状态更新
- **性能优化**：使用 `useMemo`、`useCallback` 避免不必要的重渲染

## 6. 样式与主题系统

### 6.1 Tailwind CSS 4.1 配置

- **主题扩展**：通过配置文件自定义设计系统
  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            500: '#3b82f6',
            900: '#1e3a8a',
          },
          gray: {
            50: '#f9fafb',
            900: '#111827',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Lexend', 'system-ui', 'sans-serif'],
        },
        spacing: {
          18: '4.5rem',
          88: '22rem',
        },
      },
    },
  }
  ```

### 6.2 设计令牌（Design Tokens）

- **颜色系统**：
  - 主色调：`blue-600`（品牌色）
  - 中性色：`gray-*` 系列
  - 语义色：`red-*`（错误）、`green-*`（成功）、`yellow-*`（警告）
- **字体层级**：
  - 正文：`font-sans`（Inter）- 易读性优先
  - 标题：`font-display`（Lexend）- 视觉冲击力
  - 代码：`font-mono`（系统等宽字体）
- **间距系统**：遵循 8px 网格系统（`space-2` = 8px）

### 6.3 响应式设计

- **断点策略**：移动优先（Mobile First）
  ```tsx
  <div className="
    text-sm sm:text-base md:text-lg lg:text-xl
    p-4 sm:p-6 md:p-8 lg:p-12
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  ">
  ```
- **容器查询**：Tailwind CSS 4.1 支持容器查询
- **暗色模式**：预留 `dark:` 前缀支持（可选功能）

### 6.4 组件样式模式

- **变体模式**：使用 `clsx` 管理条件样式
- **复合组件**：通过 CSS 变量实现主题切换
- **样式隔离**：避免全局样式污染，优先使用 Tailwind 类

## 7. Git 工作流与版本控制

### 7.1 提交信息规范（Conventional Commits）

```bash
<类型>[可选范围]: <描述>

[可选正文]

[可选脚注]
```

**提交类型**：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构（既不是新功能也不是修复）
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具变动

**示例**：

```bash
feat(auth): 添加邮箱验证功能
fix(pricing): 修复年付切换逻辑错误
docs(readme): 更新安装说明
style(button): 统一按钮组件代码格式
refactor(utils): 重构日期格式化函数
perf(images): 优化图片加载性能
```

### 7.2 分支策略（Git Flow 简化版）

- **主分支**：`main`（生产环境，受保护）
- **开发分支**：`develop`（集成分支）
- **功能分支**：`feature/功能名称`（如 `feature/user-dashboard`）
- **修复分支**：`hotfix/修复内容`（如 `hotfix/login-error`）
- **发布分支**：`release/版本号`（如 `release/v1.2.0`）

### 7.3 代码审查（Code Review）

- **必须审查**：所有 PR 需至少 1 人审核通过
- **审查要点**：
  - 代码质量和可读性
  - 性能影响
  - 安全性检查
  - 测试覆盖率
- **自动检查**：CI/CD 流水线自动运行 lint、test、build

## 8. 测试策略与质量保证

### 8.1 测试金字塔

```
     E2E Tests (少量)
    ──────────────
   Integration Tests (适量)
  ──────────────────────
 Unit Tests (大量)
```

### 8.2 单元测试（Jest + React Testing Library）

- **覆盖目标**：工具函数 100%，组件核心逻辑 80%+
- **测试文件**：`*.test.tsx` 或 `__tests__/` 目录
- **示例**：

  ```tsx
  // Button.test.tsx
  import { render, screen, fireEvent } from '@testing-library/react'
  import { Button } from './Button'

  describe('Button', () => {
    it('renders with correct text', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('calls onClick when clicked', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
  ```

### 8.3 集成测试

- **页面级测试**：测试组件间交互
- **用户流程测试**：模拟真实用户操作

### 8.4 E2E 测试（推荐 Playwright）

- **关键路径**：用户注册、登录、核心功能流程
- **跨浏览器**：Chrome、Firefox、Safari
- **移动端**：响应式设计验证

## 9. 性能优化与安全规范

### 9.1 性能优化策略

- **代码分割**：

  ```tsx
  // 路由级懒加载
  const Dashboard = lazy(() => import('./Dashboard'))

  // 组件级懒加载
  const HeavyComponent = lazy(() => import('./HeavyComponent'))
  ```

- **图片优化**：
  - 使用 WebP 格式
  - 设置合适的尺寸和质量
  - 实现懒加载（Intersection Observer）
- **包体积优化**：
  - 使用 `next/bundle-analyzer` 分析
  - 按需导入第三方库
  - Tree shaking 移除未使用代码

### 9.2 React 19 性能特性

- **并发特性**：使用 `useTransition` 处理非紧急更新
- **Suspense**：改善加载体验
- **自动批处理**：减少不必要的重渲染

### 9.3 安全最佳实践

- **XSS 防护**：
  - 避免 `dangerouslySetInnerHTML`
  - 验证和清理用户输入
  - 使用 CSP（Content Security Policy）
- **数据验证**：
  - 前端使用 `zod` 进行类型验证
  - 后端必须重复验证（双重保护）
- **敏感信息**：
  - 环境变量使用 `NEXT_PUBLIC_` 前缀（公开）
  - 私密信息仅在服务端使用
  - 不在代码中硬编码密钥

## 10. 文档规范与团队协作

### 10.1 代码文档

- **JSDoc 注释**：
  ````tsx
  /**
   * 用户信息卡片组件
   *
   * @param user - 用户信息对象
   * @param showAvatar - 是否显示头像，默认为 true
   * @param onEdit - 编辑回调函数
   * @returns 渲染的用户卡片
   *
   * @example
   * ```tsx
   * <UserCard
   *   user={{ name: '张三', email: 'zhang@example.com' }}
   *   onEdit={(user) => console.log('编辑用户:', user)}
   * />
   * ```
   */
  interface UserCardProps {
    user: User
    showAvatar?: boolean
    onEdit?: (user: User) => void
  }
  ````

### 10.2 项目文档

- **README.md**：项目介绍、安装、运行说明
- **CONTRIBUTING.md**：贡献指南和开发流程
- **CHANGELOG.md**：版本更新记录

  ```markdown
  ## [1.3.0] - 2024-01-15

  ### ✨ Added

  - 新增用户仪表板页面
  - 支持暗色模式切换
  - 添加国际化支持（i18n）

  ### 🐛 Fixed

  - 修复移动端导航菜单溢出问题
  - 解决表单验证错误提示不显示的 bug

  ### ⚡ Performance

  - 优化图片加载性能，减少 30% 加载时间
  - 实现组件级代码分割

  ### 💥 Breaking Changes

  - 重构 API 接口，旧版本不兼容
  ```

### 10.3 团队协作规范

- **代码审查清单**：
  - [ ] 代码符合项目规范
  - [ ] 测试覆盖率达标
  - [ ] 性能影响评估
  - [ ] 无安全隐患
  - [ ] 文档更新完整
- **沟通渠道**：
  - 技术讨论：GitHub Issues/Discussions
  - 紧急问题：即时通讯工具
  - 设计评审：定期会议
- **知识分享**：
  - 技术分享会（每月）
  - 代码重构案例分析
  - 最佳实践文档维护

---

## 🚀 开发工作流检查清单

### 📝 代码提交前（Pre-commit）

- [ ] 代码通过 `npm run lint` 检查（无 ESLint 错误）
- [ ] 代码通过 `npm run build` 构建（无 TypeScript 错误）
- [ ] 代码格式符合 Prettier 规范
- [ ] 新增代码有对应的单元测试
- [ ] 提交信息符合 Conventional Commits 规范
- [ ] 无 `console.log` 等调试代码残留
- [ ] 敏感信息已移除（API 密钥、密码等）

### 🔍 Pull Request 检查

- [ ] PR 标题清晰描述变更内容
- [ ] 代码变更有详细说明和截图（UI 变更）
- [ ] 至少 1 名团队成员完成 Code Review
- [ ] 所有 CI/CD 检查通过
- [ ] 测试覆盖率不低于现有水平
- [ ] 性能影响评估完成（如有）
- [ ] 文档更新完整（如需要）

### 🚀 生产部署前

- [ ] 在 Staging 环境完成功能测试
- [ ] 关键用户流程 E2E 测试通过
- [ ] 跨浏览器兼容性测试
- [ ] 移动端响应式测试
- [ ] 性能指标符合要求（Core Web Vitals）
- [ ] 安全扫描无高危漏洞
- [ ] 数据库迁移脚本验证（如有）
- [ ] 回滚方案准备就绪

### 📊 定期维护检查

- [ ] 依赖包安全更新（每月）
- [ ] 代码质量报告审查（每季度）
- [ ] 性能监控数据分析（每月）
- [ ] 用户反馈和 Bug 报告处理
- [ ] 技术债务评估和清理计划

---

## 🛠️ 快速命令参考

```bash
# 开发环境启动
npm run dev

# 代码检查和修复
npm run lint
npm run lint:fix

# 类型检查
npx tsc --noEmit

# 构建项目
npm run build

# 运行测试
npm test
npm test -- --coverage

# 分析包体积
npx @next/bundle-analyzer
```

## 📚 相关资源

- [Next.js 15 文档](https://nextjs.org/docs)
- [React 19 文档](https://react.dev/)
- [Tailwind CSS 4.1 文档](https://tailwindcss.com/docs)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Headless UI 组件库](https://headlessui.com/)
- [React Testing Library 指南](https://testing-library.com/docs/react-testing-library/intro/)

---

> **最后更新**: 2024-01-15
> **版本**: v2.0
> **维护者**: Salient 开发团队

如有疑问或建议，请在项目 Issues 中提出。
