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
  ComputerDesktopIcon,
  CreditCardIcon,
  TruckIcon,
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
 * 包含六个主要分类：一般常见问题、计费、网络、存储、地域和可用区、安全性、镜像
 */
const faqCategories: FAQCategory[] = [
  {
    name: '一般常见问题',
    icon: ComputerDesktopIcon,
    faqs: [
      {
        question: '什么是 CVM 实例？',
        answer:
          'CVM（Cloud Virtual Machine）是优刻云提供的可扩展的虚拟计算服务。您可以使用 CVM 来构建和托管软件系统。CVM 提供多种实例类型，优化以适合不同的使用案例。实例类型包括不同的 CPU、内存、存储和网络容量组合，让您能够灵活地为应用程序选择适当的资源组合。',
      },
      {
        question: '如何开始使用 CVM？',
        answer:
          '开始使用 CVM 非常简单。首先注册优刻云账户，然后登录控制台，选择 CVM 产品，点击"立即购买"按钮。您可以选择适合的实例规格、操作系统、网络配置等。创建完成后，您就可以通过 SSH 或远程桌面连接到您的实例。我们还提供详细的快速入门指南帮助您完成首次配置。',
      },
      {
        question: '支持哪些操作系统实例？',
        answer:
          'CVM 支持多种操作系统，包括：Linux 发行版（如 CentOS、Ubuntu、Debian、SUSE Linux）、Windows Server 各个版本、以及优刻云自研的 TencentOS Server。您可以根据应用需求选择最适合的操作系统。所有镜像都经过安全加固和性能优化，确保稳定可靠的运行环境。',
      },
    ],
  },
  {
    name: '计费',
    icon: CreditCardIcon,
    faqs: [
      {
        question: 'CVM 的计费方式有哪些？',
        answer:
          'CVM 提供灵活的计费方式：1）按量计费：按实际使用时长计费，适合短期或不规律使用；2）包年包月：预付费模式，适合长期稳定使用，价格更优惠；3）竞价实例：以较低价格使用空余计算资源，适合容错性强的应用；4）预留实例：通过预付费获得实例使用折扣。您可以根据业务特点选择最经济的计费方式。',
      },
      {
        question: '如何查看和管理费用？',
        answer:
          '您可以通过优刻云控制台的"费用中心"查看详细的费用信息，包括：实时费用、历史账单、费用趋势分析等。系统支持设置费用预警，当费用达到设定阈值时会及时通知您。同时提供费用分析工具，帮助您了解各项服务的费用构成，优化成本结构。',
      },
      {
        question: '可以申请费用减免吗？',
        answer:
          '优刻云为新用户提供丰富的优惠活动，包括新用户代金券、首购优惠等。对于教育用户、开源项目、初创企业等，我们也有相应的扶持计划。具体的优惠政策和申请流程，请查看官网活动页面或联系客服咨询。我们致力于为不同类型的用户提供合适的优惠支持。',
      },
    ],
  },
  {
    name: '网络',
    icon: TruckIcon,
    faqs: [
      {
        question: 'CVM 的网络性能如何？',
        answer:
          'CVM 提供高性能的网络连接，内网带宽最高可达25Gbps，公网带宽支持1Mbps到200Mbps的灵活配置。采用25G网卡和智能网卡技术，确保低延迟、高吞吐的网络性能。同时支持弹性公网IP、负载均衡、VPC等网络产品，构建安全可靠的网络架构。',
      },
      {
        question: '如何配置安全组？',
        answer:
          '安全组是实例级别的防火墙，用于控制进出实例的网络流量。配置步骤：1）在控制台创建安全组；2）添加入站和出站规则，指定协议、端口、源IP等；3）将安全组关联到CVM实例。建议遵循最小权限原则，只开放必要的端口和IP访问。系统提供常用的安全组模板，简化配置过程。',
      },
      {
        question: '支持IPv6吗？',
        answer:
          '是的，CVM 全面支持 IPv6。您可以为实例分配 IPv6 地址，实现双栈网络访问。IPv6 支持包括：IPv6 公网地址分配、IPv6 安全组配置、IPv6 负载均衡等。这有助于您的应用适应未来网络发展趋势，同时解决 IPv4 地址不足的问题。',
      },
    ],
  },
  {
    name: '存储',
    icon: ShieldCheckIcon,
    faqs: [
      {
        question: 'CVM 支持哪些存储类型？',
        answer:
          'CVM 支持多种存储类型：1）云硬盘CBS：包括高性能云硬盘、SSD云硬盘、增强型SSD云硬盘，提供不同的性能等级；2）本地存储：提供高IOPS和低延迟；3）对象存储COS：适合海量数据存储；4）文件存储CFS：提供共享文件系统。您可以根据应用的性能和容量需求选择合适的存储方案。',
      },
      {
        question: '如何扩容云硬盘？',
        answer:
          '云硬盘支持在线扩容，无需停机。操作步骤：1）在控制台选择需要扩容的云硬盘；2）点击"扩容"并设置新的容量大小；3）在实例内部执行文件系统扩容命令。扩容过程中不会影响数据安全和业务运行。建议在扩容前做好数据备份，确保操作安全。',
      },
      {
        question: '数据备份策略是什么？',
        answer:
          '我们提供多层次的数据保护：1）快照备份：支持定期自动快照和手动快照；2）跨地域备份：将数据备份到不同地域，提高容灾能力；3）增量备份：只备份变化的数据，节省存储空间；4）备份恢复：支持快速恢复到任意时间点。建议制定合理的备份策略，确保数据安全。',
      },
    ],
  },
  {
    name: '地域和可用区',
    icon: UserGroupIcon,
    faqs: [
      {
        question: '如何选择合适的地域？',
        answer:
          '选择地域时需要考虑：1）用户分布：选择距离目标用户最近的地域，降低网络延迟；2）合规要求：某些行业可能要求数据存储在特定地域；3）服务可用性：不同地域提供的云服务可能有差异；4）成本考虑：不同地域的价格可能不同。建议优先考虑用户体验和合规要求。',
      },
      {
        question: '可用区之间如何通信？',
        answer:
          '同一地域内的不同可用区通过高速内网连接，延迟通常在1-2ms以内。可用区间通信免费，带宽充足。您可以将应用部署在多个可用区，实现高可用架构。跨可用区的负载均衡、数据库主从复制等都能获得良好的网络性能支持。',
      },
      {
        question: '支持跨地域部署吗？',
        answer:
          '支持跨地域部署。您可以在多个地域创建实例，构建全球化的应用架构。跨地域部署的优势包括：1）就近服务用户，提升访问速度；2）数据容灾备份；3）负载分担；4）合规要求满足。我们提供专线连接、VPN等产品支持跨地域网络互通。',
      },
    ],
  },
  {
    name: '安全性',
    icon: Cog6ToothIcon,
    faqs: [
      {
        question: 'CVM 的安全防护措施有哪些？',
        answer:
          'CVM 提供全方位的安全防护：1）基础设施安全：物理安全、网络隔离、硬件安全；2）主机安全：安全组、密钥管理、访问控制；3）数据安全：加密存储、传输加密、备份保护；4）监控告警：实时监控、异常检测、安全事件响应。同时提供安全加固建议和最佳实践指导。',
      },
      {
        question: '如何保护实例免受攻击？',
        answer:
          '保护实例安全的建议：1）及时更新系统补丁；2）配置严格的安全组规则；3）使用强密码或密钥认证；4）安装防病毒软件；5）定期备份重要数据；6）监控异常登录和网络活动；7）使用优刻云安全产品如主机安全、DDoS防护等。建议采用纵深防御策略，多层保护。',
      },
      {
        question: '支持合规认证吗？',
        answer:
          '优刻云已通过多项国际和国内合规认证，包括：ISO 27001、SOC 1/2/3、PCI DSS、等保三级、可信云等。CVM 服务符合相关合规要求，可以满足金融、医疗、政务等行业的合规需求。我们持续投入合规建设，为用户提供可信赖的云计算服务。',
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
              <TabList className="flex max-w-full flex-wrap justify-center gap-3 sm:gap-6">
                {faqCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Tab
                      key={category.name}
                      className="group relative min-w-0 flex-1 overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[4px_4px_12px_0_rgba(55,99,170,0.1)] px-2 py-4 text-center text-sm font-medium transition-all duration-300 hover:shadow-[4px_4px_16px_0_rgba(55,99,170,0.15)] hover:-translate-y-0.5 focus:z-10 focus:outline-none data-[selected]:bg-gradient-to-b data-[selected]:from-blue-50 data-[selected]:to-blue-100 data-[selected]:text-blue-600 data-[selected]:shadow-[4px_4px_16px_0_rgba(55,99,170,0.2)] sm:px-6"
                    >
                      <div className="mx-auto flex items-center justify-center">
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 group-data-[selected]:bg-blue-100">
                          <IconComponent
                            className="h-4 w-4 flex-shrink-0 text-gray-600 group-data-[selected]:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>
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
                              className="group transform overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
                            >
                              <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between p-6 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-white focus:outline-none transition-all duration-200">
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
            <div className="transform overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] p-8 transition-all duration-300 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]">
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
                    className="inline-flex items-center border border-transparent px-6 py-3 text-base font-medium text-white shadow-[4px_4px_12px_0_rgba(55,99,170,0.2)] transition-all duration-200 hover:opacity-90 hover:shadow-[4px_4px_16px_0_rgba(55,99,170,0.3)] hover:-translate-y-0.5 focus:outline-none rounded-md"
                    style={{ backgroundColor: '#05f' }}
                  >
                    联系客服
                  </button>
                  <button className="inline-flex items-center border-2 border-gray-200 bg-gradient-to-b from-white to-gray-50 px-6 py-3 text-base font-medium text-black shadow-[4px_4px_12px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:shadow-[4px_4px_16px_0_rgba(55,99,170,0.15)] hover:-translate-y-0.5 focus:outline-none rounded-md">
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
