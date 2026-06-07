import { motion } from 'framer-motion'
import { FloatingElements } from './FloatingElements'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center bg-primary overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary/80" />
      <FloatingElements />

      <div className="container relative mx-auto px-4 lg:px-8 pt-32 pb-16">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm uppercase tracking-widest mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-300 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 h-1 w-24 bg-accent origin-left"
        />
      </div>
    </section>
  )
}
