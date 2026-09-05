'use client'

/* ================================================================
   Advantage 组件（产品优势）
   结构依据 https://www.idcsmart.com/solution.html 的 solution-journey
   区块复刻，配色与宽度按项目规范落地：
   - 左栏：BUSINESS 风格阶段导航（编号 + 节点圆点 + 动态路线 SVG）
   - 右栏：sticky 堆叠式场景卡，滚动时逐层吸附、上一张微缩淡出
   - ≤1120px：导航变为吸顶横向按钮条，卡片恢复正常文档流
   - 配色使用项目 brand/neutral 设计令牌，无硬编码色值
   - 内容宽度使用项目 Container（最大 1800px），不使用参考站 1480px 画布
   数据仍为优刻云产品自有优势（5 项），字段映射：
   category → 导航阶段名 / 卡片顶部编号行
   metric   → 导航副标题 / 顶部说明 / 底部“核心指标”
   title/description/highlights → 场景卡正文
   iconType → 场景卡右侧视觉区图标（原参考为产品截图）
   卡片间距、字号、圆角等布局参数取自参考页 solution.css。
   ================================================================ */

import { useEffect, useRef, useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import clsx from 'clsx'
import {
    CpuChipIcon,
    CurrencyDollarIcon,
    GlobeAltIcon,
    LockClosedIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import styles from './css/Advantage.module.css'

/**
 * 产品优势卡片数据接口
 * @interface AdvantageCard
 * @property {string} title - 优势标题
 * @property {string} description - 详细描述
 * @property {string[]} highlights - 核心亮点
 * @property {string} category - 优势类别
 * @property {string} metric - 关键指标
 * @property {string} iconType - 图标类型
 */
interface AdvantageCard {
    title: string
    description: string
    highlights: string[]
    category: string
    metric: string
    iconType: string
}

/**
 * 产品优势数据配置（沿用原数据，未改动文案）
 */
const advantages: AdvantageCard[] = [
    {
        title: '高稳定性承诺',
        description:
            '单实例SLA达99.975%，支持宕机自动迁移和快照备份。采用跨可用区高可用架构，确保业务连续运行。',
        highlights: ['SLA达99.975%', '宕机自动迁移', '跨可用区高可用'],
        category: '稳定性保障',
        metric: '99.975%',
        iconType: 'shield',
    },
    {
        title: '灵活计费',
        description:
            '支持按量付费和包年包月,可灵活扩容。分钟级创建实例,按需调整资源配置。',
        highlights: ['多种付费方式', '分钟级创建', '弹性扩容'],
        category: '成本优化',
        metric: '分钟级',
        iconType: 'currency',
    },
    {
        title: '全球云基础设施',
        description:
            '全球29个地域提供稳定计算服务,已服务500万企业客户,助力数字化转型。',
        highlights: ['29地域', '87可用区', '500万+'],
        category: '全球覆盖',
        metric: '29个地域',
        iconType: 'globe',
    },
    {
        title: '自研CIPU架构',
        description:
            '采用自研CIPU架构,400G网络带宽,支持6000万PPS和360万IOPS,网络延迟低至8微秒,针对AI场景优化。',
        highlights: ['400G带宽', '6000万PPS', '8微秒时延'],
        category: '性能领先',
        metric: '400G',
        iconType: 'cpu',
    },
    {
        title: '多层防护',
        description:
            '提供多重安全防护机制,包括DDoS防护、漏洞检测和数据加密,确保企业业务安全运行。',
        highlights: ['安全认证', 'DDoS防护', '数据加密'],
        category: '安全防护',
        metric: '多层防护',
        iconType: 'lock',
    },
]

/**
 * 图标类型映射表
 * @type {Record<string, ComponentType<SVGProps<SVGSVGElement>>>}
 */
const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    shield: ShieldCheckIcon,
    currency: CurrencyDollarIcon,
    globe: GlobeAltIcon,
    cpu: CpuChipIcon,
    lock: LockClosedIcon,
}

/**
 * 根据图标类型获取对应图标组件（未知类型回退到盾牌图标）
 * @param {string} iconType - 图标类型标识
 * @returns {ComponentType<SVGProps<SVGSVGElement>>} 对应图标组件
 */
function getIconByType(iconType: string): ComponentType<SVGProps<SVGSVGElement>> {
    return iconMap[iconType] ?? ShieldCheckIcon
}

/**
 * 视觉区鼠标视差深度（对应参考页 data-solution-depth）
 * @type {number[]}
 */
const visualDepths = [18, -16, 20, -18, 16]

/**
 * 产品优势展示组件（solution-journey 复刻版）
 *
 * 交互说明（与参考页 solution.js 行为一致）：
 * - 滚动时按激活线计算当前场景卡，并在 sticky 堆叠过程中
 *   给“上一张”设置 scale/opacity 变量，视觉区做视差位移；
 * - 左栏路线 SVG 会从当前圆点平滑形变到激活圆点；
 * - ≤820px 或系统开启减少动效时，停用 scale/视差逻辑。
 * @returns {JSX.Element} 产品优势区块
 */
export default function Advantage() {
    const journeyRef = useRef<HTMLElement | null>(null)
    const routeRef = useRef<SVGSVGElement | null>(null)
    const routePathRef = useRef<SVGPathElement | null>(null)

    const [activeIndex, setActiveIndex] = useState(0)
    const activeIndexRef = useRef(0)
    const animateRouteRef = useRef<(index: number) => void>(() => undefined)
    const mediaReadyRef = useRef(false)

    /**
     * 初始化参考页同款滚动/路线逻辑（一次性挂载）
     * 所有测量都在 effect 内部完成，避免重复绑定
     */
    useEffect(() => {
        const journey = journeyRef.current
        if (!journey) {
            return
        }

        const buttons = Array.from(
            journey.querySelectorAll<HTMLButtonElement>('[data-advantage-jump]'),
        )
        const panels = Array.from(
            journey.querySelectorAll<HTMLElement>('[data-advantage-panel]'),
        )
        const routeEl = routeRef.current
        const routePathEl = routePathRef.current

        const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
        const compactLayoutMQ = window.matchMedia('(max-width: 820px)')
        let reducedMotion = reducedMotionMQ.matches
        let compactLayout = compactLayoutMQ.matches

        const state = {
            routeYs: [] as number[],
            routeCenterY: 0,
            routeFrame: 0,
            scrollFrame: 0,
        }

        const clamp = (value: number, min: number, max: number) =>
            Math.min(max, Math.max(min, value))

        /**
         * 生成路线 path：激活中心附近右移（activeX），远处回到 baseX
         * @param {number} centerY - 路线激活中心 Y 坐标
         * @returns {string} SVG path 数据
         */
        const routeD = (centerY: number): string => {
            if (!state.routeYs.length) {
                return ''
            }
            const startY = state.routeYs[0]
            const endY = state.routeYs[state.routeYs.length - 1]
            const baseX = 20
            const activeX = 50
            const straightRadius = 19
            const curveRadius = 58
            const pointX = (y: number): number => {
                const distance = Math.abs(y - centerY)
                if (distance <= straightRadius) {
                    return activeX
                }
                if (distance >= curveRadius) {
                    return baseX
                }
                const progress =
                    (curveRadius - distance) / (curveRadius - straightRadius)
                const eased = progress * progress * (3 - 2 * progress)
                return baseX + (activeX - baseX) * eased
            }

            let path = `M ${pointX(startY).toFixed(2)} ${startY.toFixed(2)}`
            for (let y = startY + 4; y < endY; y += 4) {
                path += ` L ${pointX(y).toFixed(2)} ${y.toFixed(2)}`
            }
            return `${path} L ${pointX(endY).toFixed(2)} ${endY.toFixed(2)}`
        }

        /**
         * 计算导航各按钮中心在路线坐标系中的 Y，并写入 viewBox/path
         * @param {boolean} snapToActive - 是否直接吸附到当前激活项
         */
        const renderRoute = (snapToActive = false): void => {
            if (!routeEl || !routePathEl || compactLayout) {
                return
            }
            const routeRect = routeEl.getBoundingClientRect()
            const navRect = routeEl.parentElement?.getBoundingClientRect()
            if (!navRect) {
                return
            }
            const width = routeEl.clientWidth || 275
            const height =
                routeEl.clientHeight || Math.max(0, buttons.length * 80)
            routeEl.setAttribute('viewBox', `0 0 ${width} ${height}`)
            state.routeYs = buttons.map((button) => {
                const rect = button.getBoundingClientRect()
                return (
                    rect.top +
                    rect.height / 2 -
                    Math.max(routeRect.top, navRect.top + 55)
                )
            })
            if (snapToActive || !state.routeCenterY) {
                const index = Math.max(0, activeIndexRef.current)
                state.routeCenterY = state.routeYs[index] ?? 0
            }
            routePathEl.setAttribute('d', routeD(state.routeCenterY))
        }

        /**
         * 平滑动画路线中心到指定索引（460ms easeOutCubic）
         * @param {number} index - 目标场景索引
         */
        const animateRoute = (index: number): void => {
            if (!routePathEl || compactLayout || !state.routeYs.length) {
                return
            }
            const targetCenterY = state.routeYs[index]
            if (!Number.isFinite(targetCenterY)) {
                return
            }
            if (reducedMotion) {
                state.routeCenterY = targetCenterY
                routePathEl.setAttribute('d', routeD(targetCenterY))
                return
            }

            window.cancelAnimationFrame(state.routeFrame)
            const startCenterY = state.routeCenterY || targetCenterY
            const duration = 460
            let startTime = 0
            const animate = (time: number): void => {
                if (!startTime) {
                    startTime = time
                }
                const progress = Math.min(1, (time - startTime) / duration)
                const eased = 1 - Math.pow(1 - progress, 3)
                state.routeCenterY =
                    startCenterY + (targetCenterY - startCenterY) * eased
                routePathEl.setAttribute('d', routeD(state.routeCenterY))
                if (progress < 1) {
                    state.routeFrame = window.requestAnimationFrame(animate)
                }
            }
            state.routeFrame = window.requestAnimationFrame(animate)
        }

        animateRouteRef.current = animateRoute

        /**
         * 滚动渲染：激活判定 + 卡片堆叠缩放 + 视觉区视差
         */
        const renderJourney = (): void => {
            if (!panels.length) {
                return
            }

            // 移动端：横向滑动布局，按可视中心切换激活卡片
            if (compactLayout) {
                const listEl = panels[0].parentElement
                if (!listEl) {
                    return
                }
                const listRect = listEl.getBoundingClientRect()
                const centerX = listRect.left + listRect.width / 2
                let nextActive = 0
                let minDistance = Number.POSITIVE_INFINITY

                panels.forEach((panel, index) => {
                    panel.style.removeProperty('--solution-card-scale')
                    panel.style.removeProperty('--solution-card-opacity')
                    const rect = panel.getBoundingClientRect()
                    const distance = Math.abs(
                        rect.left + rect.width / 2 - centerX,
                    )
                    if (distance < minDistance) {
                        minDistance = distance
                        nextActive = index
                    }
                })

                if (nextActive !== activeIndexRef.current) {
                    activeIndexRef.current = nextActive
                    setActiveIndex(nextActive)
                }
                return
            }

            const viewportHeight = window.innerHeight
            const activationLine = viewportHeight * 0.5
            let nextActive = 0

            panels.forEach((panel, index) => {
                const rect = panel.getBoundingClientRect()
                if (rect.top <= activationLine) {
                    nextActive = index
                }

                if (reducedMotion) {
                    panel.style.removeProperty('--solution-card-scale')
                    panel.style.removeProperty('--solution-card-opacity')
                } else {
                    const nextPanel = panels[index + 1]
                    const stickyTop =
                        Number.parseFloat(window.getComputedStyle(panel).top) || 120
                    const stackProgress = nextPanel
                        ? clamp(
                              (stickyTop + 420 - nextPanel.getBoundingClientRect().top) / 390,
                              0,
                              1,
                          )
                        : 0
                    panel.style.setProperty(
                        '--solution-card-scale',
                        (1 - stackProgress * 0.045).toFixed(4),
                    )
                    panel.style.setProperty(
                        '--solution-card-opacity',
                        (1 - stackProgress * 0.12).toFixed(3),
                    )
                }

                const visual = panel.querySelector<HTMLElement>('[data-advantage-depth]')
                if (!visual) {
                    return
                }
                if (reducedMotion) {
                    visual.style.removeProperty('--solution-depth-x')
                    visual.style.removeProperty('--solution-depth-y')
                    return
                }
                const depth = Number.parseFloat(visual.dataset.advantageDepth || '0')
                const center = rect.top + rect.height / 2
                const progress = clamp(
                    (activationLine - center) / Math.max(viewportHeight * 0.78, 1),
                    -1,
                    1,
                )
                visual.style.setProperty(
                    '--solution-depth-x',
                    `${(progress * depth * 0.35).toFixed(2)}px`,
                )
                visual.style.setProperty(
                    '--solution-depth-y',
                    `${(progress * depth).toFixed(2)}px`,
                )
            })

            if (nextActive !== activeIndexRef.current) {
                activeIndexRef.current = nextActive
                setActiveIndex(nextActive)
            }
        }

        /** 滚动帧节流：同一帧只渲染一次 */
        const schedule = (): void => {
            if (!state.scrollFrame) {
                state.scrollFrame = window.requestAnimationFrame(() => {
                    state.scrollFrame = 0
                    renderJourney()
                })
            }
        }

        /** 导航点击：滚动到对应场景卡（偏移随卡片序号递增） */
        const handleJump = (index: number): void => {
            const panel = panels[index]
            if (!panel) {
                return
            }
            if (compactLayout) {
                // 移动端横向滑动：把目标卡滚动到可视区域中心
                panel.scrollIntoView({
                    behavior: reducedMotion ? 'auto' : 'smooth',
                    block: 'nearest',
                    inline: 'start',
                })
                return
            }
            const offset = 120 + index * 16
            window.scrollTo({
                top: window.scrollY + panel.getBoundingClientRect().top - offset,
                behavior: reducedMotion ? 'auto' : 'smooth',
            })
        }

        const jumpHandlers = buttons.map((button, index) => {
            const handler = (): void => handleJump(index)
            button.addEventListener('click', handler)
            return { button, handler }
        })
        const dotHandlers = Array.from(
            journey.querySelectorAll<HTMLButtonElement>('[data-advantage-dot]'),
        ).map((button, index) => {
            const handler = (): void => handleJump(index)
            button.addEventListener('click', handler)
            return { button, handler }
        })

        const onMediaChange = (): void => {
            reducedMotion = reducedMotionMQ.matches
            compactLayout = compactLayoutMQ.matches
            renderRoute(true)
            schedule()
        }

        const handleResize = (): void => {
            renderRoute(true)
            schedule()
        }

        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', handleResize)
        reducedMotionMQ.addEventListener('change', onMediaChange)
        compactLayoutMQ.addEventListener('change', onMediaChange)

        mediaReadyRef.current = true
        renderRoute(true)
        schedule()
        document.fonts?.ready.then(() => {
            renderRoute(true)
            schedule()
        })

        return () => {
            window.cancelAnimationFrame(state.routeFrame)
            window.cancelAnimationFrame(state.scrollFrame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', handleResize)
            reducedMotionMQ.removeEventListener('change', onMediaChange)
            compactLayoutMQ.removeEventListener('change', onMediaChange)
            jumpHandlers.forEach(({ button, handler }) => {
                button.removeEventListener('click', handler)
            })
            dotHandlers.forEach(({ button, handler }) => {
                button.removeEventListener('click', handler)
            })
            mediaReadyRef.current = false
        }
    }, [])

    /** 激活项变化后让路线平滑移动（滚动激活 / 点击后滚动触发） */
    useEffect(() => {
        if (mediaReadyRef.current) {
            animateRouteRef.current(activeIndex)
        }
    }, [activeIndex])

    return (
        <section
            ref={journeyRef}
            id="advantages"
            data-advantage-journey
            aria-label="产品优势"
            className={styles.journey}
        >
            {/* 标题区域 */}
            <Container className={styles.headingWrap}>
                <header className={styles.heading}>
                    <h2>产品优势</h2>
                    <p>
                        优刻云云服务器
                        ECS是优刻云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure
                        as a Service）级别云计算服务。选择云服务器
                        ECS，您可以轻松构建具备以下优势的计算资源。
                    </p>
                </header>
            </Container>

            {/* 左导航 + 右场景卡 */}
            <Container className={styles.layout}>
                {/* 左侧阶段导航 */}
                <aside className={styles.nav} aria-label="产品优势导航">
                    <p className={styles.navLabel}>PRODUCT ADVANTAGES</p>
                    <svg
                        ref={routeRef}
                        className={styles.route}
                        aria-hidden="true"
                        data-advantage-route
                    >
                        <path
                            ref={routePathRef}
                            className={styles.routePath}
                            data-advantage-route-path
                        />
                    </svg>

                    {advantages.map((advantage, index) => {
                        const code = String(index + 1).padStart(2, '0')
                        const isActive = index === activeIndex
                        return (
                            <button
                                key={advantage.title}
                                type="button"
                                data-advantage-jump={index}
                                aria-current={isActive ? 'step' : undefined}
                                className={clsx(
                                    styles.navButton,
                                    isActive && styles.navButtonActive,
                                )}
                            >
                                <i className={styles.navNode} aria-hidden="true" />
                                <span className={styles.navText}>
                                    <b className={styles.navNumber}>{code}</b>
                                    <strong className={styles.navStage}>
                                        {advantage.category}
                                    </strong>
                                    <small className={styles.navTag}>
                                        {advantage.metric}
                                    </small>
                                </span>
                            </button>
                        )
                    })}
                </aside>

                {/* 右侧场景卡列表 */}
                <div className={styles.list}>
                    {advantages.map((advantage, index) => {
                        const code = String(index + 1).padStart(2, '0')
                        const isActive = index === activeIndex
                        const IconComponent = getIconByType(advantage.iconType)
                        return (
                            <article
                                key={advantage.title}
                                id={`advantage-scenario-${index}`}
                                data-advantage-panel={index}
                                className={clsx(
                                    styles.panel,
                                    isActive && styles.panelActive,
                                )}
                            >
                                {/* 顶部：编号类别 + 指标说明 */}
                                <div className={styles.panelTop}>
                                    <span className={styles.panelCode}>
                                        {code} / {advantage.category}
                                    </span>
                                    <em className={styles.panelMeta}>
                                        核心指标 {advantage.metric}
                                    </em>
                                </div>

                                {/* 主体：文案 + 视觉 */}
                                <div className={styles.panelGrid}>
                                    <div className={styles.panelCopy}>
                                        <h3>{advantage.title}</h3>
                                        <p>{advantage.description}</p>
                                        <ul>
                                            {advantage.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <li key={highlightIndex}>
                                                        {highlight}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* 视觉区（参考页为产品截图，此处放图标） */}
                                    <div
                                        className={styles.visual}
                                        data-advantage-depth={visualDepths[index]}
                                        aria-hidden="true"
                                    >
                                        <div className={styles.visualCore}>
                                            <span className={styles.visualRing}>
                                                <IconComponent />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 底部：能力标签 + 核心指标 */}
                                <div className={styles.panelBottom}>
                                    <div>
                                        <small>核心能力</small>
                                        {advantage.highlights.map(
                                            (highlight, highlightIndex) => (
                                                <span
                                                    key={highlightIndex}
                                                    className={styles.bottomPill}
                                                >
                                                    {highlight}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                    <p className={styles.bottomResult}>
                                        <b>核心指标</b>
                                        <span>{advantage.metric}</span>
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* 移动端横向滑动圆点指示器 */}
                <div className={styles.dots} role="tablist" aria-label="产品优势切换">
                    {advantages.map((advantage, index) => {
                        const isActive = index === activeIndex
                        return (
                            <button
                                key={advantage.title}
                                type="button"
                                data-advantage-dot={index}
                                role="tab"
                                aria-selected={isActive}
                                aria-label={`查看第 ${index + 1} 项优势`}
                                className={clsx(
                                    styles.dot,
                                    isActive && styles.dotActive,
                                )}
                            />
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
