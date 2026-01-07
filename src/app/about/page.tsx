import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '关于我们 - 优刻云计算',
  description:
    '优刻云计算成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座。',
}

/**
 * 公司统计数据
 */
const companyStats = [
  {
    value: '75000+',
    label: '企业与开发者用户',
    icon: UserGroupIcon,
  },
  {
    value: '50%+',
    label: '技术人员占比',
    icon: CpuChipIcon,
  },
  {
    value: '200+',
    label: '边缘节点覆盖城市',
    icon: GlobeAltIcon,
  },
  {
    value: '80亿+',
    label: '日均网络请求量',
    icon: ChartBarIcon,
  },
]

/**
 * 公司价值观
 */
const companyValues = [
  {
    title: '客户至上',
    description: '始终将客户的需求和利益置于首位',
  },
  {
    title: '科技向善',
    description: '用科技的力量创造积极的社会价值',
  },
  {
    title: '诚信协作',
    description: '诚信让协作更加高效',
  },
  {
    title: '共同成长',
    description: '相互扶持，积极分享迈向卓越',
  },
  {
    title: '结果导向',
    description: '追求目标实现以成果衡量价值',
  },
  {
    title: '拥抱变化',
    description: '唯有变化是永恒不变的',
  },
]

/**
 * 发展历程
 */
const milestones = [
  {
    year: '2024-至今',
    title: '数实融合 破浪前行',
    description:
      '优刻云成立九周年，迎来第七次办公室搬迁。团队规模接近百人，累计企业与开发者用户超过5万。我们将持续秉持用数据激发生产力的使命，通过数字技术助力实体经济的发展。',
  },
  {
    year: '2022-2023',
    title: '数智应用 激发产能',
    description:
      '发布新产品自动化RPA和商业智能BI，公司先后被评为创新型中小企业、科技小巨人企业、丰泽区重点企业。推出飞跨浏览器，被评为"瞪羚"创新企业。',
  },
  {
    year: '2019-2021',
    title: '云网融合 赋能产业',
    description:
      '获得工信部云计算和CDN资质，被评为国家高新技术企业。推出边缘网络PaaS产品，成立飞跨品牌，推出电商云产品。',
  },
  {
    year: '2016-2018',
    title: '顺势而上 逐云向前',
    description:
      '成为APNIC与CNNIC会员单位，发布QStack多云管理平台。获得IDC/ISP/IP-VPN资质，成为腾讯云、阿里云合作伙伴。',
  },
  {
    year: '2015',
    title: '与云结缘 扬帆起航',
    description:
      '2015年4月1日，优刻云正式成立，开始为企业提供服务器托管和租用服务。',
  },
]

/**
 * 荣誉资质
 */
const honors = [
  {
    title: '专精特新中小企业',
    date: '2024.05',
    description: '评为专精特新中小企业',
  },
  {
    title: '区重点企业',
    date: '2023.06',
    description: '认定为丰泽区重点企业',
  },
  {
    title: '科技小巨人企业',
    date: '2023.06',
    description: '荣获科技小巨人企业',
  },
  {
    title: '创新型中小企业',
    date: '2023.01',
    description: '被评为创新型中小企业',
  },
  {
    title: '"瞪羚"创新企业',
    date: '2022.07',
    description: '获评瞪羚企业',
  },
  {
    title: '科技型中小企业',
    date: '2021.10',
    description: '评为科技型中小企业',
  },
  {
    title: '高新技术企业',
    date: '2019.12',
    description: '荣获国家级高新技术企业称号',
  },
]

/**
 * 联系方式
 */
const offices = [
  {
    city: '泉州',
    address: '泉州市丰泽区领SHOW天地传媒中心8楼',
    phone: '0595-22113999',
  },
  {
    city: '厦门',
    address: '厦门市湖里区厦门跨境产业园1号楼F层AJ02单元',
    phone: '',
  },
  {
    city: '深圳',
    address: '深圳市龙岗区坂田街道万致天地商业中心1栋一单元办公1904',
    phone: '',
  },
]

