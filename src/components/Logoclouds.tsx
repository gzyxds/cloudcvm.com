import { JSX } from 'react/jsx-runtime'
import Image from 'next/image'
import styles from './css/Logoclouds.module.css'
import { Container } from './Container'

/**
 * Logo云展示组件 - 带有水平滚动效果
 * 展示合作伙伴或客户的logo，支持无限循环滚动
 */
export default function Example() {
  // Logo数据数组
  const allLogos = [
    {
      alt: 'Transistor',
      src: '/images/Logoclouds/Logoclouds1.jpg',
    },
    {
      alt: 'TencentCloud',
      src: '/images/Logoclouds/Logoclouds2.jpg',
    },
    {
      alt: 'Tuple',
      src: '/images/Logoclouds/logo-tencent.png',
    },
    {
      alt: 'SavvyCal',
      src: '/images/Logoclouds/Logoclouds3.png',
    },
    {
      alt: 'Statamic',
      src: '/images/Logoclouds/Logoclouds4.png',
    },
    {
      alt: 'Alibaba Cloud',
      src: '/images/Logoclouds/logo-qcloud-1.png',
    },
    {
      alt: 'ByteDance',
      src: '/images/Logoclouds/logo-qcloud-2.png',
    },
    {
      alt: 'Tencent',
      src: '/images/Logoclouds/logo-qcloud-3.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/logo-qcloud-4.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds5.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds6.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds7.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds8.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds9.png',
    },
  ]

  // 将logo分成三组，增加每组的logo数量，让展示更丰富
  // 为了适应宽屏(1800px)，每行至少需要 10-12 个 Logo 才能在滚动时无缝衔接
  // 因此我们将数据进行扩充
  const row1Base = allLogos.slice(0, 5)
  const row2Base = allLogos.slice(5, 10)
  const row3Base = allLogos.slice(10, 14) // 修正索引范围

  // 扩充每行的数据，确保单次循环的宽度超过容器宽度 (1800px)
  // 每个Logo宽约160px+间距64px = 224px。1800/224 ≈ 8个。
  // 我们扩充到每组至少 10 个
  const logosRow1 = [...row1Base, ...row1Base]
  const logosRow2 = [...row2Base, ...row2Base]
  const logosRow3 = [...row3Base, ...row3Base, ...row3Base] // 4个 -> 12个

  /**
   * 渲染单排logo滚动组件
   * @param {Array} logos - logo数组
   * @param {string} rowKey - 行标识符
   * @param {string} animationClass - 动画样式类
   * @returns {JSX.Element} 单排logo滚动组件
   */
  const renderLogoRow = (
    logos: Array<any>,
    rowKey: string,
    animationClass: string,
  ): JSX.Element => (
    <div className="mb-8 overflow-hidden mask-gradient-x">
      <div className={`flex space-x-8 md:space-x-16 ${animationClass}`}>
        {/* 第一组logo */}
        {logos.map((logo, index) => (
          <div
            key={`${rowKey}-first-${index}`}
            className={`flex-shrink-0 ${styles.logoItem} border border-slate-200 bg-white/80 backdrop-blur rounded-xl hover:border-[#0055ff]/30 hover:shadow-lg transition-all duration-300`}
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={`${styles.logoImage} object-contain`}
            />
          </div>
        ))}
        {/* 第二组logo（用于无缝循环） */}
        {logos.map((logo, index) => (
          <div
            key={`${rowKey}-second-${index}`}
            className={`flex-shrink-0 ${styles.logoItem} border border-slate-200 bg-white/80 backdrop-blur rounded-xl hover:border-[#0055ff]/30 hover:shadow-lg transition-all duration-300`}
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={`${styles.logoImage} object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        {/* 头部标题介绍 */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base/7 font-semibold text-[#0055ff]">
            合作伙伴
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            深受全球创新团队信赖
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            从初创公司到行业巨头，我们与 500+ 全球知名企业建立了稳固的合作关系，共同构建稳定、高效的云端未来。
          </p>
        </div>

        {/* 第一排 - 正向滚动 */}
        {renderLogoRow(logosRow1, 'row1', styles.scrollContainer)}

        {/* 第二排 - 反向滚动 */}
        {renderLogoRow(logosRow2, 'row2', styles.scrollContainerReverse)}

        {/* 第三排 - 正向滚动（慢速） */}
        {renderLogoRow(logosRow3, 'row3', styles.scrollContainerSlow)}

        {/* 底部渐变遮罩样式 */}
        <style>{`
          .mask-gradient-x {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }
        `}</style>
      </Container>
    </div>
  )
}
