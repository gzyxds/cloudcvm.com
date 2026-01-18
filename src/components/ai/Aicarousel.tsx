'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MessageSquareCode,
  Database,
  Sparkles,
  Palette,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 轮播每一项的数据结构
 */
export interface CarouselSlide {
  id: number
  order: number
  title: string
  subtitle?: string
  description: string
  imagePath: string
  imageAlt: string
  primaryButtonText: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

/**
 * 轮播组件属性
 */
export interface CarouselProps {
  autoPlay?: boolean
  interval?: number
  heightClass?: string
  showIndicators?: boolean
  slides?: CarouselSlide[]
  className?: string
  showProgress?: boolean
  showPlayButton?: boolean
  showNavigation?: boolean
  height?: {
    base?: string
    md?: string
    lg?: string
  } | string
  theme?: 'light' | 'dark'
  textModeButton?: boolean
  showOverlay?: boolean
  customSlides?: any[]
  forceImageMode?: boolean
}

/**
 * VideoCarousel组件属性类型别名
 * 为了保持向后兼容性
 */
export type VideoCarouselProps = CarouselProps

/**
 * 默认轮播图数据
 */
const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    order: 1,
    title: '全能知识库',
    subtitle: '赋能企业知识管理与数字化转型',
    description: '基于先进的AI技术，提供高度拟真的数字人解决方案，赋能企业知识管理与数字化转型， 让智能服务触手可及',
    imagePath: '/images/product/saas.svg',
    imageAlt: '云计算解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 2,
    order: 2,
    title: '数字分身',
    subtitle: '基于先进的AI技术，提供高度拟真的数字人解决方案',
    description: '专为企业主、个人博主打造短视频IP系统，支持真人声音+形象克隆，一键合成课程、带货、形象宣传、行业干货等口播视',
    imagePath: '/images/aisolution/manju-1.png',
    imageAlt: 'GPU云服务器平台',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 3,
    order: 3,
    title: '聊天绘画',
    subtitle: '基于前沿AI技术，为企业提供专业可靠的智能化解决方案',
    description: '集成最新GPT-4、DALL-E 3、Midjourney等顶级AI模型，一站式AI创作平台， 让创意无限可能',
    imagePath: '/images/aisolution/drama-4.png',
    imageAlt: '全球化部署解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  },
  {
    id: 4,
    order: 4,
    title: '论文创作',
    subtitle: '集成最新AI技术，为您提供全方位的智能参考文案',
    description: '基于先进的AI技术，提供智能化论文写作解决方案，助力学术研究与知识创新',
    imagePath: '/images/aisolution/banana-1.png',
    imageAlt: '论文创作解决方案',
    primaryButtonText: '立即查看',
    primaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: 'https://console.cloudcvm.com/cart/goodsList.htm'
  }
]

// 打字机文案 - 从 slide 数据中提取或定义
const sentences = [
  '它能够助您快速开发AI应用，缩短80%项目交付周期',
  '它拥有开箱即用的丰富AI应用',
  '它正在努力成为AI应用落地的首选方案',
  '它能够助您快速落地MVP，验证AI应用商业价值'
]

/**
 * 简单的 Marquee 组件
 * 支持垂直和水平滚动
 */
const Marquee = ({
  children,
  vertical = false,
  reverse = false,
  duration = 30,
  className
}: {
  children: React.ReactNode,
  vertical?: boolean,
  reverse?: boolean,
  duration?: number,
  className?: string
}) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden",
        vertical ? "flex-col h-full" : "flex-row w-full",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-4",
          vertical ? "flex-col" : "flex-row",
          vertical ? "animate-marquee-vertical" : "animate-marquee-horizontal"
        )}
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
          animationDuration: `${duration}s`
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

/**
 * Hero Section 风格的 Carousel 组件
 * 复刻参考设计的布局与交互
 */
