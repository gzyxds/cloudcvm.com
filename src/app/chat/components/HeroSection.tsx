import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import {
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  PencilIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

/** chat 页英雄区块（2026-10-05 自 page.tsx 拆分） */
function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* 简约背景 — 点阵 + 光晕 */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-brand-500) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-brand-500/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-3xl" />
      </div>

      <Container className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36">
        {/* 在线状态指示 */}
        <div className="mb-8 flex animate-slide-up justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-sm font-medium text-neutral-700">AI服务正常运行中</span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：文字内容 */}
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block">艺创AI</span>
                <span className="mt-1 block text-brand-500">聊天绘画</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base lg:mx-0 lg:text-lg">
                集成最新 GPT-4、DALL·E 3、Midjourney 等顶级 AI 模型，
                <span className="font-semibold text-brand-500"> 一站式 AI 创作平台</span>，
                让创意无限可能
              </p>
            </div>

            {/* 功能 Pill 标签 */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {[
                { name: '智能对话', time: '24/7', icon: ChatBubbleLeftRightIcon },
                { name: 'AI绘画', time: '5min', icon: SparklesIcon },
                { name: '智能创作', time: '<3s', icon: PencilIcon },
                { name: '营销变现', time: '1h', icon: MegaphoneIcon },
              ].map((f, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm transition-all duration-200 hover:border-brand-200 hover:shadow-sm"
                >
                  <f.icon className="h-4 w-4 text-neutral-500" />
                  <span className="font-medium text-neutral-800">{f.name}</span>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 font-mono text-xs font-semibold text-brand-500">
                    {f.time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-600 hover:shadow-md"
              >
                <RocketLaunchIcon className="h-4 w-4" />
                立即体验
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                联系客服
              </a>
            </div>

            {/* 信任指标 */}
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              {[
                { value: '1000+', label: '企业用户' },
                { value: '50万+', label: 'AI创作' },
                { value: '99.9%', label: '系统稳定' },
              ].map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold tracking-tight text-brand-500 sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-0.5 text-xs text-neutral-500 sm:text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：演示卡片 */}
          <div className="relative">
            <div className="relative rounded-md border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              {/* 卡片头部 */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">艺创AI助手</h3>
                    <p className="text-xs text-neutral-500">智能对话 · 图像生成</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="text-xs text-neutral-500">在线</span>
                </div>
              </div>

              {/* 对话区 */}
              <div className="mb-5 min-h-[200px] space-y-4 rounded-xl bg-brand-50/50 p-4 sm:min-h-[260px]">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                  </div>
                  <div className="max-w-[75%] rounded-xl rounded-tl-sm bg-white px-4 py-2.5 shadow-sm">
                    <p className="text-sm text-neutral-700">
                      您好！我可以帮您进行AI创作、图片生成等服务
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-[75%] rounded-xl rounded-tr-sm bg-brand-500 px-4 py-2.5">
                    <p className="text-sm text-white">请帮我生成一张未来科技城市的图片</p>
                  </div>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-800">
                    <UsersIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* 功能网格 */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: 'AI创作',
                    desc: '智能文案',
                    icon: PencilIcon,
                    g: 'from-brand-500 to-brand-400',
                  },
                  {
                    label: 'AI绘画',
                    desc: '图像生成',
                    icon: SparklesIcon,
                    g: 'from-purple-500 to-purple-400',
                  },
                  {
                    label: '语音助手',
                    desc: '语音交互',
                    icon: MicrophoneIcon,
                    g: 'from-brand-500 to-brand-400',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-gradient-to-br ${item.g} p-3.5 text-white transition-transform duration-200 hover:scale-[1.03]`}
                  >
                    <item.icon className="mb-2 h-5 w-5" />
                    <h4 className="text-sm font-semibold">{item.label}</h4>
                    <p className="mt-0.5 text-[11px] text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 技术优势 */}
        <div className="mt-16 sm:mt-24">
          <div className="mb-8 text-center">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
              核心技术优势
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              基于前沿AI技术，为企业提供专业可靠的智能化解决方案
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '自然语言处理', code: 'NLP' },
              { name: '计算机视觉', code: 'CV' },
              { name: '深度学习', code: 'DL' },
              { name: '知识图谱', code: 'KG' },
              { name: '多模态融合', code: 'MM' },
            ].map((tech, i) => (
              <div
                key={i}
                className="group rounded-md border border-neutral-200 bg-white p-4 text-center transition-all duration-200 hover:border-brand-200 hover:shadow-sm"
              >
                <div className="mb-1 font-mono text-xs font-bold tracking-wide text-brand-500">
                  {tech.code}
                </div>
                <div className="text-sm font-medium text-neutral-700">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
