import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import BananaProductPage from '@/components/ai/BananaProductPage'

export const metadata: Metadata = {
  title: { absolute: 'AI音乐 - 开源免费的 AI 音乐生成系统 | 智言AI' },
  description: '智言AI AI音乐是一款以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具,旨在降低门槛、提升效率,支持个人娱乐与商用配乐的&ldquo;人机协同&rdquo;。基于开源技术构建,提供完整源码与私有化部署支持。',
  keywords: 'AI音乐,音乐生成,文生音乐,歌词生成,哼唱生成,乐谱生成,必定AI,智言AI,音乐创作工具,开源AI系统,私有化部署,音乐源码',
  openGraph: { title: 'AI音乐 - 一键生成 AI 音乐 | 智言AI', description: '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐。降低门槛、提升效率,支持个人娱乐与商用配乐。', images: ['/product/music.webp'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AI音乐 - 一键生成 AI 音乐 | 智言AI', description: '以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲、伴奏、人声或纯音乐,降低门槛、提升效率。', images: ['/product/music.webp'] },
}

export default function MusicPage() {
  return (<><Header /><main><BananaProductPage
    badgeText="AI音乐 发布"
    heroTitle={<>打造您的 <span className="text-[#0055ff]">专属 AI 音乐</span></>}
    heroDesc={<>新一代 AI 音乐生成工具,以文本/歌词/哼唱/乐谱为输入,快速生成完整歌曲。<br className="hidden sm:block" />降低门槛、提升效率,支持个人娱乐与商用配乐的&ldquo;人机协同&rdquo;。</>}
    heroImage="/images/aisolution/music-1.webp"
    featuresTitle=""
    featuresDesc="集文本生成、哼唱生成、乐谱生成于一体,为您提供一站式音乐创作解决方案"
    features={[
      { title: '文本生成', desc: '支持以文本/歌词为输入,快速生成完整歌曲,让创作更简单高效。', icon: 'DocumentText' },
      { title: '哼唱生成', desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。', icon: 'Microphone' },
      { title: '乐谱生成', desc: '支持乐谱输入,快速生成音乐作品,满足专业音乐创作需求。', icon: 'MusicalNote' },
      { title: '多种输出', desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足不同场景需求。', icon: 'SpeakerWave' },
      { title: '商用授权', desc: '支持个人娱乐与商用配乐,提供完整的商用授权支持。', icon: 'ShieldCheck' },
      { title: '快速生成', desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。', icon: 'Bolt' },
    ]}
    featureDetails={[
      { title: '文本生成,文字即刻成曲', desc: '支持以文本/歌词为输入,快速生成完整歌曲。降低创作门槛,提升效率,让音乐创作更简单高效。', activePoint: 0, points: [{ title: '文本输入', desc: '支持以文本/歌词为输入,只需输入文字描述,即可快速生成完整歌曲。' }, { title: '歌词生成', desc: '支持歌词输入,快速生成与歌词匹配的音乐作品,提升创作质量。' }, { title: '快速生成', desc: '生成速度非常快,大幅缩短创作时间,提升创作效率。' }, { title: '高质量输出', desc: '生成的音乐质量高,音质清晰,旋律优美,满足专业级创作需求。' }], image: '/images/aisolution/music-1.webp' },
      { title: '哼唱生成,旋律即刻成曲', desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲。降低创作门槛,让不懂乐理的用户也能创作音乐。', activePoint: 0, points: [{ title: '哼唱输入', desc: '支持哼唱输入,将您的旋律快速转化为完整歌曲,降低创作门槛。' }, { title: '智能识别', desc: '智能识别哼唱旋律,准确捕捉音乐元素,生成高质量音乐作品。' }, { title: '风格保持', desc: '从哼唱中学习风格和情感,生成与原哼唱风格协调的音乐。' }, { title: '灵活创作方式', desc: '支持文本、歌词、哼唱、乐谱多种方式,满足不同用户的创作习惯。' }], image: '/images/aisolution/music-2.webp' },
      { title: '多种输出,满足不同场景', desc: '支持生成完整歌曲、伴奏、人声或纯音乐,满足个人娱乐与商用配乐的不同需求。提供完整的商用授权支持。', activePoint: 0, points: [{ title: '完整歌曲', desc: '支持生成完整歌曲,包含人声和伴奏,满足个人娱乐需求。' }, { title: '伴奏输出', desc: '支持生成纯伴奏音乐,方便用户添加自己的人声或进行二次创作。' }, { title: '人声输出', desc: '支持生成纯人声,方便用户进行混音和后期处理。' }, { title: '商用授权', desc: '提供完整的商用授权支持,支持个人娱乐与商用配乐,满足商业需求。' }], image: '/images/aisolution/music-3.webp' },
    ]}
    ctaTitle="准备好开始创作了吗？"
    ctaDesc="立即加入 智言AI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的数字人应用。"
  /></main><Footer /></>)
}
