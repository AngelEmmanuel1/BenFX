'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  imageSrc: string
  imageAlt: string
}

export default function Hero({ imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-serif text-8xl md:text-[10rem] font-black tracking-widest text-foreground mb-4 leading-none"
        >
          BenFX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="text-foreground/60 text-base tracking-[0.4em] uppercase mb-12"
        >
          Capturing moments. Street. Events. College.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
        >
          <Link
            href="/portfolio"
            className="inline-block border border-accent text-accent px-12 py-3 text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-all duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
