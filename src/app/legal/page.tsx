'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const sections = [
  {
    id: 'nature',
    title: '网站性质声明',
    content: `优刻云计算（CloudCVM，网址：cloudcvm.com）是一个专注于云计算、人工智能算力及相关技术服务的**信息展示、技术对接与接口调整平台**。

需要特别向用户说明的是：

1. CloudCVM 本身并不直接生产、建设、运营或销售云服务器、裸金属服务器、GPU 算力集群、CDN 节点、网络带宽、数据库实例等底层基础设施资源。
2. 本网站展示的云服务器、云计算、AI 算力等产品信息，主要来源于与我们建立合作关系的第三方云服务提供商（以下简称"合作服务商"）。CloudCVM 通过 API 接口对接、信息聚合、价格配置调整、账户体系整合等技术方式，为用户提供统一的产品展示、比价、配置推荐及跳转对接服务。
3. 当您决定购买或使用具体的云资源服务时，实际的服务提供方、服务协议主体、计费主体及售后责任主体为相应的合作服务商。CloudCVM 在此过程中主要提供技术对接与信息服务，具体服务标准、可用性承诺、SLA、退款政策等以合作服务商的官方规则为准。
4. 本网站对产品性能、价格、可用性等信息的展示，旨在帮助用户了解市场方案，不构成 CloudCVM 对任何第三方服务质量的明示或默示担保。`,
  },
  {
    id: 'content',
    title: '网站内容声明',
    content: `1. 本网站所有内容，包括但不限于文字、图片、图表、视频、音频、代码、标识、商标、软件及相关资料，仅供用户参考和使用，不构成任何投资、交易或法律建议。
2. 尽管我们努力确保网站信息的准确性和时效性，但受技术更新、市场变化、合作服务商政策调整等因素影响，部分信息可能存在滞后、误差或遗漏。CloudCVM 不对因信息不准确、不完整或更新不及时而给用户造成的直接或间接损失承担责任。
3. 本网站转载或引用的第三方内容（包括合作服务商的产品说明、技术文档、价格信息等），其版权归原作者或原发布方所有。转载内容不代表 CloudCVM 的立场或观点。
4. 用户基于本网站信息作出的任何商业决策、采购行为或技术选型，均由用户自行判断并承担相应风险。`,
  },
  {
    id: 'ip',
    title: '知识产权声明',
    content: `1. 本网站及其原创内容（包括但不限于页面设计、UI 界面、文案、图标、代码、图片、视频、数据库结构等）的知识产权均归 CloudCVM 或其合法权利人所有，受《中华人民共和国著作权法》《商标法》《专利法》及其他相关法律法规保护。
2. 未经 CloudCVM 书面授权，任何单位或个人不得以复制、转载、摘编、改编、翻译、反向工程、抓取数据、建立镜像站点等方式使用本网站内容，亦不得将本网站内容用于商业用途。
3. 本网站展示的合作服务商商标、标识、产品名称等，均归其各自权利人所有。本网站对前述商标的使用，仅用于识别和介绍相关产品，不构成商标权的转让或授权。
4. 如您认为本网站内容侵犯了您的合法权益，请通过本声明末尾提供的联系方式向我们反馈，我们将在收到有效通知后及时处理。`,
  },
  {
    id: 'links',
    title: '第三方链接与服务',
    content: `1. 为便于用户获取更多服务，本网站可能包含指向第三方网站、平台或服务的链接（包括合作服务商官网、控制台、支付页面、实名认证页面等）。
2. 用户点击上述链接后，将离开 CloudCVM 网站并进入第三方控制的页面。第三方网站的内容、隐私政策、服务条款及安全措施均由该第三方自行负责，与 CloudCVM 无关。
3. CloudCVM 不对第三方网站或服务的可用性、安全性、合法性、准确性作出任何保证，亦不承担因用户访问或使用第三方服务而产生的任何责任。
4. 建议用户在访问第三方网站或提供个人信息前，仔细阅读该第三方的相关协议和政策。`,
  },
  {
    id: 'disclaimer',
    title: '责任限制与免责声明',
    content: `1. 在法律法规允许的最大范围内，CloudCVM 不对因用户使用或无法使用本网站、依赖本网站信息、通过本网站跳转至第三方服务而遭受的任何直接、间接、附带、特殊或惩罚性损害承担责任，包括但不限于利润损失、数据丢失、商誉损失、业务中断等。
2. 本网站提供的服务受限于互联网服务的固有特性，可能存在因网络故障、系统维护、第三方服务中断、不可抗力等原因导致的服务暂停、延迟或数据异常。CloudCVM 将尽力保障服务稳定，但不保证服务绝对不间断、无错误或无病毒。
3. 对于因用户自身原因（如账号密码保管不当、提供虚假信息、违反法律法规或本网站规则等）导致的损失，CloudCVM 不承担责任。
4. 如法律法规另有强制性规定，则按该等规定处理。`,
  },
  {
    id: 'conduct',
    title: '用户行为规范',
    content: `用户在使用本网站服务时，应当遵守中华人民共和国法律法规及社会公序良俗，不得从事以下行为：

1. 利用本网站从事任何违法违规活动，包括但不限于侵犯他人知识产权、传播违法信息、进行网络诈骗等；
2. 使用爬虫、脚本、自动化工具或其他技术手段非法抓取、复制、篡改本网站数据或干扰本网站正常运行；
3. 冒充他人、伪造身份信息或利用本网站进行虚假交易；
4. 从事任何可能损害 CloudCVM、合作服务商或其他第三方合法权益的行为。

如用户违反上述规定，CloudCVM 有权采取暂停或终止服务、删除违规内容、保存相关记录并配合有关部门调查等措施。`,
  },
  {
    id: 'notice',
    title: '侵权通知与处理',
    content: `如果您认为本网站上的任何内容侵犯了您的合法权益（包括但不限于著作权、商标权、名誉权等），请您通过以下方式向我们发送书面通知：

- 权利人或其代理人的身份证明及联系方式；
- 涉嫌侵权内容的具体链接或位置；
- 侵权事实说明及相关权利证明材料；
- 权利人对通知内容真实性作出的承诺声明。

我们将在收到完整、有效的通知后，依据相关法律法规及时处理。`,
  },
  {
    id: 'law',
    title: '法律适用与争议解决',
    content: `1. 本法律声明的订立、执行、解释及争议解决均适用中华人民共和国法律（为本声明之目的，不包括香港特别行政区、澳门特别行政区及台湾地区法律）。
2. 因本声明或您使用本网站服务而产生的任何争议，双方应首先通过友好协商解决；协商不成的，任何一方均可向 CloudCVM 所在地有管辖权的人民法院提起诉讼。`,
  },
  {
    id: 'contact',
    title: '联系我们',
    content: `如您对本法律声明有任何疑问或建议，欢迎通过以下方式与我们联系：

- 客服邮箱：support@cloudcvm.com
- 联系电话：0595-22113999
- 在线客服：工作日 9:00 - 18:00

我们将尽快予以回复。`,
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
            Legal Statement
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            法律声明
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            请仔细阅读以下关于本网站性质、内容、知识产权及责任限制的正式声明。
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

export default function LegalPage() {
  return (
    <>
      <HeroSection />
      <SectionNav />
      <ContentSection />
    </>
  )
}
