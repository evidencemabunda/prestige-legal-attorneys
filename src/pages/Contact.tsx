import { Mail, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { MotionWrapper } from '@/components/animations/MotionWrapper'
import { Card, CardContent } from '@/components/ui/card'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: '123 Justice Avenue, Suite 500\nNew York, NY 10001',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@prestigelegal.com',
    href: 'mailto:info@prestigelegal.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM',
  },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Prestige Legal Attorneys for a consultation. Office location, phone, email, and contact form."
      />
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out for a confidential consultation."
        breadcrumb="Home / Contact"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <MotionWrapper variant="slideRight">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, content, href }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{title}</h4>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-600 hover:text-secondary transition-colors whitespace-pre-line"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-slate-600 whitespace-pre-line">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="mt-8 border-red-200 bg-red-50">
                <CardContent className="p-6 flex gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Emergency Contact</h4>
                    <p className="text-red-700 text-sm">
                      For urgent legal matters available 24/7, call{' '}
                      <a href="tel:+15559990000" className="font-bold underline">
                        (555) 999-0000
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>

            <MotionWrapper variant="slideLeft">
              <Card className="border-0 shadow-premium">
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600 text-sm mb-6">
                    Fill out the form below and we&apos;ll respond within 24 hours.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-[450px] bg-slate-200">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74016297932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e9a3af6f9613!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
