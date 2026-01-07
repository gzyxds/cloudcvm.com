import { ChevronRightIcon } from '@heroicons/react/20/solid'

/**
 * Hero 组件 - 首页核心视觉区域
 *
 * 设计规范：
 * - 采用 Light Mode 优先设计，背景纯白/极淡灰
 * - 核心品牌色 #0055ff 用于强调和 CTA 按钮
 * - 字体统一使用 font-sans
 * - 包含动态背景装饰和交互式数据可视化演示
 */
export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* 背景装饰网格 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#E2E8F0]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-[#F8FAFC]">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* 背景光效装饰 */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-1108/632 w-277 bg-[linear-gradient(to_right,rgba(0,85,255,0.18),rgba(0,85,255,0.00))] opacity-40"
        />
      </div>

      <div className="mx-auto max-w-[1800px] px-4 pt-10 pb-24 sm:px-6 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-sm border border-[#E2E8F0] bg-[#eff6ff] px-3 py-1 text-sm/6 font-semibold text-[#0055ff] font-mono">
                最新动态
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-[#64748B]">
                <span>刚发布 v1.0</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-[#64748B]"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-pretty text-[#0F172A] sm:text-7xl font-sans">
            安全可靠的云服务器 ECS
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-[#64748B] sm:text-xl/8 font-sans">
            让您随时获取更强劲、更灵活、更低成本的澎湃算力
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-sm bg-[#0055ff] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0043cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055ff] transition-all"
            >
              开始使用
            </a>
            <a href="#" className="text-sm/6 font-semibold text-[#0F172A] hover:text-[#0055ff] transition-colors font-sans">
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* 右侧可视化展示区 */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            {/* 云计算模拟界面 */}
            <div className="w-304 relative overflow-hidden rounded-sm border border-[#E2E8F0] bg-white p-8 shadow-lg shadow-slate-200/50">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 rounded-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full border border-[#E2E8F0] bg-white" />
                    <div className="h-2.5 w-2.5 rounded-full border border-[#E2E8F0] bg-white" />
                    <div className="h-2.5 w-2.5 rounded-full border border-[#E2E8F0] bg-white" />
                  </div>
                  <div className="text-xs font-medium text-[#64748B] font-mono">云计算控制台</div>
                </div>

              {/* 云服务器集群 */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-[#0F172A] font-sans">
                  云服务器集群
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((server) => (
                    <div
                      key={server}
                      className="rounded-sm border border-[#E2E8F0] bg-white p-4 hover:border-[#0055ff]/30 hover:shadow-md transition-all"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="h-3 w-3 rounded-full bg-[#0055ff] animate-pulse"></div>
                        <span className="text-xs text-[#64748B] font-mono">
                          服务器 {server}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-sm bg-[#F8FAFC]">
                          <div
                            className="h-2 rounded-sm bg-[#0055ff]"
                            style={{ width: `${Math.random() * 80 + 20}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-[#64748B] font-mono">
                          CPU: {Math.floor(Math.random() * 80 + 20)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 数据流动图 */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-[#0F172A] font-sans">
                  数据流动
                </h3>
                <div className="relative rounded-sm border border-[#E2E8F0] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff]">
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="mx-4 flex-1">
                      <div className="flex items-center">
                        <div className="h-1 flex-1 animate-pulse rounded-sm bg-[#0055ff]/70"></div>
                        <div className="mx-2 text-sm text-[#64748B] font-mono">传输中</div>
                        <div className="h-1 flex-1 animate-pulse rounded-sm bg-[#0055ff]/40"></div>
                      </div>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] text-[#0055ff]">
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 性能指标 */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#0F172A] font-sans">
                  实时监控
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-sm border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-1 text-sm text-[#64748B]">响应时间</div>
                    <div className="text-2xl font-bold text-[#0055ff] font-mono">
                      23ms
                    </div>
                  </div>
                  <div className="rounded-sm border border-[#E2E8F0] bg-white p-4">
                    <div className="mb-1 text-sm text-[#64748B]">在线用户</div>
                    <div className="text-2xl font-bold text-[#0055ff] font-mono">
                      1,247
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
