import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import avatar1 from '@/images/avatars/avatar-1.png'
import avatar2 from '@/images/avatars/avatar-2.png'
import avatar3 from '@/images/avatars/avatar-3.png'
import avatar4 from '@/images/avatars/avatar-4.png'
import avatar5 from '@/images/avatars/avatar-5.png'

/**
 * 客户评价组件
 * 展示客户对 CloudCVM 的反馈和评价
 */

type Testimonial = {
  body: string
  author: {
    name: string
    handle: string
    imageUrl: StaticImageData
  }
}

const testimonials: Testimonial[] = [
  {
    body: '工作质量非常好。处理问题专业且高效。对细节的关注令人印象深刻。',
    author: {
      name: '李小明',
      handle: 'xiaoming_li',
      imageUrl: avatar1,
    },
  },
  {
    body: '团队合作非常愉快。他们不仅技术实力强，服务态度也很好。项目按时完成，效果超出预期。',
    author: {
      name: '张伟',
      handle: 'wei_zhang',
      imageUrl: avatar2,
    },
  },
  {
    body: '专业水平一流，沟通顺畅，是值得信赖的合作伙伴。',
    author: {
      name: '王芳',
      handle: 'fang_wang',
      imageUrl: avatar3,
    },
  },
  {
    body: '非常满意他们的服务。团队反应迅速，能够准确理解需求并提供优质解决方案。',
    author: {
      name: '刘静',
      handle: 'jing_liu',
      imageUrl: avatar4,
    },
  },
  {
    body: '服务质量超出预期。团队专业且富有创造力，是理想的合作伙伴。',
    author: {
      name: '陈明',
      handle: 'ming_chen',
      imageUrl: avatar5,
    },
  },
  {
    body: '非常专业的团队。他们不仅按时完成项目，还提供了很多有价值的建议。',
    author: {
      name: '赵强',
      handle: 'qiang_zhao',
      imageUrl: avatar1,
    },
  },
  {
    body: '与他们合作是一次很好的体验。团队专业且富有创意，交付的成果令人满意。',
    author: {
      name: '孙婷',
      handle: 'ting_sun',
      imageUrl: avatar2,
    },
  },
  {
    body: '出色的服务质量和专业态度。他们总是能够及时解决问题，提供有效的解决方案。',
    author: {
      name: '吴峰',
      handle: 'feng_wu',
      imageUrl: avatar3,
    },
  },
  {
    body: '很高兴能与这样专业的团队合作。他们的工作效率和质量都令人印象深刻。',
    author: {
      name: '郭丽',
      handle: 'li_guo',
      imageUrl: avatar4,
    },
  },
]

// 将评论分为三列
const columns: Testimonial[][] = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
]

/**
 * 获取指定列的评论列表（用于纵向滚动复制）
 *
 * @param index 列索引（0 开始）
 * @returns 指定列的评论数组，内容复制两遍
 */
const getColumnReviews = (index: number): Testimonial[] => {
  const col = columns[index] ?? []
  return [...col, ...col]
}

const gradients = [
  'bg-gradient-to-br from-brand-50/60 to-neutral-50/70 dark:from-brand-900/10 dark:to-neutral-900/10',
  'bg-gradient-to-br from-neutral-50/70 to-brand-50/40 dark:from-neutral-900/10 dark:to-brand-900/10',
  'bg-gradient-to-br from-brand-100/30 to-neutral-50/70 dark:from-brand-900/10 dark:to-neutral-900/10',
  'bg-gradient-to-br from-neutral-100/40 to-brand-50/50 dark:from-neutral-900/10 dark:to-brand-900/10',
  'bg-gradient-to-br from-brand-50/40 to-neutral-100/40 dark:from-brand-900/10 dark:to-neutral-900/10',
  'bg-gradient-to-br from-neutral-50/70 to-brand-100/30 dark:from-neutral-900/10 dark:to-brand-900/10',
]

export default function Testimonials() {
  return (
    <section className="section-y bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-base/7 font-semibold text-brand-500">客户评价</h2>
          <p className="section-title-lg mt-2">我们已经与数千位优秀客户合作</p>
          <p className="section-desc">听听来自社区的真实反馈，见证 CloudCVM 如何提升工作效率</p>
        </div>

        <div className="mask-gradient relative grid h-[800px] grid-cols-1 gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div
            className="marquee-column space-y-6"
            style={{ '--duration': '40s' } as React.CSSProperties}
          >
            {getColumnReviews(0).map((review, index) => (
              <div
                key={`col1-${index}`}
                className={cn(
                  'break-inside-avoid rounded-lg border border-neutral-100 p-8 transition-transform duration-300 hover:scale-[1.02] dark:border-neutral-800',
                  gradients[index % gradients.length]
                )}
              >
                {/* 评价内容 */}
                <p className="mb-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  &quot;{review.body}&quot;
                </p>

                {/* 用户信息 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-100 shadow-sm dark:border-neutral-700">
                      <Image
                        src={review.author.imageUrl}
                        alt={review.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">
                        {review.author.name}
                      </div>
                      <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        @{review.author.handle}
                      </div>
                    </div>
                  </div>

                  {/* 装饰性图标 */}
                  <MessageSquare className="h-5 w-5 text-neutral-200 dark:text-neutral-800" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div
            className="marquee-column hidden space-y-6 md:block"
            style={{ '--duration': '50s', '--direction': 'reverse' } as React.CSSProperties}
          >
            {getColumnReviews(1).map((review, index) => (
              <div
                key={`col2-${index}`}
                className={cn(
                  'break-inside-avoid rounded-lg border border-neutral-100 p-8 transition-transform duration-300 hover:scale-[1.02] dark:border-neutral-800',
                  gradients[(index + 2) % gradients.length]
                )}
              >
                {/* 评价内容 */}
                <p className="mb-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  &quot;{review.body}&quot;
                </p>

                {/* 用户信息 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-100 shadow-sm dark:border-neutral-700">
                      <Image
                        src={review.author.imageUrl}
                        alt={review.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">
                        {review.author.name}
                      </div>
                      <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        @{review.author.handle}
                      </div>
                    </div>
                  </div>

                  {/* 装饰性图标 */}
                  <MessageSquare className="h-5 w-5 text-neutral-200 dark:text-neutral-800" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div
            className="marquee-column hidden space-y-6 lg:block"
            style={{ '--duration': '45s' } as React.CSSProperties}
          >
            {getColumnReviews(2).map((review, index) => (
              <div
                key={`col3-${index}`}
                className={cn(
                  'break-inside-avoid rounded-lg border border-neutral-100 p-8 transition-transform duration-300 hover:scale-[1.02] dark:border-neutral-800',
                  gradients[(index + 4) % gradients.length]
                )}
              >
                {/* 评价内容 */}
                <p className="mb-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  &quot;{review.body}&quot;
                </p>

                {/* 用户信息 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-100 shadow-sm dark:border-neutral-700">
                      <Image
                        src={review.author.imageUrl}
                        alt={review.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-white">
                        {review.author.name}
                      </div>
                      <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        @{review.author.handle}
                      </div>
                    </div>
                  </div>

                  {/* 装饰性图标 */}
                  <MessageSquare className="h-5 w-5 text-neutral-200 dark:text-neutral-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }

        .marquee-column {
          animation: marquee-vertical var(--duration) linear infinite;
          animation-direction: var(--direction, normal);
        }

        .marquee-column:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  )
}
