import { Linkedin, Github, Mail, Heart } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 px-6 border-t border-primary/10 text-center">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center
                     text-muted hover:text-primary hover:border-primary transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center
                     text-muted hover:text-primary hover:border-primary transition-colors"
        >
          <Github size={16} />
        </a>
        <a
          href={`mailto:${profile.links.email}`}
          aria-label="Email"
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center
                     text-muted hover:text-primary hover:border-primary transition-colors"
        >
          <Mail size={16} />
        </a>
      </div>

      <p className="text-sm text-muted flex items-center justify-center gap-1">
        Designed &amp; Built with <Heart size={14} className="text-secondary fill-secondary" /> |{' '}
        <span className="text-text">{profile.name}</span> © {year}
      </p>
      <p className="text-xs text-muted mt-2">
        Software Quality Assurance Engineer | CTFL | LambdaTest Certified | Selenium Expert
      </p>
    </footer>
  )
}
