import GalleryGrid from '@/components/GalleryGrid'
import FadeInSection from '@/components/FadeInSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | BenFX Photography',
  description: 'Street, events, and college photography by BenFX.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-28 px-6 max-w-7xl mx-auto">
      <FadeInSection className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-foreground mb-3">Portfolio</h1>
        <p className="text-foreground/40 tracking-widest uppercase text-xs">
          Street · Events · College
        </p>
      </FadeInSection>

      <GalleryGrid />
    </div>
  )
}
