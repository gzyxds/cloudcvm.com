import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CogIcon,
  Squares2X2Icon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品终端数据接口
 */
interface ProductTerminal {
  name: string
  description: string
  icon: React.ElementType
  status: string
}

/**
 * 产品终端数据
 */
const productTerminals: ProductTerminal[] = [
  {
    name: '微信公众号',
    description: '微信生态内直达AI服务，关注即用，无需下载安装',
    icon: ChatBubbleLeftRightIcon,
    status: '已上线',
  },
  {
    name: 'H5浏览器',
    description: '跨平台浏览器访问，适配所有移动设备和桌面端',
    icon: GlobeAltIcon,
    status: '已上线',
  },
  {
    name: '微信小程序',
    description: '微信内轻量级应用，即用即走，流畅原生体验',
    icon: Squares2X2Icon,
    status: '已上线',
  },
  {
    name: 'PC客户端',
    description: '桌面客户端，功能完备，高效办公专属体验',
    icon: ComputerDesktopIcon,
    status: '已上线',
  },
  {
    name: '管理后台',
    description: '可视化数据看板，灵活配置AI模型与业务参数',
    icon: CogIcon,
    status: '已上线',
  },
  {
    name: '移动APP',
    description: '原生移动应用，流畅交互体验，即将正式发布',
    icon: DevicePhoneMobileIcon,
    status: '适配中',
  },
]

/**
 * 产品终端展示组件
 * 展示AI产品支持的多种终端访问方式
 */
export function ProductTerminalsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
            产品终端
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            多端支持，全平台覆盖
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            支持微信公众号、H5浏览器、小程序、PC客户端、管理后台等多种访问方式
          </p>
        </div>

        {/* 终端卡片网格 */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {productTerminals.map((terminal) => (
            <div
              key={terminal.name}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-brand-200 hover:shadow-md"
            >
              {/* 头部：图标 + 名称 + 状态 */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <terminal.icon aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {terminal.name}
                  </h3>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    terminal.status === '已上线'
                      ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                      : 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
                  }`}
                >
                  {terminal.status}
                </span>
              </div>

              {/* 描述 */}
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {terminal.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
