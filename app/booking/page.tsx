import BookingForm from '@/components/BookingForm'
import FadeInSection from '@/components/FadeInSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Session | BenFX Photography',
  description: 'Book a street, event, or college photography session with BenFX.',
}

export default function BookingPage() {
  return (
    <div className="pt-28 pb-28 px-6 max-w-3xl mx-auto">
      <FadeInSection className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-foreground mb-3">Book a Session</h1>
        <p className="text-foreground/55 leading-relaxed">
          Fill out the form and BenFX will be in touch within 48 hours.
        </p>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <BookingForm />
      </FadeInSection>
    </div>
  )
}
