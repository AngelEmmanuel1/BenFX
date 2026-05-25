import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-xl font-black tracking-widest text-foreground"
          >
            BenFX
          </Link>
          <nav className="flex gap-6 flex-wrap justify-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-foreground/50 hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="https://instagram.com/benfx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-accent transition-colors text-sm tracking-widest uppercase"
          >
            Instagram
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-foreground/30 text-xs tracking-widest">
            © {new Date().getFullYear()} BenFX Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
