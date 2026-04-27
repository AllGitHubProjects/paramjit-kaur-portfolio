import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="text-7xl md:text-8xl font-extrabold bg-brand-gradient bg-clip-text text-transparent mb-4">
        404
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">Page not found</h1>
      <p className="text-muted mb-8">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary">
        <Home size={16} /> Back to Home
      </Link>
    </section>
  )
}
