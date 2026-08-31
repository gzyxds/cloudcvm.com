'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import {
    ArrowsPointingOutIcon,
    CogIcon,
    ShieldCheckIcon,
    CommandLineIcon,
    CloudIcon,
    LockClosedIcon,
    CurrencyDollarIcon,
    PuzzlePieceIcon,
} from '@heroicons/react/24/outline'
import styles from '../css/ProductTraits.module.css'

/** 立即体验按钮链接（控制台选购页） */
const CONSOLE_LINK = 'https://console.cloudcvm.com/cart/goodsList.html'

/** 了解详情按钮链接（云服务器产品页） */
const DETAIL_LINK = '/ecs'

/** 每屏显示卡片数（参考页 slide 宽度 23.25581% ≈ 4.3 张） */
const PER_VIEW = 4.3

/**
 * 产品特性数据类型定义
 */
interface ProductTrait {
    id: string
    name: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    /** 关键指标标签 */
    metricLabel: string
    /** 关键指标值 */
    metricValue: string
}

/**
 * 云计算产品特性数据（文案保持原有内容不变）
 */
const productTraits: ProductTrait[] = [
    {
        id: 'elastic-computing',
        name: '弹性计算',
        description:
            '在优刻云上您可以在几分钟之内快速增加或删减 CVM 数量，以满足快速变化的业务需求。通过定义相关策略，您可以确保所使用的 CVM 实例数量在需求高峰期无缝扩展，保证程序的可用性。在需求平淡期自动回落，以节省成本。',
        icon: ArrowsPointingOutIcon,
        metricLabel: '扩容速度',
        metricValue: '< 3 min',
    },
    {
        id: 'stable-reliable',
        name: '稳定可靠',
        description:
            'CVM 提供达 99.975% 的服务可用性和 9 个 9 的数据可靠性。三副本存储策略的云硬盘、成熟的网络虚拟技术和网卡绑定技术、T3 级以上的数据中心等联合保证数据和服务的高可用性。',
        icon: ShieldCheckIcon,
        metricLabel: '服务可用性',
        metricValue: '99.975%',
    },
    {
        id: 'secure-network',
        name: '安全的网络',
        description:
            'CVM 运行在一个逻辑隔离的私有网络里，通过网络访问控制列表（Access Control List）和安全组，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置，包括自定义网段划分、IP 地址和路由策略等。',
        icon: CloudIcon,
        metricLabel: '隔离级别',
        metricValue: 'VPC',
    },
    {
        id: 'service-integration',
        name: '服务集成',
        description:
            'CVM 与腾讯云的大部分业务都可以做到高度集成，例如对象存储 COS、私有网络 VPC、云数据库 TencentDB 等，合力在计算、存储、网络传输方面为客户的业务提供完善的解决方案。',
        icon: PuzzlePieceIcon,
        metricLabel: '集成服务数',
        metricValue: '200+',
    },
    {
        id: 'diverse-config',
        name: '多样化配置',
        description:
            'CVM 提供多种实例类型、操作系统和软件包供您选择。各实例类型提供不同的计算、内存和存储功能。您可以根据应用程序的资源需求选择合适的实例类型，并对计算机拥有完全的控制权。',
        icon: CogIcon,
        metricLabel: '实例类型',
        metricValue: '50+',
    },
    {
        id: 'easy-management',
        name: '管理简单',
        description:
            '您拥有 CVM 的管理员账号，对 CVM 有完全的控制权，您可以使用腾讯云控制台、API 或 CLI 等工具登录到您的 CVM 实例，进行重启、网络配置、软件安装等操作。',
        icon: CommandLineIcon,
        metricLabel: '管理方式',
        metricValue: '3 种',
    },
    {
        id: 'comprehensive-protection',
        name: '全面防护',
        description:
            '腾讯云提供免费的主机安全基础版，对暴力破解、木马文件、异地登录等可疑行为进行实时检测和告警。您还可以选购主机安全专业版/旗舰版，获得更全面的安全防护能力。',
        icon: LockClosedIcon,
        metricLabel: '安全认证',
        metricValue: 'ISO 27001',
    },
    {
        id: 'cost-effective',
        name: '费用低廉',
        description:
            'CVM 部署在云端，极大节省了您前期搭建基础网络设施的成本和后期的维护成本。CVM 提供按量计费、包年包月等多种计费模式，您可以根据业务需求选择最合适的计费模式，降低使用成本。',
        icon: CurrencyDollarIcon,
        metricLabel: '计费模式',
        metricValue: '4 种',
    },
]

/** 最大可滑动索引（8 - 4.3 向上取整） */
const MAX_INDEX = Math.ceil(productTraits.length - PER_VIEW)

/**
 * 主按钮鼠标光晕跟随指针（参考页 --introduce-btn-mx/my 变量）
 */
function handleBtnMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--introduce-btn-mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--introduce-btn-my', `${e.clientY - rect.top}px`)
}

/**
 * 卡片内容（header + media）
 *
 * @param trait - 特性数据
 * @param inInner - 是否包一层 card-inner（桌面激活卡结构）
 * @param showActions - 是否展示操作按钮（参考页仅激活卡/移动端展示）
 */
