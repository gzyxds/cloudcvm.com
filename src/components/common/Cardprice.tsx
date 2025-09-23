'use client'

/**
 * 云服务器产品展示组件
 * 展示轻量应用服务器产品、热门活动和促销信息
 * 包含产品卡片、价格展示、数量选择和购买功能
 */

import { useState } from 'react'

/**
 * 服务器产品数据类型定义
 * 包含产品基本信息、规格配置、区域、价格和促销信息
 */
interface ServerProduct {
  id: number            // 产品唯一标识
  name: string          // 产品名称
  subtitle: string      // 产品副标题/简短描述
  specs: {              // 产品规格配置
    cpu: string         // CPU配置
    memory: string      // 内存大小
    storage: string     // 存储容量
    bandwidth: string   // 带宽
  }
  regions: string[]     // 可用区域列表
  duration: string       // 购买时长
  originalPrice: number  // 原价
  currentPrice: number   // 当前促销价
  discount: string       // 折扣信息
  isHot?: boolean        // 是否热门产品
  isRecommended?: boolean // 是否推荐产品
  activityEndDate?: string // 活动结束时间
  activityNote?: string   // 活动说明
  networkType?: string    // 网络类型
  ipConfig?: string       // IP配置
  defense?: string        // 防御配置
  note?: string           // 注意事项
  linkUrl?: string        // 商品链接地址
}

/**
 * 轻量应用服务器产品列表数据
 * 包含多种配置规格的轻量应用服务器产品
 * 活动标题：新春特惠 - 限时1折起
 */
