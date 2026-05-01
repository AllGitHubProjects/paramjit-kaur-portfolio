import { experience } from '../data/portfolio'
import SectionHeader from './SectionHeader'

// Tiny deterministic timestamp: takes the array index of the assertion and
// builds a fake "[hh:mm:ss.SSS]" prefix so the log feels real without
// looking generated.
function ts(i) {
  const m = String((i * 7) % 60).padStart(2, '0')
  const s = String((i * 13) % 60).padStart(2, '0')
  const ms = String((i * 137) % 1000).padStart(3, '0')
  return `[00:${m}:${s}.${ms}]`
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-paper-2/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="Experience" title="Execution Log" accent="// stdout" />

        <div className="space-y-8">
          {experience.map((job, idx) => {
            const isCurrent = job.period.toLowerCase().includes('present')
            return (
              <article key={job.company} className="test-card p-0 overflow-hidden reveal">
                <div className="report-header flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-2xl leading-none">{job.logo}</span>
                    <span className="text-ink font-semibold truncate">
                      {job.company.toLowerCase().replace(/\s+/g, '_')}.suite
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCurrent ? (
                      <span className="badge-running">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-running animate-cursor-blink" />
                        ▶ RUNNING
                      </span>
                    ) : (
                      <span className="badge-pass">✓ PASS</span>
                    )}
                    <span className="hidden sm:inline">{job.period}</span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-ink-muted">
                      @ {job.company}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-ink-muted mb-5">
                    {job.type} · started {job.period.split(' – ')[0]}
                  </div>

                  {job.description.map((p, i) => (
                    <p key={i} className="text-ink-muted leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}

                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <div className="mt-6 border-t border-rule pt-5">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-3">
                        ── assertions ────────────────────
                      </div>
                      <ul className="space-y-1.5">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="log-line flex gap-2">
                            <span className="ts shrink-0">{ts(i + idx * 11)}</span>
                            <span className="lvl-pass shrink-0">PASS</span>
                            <span className="text-ink">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm bg-paper-2 border border-rule text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 md:px-8 py-2.5 border-t border-rule font-mono text-[10px] uppercase tracking-wider text-ink-muted bg-paper-2/60 flex items-center justify-between">
                  <span>
                    {job.responsibilities?.length || 0} assertions · 0 failed
                  </span>
                  <span>{isCurrent ? 'in progress' : 'exit 0'}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
