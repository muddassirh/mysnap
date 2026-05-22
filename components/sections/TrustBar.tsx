'use client'

import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'
import { motion } from 'framer-motion'

const stats = [
  { value: '500K+', label: 'Photos created' },
  { value: '99.8%', label: 'Acceptance rate' },
  { value: '150+', label: 'Countries supported' },
  { value: '< 5s', label: 'Average turnaround' },
]

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'India',
  'Japan',
  'Brazil',
  'Mexico',
]

export default function TrustBar() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-page">
        {/* Stats — bigger, more weight, less crowding */}
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-slate-100 lg:divide-y-0 border border-slate-100 rounded-2xl overflow-hidden bg-white">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-7 text-center"
              >
                <div className="font-display font-semibold text-slate-900 text-3xl sm:text-4xl tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Country list — restrained, no emoji */}
        <FadeIn delay={0.15} className="mt-12">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold mb-5">
            Compliant with photo standards across
          </p>
          <StaggerContainer
            className="flex flex-wrap items-center justify-center gap-2"
            staggerDelay={0.03}
          >
            {countries.map((country) => (
              <motion.span
                key={country}
                variants={staggerItem}
                className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full text-sm font-medium text-slate-600 transition-colors duration-150 hover:border-slate-300 hover:bg-white"
              >
                {country}
              </motion.span>
            ))}
            <motion.span
              variants={staggerItem}
              className="px-3.5 py-1.5 text-sm font-medium text-blue-600"
            >
              + 140 more
            </motion.span>
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  )
}