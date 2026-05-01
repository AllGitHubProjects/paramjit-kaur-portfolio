import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

const SPEC_NAME = {
  '/': 'index.spec.ts',
  '/about': 'about.spec.ts',
  '/experience': 'experience.spec.ts',
  '/skills': 'skills.spec.ts',
  '/education': 'education.spec.ts',
  '/certifications': 'certifications.spec.ts',
  '/contact': 'contact.spec.ts',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const currentSpec = SPEC_NAME[pathname] || '404.spec.ts'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const linkClasses = ({ isActive }) =>
    `font-mono text-xs tracking-wide transition-colors ${
      isActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
    }`

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-paper transition-shadow ${
        scrolled ? 'border-b border-rule shadow-[0_1px_0_rgba(14,17,22,0.04)]' : 'border-b border-rule/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-xs text-pass">$</span>
          <span className="font-mono text-xs text-ink-muted truncate">
            <span className="text-ink font-semibold">
              {profile.name.toLowerCase().replace(' ', '.')}
            </span>
            <span className="hidden sm:inline">@portfolio:~</span>
            <span className="hidden md:inline text-accent">/{currentSpec}</span>
            <span className="text-ink animate-cursor-blink ml-1">▌</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.path}>
              <NavLink to={l.path} end={l.path === '/'} className={linkClasses}>
                {l.label.toLowerCase()}
              </NavLink>
            </li>
          ))}
          <li className="flex items-center gap-1.5 font-mono text-[10px] text-pass uppercase tracking-wider pl-3 border-l border-rule">
            <span className="w-1.5 h-1.5 rounded-full bg-pass animate-cursor-blink" />
            online
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-3 bg-paper border-t border-rule">
          {navLinks.map((l) => (
            <li key={l.path} className="border-b border-rule/60 last:border-b-0">
              <NavLink
                to={l.path}
                end={l.path === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `block py-3 font-mono text-xs ${
                    isActive ? 'text-ink font-semibold' : 'text-ink-muted'
                  }`
                }
              >
                <span className="text-pass mr-2">$</span>
                {l.label.toLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
