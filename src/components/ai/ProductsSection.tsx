'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  ShoppingCartIcon,
  PlayIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { Product, products } from './data/products'

/**
 * 产品卡片组件
 * 展示单个产品的详细信息
 * @param {Product} product - 产品数据
 * @param {number} index - 产品索引
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
    >
      {/* 产品图片 */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center"
          unoptimized
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/images/product/placeholder.svg'
          }}
        />
        {product.price === 0 && (
          <div className="absolute top-2 left-2 bg-green-500 px-2 py-1 text-xs font-medium text-white sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-sm">
            免费
          </div>
        )}
      </div>

      {/* 产品内容 */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* 标题和副标题 */}
        <div className="mb-3 sm:mb-4">
          <h3 className="mb-2 line-clamp-2 text-base leading-tight font-bold text-gray-900 sm:text-lg dark:text-white">
            {product.title}
          </h3>
          <p className="text-xs font-medium text-[#0055ff] sm:text-sm">
            {product.subtitle}
          </p>
        </div>

        {/* 评分和销量 */}
        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            已售 {product.sales}
          </span>
        </div>

        {/* 产品描述 */}
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:line-clamp-3 sm:text-sm dark:text-gray-400">
          {product.description}
        </p>

        {/* 功能标签 */}
        <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
          {product.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-2 py-0.5 text-xs whitespace-nowrap text-gray-700 sm:py-1 dark:bg-gray-700 dark:text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 价格和操作区域 */}
        <div className="space-y-4">
          {/* 价格信息 */}
          <div className="flex items-center justify-center space-x-2 sm:justify-start">
            {product.price > 0 ? (
              <>
                <span className="text-xl font-bold text-[#0055ff] sm:text-2xl lg:text-3xl">
                  ¥{product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through sm:text-base">
                      ¥{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      省¥
                      {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </>
            ) : (
              <span className="text-xl font-bold text-green-500 sm:text-2xl lg:text-3xl">
                免费体验
              </span>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              onClick={() => window.open(product.link, '_blank')}
              className="group inline-flex flex-1 items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label={`查看${product.title}的在线演示`}
            >
              <PlayIcon className="h-4 w-4 text-gray-500 transition-colors group-hover:text-blue-600" />
              <span className="transition-colors group-hover:text-gray-900">
                查看演示
              </span>
            </button>

            <button
              onClick={() => window.open(product.buyLink, '_blank')}
              className="group inline-flex flex-1 transform items-center justify-center gap-2 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
              aria-label={`购买${product.title}`}
            >
              <ShoppingCartIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>{product.price > 0 ? '立即购买' : '免费获取'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 产品展示区域组件
 * 展示艺创AI的核心产品系列
 * @returns {JSX.Element} 产品展示区域组件
 */
export function ProductsSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-gray-900">
      <Container>
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-3 text-sm font-semibold text-[#0055ff] sm:mb-4 sm:text-base">
            产品中心
          </h2>
          <p className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            艺创AI产品矩阵
          </p>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg dark:text-gray-400">
            为不同行业和场景提供专业的AI解决方案，助力企业数字化转型
          </p>
        </motion.div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
