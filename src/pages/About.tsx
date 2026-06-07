import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { AttorneyCard } from '@/components/sections/AttorneyCard'
import { CTASection } from '@/components/sections/CTASection'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { attorneys, coreValues } from '@/data/attorneys'
import { Target, Eye, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Prestige Legal Attorneys — our story, mission, vision, core values, and experienced legal team."
      />
      <PageHero
        title="About Prestige Legal"
        subtitle="Protecting Your Rights. Delivering Justice. Since 2009."
        breadcrumb="Home / About"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper variant="slideRight">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Law office"
                className="rounded-2xl shadow-premium w-full h-[450px] object-cover"
                loading="lazy"
              />
            </MotionWrapper>
            <MotionWrapper variant="slideLeft">
              <SectionHeading
                label="Our Story"
                title="Built on Trust, Driven by Justice"
                center={false}
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                Prestige Legal Attorneys was founded in 2009 by James Mitchell with a simple
                belief: everyone deserves access to world-class legal representation. What began
                as a small practice has evolved into a full-service law firm with a team of
                distinguished attorneys.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over 15 years, we have successfully represented thousands of clients — from
                individuals facing personal crises to corporations navigating complex transactions.
                Our reputation is built on results, integrity, and an unwavering commitment to justice.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Purpose"
            title="Mission & Vision"
            light
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <MotionWrapper variant="slideUp">
              <Card className="bg-white/5 border-white/10 text-white h-full">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-slate-300 leading-relaxed">
                    To provide exceptional legal representation that protects our clients&apos;
                    rights, resolves their disputes efficiently, and delivers justice — always
                    with the highest standards of integrity, professionalism, and compassion.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
            <MotionWrapper variant="slideUp" delay={0.1}>
              <Card className="bg-white/5 border-white/10 text-white h-full">
                <CardContent className="p-8">
                  <Eye className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-heading text-2xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-slate-300 leading-relaxed">
                    To be recognized as the premier law firm in our region — known for legal
                    excellence, innovative solutions, and an unwavering dedication to our clients,
                    our community, and the pursuit of justice.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Values"
            title="Our Core Values"
            subtitle="The principles that guide every case we take and every client we serve."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <MotionWrapper key={value.title} variant="scaleIn" delay={i * 0.1}>
                <Card className="h-full border-0 shadow-card text-center p-8 hover:shadow-premium transition-shadow">
                  <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Meet the Attorneys"
            subtitle="Experienced legal professionals dedicated to your success."
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
