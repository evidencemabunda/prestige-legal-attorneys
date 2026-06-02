import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { PageLoader } from '@/components/layout/PageLoader'
import { PageTransition } from '@/components/animations/MotionWrapper'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Attorneys from '@/pages/Attorneys'
import CaseResults from '@/pages/CaseResults'
import FAQ from '@/pages/FAQ'
import Contact from '@/pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="attorneys"
            element={
              <PageTransition>
                <Attorneys />
              </PageTransition>
            }
          />
          <Route
            path="case-results"
            element={
              <PageTransition>
                <CaseResults />
              </PageTransition>
            }
          />
          <Route
            path="faq"
            element={
              <PageTransition>
                <FAQ />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
