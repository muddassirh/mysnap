'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

/* ─── Tip Data ────────────────────────────────────────────────── */
const tips = [
  {
    number: '1',
    title: 'Mind the distance',
    description:
      'Keep your front camera 40–50 cm (16–20 in) from your face. For a rear camera, stand 1–2 m away for better framing.',
    goodLabel: 'Correct distance',
    badLabel: 'Too close, angled',
    goodScene: 'distance',
    badScene: 'distance-bad',
  },
  {
    number: '2',
    title: 'Head and body straight',
    description:
      'Look directly into the camera. Don\'t tilt. Portrait mode isn\'t accepted — shoot landscape or square.',
    goodLabel: 'Head straight',
    badLabel: 'Head tilted',
    goodScene: 'straight',
    badScene: 'tilted',
  },
  {
    number: '3',
    title: 'Use even lighting',
    description:
      'Shoot in daylight, ideally near a window. No shadows on your face or in the background — they fail every standard.',
    goodLabel: 'Soft, even light',
    badLabel: 'Harsh shadows',
    goodScene: 'lighting',
    badScene: 'lighting-bad',
  },
  {
    number: '4',
    title: 'Plain background',
    description:
      'Stand in front of a plain white or off-white wall. Skip furniture and patterns — our AI cleans up the rest.',
    goodLabel: 'Clean background',
    badLabel: 'Cluttered scene',
    goodScene: 'background',
    badScene: 'background-bad',
  },
  {
    number: '5',
    title: 'Neutral expression',
    description:
      'Calm face, mouth closed, eyes open. Save the smile for the holiday photos — biometric scans need neutral.',
    goodLabel: 'Neutral face',
    badLabel: 'Big smile',
    goodScene: 'expression',
    badScene: 'expression-bad',
  },
  {
    number: '6',
    title: 'Remove glasses',
    description:
      'The US, UK, and most countries prohibit glasses in passport photos. Take them off before you snap.',
    goodLabel: 'No glasses',
    badLabel: 'Glasses on',
    goodScene: 'glasses',
    badScene: 'glasses-bad',
  },
]

