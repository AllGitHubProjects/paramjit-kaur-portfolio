import { education } from '../data/portfolio'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-paper-2/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="Education" title="Assertions" accent="// academic" />

        <div className="test-card p-0 overflow-hidden">
          <div className="report-header flex items-center justify-between">
            <span>education.assertions.spec</span>
            <span className="badge-pass">✓ {education.length}/{education.length}</span>
          </div>
          <ul>
            {education.map((e, i) => (
              <li
                key={e.school}
                className="reveal grid grid-cols-[auto_1fr_auto] items-start gap-4 px-5 md:px-7 py-5 border-b border-rule last:border-b-0"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="badge-pass">✓ PASS</span>
                  <span className="hidden md:inline font-mono text-[10px] text-ink-muted">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs text-ink leading-relaxed break-words">
                    expect(<span className="text-accent">paramjit</span>).toHaveCompleted(
                    <span className="text-pass">'{e.degree}'</span>)
                  </div>
                  <div className="text-sm font-medium mt-1.5">{e.school}</div>
                </div>
                <div className="font-mono text-[11px] text-ink-muted text-right shrink-0">
                  {e.period}
                </div>
              </li>
            ))}
          </ul>
          <div className="px-5 md:px-7 py-2.5 border-t border-rule font-mono text-[10px] uppercase tracking-wider text-ink-muted bg-paper-2/60">
            {education.length} assertions passed · 0 failed
          </div>
        </div>
      </div>
    </section>
  )
}
