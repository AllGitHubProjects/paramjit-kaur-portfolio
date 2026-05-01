import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Mail, Briefcase, Linkedin } from 'lucide-react'
import { profile, stats } from '../data/portfolio'
import useTypedText from '../hooks/useTypedText'

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const duration = 1200
            const start = performance.now()
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration)
              setVal(Math.floor(target * p))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-text">
      {val}+
    </span>
  )
}

function Particles() {
  // Decorative floating particles. Generated once on mount.
  const particles = useRef(
    Array.from({ length: 30 }, () => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10,
      color: ['#0EA5E9', '#06B6D4', '#67E8F9', '#0369A1', '#1E40AF'][
        Math.floor(Math.random() * 5)
      ],
    })),
  ).current

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full animate-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const typed = useTypedText(profile.roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow" />
      </div>
      <Particles />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-accent/10 text-accent border border-accent/30 text-xs font-medium mb-6">
          <ShieldCheck size={14} /> {profile.availability}
        </div>

        <div className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-brand-gradient animate-float">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full rounded-full object-cover bg-card"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl font-mono text-primary min-h-[1.75rem]">
          {typed}
          <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-blink" />
        </p>

        <p className="mt-3 text-sm md:text-base text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn btn-primary">
            <Mail size={16} /> Get in Touch
          </Link>
          <Link to="/experience" className="btn btn-outline">
            <Briefcase size={16} /> View Experience
          </Link>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl bg-card/60 border border-primary/10 backdrop-blur"
            >
              <Counter target={s.num} />
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
