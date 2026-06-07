import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Scale, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Attorneys', path: '/attorneys' },
  { name: 'Case Results', path: '/case-results' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Scale className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span
              className={cn(
                'font-heading text-lg font-bold leading-tight block',
                scrolled ? 'text-primary' : 'text-white'
              )}
            >
              Prestige Legal
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-widest',
                scrolled ? 'text-accent' : 'text-accent'
              )}
            >
              Attorneys
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors relative py-1',
                  scrolled ? 'text-foreground' : 'text-white/90',
                  isActive && 'text-accent',
                  'hover:text-accent'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+15551234567"
            className={cn(
              'flex items-center gap-2 text-sm font-medium',
              scrolled ? 'text-foreground' : 'text-white'
            )}
          >
            <Phone className="h-4 w-4 text-accent" />
            (555) 123-4567
          </a>
          <Button asChild variant="default" size="sm">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          className={cn('lg:hidden p-2', scrolled ? 'text-primary' : 'text-white')}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-lg font-medium py-2 border-b border-slate-100',
                      isActive ? 'text-accent' : 'text-foreground'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
