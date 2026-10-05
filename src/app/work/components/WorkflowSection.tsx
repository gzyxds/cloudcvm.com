import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/** 接入流程区块（2026-10-05 自 page.tsx 拆分） */
function WorkflowSection(): JSX.Element {
  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">接入流程</h2>
            <p className="mb-3 text-sm text-neutral-600">为你提供快速、便捷的接入服务</p>
            <Button
              href="https://v.cnai.art"
              target="_blank"
              className="mt-4 bg-brand-500 px-6 py-2 text-sm font-medium text-white hover:bg-brand-600"
            >
              立即接入
            </Button>
          </div>

          {/* 流程步骤 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* 步骤1：需求沟通 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center bg-brand-100">
                  <span className="text-sm text-brand-500">01</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold">需求沟通</h3>
              <div className="mx-auto my-3 w-16 border-t border-neutral-200"></div>
              <p className="text-xs text-neutral-600">
                提供产品信息，沟通数字人类型、使用场景和交付形式
              </p>
            </div>

            {/* 步骤2：确认合作 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center bg-brand-100">
                  <span className="text-sm text-brand-500">02</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold">确认合作</h3>
              <div className="mx-auto my-3 w-16 border-t border-neutral-200"></div>
              <p className="text-xs text-neutral-600">通过控制台直接下单，或线下沟通商务合作</p>
            </div>

            {/* 步骤3：资产制作 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center bg-brand-100">
                  <span className="text-sm text-brand-500">03</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold">资产制作</h3>
              <div className="mx-auto my-3 w-16 border-t border-neutral-200"></div>
              <p className="text-xs text-neutral-600">采集数据，制作数字人形象和声音资产</p>
            </div>

            {/* 步骤4：正式上线 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center bg-brand-100">
                  <span className="text-sm text-brand-500">04</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-bold">正式上线</h3>
              <div className="mx-auto my-3 w-16 border-t border-neutral-200"></div>
              <p className="text-xs text-neutral-600">数字人上线，调用接口驱动或通过平台直接使用</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WorkflowSection
