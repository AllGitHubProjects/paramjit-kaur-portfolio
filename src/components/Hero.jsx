import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Briefcase, Linkedin } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

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
            const duration = 1100
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
    <span ref={ref} className="font-mono text-3xl md:text-4xl font-bold text-ink tabular-nums">
      {val}
    </span>
  )
}

export default function Hero() {
  const today = new Date()
  const runId = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(
    today.getDate(),
  ).padStart(2, '0')}`
  const ts = today.toISOString().replace('T', ' ').slice(0, 19) + ' UTC'

  // Items the ticker scrolls through — duplicated so the loop is seamless.
  const tickerItems = [
    'job_search.spec ▶ in progress',
    'sdet_role.spec ▶ awaiting interview',
    'remote_canada.spec ▶ open',
    'automation_skills.spec ✓ passed',
    'manual_qa.spec ✓ passed',
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 px-6 grid-paper"
    >
      <div className="relative w-full max-w-5xl mx-auto">
        {/* ── Run banner ─────────────────────────────────────────── */}
        <div className="border border-rule bg-paper rounded-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-rule bg-paper-2 font-mono text-[11px] text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-fail/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-running/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-pass/70" />
              </span>
              <span>~/portfolio/run-{runId}.report</span>
            </div>
            <span className="hidden sm:inline">{ts}</span>
          </div>

          <div className="px-6 md:px-10 py-10 md:py-14">
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs text-ink-muted">
              <span>TEST RUN</span>
              <span className="text-ink">#{runId}</span>
              <span>·</span>
              <span className="badge-pass">✓ PASS</span>
              <span>·</span>
              <span>{profile.availability.toLowerCase()}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              {profile.name.toLowerCase().replace(' ', '.')}
              <span className="text-ink-muted">@portfolio</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base md:text-lg text-ink-muted leading-relaxed">
              {profile.title} · {profile.yearsExperience} years on{' '}
              <span className="kbd">manual</span> &amp; <span className="kbd">automation</span>{' '}
              testing across SaaS, cloud and gaming. Based in {profile.location}.
            </p>

            {/* Currently-running ticker */}
            <div className="mt-8 flex items-center gap-3">
              <span className="badge-running">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-running animate-cursor-blink" />
                ▶ RUNNING
              </span>
              <div className="relative flex-1 overflow-hidden border-y border-rule py-1.5 bg-paper-2">
                <div className="flex gap-10 font-mono text-xs text-ink whitespace-nowrap animate-ticker w-max">
                  {[...tickerItems, ...tickerItems].map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                <Mail size={14} /> contact()
              </Link>
              <Link to="/experience" className="btn btn-outline">
                <Briefcase size={14} /> view_log()
              </Link>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <Linkedin size={14} /> linkedin
              </a>
            </div>
          </div>

          {/* ── Stats strip ──────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-rule">
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-6 py-5 border-r last:border-r-0 border-rule odd:bg-paper-2/40 md:odd:bg-transparent"
              >
                <div className="flex items-baseline gap-1.5">
                  <Counter target={s.num} />
                  <span className="text-pass font-mono text-sm">+</span>
                </div>
                <div className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer note ──────────────────────────────────────── */}
        <p className="mt-4 font-mono text-[11px] text-ink-muted text-right">
          coverage: <span className="text-pass">87%</span> · suites: 6 · tests: 20 · fails: 0
        </p>
      </div>
    </section>
  )
}
