import { useState } from 'react'
import { Send } from 'lucide-react'
import { contact, profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'

const PROTOCOL = {
  Linkedin: 'linkedin://',
  MapPin: 'geo://',
  Briefcase: 'work://',
  BadgeCheck: 'cert://',
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const body = `Hi Paramjit,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${
      encodeURIComponent(form.firstName + ' ' + form.lastName)
    }%0D%0A${encodeURIComponent(form.email)}`
    window.location.href = `mailto:${profile.links.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio enquiry',
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-paper-2/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Contact" title="Open Channels" accent="// transports" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Endpoints */}
          <div className="reveal">
            <div className="test-card p-0 overflow-hidden">
              <div className="report-header flex items-center justify-between">
                <span>endpoints.config</span>
                <span className="badge-pass">✓ ALL OPEN</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{contact.heading}</h3>
                <p className="text-ink-muted leading-relaxed mb-6 text-sm">{contact.intro}</p>

                <ul className="space-y-2">
                  {[
                    {
                      icon: 'Mail',
                      label: 'EMAIL',
                      value: profile.links.email,
                      href: `mailto:${profile.links.email}`,
                      protocol: 'mailto://',
                    },
                    ...contact.items.map((i) => ({
                      ...i,
                      protocol: PROTOCOL[i.icon] || 'tcp://',
                    })),
                  ].map((i) => {
                    const inner = (
                      <div className="log-line flex flex-wrap items-baseline gap-2 px-3 py-2 border border-rule rounded-sm bg-paper hover:border-ink/40 transition-colors">
                        <span className="lvl-pass">[OK]</span>
                        <span className="text-accent">{i.protocol}</span>
                        <span className="text-ink break-all">{i.value}</span>
                        <span className="ml-auto text-[10px] uppercase tracking-wider text-ink-muted">
                          {i.label}
                        </span>
                      </div>
                    )
                    return (
                      <li key={i.label}>
                        {i.href ? (
                          <a href={i.href} target="_blank" rel="noreferrer" className="block">
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Payload editor form */}
          <form
            onSubmit={onSubmit}
            className="reveal test-card p-0 overflow-hidden flex flex-col"
          >
            <div className="report-header flex items-center justify-between">
              <span>POST /message</span>
              <span className="badge-running">▶ DRAFT</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="first_name"
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder="John"
                />
                <Field
                  label="last_name"
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder="Doe"
                />
              </div>
              <Field
                label="email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="john@example.com"
                required
              />
              <Field
                label="subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Job opportunity"
              />
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-1.5">
                  message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                  placeholder="Hi Paramjit,"
                  className="w-full px-3 py-2 rounded-sm bg-paper border border-rule font-mono text-sm text-ink
                             focus:border-ink focus:outline-none transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                <Send size={14} /> {sent ? 'mail client opened' : 'send_request()'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-1.5">
        {label}
      </label>
      <input
        {...rest}
        className="w-full px-3 py-2 rounded-sm bg-paper border border-rule font-mono text-sm text-ink
                   focus:border-ink focus:outline-none transition-colors"
      />
    </div>
  )
}
