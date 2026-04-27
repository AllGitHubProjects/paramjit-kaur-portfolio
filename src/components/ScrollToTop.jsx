import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls the window to the top whenever the route changes.
// Without this, navigating to a new page would keep the previous scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}
