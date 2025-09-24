'use client'

import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {
  DevicePhoneMobileIcon,
  CreditCardIcon,
  CurrencyYenIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

/**
 * FAQ数据结构定义
 * @interface FAQ
 * @property {string} question - 问题内容
 * @property {string} answer - 答案内容
 */
interface FAQ {
  question: string
  answer: string
}

/**
 * FAQ分类结构定义
 * @interface FAQCategory
 * @property {string} name - 分类名称
 * @property {React.ComponentType} icon - 分类图标组件
 * @property {FAQ[]} faqs - 该分类下的FAQ列表
 */
interface FAQCategory {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  faqs: FAQ[]
}

/**
 * FAQ分类数据
 * 包含六个主要分类：办理前、使用中、费用与到账、代理/招商、售后与投诉、产品选择
 */
const faqCategories: FAQCategory[] = [
  {
    name: '办理前',
    icon: DevicePhoneMobileIcon,
    faqs: [
      {
        question: '没有营业执照能办 POS 机吗？',
        answer:
          '可以。银盛/拉卡拉电签版支持个人身份证入网，秒审秒批，仅用于小微收款。个人凭身份证即可办理，无需营业执照，审核通过后当天发货。',
      },
      {
        question: '一个人最多能办几台？',
        answer:
          '同一身份证最多可注册 2 台电签；如需更多，可用家人资料或升级做代理。代理可享受分润万12-万16，激活返现299元/台的优惠政策。',
      },
      {
        question: '办理需要费用吗？',
        answer:
          '机器 0 元包邮，无激活费、无押金；快递签收后 30 天内激活即可，快递费我方承担。激活后即可享受0.38%费率，永不+3。',
      },
    ],
  },
  {
    name: '使用中',
    icon: CreditCardIcon,
    faqs: [
      {
        question: '刷卡多久到账？',
        answer:
          '7:00-22:30 交易秒到；22:30-次日 7:00 交易 T+1 上午 10 点前到账；节假日正常。资金直接结算到您的个人储蓄卡，无需对公账户。',
      },
      {
        question: '为什么刷卡不到账？',
        answer:
          '①结算卡Ⅱ类卡限额→换Ⅰ类卡；②交易风控→APP 上传小票即可；③系统维护→官网公告查看。如遇问题可拨打客服电话95000或通过APP在线客服解决。',
      },
      {
        question: '如何查看交易记录？',
        answer:
          '登录「银盛通」APP → 首页「交易查询」→ 可导出 Excel，支持按日/按月筛选。所有交易记录清晰可查，方便财务管理对账。',
      },
    ],
  },
  {
    name: '费用与到账',
    icon: CurrencyYenIcon,
    faqs: [
      {
        question: '0.38% 费率是套路吗？',
        answer:
          '贷记卡 0.38% 永不+3 写入电子协议，调价须提前 30 天书面通知，否则差额双倍赔付，可下载央行牌照核验。费率透明，无隐藏费用。',
      },
      {
        question: '费率会偷偷涨吗？',
        answer:
          '系统费率写入终端固件，如上调需向银联报备并提前 30 天推送消息，用户可无条件停用。我们承诺费率稳定，保障商户权益。',
      },
      {
        question: '为何被扣 48 元？',
        answer:
          '为流量年卡费用，交易时自动抵扣，余额不足会提示充值，不充值不影响已刷卡到账。内置4G卡，前30天免费，之后每年仅需48元流量费。',
      },
    ],
  },
  {
    name: '代理/招商',
    icon: UserGroupIcon,
    faqs: [
      {
        question: '怎么做代理？需要交钱吗？',
        answer:
          '0 加盟费，1 台起拿总部直签；激活返现 299 元/台，分润万 12-万 16，后台 T+1 自动发放。提供完整培训支持，新手7天可出首台。',
      },
      {
        question: '分润什么时候发？',
        answer:
          '总部统一在每日上午 10:00 自动打款到您储蓄卡，节假日不休，流水可在后台实时查询。分润透明，系统自动结算，无需手动申请。',
      },
      {
        question: '可以发展下级吗？',
        answer:
          '支持无限下级，后台可开二级代理，分润差实时结算，二级激活您同样享受 30 元/台级差奖励。提供完整代理管理体系，助力业务拓展。',
      },
    ],
  },
  {
    name: '售后与投诉',
    icon: ShieldCheckIcon,
    faqs: [
      {
        question: '客服电话是多少？',
        answer:
          '银盛全国客服：95000（7×24），微信客服：「银盛通」APP-在线客服，平均响应 30 秒。专业客服团队随时为您解决问题。',
      },
      {
        question: '刷卡不到账投诉渠道？',
        answer:
          '① APP 内「异常报备」；② 95000 按 3 键；③ 银联投诉 95516；④ 央行金融消费权益保护热线 12363。多重投诉渠道，保障您的权益。',
      },
      {
        question: '机器坏了怎么办？',
        answer:
          '非人为损坏 12 个月内免费换新；人为损坏（摔/进水）补 59 元换新，旧机回收。全国联保，售后无忧，让您的收款更安心。',
      },
    ],
  },
  {
    name: '产品选择',
    icon: Cog6ToothIcon,
    faqs: [
      {
        question: '哪些卡可以刷？',
        answer:
          '支持境内银联贷记卡、借记卡、微信、支付宝、云闪付、Apple Pay、Huawei Pay、花呗。全渠道支付方式，满足各类收款需求。',
      },
      {
        question: '电签POS和手机POS有什么区别？',
        answer:
          '电签POS是实体设备，支持刷卡、插卡、NFC等多种支付方式；手机POS是软件，通过手机音频或蓝牙连接刷卡器。电签POS更稳定，手机POS更便携，可根据实际需求选择。',
      },
      {
        question: '对公账户/银行卡有要求吗？',
        answer:
          '结算卡只需Ⅰ类储蓄卡（工行、建行、招行等均可），无需对公账户，个人储蓄卡秒到。支持个人结算，方便小微商户和个体户使用。',
      },
    ],
  },
]

/**
 * FAQ组件 - 现代化的常见问题页面
 * 功能特性：
 * - 分类标签页导航
 * - 搜索功能
 * - 响应式设计
 * - 折叠展开动画
 * - 图标分类显示
 */
export function Faqs() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const currentCategoryFaqs = faqCategories[selectedCategory].faqs

  return (
    <div style={{ backgroundColor: '#f9faff' }}>
      <div className="mx-auto max-w-[1800px] px-3 py-24 sm:py-32 lg:px-4 lg:py-40">
        <div className="mx-auto max-w-full">
          {/* 页面标题和描述 */}
          <div className="text-left">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              常见问题
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              快速找到您需要的答案，如果您有其他问题，请随时联系我们的客服团队
            </p>
          </div>

          {/* 分类标签页 */}
          <div className="mt-16">
            <TabGroup
              selectedIndex={selectedCategory}
              onChange={setSelectedCategory}
            >
              <TabList className="flex max-w-full flex-wrap justify-center gap-2 sm:gap-4">
                {faqCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Tab
                      key={category.name}
                      className="group relative min-w-0 flex-1 overflow-hidden border border-gray-200 bg-white px-2 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none data-[selected]:bg-[#05f] data-[selected]:text-white sm:px-6"
                    >
                      <div className="mx-auto flex items-center justify-center">
                        <IconComponent
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="hidden truncate sm:ml-2 sm:inline">
                          {category.name}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 hidden h-0.5 group-data-[selected]:block"
                      />
                    </Tab>
                  )
                })}
              </TabList>

              <TabPanels className="mt-8">
                {faqCategories.map((category, categoryIndex) => {
                  const faqs =
                    categoryIndex === selectedCategory
                      ? currentCategoryFaqs
                      : category.faqs
                  return (
                    <TabPanel
                      key={category.name}
                      className="focus:outline-none"
                    >
                      {faqs.length === 0 ? (
                        <div className="py-12 text-center">
                          <div className="text-lg text-gray-400">
                            没有找到相关问题
                          </div>
                          <p className="mt-2 text-gray-500">
                            请尝试其他搜索词或浏览其他分类
                          </p>
                        </div>
                      ) : (
                        <dl className="space-y-6">
                          {faqs.map((faq, faqIndex) => (
                            <Disclosure
                              key={`${categoryIndex}-${faqIndex}`}
                              as="div"
                              className="border border-gray-200 bg-white"
                            >
                              <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between p-6 text-left hover:bg-gray-50 focus:outline-none">
                                  <span className="pr-6 text-base font-semibold text-black">
                                    {faq.question}
                                  </span>
                                  <span className="ml-6 flex h-7 flex-shrink-0 items-center">
                                    <PlusSmallIcon
                                      aria-hidden="true"
                                      className="h-6 w-6 transition-transform duration-200 group-data-[open]:hidden"
                                      style={{ color: '#05f' }}
                                    />
                                    <MinusSmallIcon
                                      aria-hidden="true"
                                      className="h-6 w-6 transition-transform duration-200 group-not-data-[open]:hidden"
                                      style={{ color: '#05f' }}
                                    />
                                  </span>
                                </DisclosureButton>
                              </dt>
                              <DisclosurePanel as="dd" className="px-6 pb-6">
                                <div className="border-t border-gray-100 pt-4">
                                  <p className="text-base leading-7 text-gray-700">
                                    {faq.answer}
                                  </p>
                                </div>
                              </DisclosurePanel>
                            </Disclosure>
                          ))}
                        </dl>
                      )}
                    </TabPanel>
                  )
                })}
              </TabPanels>
            </TabGroup>
          </div>

          {/* 联系支持 */}
          <div className="mt-16">
            <div className="border border-gray-200 bg-white p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="text-center lg:text-left">
                  <h3 className="mb-2 text-lg font-semibold text-black">
                    没有找到您要的答案？
                  </h3>
                  <p className="text-gray-700">
                    我们的技术支持团队随时为您提供帮助
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col justify-center gap-4 sm:flex-row lg:justify-end">
                  <button
                    className="inline-flex items-center border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:opacity-90 focus:outline-none"
                    style={{ backgroundColor: '#05f' }}
                  >
                    联系客服
                  </button>
                  <button className="inline-flex items-center border border-gray-300 bg-white px-6 py-3 text-base font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none">
                    提交工单
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
