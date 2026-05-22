'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Clock,
  Globe2,
  Smartphone,
  Sparkles,
  Headphones,
} from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    icon: ShieldCheck,
    title: '100% acceptance guarantee',
    description:
      'If your photo is rejected by any government authority, we re-do it or refund you in full. No fine print.',
  },
  {
    icon: Sparkles,
    title: 'AI-powered in seconds',
    description:
      'Computer vision handles background removal, cropping, lighting, and biometric checks automatically.',
  },
  {
    icon: Globe2,
    title: '150+ country standards',
    description:
      'A database of biometric requirements for every passport, visa, and ID type, kept up-to-date by our team.',
  },
  {
    icon: Smartphone,
    title: 'Works on any device',
    description:
      'Take or upload directly from your phone, tablet, or laptop. Nothing to install.',
  },
  {
    icon: Clock,
    title: 'Instant digital delivery',
    description:
      'Download a compliant photo immediately, plus a print-ready 4×6 sheet with multiple copies.',
  },
  {
    icon: Headphones,
    title: 'Real human support',
    description:
      'Our compliance team is available around the clock to answer questions before you submit.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why MySnapPass"
          title="Built for one job, done exceptionally well"
          description="Every detail — AI accuracy, expert review, country-specific rules — exists to make sure your first submission is your last."
        />

        <StaggerContainer
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={staggerItem}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/70 shadow-card hover:shadow-card-hover hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-blue-100 group-hover:border-blue-200">
                  <Icon
                    className="w-[20px] h-[20px] text-blue-600"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-[17px] font-semibold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                  {feat.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}