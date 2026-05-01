// Suite-style section header rendered like a `describe()` block in a test runner.
export default function SectionHeader({ tag, title, accent }) {
  const suiteName = (tag || '').toLowerCase().replace(/\s+/g, '_')
  const fullTitle = accent ? `${title} ${accent}` : title

  return (
    <div className="mb-10 reveal">
      <div className="font-mono text-xs text-ink-muted mb-2">
        <span className="text-accent">▸</span> describe(
        <span className="text-pass">'{suiteName}'</span>, () =&gt; {'{'}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
        {fullTitle}
      </h2>
      <div className="mt-3 flex items-center gap-3 text-xs font-mono text-ink-muted">
        <span className="badge-pass">✓ PASS</span>
        <span>·</span>
        <span>suite ready</span>
      </div>
    </div>
  )
}
