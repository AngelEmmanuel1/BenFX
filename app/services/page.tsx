import ServiceCard from '@/components/ServiceCard'
import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | BenFX Photography',
  description: 'Street sessions, event coverage, and college packages by BenFX.',
}

const services = [
  {
    icon: '📷',
    title: 'Street Sessions',
    description:
      'Candid, editorial street photography that captures the pulse of urban life. Perfect for personal branding, editorial use, or artistic expression in real-world environments.',
    startingPrice: '$150',
  },
  {
    icon: '🎉',
    title: 'Event Coverage',
    description:
      'Full event documentation — parties, graduations, campus events, and social gatherings. Delivered as a curated gallery of high-resolution images within 7 days.',
    startingPrice: '$300',
  },
  {
    icon: '🎓',
    title: 'College Packages',
    description:
      'Campus portraits, Greek life events, student org coverage, and more. Tailored packages for students and organizations who need professional imagery on a student budget.',
    startingPrice: '$100',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-28 px-6 max-w-6xl mx-auto">
      <FadeInSection className="text-center mb-20">
        <h1 className="font-serif text-5xl font-bold text-foreground mb-3">Services</h1>
        <p className="text-foreground/40 tracking-widest uppercase text-xs">
          What BenFX offers
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} delay={i * 0.15} />
        ))}
      </div>

      <FadeInSection>
        <div className="text-center bg-surface border border-white/5 p-14">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Ready to work together?
          </h2>
          <p className="text-foreground/55 mb-10">
            Every session is customized. Reach out to discuss your vision.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent text-background px-12 py-3 text-sm tracking-widest uppercase hover:bg-accent/90 transition-all duration-300"
          >
            Book a Session
          </Link>
        </div>
      </FadeInSection>
    </div>
  )
}
