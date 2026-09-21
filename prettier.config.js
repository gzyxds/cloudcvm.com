/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  // 代码 p90 行宽为 77，但 Tailwind 长类名无法折行（p99 达 178），故放宽到 100
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  // 与 .gitattributes 的 `* text=auto eol=lf` 保持一致，杜绝 CRLF/LF 全量 diff
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
