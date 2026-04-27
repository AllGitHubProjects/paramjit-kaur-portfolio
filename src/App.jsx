import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import CertificationsPage from './pages/CertificationsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

// HashRouter is used so the site works on GitHub Pages without any server-side
// rewrite rules — URLs look like /paramjit-kaur-portfolio/#/about.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
