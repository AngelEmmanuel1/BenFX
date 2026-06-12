'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#000',
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px, 100% 68px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px, 100% 68px',
          backgroundRepeat: 'repeat',
          opacity: 0.9,
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-4"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black tracking-widest text-foreground leading-[0.85]">
            Ben
          </h1>
          <img
            src="/logo.png"
            alt="BenFX Logo"
            className="h-20 sm:h-28 md:h-40 lg:h-56 xl:h-72 w-auto object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mx-auto max-w-xl text-foreground/60 text-sm sm:text-base tracking-[0.35em] uppercase mb-12"
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
            className="inline-block border border-accent text-accent px-8 sm:px-12 py-3 text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-all duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
