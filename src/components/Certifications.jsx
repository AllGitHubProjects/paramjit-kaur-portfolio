import { certifications } from '../data/portfolio'
import SectionHeader from './SectionHeader'

// Stable pseudo-hash so each cert gets a deterministic-looking ID.
function hashId(s, len = 8) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h.toString(16).padStart(len, '0').slice(0, len)
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Certifications" title="Test Artifacts" accent="// signed" />

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((c) => (
            <div key={c.title} className="test-card p-0 overflow-hidden reveal flex flex-col">
              <div className="report-header flex items-center justify-between">
                <span className="truncate">artifact.{hashId(c.title)}</span>
                <span className="badge-pass">✓ SIGNED</span>
              </div>
              <div className="p-6 flex-1">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-base font-semibold leading-snug mb-2">{c.title}</h3>
                <div className="font-mono text-xs text-ink-muted mb-4">{c.issuer}</div>
                <dl className="font-mono text-[11px] space-y-1">
                  <div className="flex gap-2">
                    <dt className="text-ink-muted w-16 shrink-0">issuer:</dt>
                    <dd className="text-ink truncate">{c.issuer}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-ink-muted w-16 shrink-0">issued:</dt>
                    <dd className="text-ink">{c.date}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-ink-muted w-16 shrink-0">sha:</dt>
                    <dd className="text-pass">{hashId(c.title + c.issuer, 12)}</dd>
                  </div>
                </dl>
              </div>
              <div className="px-6 py-2.5 border-t border-rule font-mono text-[10px] uppercase tracking-wider text-ink-muted bg-paper-2/60">
                verified · exit 0
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
