import { Link, useLocation } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  const { pathname } = useLocation()
  return (
    <section className="min-h-[78vh] flex items-center px-6 pt-28 pb-12">
      <div className="w-full max-w-3xl mx-auto test-card p-0 overflow-hidden">
        <div className="report-header flex items-center justify-between">
          <span>404.spec.ts</span>
          <span className="badge-fail">✗ FAIL</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-sm">
          <div className="text-fail font-bold mb-2">AssertionError: route not found</div>
          <div className="text-ink mb-4">
            expect(<span className="text-accent">router</span>).toResolve(
            <span className="text-fail">'{pathname}'</span>)
          </div>
          <div className="text-ink-muted text-xs leading-relaxed mb-1">
            ─ stack trace ─────────────────────────────
          </div>
          <pre className="text-xs text-ink-muted whitespace-pre-wrap leading-relaxed">
{`  at Router.match (router.js:42:8)
  at App.render (App.jsx:18:5)
  at HashRouter (App.jsx:16:3)
  ↳ no matching route for "${pathname}"`}
          </pre>
        </div>
        <div className="px-6 md:px-8 py-3 border-t border-rule bg-paper-2 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            1 failed · exit 1
          </span>
          <Link to="/" className="btn btn-primary">
            <Home size={14} /> retry()
          </Link>
        </div>
      </div>
    </section>
  )
}
