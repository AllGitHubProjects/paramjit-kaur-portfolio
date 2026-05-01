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
        className="fixed top-0 left-0 z-[60] h-[3px] bg-brand-gradient transition-all duration-150"
        style={{ width: `${pct}%` }}
      />
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-gradient text-white
                    shadow-[0_8px_30px_rgba(108,99,255,0.5)] flex items-center justify-center
                    transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  )
}
