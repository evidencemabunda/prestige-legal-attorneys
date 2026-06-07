import { MotionWrapper } from '@/components/animations/MotionWrapper'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <MotionWrapper
      variant="slideUp"
      className={cn('mb-12', center && 'text-center max-w-3xl mx-auto')}
    >
      {label && (
        <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3">
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-heading text-3xl md:text-4xl lg:text-5xl font-bold',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn('mt-6 h-1 w-16 bg-accent', center && 'mx-auto')} />
    </MotionWrapper>
  )
}
