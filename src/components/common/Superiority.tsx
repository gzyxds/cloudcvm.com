'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import {
    FireIcon,
    CubeIcon,
    CircleStackIcon,
    SparklesIcon,
    ShieldCheckIcon,
    CloudIcon,
    ChatBubbleLeftRightIcon,
    ArrowDownTrayIcon,
    PlayIcon,
    BoltIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import styles from '../css/Superiority.module.css'

/* ================================================================
   产品优势组件 — 依据参考设计（腾讯云产品体系区块）100% 复刻
   结构：区块头部（tag + 标题 + 探索链接）→ 分类标签栏 → 内容面板
   内容面板：
   - 热门推荐：4 列分组列表（list 标题 + 堆叠卡片）
   - 其他分类：左侧推荐卡（25%） + 右侧卡片网格（75%）
   数据均为优刻云自有产品，未使用参考页的腾讯产品内容
   ================================================================ */

/** 购买/体验链接 */
const CONSOLE_LINK = 'https://console.cloudcvm.com/cart/goodsList.html'

/** 按钮文案类型（对应参考页 下载/体验/使用/选购/咨询 五种） */
type ButtonText = '下载' | '体验' | '使用' | '选购' | '咨询'

/** 产品卡片数据 */
interface SuperiorityCard {
    id: string
    name: string
    description: string
    tags: string[]
    href: string
    buttonText: ButtonText
    /** 首个标签是否使用“优势”高亮样式 */
    advantage?: boolean
}

/** 热门推荐分组列表 */
interface SuperiorityList {
    title: string
    cards: SuperiorityCard[]
}

/** 推荐卡（非热门面板左侧） */
interface SuperiorityRecommend {
    slogan: string
    title: string
    description: string
    tags: string[]
    primaryButton: { text: string; href: string }
    secondaryButton: { text: string; href: string }
}

/** 分类标签页 */
interface SuperiorityTab {
    id: string
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    /** 是否为热门推荐（使用分组列表布局） */
    hot?: boolean
    /** 热门分组列表 */
    lists?: SuperiorityList[]
    /** 推荐卡 */
    recommend?: SuperiorityRecommend
    /** 普通卡片（非热门面板） */
    cards?: SuperiorityCard[]
}

/**
 * 产品分类数据配置
 * 内容取自站内产品目录（ServiceTabs / navigation），覆盖云计算、AI、安全等方向
 */
