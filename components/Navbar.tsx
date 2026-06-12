'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed relative top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-2xl font-black tracking-widest text-foreground">
            Ben
          </span>
          <img
            src="/logo.png"
            alt="BenFX Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        <ul
          className={`absolute inset-x-0 top-full z-40 mt-2 rounded-b-3xl border border-white/10 bg-background/95 p-6 backdrop-blur-sm shadow-2xl transition-all duration-300 md:static md:mt-0 md:flex md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {links.map(({ href, label }) => (
            <li key={href} className="md:px-0">
              <Link
                href={href}
                className={`block text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-accent border-b border-accent pb-0.5 md:border-none md:pb-0'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
