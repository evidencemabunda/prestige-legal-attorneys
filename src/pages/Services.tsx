import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTASection } from '@/components/sections/CTASection'
import { MotionWrapper } from '@/components/animations/MotionWrapper'
import { Button } from '@/components/ui/button'
import { practiceAreas } from '@/data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Legal Services"
        description="Comprehensive legal services including corporate law, family law, criminal defense, labour law, property law, and civil litigation."
      />
      <PageHero
        title="Our Legal Services"
        subtitle="Expert counsel across every major practice area."
        breadcrumb="Home / Services"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Full-Service Legal Representation"
            subtitle="From initial consultation to final resolution, we stand by your side."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <ServiceCard key={area.id} {...area} />
            ))}
          </div>
        </div>
      </section>

      {practiceAreas.map((area, index) => {
        const Icon = area.icon
        const isEven = index % 2 === 0
        return (
          <section
            key={area.id}
            id={area.id}
            className={`py-24 ${isEven ? 'bg-white' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <MotionWrapper variant={isEven ? 'slideRight' : 'slideLeft'} className={!isEven ? 'lg:order-2' : ''}>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="rounded-2xl shadow-premium w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                </MotionWrapper>
                <MotionWrapper variant={isEven ? 'slideLeft' : 'slideRight'} className={!isEven ? 'lg:order-1' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                    {area.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>
                  <Button asChild>
                    <Link to="/contact">
                      Get Legal Help <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </MotionWrapper>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </>
  )
}
