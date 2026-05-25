import Hero from '@/components/Hero'
import FadeInSection from '@/components/FadeInSection'
import Image from 'next/image'
import Link from 'next/link'
import { featuredImages } from '@/lib/images'

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="https://picsum.photos/seed/benfx-hero/1920/1080"
        imageAlt="BenFX Photography — street scene"
      />

      {/* About */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="flex flex-col md:flex-row items-center gap-14">
            <div className="relative w-56 h-72 flex-shrink-0">
              <Image
                src="https://picsum.photos/seed/benfx-portrait/400/500"
                alt="BenFX photographer portrait"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                About BenFX
              </h2>
              <p className="text-foreground/65 leading-relaxed text-lg mb-4">
                BenFX is a freelance photographer with a passion for authentic storytelling through
                imagery. From the raw energy of the streets to the milestones of college life,
                every frame is crafted with intention.
              </p>
              <p className="text-foreground/65 leading-relaxed text-lg">
                Available for street sessions, event coverage, and college packages across the city.
                Let's create something unforgettable.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-3">
              Featured Work
            </h2>
            <p className="text-foreground/40 tracking-widest uppercase text-xs">
              Street · Events · College
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredImages.map((image, i) => (
              <FadeInSection key={image.id} delay={i * 0.1}>
                <Link
                  href="/portfolio"
                  className="block relative aspect-[4/3] overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
                    <span className="text-transparent group-hover:text-foreground text-xs tracking-widest uppercase font-medium transition-colors duration-300 translate-y-2 group-hover:translate-y-0">
                      {image.category}
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-block border border-accent text-accent px-12 py-3 text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
