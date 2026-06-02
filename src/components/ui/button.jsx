import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent text-primary hover:bg-amber-400 shadow-md',
        secondary: 'bg-secondary text-white hover:bg-blue-900',
        outline: 'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
        ghost: 'hover:bg-slate-100 text-foreground',
        dark: 'bg-primary text-white hover:bg-slate-800',
        link: 'text-accent underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-13 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ripple = true, ...props }, ref) => {
    const useMotion = ripple && !asChild
    const Comp = asChild ? Slot : useMotion ? motion.button : 'button'
    const motionProps = useMotion
      ? {
          whileTap: { scale: 0.97 },
          whileHover: { scale: 1.02 },
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }
      : {}

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...motionProps}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
