'use client'

import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {
  ComputerDesktopIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CommandLineIcon,
  KeyIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  faqs: FAQ[]
}

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
      {
        question: 'CVM 实例有哪几种类型？',
        answer:
          'CVM 提供多种实例类型以满足不同业务场景：1）标准型：均衡的 CPU、内存和网络资源，适合大多数通用应用；2）计算型：高 CPU 配比，适合批处理、科学计算等 CPU 密集型场景；3）内存型：大内存配比，适合数据库、缓存等高内存需求场景；4）GPU 型：配备高性能 GPU，适合深度学习、图形渲染等场景；5）高 IO 型：高随机 IOPS，适合高吞吐低延迟的 I/O 密集型应用。',
      },
      {
        question: '如何根据自己的业务选择适配的实例规格？',
        answer:
          '选择实例规格建议从以下维度评估：1）明确业务类型（Web 服务、数据库、计算密集型等）；2）预估峰值资源需求（CPU 核数、内存大小）；3）考虑网络带宽要求和存储性能需求；4）参考同类型业务的官方推荐规格。您可以先从较低规格开始运行压测，根据监控数据弹性调整。优刻云控制台还提供实例规格推荐工具，输入业务特征即可获得推荐配置。',
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
      {
        question: '账户欠费会导致实例被立即删除吗？',
        answer:
          '不会立即删除。按量计费实例在欠费后会进入保留期，期间实例停止服务但数据保留，补缴欠费后可恢复。若保留期内未充值，实例将被自动释放且数据不可恢复。包年包月实例到期后也有一段宽限期，建议提前设置续费提醒或开启自动续费，避免业务中断。详细的欠费策略可在费用中心查看。',
      },
      {
        question: '如何设置费用预警和预算控制？',
        answer:
          '您可以在控制台"费用中心-预算管理"中设置：1）创建月度/季度费用预算，设定预估消费上限；2）配置多级预警阈值（如 50%、80%、100%），当实际支出达到阈值时自动发送通知；3）支持按产品、按项目等维度分别设置预算；4）历史预算执行情况可视化报表，帮助您持续优化成本。',
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
      {
        question: '什么是私有网络（VPC）？它有什么优势？',
        answer:
          '私有网络（Virtual Private Cloud）是您在优刻云上的逻辑隔离网络空间。主要优势：1）自定义 IP 地址段、子网划分和路由策略，完全掌控网络拓扑；2）通过安全组和网络 ACL 实现精细流量控制；3）支持 VPN 和专线接入，构建混合云架构；4）同一 VPC 内实例默认内网互通，跨 VPC 可通过对等连接互通。VPC 免费使用，建议生产环境都在 VPC 内部署资源。',
      },
      {
        question: '如何为实例绑定和解绑弹性公网 IP？',
        answer:
          '弹性公网 IP（EIP）是可以独立申请和持有的公网 IP 地址：1）在控制台"弹性公网 IP"页面申请新的 EIP；2）选择目标 CVM 实例进行绑定，一个实例可绑定多个 EIP；3）解绑后 EIP 可释放或重新绑定到其他实例，实现 IP 资源灵活调配；4）未绑定实例的 EIP 会按小时收取闲置费，建议及时释放不使用的 EIP。',
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
      {
        question: '云硬盘和本地盘有什么区别？如何选择？',
        answer:
          '主要区别：1）云硬盘（CBS）：数据持久化存储，支持在线扩容、快照备份、卸载后重新挂载到其他实例，适合需要高可靠性和灵活性的场景；2）本地盘：与实例物理绑定，提供极高 IOPS 和超低延迟，但实例销毁后数据会丢失，适合临时数据、缓存等场景。生产环境核心数据建议使用云硬盘，高频读写缓存层可使用本地盘。',
      },
      {
        question: '快照是如何收费的？',
        answer:
          '快照按实际使用的存储空间计费：1）首次快照为全量快照，后续为增量快照（仅保存变化部分），节省存储成本；2）按小时计费，按量付费，随时可删除不再需要的快照以降低成本；3）各地域价格略有不同，可在控制台定价页面查看。建议根据数据重要性设置合理的快照保留策略和自动清理规则。',
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
      {
        question: '如何为 Linux 实例配置 SSH 密钥登录？',
        answer:
          '配置步骤：1）在本地生成密钥对（使用 ssh-keygen 命令）；2）在控制台"密钥管理"页面导入公钥；3）创建实例时选择该密钥对，或为已有实例绑定密钥；4）使用私钥通过 SSH 连接实例。密钥登录比密码更安全，建议禁用密码登录，仅保留密钥认证。注意妥善保管私钥文件，丢失后将无法恢复。',
      },
      {
        question: '优刻云提供哪些 DDoS 防护能力？',
        answer:
          '优刻云提供分层级的 DDoS 防护：1）基础防护：所有 CVM 实例免费获得 2Gbps 的 DDoS 基础防护，自动检测和清洗常见攻击流量；2）高防 IP：针对高流量攻击，提供 TB 级防护能力，支持 TCP/UDP/HTTP 等多种协议；3）应用层防护：结合 WAF 保护 Web 应用免受 CC 攻击。建议面向公网的服务至少开启基础防护，核心业务可升级高防。',
      },
    ],
  },
  {
    name: '性能与监控',
    icon: ChartBarIcon,
    faqs: [
      {
        question: '如何监控 CVM 实例的运行状态？',
        answer:
          '优刻云提供云监控（CloudMonitor）服务，可实时监控实例的 CPU、内存、磁盘 I/O、网络流量等指标。您可以在控制台自定义监控面板，设置告警规则，当指标异常时通过短信、邮件等方式接收通知。同时支持 API 接口获取监控数据，方便集成到自有运维系统。',
      },
      {
        question: '云监控支持哪些告警方式？',
        answer:
          '云监控支持多种告警通知方式：1）短信通知；2）邮件通知；3）站内信；4）企业微信/钉钉/飞书等办公应用通知（通过 Webhook 对接）；5）HTTP 回调接口。您可以根据不同告警级别配置不同的通知渠道，确保运维团队能及时响应。',
      },
      {
        question: '如何优化 CVM 实例的性能？',
        answer:
          '优化 CVM 性能的关键措施包括：1）选择合适的实例规格，根据业务负载调整 CPU 和内存配比；2）使用 SSD 云硬盘提升磁盘性能；3）配置负载均衡分散流量；4）开启 CDN 加速静态资源；5）优化应用代码和数据库查询；6）合理配置缓存策略；7）使用弹性伸缩自动调整资源规模。',
      },
      {
        question: '什么是弹性伸缩（Auto Scaling）？如何配置？',
        answer:
          '弹性伸缩（Auto Scaling）能根据业务需求和策略自动调整 CVM 实例数量：1）创建伸缩组，定义最小、最大和期望实例数；2）配置伸缩策略，支持基于 CPU/内存使用率、定时任务或自定义指标触发；3）设置冷却时间避免频繁伸缩。弹性伸缩本身免费，只需为创建的实例付费。它特别适合有明显波峰波谷的业务（如电商大促、游戏高峰期），显著节省成本。',
      },
      {
        question: '如何诊断实例的性能瓶颈？',
        answer:
          '诊断流程：1）在云监控平台查看 CPU、内存、磁盘 I/O、网络带宽的实时和历史趋势图，定位瓶颈指标；2）使用实例内部的 top、iostat、netstat 等命令深入分析；3）通过性能分析工具（如 perf、火焰图）定位应用层热点；4）结合云监控的告警历史判断是否为突发问题。定位瓶颈后，可垂直扩容（升级实例规格）或水平扩容（增加实例数量）来解决。',
      },
    ],
  },
  {
    name: 'API与开发工具',
    icon: CommandLineIcon,
    faqs: [
      {
        question: '优刻云提供哪些 API 和管理工具？',
        answer:
          '优刻云提供完整的开发工具链：1）OpenAPI — 覆盖全部云产品，支持 RESTful 调用；2）CLI 命令行工具 — 支持批量操作和脚本自动化；3）多语言 SDK（Python、Java、Go、Node.js、.NET 等）；4）Terraform/Ansible 等 IaC 工具集成；5）CloudShell 在线终端。所有工具均提供详细文档和示例代码。',
      },
      {
        question: '如何使用 API 管理云资源？',
        answer:
          '使用 API 管理云资源的步骤：1）在控制台创建 API 密钥（AccessKey）；2）根据产品文档了解对应的 API 接口和参数；3）使用 SDK 或直接调用 HTTP API 发送签名请求；4）处理 API 返回结果。建议使用 RAM 子账号的密钥，并遵循最小权限原则，定期轮换密钥。',
      },
      {
        question: '是否支持基础设施即代码（IaC）？',
        answer:
          '完全支持。优刻云提供 Terraform Provider 和 Ansible Collection，支持声明式管理云资源。您可以将基础设施配置版本化管理，实现一键部署、环境复制和 CI/CD 集成。同时提供 CloudFormation 模板导入工具，方便从其他云平台迁移。',
      },
      {
        question: 'API 调用有频率限制吗？如何应对？',
        answer:
          '有频率限制。优刻云各 API 接口设有默认配额（通常按每秒请求数限制），以防止滥用和保证服务质量。建议：1）查看 API 文档了解各接口的配额限制；2）在代码中实现重试机制，对限流错误使用指数退避策略；3）使用批量操作接口减少请求次数；4）如业务需求超出默认配额，可提交工单申请提升。SDK 内置了重试和限流处理逻辑，建议优先使用。',
      },
      {
        question: '如何在本地开发环境中使用 SDK 调用云 API？',
        answer:
          '基本流程：1）在控制台创建 AccessKey（建议使用 RAM 子账号的密钥）；2）通过环境变量或配置文件设置 SecretId 和 SecretKey（切勿硬编码在代码中）；3）安装对应语言的 SDK（如 pip install tencentcloud-sdk-python）；4）参考 SDK 示例代码创建 Client 并调用接口。建议在本地使用沙箱环境或独立的测试账号，避免误操作影响生产资源。',
      },
    ],
  },
  {
    name: '账号与权限',
    icon: KeyIcon,
    faqs: [
      {
        question: '如何管理团队成员对不同资源的访问权限？',
        answer:
          '通过访问管理（CAM）实现精细化权限控制：1）创建子账号，为每个团队成员分配独立账号；2）使用用户组统一管理相同角色的权限；3）通过策略（Policy）定义具体的资源访问权限，支持 JSON 格式自定义策略；4）支持基于标签的条件访问控制。遵循最小权限原则，定期审计用户权限。',
      },
      {
        question: '如何启用多因素认证（MFA）？',
        answer:
          '在控制台"账号安全"页面即可启用 MFA：1）安装虚拟 MFA 应用（如 Google Authenticator）；2）扫描二维码绑定账号；3）输入两次动态验证码完成验证。启用后登录和敏感操作均需 MFA 验证。强烈建议为主账号和所有子账号启用 MFA，显著提升账户安全性。',
      },
      {
        question: '忘记密码或密钥丢失如何处理？',
        answer:
          '1）密码找回：在登录页面点击"忘记密码"，通过绑定的手机号或邮箱重置；2）API 密钥丢失：登录控制台创建新的 AccessKey，旧的密钥会自动失效；3）实例密钥对丢失：Linux 实例可使用 VNC 登录救援模式重置；Windows 实例可提交工单联系技术支持。建议妥善保管密钥文件，避免泄露。',
      },
      {
        question: '子账号和协作者有什么区别？',
        answer:
          '主要区别：1）子账号：由主账号在 CAM 中直接创建，完全属于主账号管理，无独立计费，适合企业内部员工；2）协作者：是已注册的优刻云独立账号，被主账号邀请加入资源协作，该账号保留自己的计费方式和已有资源。子账号适合组织内部管控，协作者适合与外部合作伙伴协作。两者均可通过策略精细化控制权限。',
      },
      {
        question: '如何创建自定义访问策略并绑定到用户？',
        answer:
          '创建自定义策略步骤：1）在 CAM 控制台"策略管理"页面点击新建自定义策略；2）选择"按策略生成器创建"或"按策略语法创建"（JSON 格式）；3）定义 Effect（允许/拒绝）、Action（操作）、Resource（资源范围）、Condition（条件）；4）保存后将策略关联到子账号或用户组。建议从系统预设策略复制后修改，降低配置难度。策略变更后实时生效，无需重启。',
      },
    ],
  },
]

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
})

