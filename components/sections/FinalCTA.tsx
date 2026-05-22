'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { FadeIn } from '@/components/ui/animations'

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
            {/* Background glow */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.35), transparent 55%)',
              }}
            />
            {/* Dot pattern */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage:
                  'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 80%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 80%)',
              }}
            />

            <div className="relative max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-200 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ready in under a minute
                </span>

                <h2 className="font-display text-display-xl font-semibold text-white tracking-tight text-balance">
                  Your passport photo is{' '}
                  <span className="bg-gradient-to-r from-blue-300 via-white to-blue-200 bg-clip-text text-transparent">
                    one upload away.
                  </span>
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-slate-300 max-w-xl mx-auto text-pretty">
                  Skip the studio, skip the second submission, skip the doubt.
                  $4.99 and a money-back guarantee.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="https://mysnappass.com/upload"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-blue-50 text-slate-900 font-semibold rounded-xl shadow-2xl shadow-blue-900/20 hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
                  >
                    Create my photo now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/15 hover:border-white/25 font-semibold rounded-xl transition-all duration-200 text-[15px]"
                  >
                    See how it works
                  </Link>
                </div>

                {/* Proof row */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
                  <div className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" strokeWidth={2.25} />
                    Money-back guarantee
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/15" />
                  <div className="inline-flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>
                      <span className="font-semibold text-white">4.9</span> from 12,000+ reviews
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}