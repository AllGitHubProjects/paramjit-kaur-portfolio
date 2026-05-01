import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
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

  const linkClasses = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive ? 'text-primary font-medium' : 'text-muted hover:text-primary'
    }`

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-colors ${
        scrolled
          ? 'bg-bg/85 border-b border-primary/20'
          : 'bg-bg/40 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent"
        >
          {profile.initials}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.path}>
              <NavLink to={l.path} end={l.path === '/'} className={linkClasses}>
                {l.label}
              </NavLink>
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

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-bg/95 border-t border-primary/10">
          {navLinks.map((l) => (
            <li key={l.path}>
              <NavLink
                to={l.path}
                end={l.path === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `block py-3 text-sm transition-colors ${
                    isActive ? 'text-primary font-medium' : 'text-muted hover:text-primary'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
