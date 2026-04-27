import About from '../components/About'

export default function AboutPage() {
  // Top padding offsets the fixed Navbar so the section header isn't hidden behind it.
  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
