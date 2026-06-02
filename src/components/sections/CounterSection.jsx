import { useCounter } from '@/hooks/useCounter'
import { MotionWrapper } from '@/components/animations/MotionWrapper'

function Counter({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2200)

  return (
    <div ref={ref} className="text-center p-6">
      <p className="font-heading text-4xl md:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-slate-400 text-sm uppercase tracking-wider">{label}</p>
    </div>
  )
}

export function CounterSection({ stats, dark = true }) {
  return (
    <section className={dark ? 'bg-primary py-20' : 'bg-white py-20'}>
      <div className="container mx-auto px-4 lg:px-8">
        <MotionWrapper variant="fadeIn" className="text-center mb-12">
          <h2 className={`font-heading text-3xl md:text-4xl font-bold ${dark ? 'text-white' : 'text-primary'}`}>
            Our Track Record
          </h2>
          <p className={`mt-3 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
            Numbers that reflect our commitment to excellence
          </p>
        </MotionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
