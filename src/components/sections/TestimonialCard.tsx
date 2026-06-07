import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-card h-full">
      <CardContent className="p-8">
        <Quote className="h-10 w-10 text-accent/40 mb-4" />
        <p className="text-slate-600 leading-relaxed italic mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-accent"
          />
          <div>
            <p className="font-heading font-semibold text-primary">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
