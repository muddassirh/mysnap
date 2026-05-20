'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Globe2, Smartphone, Zap, HeadphonesIcon } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'

const features = [
  {
    icon: ShieldCheck,
    title: '100% Acceptance Guarantee',
    description:
      'If your photo is rejected by any government authority, we will retake or fully refund you — no questions asked.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Zap,
    title: 'AI-Powered in 3 Seconds',
    description:
      'State-of-the-art computer vision automatically removes backgrounds, corrects lighting, and checks compliance in real-time.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Globe2,
    title: '150+ Country Standards',
    description:
      'We maintain an always-updated database of biometric requirements for passports, visas, and ID cards worldwide.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Smartphone,
    title: 'Works on Any Device',
    description:
      'Take or upload your photo directly from your phone, tablet, or desktop — no app download required.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Instant Digital Delivery',
    description:
      'Download your compliant passport photo immediately. Printable 4×6 sheets with multiple copies included.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Expert Support',
    description:
      'Our compliance team is available around the clock to answer questions and ensure your photo meets all requirements.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Everything you need for a perfect passport photo
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-slate-500 text-lg leading-relaxed">
              We combine cutting-edge AI with human expertise to deliver passport photos that are guaranteed to be accepted — faster and cheaper than any photo studio.
            </p>
          </FadeIn>
        </div>

        {/* Feature grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
              >
                <div className={`w-11 h-11 ${feat.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${feat.color}`} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.description}</p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
