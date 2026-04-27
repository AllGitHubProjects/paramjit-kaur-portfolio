import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import useReveal from '../hooks/useReveal'

// Persistent shell wrapping every routed page. Navbar + Footer stay mounted
// while only the <Outlet /> swaps between pages.
export default function Layout() {
  useReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