// 主要服务器产品数据
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '10周年活动特惠服务器 ',
    subtitle: '2核 2G 20M ',
    specs: {
      cpu: '2核 2G 20M',
      memory: '2GB',
      storage: '40GB SSD',
      bandwidth: '20Mbps',
    },
    regions: ['国内', '香港', '美国'],
    duration: '1年',
    originalPrice: 1200,
    currentPrice: 600,
    discount: '5折',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年9月15日',
    activityNote: '购买后第2天自动赠送2年，5分之1价格体验大厂同级CPU，20分之1价格体验大厂优质带宽，阿里精品网CN2大带宽',
    networkType: '精品网CN2',
    ipConfig: '原生IP：1个',
    defense: '标准防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 2,
    name: '10周年活动特惠服务器',
    subtitle: '4核 4G 50M ',
    specs: {
      cpu: '4核 4G 50M',
      memory: '4GB',
      storage: '60GB SSD',
      bandwidth: '50Mbps 不限流量',
    },
    regions: ['国内', '香港', '美国'],
    duration: '1年',
    originalPrice: 4500,
    currentPrice: 1500,
    discount: '2折',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年9月15日',
    activityNote: '购买后第2天自动赠送2年，5分之1价格体验大厂同级CPU，20分之1价格体验大厂优质带宽，阿里精品网CN2大带宽',
    networkType: '精品网CN2',
    ipConfig: '原生IP：1个',
    defense: '标准防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 3,
    name: '10周年活动特惠服务器',
    subtitle: '8核 8G 300M ',
    specs: {
      cpu: '8核 8G 300M',
      memory: '8GB',
      storage: '100GB SSD',
      bandwidth: '300Mbps 不限流量',
    },
    regions: ['国内', '香港', '美国'],
    duration: '1年',
    originalPrice: 4700,
    currentPrice: 2350,
    discount: '2折',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年9月15日',
    activityNote: '购买后第2天自动赠送2年，5分之1价格体验大厂同级CPU，20分之1价格体验大厂优质带宽，阿里精品网CN2大带宽',
    networkType: '精品网CN2',
    ipConfig: '原生IP：1个',
    defense: '标准防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 4,
    name: '10周年活动特惠服务器',
    subtitle: '4核4G 100M ',
    specs: {
      cpu: '4核4G 100M',
      memory: 'DDR5代内存',
      storage: '40GB SSD',
      bandwidth: '100Mbps 不限流量',
    },
    regions: ['美国VIP精品网'],
    duration: '1年',
    originalPrice: 2400,
    currentPrice: 800,
    discount: '2.5折',
    isHot: false,
    isRecommended: true,
    activityEndDate: '2024年9月15日',
    activityNote: '购买后第2天自动赠送2年，访问速度极快，25端口开放',
    networkType: 'VIP精品网',
    ipConfig: '原生IP：1个',
    defense: '100G防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 5,
    name: '10周年活动特惠服务器',
    subtitle: '8核 8G 100M',
    specs: {
      cpu: '8核 8G 100M',
      memory: 'DDR5代内存',
      storage: '80G 系统硬盘',
      bandwidth: '100M 不限流量',
    },
    regions: ['美国'],
    duration: '日常价',
    originalPrice: 1299,
    currentPrice: 1299,
    discount: '买1年送2年',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年9月15日',
    activityNote: '购买后第2天自动赠送2年，访问速度极快，25端口开放',
    networkType: '精品网',
    ipConfig: '原生IP：1个',
    defense: '100G防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 6,
    name: '10周年活动特惠服务器',
    subtitle: '12核12G 100M',
    specs: {
      cpu: '12核12G 100M',
      memory: 'DDR5代内存',
      storage: '80G 系统硬盘',
      bandwidth: '100M 不限流量',
    },
    regions: ['美国', '上海', '北京'],
    duration: '年付',
    originalPrice: 7500,
    currentPrice: 2500,
    discount: '买一年送2年',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2023-09-15',
    activityNote: '购买后第2天自动赠送2年 25端口开放',
    networkType: 'VIP精品网',
    ipConfig: '原生IP：1个',
    defense: '100G防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 7,
    name: '成都通用型ECS实例',
    subtitle: '4H 4G 20M',
    specs: {
      cpu: '4H 4G 20M',
      memory: '4GiB',
      storage: 'Windows 50GiB / Linux 30GiB',
      bandwidth: '20Mbps',
    },
    regions: ['成都'],
    duration: '月付',
    originalPrice: 126,
    currentPrice: 63,
    discount: '特惠',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年12月31日',
    activityNote: '免费赠送 100Gbps DDoS/CC 防护',
    networkType: '公网',
    ipConfig: '固定IP：1个，系统：Windows/Linux',
    defense: '免费赠送 100Gbps DDoS/CC 防护',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
  {
    id: 8,
    name: '10周年活动特惠服务器',
    subtitle: '8核32G22M',
    specs: {
      cpu: '8核32G22M',
      memory: '32GB',
      storage: '800GB SSD',
      bandwidth: '22Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '日常价',
    originalPrice: 6165,
    currentPrice: 3200,
    discount: '7折',
    isHot: true,
    isRecommended: false,
    activityEndDate: '2024年12月31日',
    activityNote: '高性能服务器，适合大型应用和数据处理',
    networkType: '公网',
    ipConfig: '固定IP：1个',
    defense: '标准防御',
    note: '',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=69',
  },
]

/**
 * 云挂机宝产品系列数据
 * 包含云挂机宝和云电脑的多种配置规格
 */
