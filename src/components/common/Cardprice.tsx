'use client'

/**
 * 轻量应用服务器专区产品展示组件
 * 完全按照参考图片设计，实现云服务器产品卡片布局
 */

import { useState } from 'react'

/**
 * 服务器产品数据类型定义
 */
interface ServerProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    bandwidth: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

/**
 * 轻量应用服务器产品列表数据
 */
// 主要服务器产品数据
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '轻量应用服务器',
    subtitle: '4核4G3M',
    specs: {
      cpu: '4核4G3M',
      memory: '4GB',
      storage: '80GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '北京', '广州', '南京'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 2,
    name: '轻量应用服务器',
    subtitle: '2核2G3M',
    specs: {
      cpu: '2核2G3M',
      memory: '2GB',
      storage: '40GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折',
  },
  {
    id: 3,
    name: '轻量应用服务器',
    subtitle: '2核4G6M',
    specs: {
      cpu: '2核4G6M',
      memory: '4GB',
      storage: '100GB SSD',
      bandwidth: '6Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折',
  },
  {
    id: 4,
    name: '轻量应用服务器',
    subtitle: '4核8G10M',
    specs: {
      cpu: '4核8G10M',
      memory: '8GB',
      storage: '180GB SSD',
      bandwidth: '10Mbps',
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '轻量应用服务器',
    subtitle: '4核8G12M',
    specs: {
      cpu: '4核8G12M',
      memory: '8GB',
      storage: '200GB SSD',
      bandwidth: '12Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折',
  },
  {
    id: 6,
    name: '轻量应用服务器',
    subtitle: '4核16G14M',
    specs: {
      cpu: '4核16G14M',
      memory: '16GB',
      storage: '300GB SSD',
      bandwidth: '14Mbps',
    },
    regions: ['广州', '上海', '北京'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折',
  },
  {
    id: 7,
    name: '轻量应用服务器',
    subtitle: '8核16G18M',
    specs: {
      cpu: '8核16G18M',
      memory: '16GB',
      storage: '500GB SSD',
      bandwidth: '18Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折',
  },
  {
    id: 8,
    name: '轻量应用服务器',
    subtitle: '8核32G22M',
    specs: {
      cpu: '8核32G22M',
      memory: '32GB',
      storage: '800GB SSD',
      bandwidth: '22Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折',
  },
]

// 活动推广商品数据（独立于主要产品数据）
const promotionProducts: ServerProduct[] = [
  {
    id: 101,
    name: '轻量应用服务器',
    subtitle: '4核4G3M 新用户专享',
    specs: {
      cpu: '4核4G3M',
      memory: '4GB',
      storage: '80GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '北京', '广州', '深圳'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 102,
    name: '轻量应用服务器',
    subtitle: '2核4G6M 高性价比',
    specs: {
      cpu: '2核4G6M',
      memory: '4GB',
      storage: '100GB SSD',
      bandwidth: '6Mbps',
    },
    regions: ['上海', '广州', '北京', '成都'],
    duration: '1年',
    originalPrice: 900,
    currentPrice: 180,
    discount: '2折',
    isRecommended: true,
  },
  {
    id: 103,
    name: '轻量应用服务器',
    subtitle: '4核8G10M 企业首选',
    specs: {
      cpu: '4核8G10M',
      memory: '8GB',
      storage: '180GB SSD',
      bandwidth: '10Mbps',
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.4折',
    isRecommended: true,
  },
  {
    id: 105,
    name: '轻量应用服务器',
    subtitle: '8核16G18M 高性能',
    specs: {
      cpu: '8核16G18M',
      memory: '16GB',
      storage: '500GB SSD',
      bandwidth: '18Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 7200,
    currentPrice: 1800,
    discount: '2.5折',
    isHot: true,
  },
]

/**
 * 轻量应用服务器专区产品展示组件
 *
 * 功能特点：
 * - 完全按照参考图片设计的云服务器产品卡片布局
 * - 4列网格布局，每行显示4个产品卡片
 * - 包含服务器规格、地域、价格、折扣等完整信息
 * - 支持热门标签和推荐标签显示
 * - 数量选择器和购买按钮交互
 * - 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} 轻量应用服务器产品展示组件
 */
export default function Cardprice() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    serverProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}),
  )

  /**
   * 更新产品数量
   * @param {number} productId - 产品ID
   * @param {number} newQuantity - 新数量
   */
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities((prev) => ({ ...prev, [productId]: newQuantity }))
    }
  }

  /**
   * 添加到购物车处理函数
   * @param {number} productId - 产品ID
   */
  const handleAddToCart = (productId: number) => {
    console.log(
      `添加产品 ${productId} 到购物车，数量：${quantities[productId]}`,
    )
  }

  /**
   * 立即购买处理函数
   * @param {number} productId - 产品ID
   */
  const handleBuyNow = (productId: number) => {
    console.log(`立即购买产品 ${productId}，数量：${quantities[productId]}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            轻量应用服务器专区
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-orange-500">4核4G起步</span>
            ，新用户低至
            <span className="font-medium text-orange-500">79元/年</span>
            <span className="ml-2 cursor-pointer text-blue-600 underline">
              活动规则&gt;
            </span>
          </p>
        </div>
      </div>

      {/* 产品网格数据 */}
      <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serverProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* 产品标题和标签 */}
              <div className="border-b border-gray-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.subtitle}
                  </span>
                  {product.isHot && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                      申请特惠
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                      申请特惠
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  建站、Web应用、电商网站等高性价比的选择
                </p>
              </div>

              {/* 产品规格信息 */}
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">规格</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900">
                      {product.specs.cpu}
                    </span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">地域</span>
                  <span className="text-sm text-gray-900">
                    {product.regions.join('/')}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">
                      {product.duration}
                    </span>
                    <span className="rounded bg-red-100 px-1 py-0.5 text-xs text-red-600">
                      {product.discount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">数量</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantities[product.id] - 1)
                      }
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">
                      {quantities[product.id]}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantities[product.id] + 1)
                      }
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 价格和折扣信息 */}
              <div className="border-t border-gray-100 p-4">
                {product.discount && (
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                      {product.discount}
                    </span>
                    <span className="text-xs text-gray-500">
                      限{quantities[product.id]}个
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">活动价:</span>
                    <span className="text-2xl font-bold text-red-600">
                      {product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-600">元</span>
                    <span className="text-xs text-gray-500">
                      ¥{product.originalPrice.toFixed(2)}/月
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600">日常价:</span>
                    <span className="text-sm text-gray-500">
                      {product.originalPrice} 元
                    </span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 rounded border border-blue-600 px-3 py-2 text-sm text-blue-600 transition-colors hover:bg-blue-50"
                  >
                    加入购物车
                  </button>
                  <button
                    onClick={() => handleBuyNow(product.id)}
                    className="flex-1 rounded bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                  >
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 产品网格数据 */}

        {/* 活动推广卡片区域 */}
        <section className="mt-8" aria-labelledby="promotion-title">
          <div
            className="relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            style={{
              backgroundImage: 'url(/images/screenshots/Activitycard.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* 背景遮罩层 */}
            <div className="absolute inset-0 bg-blue-900/20"></div>

            {/* 内容容器 */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 lg:p-8">
              {/* 左侧：活动信息区域 */}
              <div className="flex-1 space-y-4">
                {/* 活动标签与副标题 */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-blue-600 shadow-sm">
                    <span className="text-orange-500">🔥</span>
                    <span>限时特惠</span>
                  </div>
                  <span className="text-lg font-bold text-white sm:text-xl">
                    新用户专享优惠
                  </span>
                </div>

                {/* 主标题 */}
                <h2
                  id="promotion-title"
                  className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl"
                >
                  轻量应用服务器首购特惠
                </h2>

                {/* 核心卖点 */}
                <div className="space-y-2">
                  <p className="text-lg font-medium text-white/90 sm:text-xl">
                    高性能云服务器，助力业务快速上云
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-yellow-300 sm:text-3xl lg:text-4xl">
                      ¥79
                    </span>
                    <span className="text-lg text-white/80">/年起</span>
                    <span className="ml-2 rounded bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                      1折起
                    </span>
                  </div>
                  <p className="text-sm text-white/70">
                    4核4G配置 · 80GB SSD · 3Mbps带宽
                  </p>
                </div>
              </div>

              {/* 右侧：行动按钮区域 */}
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-shrink-0">
                <button
                  className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none sm:px-10"
                  aria-label="立即购买轻量应用服务器特惠套餐"
                >
                  <span className="relative z-10">立即抢购</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                </button>
                <p className="text-center text-xs text-white/60 sm:text-sm">
                  限时优惠，数量有限
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 活动推广卡片区域 */}

        {/* 活动商品数据区域 */}
        <div className="mx-auto mt-8 max-w-[1800px] px-0 sm:px-1 lg:px-1">
          {/* 标题和文案 */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              热销产品推荐
            </h2>
            <p className="text-gray-600">
              精选优质轻量应用服务器，助力您的业务快速发展
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {promotionProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* 产品标签 */}
                <div className="mb-3 flex items-center gap-2">
                  {product.isHot && (
                    <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                      热销
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      推荐
                    </span>
                  )}
                  {product.discount && (
                    <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* 产品名称和副标题 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.subtitle}</p>
                </div>

                {/* 产品规格 */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">CPU/内存/带宽:</span>
                    <span className="font-medium text-gray-900">
                      {product.specs.cpu}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">存储:</span>
                    <span className="font-medium text-gray-900">
                      {product.specs.storage}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">可用地域:</span>
                    <span className="font-medium text-gray-900">
                      {product.regions.slice(0, 2).join('、')}等
                    </span>
                  </div>
                </div>

                {/* 价格信息 */}
                <div className="mb-6">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">
                      ¥{product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ¥{product.originalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">/{product.duration}</p>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    加入购物车
                  </button>
                  <button
                    className="flex-1 rounded-md bg-orange-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-orange-600"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    立即购买
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 活动商品数据区域 */}

        {/* 活动推广卡片区域 */}
        <section className="mt-16 py-16">
          <div className="mx-auto max-w-[1800px] px-0 sm:px-1 lg:px-1">
            {/* 产品卡片 - 宽屏设计 */}
            <div className="mx-auto w-full overflow-hidden rounded-lg border border-gray-200">
              <div className="flex flex-col lg:flex-row">
                {/* 左侧：产品信息区域（蓝色背景） */}
                <div className="bg-blue-600 p-4 text-white sm:p-6 lg:w-[40%] lg:p-8">
                  <div className="flex h-full flex-col justify-center">
                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-bold sm:text-2xl">
                          轻量应用服务器 2核2G
                        </h3>
                        <span className="inline-flex w-fit items-center rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
                          限时特惠
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-blue-100 sm:text-base">
                        200M静态页面，助你1秒部署，Webshell，有效备案，出海安全保障
                      </p>
                    </div>
                  </div>
                </div>

                {/* 右侧：购买信息区域（白色背景） */}
                <div className="bg-white p-4 sm:p-6 lg:w-[60%] lg:p-8">
                  <div className="flex h-full flex-col items-center justify-between gap-4 lg:flex-row">
                    <div className="w-full flex-1">
                      <div className="mb-4 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 lg:mb-0">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            2
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            CPU核数
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            2GB
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            内存
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            40GB
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            SSD存储
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            3Mbps
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            带宽
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col justify-center lg:ml-8 lg:w-auto">
                      <div className="flex flex-col items-center lg:items-end">
                        <div className="flex items-baseline text-center lg:text-right">
                          <span className="mr-1 text-sm text-orange-500">
                            ¥
                          </span>
                          <span className="text-3xl font-bold text-orange-500 sm:text-4xl">
                            38
                          </span>
                          <span className="ml-1 text-sm text-orange-500">
                            /月起
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          原价 ¥640/年
                        </p>
                      </div>

                      <div className="mt-4 flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                        <button className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:flex-none">
                          立即购买
                        </button>
                        <button className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:flex-none">
                          加入购物车
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
