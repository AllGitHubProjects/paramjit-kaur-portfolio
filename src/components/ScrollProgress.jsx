import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0)
      setShowTop(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-pass transition-all duration-150"
        style={{ width: `${pct}%` }}
      />
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-sm bg-ink text-paper border border-ink
                    flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-200 ${
                      showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
      >
        <ArrowUp size={16} />
      </button>
    </>
  )
}