const cloudVmProducts: ServerProduct[] = [
  {
    id: 201,
    name: '云挂机宝-高性能',
    subtitle: '1核2G',
    specs: {
      cpu: '至强E5处理器 1核',
      memory: '2G DDR4 ECC',
      storage: 'Intel P4510 企业级固态',
      bandwidth: '上行2Mbps/下行20Mbps 电信专线',
    },
    regions: ['枣庄云电脑'],
    duration: '月付',
    originalPrice: 9.99,
    currentPrice: 7.20,
    discount: '7.2折',
    isHot: true,
    isRecommended: true,
    activityNote: '【静态内存，绝不超开】挂机宝 - 1核2G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=54&spg_id=49',
  },
  {
    id: 202,
    name: '挂机宝 - 1核2G',
    subtitle: '1核2G',
    specs: {
      cpu: '至强E5处理器 1核',
      memory: '2G DDR4 ECC',
      storage: 'Intel P4510 企业级固态',
      bandwidth: '上行2Mbps/下行20Mbps 电信专线',
    },
    regions: ['枣庄云电脑'],
    duration: '月付',
    originalPrice: 9.99,
    currentPrice: 7.20,
    discount: '7.2折',
    isHot: true,
    isRecommended: true,
    activityNote: '【静态内存，绝不超开】挂机宝 - 1核2G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=54&spg_id=49',
  },
  {
    id: 203,
    name: '云电脑 - 2核4G',
    subtitle: '2核4G',
    specs: {
      cpu: '至强E5处理器 2核',
      memory: '4G DDR4 ECC',
      storage: 'Intel P4510 企业级固态',
      bandwidth: '上行2Mbps/下行20Mbps 电信专线',
    },
    regions: ['枣庄云电脑'],
    duration: '月付',
    originalPrice: 10.50,
    currentPrice: 10.50,
    discount: '无折扣',
    isRecommended: true,
    activityNote: '【静态内存，绝不超开】云电脑 - 2核4G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=54&spg_id=49',
  },
  {
    id: 204,
    name: '云电脑 - 4核6G',
    subtitle: '4核6G',
    specs: {
      cpu: '至强E5处理器 4核',
      memory: '6G DDR4 ECC',
      storage: 'Intel P4510 企业级固态',
      bandwidth: '上行2Mbps/下行20Mbps 电信专线',
    },
    regions: ['枣庄云电脑'],
    duration: '月付',
    originalPrice: 42.00,
    currentPrice: 42.00,
    discount: '无折扣',
    activityNote: '【静态内存，绝不超开】云电脑 - 4核6G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=54&spg_id=49',
  },
];

/**
 * 热销产品推荐第二组
 * 独立于主要产品数据，用于展示特别促销的产品
 */
const promotionProducts: ServerProduct[] = [
  {
    id: 101,
    name: '昆明电信通用型服务器',
    subtitle: 'kcs.ga2.c4m4 高性能',
    specs: {
      cpu: '4 vCPU (AMD EYPC 7662)',
      memory: '4-8GB',
      storage: '40GB+10GB (可升级)',
      bandwidth: '20-1000Mbps',
    },
    regions: ['昆明电信'],
    duration: '日常价',
    originalPrice: 699,
    currentPrice: 499,
    discount: '7.1折',
    isHot: true,
    activityEndDate: '2024年12月31日',
    activityNote: '高性能云服务器，适合中小型应用部署',
    networkType: '经典网络/VPC网络',
    ipConfig: '1个公网IP/自动白名单',
    defense: 'DDoS：10G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
  },
  {
    id: 102,
    name: '昆明电信通用型服务器',
    subtitle: 'kcs.ga2.c8m8 高性能',
    specs: {
      cpu: '8 vCPU (AMD EYPC 7662)',
      memory: '8-16GB',
      storage: '40GB+10GB (可升级)',
      bandwidth: '20-1000Mbps',
    },
    regions: ['昆明电信'],
    duration: '日常价',
    originalPrice: 999,
    currentPrice: 799,
    discount: '8折',
    isRecommended: true,
    activityEndDate: '2024年12月31日',
    activityNote: '推荐配置，性价比高，适合企业级应用',
    networkType: '经典网络/VPC网络',
    ipConfig: '1个公网IP/自动白名单',
    defense: 'DDoS：10G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
  },
  {
    id: 103,
    name: '昆明电信峰驰型服务器',
    subtitle: 'kcs.pa2.c4m4 高性能',
    specs: {
      cpu: '4 vCPU (AMD EYPC 7662)',
      memory: '4-8GB',
      storage: '40GB+10GB (可升级)',
      bandwidth: '500Mbps (流量1T 双向计费)',
    },
    regions: ['昆明电信'],
    duration: '日常价',
    originalPrice: 699,
    currentPrice: 499,
    discount: '7.1折',
    isRecommended: true,
    activityEndDate: '2024年12月31日',
    activityNote: '峰驰型服务器，高带宽配置，适合流量密集型应用',
    networkType: '经典网络/VPC网络',
    ipConfig: '1个公网IP/自动白名单',
    defense: 'DDoS：10G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
  },
  {
    id: 105,
    name: '昆明电信峰驰型服务器',
    subtitle: 'kcs.pa2.c8m8 高性能',
    specs: {
      cpu: '8 vCPU (AMD EYPC 7662)',
      memory: '8-16GB',
      storage: '40GB+10GB (可升级)',
      bandwidth: '500Mbps (流量1T 双向计费)',
    },
    regions: ['昆明电信'],
    duration: '日常价',
    originalPrice: 799,
    currentPrice: 799,
    discount: '无折扣',
    isHot: true,
    activityEndDate: '2024年12月31日',
    activityNote: '高配置峰驰型服务器，适合大型应用和高并发场景',
    networkType: '经典网络/VPC网络',
    ipConfig: '1个公网IP/自动白名单',
    defense: 'DDoS：10G',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
  },

]

