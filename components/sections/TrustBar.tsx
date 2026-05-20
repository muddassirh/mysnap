'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/animations'

const stats = [
  { value: '500K+', label: 'Photos Created' },
  { value: '99.8%', label: 'Acceptance Rate' },
  { value: '150+', label: 'Countries Supported' },
  { value: '4.9★', label: 'Average Rating' },
]

const countries = [
  '🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇩🇪 Germany', '🇫🇷 France', '🇮🇳 India', '🇯🇵 Japan',
]

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Stats row */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold text-blue-600 mb-1"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Countries scroll */}
        <FadeIn delay={0.2}>
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Accepted in 150+ countries including
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
              >
                {country}
              </span>
            ))}
            <span className="px-3 py-1.5 text-sm font-medium text-blue-500">+ 142 more</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
