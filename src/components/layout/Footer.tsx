import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Scale, Mail, Phone, MapPin, Share2, Globe, Link2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { practiceAreas } from '@/data/services'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Attorneys', path: '/attorneys' },
  { name: 'Case Results', path: '/case-results' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Instagram' },
]

export function Footer() {
  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for subscribing! (Demo)')
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold block">Prestige Legal</span>
                <span className="text-[10px] uppercase tracking-widest text-accent">Attorneys</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Protecting Your Rights. Delivering Justice. Trusted legal representation for over 15 years.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>123 Justice Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@prestigelegal.com" className="hover:text-white transition-colors">
                  info@prestigelegal.com
                </a>
              </li>
            </ul>

            <form onSubmit={handleNewsletter} className="mt-6">
              <p className="text-sm text-slate-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-500"
                />
                <Button type="submit" variant="default" size="sm">
                  Join
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Prestige Legal Attorneys. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
