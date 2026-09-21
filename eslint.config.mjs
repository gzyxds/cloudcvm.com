import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

// ESLint 9 默认只认 flat config，而 eslint-config-next 的预设仍是 eslintrc 格式，
// 用官方 FlatCompat 做桥接，避免迁移后丢失 Next 官方规则。
const compat = new FlatCompat()

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser },
    plugins: { '@typescript-eslint': typescriptEslint },
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

  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'public/**', 'scripts/**'],
  },
]
