import { useEffect, useRef, useState } from 'react'
import { FlaskConical, Plug, Code2, ListChecks, Network } from 'lucide-react'
import { skillCategories } from '../data/portfolio'
import SectionHeader from './SectionHeader'

const ICONS = { FlaskConical, Plug, Code2, ListChecks, Network }

function SkillBar({ name, pct }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setWidth(pct)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-text font-medium">{name}</span>
        <span className="text-muted">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-bg overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-gradient transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Skills" title="Technical" accent="Arsenal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon]
            return (
              <div key={cat.title} className="card reveal">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${cat.accent}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>

                {cat.type === 'bars' && (
                  <div>
                    {cat.items.map((it) => (
                      <SkillBar key={it.name} name={it.name} pct={it.pct} />
                    ))}
                  </div>
                )}

                {cat.type === 'pills' && (
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <span
                        key={it}
                        className={`px-3 py-1.5 text-xs rounded-full border ${cat.pillColor}`}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
