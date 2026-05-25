import ContactForm from '@/components/ContactForm'
import FadeInSection from '@/components/FadeInSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | BenFX Photography',
  description: 'Get in touch with BenFX Photography.',
}

export default function ContactPage() {
  return (
    <div className="pt-28 pb-28 px-6 max-w-5xl mx-auto">
      <FadeInSection className="text-center mb-20">
        <h1 className="font-serif text-5xl font-bold text-foreground mb-3">Contact</h1>
        <p className="text-foreground/40 tracking-widest uppercase text-xs">Get in touch</p>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeInSection>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-10">
            Let's Connect
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground/35 mb-1">Email</p>
              <a
                href="mailto:benfx@youremail.com"
                className="text-foreground hover:text-accent transition-colors"
              >
                benfx@youremail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground/35 mb-1">Instagram</p>
              <a
                href="https://instagram.com/benfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                @benfx
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground/35 mb-1">Location</p>
              <p className="text-foreground">Available citywide</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <ContactForm />
        </FadeInSection>
      </div>
    </div>
  )
}
