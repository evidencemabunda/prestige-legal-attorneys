import { Link } from 'react-router-dom'
import { Award, Heart, TrendingUp, Lock, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'
import { Hero } from '@/components/sections/Hero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { TestimonialSlider } from '@/components/sections/TestimonialSlider'
import { CounterSection } from '@/components/sections/CounterSection'
import { CTASection } from '@/components/sections/CTASection'
import { MotionWrapper, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { practiceAreas, whyChooseUs, heroStats } from '@/data/services'

const iconMap = { Award, Heart, TrendingUp, Lock }

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Prestige Legal Attorneys — Experienced attorneys you can trust. Corporate, family, criminal, labour, property law and civil litigation."
      />
      <Hero />

      {/* About Preview */}
      <section id="about-preview" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper variant="slideRight">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Prestige Legal team"
                  className="rounded-2xl shadow-premium w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-2xl shadow-premium hidden md:block">
                  <p className="font-heading text-3xl font-bold">15+</p>
                  <p className="text-sm font-medium">Years of Excellence</p>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper variant="slideLeft">
              <SectionHeading
                label="About Us"
                title="A Legacy of Legal Excellence"
                center={false}
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded in 2009, Prestige Legal Attorneys has grown into one of the
                region&apos;s most respected law firms. We combine deep legal expertise
                with a genuine commitment to our clients&apos; success.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To provide exceptional legal representation that protects rights,
                    resolves disputes, and delivers justice — with integrity and compassion.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">Our Vision</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To be the most trusted law firm, recognized for excellence, innovation,
                    and unwavering dedication to our clients and community.
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Practice Areas"
            title="Comprehensive Legal Services"
            subtitle="Expert representation across all major areas of law."
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => (
              <StaggerItem key={area.id}>
                <ServiceCard {...area} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="The Prestige Legal Difference"
            subtitle="What sets us apart in delivering exceptional legal outcomes."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <MotionWrapper key={item.title} variant="scaleIn" delay={i * 0.1}>
                  <Card className="h-full border-0 shadow-card hover:shadow-premium transition-shadow group text-center p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 group-hover:bg-accent transition-colors">
                      <Icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </Card>
                </MotionWrapper>
              )
            })}
          </div>
        </div>
      </section>

      <CounterSection stats={heroStats} />

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="Real stories from clients we've had the privilege to represent."
          />
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
    </>
  )
}
