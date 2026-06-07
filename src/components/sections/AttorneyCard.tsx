import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import type { Attorney } from '@/types'

interface AttorneyCardProps {
  attorney: Attorney
  onSelect?: (attorney: Attorney) => void
}

export function AttorneyCard({ attorney, onSelect }: AttorneyCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
        <Card
          className="group h-full overflow-hidden border-0 shadow-card hover:shadow-premium transition-all cursor-pointer"
          onClick={() => {
            setOpen(true)
            onSelect?.(attorney)
          }}
        >
          <div className="relative h-72 overflow-hidden">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-xl font-bold text-white">{attorney.name}</h3>
              <p className="text-accent text-sm font-medium">{attorney.position}</p>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">{attorney.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {attorney.specialties.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full bg-slate-100 text-secondary font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
            <Button variant="link" className="mt-4 p-0 h-auto text-accent">
              View Full Profile
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-full sm:w-48 h-56 sm:h-56 object-cover object-top rounded-xl"
            />
            <div className="flex-1">
              <DialogHeader>
                <DialogTitle className="text-2xl">{attorney.name}</DialogTitle>
                <p className="text-accent font-medium">{attorney.position}</p>
              </DialogHeader>
              <p className="mt-4 text-slate-600 leading-relaxed">{attorney.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {attorney.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={attorney.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-accent hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Link2 className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-accent hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
