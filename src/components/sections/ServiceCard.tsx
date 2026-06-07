import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  shortDescription: string
  image: string
  featured?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  shortDescription,
  image,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={cn(
          'group h-full overflow-hidden border-0 shadow-card hover:shadow-premium transition-shadow duration-300',
          featured && 'md:col-span-2'
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">{shortDescription}</p>
          <Button asChild variant="link" className="p-0 h-auto text-secondary">
            <Link to="/services">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
