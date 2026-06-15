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
        id: 'windows',
        name: '云电脑桌面',
        description: '便捷安全的远程办公',
        href: '/windows',
        icon: ComputerDesktopIcon,
      },
      {
        id: 'host',
        name: '虚拟主机',
        description: '简单易用的建站服务',
        href: '/host',
        icon: FingerPrintIcon,
      },
      {
        id: 'server',
        name: '独立服务器',
        description: '专属物理服务器租用',
        href: '/server',
        icon: ArrowPathIcon,
      },
    ],
    featured: [
      {
        id: 'ecs',
        name: '云服务器ECS',
        description: '安全稳定、高弹性的计算服务',
        href: '/ecs',
        badgeType: 'hot',
        tag: 'HOT',
        icon: ServerIcon,
        index: 1,
      },
      {
        id: 'windows',
        name: '云电脑桌面',
        description: '即开即用，轻量应用场景首选',
        href: '/windows',
        icon: ComputerDesktopIcon,
        index: 2,
      },
      {
        id: 'host',
        name: '虚拟主机',
        description: '简单易用的建站服务，快速部署上线',
        href: '/host',
        icon: FingerPrintIcon,
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
        description: '全球内容加速分发',
        href: '/cdn',
        icon: SquaresPlusIcon,
      },
      {
        id: 'ssl',
        name: 'SSL证书',
        description: 'HTTPS加密',
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
    id: 'ai',
    name: '人工智能',
    icon: BeakerIcon,
    isHot: true,
    items: [
      {
        id: 'ai',
        name: '艺创AI',
        description: '私有部署个性化定制',
        href: '/ai',
        icon: CursorArrowRaysIcon,
        badgeType: 'hot',
        tag: 'HOT',
      },
      {
        id: 'human',
        name: '数字分身',
        description: '虚拟数字人服务',
        href: '/human',
        icon: ChartPieIcon,
      },
      {
        id: 'work',
        name: '数企知识库',
        description: '智能知识管理',
        href: '/work',
        icon: FingerPrintIcon,
      },
      {
        id: 'chat',
        name: '聊天绘画',
        description: '智能对话与创作',
        href: '/chat',
        icon: ChartPieIcon,
      },
      {
        id: 'paper',
        name: '论文创作',
        description: '智能内容生成',
        href: '/paper',
        icon: SquaresPlusIcon,
      },
      {
        id: 'demo',
        name: '体验产品',
        description: '产品演示',
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
        description: '虚拟数字人服务，打造专属IP形象',
        href: '/human',
        icon: ChartPieIcon,
        index: 2,
      },
      {
        id: 'work',
        name: '数企知识库',
        description: '智能知识管理，提升企业办公效率',
        href: '/work',
        icon: FingerPrintIcon,
        index: 3,
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
        description: '海量数据存储服务',
        href: '/oss',
        icon: SquaresPlusIcon,
      },
    ],
    featured: [
      {
        id: 'cdn-storage',
        name: '对象存储',
        description: '安全稳定、弹性易用、低成本的海量云存储服务',
        href: '/oss',
        icon: SquaresPlusIcon,
        index: 1,
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
        description: 'AI图像生成系统',
        href: '/banana',
        icon: PhotoIcon,
      },
      {
        id: 'jimeng',
        name: '即梦AI视频',
        description: 'AI视频生成系统',
        href: '/jimeng',
        icon: VideoCameraIcon,
      },
      {
        id: 'jmdraw',
        name: '即梦AI绘画',
        description: 'AI绘画生成系统',
        href: '/jmdraw',
        icon: SparklesIcon,
      },
      {
        id: 'manju',
        name: '漫剧创作',
        description: '角色模板视频生成',
        href: '/manju',
        icon: FilmIcon,
      },
    ],
    featured: [
      {
        id: 'banana',
        name: '香蕉绘画',
        description: 'AI图像生成系统',
        href: '/banana',
        icon: PhotoIcon,
        index: 1,
      },
      {
        id: 'jimeng',
        name: '即梦AI视频',
        description: 'AI视频生成系统',
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
        description: 'AI音乐生成系统',
        href: '/music',
        icon: MusicalNoteIcon,
      },
      {
        id: 'ppt',
        name: 'AI PPT',
        description: '智能演示文稿制作',
        href: '/ppt',
        icon: PresentationChartBarIcon,
      },
      {
        id: 'drama',
        name: '短剧小说创作',
        description: '网文短剧写作工具',
        href: '/drama',
        icon: PencilSquareIcon,
      },
    ],
    featured: [
      {
        id: 'music',
        name: 'AI音乐',
        description: 'AI音乐生成系统',
        href: '/music',
        icon: MusicalNoteIcon,
        index: 1,
      },
      {
        id: 'ppt',
        name: 'AI PPT',
        description: '智能演示文稿制作',
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
        description: 'AI模特换装系统',
        href: '/model',
        icon: UserIcon,
      },
      {
        id: 'resume',
        name: 'AI简历',
        description: '智能简历生成系统',
        href: '/resume',
        icon: DocumentDuplicateIcon,
      },
      {
        id: 'xhs',
        name: '小红书助手',
        description: '热门内容创作工具',
        href: '/xhs',
        icon: DocumentTextIcon,
      },
    ],
    featured: [
      {
        id: 'model',
        name: '电商试衣换装',
        description: 'AI模特换装系统',
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
        description: 'AI视频创作系统',
        href: '/sora',
        icon: VideoCameraIcon,
      },
      {
        id: 'videoclip',
        name: '视频混剪助手',
        description: '视频剪辑软件',
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
        description: '移动应用云上部署方案',
        href: '/mobile',
        icon: DevicePhoneMobileIcon,
      },
      {
        id: 'game',
        name: '游戏解决方案',
        description: '低延迟高防护游戏云方案',
        href: '/game',
        icon: GlobeAltIcon,
      },
      {
        id: 'finance',
        name: '金融解决方案',
        description: '安全合规金融云方案',
        href: '/finance',
        icon: BanknotesIcon,
      },
      {
        id: 'ecommerce',
        name: '电商解决方案',
        description: '智能建站解决方案',
        href: '/ecommerce',
        icon: ChartPieIcon,
      },
      {
        id: 'cms',
        name: 'CMS解决方案',
        description: '内容管理系统解决方案',
        href: '/cms',
        icon: DocumentTextIcon,
      },
    ],
    featured: [
      {
        id: 'ecommerce',
        name: '电商解决方案',
        description: '智能建站解决方案',
        href: '/ecommerce',
        icon: ChartPieIcon,
        index: 1,
      },
      {
        id: 'game',
        name: '游戏解决方案',
        description: '低延迟高防护游戏云方案',
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
        description: '视频行业专属解决方案',
        href: '/video',
        icon: ShieldCheckIcon,
      },
      {
        id: 'gov',
        name: '政府解决方案',
        description: '政府场景化解决方案',
        href: '/gov',
        icon: ShieldCheckIcon,
      },
      {
        id: 'retail',
        name: '零售解决方案',
        description: '零售行业专属解决方案',
        href: '/retail',
        icon: SquaresPlusIcon,
      },
    ],
    featured: [
      {
        id: 'gov',
        name: '政府解决方案',
        description: '政府场景化解决方案',
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
        description: '了解公司历史与文化',
        href: '/about',
        icon: UserIcon,
      },
      {
        id: 'support',
        name: '技术支持',
        description: '获取专业技术帮助',
        href: '/support',
        icon: PhoneIcon,
      },
      {
        id: 'agent',
        name: '推广合作',
        description: '推广合作',
        href: '/agent',
        icon: DocumentTextIcon,
      },
      {
        id: 'contact',
        name: '联系我们',
        description: '联系我们',
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
        description: '快速入门指南、常见问题',
        href: '/help',
        icon: PhoneIcon,
      },
      {
        id: 'api',
        name: 'API 文档',
        description: '完整的API参考与示例',
        href: '/api',
        icon: DocumentTextIcon,
      },
      {
        id: 'sdk',
        name: 'SDK 文档',
        description: '多语言SDK使用指南',
        href: '/sdk',
        icon: SquaresPlusIcon,
      },
      {
        id: 'changelog',
        name: '产品动态',
        description: '最新产品更新与功能',
        href: '/changelog',
        icon: SparklesIcon,
      },
      {
        id: 'quickstart',
        name: '快速入门',
        description: '5分钟快速部署首个云服务器',
        href: '/quickstart',
        icon: PlayCircleIcon,
      },
      {
        id: 'cli',
        name: 'CLI 工具',
        description: '云命令行工具',
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
    categories: productCategories.filter((c) => c.id !== 'ai'),
    showFooter: true,
  },
  {
    label: '人工智能与应用',
    categories: [productCategories.find((c) => c.id === 'ai')!],
    showFooter: true,
  },
  {
    label: 'AI解决方案',
    categories: aiSolutionCategories,
    showFooter: true,
  },
  {
    label: '企业解决方案',
    categories: enterpriseCategories,
    showFooter: true,
  },
  {
    label: '关于我们',
    categories: companyCategories,
    showFooter: true,
  },
  {
    label: '文档中心',
    categories: docsCategories,
    showFooter: false,
  },
]
