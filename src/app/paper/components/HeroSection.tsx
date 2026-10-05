import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { AcademicCapIcon, PencilIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline'

/** paper 页英雄区块（2026-10-05 自 page.tsx 拆分） */
function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
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
        <div className="mb-8 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-sm font-medium text-neutral-700">AI论文服务正常运行中</span>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：文字内容 */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="block">艺创AI</span>
              <span className="mt-1 block text-brand-500">论文创作</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base lg:mx-0 lg:text-lg">
              集成最新 GPT-4、Claude、文心一言等顶级 AI 模型，
              <span className="font-semibold text-brand-500"> 打造一站式论文创作平台</span>
            </p>

            {/* 功能 Pill 标签 */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {['智能写作', '文献检索', '格式排版', '查重降重', 'AI润色'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-200 hover:text-brand-500"
                >
                  <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="https://paper.gmlart.cn/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-600 hover:shadow-md"
              >
                <PencilIcon className="h-4 w-4" />
                立即开始创作
              </a>
              <a
                href="https://paper.gmlart.cn/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
              >
                <PlayIcon className="h-4 w-4" />
                观看演示
              </a>
            </div>

            {/* 信任指标 */}
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              {[
                { value: '1000+', label: '企业用户' },
                { value: '50万+', label: '论文生成' },
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

          {/* 右侧：论文创作演示卡片 */}
          <div className="relative">
            <div className="relative rounded-md border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500">
                    <AcademicCapIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">论文创作助手</h3>
                    <p className="text-xs text-neutral-500">AI驱动 · 学术写作</p>
                  </div>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
              </div>

              <div className="mb-5 min-h-[180px] space-y-3 rounded-xl bg-brand-50/50 p-4 sm:min-h-[240px]">
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  <p className="mb-1 text-sm font-medium text-neutral-700">论文大纲生成</p>
                  <div className="space-y-1.5">
                    <div className="h-2 w-full rounded bg-brand-100" />
                    <div className="h-2 w-4/5 rounded bg-brand-100" />
                    <div className="h-2 w-3/5 rounded bg-brand-100" />
                  </div>
                </div>
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  <p className="mb-1 text-sm font-medium text-neutral-700">文献综述助手</p>
                  <div className="flex gap-2">
                    {['NLP', 'CV', 'DL', 'KG'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-brand-100 px-2 py-0.5 font-mono text-xs font-semibold text-brand-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '大纲生成', g: 'from-brand-500 to-brand-400' },
                  { label: '文献检索', g: 'from-purple-500 to-purple-400' },
                  { label: '智能排版', g: 'from-brand-500 to-brand-400' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-xl bg-gradient-to-br ${item.g} p-3.5 text-center text-white transition-transform duration-200 hover:scale-[1.03]`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
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
              基于前沿AI技术，为学术写作提供专业可靠的智能化解决方案
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '自然语言处理', code: 'NLP' },
              { name: '学术写作引擎', code: 'AWE' },
              { name: '文献智能分析', code: 'LIA' },
              { name: '深度语义理解', code: 'DSU' },
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
