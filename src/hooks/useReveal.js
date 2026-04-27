import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Adds the `visible` class to every `.reveal` element when it scrolls into view.
// Re-runs on every route change so newly mounted page elements get observed.
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [pathname])
}
