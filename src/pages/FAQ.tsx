import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about Prestige Legal Attorneys — consultations, fees, practice areas, and more."
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our legal services."
        breadcrumb="Home / FAQ"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            label="Help Center"
            title="How Can We Help?"
            subtitle="Find answers to the most common questions about working with our firm."
          />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our team is ready to provide personalized answers during a free initial consultation."
      />
    </>
  )
}
