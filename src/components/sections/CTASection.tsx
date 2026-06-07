import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FloatingElements } from './FloatingElements'

export function CTASection({
  title = 'Need Legal Assistance?',
  subtitle = 'Schedule a confidential consultation with our experienced attorneys today.',
  showPhone = true,
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)',
        }}
      />
      <FloatingElements />

      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {showPhone && (
            <Button asChild variant="outline" size="lg">
              <a href="tel:+15551234567">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
