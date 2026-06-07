import type { LucideIcon } from 'lucide-react'

export interface Attorney {
  id: number
  name: string
  position: string
  bio: string
  image: string
  specialties: string[]
  linkedin: string
  email: string
}

export interface CoreValue {
  title: string
  description: string
}

export interface PracticeArea {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface WhyChooseUsItem {
  title: string
  description: string
  icon: string
}

export interface HeroStat {
  value: number
  suffix: string
  label: string
}

export interface CaseResult {
  id: number
  title: string
  category: string
  outcome: string
  description: string
  year: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export type IconMap = Record<string, LucideIcon>