/**
 * 公司介绍特性
 */
const companyFeatures = [
  {
    name: '专业服务商',
    description:
      '优刻云成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力。',
    icon: BuildingOfficeIcon,
  },
  {
    name: '丰富经验',
    description:
      '在大数据领域有丰富的经验，业务覆盖政府、财会、教育、工业、电商等多个行业。',
    icon: ChartBarIcon,
  },
  {
    name: '技术前沿',
    description:
      '积极推动技术研发与人才培养，确保始终处于数据领域的技术前沿，为客户提供最具竞争力的解决方案。',
    icon: CpuChipIcon,
  },
]

/**
 * 公司统计数据展示组件
 */
function StatsSection() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            数据见证实力
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            用数字说话，用成果证明我们的专业能力与服务品质
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff]">
                    <Icon className="h-6 w-6 text-[#0055ff]" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 愿景使命价值观展示组件
 */
function VisionMissionSection() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* 愿景、使命和价值观区域 - Bento Grid 布局 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* 愿景区域 */}
          <div className="group relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                愿景 VISION
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-semibold text-slate-700">
                  成为全球领先的数据驱动引擎
                </p>
                <p className="text-base font-medium text-slate-500">
                  Leading Global Data-Driven Innovation
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-slate-400"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="currentColor"
                  opacity="0.15"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="currentColor"
                  opacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 使命区域 */}
          <div className="group relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                使命 MISSION
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-semibold text-slate-700">
                  用数据驱动生产力
                </p>
                <p className="text-base font-medium text-slate-500">
                  Driving the Productivity Explosion with Data
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-slate-400"
              >
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                />
                <rect
                  x="30"
                  y="30"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  opacity="0.15"
                />
                <rect
                  x="40"
                  y="40"
                  width="20"
                  height="20"
                  rx="3"
                  fill="currentColor"
                  opacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 价值观区域 */}
          <div className="group relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                价值观 VALUES
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {companyValues.map((value, index) => (
                  <div key={value.title} className="text-center">
                    <h3 className="mb-1 text-sm font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-slate-400"
              >
                <polygon
                  points="50,10 90,90 10,90"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="50" cy="60" r="8" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 发展历程组件 - 左右交替布局，Linear 风格
 */
function TimelineSection() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            发展历程
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            见证我们从初创到行业领先的每一个重要时刻
          </p>
        </div>

        <div className="relative space-y-16">
          {/* 整体连续分割线 */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 transform bg-slate-200 lg:block"></div>

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={milestone.year}
                className="relative grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-center"
              >
                {/* 分割线上的装饰圆点 */}
                <div className="absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white bg-[#0055ff] shadow-sm lg:block"></div>

                {/* 内容区域 */}
                <div className={`${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative flex items-start space-x-4">
                    {/* 时间节点 (移动端显示) */}
                    <div className="flex-shrink-0 lg:hidden">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0055ff]">
                        <span className="text-sm font-medium text-white">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                    </div>

                    {/* 内容卡片 */}
                    <div className="min-w-0 flex-1">
                      <div className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50">
                        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {milestone.title}
                            </h3>
                            <span className="text-sm font-mono font-medium text-[#0055ff]">
                              {milestone.year}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-500">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 占位区域 / 年份大字 */}
                <div
                  className={`${isEven ? '' : 'lg:order-1'} hidden lg:block`}
                >
                  <div className="flex h-32 items-center justify-center">
                    <span className="font-mono text-4xl font-bold text-slate-200">
                      {milestone.year.split('-')[0]}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 荣誉资质组件
 */
function HonorsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            荣誉资质
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            自成立以来，优刻云计算获得了众多企业、权威行业机构和知名媒体的关注与认可
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor, index) => (
            <div
              key={honor.title}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff]">
                  <TrophyIcon className="h-6 w-6 text-[#0055ff]" />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {honor.title}
                  </h3>
                  <div className="mb-3 text-sm font-mono text-[#0055ff]">
                    {honor.date}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {honor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 联系我们组件
 */
function ContactSection() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            联系我们
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            我们在全国多个城市设有办公室，随时为您提供专业的服务支持
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#0055ff]/30 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#eff6ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#eff6ff]">
                  <MapPinIcon className="h-6 w-6 text-[#0055ff]" />
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {office.city}办公室
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0055ff]" />
                      <p className="text-sm leading-relaxed break-words text-slate-600">
                        {office.address}
                      </p>
                    </div>

                    {office.phone && (
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-4 w-4 flex-shrink-0 text-[#0055ff]" />
                        <span className="text-sm font-medium text-slate-700">
                          {office.phone}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 联系方式说明 */}
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              更多联系方式
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              如需了解更多产品信息或商务合作，欢迎通过邮件或电话与我们联系。
              我们的专业团队将为您提供最优质的服务体验。
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 关于我们页面主组件
 * 展示优刻云计算的公司介绍、发展历程、价值观等信息
 * @returns JSX.Element
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        {/* 页面头部区域 */}
        <div className="relative isolate overflow-hidden bg-white pb-16 pt-14 sm:pb-20">
          {/* 背景网格图案 */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-slate-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          {/* 渐变装饰元素 */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#0055ff] opacity-20"
            />
          </div>

          <Container className="pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:py-40">
            {/* 左侧文本内容 */}
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <span className="inline-flex space-x-6">
                  <span className="bg-[#eff6ff] px-3 py-1 text-sm/6 font-semibold text-[#0055ff] ring-1 ring-[#0055ff]/20 ring-inset rounded-full">
                    优刻云与您共创未来
                  </span>
                </span>
              </div>
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                优刻云计算
              </h1>
              <p className="mt-8 text-lg font-medium text-slate-500 sm:text-xl/8">
                成为全球领先的数据驱动引擎
              </p>
              <p className="mt-3 text-base font-medium text-[#0055ff]">
                Leading Global Data-Driven Innovation
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href="#contact"
                  variant="erlieSolid"
                  color="blue"
                >
                  联系我们
                </Button>
                <Button
                  href="#company"
                  variant="erlieOutline"
                  color="slate"
                >
                  了解更多 <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>

            {/* 右侧模拟界面设计 */}
            <div className="mx-auto mt-20 flex max-w-2xl sm:mt-28 lg:mt-4 lg:mr-0 lg:ml-16 lg:max-w-none lg:flex-none xl:ml-40">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                {/* 模拟云计算控制台界面 */}
                <div className="w-[76rem] overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200 shadow-2xl">
                  {/* 顶部导航栏 */}
                  <div className="border-b border-slate-200 bg-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0055ff]">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          优刻云控制台
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* 主要内容区域 */}
                  <div className="space-y-6 p-6">
                    {/* 统计卡片 */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-500">
                              云服务器
                            </p>
                            <p className="text-2xl font-bold text-slate-900">
                              24
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff6ff]">
                            <svg
                              className="h-6 w-6 text-[#0055ff]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-500">
                              AI应用
                            </p>
                            <p className="text-2xl font-bold text-slate-900">
                              12
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                            <svg
                              className="h-6 w-6 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-500">
                              存储空间
                            </p>
                            <p className="text-2xl font-bold text-slate-900">
                              2.4TB
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                            <svg
                              className="h-6 w-6 text-emerald-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 图表区域 */}
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                      <h4 className="mb-4 text-lg font-semibold text-slate-900">
                        资源使用趋势
                      </h4>
                      <div className="flex h-32 items-end justify-between bg-slate-50 rounded-lg px-4 pb-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="rounded-t-sm bg-[#0055ff] opacity-80"
                              style={{ height: `${height}%`, width: '12px' }}
                            ></div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* 服务状态 */}
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                      <h4 className="mb-4 text-lg font-semibold text-slate-900">
                        服务状态
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            name: 'ECS云服务器',
                            status: '运行中',
                            color: 'green',
                          },
                          {
                            name: 'AI智能平台',
                            status: '运行中',
                            color: 'green',
                          },
                          { name: 'CDN加速', status: '运行中', color: 'green' },
                          {
                            name: '数据备份',
                            status: '维护中',
                            color: 'yellow',
                          },
                        ].map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between border-b border-slate-50 pb-2 last:border-0 last:pb-0"
                          >
                            <span className="text-sm text-slate-700">
                              {service.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  service.color === 'green'
                                    ? 'bg-emerald-500'
                                    : 'bg-amber-500'
                                }`}
                              ></div>
                              <span
                                className={`text-xs font-medium ${
                                  service.color === 'green'
                                    ? 'text-emerald-600'
                                    : 'text-amber-600'
                                }`}
                              >
                                {service.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 公司介绍区域 */}
        <div
          id="company"
          className="overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32"
        >
          <Container>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-y-20">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-[#0055ff]">
                    优刻云计算
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    专业的大数据服务商
                  </p>
                  <p className="mt-4 text-base/7 text-slate-600 sm:mt-6 sm:text-lg/8">
                    专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座
                  </p>
                  <dl className="mt-8 max-w-xl space-y-6 text-base/7 text-slate-600 sm:mt-10 sm:space-y-8 lg:max-w-none">
                    {companyFeatures.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-slate-900">
                            <Icon
                              aria-hidden="true"
                              className="absolute top-1 left-1 size-5 text-[#0055ff]"
                            />
                            {feature.name}
                          </dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-center lg:order-first lg:justify-end">
                {/* 模拟云计算控制台界面 2 */}
                <div className="w-full max-w-sm rounded-xl bg-white ring-1 ring-slate-200 shadow-xl sm:max-w-lg md:max-w-2xl lg:w-[48rem] lg:max-w-none xl:w-[57rem]">
                  {/* 控制台顶部导航 */}
                  <div className="bg-slate-900 px-3 py-3 sm:px-4 sm:py-4 lg:px-6 rounded-t-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="text-sm font-semibold text-white sm:text-base">
                          优刻云控制台
                        </div>
                        <div className="flex space-x-1 sm:space-x-2">
                          <div className="h-2 w-2 bg-red-500 rounded-full sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 bg-amber-500 rounded-full sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 bg-emerald-500 rounded-full sm:h-3 sm:w-3"></div>
                        </div>
                      </div>
                      <div className="hidden text-xs text-slate-400 sm:block sm:text-sm font-mono">
                        console.cloudcvm.com
                      </div>
                    </div>
                  </div>

                  {/* 主要内容区域 */}
                  <div className="p-3 sm:p-4 bg-slate-50 rounded-b-xl">
                    {/* 导航菜单 */}
                    <div className="mb-4 flex space-x-3 overflow-x-auto border-b border-slate-200 sm:mb-6 sm:space-x-6">
                      <div className="border-b-2 border-[#0055ff] pb-2 text-sm font-medium whitespace-nowrap text-[#0055ff]">
                        概览
                      </div>
                      <div className="pb-2 text-sm whitespace-nowrap text-slate-500 hover:text-slate-900 cursor-pointer">
                        云服务器
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-slate-500 sm:block hover:text-slate-900 cursor-pointer">
                        数据库
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-slate-500 md:block hover:text-slate-900 cursor-pointer">
                        网络
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-slate-500 md:block hover:text-slate-900 cursor-pointer">
                        监控
                      </div>
                    </div>

                    {/* 统计卡片 */}
                    <div className="mb-3 grid grid-cols-1 gap-2 sm:mb-4 sm:grid-cols-3 sm:gap-3">
                      <div className="rounded-lg bg-white border border-slate-200 p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-[#0055ff] sm:text-2xl">
                              24
                            </div>
                            <div className="text-xs text-slate-500 sm:text-sm">
                              云服务器
                            </div>
                          </div>
                          <ServerIcon className="h-6 w-6 text-[#0055ff] opacity-80 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-white border border-slate-200 p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-emerald-600 sm:text-2xl">
                              12
                            </div>
                            <div className="text-xs text-slate-500 sm:text-sm">
                              数据库实例
                            </div>
                          </div>
                          <DocumentTextIcon className="h-6 w-6 text-emerald-500 opacity-80 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-white border border-slate-200 p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-purple-600 sm:text-2xl">
                              8
                            </div>
                            <div className="text-xs text-slate-500 sm:text-sm">
                              负载均衡
                            </div>
                          </div>
                          <CloudArrowUpIcon className="h-6 w-6 text-purple-500 opacity-80 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                    </div>

                    {/* 资源使用趋势图 */}
                    <div className="mb-3 rounded-lg border border-slate-200 bg-white p-2 sm:mb-4 sm:p-3 shadow-sm">
                      <div className="mb-2 text-sm font-semibold text-slate-900 sm:mb-3 sm:text-base">
                        资源使用趋势
                      </div>
                      <div className="flex h-16 items-end justify-between rounded bg-slate-50 p-2 sm:h-20 sm:p-3">
                        <div className="h-6 w-4 bg-blue-300 rounded-t-sm sm:h-10 sm:w-6"></div>
                        <div className="h-8 w-4 bg-blue-400 rounded-t-sm sm:h-12 sm:w-6"></div>
                        <div className="h-10 w-4 bg-blue-500 rounded-t-sm sm:h-14 sm:w-6"></div>
                        <div className="h-12 w-4 bg-[#0055ff] rounded-t-sm sm:h-16 sm:w-6"></div>
                        <div className="h-8 w-4 bg-blue-500 rounded-t-sm sm:h-12 sm:w-6"></div>
                        <div className="h-10 w-4 bg-blue-400 rounded-t-sm sm:h-14 sm:w-6"></div>
                        <div className="h-7 w-4 bg-blue-300 rounded-t-sm sm:h-11 sm:w-6"></div>
                        <div className="h-9 w-4 bg-blue-400 rounded-t-sm sm:h-13 sm:w-6"></div>
                        <div className="h-11 w-4 bg-blue-500 rounded-t-sm sm:h-15 sm:w-6"></div>
                        <div className="h-10 w-4 bg-[#0055ff] rounded-t-sm sm:h-14 sm:w-6"></div>
                      </div>
                    </div>

                    {/* 服务状态监控 */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-slate-900 sm:text-base">
                        服务状态
                      </div>
                      <div className="flex items-center justify-between rounded-md bg-emerald-50 p-2 border border-emerald-100">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                          <span className="text-xs font-medium text-emerald-900 sm:text-sm">
                            云服务器 ECS
                          </span>
                        </div>
                        <span className="text-xs font-bold text-emerald-600">
                          运行正常
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-md bg-emerald-50 p-2 border border-emerald-100">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                          <span className="text-xs font-medium text-emerald-900 sm:text-sm">
                            云数据库 RDS
                          </span>
                        </div>
                        <span className="text-xs font-bold text-emerald-600">
                          运行正常
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-md bg-amber-50 p-2 border border-amber-100">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                          <span className="text-xs font-medium text-amber-900 sm:text-sm">
                            CDN 加速
                          </span>
                        </div>
                        <span className="text-xs font-bold text-amber-600">
                          维护中
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 统计数据展示 */}
        <StatsSection />

        {/* 愿景使命价值观 */}
        <VisionMissionSection />

        {/* 发展历程 */}
        <TimelineSection />

        {/* 荣誉资质 */}
        <HonorsSection />

        {/* 联系我们 */}
        <ContactSection />

        {/* 行动号召区域 */}
        <div className="bg-[#0055ff] py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                准备好开始您的云计算之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                立即联系我们，获取专业的云计算解决方案和技术支持
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button
                  href="/register"
                  variant="erlieSolid"
                  color="white"
                  className="w-full sm:w-auto"
                >
                  立即咨询
                </Button>

                <Button
                  href="/product"
                  variant="erlieOutline"
                  color="white"
                  className="w-full sm:w-auto"
                >
                  了解产品
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}
