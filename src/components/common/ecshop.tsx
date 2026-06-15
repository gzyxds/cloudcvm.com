'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  ShoppingCartIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * 产品数据接口
 * @interface Product
 */
interface Product {
  image: string
  title: string
  subtitle: string
  description: string
  features: string[]
  price: number
  originalPrice: number
  link: string
  rating: number
  sales: number
  buyLink: string
}

/**
 * 开源电商系统产品数据
 */
const products: Product[] = [
  {
    image: '/images/carousel/ecommerce.webp',
    title: '单商户标准商城系统-PHP',
    subtitle: '[PHP源码版]',
    description:
      '100%开源 | B2C | 单商户标准版 | 自营商城，功能齐全、价格实惠，支持多端无缝使用...',
    features: ['100%开源', 'B2C模式', '单商户', '自营商城'],
    price: 1698,
    originalPrice: 2500,
    link: '/demo',
    rating: 4.8,
    sales: 156,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '单商户商城系统-JAVA',
    subtitle: '[JAVA源码版]',
    description:
      '100%开源 | B2C | 单商户Java版 | 自营商城，基于Java技术栈开发的高性能商城系统...',
    features: ['Java架构', 'B2C模式', '高性能', '自营商城'],
    price: 2698,
    originalPrice: 3500,
    link: '/demo',
    rating: 4.9,
    sales: 203,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '单商户高级商城系统-PHP',
    subtitle: '[PHP高级版]',
    description:
      '100%开源 | B2C | 单商户高级版 | 自营商城，功能更加丰富的高级版商城系统...',
    features: ['高级功能', 'B2C模式', '多端支持', '自营商城'],
    price: 3998,
    originalPrice: 5000,
    link: '/demo',
    rating: 4.9,
    sales: 178,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '单商户SaaS商城系统-PHP',
    subtitle: '[SaaS版本]',
    description:
      '100%开源 | B2C | 单商户SaaS版 | 无限多开 | 自营商城，支持SaaS模式运营...',
    features: ['SaaS模式', '无限多开', 'B2C模式', '自营商城'],
    price: 5998,
    originalPrice: 7500,
    link: '/demo',
    rating: 4.8,
    sales: 132,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '多商户商城系统-PHP',
    subtitle: '[多商户版]',
    description:
      '100%开源 | B2B2C | 多商户 | 平台商城，支持多商户入驻的平台型商城系统...',
    features: ['B2B2C模式', '多商户', '平台商城', '商户管理'],
    price: 5698,
    originalPrice: 7200,
    link: '/demo',
    rating: 4.9,
    sales: 165,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '多商户高级商城系统-PHP',
    subtitle: '[B2B2C PLUS]',
    description:
      '100%开源 | B2B2C PLUS| 多商户 | 平台商城，功能更强大的多商户平台商城系统...',
    features: ['B2B2C PLUS', '多商户', '高级功能', '平台商城'],
    price: 5698,
    originalPrice: 7200,
    link: '/demo',
    rating: 4.8,
    sales: 108,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '社区团购系统-PHP',
    subtitle: '[社区团购]',
    description:
      '100%开源 | 社区团购 | 生鲜团购系统 | 社区团购开源，专为社区团购场景设计...',
    features: ['社区团购', '生鲜团购', '团长管理', '配送管理'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.7,
    sales: 89,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '连锁点餐系统-PHP',
    subtitle: '[餐饮系统]',
    description:
      '100%开源 | 外卖点餐 | 总部+多门店 | 茶饮，专为连锁餐饮企业打造的点餐系统...',
    features: ['外卖点餐', '多门店', '连锁管理', '茶饮专用'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.6,
    sales: 134,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '按摩到家专业版-PHP',
    subtitle: '[按摩系统]',
    description:
      '100%开源 | 按摩到家 | 按摩系统 | 按摩系统解决方案，专业的上门按摩服务平台...',
    features: ['按摩到家', '专业版', '系统解决方案', '上门服务'],
    price: 5698,
    originalPrice: 7200,
    link: '/demo',
    rating: 4.7,
    sales: 98,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '上门家政专业版-PHP',
    subtitle: '[家政系统]',
    description:
      '100%开源 | 上门家政 | 家政系统 | 一站式家政解决方案，提供全方位的家政服务管理...',
    features: ['上门家政', '一站式解决方案', '家政管理', '专业版'],
    price: 5698,
    originalPrice: 7200,
    link: '/demo',
    rating: 4.8,
    sales: 112,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '上门家政系统-JAVA',
    subtitle: '[JAVA家政版]',
    description:
      '100%开源 | 上门家政 | 家政系统 | 一站式家政解决方案，基于Java技术栈的高性能家政平台...',
    features: ['Java架构', '家政系统', '一站式解决方案', '高性能'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.7,
    sales: 87,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '知识付费系统-PHP',
    subtitle: '[知识付费]',
    description:
      '100%开源 | 知识付费｜在线学习 | 专业内容付费系统，打造专业的在线教育平台...',
    features: ['知识付费', '在线学习', '内容付费', '教育平台'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.6,
    sales: 156,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '知识付费系统-JAVA',
    subtitle: '[JAVA知识付费]',
    description:
      '100%开源 | 知识付费｜在线学习 | 专业内容付费系统，基于Java的高性能知识付费平台...',
    features: ['Java架构', '知识付费', '在线学习', '高性能'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.8,
    sales: 143,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '回收租赁系统-PHP',
    subtitle: '[回收租赁]',
    description:
      '100%开源 | 芝麻免押 | 回收租赁 | 商城+回收+租赁，集成多种业务模式的综合平台...',
    features: ['芝麻免押', '回收租赁', '商城集成', '多业务模式'],
    price: 3698,
    originalPrice: 5000,
    link: '/demo',
    rating: 4.5,
    sales: 76,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: '同城跑腿系统-PHP',
    subtitle: '[跑腿系统]',
    description:
      '100%开源 | 跑腿系统 | 同城跑腿系统，专为同城配送和跑腿服务打造的管理平台...',
    features: ['同城跑腿', '配送管理', '跑腿服务', '同城服务'],
    price: 4698,
    originalPrice: 6000,
    link: '/demo',
    rating: 4.6,
    sales: 92,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/carousel/ecommerce.webp',
    title: 'CRM系统-JAVA',
    subtitle: '[CRM管理]',
    description:
      'CRM | CRM系统 | CRM Java，专业的客户关系管理系统，提升企业客户管理效率...',
    features: ['CRM管理', 'Java架构', '客户关系', '企业管理'],
    price: 3998,
    originalPrice: 5500,
    link: '/demo',
    rating: 4.7,
    sales: 118,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
]

/**
 * 产品卡片组件
 * 展示单个产品的详细信息，包括图片、标题、价格、评分等
 * @param product - 产品数据对象
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({ product }: { product: Product }) {
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)

  /**
   * 处理在线演示按钮点击事件
   * 弹出客服二维码模态框
   */
  const handleDemoClick = () => {
    setShowQRCodeModal(true)
  }

  /**
   * 关闭客服二维码模态框
   */
  const handleCloseModal = () => {
    setShowQRCodeModal(false)
  }

  return (
    <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* 产品图片区域 */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center"
          unoptimized
        />
        {/* 折扣标签 */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            省{product.originalPrice - product.price}元
          </span>
        </div>
      </div>

      {/* 产品信息区域 */}
      <div className="p-6">
        {/* 产品标题和副标题 */}
        <div className="mb-3">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="text-sm font-medium text-blue-600">
            {product.subtitle}
          </p>
        </div>

        {/* 产品描述 */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        {/* 产品特性标签 */}
        <div className="mb-4 flex flex-wrap gap-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 价格信息 */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ¥{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ¥{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* 评分和销量 */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">已售{product.sales}套</span>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button
            onClick={handleDemoClick}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <PlayIcon className="h-4 w-4" />
            在线演示
          </button>
          <button
            onClick={() => window.open(product.buyLink, '_blank')}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            立即购买
          </button>
        </div>
      </div>

      {/* 客服二维码模态框，参考 Top.tsx 的设计 */}
      <AnimatePresence>
        {showQRCodeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 w-full max-w-sm overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center bg-gray-100 transition-colors hover:bg-gray-200"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-600" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  联系客服
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  扫描二维码添加客服微信获取详细演示
                </p>

                {/* 二维码 */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src="/images/contact/weixin.png"
                      alt="客服二维码"
                      width={192}
                      height={192}
                      className="h-48 w-48 border border-gray-200 object-contain shadow-lg"
                      unoptimized
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * 产品展示区域组件
 * 展示开源电商系统的核心产品系列
 * @returns {JSX.Element} 产品展示区域组件
 */
export function ProductsSection() {
  return (
    <div className="bg-gray-50">
      <Container className="py-16 sm:py-24">
        {/* 区域标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            真 · 开源产品
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            100%开源的电商系统解决方案，从单商户到多商户，从标准版到企业版，满足不同规模的业务需求
          </p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* 底部行动召唤 */}
        <div className="mt-16 text-center">
          <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              需要定制化商城解决方案？
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-gray-600">
              我们提供专业的技术支持和定制开发服务，帮助您快速搭建符合业务需求的电商平台
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="solid"
                color="blue"
                className="rounded-none px-8 py-3"
                onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all', '_blank')}
              >
                联系我们
              </Button>
              <Button
                variant="outline"
                color="slate"
                className="rounded-none px-8 py-3"
                onClick={() => window.open('/demo', '_blank')}
              >
                查看更多产品
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
