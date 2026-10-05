import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

function WorkflowSection(): JSX.Element {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center rounded-sm border border-neutral-200 bg-brand-50 px-3 py-1">
            <span className="font-mono text-xs font-semibold text-brand-500">快速部署</span>
          </div>
          <h2 className="mb-4 font-sans text-2xl font-bold text-neutral-950 md:text-3xl">
            接入流程
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base font-medium text-neutral-500 md:text-lg">
            标准化服务流程，助您快速完成数字人系统部署
          </p>
          <Button variant="solid" color="blue" href="https://v.cnai.art" target="_blank">
            立即接入
          </Button>
        </div>

        {/* 流程步骤 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* 步骤1：需求沟通 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              01
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  01
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                需求沟通
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                提供产品信息，沟通数字人类型、使用场景和交付形式
              </p>
            </div>
          </div>

          {/* 步骤2：确认合作 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              02
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  02
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                确认合作
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                通过控制台直接下单，或线下沟通商务合作
              </p>
            </div>
          </div>

          {/* 步骤3：资产制作 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              03
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  03
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                资产制作
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                采集数据，制作数字人形象和声音资产
              </p>
            </div>
          </div>

          {/* 步骤4：正式上线 */}
          <div className="group relative overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg md:p-8">
            {/* 序号水印 */}
            <div className="pointer-events-none absolute -top-4 -right-4 font-mono text-7xl font-bold text-neutral-50 select-none md:text-9xl">
              04
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-neutral-50 transition-colors duration-300 group-hover:bg-brand-500 md:mb-6 md:h-12 md:w-12">
                <span className="font-mono text-base font-bold text-brand-500 transition-colors duration-300 group-hover:text-white md:text-lg">
                  04
                </span>
              </div>
              <h3 className="mb-2 font-sans text-lg font-bold text-neutral-950 md:mb-3 md:text-xl">
                正式上线
              </h3>
              <div className="mb-3 h-1 w-8 rounded-sm bg-neutral-200 transition-colors duration-300 group-hover:bg-brand-500/30 md:mb-4"></div>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                数字人上线，调用接口驱动或通过平台直接使用
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WorkflowSection
