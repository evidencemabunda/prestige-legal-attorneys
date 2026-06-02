import {
  Building2,
  Users,
  Shield,
  Briefcase,
  Home,
  Scale,
} from 'lucide-react'

export const practiceAreas = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate Law',
    shortDescription:
      'Strategic counsel for mergers, compliance, contracts, and corporate governance.',
    description:
      'Our corporate law team advises businesses of all sizes on entity formation, mergers and acquisitions, regulatory compliance, shareholder agreements, and day-to-day commercial transactions. We protect your interests while enabling sustainable growth.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'family',
    icon: Users,
    title: 'Family Law',
    shortDescription:
      'Compassionate representation for divorce, custody, adoption, and family disputes.',
    description:
      'We handle sensitive family matters with discretion and empathy — including divorce, child custody, spousal support, adoption, and prenuptial agreements — always prioritizing the wellbeing of you and your loved ones.',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
  },
  {
    id: 'criminal',
    icon: Shield,
    title: 'Criminal Defense',
    shortDescription:
      'Aggressive defense protecting your rights in investigations and court proceedings.',
    description:
      'When your freedom is at stake, our criminal defense attorneys provide vigorous representation for misdemeanors, felonies, DUI, white-collar crimes, and appeals — fighting tirelessly at every stage.',
    image:
      'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80',
  },
  {
    id: 'labour',
    icon: Briefcase,
    title: 'Labour Law',
    shortDescription:
      'Expert guidance on employment contracts, disputes, and workplace regulations.',
    description:
      'We represent both employers and employees in wrongful termination, discrimination, harassment claims, collective bargaining, and compliance with labour legislation.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  },
  {
    id: 'property',
    icon: Home,
    title: 'Property Law',
    shortDescription:
      'Comprehensive real estate transactions, disputes, and property rights protection.',
    description:
      'From residential purchases to commercial leases and boundary disputes, our property lawyers ensure smooth transactions and resolve complex real estate conflicts efficiently.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    id: 'litigation',
    icon: Scale,
    title: 'Civil Litigation',
    shortDescription:
      'Skilled advocacy in contract disputes, personal injury, and civil court matters.',
    description:
      'Our litigators bring decades of courtroom experience to contract breaches, tort claims, professional negligence, and complex multi-party disputes — always prepared to go to trial.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  },
]

export const whyChooseUs = [
  {
    title: 'Experienced Attorneys',
    description:
      'Our team brings over 15 years of combined expertise across diverse practice areas.',
    icon: 'Award',
  },
  {
    title: 'Client Focused',
    description:
      'We listen first, tailor strategies to your goals, and keep you informed every step.',
    icon: 'Heart',
  },
  {
    title: 'Proven Results',
    description:
      'A track record of favorable settlements and courtroom victories speaks for itself.',
    icon: 'TrendingUp',
  },
  {
    title: 'Confidential Service',
    description:
      'Your privacy is paramount. All communications are protected by attorney-client privilege.',
    icon: 'Lock',
  },
]

export const heroStats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Cases Won' },
  { value: 1000, suffix: '+', label: 'Clients Served' },
  { value: 98, suffix: '%', label: 'Success Rate' },
]
