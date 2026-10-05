import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  PencilIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

/** paper 页产品优势区块（2026-10-05 自 page.tsx 拆分） */
function AdvantagesSection(): JSX.Element {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">应用场景</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-brand-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            多场景应用，助力学术写作与研究工作
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - AI智能对话 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">AI智能对话</h3>
                <div className="font-medium text-brand-500">秒级回复</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">对接GPT接口，AI秒级回复，提供精准服务</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">自然语言深度理解，精准识别用户意图</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">秒级响应，提升服务体验</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多场景适配，满足多行业需求</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - AI智能创作 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <AcademicCapIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">AI智能创作</h3>
                <div className="font-medium text-brand-500">深度创作</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">多模型支持，满足多样化创作需求</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多模型支持，满足多样化创作需求</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">
                  技能模型可自定义，分类越细，回答越精准
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">深度创作，提升内容质量与创新力</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 学生作业 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <PencilIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">学生作业</h3>
                <div className="font-medium text-brand-500">学习辅助</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">
              学生可以利用AI写作系统来获得关于特定主题的论文建议、参考文献和写作指导，提高写作能力和学术水平
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">提供论文建议和写作指导</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">智能推荐参考文献，节省查找时间</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">提升写作能力和学术水平</span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 营销功能 */}
          <div className="group rounded-md border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 group-hover:bg-brand-100">
                <CpuChipIcon className="h-6 w-6 text-brand-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">营销功能</h3>
                <div className="font-medium text-brand-500">商业变现</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-neutral-600">VIP会员、优惠券等丰富营销工具</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">VIP会员期间不限次数，畅享全部功能</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">系统自动赠送优惠券，提升用户复购率</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span className="text-sm text-neutral-700">多种套餐权益，满足不同用户需求</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AdvantagesSection
