'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import type { GalleryImage } from '@/lib/images'

interface LightboxProps {
  image: GalleryImage | null
  onClose: () => void
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3]"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </motion.div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground text-3xl leading-none transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
