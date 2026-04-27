import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-colors ${
        scrolled
          ? 'bg-bg/85 border-b border-primary/20'
          : 'bg-bg/40 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent"
        >
          {profile.initials}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-text"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-bg/95 border-t border-primary/10">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={close}
                className="block py-3 text-sm text-muted hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
