'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, Download, CheckCircle2 } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Your Photo',
    description:
      'Take a selfie or upload an existing photo from your phone or computer. JPG, PNG, and WEBP formats are accepted.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI Processes & Checks',
    description:
      'Our advanced AI engine analyzes your photo in under 3 seconds — adjusting background, sizing, and compliance automatically.',
    color: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Expert Review',
    description:
      'Every photo is double-checked by our team of compliance experts to guarantee 100% government acceptance.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Download,
    number: '04',
    title: 'Download or Print',
    description:
      'Instantly download your compliant digital photo or have professional prints delivered to your door.',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            How It Works
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From selfie to submission-ready passport photo in under a minute — here's how we make it easy.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-shadow duration-300 cursor-default"
              >
                {/* Step number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-slate-50 select-none" style={{ fontFamily: 'var(--font-sora)' }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 ${step.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${step.iconColor}`} strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>

                {/* Connector arrow (not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300 text-xl select-none">
                    →
                  </div>
                )}
              </motion.div>
            )
          })}
        </StaggerContainer>

        {/* CTA below steps */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <a
            href="https://mysnappass.com/upload"
            className="shine-hover inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            Start for Free — No Account Needed
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
