'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const sections = [
  {
    id: 'acceptance',
    title: '服务条款的接受',
    content: `欢迎您使用优刻云计算（CloudCVM）网站及相关服务（以下简称"本服务"或"本网站服务"）。

本《服务条款》（以下简称"本条款"）是您（以下简称"用户"或"您"）与 CloudCVM 之间关于使用本网站及相关服务所订立的协议。您访问本网站、注册账户、浏览信息、使用我们提供的任何功能或服务，即表示您已阅读、理解并同意受本条款的约束。

如果您代表某一法人或其他组织使用本服务，您声明并保证您已获得充分授权，有权使该主体受本条款约束。如您不同意本条款的任何内容，请立即停止使用本服务。`,
  },
  {
    id: 'service-nature',
    title: '服务性质与范围',
    content: `1. CloudCVM 是一家面向云计算与人工智能领域的信息展示、技术对接与接口调整服务平台。我们通过网站向您提供产品信息展示、方案推荐、价格配置、账户管理、API 接口对接、技术支持信息及相关增值服务。

2. 您理解并同意，CloudCVM 本身不直接提供、运营或销售云服务器、计算集群、存储空间、网络带宽、数据库实例等底层云计算资源。前述资源由与我们建立合作关系的第三方云服务提供商（以下简称"合作服务商"）直接提供。

3. 当您通过本网站选择、配置或跳转至合作服务商的平台进行购买时，您将与该合作服务商建立直接的服务合同关系。合作服务商的服务协议、服务等级协议（SLA）、计费规则、退款政策、使用限制等，均以其官方公布的条款为准。

4. CloudCVM 有权根据业务发展、市场需求、合作服务商政策调整等原因，随时变更、暂停或终止部分或全部服务，并会尽可能通过网站公告或其他合理方式提前通知您。`,
  },
  {
    id: 'account',
    title: '账户注册与安全',
    content: `1. 您在使用部分本服务前需要注册 CloudCVM 账户。注册时，您应当提供真实、准确、完整、有效的身份信息，并在相关信息发生变化时及时更新。

2. 您应对账户下的所有行为负责，包括但不限于信息发布、订单操作、API 调用、费用支付等。您应妥善保管账户密码、验证码、API 密钥等安全信息，不得将账户转让、出借、共享或以其他方式交由他人使用。

3. 如您发现账户存在未经授权的使用、信息泄露或其他安全问题，应立即通知我们。在接到您的通知前，因您保管不善导致的损失由您自行承担。

4. 我们有权根据法律法规要求、风控需要或您违反本条款的情形，采取限制登录、冻结账户、终止服务等措施。`,
  },
  {
    id: 'usage-rules',
    title: '用户使用规范',
    content: `您在使用本服务时，应当遵守法律法规及本条款，不得从事以下行为：

1. 利用本服务从事任何违反中华人民共和国法律法规、损害国家利益、社会公共利益或他人合法权益的活动；
2. 使用爬虫、自动化脚本、网络代理或其他技术手段非法抓取、复制、篡改本网站数据，或干扰本网站正常运行；
3. 上传、发布、传播含有病毒、木马、恶意代码或其他可能破坏计算机系统、网络安全的程序或内容；
4. 未经授权访问、尝试访问或干扰本网站的服务器、数据库、API 接口或其他系统资源；
5. 利用本服务进行虚假交易、恶意刷单、套利、洗钱或其他欺诈行为；
6. 冒充他人、伪造身份信息或利用本服务发布虚假、误导性信息；
7. 从事任何可能损害 CloudCVM 或合作服务商商誉、合法权益的行为。

如您违反上述规定，CloudCVM 有权暂停或终止向您提供服务，并保留追究法律责任的权利。`,
  },
  {
    id: 'api',
    title: 'API 与第三方服务对接',
    content: `1. CloudCVM 可能通过 API 接口与第三方服务（包括合作服务商、支付机构、身份认证机构等）进行数据交互，以为您提供统一的服务入口和配置管理体验。

2. 您理解并同意，API 服务的可用性、响应速度、数据准确性在很大程度上取决于第三方系统的状态。CloudCVM 将尽力保障对接服务的稳定性，但不对因第三方原因导致的服务中断、数据延迟或错误承担责任。

3. 您通过 CloudCVM 平台发起的 API 调用，将受限于我们的接口调用频率、配额及相关技术规范。如您超出合理范围滥用 API，我们有权限制或暂停您的 API 访问权限。

4. 您通过 API 接口提交或传输的数据，应当符合法律法规及第三方服务提供商的使用规则。因您提交违法、违规或侵权数据而产生的责任，由您自行承担。`,
  },
  {
    id: 'fees',
    title: '费用与支付',
    content: `1. 本网站提供的信息浏览、方案查看、部分咨询服务可能是免费的；但您通过本网站跳转或对接至合作服务商后购买的云资源、AI 算力等产品，将按照合作服务商的计费标准收取费用。

2. 如涉及 CloudCVM 提供的增值技术服务或代运营服务，具体费用、结算周期及支付方式将在相关服务协议或订单中另行约定。

3. 您应按照订单约定及时、足额支付相关费用。逾期支付的，CloudCVM 或合作服务商有权暂停服务、收取滞纳金或采取其他救济措施。

4. 退款、发票开具、账单异议等事项，按照合作服务商或相关服务协议的规定处理。`,
  },
  {
    id: 'ip',
    title: '知识产权',
    content: `1. 本网站及相关服务中所包含的全部内容（包括但不限于文字、图片、图标、标识、界面设计、代码、数据库、文档等）的知识产权均归 CloudCVM 或其合法权利人所有，受相关法律法规保护。

2. 未经 CloudCVM 书面许可，您不得复制、修改、翻译、传播、展示、反向工程、反编译、抓取或以其他方式使用本网站的任何内容。

3. 您在使用本服务过程中上传、提交的内容，您应保证拥有合法的知识产权或已获得必要授权。您授予 CloudCVM 为提供服务之目的而使用、存储、展示该等内容的必要权利。

4. 本网站中涉及的合作服务商商标、产品名称等，归其各自权利人所有。`,
  },
  {
    id: 'privacy',
    title: '隐私与数据保护',
    content: `我们非常重视您的个人信息保护。关于我们如何收集、使用、存储和保护您的个人信息，请参见我们的《隐私政策》。您同意我们按照《隐私政策》的约定处理您的个人信息。

您进一步同意，为了完成服务对接、实名认证、支付结算及风控合规等目的，我们可能需要将必要的个人信息共享给合作服务商、支付机构、身份认证机构等第三方，具体共享范围以《隐私政策》为准。`,
  },
  {
    id: 'liability',
    title: '责任限制',
    content: `1. 在法律法规允许的最大范围内，CloudCVM 不对因不可抗力、第三方服务中断、网络故障、系统维护、计算机病毒、黑客攻击、政府行为等原因导致的服务中断、数据丢失或其他损失承担责任。

2. 因您自身原因（如提供虚假信息、违反本条款、操作失误、账户保管不善等）导致的任何损失，由您自行承担。

3. 您通过本网站跳转至合作服务商平台后产生的交易纠纷、服务质量问题、数据安全问题等，由您与合作服务商按照双方协议解决。CloudCVM 将尽力协助沟通，但不承担连带责任。

4. 在任何情况下，CloudCVM 对您承担的全部赔偿责任不超过您在使用相关服务期间向 CloudCVM 实际支付的费用总额（如为免费服务，则不超过人民币 100 元）。`,
  },
  {
    id: 'termination',
    title: '服务终止',
    content: `1. 您有权随时停止使用本服务，并可以申请注销账户。账户注销后，我们将按照法律法规及《隐私政策》的规定处理您的个人信息。

2. 如您违反本条款的任何规定，CloudCVM 有权在无需事先通知的情况下，暂停或终止向您提供全部或部分服务，并保留追究法律责任的权利。

3. 服务终止后，您将无法继续使用与本服务相关的功能。但本条款中关于知识产权、责任限制、争议解决等条款仍然有效。`,
  },
  {
    id: 'changes',
    title: '条款变更',
    content: `CloudCVM 有权根据法律法规变化、业务发展或技术更新等情况，不时修订本条款。修订后的条款将在本页面公布，并注明最近更新日期。

如修订内容对您权益有重大影响，我们将通过网站公告、邮件或其他合理方式提示您。您继续使用本服务，即视为您已接受修订后的条款。如您不同意修订内容，请停止使用本服务。`,
  },
  {
    id: 'law',
    title: '法律适用与争议解决',
    content: `1. 本条款的订立、执行、解释及争议解决均适用中华人民共和国法律（为本条款之目的，不包括香港特别行政区、澳门特别行政区及台湾地区法律）。

2. 因本条款或您使用本服务而产生的任何争议，双方应首先通过友好协商解决；协商不成的，任何一方均可向 CloudCVM 所在地有管辖权的人民法院提起诉讼。`,
  },
  {
    id: 'contact',
    title: '联系我们',
    content: `如您对本服务条款有任何疑问，请通过以下方式与我们联系：

- 客服邮箱：support@cloudcvm.com
- 联系电话：0595-22113999
- 在线客服：工作日 9:00 - 18:00`,
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
            Terms of Service
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            服务条款
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            使用 CloudCVM 服务前，请仔细阅读并理解以下条款，它们规定了您与我们之间的权利义务。
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

export default function TermsPage() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <ContentSection />
    </>
  )
}
