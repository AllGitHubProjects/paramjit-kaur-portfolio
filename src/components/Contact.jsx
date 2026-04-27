import { useState } from 'react'
import { Linkedin, MapPin, Briefcase, BadgeCheck, Send } from 'lucide-react'
import { contact, profile } from '../data/portfolio'
import SectionHeader from './SectionHeader'

const ICONS = { Linkedin, MapPin, Briefcase, BadgeCheck }

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
    // No backend wired up — open the user's mail client with a prefilled message.
    const body = `Hi Paramjit,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${
      encodeURIComponent(form.firstName + ' ' + form.lastName)
    }%0D%0A${encodeURIComponent(form.email)}`
    window.location.href = `mailto:${profile.links.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio enquiry',
    )}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Contact" title="Let's" accent="Connect" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-3">{contact.heading}</h3>
            <p className="text-muted leading-relaxed mb-8">{contact.intro}</p>

            <div className="space-y-4">
              {contact.items.map((i) => {
                const Icon = ICONS[i.icon]
                const inner = (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/10
                                  hover:border-primary/40 transition-colors">
                    <div className="w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted uppercase tracking-wider">{i.label}</div>
                      <div className="text-sm font-medium break-all">{i.value}</div>
                    </div>
                  </div>
                )
                return i.href ? (
                  <a key={i.label} href={i.href} target="_blank" rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={i.label}>{inner}</div>
                )
              })}
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" name="firstName" value={form.firstName} onChange={onChange} placeholder="John" />
              <Field label="Last Name" name="lastName" value={form.lastName} onChange={onChange} placeholder="Doe" />
            </div>
            <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} placeholder="john@example.com" required />
            <Field label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="Job Opportunity / Collaboration" />
            <div>
              <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                placeholder="Hi Paramjit, I'd love to connect about..."
                className="w-full px-4 py-3 rounded-lg bg-bg border border-primary/15
                           focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              <Send size={16} /> {sent ? 'Opening mail app…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="block text-xs text-muted mb-1.5 uppercase tracking-wider">{label}</label>
      <input
        {...rest}
        className="w-full px-4 py-3 rounded-lg bg-bg border border-primary/15
                   focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  )
}
