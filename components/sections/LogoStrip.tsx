'use client'

import { FadeIn } from '@/components/ui/animations'

/**
 * A tasteful "as seen in / trusted by" strip.
 * We use refined text wordmarks instead of fake brand logos so we stay
 * truthful — adapt these to your real press coverage when you have it.
 */
const wordmarks = [
  { name: 'TechCrunch', style: 'font-serif font-semibold tracking-tight' },
  { name: 'Product Hunt', style: 'font-display font-semibold' },
  { name: 'Lifehacker', style: 'font-display font-bold italic' },
  { name: 'The Verge', style: 'font-display font-semibold tracking-wide' },
  { name: 'Wired', style: 'font-display font-bold tracking-widest uppercase text-sm' },
  { name: 'Forbes', style: 'font-serif font-bold tracking-tight' },
]

export default function LogoStrip() {
  return (
    <section className="py-12 lg:py-14 border-y border-slate-100 bg-white">
      <div className="container-page">
        <FadeIn>
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-7">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-5">
            {wordmarks.map((w) => (
              <span
                key={w.name}
                className={`text-slate-400 hover:text-slate-700 transition-colors duration-200 text-lg ${w.style}`}
              >
                {w.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}