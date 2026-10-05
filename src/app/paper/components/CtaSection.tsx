import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/** paper 页底部品牌 CTA 区块（2026-10-05 自 page.tsx 拆分） */
function CtaSection(): JSX.Element {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-md border border-neutral-200 bg-white">
          {/* 装饰元素 - 仅在大屏显示 */}
          <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
            <svg
              className="h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
              <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
              <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
              <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            {/* 左侧内容 */}
            <div className="relative z-10 p-6 sm:p-8 lg:col-span-3 lg:p-12">
              <div className="max-w-xl">
                <h3 className="mb-4 text-xl leading-tight font-bold text-neutral-900 sm:text-2xl lg:text-3xl">
                  艺创AI<span className="text-brand-500">论文创作</span>
                  系统
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。
                  提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。
                </p>

                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-900 sm:text-base">
                        高清还原
                      </h4>
                      <p className="text-xs text-neutral-500 sm:text-sm">100%真实感官体验</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-900 sm:text-base">
                        专业服务
                      </h4>
                      <p className="text-xs text-neutral-500 sm:text-sm">7×24小时技术支持</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-900 sm:text-base">
                        数据安全
                      </h4>
                      <p className="text-xs text-neutral-500 sm:text-sm">企业级安全保障</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-900 sm:text-base">
                        持续更新
                      </h4>
                      <p className="text-xs text-neutral-500 sm:text-sm">定期功能迭代升级</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/demo"
                    className="w-full rounded-xl bg-brand-500 px-6 py-3 font-bold text-white shadow-lg hover:bg-brand-600 sm:w-auto sm:py-4"
                  >
                    立即体验
                  </Button>
                  <Button
                    href="/demo"
                    target="_blank"
                    variant="outline"
                    className="w-full rounded-xl border-brand-500 px-6 py-3 text-brand-500 hover:bg-brand-50 sm:w-auto sm:py-4"
                  >
                    咨询价格
                  </Button>
                </div>
              </div>
            </div>

            {/* 右侧功能卡片 - 在移动端显示在下方 */}
            <div className="relative lg:col-span-2">
              {/* 移动端显示 */}
              <div className="p-6 lg:hidden">
                <div className="grid grid-cols-2 gap-3">
                  {/* AI数字人 */}
                  <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-center text-sm font-medium text-neutral-900">AI知识库</h4>
                    <p className="mt-1 text-center text-xs text-neutral-500">三版本支持</p>
                  </div>

                  {/* 私有部署 */}
                  <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-center text-sm font-medium text-neutral-900">私有部署</h4>
                    <p className="mt-1 text-center text-xs text-neutral-500">安全可控</p>
                  </div>

                  {/* 专业团队 */}
                  <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-center text-sm font-medium text-neutral-900">专业团队</h4>
                    <p className="mt-1 text-center text-xs text-neutral-500">一对一支持</p>
                  </div>

                  {/* 开源方案 */}
                  <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center bg-brand-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-center text-sm font-medium text-neutral-900">开源方案</h4>
                    <p className="mt-1 text-center text-xs text-neutral-500">灵活定制</p>
                  </div>
                </div>
              </div>

              {/* 桌面端显示 */}
              <div className="absolute inset-0 hidden lg:block">
                <div className="flex h-full w-full items-center p-6">
                  <div className="h-full w-full bg-neutral-50 p-4 shadow-lg">
                    <div className="grid h-full grid-cols-2 gap-4">
                      {/* AI数字人 */}
                      <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">AI知识库</h4>
                        <p className="mt-1 text-center text-sm text-neutral-500">
                          PHP/Java双版本支持
                        </p>
                      </div>

                      {/* 私有部署 */}
                      <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">私有部署</h4>
                        <p className="mt-1 text-center text-sm text-neutral-500">
                          安全可控的私有化部署
                        </p>
                      </div>

                      {/* 专业团队 */}
                      <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">专业团队</h4>
                        <p className="mt-1 text-center text-sm text-neutral-500">一对一技术支持</p>
                      </div>

                      {/* 开源方案 */}
                      <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-brand-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900">开源方案</h4>
                        <p className="mt-1 text-center text-sm text-neutral-500">
                          灵活定制，售后无忧
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
