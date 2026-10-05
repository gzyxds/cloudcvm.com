import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ShoppingCartIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline'
import { type Product, products } from './data/products'
import { formatPrice } from '@/lib/format'

/**
 * 产品卡片组件（Server Component，构建期直出静态 HTML，不进客户端 bundle）
 * 展示单个产品的详细信息
 *
 * 性能说明：
 * - `[content-visibility:auto]`：离屏卡片跳过布局/绘制（台账 P-09 建议的独立长列表场景），
 *   26 张卡片只渲染视口附近的行；`contain-intrinsic-size` 提供离屏高度占位，
 *   先写无 auto 关键字的回退值，再写带 auto（记住实际高度）的覆盖值，旧浏览器兼容。
 * - 演示/购买按钮为 `<a>`（原 `window.open` 行内处理器），无 JS 也可跳转。
 * @param {Product} product - 产品数据
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/60 transition-all duration-300 [contain-intrinsic-size:560px] [contain-intrinsic-size:auto_560px] [content-visibility:auto] hover:-translate-y-1 hover:ring-neutral-300/80 dark:bg-neutral-800 dark:ring-neutral-700/60 dark:hover:ring-neutral-600">
      {/* 产品图片 */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-2.5 sm:p-3 dark:from-neutral-700/50 dark:to-neutral-800/50">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={225}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="h-full w-full object-cover object-center"
            loading="lazy"
            quality={80}
          />
          {/* 悬浮遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        {product.price === 0 && (
          <div className="absolute top-5 left-5 rounded-lg bg-success px-2.5 py-1 text-xs font-semibold text-white shadow-md sm:px-3 sm:text-sm">
            免费
          </div>
        )}
        {product.originalPrice > product.price && product.price > 0 && (
          <div className="absolute top-5 right-5 rounded-lg bg-danger px-2.5 py-1 text-xs font-semibold text-white shadow-md sm:px-3 sm:text-sm">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      {/* 产品内容 */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* 标题和副标题 */}
        <div className="mb-3">
          <h3 className="mb-1.5 line-clamp-2 text-base leading-snug font-bold text-neutral-900 transition-colors group-hover:text-brand-500 sm:text-lg dark:text-white dark:group-hover:text-brand-400">
            {product.title}
          </h3>
          <p className="text-xs font-medium text-brand-500 sm:text-sm dark:text-brand-400">
            {product.subtitle}
          </p>
        </div>

        {/* 评分和销量 */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current text-warning'
                      : 'text-neutral-200 dark:text-neutral-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
              {product.rating}
            </span>
          </div>
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400">
            已售 {product.sales}
          </span>
        </div>

        {/* 产品描述 */}
        <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-neutral-500 sm:line-clamp-3 sm:text-sm dark:text-neutral-400">
          {product.description}
        </p>

        {/* 功能标签 */}
        <div className="mb-5 flex flex-wrap gap-1.5 sm:gap-2">
          {product.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-brand-600 sm:py-1 dark:bg-brand-800/30 dark:text-brand-300"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 分割线 */}
        <div className="mb-4 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-700" />

        {/* 价格和操作区域 - 推到底部 */}
        <div className="mt-auto space-y-4">
          {/* 价格信息 */}
          <div className="flex items-center space-x-2">
            {product.price > 0 ? (
              <>
                <span className="text-xl font-extrabold text-brand-500 sm:text-2xl">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-xl font-extrabold text-success sm:text-2xl">免费体验</span>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-2 focus:ring-brand-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
              aria-label={`查看${product.title}的在线演示`}
            >
              <PlayIcon className="h-4 w-4 transition-colors group-hover/btn:text-brand-500 dark:group-hover/btn:text-brand-400" />
              <span>查看演示</span>
            </a>

            <a
              href={product.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all duration-200 hover:from-brand-600 hover:to-brand-700 hover:shadow-lg hover:shadow-brand-500/30 focus:ring-2 focus:ring-brand-500/40 focus:outline-none active:scale-[0.98]"
              aria-label={`购买${product.title}`}
            >
              <ShoppingCartIcon className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
              <span>{product.price > 0 ? '立即购买' : '免费获取'}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * 产品展示区域组件（Server Component）
 * 展示艺创AI的核心产品系列
 *
 * 性能说明：本区块为纯展示内容，构建期直出静态 HTML（P-08 模式），
 * 入场动画收敛为 2 个 Reveal 小岛（标题 + 网格整体），
 * 相比此前 26 个 framer-motion 卡片（每张一个 IntersectionObserver）大幅降低水合与运行时开销。
 * @returns {JSX.Element} 产品展示区域组件
 */
export function ProductsSection() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-neutral-950">
      <Container>
        {/* 标题区域 */}
        <Reveal duration={0.6} className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-3 text-sm font-semibold text-brand-500 sm:mb-4 sm:text-base">
            产品中心
          </h2>
          <p className="mb-4 text-2xl leading-tight font-bold text-neutral-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            艺创AI产品矩阵
          </p>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-neutral-600 sm:px-0 sm:text-lg dark:text-neutral-400">
            为不同行业和场景提供专业的AI解决方案，助力企业数字化转型
          </p>
        </Reveal>

        {/* 产品网格：桌面端一排 4 个 */}
        <Reveal
          duration={0.5}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
