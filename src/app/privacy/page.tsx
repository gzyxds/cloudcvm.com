'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const sections = [
  {
    id: 'intro',
    title: '引言',
    content: `优刻云计算（以下简称"我们"或"CloudCVM"）非常重视用户的隐私和个人信息保护。本《隐私政策》旨在向您说明，在您访问、浏览或使用 CloudCVM 网站（cloudcvm.com，以下简称"本网站"）及相关服务时，我们如何收集、使用、存储、共享、转让、公开披露、保护您的个人信息，以及您所享有的相关权利。

请您在访问本网站或使用我们的服务前，仔细阅读并充分理解本政策。一旦您开始使用本网站或我们的服务，即视为您已同意本政策的全部内容。如您不同意本政策的任何内容，请立即停止使用。`,
  },
  {
    id: 'scope',
    title: '适用范围',
    content: `本政策适用于 CloudCVM 通过本网站、控制台、小程序、客户端及相关 API 接口向您提供的所有服务。需要特别说明的是：

1. CloudCVM 主要作为云计算与人工智能服务的信息展示、技术对接与接口调整平台。我们本身不直接生产、销售或运营云服务器、计算节点、网络带宽等底层基础设施。
2. 当您通过本网站跳转至第三方云服务商（包括但不限于腾讯云、阿里云、华为云等合作伙伴）或第三方支付、实名认证平台时，相关个人信息的处理将适用该第三方的隐私政策，建议您仔细阅读。`,
  },
  {
    id: 'collection',
    title: '我们收集的信息',
    content: `我们仅会出于合法、正当、必要的原则收集您的个人信息，主要包括以下类型：

**1. 您主动提供的信息**
- 账户注册信息：手机号、电子邮箱、登录密码、用户名等；
- 实名认证信息：姓名、身份证号、企业名称、统一社会信用代码、营业执照等（仅在需要实名认证或开具发票时收集）；
- 联系信息：地址、联系电话、QQ、微信等；
- 您通过工单、客服、反馈表单等渠道主动提交的信息。

**2. 我们在您使用服务过程中收集的信息**
- 设备与日志信息：IP 地址、浏览器类型、操作系统、访问时间、访问页面、点击记录、停留时长等；
- 交易信息：订单号、购买产品、支付状态、金额、交易时间等；
- API 调用信息：当您通过我们对接的 API 接口使用第三方云服务时，我们可能会记录接口调用日志，以便进行计费、故障排查和服务优化。

**3. 来自第三方的信息**
- 当您使用第三方账号（如微信扫码）登录时，我们会在获得您授权的情况下，从第三方获取您的公开身份信息；
- 为完成支付、实名认证或风控核验，我们可能会从支付机构、身份验证服务商处获取必要的验证结果。`,
  },
  {
    id: 'usage',
    title: '信息的使用目的',
    content: `我们将收集的信息用于以下目的：

1. 为您注册、登录、管理账户，并提供本网站的信息展示与技术服务；
2. 根据您的需求，通过 API 接口为您对接、配置或调整第三方云计算、AI 算力等服务；
3. 处理订单、完成计费、开具发票及提供售后服务；
4. 进行实名认证、安全风控、反欺诈及合规审查；
5. 向您发送服务通知、订单状态、系统公告及营销活动信息（您可随时退订营销信息）；
6. 优化网站性能、改进用户体验、进行数据分析及服务质量提升；
7. 履行法律法规规定的义务，配合监管机关、司法机关的合法要求。`,
  },
  {
    id: 'sharing',
    title: '信息的共享与披露',
    content: `我们不会将您的个人信息出售给任何第三方，但可能在以下情形中与第三方共享或披露：

**1. 与第三方服务提供商共享**
为向您提供完整的云服务体验，我们可能需要将必要的订单信息、联系方式、实名信息等与底层云服务商、支付机构、身份认证机构、物流/发票服务商等共享。此类共享仅限于实现服务所必需的最小范围。

**2. 与关联公司共享**
在符合法律法规的前提下，我们可能会与关联公司共享必要的个人信息，以便统一为您提供客户服务、技术支持和账户管理。

**3. 法律法规要求的披露**
在法律法规、行政命令、司法判决或政府主管部门要求的情况下，我们可能会披露您的个人信息。

**4. 保护合法权益**
为维护 CloudCVM、用户或公众的合法权益（如防止欺诈、保护网络安全），我们可能会在必要范围内披露相关信息。`,
  },
  {
    id: 'storage',
    title: '信息的存储与保护',
    content: `1. 我们原则上将在中华人民共和国境内存储您的个人信息。如因业务需要向境外传输，我们将事先征得您的单独同意，并遵守相关法律法规的要求。
2. 我们采用符合业界标准的安全防护措施，包括数据加密、访问控制、防火墙、入侵检测等，以防止您的个人信息遭到未经授权的访问、泄露、篡改或丢失。
3. 我们仅会在实现本政策所述目的所必需的期限内保留您的个人信息，超出保留期限后，我们会对您的个人信息进行删除或匿名化处理，法律法规另有规定的除外。`,
  },
  {
    id: 'cookies',
    title: 'Cookie 与同类技术',
    content: `为提升您的访问体验，本网站可能会使用 Cookie 和同类技术（如 LocalStorage、SessionStorage）来：

1. 记录您的登录状态，避免您重复输入账号密码；
2. 记住您的偏好设置，如语言、主题等；
3. 分析网站流量和用户行为，以优化产品和服务。

您可以根据浏览器的设置选择接受、拒绝或删除 Cookie。但请注意，禁用 Cookie 可能会影响您正常使用本网站的某些功能。`,
  },
  {
    id: 'rights',
    title: '您的权利',
    content: `根据相关法律法规，您对个人信息享有以下权利：

1. **查阅、复制权**：您有权查阅、复制我们持有的您的个人信息；
2. **更正、补充权**：如您发现个人信息有误或不完整，有权要求我们更正或补充；
3. **删除权**：在法律法规规定的情形下，您有权要求我们删除您的个人信息；
4. **撤回同意权**：您有权撤回此前对我们处理个人信息的同意，但撤回同意不影响撤回前基于同意已进行的处理活动的效力；
5. **限制处理权**：在特定情形下，您有权要求我们限制对您个人信息的处理；
6. **可携带权**：在符合法律法规要求的情况下，您有权要求我们将您的个人信息转移至您指定的处理者；
7. **投诉权**：如您认为我们对您个人信息的处理侵犯了您的合法权益，您有权向网信、市场监管等监管部门投诉或举报。

您可以通过本网站「联系我们」页面或发送邮件至 support@cloudcvm.com 行使上述权利。`,
  },
  {
    id: 'minors',
    title: '未成年人保护',
    content: `本网站的服务主要面向成年用户。我们不满 14 周岁的未成年人提供服务，也不会主动收集未成年人的个人信息。如果我们发现自己在未事先获得可证实的父母或监护人同意的情况下收集了未成年人的个人信息，将会尽快删除相关数据。`,
  },
  {
    id: 'updates',
    title: '政策更新',
    content: `我们可能会根据法律法规的变化、业务调整或技术更新不时修订本隐私政策。修订后的政策将在本页面公布，并注明最近更新日期。如修订内容对您权益有重大影响，我们将通过网站公告、邮件或其他适当方式提醒您。

建议您定期访问本页面，以了解最新的隐私政策内容。`,
  },
  {
    id: 'contact',
    title: '联系我们',
    content: `如您对本隐私政策有任何疑问、意见或建议，或您认为您的个人信息权益受到侵害，请通过以下方式与我们联系：

- 客服邮箱：support@cloudcvm.com
- 联系电话：0595-22113999
- 在线客服：工作日 9:00 - 18:00

我们将在收到您的反馈后尽快予以回复。`,
  },
]

function SectionNav() {
  return (
    <nav className="sticky top-14 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="-mb-px flex justify-start overflow-x-auto scrollbar-hide">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 border-b-2 border-transparent px-4 py-3.5 text-sm font-medium text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900 sm:px-6"
            >
              {item.title}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(56,96,244,0.06),transparent)]" />
      </div>
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-brand-500">
            Privacy Policy
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            隐私政策
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            我们尊重并保护每一位访问者的隐私权，本政策将帮助您了解我们如何收集和使用您的个人信息。
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

function ContentSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div>
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="scroll-mt-28"
              >
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  <span className="mr-3 text-brand-500">{String(index + 1).padStart(2, '0')}</span>
                  {section.title}
                </h2>
                <div className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <ContentSection />
    </>
  )
}