function TraitCardContent({
    trait,
    inInner,
    showActions,
}: {
    trait: ProductTrait
    inInner?: boolean
    showActions?: boolean
}) {
    const body = (
        <>
            <div className={styles.cardHeader}>
                <div className={styles.cardIcon} aria-hidden="true">
                    <trait.icon />
                </div>
                <div className={styles.cardTitleRow}>
                    <h3 className={styles.cardTitle}>{trait.name}</h3>
                    {/* 移动端标题行右侧指标值（桌面端由媒体区展示） */}
                    <span className={styles.titleMetric}>{trait.metricValue}</span>
                </div>
                <p className={styles.cardDesc}>{trait.description}</p>
                {showActions && (
                    <div className={styles.actions}>
                        <a
                            className={styles.btnPrimary}
                            href={CONSOLE_LINK}
                            target="_blank"
                            rel="noreferrer"
                            onMouseMove={handleBtnMove}
                        >
                            <span className={styles.btnPrimaryText}>立即体验</span>
                        </a>
                        <a className={styles.btnWeak} href={DETAIL_LINK}>
                            了解详情
                        </a>
                    </div>
                )}
            </div>
            {/* 媒体区：参考页为产品截图，本项目以指标数据做视觉占位 */}
            <div className={styles.cardMedia}>
                <div className={styles.mediaVisual}>
                    <span className={styles.mediaValue}>{trait.metricValue}</span>
                    <span className={styles.mediaLabel}>{trait.metricLabel}</span>
                </div>
            </div>
        </>
    )

    if (inInner) {
        return <div className={styles.cardInner}>{body}</div>
    }
    return body
}

/**
 * 产品特性展示组件属性接口
 */
interface ProductTraitsProps {
    /** 自定义类名 */
    className?: string
    /** 标题（可包含品牌色渐变关键词节点，如 <span className={styles.linear}>） */
    title?: React.ReactNode
    /** 头部小字标签 */
    subtitle?: string
    /** 描述文本 */
    description?: string
}

/**
 * 产品特性展示组件 — 参考设计（腾讯云门户 AI 全栈能力区块）100% 复刻
 *
 * 结构：
 * - 区块头部：小标签 + 大标题（渐变关键词）+ 右侧轮播导航
 * - 桌面端：Swiper 轮播，每屏 4.3 张；每张卡为双结构
 *   （card 隐藏 / card--active 显示），hover 展开按钮 + 流光边框
 * - 移动端：2 列 → 1 列网格，媒体区上图下文字，按钮常显
 * 文案保持原有内容不变
 *
 * @param className - 自定义类名
 * @param title - 主标题，默认为"产品特性"
 * @param subtitle - 头部小字标签，默认为"云计算核心优势"
 * @param description - 描述文本
 * @returns {JSX.Element} 产品特性展示组件
 */
export function ProductTraits({
    className,
    title = '产品特性',
    subtitle = '云计算核心优势',
    description = '优刻云计算为您提供弹性、安全、高性能的云端计算解决方案，助力企业数字化转型',
}: ProductTraitsProps) {
    const viewportRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [viewWidth, setViewWidth] = useState(0)

    /** 监听轮播容器宽度，用于计算轨道平移距离 */
    useEffect(() => {
        const el = viewportRef.current
        if (!el) return

        const update = () => setViewWidth(el.clientWidth)
        update()
        const observer = new ResizeObserver(update)
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const slideWidth = viewWidth > 0 ? viewWidth / PER_VIEW : 0
    const trackStyle = {
        transform: viewWidth > 0 ? `translateX(${-activeIndex * slideWidth}px)` : undefined,
    } as React.CSSProperties

    const hasPrev = activeIndex > 0
    const hasNext = activeIndex < MAX_INDEX

    const goPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1))
    const goNext = () => setActiveIndex((prev) => Math.min(MAX_INDEX, prev + 1))

    return (
        <section className={clsx(styles.section, className)} aria-label="产品特性展示">
            <div className={styles.inner}>
                {/* ===== 区块头部：小标签 + 大标题 ===== */}
                <div className={styles.hd}>
                    <div className={styles.hdContent}>
                        <div className={styles.tag}>{subtitle}</div>
                        <div className={styles.hdMain}>
                            <h2 className={styles.title}>{title}</h2>
                        </div>
                        <p className={styles.desc}>{description}</p>
                    </div>
                </div>

                {/* ===== 区块主体 ===== */}
                <div className={styles.bd}>
                    <div
                        className={clsx(
                            styles.cardsWrapper,
                            hasNext && styles.hasNext,
                            hasPrev && styles.hasPrev,
                        )}
                    >
                        {/* 桌面端轮播（≥769 显示） */}
                        <div className={styles.swiper} ref={viewportRef}>
                            <div className={styles.track} style={trackStyle}>
                                {productTraits.map((trait) => (
                                    <div key={trait.id} className={styles.slide}>
                                        <div className={styles.cardWrap}>
                                            {/* 非激活卡（参考页 card：桌面端隐藏） */}
                                            <div className={styles.card}>
                                                <TraitCardContent trait={trait} />
                                            </div>
                                            {/* 激活卡（参考页 card--active：桌面端显示） */}
                                            <div className={styles.cardActive}>
                                                <TraitCardContent trait={trait} inInner showActions />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 轮播导航（箭头三态图标） */}
                        <nav className={styles.navigation} aria-label="产品特性切换">
                            <button
                                type="button"
                                className={styles.navPrev}
                                onClick={goPrev}
                                disabled={!hasPrev}
                                aria-label="上一个特性"
                            />
                            <button
                                type="button"
                                className={styles.navNext}
                                onClick={goNext}
                                disabled={!hasNext}
                                aria-label="下一个特性"
                            />
                        </nav>
                    </div>

                    {/* 移动端网格（≤768 显示） */}
                    <div className={styles.mobileGrid}>
                        {productTraits.map((trait) => (
                            <div key={trait.id} className={styles.mobileCard}>
                                <TraitCardContent trait={trait} showActions />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/**
 * 默认导出
 */
export default ProductTraits
