import {
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  GitBranch,
  Linkedin,
  CheckCircle2,
  Bot,
} from 'lucide-react'
import { about, profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'

const ICONS = { MapPin, Briefcase, GraduationCap, Award, GitBranch, Linkedin, CheckCircle2, Bot }

export default function About() {
  const fixture = [
    { k: 'subject', v: profile.name, mono: true },
    { k: 'role', v: profile.title },
    { k: 'location', v: profile.location },
    { k: 'years_active', v: `${profile.yearsExperience} years` },
    { k: 'company', v: about.company },
    { k: 'status', v: profile.availability, status: 'pass' },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="About" title="Test Fixture" accent="// setup" />

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Left: subject card */}
          <div className="md:col-span-2 reveal">
            <div className="test-card p-0 overflow-hidden">
              <div className="report-header flex items-center justify-between">
                <span>fixtures/subject.json</span>
                <span className="badge-pass">✓ LOADED</span>
              </div>
              <div className="aspect-square bg-paper relative">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale-[10%]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/10 pointer-events-none" />
              </div>
              <div className="p-5 border-t border-rule font-mono text-xs space-y-1.5">
                {fixture.map((row) => (
                  <div key={row.k} className="flex items-baseline gap-2">
                    <span className="text-ink-muted w-24 shrink-0">{row.k}:</span>
                    <span
                      className={`${
                        row.status === 'pass' ? 'text-pass' : 'text-ink'
                      } ${row.mono ? 'font-bold' : ''} break-all`}
                    >
                      "{row.v}"
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: description + environment */}
          <div className="md:col-span-3 reveal space-y-6">
            <div>
              <div className="font-mono text-xs text-ink-muted mb-2">// summary</div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                {about.heading}{' '}
                <span className="text-ink-muted font-normal">@ {about.company}</span>
              </h3>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </div>

            <div className="test-card p-0 overflow-hidden">
              <div className="report-header">test environment</div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-rule">
                {about.highlights.map((h) => {
                  const Icon = ICONS[h.icon]
                  return (
                    <div key={h.label} className="flex items-center gap-3 p-4">
                      <div className="text-ink">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                          {h.label}
                        </div>
                        <div className="text-sm font-medium truncate">{h.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
