'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { FadeIn } from '@/components/ui/animations'
import SectionHeading from '@/components/ui/SectionHeading'

type Cell =
  | { type: 'check'; text?: string }
  | { type: 'cross'; text?: string }
  | { type: 'partial'; text?: string }
  | { type: 'text'; text: string }

const rows: Array<{ feature: string; mysnap: Cell; studio: Cell; diy: Cell }> = [
  {
    feature: 'Price',
    mysnap: { type: 'text', text: 'From $4.99' },
    studio: { type: 'text', text: '$15 – $25' },
    diy: { type: 'text', text: 'Free' },
  },
  {
    feature: 'Time required',
    mysnap: { type: 'text', text: '< 1 minute' },
    studio: { type: 'text', text: '30+ min trip' },
    diy: { type: 'text', text: '~ 30 minutes' },
  },
  {
    feature: 'AI compliance check',
    mysnap: { type: 'check' },
    studio: { type: 'cross' },
    diy: { type: 'cross' },
  },
  {
    feature: 'Background removal',
    mysnap: { type: 'check' },
    studio: { type: 'check' },
    diy: { type: 'cross' },
  },
  {
    feature: 'Human review',
    mysnap: { type: 'check' },
    studio: { type: 'partial', text: 'Varies' },
    diy: { type: 'cross' },
  },
  {
    feature: 'Money-back guarantee',
    mysnap: { type: 'check' },
    studio: { type: 'cross' },
    diy: { type: 'cross' },
  },
  {
    feature: 'Works from home',
    mysnap: { type: 'check' },
    studio: { type: 'cross' },
    diy: { type: 'check' },
  },
]

function CellRenderer({ cell, featured }: { cell: Cell; featured?: boolean }) {
  if (cell.type === 'check') {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            featured ? 'bg-blue-600' : 'bg-emerald-500'
          }`}
        >
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      </div>
    )
  }
  if (cell.type === 'cross') {
    return (
      <div className="flex items-center justify-center">
        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
          <X className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
        </div>
      </div>
    )
  }
  if (cell.type === 'partial') {
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
          <Minus className="w-3.5 h-3.5 text-amber-600" strokeWidth={2.5} />
        </div>
        {cell.text && (
          <span className="text-[11px] text-slate-500 font-medium">{cell.text}</span>
        )}
      </div>
    )
  }
  return (
    <div className="text-center">
      <span
        className={`text-sm font-semibold ${
          featured ? 'text-blue-700' : 'text-slate-700'
        }`}
      >
        {cell.text}
      </span>
    </div>
  )
}

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="The honest comparison"
          title="Skip the trip to the photo studio"
          description="Every other option asks you to compromise on time, money, or certainty. Here's how the three stack up side-by-side."
        />

        <FadeIn delay={0.15} className="mt-14">
          <div className="relative max-w-4xl mx-auto">
            {/* Card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-card overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-slate-200">
                <div className="p-5 lg:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                    What you get
                  </p>
                </div>
                <div className="relative p-5 lg:p-6 bg-blue-50/50 border-l border-r border-blue-100">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                    Best choice
                  </div>
                  <div className="text-center">
                    <p className="font-display text-sm sm:text-base font-semibold text-blue-700">
                      MySnapPass
                    </p>
                  </div>
                </div>
                <div className="p-5 lg:p-6 text-center">
                  <p className="font-display text-sm sm:text-base font-semibold text-slate-700">
                    Photo studio
                  </p>
                </div>
                <div className="p-5 lg:p-6 text-center">
                  <p className="font-display text-sm sm:text-base font-semibold text-slate-700">
                    DIY at home
                  </p>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center ${
                    i !== rows.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="p-4 lg:p-5">
                    <p className="text-sm font-medium text-slate-700">
                      {row.feature}
                    </p>
                  </div>
                  <div className="p-4 lg:p-5 bg-blue-50/50 border-l border-r border-blue-100">
                    <CellRenderer cell={row.mysnap} featured />
                  </div>
                  <div className="p-4 lg:p-5">
                    <CellRenderer cell={row.studio} />
                  </div>
                  <div className="p-4 lg:p-5">
                    <CellRenderer cell={row.diy} />
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              The DIY route gets you free, but a rejected photo means starting over
              and delaying your application. We&apos;ve seen it happen too many times.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}