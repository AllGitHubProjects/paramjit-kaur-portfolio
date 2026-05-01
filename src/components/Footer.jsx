import { Linkedin, Github, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-rule bg-paper-2/40">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 items-center">
        {/* Summary line — left */}
        <div className="font-mono text-xs text-ink-muted leading-relaxed">
          <div>
            Tests: <span className="text-pass font-semibold">20 passed</span>,{' '}
            <span className="text-ink">0 failed</span>, 0 skipped
          </div>
          <div>
            Suites: 6 passed · Duration: 4y 7mo · Exit code:{' '}
            <span className="text-pass font-semibold">0</span>
          </div>
        </div>

        {/* Links — center */}
        <div className="flex justify-center gap-2">
          {[
            { href: profile.links.linkedin, icon: Linkedin, label: 'linkedin' },
            { href: profile.links.github, icon: Github, label: 'github' },
            { href: `mailto:${profile.links.email}`, icon: Mail, label: 'email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] text-ink-muted border border-rule rounded-sm hover:text-ink hover:border-ink/40 transition-colors"
              aria-label={label}
            >
              <Icon size={12} /> {label}
            </a>
          ))}
        </div>

        {/* Footer right */}
        <div className="font-mono text-[11px] text-ink-muted text-center md:text-right">
          <div>
            <span className="text-ink">{profile.name.toLowerCase().replace(' ', '.')}</span>{' '}
            © {year}
          </div>
          <div className="opacity-70">CTFL · LambdaTest · Selenium · Cypress</div>
        </div>
      </div>
    </footer>
  )
}
