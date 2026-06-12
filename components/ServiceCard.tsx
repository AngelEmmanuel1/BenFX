import Link from 'next/link'
import FadeInSection from './FadeInSection'

interface ServiceCardProps {
  title: string
  description: string
  startingPrice: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  startingPrice,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeInSection delay={delay}>
      <Link href="/booking" className="block h-full group">
        <div className="bg-surface border border-white/5 p-8 flex flex-col h-full hover:border-accent/30 transition-colors duration-300">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-foreground/60 leading-relaxed mb-8 flex-1">{description}</p>
          <div className="border-t border-white/5 pt-6 flex items-center justify-between">
            <span className="text-accent text-sm tracking-widest">Starting at {startingPrice}</span>
            <span className="text-sm tracking-widest uppercase text-foreground/40 transition-colors duration-200 group-hover:text-accent">
              Book Now →
            </span>
          </div>
        </div>
      </Link>
    </FadeInSection>
  )
}