export function Faqs() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* 标题区 */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            常见问题
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            快速找到您需要的答案，如果您有其他问题，请随时联系我们的客服团队
          </p>
        </div>

        {/* 左右布局 */}
        <div className="mt-10 sm:mt-12 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row min-h-[500px] overflow-hidden">
          {/* 左侧分类导航 */}
          <nav className="w-full lg:w-[220px] shrink-0 bg-gray-50 dark:bg-gray-800/50 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto lg:overflow-y-auto no-scrollbar">
              <div className="flex lg:flex-col p-0 min-w-max lg:min-w-0">
                {faqCategories.map((category, idx) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(idx)}
                    className={clsx(
                      'flex items-center gap-2.5 px-4 py-3 text-left transition-colors duration-150 outline-none border-r-2 lg:border-r-0 lg:border-l-[3px] border-transparent whitespace-nowrap',
                      selectedCategory === idx
                        ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 border-blue-600 dark:border-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-700/40'
                    )}
                  >
                    <category.icon className="h-5 w-5 shrink-0" />
                    <span className="text-base">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* 右侧手风琴 */}
          <div className="flex-1 min-w-0 p-5 lg:p-6">
            {faqCategories[selectedCategory] && (
              <dl className="space-y-2">
                {faqCategories[selectedCategory].faqs.map((faq, fi) => (
                  <Disclosure key={fi} as="div">
                    <dt>
                      <DisclosureButton className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left bg-gray-50/70 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-md hover:border-gray-200 dark:hover:border-gray-600 transition-colors outline-none data-[open]:rounded-b-none data-[open]:border-b-transparent data-[open]:bg-white dark:data-[open]:bg-gray-800 data-[open]:border-gray-200 dark:data-[open]:border-gray-700">
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors">
                          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon className="h-5 w-5 hidden group-data-[open]:block" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="px-4 pb-4 bg-white dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-md -mt-px">
                      <div className="pt-3">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            )}
          </div>
        </div>

        {/* 底部联系卡片 */}
        <div className="mt-12 sm:mt-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-6 py-8 sm:px-8 sm:py-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            没有找到您要的答案？
          </h3>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6">
            我们的技术支持团队随时为您提供帮助
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm">
              联系客服
            </button>
            <button className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
              提交工单
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
