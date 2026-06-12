'use client'

import { useState } from 'react'
import { galleryImages, type Category, type GalleryImage } from '@/lib/images'
import GalleryImageCard from './GalleryImage'
import Lightbox from './Lightbox'
import FadeInSection from './FadeInSection'

type FilterTab = 'all' | Category

const tabs: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'street', label: 'Street' },
  { value: 'events', label: 'Events' },
  { value: 'college', label: 'College' },
  { value: 'posters', label: 'Posters' },
]

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filtered =
    activeTab === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 gap-y-4 mb-14 px-4 md:px-0">
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`min-w-[5.5rem] w-full max-w-[8rem] sm:w-auto text-xs sm:text-sm tracking-widest uppercase py-2 px-3 transition-all duration-200 border rounded-full ${
              activeTab === value
                ? 'text-background bg-accent border-accent shadow-[0_0_0_1px_rgba(255,255,255,0.15)]'
                : 'text-foreground/50 border-white/10 hover:text-foreground hover:border-foreground/20 hover:bg-white/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((image, i) => (
          <FadeInSection key={image.id} delay={i * 0.05}>
            <GalleryImageCard image={image} onClick={setLightboxImage} />
          </FadeInSection>
        ))}
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  )
}
