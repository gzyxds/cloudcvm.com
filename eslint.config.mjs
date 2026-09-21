import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  // eslint-config-next v16 起原生提供 flat config，无需再用 FlatCompat 桥接
  ...nextVitals,
  ...nextTs,

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // ── 类型安全（§4.3）：已清零，此后新增即报错 ──
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': 'allow-with-description' },
      ],

      // ── 通用 ──
      eqeqeq: ['error', 'smart'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // ── 可维护性（§5.1）：先 warn，随重构逐步转 error ──
      '@typescript-eslint/consistent-type-imports': 'warn',
      'no-warning-comments': ['warn', { terms: ['XXX', 'HACK'], location: 'anywhere' }],
      'max-lines': ['warn', { max: 500, skipComments: true, skipBlankLines: true }],
      'max-depth': ['warn', 6],
      complexity: ['warn', 20],
    },
  },

  // globalIgnores 会覆盖 eslint-config-next 的默认忽略项，故需连默认项一起列出
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
    'public/**',
    'scripts/**',
  ]),
])
