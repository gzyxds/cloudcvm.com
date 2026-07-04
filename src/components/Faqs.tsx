'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ComputerDesktopIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CommandLineIcon,
  KeyIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Container } from './Container'

/* ─────────────────────── 类型定义 ─────────────────────── */

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  faqs: FAQ[]
}

/* ─────────────────────── 数据 ─────────────────────── */

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
          'CVM 全面支持 IPv6。您可以在创建实例时为 VPC 开启 IPv6 CIDR，并为实例分配 IPv6 地址。IPv6 与 IPv4 双栈共存，不影响原有业务。支持 IPv6 公网带宽配置和安全组规则，满足 IPv6 合规和下一代互联网接入需求。',
      },
      {
        question: '弹性公网 IP 和普通公网 IP 有什么区别？',
        answer:
          '主要区别：1）弹性公网 IP（EIP）是独立的公网 IP 资源，可以随时解绑并重新绑定到不同实例，适合需要 IP 不变的高可用场景；2）普通公网 IP 与实例生命周期绑定，释放实例即释放 IP。如果您的业务需要 IP 固定不变或在实例间迁移 IP，建议使用 EIP。EIP 未绑定时会产生少量闲置费用。',
      },
      {
        question: '什么是 VPC 私有网络？如何规划子网？',
        answer:
          'VPC（Virtual Private Cloud）是您在优刻云上的逻辑隔离网络空间：1）可自定义 IP 地址范围（CIDR），建议使用 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16 等私有地址段；2）划分多个子网，建议按业务层级（Web 层、应用层、数据层）分别放置在不同子网；3）通过路由表和网络 ACL 控制子网间流量。合理的子网规划有助于安全隔离和故障域控制。',
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
          'CVM 支持多种存储方案：1）云硬盘（CBS）：提供持久化的块存储，支持 SSD 和 HDD；2）本地盘：提供高 IOPS 的临时存储；3）对象存储（COS）：适合大规模非结构化数据；4）文件存储（CFS）：支持共享文件系统。您可以根据业务特点选择合适的存储方案。',
      },
      {
        question: '云硬盘支持扩容吗？',
        answer:
          '支持在线扩容，无需重启实例：1）在控制台选择云硬盘并执行扩容操作；2）扩容后需在操作系统内扩展文件系统（Linux 用 resize2fs/xfs_growfs，Windows 用磁盘管理）；3）支持扩容到最大 32TB。扩容过程不影响现有数据和业务运行。建议在扩容前做好数据备份，确保操作安全。',
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
          '通过访问管理（CAM）实现精细化权限控制：1）创建子账号，为每个团队成员分配独立账号；2）使用用户组统一管理相同角色的权限；3）通过策略（Policy）定义具体的资源访问权限，支持 JSON 格式自定义策略；4）遵循最小权限原则，定期审计账号权限。建议为主账号启用 MFA 多因素认证，增强安全性。',
      },
      {
        question: '主账号和子账号有什么区别？',
        answer:
          '主要区别：1）主账号：注册时创建，拥有所有产品和资源的完全访问权限，负责账号归属和计费；2）子账号：由主账号在 CAM 中创建，权限由主账号通过策略控制，无独立的计费能力。日常运维和开发工作建议使用子账号，避免主账号密钥泄露造成安全风险。',
      },
      {
        question: '多因素认证（MFA）如何开启？',
        answer:
          '开启步骤：1）在控制台"账号安全"页面选择开启 MFA；2）使用 Google Authenticator、Microsoft Authenticator 或优刻云小程序扫描二维码绑定虚拟 MFA 设备；3）绑定后，登录时除密码外需输入 6 位动态验证码。强烈建议为主账号和有敏感权限的子账号开启 MFA，大幅降低账号被盗风险。',
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

/* ─────────────────────── JSON-LD ─────────────────────── */

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
    })),
  ),
})

/* ─────────────────────── 主组件 ─────────────────────── */

/**
 * Faqs 组件 - 常见问题区块
 *
 * 顶部分类标签 + 居中手风琴列表
 */
export function Faqs() {
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const currentCategory = faqCategories[activeTab]

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      <Container>
        {/* ─────── 标题区 ─────── */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-md bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-600/20">
            常见问题
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            快速找到您需要的答案
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            如果还有其他问题，请随时联系我们的客服团队
          </p>
        </div>

        {/* ─────── 分类标签 ─────── */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {faqCategories.map((category, idx) => {
              const Icon = category.icon
              const isActive = activeTab === idx
              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveTab(idx)
                    setOpenIndex(null)
                  }}
                  className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ─────── FAQ 手风琴列表 ─────── */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10"
        >
          {currentCategory && (
            <div className="space-y-3">
              {currentCategory.faqs.map((faq, fi) => {
                const isOpen = openIndex === fi
                return (
                  <div
                    key={fi}
                    className={`rounded-md border border-gray-200 transition-all duration-300 ${
                      !isOpen ? 'hover:border-gray-300' : ''
                    }`}
                  >
                    <button
                      onClick={() => handleToggle(fi)}
                      className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="flex flex-1 items-center gap-3">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                            isOpen
                              ? 'bg-brand-500 text-white'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {fi + 1}
                        </span>
                        <span className="text-sm font-medium text-gray-900 sm:text-base">
                          {faq.question}
                        </span>
                      </span>
                      <ChevronDownIcon
                        className={`size-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-500' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-100 px-5 py-4 pl-14 sm:px-6 sm:pl-14">
                            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          )}
        </motion.div>

        {/* ─────── 底部联系卡片 ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-xl bg-brand-600">
            {/* 视频背景（移动端隐藏） */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover sm:block"
            >
              <source src="https://qcloudimg.tencent-cloud.cn/raw/29ff9f1992ee646ba2e623007beb3e97.mp4" type="video/mp4" />
            </video>
            {/* 暗色叠加层 */}
            <div className="pointer-events-none absolute inset-0 hidden bg-brand-600/60 sm:block" />
            <div className="relative flex flex-col justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center lg:px-10 lg:py-10">
              <div className="flex-1">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                  联系我们
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  没有找到您要的答案？
                </h3>
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  我们的技术支持团队随时为您提供帮助
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-medium text-brand-600 shadow-sm transition-colors hover:bg-white/90"
                >
                  联系客服
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  提交工单
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Faqs