const superiorTabs: SuperiorityTab[] = [
    {
        id: 'hot',
        name: '热门推荐',
        icon: FireIcon,
        hot: true,
        lists: [
            {
                title: '海外与出海',
                cards: [
                    {
                        id: 'overseas',
                        name: '出海云产品汇集',
                        description: '汇集海内外云服务器、专线、数据库等产品，海内外业务低成本上云',
                        tags: ['五大洲节点', '出海必备', '低至0.5折'],
                        href: CONSOLE_LINK,
                        buttonText: '选购',
                        advantage: true,
                    },
                    {
                        id: 'hk-cloud',
                        name: '香港钜惠上云',
                        description: '回内地优化线路，BGP智能选路，云服务器全场低至1折',
                        tags: ['直连内地', '新客特惠', '跨境业务'],
                        href: CONSOLE_LINK,
                        buttonText: '选购',
                    },
                    {
                        id: 'cross-border',
                        name: '跨境电商专区',
                        description: '节点覆盖东南亚、日韩、欧美等全球32个热门地区市场',
                        tags: ['多店铺管理', '防关联', '独立站'],
                        href: CONSOLE_LINK,
                        buttonText: '选购',
                    },
                    {
                        id: 'global-network',
                        name: '全球专线服务',
                        description: '全球31个节点组成骨干网，跨境加速业务优选',
                        tags: ['全球一张网', '就近接入', '内网互通'],
                        href: '/ecs',
                        buttonText: '咨询',
                    },
                ],
            },
            {
                title: '计算特惠',
                cards: [
                    {
                        id: 'gpu',
                        name: 'GPU云服务器',
                        description: '9.9元/天，一键部署体验DeepSeek等全系列镜像',
                        tags: ['算力狂飙', '国产AI', '低至1.4折'],
                        href: '/gpu',
                        buttonText: '选购',
                        advantage: true,
                    },
                    {
                        id: 'light-host',
                        name: '轻量应用云主机',
                        description: '入门级云主机，套餐式计费，57元/年起',
                        tags: ['大流量包', '入门级', '开箱即用'],
                        href: '/lighthouse',
                        buttonText: '选购',
                    },
                    {
                        id: 'bare-metal',
                        name: '裸金属服务器',
                        description: '超高性能计算灵活部署，9.9元试用',
                        tags: ['分钟级交付', '高性能', '弹性伸缩'],
                        href: '/cbm',
                        buttonText: '选购',
                    },
                    {
                        id: 'ecs',
                        name: '云服务器 ECS',
                        description: '安全稳定、弹性可扩展的云端计算服务，分钟级交付',
                        tags: ['弹性扩容', '热迁移', '高可用'],
                        href: '/ecs',
                        buttonText: '选购',
                    },
                ],
            },
            {
                title: '网络与安全',
                cards: [
                    {
                        id: 'cdn',
                        name: 'CDN服务',
                        description: '全球内容加速分发，智能调度低延迟',
                        tags: ['全球节点', '智能调度', '高可用'],
                        href: '/cdn',
                        buttonText: '使用',
                        advantage: true,
                    },
                    {
                        id: 'ssl',
                        name: 'SSL证书',
                        description: 'HTTPS加密证书，安全省心可信赖',
                        tags: ['多品牌', '快速签发', '自动续期'],
                        href: '/ssl',
                        buttonText: '选购',
                    },
                    {
                        id: 'ddos',
                        name: 'DDoS攻击防护',
                        description: '国内5大清洗中心，海外8大节点Anycast任播网络',
                        tags: ['全球分布', '智能防护', '稳定可靠'],
                        href: CONSOLE_LINK,
                        buttonText: '咨询',
                    },
                    {
                        id: 'sms',
                        name: '全球短信特惠',
                        description: '文本/视频短信、语音消息、号码认证等',
                        tags: ['快速稳定', '智能调度', '快速接入'],
                        href: CONSOLE_LINK,
                        buttonText: '使用',
                    },
                ],
            },
            {
                title: '智能应用',
                cards: [
                    {
                        id: 'token',
                        name: 'AI大模型网关',
                        description: '多模型AI大模型网关，一站式API接入',
                        tags: ['多模型', 'API接入', '按量计费'],
                        href: '/token',
                        buttonText: '体验',
                        advantage: true,
                    },
                    {
                        id: 'human',
                        name: '数字分身',
                        description: 'AI虚拟数字人服务，打造专属IP形象',
                        tags: ['多形象', '多语言', '快速生成'],
                        href: '/human',
                        buttonText: '体验',
                    },
                    {
                        id: 'work',
                        name: '数企知识库',
                        description: '企业级智能知识管理，提升办公效率',
                        tags: ['私有部署', '智能检索', '多格式'],
                        href: '/work',
                        buttonText: '咨询',
                    },
                    {
                        id: 'chat',
                        name: '聊天绘画',
                        description: 'AI智能对话与创作，激发无限创意',
                        tags: ['智能对话', 'AI绘画', '创意无限'],
                        href: '/chat',
                        buttonText: '体验',
                    },
                ],
            },
        ],
    },
    {
        id: 'basic-cloud',
        name: '基础云计算',
        icon: CubeIcon,
        recommend: {
            slogan: '企业级云主机',
            title: '弹性云服务器',
            description:
                '新一代企业级云主机，搭载自研分布式存储，支持秒级扩容与热迁移，99.99%可用性保障',
            tags: ['秒级交付', '弹性扩容', '热迁移'],
            primaryButton: { text: '立即选购', href: CONSOLE_LINK },
            secondaryButton: { text: '了解详情', href: '/ecs' },
        },
        cards: [
            {
                id: 'uhost-standard',
                name: '通用型云服务器',
                description: '均衡的CPU与内存配比，适合Web应用、企业办公等通用场景',
                tags: ['高性价比', '均衡配置', '快速部署'],
                href: '/ecs',
                buttonText: '选购',
            },
            {
                id: 'uhost-compute',
                name: '计算优化型',
                description: '高主频CPU，适合科学计算、游戏服务、视频编码等计算密集型场景',
                tags: ['高主频', '强计算', '低延迟'],
                href: '/ecs',
                buttonText: '选购',
            },
            {
                id: 'uhost-memory',
                name: '内存优化型',
                description: '大内存配置，适合数据库、缓存服务、大数据分析等内存密集型场景',
                tags: ['大内存', '高吞吐', '低延迟'],
                href: '/ecs',
                buttonText: '选购',
            },
            {
                id: 'uhost-storage',
                name: '存储优化型',
                description: '大容量本地存储，适合日志分析、数据仓库、媒体处理等存储密集型场景',
                tags: ['大存储', '高IOPS', '低成本'],
                href: '/ecs',
                buttonText: '选购',
            },
            {
                id: 'eip',
                name: '弹性公网IP',
                description: '独立公网IP资源，支持带宽灵活调整与跨实例绑定',
                tags: ['独立IP', '带宽可调', '跨实例'],
                href: '/ecs',
                buttonText: '使用',
            },
            {
                id: 'ebs',
                name: '云硬盘 UDisk',
                description: '高性能分布式块存储，支持快照备份与跨可用区复制',
                tags: ['高性能', '快照备份', '数据可靠'],
                href: '/ecs',
                buttonText: '使用',
            },
            {
                id: 'vpc',
                name: '私有网络 VPC',
                description: '逻辑隔离的云上私有网络，支持自定义网段、路由与安全组',
                tags: ['网络隔离', '自定义网段', '安全可控'],
                href: '/ecs',
                buttonText: '使用',
            },
            {
                id: 'ulb',
                name: '负载均衡 ULB',
                description: '流量智能分发，支持四层/七层协议，保障业务高可用',
                tags: ['流量分发', '健康检查', '高可用'],
                href: '/ecs',
                buttonText: '使用',
            },
            {
                id: 'shared-bandwidth',
                name: '共享带宽包',
                description: '多IP共享带宽资源，降低带宽成本，支持弹性扩容',
                tags: ['成本优化', '资源共享', '弹性扩容'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
        ],
    },
    {
        id: 'database',
        name: '数据库与大数据',
        icon: CircleStackIcon,
        recommend: {
            slogan: '全托管数据库',
            title: '云数据库 MySQL',
            description:
                '兼容MySQL协议，支持主从架构、读写分离，自动备份、一键容灾切换，让数据管理更简单',
            tags: ['自动备份', '主从热备', '一键容灾'],
            primaryButton: { text: '立即选购', href: CONSOLE_LINK },
            secondaryButton: { text: '了解详情', href: '/ecs' },
        },
        cards: [
            {
                id: 'mysql',
                name: '云数据库 MySQL',
                description: '兼容MySQL协议，支持主从架构、读写分离，适合Web应用与交易系统',
                tags: ['主从架构', '读写分离', '自动备份'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'redis',
                name: '云内存 Redis',
                description: '高性能内存数据库，支持集群模式，适合缓存、会话、排行榜等场景',
                tags: ['高性能', '集群模式', '持久化'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'mongodb',
                name: '云数据库 MongoDB',
                description: '分布式文档数据库，灵活Schema设计，适合内容管理、物联网等场景',
                tags: ['灵活Schema', '分布式', '高扩展'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'postgresql',
                name: '云数据库 PostgreSQL',
                description: '企业级关系型数据库，支持复杂查询与GIS扩展，适合地理信息系统',
                tags: ['复杂查询', 'GIS支持', 'ACID'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'clickhouse',
                name: '云数据库 ClickHouse',
                description: '列式存储分析数据库，秒级响应海量数据查询，适合实时分析场景',
                tags: ['列式存储', '实时分析', '高压缩'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'dts',
                name: '数据传输服务 DTS',
                description: '支持多种数据库间的数据迁移与实时同步，保障数据一致性',
                tags: ['数据迁移', '实时同步', '一致性'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'udw',
                name: '数据仓库 UDW',
                description: '分布式数据仓库，支持PB级数据分析，兼容SQL标准',
                tags: ['PB级分析', 'SQL兼容', '弹性扩展'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'kafka',
                name: '消息队列 Kafka',
                description: '高吞吐分布式消息队列，支持流处理与实时数据管道',
                tags: ['高吞吐', '流处理', '数据管道'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'elasticsearch',
                name: '日志分析 ES',
                description: '分布式搜索与分析引擎，支持日志检索、指标监控与全文搜索',
                tags: ['全文搜索', '日志分析', '可视化'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
        ],
    },
    {
        id: 'ai',
        name: '人工智能',
        icon: SparklesIcon,
        recommend: {
            slogan: 'AI 算力与平台',
            title: 'AI开发平台',
            description:
                '一站式AI开发环境，预置TensorFlow/PyTorch，支持Notebook开发、模型训练与推理部署',
            tags: ['高性能GPU', '大模型支持', '一键部署'],
            primaryButton: { text: '立即选购', href: CONSOLE_LINK },
            secondaryButton: { text: '了解详情', href: '/ai' },
        },
        cards: [
            {
                id: 'gpu-a100',
                name: 'A100 GPU云服务器',
                description: 'NVIDIA A100 80GB显存，适合大模型训练与高性能计算',
                tags: ['80GB显存', '大模型训练', '高性能'],
                href: '/gpu',
                buttonText: '选购',
            },
            {
                id: 'gpu-h800',
                name: 'H800 GPU云服务器',
                description: 'NVIDIA H800旗舰算力，支持千亿参数大模型训练',
                tags: ['旗舰算力', '千亿参数', 'NVLink'],
                href: '/gpu',
                buttonText: '选购',
            },
            {
                id: 'gpu-4090',
                name: 'RTX 4090 GPU服务器',
                description: '高性价比GPU算力，适合AI推理、渲染、视频处理',
                tags: ['高性价比', 'AI推理', '图形渲染'],
                href: '/gpu',
                buttonText: '选购',
            },
            {
                id: 'ai-platform',
                name: 'AI开发平台',
                description: '一站式AI开发环境，预置TensorFlow/PyTorch，支持Notebook开发',
                tags: ['一站式开发', '预置框架', 'Notebook'],
                href: '/ai',
                buttonText: '体验',
            },
            {
                id: 'model-deploy',
                name: '模型推理部署',
                description: '一键部署AI模型，支持自动扩缩容与多版本管理',
                tags: ['一键部署', '自动扩缩容', '版本管理'],
                href: '/ai',
                buttonText: '体验',
            },
            {
                id: 'llm-service',
                name: '大模型服务',
                description: '提供主流大模型API调用，支持文本生成、对话、代码补全',
                tags: ['API调用', '文本生成', '代码补全'],
                href: '/token',
                buttonText: '体验',
            },
            {
                id: 'ai-source',
                name: 'AI系统源码',
                description: '私有部署AI平台，支持个性化定制模型，数据完全自主可控',
                tags: ['私有部署', '个性化定制', '自主可控'],
                href: '/ai',
                buttonText: '咨询',
            },
            {
                id: 'paper',
                name: '论文创作',
                description: 'AI智能论文撰写，高效生成优质内容，辅助学术创作',
                tags: ['智能撰写', '高效生成', '学术辅助'],
                href: '/paper',
                buttonText: '体验',
            },
            {
                id: 'ocr-service',
                name: 'OCR文字识别',
                description: '支持身份证、银行卡、发票等多种证件票据识别',
                tags: ['证件识别', '票据识别', '高精度'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
        ],
    },
    {
        id: 'network-security',
        name: '网络与安全',
        icon: ShieldCheckIcon,
        recommend: {
            slogan: '全球加速',
            title: 'CDN服务',
            description:
                '快速、稳定、智能、可靠的内容加速分发服务，全球节点覆盖，智能调度保障低延迟',
            tags: ['全球节点', '智能调度', '高可用'],
            primaryButton: { text: '立即选购', href: '/cdn' },
            secondaryButton: { text: '了解详情', href: '/cdn' },
        },
        cards: [
            {
                id: 'cdn',
                name: 'CDN服务',
                description: '全球内容加速分发，智能调度低延迟，快速稳定可靠',
                tags: ['全球加速', '智能调度', '低延迟'],
                href: '/cdn',
                buttonText: '使用',
            },
            {
                id: 'ssl',
                name: 'SSL证书服务',
                description: '提供DV/OV/EV多种类型SSL证书，一键部署HTTPS加密',
                tags: ['HTTPS加密', '多类型证书', '一键部署'],
                href: '/ssl',
                buttonText: '选购',
            },
            {
                id: 'waf',
                name: 'Web应用防火墙',
                description: '防护SQL注入、XSS、CSRF等OWASP Top 10攻击，保障Web应用安全',
                tags: ['防SQL注入', '防XSS', 'CC防护'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'ddos-pro',
                name: 'DDoS高防服务',
                description: 'T级带宽清洗能力，防护大流量DDoS攻击，保障业务连续性',
                tags: ['T级清洗', '近源防护', '业务连续'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'host-security',
                name: '主机安全服务',
                description: '漏洞扫描、病毒查杀、入侵检测，全方位保护云主机安全',
                tags: ['漏洞扫描', '病毒查杀', '入侵检测'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'monitor',
                name: '云监控服务',
                description: '全方位资源监控，支持自定义告警策略与多渠道通知',
                tags: ['资源监控', '自定义告警', '多渠道通知'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'log-service',
                name: '日志服务',
                description: '日志采集、存储、检索与分析，支持实时告警与可视化',
                tags: ['日志采集', '实时检索', '可视化'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'devops',
                name: 'DevOps工具链',
                description: '代码托管、CI/CD流水线、制品管理，一站式研发效能平台',
                tags: ['CI/CD', '代码托管', '制品管理'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'container',
                name: '容器服务 UK8S',
                description: '企业级Kubernetes服务，支持集群管理、服务编排与自动扩缩容',
                tags: ['Kubernetes', '服务编排', '自动扩缩容'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
        ],
    },
    {
        id: 'hybrid',
        name: '混合云与私有云',
        icon: CloudIcon,
        recommend: {
            slogan: '自主可控',
            title: '私有云平台',
            description:
                '本地化部署的云平台，完全自主可控，满足数据安全与合规要求，支持定制开发',
            tags: ['本地部署', '自主可控', '合规'],
            primaryButton: { text: '立即咨询', href: CONSOLE_LINK },
            secondaryButton: { text: '了解详情', href: '/ecs' },
        },
        cards: [
            {
                id: 'bare-metal',
                name: '裸金属服务器',
                description: '独享物理服务器资源，无虚拟化损耗，适合高性能计算与核心数据库',
                tags: ['独享资源', '无虚拟化', '高性能'],
                href: '/cbm',
                buttonText: '选购',
            },
            {
                id: 'private-cloud',
                name: '私有云平台',
                description: '本地化部署的云平台，完全自主可控，满足数据安全与合规要求',
                tags: ['本地部署', '自主可控', '合规'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'hybrid-manager',
                name: '混合云管理平台',
                description: '统一管理公有云与私有云资源，实现跨云调度与成本优化',
                tags: ['统一管理', '跨云调度', '成本优化'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'direct-connect',
                name: '专线接入',
                description: '高速专线连接本地数据中心与云端，低延迟、高安全的数据传输',
                tags: ['高速专线', '低延迟', '数据安全'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'vpn',
                name: 'VPN网关',
                description: '加密隧道连接企业内网与云端，灵活组网，快速部署',
                tags: ['加密隧道', '灵活组网', '快速部署'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'sd-wan',
                name: 'SD-WAN服务',
                description: '智能广域网组网，动态路径选择，优化分支机构网络体验',
                tags: ['智能组网', '动态路径', '分支互联'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'colocation',
                name: '机柜托管服务',
                description: '提供标准机柜托管，配套电力、空调、消防等基础设施',
                tags: ['机柜托管', '基础设施', '运维支持'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'disaster-recovery',
                name: '容灾备份服务',
                description: '跨地域容灾架构，支持热备、温备、冷备多种方案',
                tags: ['跨地域容灾', '数据备份', '业务连续'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'migration',
                name: '迁移服务',
                description: '专业迁移团队，提供评估、规划、实施一站式迁移服务',
                tags: ['专业团队', '一站式服务', '平滑迁移'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
        ],
    },
    {
        id: 'communication',
        name: '云通信与企业应用',
        icon: ChatBubbleLeftRightIcon,
        recommend: {
            slogan: '全场景通信',
            title: '验证码短信',
            description:
                '三网合一通道，秒级到达，支持国际短信发送，助力企业高效触达用户',
            tags: ['秒级到达', '三网合一', '国际短信'],
            primaryButton: { text: '立即选购', href: CONSOLE_LINK },
            secondaryButton: { text: '了解详情', href: CONSOLE_LINK },
        },
        cards: [
            {
                id: 'sms-verify',
                name: '验证码短信',
                description: '三网合一通道，秒级到达，支持国际短信发送',
                tags: ['秒级到达', '三网合一', '国际短信'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'sms-notify',
                name: '通知短信',
                description: '订单通知、物流提醒、账单通知等场景，高到达率保障',
                tags: ['高到达率', '场景丰富', '模板审核'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'sms-marketing',
                name: '营销短信',
                description: '会员营销、活动推广，精准触达目标用户',
                tags: ['精准营销', '会员触达', '效果追踪'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
            {
                id: 'voice-call',
                name: '语音通知',
                description: '电话语音通知，适合紧急告警、订单确认等场景',
                tags: ['电话通知', '紧急告警', '高接通率'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'privacy-number',
                name: '隐私号服务',
                description: '中间号保护真实号码，适合网约车、外卖等隐私保护场景',
                tags: ['隐私保护', '中间号', '通话录音'],
                href: CONSOLE_LINK,
                buttonText: '咨询',
            },
            {
                id: 'im-service',
                name: '即时通讯 IM',
                description: '支持单聊、群聊、消息推送，快速构建社交与客服场景',
                tags: ['单聊群聊', '消息推送', '多端同步'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'live-streaming',
                name: '直播服务',
                description: '低延迟直播推拉流，支持百万级并发观看',
                tags: ['低延迟', '高并发', '多终端'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'rtc',
                name: '实时音视频 RTC',
                description: '毫秒级延迟音视频通话，支持1v1与多人会议场景',
                tags: ['毫秒级延迟', '多人会议', '跨平台'],
                href: CONSOLE_LINK,
                buttonText: '使用',
            },
            {
                id: 'email-service',
                name: '企业邮箱',
                description: '专业企业邮箱服务，无限容量、安全反垃圾、多终端同步',
                tags: ['无限容量', '反垃圾', '多终端'],
                href: CONSOLE_LINK,
                buttonText: '选购',
            },
        ],
    },
]

/** 按钮图标映射（对应 下载/体验/使用/选购/咨询） */
const buttonIconMap: Record<ButtonText, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    下载: ArrowDownTrayIcon,
    体验: PlayIcon,
    使用: BoltIcon,
    选购: ShoppingCartIcon,
    咨询: ChatBubbleLeftRightIcon,
}

/**
 * 产品优势组件属性接口
 */
interface SuperiorityProps {
    /** 自定义标题（可包含渐变关键词节点） */
    title?: React.ReactNode
    /** 头部小字标签 */
    subtitle?: string
    /** 兼容保留：新版布局不再展示描述文案 */
    description?: string
    /** 探索更多链接文案 */
    linkText?: string
    /** 探索更多链接地址 */
    linkHref?: string
    /** 自定义CSS类名 */
    className?: string
    /** 是否显示背景装饰 */
    showBackground?: boolean
}

/**
 * 区块头部箭头图标（白色斜上箭头，参考页同款路径）
 */
function SectionArrowIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M8.2719 8H16.0501V15.7782M15.1706 8.87946L8.02441 16.0257"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </svg>
    )
}

/**
 * 优势标签前的小星标图标（参考页同款路径）
 */
function AdvantageTagIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M8.00002 4.85757C10.4853 4.85757 12.5 6.90415 12.5 9.42876C12.5 11.9534 10.4853 14 8.00002 14C5.51473 14 3.5 11.9534 3.5 9.42876C3.5 6.90415 5.51473 4.85757 8.00002 4.85757ZM8.00002 6.85746L7.25611 8.38864L5.59265 8.63417L6.79633 9.82609L6.51218 11.509L8.00002 10.7144L9.48783 11.509L9.20371 9.82609L10.4074 8.63417L8.74392 8.38864L8.00002 6.85746ZM8.56251 2L11.375 2.00057V3.71477L10.6081 4.36477C9.98596 4.03344 9.29518 3.81697 8.56314 3.74305L8.56251 2ZM7.43751 2L7.43734 3.74301C6.70536 3.81685 6.01464 4.03325 5.39249 4.36447L4.62501 3.71477V2.00057L7.43751 2Z"
                fill="#3860f4"
                fillOpacity="0.9"
            />
        </svg>
    )
}

/**
 * 产品卡片渲染
 * 桌面端：hover 标题变蓝、箭头滑入、右侧按钮滑入、流光边框旋转
 * 移动端：扁平列表（隐藏箭头与按钮）
 */
function SuperiorityCardView({ card }: { card: SuperiorityCard }) {
    const ButtonIcon = buttonIconMap[card.buttonText]

    return (
        <div className={styles.cardWrap}>
            <div className={styles.card}>
                {/* 整卡链接层 */}
                <a className={styles.cardLink} href={card.href} aria-label={card.name} />

                <div className={styles.cardInner}>
                    <div className={styles.cardHd}>
                        <div className={styles.cardTitle}>{card.name}</div>
                        <span className={styles.cardArrow} aria-hidden="true">
                            <ArrowRightIcon className={styles.cardArrowIcon} />
                        </span>
                    </div>
                    <div className={styles.cardDesc}>{card.description}</div>
                    <div className={styles.cardTags}>
                        {card.tags.map((tag, index) => {
                            const isAdvantage = index === 0 && card.advantage
                            return (
                                <span
                                    key={tag}
                                    className={clsx(styles.cardTag, isAdvantage && styles.cardTagAdvantage)}
                                >
                                    {isAdvantage && (
                                        <span className={styles.cardTagAdvantageIcon}>
                                            <AdvantageTagIcon />
                                        </span>
                                    )}
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                </div>

                {/* 悬停时滑入的操作按钮 */}
                <div className={styles.cardBtnWrap}>
                    <a className={styles.cardBtn} href={card.href}>
                        <span className={styles.cardBtnIcon} aria-hidden="true">
                            <ButtonIcon className={styles.cardBtnIconSvg} />
                        </span>
                        <span className={styles.cardBtnText}>{card.buttonText}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

/**
 * 推荐卡渲染（非热门面板左侧，含主/次两个按钮）
 */
function RecommendView({ recommend }: { recommend: SuperiorityRecommend }) {
    return (
        <div className={styles.recommends}>
            <div className={styles.recommend}>
                <div className={styles.recommendInner}>
                    <div className={styles.recommendSlogn}>
                        <span className={styles.recommendSlognIcon} aria-hidden="true">
                            <SparklesIcon className={styles.recommendSlognIconSvg} />
                        </span>
                        <span className={styles.recommendSlognText}>{recommend.slogan}</span>
                    </div>
                    <div className={styles.recommendHd}>
                        <div className={styles.recommendTitle}>{recommend.title}</div>
                    </div>
                    <div className={styles.recommendDesc}>{recommend.description}</div>
                    <div className={styles.recommendTags}>
                        {recommend.tags.map((tag) => (
                            <span key={tag} className={styles.recommendTag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.recommendBtns}>
                        <a
                            className={clsx(styles.recommendBtn, styles.recommendBtnPrimary)}
                            href={recommend.primaryButton.href}
                        >
                            <span className={styles.recommendBtnText}>{recommend.primaryButton.text}</span>
                        </a>
                        <a
                            className={clsx(styles.recommendBtn, styles.recommendBtnWeak)}
                            href={recommend.secondaryButton.href}
                        >
                            <span>{recommend.secondaryButton.text}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * 产品优势展示组件 — 参考设计（腾讯云产品体系区块）复刻版
 *
 * @param title - 标题
 * @param subtitle - 头部小字标签
 * @param description - 兼容保留（新版布局不展示）
 * @param linkText - 探索更多链接文案
 * @param linkHref - 探索更多链接地址
 * @param className - 自定义类名
 * @param showBackground - 是否显示背景装饰
 */
export function Superiority({
    title = (
        <>
            全栈产品体系&nbsp;&nbsp;助力企业实现&nbsp;&nbsp;
            <span className={styles.linear}>AI 转型</span>
        </>
    ),
    subtitle = '优刻云产品',
    linkText = '探索更多云产品',
    linkHref = '/ecs',
    className,
    showBackground = true,
}: SuperiorityProps) {
    const [activeTabId, setActiveTabId] = useState(superiorTabs[0].id)
    const [openListKeys, setOpenListKeys] = useState<Set<string>>(
        () =>
            new Set(
                superiorTabs.flatMap((tab) =>
                    (tab.lists ?? []).map((list) => `${tab.id}:${list.title}`),
                ),
            ),
    )

    /** 标签按钮引用（移动端横向滚动时定位激活项） */
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

    const activeTab = superiorTabs.find((tab) => tab.id === activeTabId) ?? superiorTabs[0]

    /** 切换标签后，移动端将激活标签滚动到可视区域居中 */
    useEffect(() => {
        // 仅在移动端横向滚动场景下执行，避免桌面端误触发页面滚动
        if (!window.matchMedia('(max-width: 768px)').matches) {
            return
        }
        const activeEl = tabRefs.current[activeTabId]
        if (activeEl) {
            activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        }
    }, [activeTabId])

    /** 切换标签：重置分组展开状态为全部展开 */
    const handleTabChange = (tab: SuperiorityTab) => {
        setActiveTabId(tab.id)
        setOpenListKeys(new Set((tab.lists ?? []).map((list) => `${tab.id}:${list.title}`)))
    }

    /** 移动端手风琴：展开/收起分组 */
    const toggleList = (key: string) => {
        setOpenListKeys((prev) => {
            const next = new Set(prev)
            if (next.has(key)) {
                next.delete(key)
            } else {
                next.add(key)
            }
            return next
        })
    }

    return (
        <section
            className={clsx(styles.section, showBackground && styles.sectionBg, className)}
            aria-label="产品优势展示"
        >
            <div className={styles.inner}>
                <Container>
                    {/* ── 区块头部 ── */}
                    <div className={styles.hd}>
                        <div className={styles.tag}>{subtitle}</div>
                        <div className={styles.hdMain}>
                            <h2 className={styles.title}>{title}</h2>
                            <a className={styles.hdLink} href={linkHref}>
                                <span>{linkText}</span>
                                <span className={styles.hdLinkIcon} aria-hidden="true">
                                    <span className={styles.hdLinkArrow}>
                                        <SectionArrowIcon />
                                    </span>
                                    <span className={styles.hdLinkArrowHover}>
                                        <SectionArrowIcon />
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* ── 分类标签栏 ── */}
                    <div className={styles.tabBar} role="tablist" aria-label="产品分类">
                        <div className={styles.tabBarInner}>
                            {superiorTabs.map((tab) => {
                                const isActive = tab.id === activeTabId
                                return (
                                    <button
                                        key={tab.id}
                                        ref={(node) => {
                                            tabRefs.current[tab.id] = node
                                        }}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        className={clsx(styles.tabItem, isActive && styles.tabItemActive)}
                                        onClick={() => handleTabChange(tab)}
                                        onMouseEnter={() => handleTabChange(tab)}
                                    >
                                        <span className={styles.tabIcon} aria-hidden="true">
                                            <tab.icon className={styles.tabIconSvg} />
                                        </span>
                                        <span className={styles.tabText}>{tab.name}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* ── 内容面板 ── */}
                    <div className={styles.tabContent}>
                        {superiorTabs.map((tab) => {
                            const isActive = tab.id === activeTabId
                            return (
                                <div
                                    key={tab.id}
                                    role="tabpanel"
                                    className={clsx(styles.panel, isActive && styles.panelActive)}
                                >
                                    {tab.hot ? (
                                        /* 热门推荐：4 列分组列表 */
                                        <div className={styles.contentHot}>
                                            {(tab.lists ?? []).map((list) => {
                                                const listKey = `${tab.id}:${list.title}`
                                                const isOpen = openListKeys.has(listKey)
                                                return (
                                                    <div
                                                        key={listKey}
                                                        className={clsx(styles.list, isOpen && styles.listOpen)}
                                                    >
                                                        <div
                                                            className={styles.listHd}
                                                            onClick={() => toggleList(listKey)}
                                                        >
                                                            <div className={styles.listTitle}>{list.title}</div>
                                                            <span className={styles.listHdArrow} aria-hidden="true">
                                                                <ChevronDownIcon className={styles.listHdArrowIcon} />
                                                            </span>
                                                        </div>
                                                        <div className={styles.listContent}>
                                                            {list.cards.map((card) => (
                                                                <SuperiorityCardView key={card.id} card={card} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        /* 其他分类：推荐卡 + 卡片网格 */
                                        <div className={styles.content}>
                                            {tab.recommend && <RecommendView recommend={tab.recommend} />}
                                            <div className={styles.cards}>
                                                {(tab.cards ?? []).map((card) => (
                                                    <div key={card.id} className={styles.cardWrapGrid}>
                                                        <SuperiorityCardView card={card} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </div>
        </section>
    )
}

/**
 * 默认导出产品优势组件
 */
export default Superiority
