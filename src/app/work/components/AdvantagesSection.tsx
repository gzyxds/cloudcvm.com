import type { JSX } from 'react'
import { Container } from '@/components/ui/Container'

/** 产品优势展示区块（2026-10-05 自 page.tsx 拆分） */
function AdvantagesSection(): JSX.Element {
  // 渐变色配置
  const gradientColors = [
    'from-brand-500 to-brand-600',
    'from-brand-500 to-brand-500',
    'from-brand-400 to-brand-500',
    'from-brand-600 to-brand-700',
  ]
  const bulletColors = ['bg-brand-500', 'bg-brand-500', 'bg-brand-400', 'bg-brand-600']

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-neutral-950">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-500 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300">
            企业级智能客服解决方案，助力企业提升服务效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {[
            {
              title: '快速部署',
              description:
                '企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口，快速训练专属客服，灵活集成部署，24小时在线服务',
              stats: '5分钟',
              unit: '部署时间',
            },
            {
              title: '企业知识库',
              description:
                '企业可以上传产品文档、合同内容等信息，完成训练后，仅限内部员工访问使用，多类型文档支持，内部安全访问，高效信息检索',
              stats: '100%',
              unit: '安全可控',
            },
            {
              title: '专家顾问助理',
              description:
                '基于先进AI模型，提供专业的顾问咨询服务，快速响应各类专业咨询需求，领先研究模型，98.5%准确率，500ms响应时间',
              stats: 'MOS4.0',
              unit: '服务评分',
            },
            {
              title: '数据训练',
              description:
                '支持多种类型知识库训练，可灵活配置访问权限，实现知识共享与管理，多类型知识库，灵活权限配置，自动优化内容',
              stats: '24/7',
              unit: '持续优化',
            },
          ].map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div
                  className={`bg-gradient-to-br ${gradientColors[index % 4]} relative overflow-hidden p-6 text-white sm:p-8`}
                >
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 bg-white/10 sm:h-24 sm:w-24 sm:translate-x-12 sm:-translate-y-12"></div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-sm font-semibold opacity-90 sm:mb-3 sm:text-lg">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold sm:text-5xl">{advantage.stats}</span>
                      {advantage.unit && (
                        <span className="ml-2 text-lg font-medium sm:text-xl">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="mb-4 text-sm font-semibold text-neutral-900 sm:mb-6 sm:text-base dark:text-white">
                    {advantage.description.split('，')[0]}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.description
                      .split('，')
                      .slice(1)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div
                            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${bulletColors[index % 4]} mt-1.5 mr-2 flex-shrink-0 sm:mt-2 sm:mr-3`}
                          ></div>
                          <span className="text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-300">
                            {feature.trim()}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default AdvantagesSection
