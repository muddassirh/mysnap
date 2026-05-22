'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Upload, Cpu, CheckCircle2, Download, ArrowRight } from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload a selfie',
    description:
      'Take one on your phone or upload an existing photo. JPG, PNG, and HEIC formats all work.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI does the heavy lifting',
    description:
      'In under 5 seconds we crop, recenter, replace the background, and verify every biometric rule.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'A real person double-checks',
    description:
      'A compliance specialist reviews each photo before delivery — that\'s how we guarantee acceptance.',
  },
  {
    icon: Download,
    number: '04',
    title: 'Download or print',
    description:
      'Get a digital file ready for online applications, or order professional prints to your door.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-slate-50/60"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From selfie to submission-ready in under a minute"
          description="No specialized equipment, no studio, no second appointment when the first photo gets rejected."
        />

        <StaggerContainer
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.1}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative group"
              >
                <div className="relative h-full bg-white border border-slate-200/70 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:border-slate-300/70 hover:-translate-y-1 transition-all duration-300">
                  {/* Step number — subtle, like Linear */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Icon className="w-[20px] h-[20px] text-blue-600" strokeWidth={2} />
                    </div>
                    <span className="font-display text-sm font-semibold text-slate-300 tracking-wider">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-[17px] font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 text-slate-300" strokeWidth={2} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </StaggerContainer>

        <div className="mt-14 text-center">
          <Link
            href="https://mysnappass.com/upload"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
          >
            Try it free — no account needed
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}