import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { AttorneyCard } from '@/components/sections/AttorneyCard'
import { CTASection } from '@/components/sections/CTASection'
import { StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper'
import { attorneys } from '@/data/attorneys'

export default function Attorneys() {
  return (
    <>
      <SEO
        title="Our Attorneys"
        description="Meet the experienced attorneys at Prestige Legal — dedicated professionals across corporate, family, criminal, labour, property, and litigation law."
      />
      <PageHero
        title="Our Attorneys"
        subtitle="Distinguished legal professionals committed to your success."
        breadcrumb="Home / Attorneys"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Legal Team"
            title="Experienced Advocates"
            subtitle="Our attorneys bring decades of combined experience and a shared commitment to excellence."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <StaggerItem key={attorney.id}>
                <AttorneyCard attorney={attorney} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
