'use client'

import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'

const plans = [
  {
    name: 'Basic',
    price: 4.99,
    description: 'Perfect for a one-time passport photo need.',
    features: [
      '1 digital passport photo',
      'AI background removal',
      'Compliance check',
      'Instant download',
      'Email delivery',
    ],
    cta: 'Get Started',
    featured: false,
    badge: null,
  },
  {
    name: 'Standard',
    price: 9.99,
    description: 'Our most popular plan for individuals.',
    features: [
      '4 digital photos (print-ready)',
      'AI background removal',
      'Compliance check + human review',
      'Instant download',
      'Printable 4×6 sheet',
      '100% acceptance guarantee',
      'Priority support',
    ],
    cta: 'Get Standard',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Family',
    price: 19.99,
    description: 'Best value for multiple people or documents.',
    features: [
      'Up to 5 people / documents',
      'AI + human expert review',
      'All document types (passport, visa, ID)',
      'Instant download for all',
      'Printable sheets included',
      '100% acceptance guarantee',
      '24/7 dedicated support',
    ],
    cta: 'Get Family Plan',
    featured: false,
    badge: 'Best Value',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Simple Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            One-time payment. No subscriptions.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Pay once, get your compliant passport photo instantly. No hidden fees, no monthly charges.
          </p>
        </FadeIn>

        {/* Plans */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: plan.featured ? -4 : -4, transition: { duration: 0.22 } }}
              className={`relative rounded-3xl p-7 border flex flex-col transition-shadow duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 shadow-2xl shadow-blue-200 text-white'
                  : 'bg-white border-slate-200 hover:shadow-xl hover:shadow-slate-100'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold shadow ${
                  plan.featured
                    ? 'bg-amber-400 text-amber-900'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-wider mb-1 ${plan.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'var(--font-sora)' }}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.featured ? 'text-blue-200' : 'text-slate-400'}`}>one-time</span>
                </div>
                <p className={`text-sm ${plan.featured ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-blue-200' : 'text-emerald-500'}`} />
                    <span className={plan.featured ? 'text-blue-100' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://mysnappass.com/upload"
                className={`shine-hover flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-xl'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100'
                }`}
              >
                <Zap className="w-4 h-4" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Money-back note */}
        <FadeIn delay={0.3} className="text-center mt-10">
          <p className="text-sm text-slate-500">
            🛡️ All plans include our <span className="font-semibold text-slate-700">100% money-back guarantee</span> if your photo is rejected.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