const Carousel = ({ slides = defaultSlides }: CarouselProps) => {
  // 打字机效果状态
  const [typeWriterText, setTypeWriterText] = useState('');

  // 图片数据处理
  const marqueeImages = useMemo(() => {
    // 获取所有图片路径
    const images = slides.map(s => s.imagePath);

    // 简单的随机打乱
    // const shuffled = [...images].sort(() => Math.random() - 0.5);

    // 确保有足够的图片用于滚动，如果少于10张则重复
    let result = [...images];
    while (result.length < 10) {
      result = [...result, ...images];
    }

    const mid = Math.ceil(result.length / 2);
    return {
      first: result.slice(0, mid),
      second: result.slice(mid)
    };
  }, [slides]);

  // 打字机效果逻辑
  useEffect(() => {
    let isDeleting = false;
    let sentenceIndex = 0;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentSentence = sentences[sentenceIndex];

      if (isDeleting) {
        setTypeWriterText(currentSentence.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypeWriterText(currentSentence.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentSentence.length) {
        typeSpeed = 2000; // 完成一句后暂停
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        typeSpeed = 500; // 开始新句前暂停
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  // 注入关键帧动画
  useEffect(() => {
    const styleId = 'marquee-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marquee-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical linear infinite;
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal linear infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // 特性列表
  const features = [
    { icon: Sparkles, title: "AI数字人", desc: "声音形象克隆，24h在线" },
    { icon: Database, title: "知识库系统", desc: "智能问答，文档管理" },
    { icon: Palette, title: "聊天绘画", desc: "AI创作，文生图/视频" },
    { icon: MessageSquareCode, title: "源码定制", desc: "私有部署，专业支持" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* 左侧内容区 */}
          <div className="relative space-y-8 md:space-y-10 text-center lg:text-left z-20">
            {/* 装饰背景 */}
            <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none select-none">
              {/* 顶部聚焦光束 - 调整位置和模糊度 */}
              <div className="absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>

              {/* 科技网格背景 - 降低透明度 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-white/80 dark:bg-white/10 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">企业知识库全新升级 v2.0</span>
                <Link href="/work" className="ml-1 text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center">
                  查看详情 <ArrowRight className="ml-0.5 w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                <span className="block pb-2"><span className="text-blue-600">全方位</span> AI解决方案</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mt-2">
                  赋能开发者与先进组织
                </span>
              </h1>
            </div>

            <div className="min-h-[3.5em] sm:min-h-[1.75em] flex items-center justify-center lg:justify-start">
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
                {typeWriterText}<span className="animate-blink ml-1 border-r-2 border-blue-500 h-[1.2em] align-middle inline-block"></span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center"
              >
                开始免费试用
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full px-8 py-4 text-base font-semibold border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 bg-white dark:bg-gray-900 text-center flex items-center justify-center"
              >
                联系技术顾问
              </Link>
            </div>

            <div className="pt-8 max-w-3xl mx-auto lg:mx-0 border-t border-gray-100 dark:border-gray-800/50 mt-8">
              <div className="grid grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group cursor-default">
                    <div className="shrink-0 mt-1 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧图片展示区 (Mobile Only) */}
          <div className="relative w-full z-10 mt-12 lg:hidden flex items-center justify-center">
             {/* 背景光效 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100/30 dark:bg-blue-900/10 blur-[100px] rounded-full -z-10"></div>

            {/* Mobile: Horizontal Marquee */}
            <div className="flex flex-col gap-5 w-screen -ml-[calc(50vw-50%)]">
              <Marquee duration={30}>
                {marqueeImages.first.map((img, index) => (
                  <div key={`row1-${index}`} className="block w-[260px] shrink-0 mx-3">
                    <div className="w-full rounded-xl border-[3px] border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative aspect-video">
                      <Image
                        src={img}
                        alt={`Product Preview ${index + 1}`}
                        fill
                        className="object-cover bg-gray-50 dark:bg-gray-900"
                        loading="lazy"
                        sizes="260px"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
              <Marquee reverse duration={35}>
                {marqueeImages.second.map((img, index) => (
                  <div key={`row2-${index}`} className="block w-[260px] shrink-0 mx-3">
                    <div className="w-full rounded-xl border-[3px] border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg overflow-hidden relative aspect-video">
                      <Image
                        src={img}
                        alt={`Product Preview ${index + 1}`}
                        fill
                        className="object-cover bg-gray-50 dark:bg-gray-900"
                        loading="lazy"
                        sizes="260px"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

        </div>
      </div>

      {/* 右侧图片展示区 (Desktop Only - Absolute Positioned) */}
      <div className="hidden lg:flex absolute top-0 right-0 bottom-0 w-[50vw] z-10 items-center justify-center overflow-hidden pl-12">
          {/* 背景光效 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100/30 dark:bg-blue-900/10 blur-[100px] rounded-full -z-10"></div>

        {/* Desktop: Vertical Marquee */}
        <div className="grid grid-cols-2 gap-6 w-full h-[120%] -my-[10%] overflow-hidden relative">
           {/* 遮罩层：顶部和底部渐变消失 */}
           <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

          <Marquee vertical duration={50} className="h-full py-4">
            {marqueeImages.first.map((img, index) => (
              <div key={`col1-${index}`} className="block w-full mb-6">
                <div className="w-full rounded-2xl border-[4px] border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/50 overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative aspect-video">
                  <Image
                    src={img}
                    alt={`Product Preview ${index + 1}`}
                    fill
                    className="object-cover bg-gray-50 dark:bg-gray-900"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee vertical reverse duration={60} className="h-full py-4">
            {marqueeImages.second.map((img, index) => (
              <div key={`col2-${index}`} className="block w-full mb-6">
                <div className="w-full rounded-2xl border-[4px] border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/50 overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative aspect-video">
                  <Image
                    src={img}
                    alt={`Product Preview ${index + 1}`}
                    fill
                    className="object-cover bg-gray-50 dark:bg-gray-900"
                    loading="lazy"
                    sizes="(max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

Carousel.displayName = 'Carousel'

export default Carousel

// 命名导出，用于支持命名导入
export { Carousel as VideoCarousel }
