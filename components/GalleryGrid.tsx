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
      <div className="flex gap-8 justify-center mb-14">
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`text-sm tracking-widest uppercase pb-1 transition-all duration-200 ${
              activeTab === value
                ? 'text-accent border-b border-accent'
                : 'text-foreground/50 hover:text-foreground'
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
