import { Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="Experience" title="Professional" accent="Journey" />

        <div className="relative pl-6 md:pl-10 border-l-2 border-primary/30">
          {experience.map((job) => (
            <article key={job.company} className="relative reveal mb-10">
              {/* dot */}
              <span className="absolute -left-[34px] md:-left-[46px] top-2 w-4 h-4 rounded-full bg-brand-gradient ring-4 ring-bg" />

              <div className="card">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">{job.role}</h3>
                      <div className="text-primary font-medium">{job.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 text-xs text-muted">
                      <Calendar size={14} /> {job.period}
                    </div>
                    <div className="text-xs text-muted mt-1">{job.type}</div>
                  </div>
                </div>

                <p className="text-muted leading-relaxed mb-5">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
