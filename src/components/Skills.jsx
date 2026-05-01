import { useEffect, useRef, useState } from 'react'
import { skillCategories } from '../data/portfolio'
import SectionHeader from './SectionHeader'

function SkillRow({ name, pct }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="py-2.5 border-b border-rule/60 last:border-b-0">
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="badge-pass shrink-0">✓</span>
          <span className="font-mono text-xs text-ink truncate">it('{name.toLowerCase()}')</span>
        </div>
        <span className="font-mono text-[10px] text-ink-muted tabular-nums shrink-0">
          {pct}% · {(pct * 0.05).toFixed(2)}s
        </span>
      </div>
      <div className="coverage-track">
        <div
          className={`coverage-fill ${visible ? 'run' : ''}`}
          style={{ '--coverage': `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Skills" title="Test Suites" accent="// 20 cases" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const isBars = cat.type === 'bars'
            const total = cat.items.length
            return (
              <div key={cat.title} className="test-card p-0 overflow-hidden reveal flex flex-col">
                <div className="report-header flex items-center justify-between">
                  <span className="truncate">
                    {cat.title.toLowerCase().replace(/\s+&\s+/g, '_').replace(/\s+/g, '_')}.spec
                  </span>
                  <span className="badge-pass">✓ {total}/{total}</span>
                </div>
                <div className="p-5 flex-1">
                  {isBars ? (
                    <div>
                      {cat.items.map((it) => (
                        <SkillRow key={it.name} name={it.name} pct={it.pct} />
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-1.5">
                      {cat.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-center gap-2 font-mono text-xs text-ink"
                        >
                          <span className="text-pass">✓</span>
                          <span>expect(<span className="text-accent">stack</span>).toContain(</span>
                          <span className="text-pass">'{it}'</span>
                          <span>)</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="px-5 py-2 border-t border-rule font-mono text-[10px] uppercase tracking-wider text-ink-muted bg-paper-2/60">
                  {total} {total === 1 ? 'test' : 'tests'} passed · 0 failed
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
