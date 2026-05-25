import Link from 'next/link'
import FadeInSection from './FadeInSection'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  startingPrice: string
  delay?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  startingPrice,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeInSection delay={delay}>
      <div className="bg-surface border border-white/5 p-8 flex flex-col h-full hover:border-accent/30 transition-colors duration-300">
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-foreground/60 leading-relaxed mb-8 flex-1">{description}</p>
        <div className="border-t border-white/5 pt-6 flex items-center justify-between">
          <span className="text-accent text-sm tracking-widest">Starting at {startingPrice}</span>
          <Link
            href="/booking"
            className="text-sm tracking-widest uppercase text-foreground/40 hover:text-accent transition-colors duration-200"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </FadeInSection>
  )
}
