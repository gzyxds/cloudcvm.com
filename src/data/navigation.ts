import {
  ServerIcon,
  ComputerDesktopIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  ChartPieIcon,
  PhotoIcon,
  PencilSquareIcon,
  VideoCameraIcon,
  SparklesIcon,
  FilmIcon,
  UserIcon,
  MusicalNoteIcon,
  PresentationChartBarIcon,
  DocumentDuplicateIcon,
  ScissorsIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  BanknotesIcon,
  CommandLineIcon,
  PlayCircleIcon,
  PhoneIcon,
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  BeakerIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import type {
  MegaMenuCategory,
  FooterAction,
  QuickTag,
} from '@/components/MegaMenu'

/**
 * 云计算产品与服务 - 二级菜单分类数据
 *
 * 参考腾讯云产品菜单结构，按功能领域组织产品
 */
export const productCategories: MegaMenuCategory[] = [
  {
    id: 'compute',
    name: '计算',
    icon: CpuChipIcon,
    isHot: true,
    items: [
      {
        id: 'ecs',
        name: '云服务器ECS',
        description: '稳定高效的计算服务',
        href: '/ecs',
        icon: ServerIcon,
        badgeType: 'hot',
        tag: 'HOT',
      },
      {
        id: 'gpu',
        name: 'GPU云服务器',
        description: 'GPU算力·并行计算·弹性服务',
        href: '/gpu',
        icon: CpuChipIcon,
        badgeType: 'hot',
        tag: 'HOT',
      },
      {
        id: 'lighthouse',
        name: '轻量应用服务器',
        description: '开箱即用·高性价比·快速部署',
        href: '/lighthouse',
        icon: SparklesIcon,
        badgeType: 'new',
        tag: 'NEW',
      },
      {
        id: 'cbm',
        name: '裸金属云服务器',
        description: '独享物理资源，兼具云端弹性与裸机高性能',
        href: '/cbm',
        icon: RectangleGroupIcon,
      },
      {
        id: 'windows',
        name: '云电脑桌面',
        description: '便捷安全的远程办公，随时随地云端工作',
        href: '/windows',
        icon: ComputerDesktopIcon,
      },
      {
        id: 'host',
        name: '虚拟主机',
        description: '简单易用的建站服务，快速搭建企业官网',
        href: '/host',
        icon: GlobeAltIcon,
      },
      {
        id: 'server',
        name: '独立服务器',
        description: '专属物理服务器租用，高性能稳定可靠',
        href: '/server',
        icon: ArrowPathIcon,
      },
    ],
    featured: [
      {
        id: 'ecs',
        name: '云服务器ECS',
        description: '安全稳定、弹性可扩展的云端计算服务，分钟级交付',
        href: '/ecs',
        badgeType: 'hot',
        tag: 'HOT',
        icon: ServerIcon,
        index: 0,
      },
      {
        id: 'gpu',
        name: 'GPU云服务器',
        description: '提供GPU算力的弹性计算服务，超强并行计算能力',
        href: '/gpu',
        badgeType: 'hot',
        tag: 'HOT',
        icon: CpuChipIcon,
        index: 1,
      },
      {
        id: 'lighthouse',
        name: '轻量应用服务器',
        description: '面向轻量应用场景的云服务器，精选镜像一键部署',
        href: '/lighthouse',
        icon: SparklesIcon,
        index: 2,
      },
      {
        id: 'cbm',
        name: '裸金属云服务器',
        description: '独享物理资源，兼具云端弹性与裸机性能',
        href: '/cbm',
        icon: RectangleGroupIcon,
        index: 3,
      },
    ],
  },
  {
    id: 'network',
    name: '网络与加速',
    icon: CloudIcon,
    items: [
      {
        id: 'cdn',
        name: 'CDN服务',
        description: '全球内容加速分发，智能调度低延迟',
        href: '/cdn',
        icon: SquaresPlusIcon,
      },
      {
        id: 'ssl',
        name: 'SSL证书',
        description: 'HTTPS加密证书，安全省心可信赖',
        href: '/ssl',
        icon: ShieldCheckIcon,
        badgeType: 'new',
        tag: 'NEW',
      },
    ],
    featured: [
      {
        id: 'cdn',
        name: 'CDN服务',
        description: '快速、稳定、智能、可靠的内容加速服务',
        href: '/cdn',
        icon: SquaresPlusIcon,
        index: 1,
      },
      {
        id: 'ssl',
        name: 'SSL证书',
        description: '专业域名服务，安全、省心、可信赖',
        href: '/ssl',
        icon: ShieldCheckIcon,
        index: 2,
      },
    ],
  },
  {
    id: 'storage',
    name: '存储与数据库',
    icon: CircleStackIcon,
    items: [
      {
        id: 'cdn-storage',
        name: '对象存储',
        description: '安全稳定、弹性易用的海量云存储服务',
        href: '/oss',
        icon: CircleStackIcon,
      },
    ],
    featured: [
      {
        id: 'cdn-storage',
        name: '对象存储',
        description: '安全稳定、弹性易用、低成本的海量云存储服务',
        href: '/oss',
        icon: CircleStackIcon,
        index: 1,
      },
    ],
  },
]

/**
 * 人工智能与应用 - 二级菜单分类数据（从产品分类中独立）
 */
export const aiAppCategories: MegaMenuCategory[] = [
  {
    id: 'ai',
    name: '人工智能',
    icon: BeakerIcon,
    isHot: true,
    items: [
      {
        id: 'ai',
        name: '艺创AI',
        description: '私有部署AI平台，支持个性化定制模型',
        href: '/ai',
        icon: CursorArrowRaysIcon,
        badgeType: 'hot',
        tag: 'HOT',
      },
      {
        id: 'human',
        name: '数字分身',
        description: 'AI虚拟数字人服务，打造专属IP形象',
        href: '/human',
        icon: ChartPieIcon,
      },
      {
        id: 'work',
        name: '数企知识库',
        description: '企业级智能知识管理，提升办公效率',
        href: '/work',
        icon: FingerPrintIcon,
      },
      {
        id: 'chat',
        name: '聊天绘画',
        description: 'AI智能对话与创作，激发无限创意',
        href: '/chat',
        icon: ChartPieIcon,
      },
      {
        id: 'paper',
        name: '论文创作',
        description: 'AI智能论文撰写，高效生成优质内容',
        href: '/paper',
        icon: SquaresPlusIcon,
      },
      {
        id: 'ai-model',
        name: 'AI大模型',
        description: '多模型AI大模型网关，一站式API接入',
        href: '/token',
        icon: SparklesIcon,
      },
      {
        id: 'demo',
        name: '体验产品',
        description: '在线体验AI产品，直观感受智能能力',
        href: '/demo',
        icon: PlayCircleIcon,
      },
    ],
    featured: [
      {
        id: 'ai',
        name: '艺创AI',
        description: '私有部署AI平台，支持个性化定制',
        href: '/ai',
        badgeType: 'hot',
        tag: 'HOT',
        icon: CursorArrowRaysIcon,
        index: 1,
      },
      {
        id: 'human',
        name: '数字分身',
        description: 'AI虚拟数字人服务，打造专属IP形象',
        href: '/human',
        icon: ChartPieIcon,
        index: 2,
      },
      {
        id: 'work',
        name: '数企知识库',
        description: '企业级智能知识管理，提升办公效率',
        href: '/work',
        icon: FingerPrintIcon,
        index: 3,
      },
    ],
  },
]


/**
 * AI解决方案 - 二级菜单分类数据
 */
export const aiSolutionCategories: MegaMenuCategory[] = [
  {
    id: 'ai-creation',
    name: 'AI创作',
    icon: SparklesIcon,
    isHot: true,
    items: [
      {
        id: 'banana',
        name: '香蕉绘画',
        description: 'AI图像生成系统，文生图图生图智能创作',
        href: '/banana',
        icon: PhotoIcon,
      },
      {
        id: 'jimeng',
        name: '即梦AI视频',
        description: 'AI视频生成系统，文字描述一键生成视频',
        href: '/jimeng',
        icon: VideoCameraIcon,
      },
      {
        id: 'jmdraw',
        name: '即梦AI绘画',
        description: 'AI绘画生成系统，释放创意无限可能',
        href: '/jmdraw',
        icon: SparklesIcon,
      },
      {
        id: 'manju',
        name: '漫剧创作',
        description: '角色模板视频生成，快速创作漫剧内容',
        href: '/manju',
        icon: FilmIcon,
      },
    ],
    featured: [
      {
        id: 'banana',
        name: '香蕉绘画',
        description: 'AI图像生成系统，文生图图生图智能创作',
        href: '/banana',
        icon: PhotoIcon,
        index: 1,
      },
      {
        id: 'jimeng',
        name: '即梦AI视频',
        description: 'AI视频生成系统，文字描述一键生成视频',
        href: '/jimeng',
        icon: VideoCameraIcon,
        index: 2,
      },
    ],
  },
  {
    id: 'content-production',
    name: '内容生产',
    icon: MusicalNoteIcon,
    items: [
      {
        id: 'music',
        name: 'AI音乐',
        description: 'AI智能音乐生成，自定义风格旋律创作',
        href: '/music',
        icon: MusicalNoteIcon,
      },
      {
        id: 'ppt',
        name: 'AI PPT',
        description: '智能演示文稿制作，一键生成精美幻灯片',
        href: '/ppt',
        icon: PresentationChartBarIcon,
      },
      {
        id: 'drama',
        name: '短剧小说创作',
        description: 'AI网文短剧写作工具，高效创作优质内容',
        href: '/drama',
        icon: PencilSquareIcon,
      },
    ],
    featured: [
      {
        id: 'music',
        name: 'AI音乐',
        description: 'AI智能音乐生成，自定义风格旋律创作',
        href: '/music',
        icon: MusicalNoteIcon,
        index: 1,
      },
      {
        id: 'ppt',
        name: 'AI PPT',
        description: '智能演示文稿制作，一键生成精美幻灯片',
        href: '/ppt',
        icon: PresentationChartBarIcon,
        index: 2,
      },
    ],
  },
  {
    id: 'marketing',
    name: '营销工具',
    icon: UserIcon,
    items: [
      {
        id: 'model',
        name: '电商试衣换装',
        description: 'AI模特换装系统，快速生成商品展示图',
        href: '/model',
        icon: UserIcon,
      },
      {
        id: 'resume',
        name: 'AI简历',
        description: '智能简历生成系统，助力职业发展',
        href: '/resume',
        icon: DocumentDuplicateIcon,
      },
      {
        id: 'xhs',
        name: '小红书助手',
        description: '热门内容创作工具，提升社交媒体影响力',
        href: '/xhs',
        icon: DocumentTextIcon,
      },
    ],
    featured: [
      {
        id: 'model',
        name: '电商试衣换装',
        description: 'AI模特换装系统，快速生成商品展示图',
        href: '/model',
        icon: UserIcon,
        index: 1,
      },
    ],
  },
  {
    id: 'video',
    name: '视频处理',
    icon: VideoCameraIcon,
    items: [
      {
        id: 'sora',
        name: 'Sora视频生成',
        description: 'AI视频创作系统，文本描述生成高质量视频',
        href: '/sora',
        icon: VideoCameraIcon,
      },
      {
        id: 'videoclip',
        name: '视频混剪助手',
        description: '智能视频剪辑工具，快速完成视频混剪',
        href: '/videoclip',
        icon: ScissorsIcon,
      },
    ],
    featured: [
      {
        id: 'sora',
        name: 'Sora视频生成',
        description: 'AI视频创作系统',
        href: '/sora',
        icon: VideoCameraIcon,
        index: 1,
      },
    ],
  },
]

/**
 * 企业解决方案 - 二级菜单分类数据
 */
export const enterpriseCategories: MegaMenuCategory[] = [
  {
    id: 'industry',
    name: '行业解决方案',
    icon: GlobeAltIcon,
    items: [
      {
        id: 'mobile',
        name: '移动解决方案',
        description: '移动应用云上部署，弹性扩展高可用',
        href: '/mobile',
        icon: DevicePhoneMobileIcon,
      },
      {
        id: 'game',
        name: '游戏解决方案',
        description: '低延迟高防护游戏云，畅玩无忧',
        href: '/game',
        icon: GlobeAltIcon,
      },
      {
        id: 'finance',
        name: '金融解决方案',
        description: '安全合规金融云方案，稳定可靠',
        href: '/finance',
        icon: BanknotesIcon,
      },
      {
        id: 'ecommerce',
        name: '电商解决方案',
        description: '全场景电商云方案，智能高效运营',
        href: '/ecommerce',
        icon: ChartPieIcon,
      },
      {
        id: 'cms',
        name: 'CMS解决方案',
        description: '内容管理系统上云，高效管理数字内容',
        href: '/cms',
        icon: DocumentTextIcon,
      },
    ],
    featured: [
      {
        id: 'ecommerce',
        name: '电商解决方案',
        description: '全场景电商云方案，智能高效运营',
        href: '/ecommerce',
        icon: ChartPieIcon,
        index: 1,
      },
      {
        id: 'game',
        name: '游戏解决方案',
        description: '低延迟高防护游戏云，畅玩无忧',
        href: '/game',
        icon: GlobeAltIcon,
        index: 2,
      },
    ],
  },
  {
    id: 'gov-retail',
    name: '政务与零售',
    icon: ShieldCheckIcon,
    items: [
      {
        id: 'video',
        name: '视频解决方案',
        description: '视频行业专属方案，海量数据高效处理',
        href: '/video',
        icon: ShieldCheckIcon,
      },
      {
        id: 'gov',
        name: '政府解决方案',
        description: '数字政府场景化方案，安全合规',
        href: '/gov',
        icon: ShieldCheckIcon,
      },
      {
        id: 'retail',
        name: '零售解决方案',
        description: '零售行业数字化方案，线上线下融合',
        href: '/retail',
        icon: SquaresPlusIcon,
      },
    ],
    featured: [
      {
        id: 'gov',
        name: '政府解决方案',
        description: '数字政府场景化方案，安全合规',
        href: '/gov',
        icon: ShieldCheckIcon,
        index: 1,
      },
    ],
  },
]

/**
 * 关于我们 - 二级菜单分类数据
 */
export const companyCategories: MegaMenuCategory[] = [
  {
    id: 'company-info',
    name: '公司信息',
    icon: UserIcon,
    items: [
      {
        id: 'about',
        name: '关于我们',
        description: '了解公司历史、文化与团队风采',
        href: '/about',
        icon: UserIcon,
      },
      {
        id: 'support',
        name: '技术支持',
        description: '7×24小时专业技术支持与帮助',
        href: '/support',
        icon: PhoneIcon,
      },
      {
        id: 'agent',
        name: '推广合作',
        description: '合作伙伴计划，携手共拓商业新机遇',
        href: '/agent',
        icon: DocumentTextIcon,
      },
      {
        id: 'contact',
        name: '联系我们',
        description: '售前咨询与商务合作联系方式',
        href: '/contact',
        icon: UserIcon,
      },
    ],
    featured: [
      {
        id: 'about',
        name: '关于我们',
        description: '了解公司历史与文化',
        href: '/about',
        icon: UserIcon,
        index: 1,
      },
      {
        id: 'support',
        name: '技术支持',
        description: '获取专业技术帮助',
        href: '/support',
        icon: PhoneIcon,
        index: 2,
      },
    ],
  },
]

/**
 * 文档中心 - 二级菜单分类数据
 */
export const docsCategories: MegaMenuCategory[] = [
  {
    id: 'docs-all',
    name: '文档资源',
    icon: DocumentTextIcon,
    items: [
      {
        id: 'help',
        name: '帮助文档',
        description: '快速入门指南、常见问题与操作教程',
        href: '/help',
        icon: PhoneIcon,
      },
      {
        id: 'api',
        name: 'API 文档',
        description: '完整的API参考文档与代码示例',
        href: '/api',
        icon: DocumentTextIcon,
      },
      {
        id: 'sdk',
        name: 'SDK 文档',
        description: '多语言SDK使用指南与开发集成',
        href: '/sdk',
        icon: CommandLineIcon,
      },
      {
        id: 'changelog',
        name: '产品动态',
        description: '最新产品更新公告与新功能发布',
        href: '/changelog',
        icon: SparklesIcon,
      },
      {
        id: 'quickstart',
        name: '快速入门',
        description: '5分钟快速部署首个云服务器实例',
        href: '/quickstart',
        icon: PlayCircleIcon,
      },
      {
        id: 'cli',
        name: 'CLI 工具',
        description: '云命令行工具，高效管理云资源',
        href: '/cli',
        icon: CommandLineIcon,
      },
    ],
    featured: [
      {
        id: 'quickstart',
        name: '快速入门',
        description: '5分钟快速部署首个云服务器',
        href: '/quickstart',
        icon: PlayCircleIcon,
        index: 1,
      },
      {
        id: 'api',
        name: 'API 文档',
        description: '完整的API参考与示例',
        href: '/api',
        icon: DocumentTextIcon,
        index: 2,
      },
    ],
  },
]

/**
 * 通用底部操作按钮
 */
export const commonFooterActions: FooterAction[] = [
  { name: '产品文档', href: '/docs', icon: PlayCircleIcon },
  { name: '联系销售', href: '/contact', icon: PhoneIcon },
]

/**
 * 产品快捷标签
 */
export const productQuickTags: QuickTag[] = [
  { name: '云服务器', href: '/ecs' },
  { name: 'CDN加速', href: '/cdn' },
  { name: '虚拟主机', href: '/host' },
  { name: '云开发', href: '/ai' },
]

/**
 * AI产品快捷标签
 */
export const aiQuickTags: QuickTag[] = [
  { name: '艺创AI', href: '/ai' },
  { name: '数字分身', href: '/human' },
  { name: 'AI绘画', href: '/banana' },
  { name: 'AI视频', href: '/jimeng' },
]

/**
 * 企业方案快捷标签
 */
export const enterpriseQuickTags: QuickTag[] = [
  { name: '电商方案', href: '/ecommerce' },
  { name: '游戏方案', href: '/game' },
  { name: '金融方案', href: '/finance' },
  { name: '移动方案', href: '/mobile' },
]

/* ─────────────────────── 移动端菜单配置 ─────────────────────── */

export interface MobileMenuSection {
  label: string
  categories: MegaMenuCategory[]
  showFooter?: boolean
}

/**
 * 移动端菜单分区配置
 *
 * 从现有的 MegaMenuCategory 数据派生，保证桌面端 MegaMenu
 * 和移动端 Disclosure 使用同一份产品数据，避免数据不同步。
 */
export const mobileMenuSections: MobileMenuSection[] = [
  {
    label: '产品与服务',
    categories: productCategories,
    showFooter: true,
  },
  {
    label: '人工智能与应用',
    categories: aiAppCategories,
    showFooter: false,
  },
  {
    label: 'AI解决方案',
    categories: aiSolutionCategories,
    showFooter: false,
  },
  {
    label: '企业解决方案',
    categories: enterpriseCategories,
    showFooter: false,
  },
  {
    label: '关于我们',
    categories: companyCategories,
    showFooter: false,
  },
  {
    label: '文档中心',
    categories: docsCategories,
    showFooter: false,
  },
]
