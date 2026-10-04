'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

// 客户案例数据
const customers = [
  {
    id: 'xiaohongshu',
    name: '小红书',
    description:
      '我们使用 AMD 实例提供高性能算力支撑，搜索推荐系统分布式训练集群性能提升 30%，多可用区部署，提供大规模高可用算力服务。',
    image: '/images/screenshots/Customer.webp',
  },
  {
    id: 'weibo',
    name: '新浪微博',
    description:
      '倚天计算型 c8y 实例算力强劲，构建音视频直播处理集群，提升音视频处理效率，转码 H264场景单路成本降 66.7%。',
    image: '/images/screenshots/Customer1.webp',
  },
  {
    id: 'douyin',
    name: '抖音',
    description:
      '通过优刻云的CDN和存储解决方案，我们的内容分发速度提升了200%，用户体验显著改善，同时运营成本降低了30%。',
    image: '/images/screenshots/Customer2.webp',
  },
  {
    id: 'kuaishou',
    name: '快手',
    description:
      '借助优刻云的AI和大数据分析能力，我们成功构建了智能推荐系统，用户留存率提升了45%，平台活跃度显著增长。',
    image: '/images/screenshots/kuaishou.webp',
  },
]

/**
 * Customer组件 - 展示客户案例的简约大气界面
 * 采用左右布局，左侧客户列表，右侧展示图片
 * @returns {JSX.Element} Customer组件
 */
export default function Customer() {
  const [activeCustomer, setActiveCustomer] = useState('xiaohongshu')

  // 获取当前激活的客户案例
  const currentCustomer =
    customers.find((customer) => customer.id === activeCustomer) || customers[0]

  return (
    <section className="section-y bg-white">
      <Container>
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h2 className="section-title-xl">客户案例</h2>
          <p className="section-desc-lg">云服务助力全球知名企业数字化转型，赋能业务成功</p>
        </div>

        {/* 主要内容区域 */}
        <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* 左侧：客户列表 */}
          <div className="order-2 w-full lg:order-1">
            {/* 移动端：水平滚动的客户选择器 */}
            <div className="mb-6 block lg:hidden">
              <div className="scrollbar-hide flex space-x-2 overflow-x-auto pb-2">
                {customers.map((customer, index) => (
                  <button
                    key={customer.id}
                    onClick={() => setActiveCustomer(customer.id)}
                    className={clsx(
                      'flex-shrink-0 rounded-md border px-4 py-2 text-sm font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-200',
                      activeCustomer === customer.id
                        ? 'border-brand-500 bg-brand-500 text-white'
                        : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50'
                    )}
                  >
                    {index + 1}. {customer.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 移动端：当前选中客户的详细信息 */}
            <div className="mb-6 block rounded-lg border border-neutral-200 bg-neutral-50 p-6 lg:hidden">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold text-neutral-900">{currentCustomer.name}</h3>
                <span className="text-lg font-medium text-brand-500">
                  {customers.findIndex((c) => c.id === activeCustomer) + 1}
                </span>
              </div>
              <p className="text-base leading-relaxed text-neutral-500">
                {currentCustomer.description}
              </p>
            </div>

            {/* 桌面端：垂直客户列表 */}
            <div className="hidden min-h-[450px] space-y-4 lg:flex lg:flex-col">
              {customers.map((customer, index) => (
                <button
                  key={customer.id}
                  onClick={() => setActiveCustomer(customer.id)}
                  className={clsx(
                    'group w-full flex-1 rounded-lg border text-left transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-200',
                    activeCustomer === customer.id
                      ? 'border-brand-200 bg-brand-50 p-8'
                      : 'border-neutral-200 bg-white p-6 hover:border-brand-200 hover:bg-neutral-50'
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <h3
                      className={clsx(
                        'text-xl font-bold transition-colors duration-200',
                        activeCustomer === customer.id
                          ? 'text-brand-500'
                          : 'text-neutral-900 group-hover:text-brand-500'
                      )}
                    >
                      {customer.name}
                    </h3>
                    <span
                      className={clsx(
                        'text-lg font-medium transition-colors duration-200',
                        activeCustomer === customer.id
                          ? 'text-brand-500/60'
                          : 'text-neutral-400 group-hover:text-brand-500/40'
                      )}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <div
                    className={clsx(
                      'grid transition-all duration-300 ease-in-out',
                      activeCustomer === customer.id
                        ? 'mt-4 grid-rows-[1fr] opacity-100'
                        : 'mt-0 grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <p className="overflow-hidden text-base leading-relaxed text-neutral-500">
                      {customer.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 右侧：展示图片 */}
          <div className="order-1 w-full lg:order-2">
            <div className="relative h-[250px] overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 sm:h-[300px] md:h-[350px] lg:h-[500px]">
              <div className="relative h-full w-full overflow-hidden rounded-md bg-neutral-50">
                <Image
                  src={currentCustomer.image}
                  alt={`${currentCustomer.name}案例展示`}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
