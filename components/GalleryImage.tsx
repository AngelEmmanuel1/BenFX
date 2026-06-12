'use client'

import { motion } from 'framer-motion'
import type { GalleryImage as GalleryImageType } from '@/lib/images'

interface GalleryImageProps {
  image: GalleryImageType
  onClick: (image: GalleryImageType) => void
}

export default function GalleryImageCard({ image, onClick }: GalleryImageProps) {
  return (
    <motion.button
      className="relative aspect-[4/3] overflow-hidden group w-full cursor-pointer block"
      onClick={() => onClick(image)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
        <span className="text-transparent group-hover:text-foreground text-xs tracking-widest uppercase font-medium transition-colors duration-300 translate-y-2 group-hover:translate-y-0">
          {image.category}
        </span>
      </div>
    </motion.button>
  )
}
