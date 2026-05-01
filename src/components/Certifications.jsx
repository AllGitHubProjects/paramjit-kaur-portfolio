import { CheckCircle2, Calendar } from 'lucide-react'
import { certifications } from '../data/portfolio'
import SectionHeader from './SectionHeader'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Certifications" title="Licenses &" accent="Credentials" />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((c) => {
            const isCertified = c.date.toLowerCase().includes('certified')
            const Icon = isCertified ? CheckCircle2 : Calendar
            return (
              <div key={c.title} className="card reveal">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-base font-semibold mb-2">{c.title}</h3>
                <div className="text-sm text-primary mb-3">{c.issuer}</div>
                <div className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <Icon size={14} /> {c.date}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
