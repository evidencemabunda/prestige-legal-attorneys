import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CounterSection } from '@/components/sections/CounterSection'
import { CTASection } from '@/components/sections/CTASection'
import { MotionWrapper } from '@/components/animations/MotionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { caseResults, caseStats, timeline } from '@/data/caseResults'
import { Trophy } from 'lucide-react'

export default function CaseResults() {
  return (
    <>
      <SEO
        title="Case Results"
        description="View Prestige Legal Attorneys' successful case results, client success stories, and track record of legal victories."
      />
      <PageHero
        title="Case Results"
        subtitle="A proven track record of favorable outcomes for our clients."
        breadcrumb="Home / Case Results"
      />

      <CounterSection stats={caseStats} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Success Stories"
            title="Notable Case Outcomes"
            subtitle="Representative results that demonstrate our commitment to achieving the best possible outcomes."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseResults.map((caseItem, i) => (
              <MotionWrapper key={caseItem.id} variant="slideUp" delay={i * 0.05}>
                <Card className="h-full border-0 shadow-card hover:shadow-premium transition-shadow overflow-hidden group">
                  <div className="bg-primary p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <Trophy className="h-8 w-8 text-accent mb-3" />
                    <span className="text-xs uppercase tracking-wider text-accent font-medium">
                      {caseItem.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white mt-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-3xl font-heading font-bold text-accent mt-3">
                      {caseItem.stat}
                    </p>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-secondary mb-2">{caseItem.outcome}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{caseItem.description}</p>
                    <p className="mt-4 text-xs text-slate-400">{caseItem.year}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Firm Timeline"
            subtitle="Key milestones in our pursuit of legal excellence."
          />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <MotionWrapper key={item.year} variant="slideLeft" delay={i * 0.08}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary font-heading font-bold text-sm shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 mt-2 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-accent font-semibold text-sm">{item.year}</p>
                    <p className="text-slate-600 mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