/**
 * 云服务器产品展示组件
 *
 * 功能特点：
 * - 云服务器产品卡片布局，展示多种配置的轻量应用服务器
 * - 响应式网格布局，适配不同屏幕尺寸（手机、平板、桌面）
 * - 包含服务器规格、地域、价格、折扣等完整信息展示
 * - 支持热门标签和推荐标签显示
 * - 数量选择器和购买按钮交互功能
 * - 热门活动和促销信息展示
 *
 * @returns {JSX.Element} 云服务器产品展示组件
 */
export default function Cardprice() {
  // 初始化每个产品的数量状态，默认为1
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    serverProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}),
  )

  /**
   * 更新产品数量
   * @param {number} productId - 产品ID
   * @param {number} newQuantity - 新数量（必须大于等于1）
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
    const product = serverProducts.find(p => p.id === productId)
    window.location.href = product?.linkUrl || 'https://console.cloudcvm.com/cart/goodsList.htm'
  }

  /**
   * 立即购买处理函数
   * @param {number} productId - 产品ID
   */
  const handleBuyNow = (productId: number) => {
    console.log(`立即购买产品 ${productId}，数量：${quantities[productId]}`)
    const product = serverProducts.find(p => p.id === productId)
    window.location.href = product?.linkUrl || 'https://console.cloudcvm.com/cart/goodsList.htm'
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 热门活动精选区域 */}
      <div className="mx-auto max-w-[1800px] px-4 py-8 pt-24 sm:px-6 lg:px-8">
      {/* 热门活动精选卡片 - 完全按照参考图片设计：左侧1个大卡片，右侧4个小卡片(2x2布局) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 左侧大卡片 - 精选特惠 新老同享 */}
          <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="lg:col-span-1 relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
            {/* 背景图片 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/carousel/new.png')"
              }}
            />
            {/* 移除半透明遮罩层 */}

            <div className="relative h-full min-h-[350px] p-6 flex flex-col z-10">
              {/* 卡片标签 */}
              <div className="mb-4">
                <span className="inline-block bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">
                  精选特惠 新老同享
                </span>
              </div>

              {/* 卡片标题 */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">热门产品优惠套餐</h3>
                <p className="text-gray-700">新老用户同价秒杀</p>
                <p className="text-gray-700">性能稳定 等你来抢!!!</p>
              </div>

              {/* 卡片按钮 - 靠左显示并向上移动 */}
              <div className="mt-4">
                <div className="text-left">
                  <button className="bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                    立即抢购
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* 右侧卡片区域 - 2x2网格布局 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 右侧卡片1 - 云计算产品热销榜 */}
            <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-1.png')"
                }}
              />
              {/* 移除半透明白色遮罩层 */}

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    云计算产品热销榜
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">云服务器热销榜单</h3>
                  <p className="text-sm text-gray-700">云服务器热销榜单上架</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片2 - 文字识别品类季 */}
            <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-2.png')"
                }}
              />
              {/* 移除半透明白色遮罩层 */}

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                   人工智能超级品类季
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">人工智能超级品类季</h3>
                  <p className="text-sm text-gray-700">文字、人脸、语音、图像识别 低至1折</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片3 - 语音技术品类季 */}
            <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-3.png')"
                }}
              />
              {/* 移除半透明白色遮罩层 */}

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    语音技术品类季
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">语音技术品类季</h3>
                  <p className="text-sm text-gray-700">语音合成转换等多项功能</p>
                  <p className="text-sm text-gray-700">自选应用场景</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片4 - AI智能助手 */}
            <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-4.png')"
                }}
              />
              {/* 移除半透明白色遮罩层 */}

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    AI智能助手
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">智能对话</h3>
                  <p className="text-sm text-gray-700">企业级AI助手</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>
          </div>
        </div>
     {/* 热门活动精选区域结束 */}

        {/* 云计算产品网格数据区域 */}
        <div className="mt-12 mb-6">
          <h2 className="text-3xl font-bold text-blue-600">云服务器产品</h2>
          <p className="mt-1 text-gray-900">每个配置全网（包含其他活动页面）限新购1次，续费1次，详情参见销售卡片</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serverProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 bg-gradient-to-br from-blue-50 to-white shadow-sm transition-shadow duration-200 hover:shadow-md"
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
                    <span className="bg-red-500 px-2 py-1 text-xs text-white">
                      特惠
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                      特惠
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  建站、Web应用、电商网站等高性价比的选择
                </p>
                {product.activityEndDate && (
                  <p className="mt-1 text-sm text-red-600">
                    活动截止: {product.activityEndDate}
                  </p>
                )}
                {product.activityNote && (
                  <p className="mt-1 text-xs text-gray-500">
                    {product.activityNote}
                  </p>
                )}
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
                    <span className="bg-red-100 px-1 py-0.5 text-xs text-red-600">
                      {product.discount}
                    </span>
                  </div>
                </div>

                {/* 网络类型 - 条件渲染 */}
                {product.networkType && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">网络</span>
                    <span className="text-sm text-gray-900">
                      {product.networkType}
                    </span>
                  </div>
                )}

                {/* IP配置 - 条件渲染 */}
                {product.ipConfig && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">IP配置</span>
                    <span className="text-sm text-gray-900">
                      {product.ipConfig}
                    </span>
                  </div>
                )}

                {/* 防御配置 - 条件渲染 */}
                {product.defense && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">防御</span>
                    <span className="text-sm text-gray-900">
                      {product.defense}
                    </span>
                  </div>
                )}

                {/* 注意事项 - 条件渲染 */}
                {product.note && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-xs text-yellow-800">
                      <span className="font-medium">注意：</span>{product.note}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">数量</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantities[product.id] - 1)
                      }
                      className="flex h-6 w-6 items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50"
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
                      className="flex h-6 w-6 items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50"
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
                    <span className="bg-red-100 px-2 py-1 text-xs text-red-600">
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
                   </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600">日常价:</span>
                    <span className="text-sm text-gray-500">
                      {product.originalPrice} 元/{product.duration}
                    </span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 border border-blue-600 px-3 py-2 text-sm text-blue-600 transition-colors hover:bg-blue-50"
                  >
                    加入购物车
                  </button>
                  <button
                    onClick={() => handleBuyNow(product.id)}
                    className="flex-1 bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
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
            className="relative overflow-hidden border border-gray-200 bg-blue-600 transition-shadow duration-300 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/carousel/HeaderCarousel.jpg")' }}
          >
            {/* 半透明遮罩层 */}
            <div className="absolute inset-0 bg-blue-600/70"></div>
            {/* 内容容器 - 三栏布局 */}
            <div className="relative z-10 grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:items-center">
              {/* 左侧：活动信息区域 */}
              <div className="sm:col-span-1">
                {/* 活动标签 */}
                <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 text-sm font-medium text-blue-600">
                  <span>限时特惠</span>
                </div>

                {/* 主标题 */}
                <h2
                  id="promotion-title"
                  className="mt-3 text-xl font-bold text-white sm:text-2xl"
                >
                  轻量应用服务器特惠
                </h2>
              </div>

              {/* 中间：核心卖点 */}
              <div className="flex flex-col items-center justify-center sm:col-span-1">
                <div className="flex flex-wrap items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold text-white sm:text-4xl">
                    ¥79
                  </span>
                  <span className="text-white/80">/年起</span>
                  <span className="ml-1 bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                    1折
                  </span>
                  <span className="text-sm text-white/80">
                    4核4G · 80GB SSD · 3Mbps
                  </span>
                </div>
              </div>

              {/* 右侧：行动按钮区域 */}
              <div className="flex items-center justify-end sm:col-span-1">
                <button
                  className="w-full bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 focus:outline-none sm:w-auto sm:px-8"
                  aria-label="立即购买轻量应用服务器特惠套餐"
                >
                  立即抢购
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 活动推广卡片区域结束 */}

       {/*  4个卡片区域  */}
        <section className="mt-8" aria-labelledby="hot-activities-title">
          <div className="mx-auto max-w-[1800px] px-0 sm:px-1 lg:px-1">
            {/* 标题和文案 */}
            <div className="mb-6">
              <div className="relative inline-block">
                <h2 id="hot-activities-title" className="relative z-10 mb-2 text-2xl font-bold text-blue-600">
                  热门活动精选
                </h2>
                <div className="absolute bottom-1 left-0 h-3 w-full bg-blue-100 opacity-50"></div>
              </div>
              <p className="text-gray-600">
                汇聚当前最热门活动精选推荐
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* 精选特惠 新老同享 */}
              <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的蓝色立方体图形 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M40,40 L160,40 L160,160 L40,160 Z" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      精选特惠 新老同享
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">4核4G云服务器套餐</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">新老用户同价秒杀</p>
                       </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即抢购
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 云计算产品热销榜 */}
              <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的图表图形 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M40,160 L40,80 L80,80 L80,160 Z M90,160 L90,40 L130,40 L130,160 Z M140,160 L140,100 L180,100 L180,160 Z" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      云计算产品热销榜
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">云服务器热销榜单</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">云服务器热销榜单上架</p>
                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 文字识别品类季 */}
              <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的文字图标 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <text x="50" y="120" fontSize="80" fontWeight="bold" fill="currentColor">T</text>
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      文字识别品类季
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">通用文字识别1元起</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">通用文字识别1元起</p>
                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 语音技术品类季 */}
              <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的声波图标 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M100,40 L100,160 M80,60 L80,140 M60,80 L60,120 M120,60 L120,140 M140,80 L140,120" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      语音技术品类季
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">语音技术品类季</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">语音合成转换等多项功能</p>

                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* 云挂机宝产品区域 */}
        <div className="mx-auto mt-8 max-w-[1800px] px-0 sm:px-1 lg:px-1">
          {/* 云挂机宝产品标题和描述 */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-blue-600">
              云挂机宝产品系列
            </h2>
            <p className="text-gray-600">
              高性能云挂机宝，静态内存绝不超开，稳定可靠的云端解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cloudVmProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                {/* 产品标签 */}
                <div className="mb-3 flex items-center gap-2">
                  {product.isHot && (
                    <span className="bg-red-500 px-2 py-1 text-xs font-medium text-white">
                      热销
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      推荐
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                      {product.discount}折
                    </span>
                  )}
                </div>

                {/* 产品名称 */}
                <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{product.activityNote || product.subtitle}</p>

                {/* 产品规格 */}
                <div className="mb-4 space-y-2">
                  {/* CPU */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">CPU: {product.specs.cpu}</span>
                  </div>

                  {/* 内存 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">内存: {product.specs.memory}</span>
                  </div>

                  {/* 带宽 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">带宽: {product.specs.bandwidth}</span>
                  </div>

                  {/* 存储 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">存储: {product.specs.storage}</span>
                  </div>
                </div>

                {/* 价格信息 */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600">¥{product.currentPrice}</span>
                    <span className="text-sm text-gray-600">/ 月</span>
                  </div>
                  {product.originalPrice && (
                    <div className="mt-1 flex items-center gap-1">
                      <span className="text-sm text-gray-600">日常价:</span>
                      <span className="text-sm text-gray-500 line-through">¥{product.originalPrice} / 月</span>
                    </div>
                  )}
                </div>

                {/* 购买按钮 */}
                <a href={product.linkUrl} className="block w-full">
                  <button className="w-full bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700">
                    立即购买
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>


        {/* 热销产品推荐区域 */}
        <div className="mx-auto mt-8 max-w-[1800px] px-0 sm:px-1 lg:px-1">
          {/* 热销产品标题和描述 */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-blue-600">
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
                className="border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* 产品标签 */}
                <div className="mb-3 flex items-center gap-2">
                  {product.isHot && (
                    <span className="bg-red-500 px-2 py-1 text-xs font-medium text-white">
                      热销
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      推荐
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-orange-500 px-2 py-1 text-xs font-medium text-white">
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
                  {/* 网络类型 - 条件渲染 */}
                  {product.networkType && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">网络类型:</span>
                      <span className="font-medium text-gray-900">
                        {product.networkType}
                      </span>
                    </div>
                  )}
                  {/* IP配置 - 条件渲染 */}
                  {product.ipConfig && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">IP配置:</span>
                      <span className="font-medium text-gray-900">
                        {product.ipConfig}
                      </span>
                    </div>
                  )}
                  {/* 防御配置 - 条件渲染 */}
                  {product.defense && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">防御配置:</span>
                      <span className="font-medium text-gray-900">
                        {product.defense}
                      </span>
                    </div>
                  )}
                  {/* 注意事项 - 条件渲染 */}
                  {product.note && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">注意事项:</span>
                      <span className="font-medium text-gray-900">
                        {product.note}
                      </span>
                    </div>
                  )}
                </div>

                {/* 价格信息 */}
                <div className="mb-6">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">
                      ¥{product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ¥{product.originalPrice}/{product.duration}
                    </span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    加入购物车
                  </button>
                  <button
                    className="flex-1 bg-orange-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-orange-600"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    立即购买
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 热销产品推荐区域结束 */}

        {/* 活动推广卡片区域 - 宽屏设计 */}
        <section className="mt-1 py-16">
          <div className="mx-auto max-w-[1800px] px-0 sm:px-1 lg:px-1">
            {/* 轻量应用服务器特惠卡片 - 宽屏设计 */}
            <div className="mx-auto w-full overflow-hidden border border-gray-200">
              <div className="flex flex-col lg:flex-row">
                {/* 左侧：产品信息区域（蓝色背景） */}
                <div className="bg-blue-600 p-4 text-white sm:p-6 lg:w-[40%] lg:p-8">
                  <div className="flex h-full flex-col justify-center">
                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-bold sm:text-2xl">
                          轻量应用服务器 2核2G
                        </h3>
                        <span className="inline-flex w-fit items-center bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
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
                        <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:flex-none">
                          立即购买
                        </button>
                        <button className="flex-1 border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:flex-none">
                          加入购物车
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 优惠码卡片模块 */}
          <div className="mt-12 mb-6">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <span className="relative">
                艺创AI-专属优惠码
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600/20"></span>
              </span>
              <svg className="w-6 h-6 text-blue-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </h2>
            <p className="mt-1 text-gray-600 font-medium">限时可用，立即复制使用，一次购买，终身免费更新升级</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 数字分身优惠码卡片 */}
            <div className="overflow-hidden border border-gray-200 bg-white transition-all">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">数字分身</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-red-600">¥4,999</span>
                  <span className="text-sm text-gray-500 line-through">¥6,800</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3">
                    <code className="text-sm font-medium text-gray-800">oXu3x1IZD</code>
                    <button
                      className="text-blue-600 hover:text-blue-800 focus:outline-none"
                      onClick={(e) => {
                        navigator.clipboard.writeText('oXu3x1IZD');
                        const btn = e.currentTarget;
                        const originalText = btn.textContent;
                        btn.textContent = '已复制';
                        setTimeout(() => {
                          btn.textContent = originalText;
                        }, 1500);
                      }}
                    >
                      复制
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none text-center">
                      去使用
                    </a>
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-gray-100 text-gray-800 py-2 px-3 text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors focus:outline-none text-center">
                      立即购买
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 企业知识库优惠码卡片 */}
            <div className="overflow-hidden border border-gray-200 bg-white transition-all">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">企业知识库</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-red-600">¥6,600</span>
                  <span className="text-sm text-gray-500 line-through">¥9,800</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3">
                    <code className="text-sm font-medium text-gray-800">Ju9han9Z6</code>
                    <button
                      className="text-blue-600 hover:text-blue-800 focus:outline-none"
                      onClick={(e) => {
                        navigator.clipboard.writeText('Ju9han9Z6');
                        const btn = e.currentTarget;
                        const originalText = btn.textContent;
                        btn.textContent = '已复制';
                        setTimeout(() => {
                          btn.textContent = originalText;
                        }, 1500);
                      }}
                    >
                      复制
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none text-center">
                      去使用
                    </a>
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-gray-100 text-gray-800 py-2 px-3 text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors focus:outline-none text-center">
                      立即购买
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 聊天绘画优惠码卡片 */}
            <div className="overflow-hidden border border-gray-200 bg-white transition-all">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">聊天绘画</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-red-600">¥2,999</span>
                  <span className="text-sm text-gray-500 line-through">¥3,800</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3">
                    <code className="text-sm font-medium text-gray-800">4ZKgZfv9M</code>
                    <button
                      className="text-blue-600 hover:text-blue-800 focus:outline-none"
                      onClick={(e) => {
                        navigator.clipboard.writeText('4ZKgZfv9M');
                        const btn = e.currentTarget;
                        const originalText = btn.textContent;
                        btn.textContent = '已复制';
                        setTimeout(() => {
                          btn.textContent = originalText;
                        }, 1500);
                      }}
                    >
                      复制
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none text-center">
                      去使用
                    </a>
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-gray-100 text-gray-800 py-2 px-3 text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors focus:outline-none text-center">
                      立即购买
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 论文写作优惠码卡片 */}
            <div className="overflow-hidden border border-gray-200 bg-white transition-all">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">论文写作</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-red-600">¥3,200</span>
                  <span className="text-sm text-gray-500 line-through">¥4,698</span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3">
                    <code className="text-sm font-medium text-gray-800">lbCG2L0Fq</code>
                    <button
                      className="text-blue-600 hover:text-blue-800 focus:outline-none"
                      onClick={(e) => {
                        navigator.clipboard.writeText('lbCG2L0Fq');
                        const btn = e.currentTarget;
                        const originalText = btn.textContent;
                        btn.textContent = '已复制';
                        setTimeout(() => {
                          btn.textContent = originalText;
                        }, 1500);
                      }}
                    >
                      复制
                    </button>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none text-center">
                      去使用
                    </a>
                    <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="bg-gray-100 text-gray-800 py-2 px-3 text-sm font-medium hover:bg-gray-200 border border-gray-300 transition-colors focus:outline-none text-center">
                      立即购买
                    </a>
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




