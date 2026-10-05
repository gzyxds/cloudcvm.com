'use client'

import { useState } from 'react'
import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import {
  PencilIcon,
  PlayIcon,
  TvIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

function ScenariosSection(): JSX.Element {
  const [activeScenario, setActiveScenario] = useState<keyof typeof scenarioData>('virtualIP')

  // 场景数据配置
  const scenarioData = {
    virtualIP: {
      title: '带货视频',
      subtitle: '热门场景',
      description:
        '面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。',
      features: [
        { name: '品牌代言', desc: '提升品牌辨识度' },
        { name: '内容创作', desc: '高质量虚拟角色' },
        { name: '社交互动', desc: '增强用户体验' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d7597b2e51444a40_1697534317820.mp4',
      icon: VideoCameraIcon,
      tagText: '带货视频',
      tagDesc: '品牌营销解决方案',
    },
    digitalEmployee: {
      title: '数字员工',
      subtitle: '企业应用',
      description:
        '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
      features: [
        { name: '智能客服', desc: '7×24小时在线服务' },
        { name: '销售助手', desc: '提高转化率' },
        { name: '培训讲师', desc: '标准化培训内容' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58de8e04fa71151b_1697611541810.mp4',
      icon: UserGroupIcon,
      tagText: '数字员工',
      tagDesc: '智能业务助手',
    },
    contentCreation: {
      title: '内容创作',
      subtitle: '创意应用',
      description: '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
      features: [
        { name: '视频脚本', desc: '专业视频脚本' },
        { name: '营销文案', desc: '提高转化率' },
        { name: '多语言翻译', desc: '拓展全球市场' },
      ],
      videoUrl:
        'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/77eb68b8aabcb8aa_1697534305029.mp4',
      icon: PencilIcon,
      tagText: '内容创作',
      tagDesc: '智能创作助手',
    },
    virtualLive: {
      title: '虚拟直播',
      subtitle: '直播应用',
      description: '提供24小时不间断的虚拟主播直播服务，降低直播成本，提升直播效果和用户粘性。',
      features: [
        { name: '24小时直播', desc: '全天候在线' },
        { name: '互动问答', desc: '智能回复观众' },
        { name: '商品推荐', desc: '精准营销' },
      ],
      videoUrl:
        'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4',
      icon: TvIcon,
      tagText: '虚拟直播',
      tagDesc: '24小时在线主播',
    },
  }

  const currentScenario = scenarioData[activeScenario]

  return (
    <section className="bg-white py-20">
      <Container>
        {/* 标题区域 - 参考demo页面设计 */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-brand-50 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-sm font-medium text-brand-600">场景应用</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900">应用场景</h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-brand-500"></div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航 - 现代化简约风格 - 优化移动端滚动 */}
        <div className="mb-16 flex justify-center">
          <div className="scrollbar-hide inline-flex max-w-full overflow-x-auto bg-neutral-50 p-1.5 shadow-sm">
            <button
              className={`relative min-w-[100px] rounded-xl px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'virtualIP'
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
              }`}
              onClick={() => setActiveScenario('virtualIP')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <VideoCameraIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                带货视频
              </span>
              {activeScenario === 'virtualIP' && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] rounded-xl px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'digitalEmployee'
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
              }`}
              onClick={() => setActiveScenario('digitalEmployee')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <UserGroupIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                数字员工
              </span>
              {activeScenario === 'digitalEmployee' && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] rounded-xl px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'contentCreation'
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
              }`}
              onClick={() => setActiveScenario('contentCreation')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <PencilIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                内容创作
              </span>
              {activeScenario === 'contentCreation' && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600"></div>
              )}
            </button>
            <button
              className={`relative min-w-[100px] rounded-xl px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:min-w-[120px] sm:px-6 sm:py-3 ${
                activeScenario === 'virtualLive'
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
              }`}
              onClick={() => setActiveScenario('virtualLive')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <TvIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                虚拟直播
              </span>
              {activeScenario === 'virtualLive' && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* 场景内容 - 参考demo页面的左右布局 */}
        <div className="grid items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* 左侧内容 */}
          <div
            className={`space-y-8 ${
              activeScenario === 'digitalEmployee' ? 'order-2 lg:order-1' : ''
            }`}
          >
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-brand-50 px-3 py-1">
                <span className="text-xs font-medium text-brand-500">
                  {currentScenario.subtitle}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-neutral-900 sm:mb-4 sm:text-3xl">
                {currentScenario.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {currentScenario.description}
              </p>
            </div>

            {/* 功能特性 - 简洁样式 */}
            <div className="space-y-3">
              {currentScenario.features.map(
                (feature: { name: string; desc: string }, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-500"></div>
                    <div>
                      <span className="font-medium text-neutral-900">{feature.name}</span>
                      <span className="ml-2 text-neutral-500">- {feature.desc}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* 按钮组 - 优化移动端按钮大小 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="flex h-auto min-h-[44px] items-center justify-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-brand-600 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                onClick={() => (window.location.href = '/demo')}
              >
                <PlayIcon className="mr-2 h-4 w-4" />
                立即试用
              </Button>
              <Button
                variant="outline"
                className="flex h-auto min-h-[44px] items-center justify-center rounded-xl border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                href="#"
              >
                <UserGroupIcon className="mr-2 h-4 w-4" />
                购买授权
              </Button>
            </div>
          </div>

          {/* 右侧视频 */}
          <div
            className={`relative ${
              activeScenario === 'digitalEmployee' ? 'order-1 lg:order-2' : ''
            }`}
          >
            <div className="rounded-xl bg-gradient-to-br from-brand-50 to-brand-50 p-4 sm:rounded-3xl sm:p-8">
              {/* 手动播放（controls）：autoPlay/muted 是为自动播放准备的，移除后由用户决定播放 */}
              <video
                src={currentScenario.videoUrl}
                className="w-full rounded-2xl shadow-lg"
                preload="metadata"
                playsInline
                controls
                loop
              >
                您的浏览器不支持 video 标签。
              </video>
            </div>
            {/* 悬浮标签 */}
            <div
              className={`absolute rounded-md border border-neutral-100 bg-white p-4 shadow-lg ${
                activeScenario === 'digitalEmployee' ? '-top-4 -left-4' : '-top-4 -right-4'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-brand-50">
                  <currentScenario.icon className="h-6 w-6 text-brand-500" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{currentScenario.tagText}</p>
                  <p className="text-sm text-neutral-500">{currentScenario.tagDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ScenariosSection
