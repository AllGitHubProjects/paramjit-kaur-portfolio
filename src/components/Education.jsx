import { CalendarDays } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Education" title="Academic" accent="Background" />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((e) => (
            <div key={e.school} className="card reveal text-center">
              <div className="text-5xl mb-4">{e.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{e.school}</h3>
              <div className="text-sm text-primary mb-3">{e.degree}</div>
              <div className="inline-flex items-center gap-1.5 text-xs text-muted">
                <CalendarDays size={14} /> {e.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
