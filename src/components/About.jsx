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
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="About Me" title="Passionate About" accent="Quality" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image + floating cards */}
          <div className="relative reveal">
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden bg-brand-gradient p-1">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-3xl object-cover bg-card"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

            {about.floatCards.map((card, i) => {
              const Icon = ICONS[card.icon]
              return (
                <div
                  key={card.title}
                  className={`hidden sm:flex absolute items-center gap-3 p-3 pr-4 rounded-xl
                              bg-card border border-primary/20 shadow-xl backdrop-blur
                              animate-float ${
                                i === 0
                                  ? '-left-4 top-6'
                                  : '-right-4 bottom-6'
                              }`}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <div className={`p-2 rounded-lg bg-card ${card.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-left">
                    <strong className="text-sm">{card.title}</strong>
                    <div className="text-xs text-muted">{card.subtitle}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Text + highlights */}
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-4">
              {about.heading} @{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                {about.company}
              </span>
            </h3>

            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted leading-relaxed mb-4 text-justify">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {about.highlights.map((h) => {
                const Icon = ICONS[h.icon]
                return (
                  <div
                    key={h.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-primary/10"
                  >
                    <div className="text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted">{h.label}</div>
                      <div className="text-sm font-medium">{h.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
