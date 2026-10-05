import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/**
 * 「接入流程」区块（work / paper / chat 三页共用，同模板同文案）。
 *
 * 2026-10-05 自三页逐字重复的内联实现收敛为统一调用。
 * 视觉以 rounded-xl 全站基准为准（原 work/paper 的直角序号徽标统一为圆角）。
 * 注意：human 页的接入流程是「序号水印」富设计变体，不属于本模板。
 */
export function AiWorkflowSection(): JSX.Element {
  const steps = [
    { title: '需求沟通', desc: '提供产品信息，沟通数字人类型、使用场景和交付形式' },
    { title: '确认合作', desc: '通过控制台直接下单，或线下沟通商务合作' },
    { title: '资产制作', desc: '采集数据，制作数字人形象和声音资产' },
    { title: '正式上线', desc: '数字人上线，调用接口驱动或通过平台直接使用' },
  ]

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
              variant="solid"
              color="blue"
              size="sm"
              className="mt-4"
            >
              立即接入
            </Button>
          </div>

          {/* 流程步骤 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100">
                    <span className="text-sm text-brand-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold">{step.title}</h3>
                <div className="mx-auto my-3 w-16 border-t border-neutral-200"></div>
                <p className="text-xs text-neutral-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AiWorkflowSection
