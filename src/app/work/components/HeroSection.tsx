import type { JSX } from 'react'
import { Button } from '@/components/ui/Button'
import {
  ChatBubbleLeftRightIcon,
  UsersIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  PencilIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

/**
 * work 页英雄区块（2026-10-05 自 page.tsx 拆分，巨型页治理）
 * 含页面专属的 <style> 注入（float/fadeIn 关键帧与 xs: 断点类）
 */
function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
      {/* 几何背景装饰 - 响应式尺寸优化 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="xs:-top-32 xs:-right-32 xs:w-60 xs:h-60 animate-blob absolute -top-20 -right-20 h-40 w-40 rounded-full bg-brand-400 opacity-20 mix-blend-multiply blur-xl filter sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
        <div className="xs:-bottom-32 xs:-left-32 xs:w-60 xs:h-60 animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
        <div className="xs:w-60 xs:h-60 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-brand-400 opacity-20 mix-blend-multiply blur-xl filter sm:h-80 sm:w-80"></div>
      </div>

      {/* 动态渐变背景 - 光效和网格 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--color-brand-500)_10%,transparent),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_25%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_26%,transparent_27%,transparent_74%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_75%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_76%,transparent_77%,transparent),linear-gradient(color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_24%,transparent_25%,transparent_26%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_27%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_74%,transparent_75%,transparent_76%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent)_77%,color-mix(in_srgb,var(--color-brand-500)_3%,transparent))] bg-[length:75px_75px]"></div>
      </div>

      {/* 响应式容器 - 优化超小屏幕适配 */}
      <div className="xs:px-4 xs:pt-20 xs:pb-16 relative z-10 mx-auto max-w-[1800px] px-3 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28">
        {/* 状态标签 - 响应式间距和字体 */}
        <div className="xs:mb-6 mb-4 flex justify-center sm:mb-8">
          <div className="xs:gap-2 xs:px-4 xs:py-2 inline-flex items-center gap-1.5 border border-brand-100 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
            <div className="xs:w-2 xs:h-2 h-1.5 w-1.5 animate-pulse bg-success"></div>
            <span className="xs:text-sm text-xs font-medium text-neutral-700">
              AI服务正常运行中
            </span>
          </div>
        </div>

        <div className="xs:gap-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* 左侧内容区 - 优化移动端间距 */}
          <div className="xs:space-y-6 space-y-4 text-center sm:space-y-8 lg:text-left">
            {/* 主标题 - 增强响应式字体大小 */}
            <div className="xs:space-y-4 space-y-3 sm:space-y-6">
              <h1 className="xs:text-3xl text-2xl leading-tight font-bold text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">企业级AI</span>
                <span className="block text-brand-500">智能知识库</span>
                <span className="block">企业AI解决方案</span>
              </h1>
              <p className="xs:text-base xs:px-0 mx-auto max-w-2xl px-2 text-sm leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 lg:text-xl">
                融合前沿AI技术与企业实际需求，提供智能问答、知识管理、数字人定制等一站式服务，助力企业数字化转型升级
              </p>
            </div>

            {/* 核心功能标签 - 优化移动端显示 */}
            <div className="xs:gap-3 xs:px-0 mx-auto flex max-w-2xl flex-wrap justify-center gap-2 px-3 sm:gap-4 lg:mx-0 lg:justify-start">
              {[
                {
                  name: '智能问答',
                  time: '24/7',
                  icon: ChatBubbleLeftRightIcon,
                },
                { name: '数字人定制', time: '5min', icon: UsersIcon },
                { name: '语音合成', time: '<3s', icon: MicrophoneIcon },
                { name: '知识训练', time: '1h', icon: AcademicCapIcon },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group xs:gap-3 xs:px-4 xs:py-3 inline-flex touch-manipulation items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-3 py-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <Icon className="xs:h-5 xs:w-5 h-4 w-4 text-neutral-600 transition-colors group-hover:text-brand-500" />
                    <span className="xs:text-base text-sm font-medium text-neutral-800">
                      {feature.name}
                    </span>
                    <span className="xs:px-2.5 xs:text-sm rounded-full bg-brand-50 px-2 py-0.5 font-mono text-xs text-brand-500">
                      {feature.time}
                    </span>
                  </div>
                )
              })}
            </div>
            {/* 行动按钮 - 增强移动端适配 */}
            <div className="xs:flex-row xs:gap-3 xs:px-0 flex flex-col justify-center gap-2.5 px-4 sm:gap-4 lg:justify-start">
              <Button
                href="#demo"
                variant="solid"
                color="blue"
                className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation rounded-xl px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
              >
                立即体验
              </Button>
              <Button
                href="https://v.cnai.art"
                target="_blank"
                variant="outline"
                color="slate"
                className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
              >
                联系客服
              </Button>
            </div>

            {/* 实时数据展示 - 优化移动端布局 */}
            <div className="xs:gap-6 flex justify-center gap-4 sm:gap-8 lg:justify-start">
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  100万+
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">企业用户</div>
              </div>
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  99.9%
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">可用性</div>
              </div>
              <div className="text-center">
                <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-brand-500 sm:text-3xl">
                  &lt;3秒
                </div>
                <div className="xs:text-sm text-xs text-neutral-600">响应</div>
              </div>
            </div>
          </div>

          {/* 右侧展示区 - 增强移动端适配 */}
          <div className="xs:mt-8 xs:mx-4 relative mx-2 mt-6 sm:mx-0 lg:mt-0">
            {/* 主展示容器 - 优化响应式尺寸 */}
            <div className="relative">
              {/* 展示卡片 - 全面优化移动端高度和间距 */}
              <div className="xs:p-4 xs:min-h-[380px] relative min-h-[320px] border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-3 transition-all duration-300 sm:min-h-[460px] sm:p-6 md:min-h-[500px]">
                {/* 顶部状态栏 - 增强移动端布局 */}
                <div className="xs:mb-4 mb-3 flex items-center justify-between sm:mb-6">
                  <div className="xs:gap-2 flex items-center gap-1.5 sm:gap-3">
                    <div className="xs:w-7 xs:h-7 flex h-6 w-6 items-center justify-center bg-brand-500 sm:h-9 sm:w-9">
                      <ChatBubbleLeftRightIcon className="xs:w-4 xs:h-4 h-3 w-3 text-white sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="xs:text-sm text-xs font-bold text-neutral-900 sm:text-base">
                        企业AI助手
                      </h3>
                      <p className="xs:text-xs text-[10px] text-neutral-500 sm:text-sm">
                        智能知识库 · 数字人服务
                      </p>
                    </div>
                  </div>
                  <div className="xs:gap-1.5 flex items-center gap-1 sm:gap-2">
                    <div className="xs:w-1.5 xs:h-1.5 h-1 w-1 animate-pulse bg-success sm:h-2 sm:w-2"></div>
                    <span className="xs:text-xs xs:inline hidden text-[10px] text-neutral-600 sm:text-sm">
                      在线服务中
                    </span>
                    <span className="xs:hidden text-[10px] text-neutral-600">在线</span>
                  </div>
                </div>

                {/* 对话展示区 - 全面优化移动端设计 */}
                <div className="xs:p-3 xs:mb-4 xs:min-h-[170px] mb-3 min-h-[140px] border border-brand-100 bg-gradient-to-br from-brand-50 to-brand-50 p-2.5 transition-all duration-300 sm:mb-6 sm:min-h-[220px] sm:p-5 md:min-h-[250px]">
                  <div className="xs:space-y-3 space-y-2.5 sm:space-y-5">
                    {/* AI消息 */}
                    <div className="xs:gap-2 flex animate-fade-in items-start gap-1.5 sm:gap-3">
                      <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-brand-600 bg-brand-500 sm:h-8 sm:w-8">
                        <ChatBubbleLeftRightIcon
                          className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                          aria-hidden="true"
                        />
                        <span className="sr-only">AI助手</span>
                      </div>
                      <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-neutral-200 bg-white p-2 sm:max-w-xs sm:p-3.5">
                        <p className="xs:text-xs text-[10px] leading-relaxed text-neutral-800 sm:text-sm">
                          您好！我是您的专属AI助手，可以为您提供智能问答、知识检索和数字人定制服务
                        </p>
                      </div>
                    </div>

                    {/* 用户消息 */}
                    <div className="xs:gap-2 animation-delay-300 flex animate-fade-in items-start justify-end gap-1.5 sm:gap-3">
                      <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-brand-600 bg-brand-500 p-2 sm:max-w-xs sm:p-3.5">
                        <p className="xs:text-xs text-[10px] leading-relaxed text-white sm:text-sm">
                          我需要为公司培训部门定制一个专业的数字人讲师
                        </p>
                      </div>
                      <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-neutral-800 bg-neutral-700 sm:h-8 sm:w-8">
                        <UsersIcon
                          className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                          aria-hidden="true"
                        />
                        <span className="sr-only">用户</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 功能展示区 - 优化移动端网格布局 */}
                <div className="xs:gap-2 grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
                  {/* 知识库功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-brand-600 bg-gradient-to-br from-brand-500 to-brand-500 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <PencilIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      知识库
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-brand-100 opacity-80">
                      智能问答系统
                    </p>
                  </div>

                  {/* 数字人功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-brand-700 bg-gradient-to-br from-brand-500 to-brand-600 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <VideoCameraIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      数字人
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-brand-100 opacity-80">
                      虚拟形象生成
                    </p>
                  </div>

                  {/* 语音合成功能卡片 */}
                  <div className="xs:p-2.5 group touch-manipulation border border-purple-500 bg-gradient-to-br from-purple-500 to-purple-400 p-2 text-white transition-all duration-300 sm:p-3.5">
                    <MicrophoneIcon
                      className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                      语音合成
                    </h4>
                    <p className="xs:text-xs xs:block hidden text-[9px] text-purple-100 opacity-80">
                      AI声音克隆
                    </p>
                  </div>
                </div>
              </div>

              {/* 装饰浮动元素 - 全面优化移动端位置和大小 */}
              <div className="xs:-top-2 xs:-right-2 xs:p-2 absolute -top-1.5 -right-1.5 transform animate-float border border-neutral-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-top-3 sm:-right-3 sm:p-3 md:-top-4 md:-right-4">
                <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                  <svg
                    className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-brand-500 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="xs:text-xs bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-[9px] font-medium whitespace-nowrap text-transparent sm:text-sm">
                    智能问答
                  </span>
                </div>
              </div>
              <div className="xs:-bottom-2 xs:-left-2 xs:p-2 animation-delay-2000 absolute -bottom-1.5 -left-1.5 transform animate-float border border-neutral-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-bottom-3 sm:-left-3 sm:p-3 md:-bottom-4 md:-left-4">
                <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                  <VideoCameraIcon className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-neutral-950 sm:h-4 sm:w-4" />
                  <span className="xs:text-[10px] text-[8px] font-medium whitespace-nowrap text-neutral-950 sm:text-sm">
                    知识库数据训练
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术优势展示 - 优化移动端布局 */}
        <div className="xs:mt-16 mt-12 sm:mt-20">
          <div className="xs:mb-8 mb-6 text-center">
            <h3 className="xs:text-lg xs:mb-2 mb-1.5 text-base font-semibold text-neutral-900 sm:text-xl">
              核心技术优势
            </h3>
            <p className="xs:text-sm xs:px-0 px-4 text-xs text-neutral-600">
              基于前沿AI技术，为企业提供专业可靠的智能化解决方案
            </p>
          </div>
          <div className="xs:gap-3 xs:px-0 mx-auto grid max-w-5xl grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '自然语言处理', desc: 'NLP' },
              { name: '计算机视觉', desc: 'CV' },
              { name: '深度学习', desc: 'DL' },
              { name: '知识图谱', desc: 'KG' },
              { name: '多模态融合', desc: 'MM' },
            ].map((tech, index) => (
              <div
                key={index}
                className="xs:p-4 group cursor-pointer touch-manipulation border border-neutral-200 bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/50"
              >
                <div className="xs:text-xs xs:mb-1 mb-0.5 font-mono text-[10px] font-semibold text-brand-500 group-hover:text-brand-600">
                  {tech.desc}
                </div>
                <div className="xs:text-sm text-xs font-medium text-neutral-700 group-hover:text-neutral-900">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 自定义CSS动画样式 - 增加移动端优化 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              .animation-delay-2000 {
                animation-delay: 2s;
              }
              .animation-delay-4000 {
                animation-delay: 4s;
              }
              .animation-delay-300 {
                animation-delay: 0.3s;
              }
              .rotate-3d {
                transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
              }
              /* 移动端触摸优化 */
              .touch-manipulation {
                touch-action: manipulation;
              }
              /* 减少移动端动画以提升性能 */
              @media (max-width: 640px) {
                .animate-float {
                  animation-duration: 4s;
                }
                .animate-blob {
                  animation-duration: 8s;
                }
              }
              /* 超小屏幕断点 */
              @media (min-width: 475px) {
                .xs\:block { display: block; }
                .xs\:inline { display: inline; }
                .xs\:flex { display: flex; }
                .xs\:hidden { display: none; }
              }
            `,
        }}
      />
    </section>
  )
}

export default HeroSection
