import { useEffect } from 'react'

// Adds the `visible` class to every `.reveal` element when it scrolls into view.
// Call once at the top of <App />.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
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
  }, [])
}
