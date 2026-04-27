export default function SectionHeader({ tag, title, accent }) {
  return (
    <div className="text-center mb-12 reveal">
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">
        {title} {accent && <span>{accent}</span>}
      </h2>
      <div className="section-line" />
    </div>
  )
}