/* ─── Face SVG Illustration (preserved from original) ─────────── */
function FaceIllustration({ scene, isGood }: { scene: string; isGood: boolean }) {
  const skin = '#f5cba7'
  const hair = '#5d3a1a'
  const bg = isGood ? '#f8fafc' : '#fff5f5'
  const isTilted = !isGood && ['tilted', 'expression-bad', 'glasses-bad'].includes(scene)

  return (
    <svg
      viewBox="0 0 180 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ transform: isTilted ? 'rotate(-10deg)' : 'none' }}
      aria-hidden="true"
    >
      <rect width="180" height="220" fill={bg} />

      {scene === 'background-bad' && (
        <g opacity="0.35">
          <rect x="0" y="0" width="35" height="220" fill="#9ca3af" />
          <rect x="145" y="0" width="35" height="220" fill="#9ca3af" />
          <rect x="5" y="15" width="22" height="55" fill="#6b7280" rx="2" />
          <rect x="150" y="30" width="18" height="70" fill="#6b7280" rx="2" />
        </g>
      )}

      {scene === 'lighting-bad' && (
        <ellipse cx="52" cy="130" rx="40" ry="65" fill="rgba(0,0,0,0.22)" />
      )}

      {/* Shirt */}
      <ellipse cx="90" cy="238" rx="64" ry="52" fill={isGood ? '#bfdbfe' : '#fca5a5'} />
      {/* Neck */}
      <rect x="79" y="162" width="22" height="26" rx="8" fill={skin} />
      {/* Head */}
      <ellipse cx="90" cy="128" rx="46" ry="54" fill={skin} />
      {/* Hair */}
      <path d="M44 118 Q43 68 90 56 Q137 68 136 118 Q130 62 90 60 Q50 62 44 118Z" fill={hair} />

      {/* Eyebrows */}
      {scene === 'expression-bad' ? (
        <>
          <path d="M63 111 Q72 105 81 111" stroke={hair} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M99 111 Q108 105 117 111" stroke={hair} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M64 118 Q72 113 80 118" stroke={hair} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M100 118 Q108 113 116 118" stroke={hair} strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* Eyes */}
      {scene === 'expression-bad' ? (
        <>
          <ellipse cx="72" cy="127" rx="9" ry="10" fill="white" />
          <ellipse cx="108" cy="127" rx="9" ry="10" fill="white" />
          <circle cx="73" cy="128" r="5" fill="#2d2d2d" />
          <circle cx="109" cy="128" r="5" fill="#2d2d2d" />
        </>
      ) : (
        <>
          <ellipse cx="72" cy="129" rx="8" ry="9" fill="white" />
          <ellipse cx="108" cy="129" rx="8" ry="9" fill="white" />
          <circle cx="73" cy="130" r="4.5" fill="#2d2d2d" />
          <circle cx="109" cy="130" r="4.5" fill="#2d2d2d" />
        </>
      )}

      {/* Nose */}
      <path d="M90 138 Q87 150 83 154 Q90 157 97 154 Q93 150 90 138Z" fill="#e8a87c" opacity="0.7" />

      {/* Mouth */}
      {scene === 'expression-bad' ? (
        <path d="M75 167 Q90 182 105 167" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M80 167 Q90 171 100 167" stroke="#c0836b" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}

      {/* Glasses */}
      {scene === 'glasses-bad' && (
        <g>
          <rect x="57" y="121" width="27" height="18" rx="4" fill="none" stroke="#374151" strokeWidth="2.5" />
          <rect x="96" y="121" width="27" height="18" rx="4" fill="none" stroke="#374151" strokeWidth="2.5" />
          <line x1="84" y1="130" x2="96" y2="130" stroke="#374151" strokeWidth="2" />
          <line x1="57" y1="130" x2="48" y2="127" stroke="#374151" strokeWidth="2" />
          <line x1="123" y1="130" x2="132" y2="127" stroke="#374151" strokeWidth="2" />
        </g>
      )}

      {/* Distance label */}
      {scene === 'distance' && (
        <g>
          <line x1="8" y1="105" x2="44" y2="120" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="2" y="102" fill="#2563eb" fontSize="8" fontFamily="monospace" fontWeight="bold">40-50cm</text>
        </g>
      )}
    </svg>
  )
}

/* ─── Tip Card ────────────────────────────────────────────────── */
function TipCard({ tip }: { tip: (typeof tips)[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white rounded-2xl border border-slate-200/70 shadow-card overflow-hidden snap-start select-none">
      <div className="grid grid-cols-2 border-b border-slate-100 bg-slate-50">
        {/* GOOD */}
        <div
          className="relative overflow-hidden border-r border-slate-100"
          style={{ aspectRatio: '3/4' }}
        >
          <FaceIllustration scene={tip.goodScene} isGood={true} />
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-2.5 py-0.5 shadow-sm border border-emerald-100 whitespace-nowrap">
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none" aria-hidden>
                <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-emerald-700">{tip.goodLabel}</span>
          </div>
        </div>

        {/* BAD */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <FaceIllustration scene={tip.badScene} isGood={false} />
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-2.5 py-0.5 shadow-sm border border-red-100 whitespace-nowrap">
            <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none" aria-hidden>
                <path d="M3 3l4 4M7 3l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-red-600">{tip.badLabel}</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex gap-4 items-start">
        <span
          className="text-6xl font-display font-bold leading-none flex-shrink-0 mt-0.5"
          style={{
            WebkitTextStroke: '2px #f59e0b',
            color: 'transparent',
          }}
          aria-hidden
        >
          {tip.number}
        </span>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-slate-900 text-base mb-1.5 leading-snug">
            {tip.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed text-pretty">{tip.description}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Export ─────────────────────────────────────────────── */
export default function PhotoTips() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    if (!card) return
    const cardW = card.offsetWidth + 20
    el.scrollTo({ left: i * cardW, behavior: 'smooth' })
    setActiveIndex(i)
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    if (!card) return
    const cardW = card.offsetWidth + 20
    setActiveIndex(Math.round(el.scrollLeft / cardW))
  }

  return (
    <section
      id="tips"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-50/60 overflow-hidden"
    >
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
          {/* LEFT: sticky info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:w-80 flex-shrink-0"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100 text-xs font-semibold tracking-wide uppercase mb-5">
              Pro tips
            </span>
            <h2 className="font-display text-display-lg font-semibold text-slate-900 leading-tight tracking-tight text-balance">
              How to take the perfect source photo
            </h2>

            <div className="w-10 h-[3px] bg-amber-400 rounded-full mt-5 mb-6" />

            <p className="text-slate-600 text-base leading-relaxed mb-8 text-pretty">
              Follow these six rules and your photo will sail through review. Our
              AI cleans up the rest — background, sizing, color balance.
            </p>

            <Link
              href="https://mysnappass.com/upload"
              className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Choose a document
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-3 mt-10">
              <button
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous tip"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-slate-300 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(tips.length - 1, activeIndex + 1))}
                disabled={activeIndex === tips.length - 1}
                aria-label="Next tip"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-slate-300 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 ml-1">
                {tips.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Tip ${i + 1}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex
                        ? 'w-5 h-2 bg-slate-900'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: scrolling track */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 min-w-0"
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`div::-webkit-scrollbar { display: none; }`}</style>
              {tips.map((tip, i) => (
                <motion.div
                  key={tip.number}
                  data-card
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TipCard tip={tip} />
                </motion.div>
              ))}
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex flex-col items-center gap-3 mt-5">
              <div className="flex items-center gap-1.5">
                {tips.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-5 h-2 bg-slate-900' : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-slate-500 font-medium">
                  {activeIndex + 1} / {tips.length}
                </span>
                <button
                  onClick={() => scrollToIndex(Math.min(tips.length - 1, activeIndex + 1))}
                  disabled={activeIndex === tips.length - 1}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}