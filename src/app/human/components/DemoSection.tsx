import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PlayIcon } from '@heroicons/react/24/outline'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'

interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// 在线演示组件

function DemoSection(): JSX.Element {
  // 演示账号配置
  const demoAccounts: DemoAccount[] = [
    {
      title: 'PC端后台',
      url: 'https://v.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '完整的数字人管理后台',
    },
    {
      title: '代理商后台',
      url: 'https://demo.cnai.art/admin',
      username: 'demo',
      password: 'demo',
      description: '代理商专用管理系统',
    },
    {
      title: 'SaaS平台端',
      url: 'https://saas.cnai.art/platform',
      username: '暂不提供',
      password: '暂不提供',
      description: 'SaaS服务管理平台',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20">
      {/* 背景装饰元素 */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-10 h-32 w-32 bg-brand-100 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-48 w-48 bg-brand-100 blur-2xl sm:h-60 sm:w-60 sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
          {/* 左侧内容 */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <div className="mb-4 inline-flex items-center bg-brand-100 px-3 py-1.5 text-xs font-medium text-brand-600 sm:mb-6 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 bg-brand-500"></span>
              在线演示
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-neutral-900 sm:mb-6 sm:text-3xl">
              AI数字人SaaS系统2.0
              <br className="hidden sm:block" />
              演示中心
            </h2>
            <p className="mb-6 text-base leading-relaxed text-neutral-600 sm:mb-8 sm:text-lg">
              通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
            </p>

            <div className="mb-6 bg-white p-4 shadow-lg sm:mb-8 sm:p-6">
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-8 w-8 items-center justify-center bg-brand-50 sm:mr-3 sm:h-10 sm:w-10">
                  <PlayIcon className="h-4 w-4 text-brand-500 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-medium sm:text-lg">演示账号信息</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {demoAccounts.map((account) => (
                  <div
                    key={account.title}
                    className="flex flex-col justify-between bg-neutral-50 p-3 sm:flex-row sm:items-center"
                  >
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs font-medium text-neutral-900 sm:text-sm">
                        {account.title}
                      </p>
                      <p className="text-xs break-all text-brand-500 sm:break-normal">
                        {account.url}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-neutral-500 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">{account.username}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1 text-xs text-neutral-500 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">{account.password}</span>
                      </div>
                      <Button
                        href={account.url}
                        variant="outline"
                        className="mt-2 h-7 border-brand-500 text-xs text-brand-500 hover:bg-brand-50 sm:mt-0 sm:h-8"
                      >
                        访问
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-auto min-h-[44px] rounded-xl bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-brand-600 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="h-auto min-h-[44px] rounded-xl border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示视频（进入视口才加载播放，离开视口暂停） */}
              <div className="bg-white p-4 shadow-lg sm:p-6">
                <BackgroundVideo
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-neutral-900 sm:text-sm">
                      数字人管理平台
                    </h4>
                    <p className="text-xs text-neutral-500">一站式管理您的所有数字人资产</p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-1.5 w-1.5 bg-danger sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-warning sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-success sm:h-2 sm:w-2"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 -left-3 transform bg-gradient-to-br from-brand-500 to-brand-600 p-3 shadow-lg transition-transform duration-300 hover:scale-105 sm:-top-6 sm:-left-6 sm:p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium tracking-wide text-white sm:text-base">
                      在线演示
                    </p>
                    <p className="text-xs text-brand-100/90 sm:text-sm">实时体验</p>
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

// 应用场景展示组件

export default DemoSection
