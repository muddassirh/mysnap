'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/* ─── Tip Data ────────────────────────────────────────────────── */
const tips = [
  {
    number: '1',
    title: 'Consider the distance',
    description:
      'Keep your front-facing camera 16–20 inches (40–50 cm) away from your face. For rear cameras, maintain a 4–6 foot (1–2 meter) distance for the best framing.',
    goodLabel: 'Correct distance',
    badLabel: 'Too close / angled',
    goodScene: 'distance',
    badScene: 'distance-bad',
  },
  {
    number: '2',
    title: 'Keep your head and body straight',
    description:
      'Look directly into the camera and avoid tilting your body or head. Portrait mode is unacceptable for passport photos — always shoot in landscape or square.',
    goodLabel: 'Head straight, front-facing',
    badLabel: 'Head tilted or turned',
    goodScene: 'straight',
    badScene: 'tilted',
  },
  {
    number: '3',
    title: 'Prepare good lighting',
    description:
      'Take your photo in a daylight setting, like near a window on a sunny day. Shadows on your face or in the background are not permitted by any country.',
    goodLabel: 'Even, soft lighting',
    badLabel: 'Shadows or harsh light',
    goodScene: 'lighting',
    badScene: 'lighting-bad',
  },
  {
    number: '4',
    title: 'Use a plain white background',
    description:
      'Stand in front of a plain white or off-white wall. Remove any furniture, patterns, or objects. Our AI will clean the background automatically.',
    goodLabel: 'Clean white background',
    badLabel: 'Cluttered background',
    goodScene: 'background',
    badScene: 'background-bad',
  },
  {
    number: '5',
    title: 'Keep a neutral expression',
    description:
      'Maintain a calm, neutral expression with your mouth closed and eyes open. Avoid big smiles, raised eyebrows, or surprised looks.',
    goodLabel: 'Neutral expression',
    badLabel: 'Smiling or surprised',
    goodScene: 'expression',
    badScene: 'expression-bad',
  },
  {
    number: '6',
    title: 'Remove glasses',
    description:
      'Most countries, including the US and UK, prohibit glasses in passport photos due to biometric scanning. Remove all eyewear before taking your photo.',
    goodLabel: 'No glasses',
    badLabel: 'Glasses on',
    goodScene: 'glasses',
    badScene: 'glasses-bad',
  },
]

/* ─── Face SVG Illustration ───────────────────────────────────── */
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
    >
      {/* BG */}
      <rect width="180" height="220" fill={bg} />

      {/* Bad background clutter */}
      {scene === 'background-bad' && (
        <g opacity="0.35">
          <rect x="0" y="0" width="35" height="220" fill="#9ca3af" />
          <rect x="145" y="0" width="35" height="220" fill="#9ca3af" />
          <rect x="5" y="15" width="22" height="55" fill="#6b7280" rx="2" />
          <rect x="150" y="30" width="18" height="70" fill="#6b7280" rx="2" />
        </g>
      )}

      {/* Bad lighting shadow */}
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
      <path
        d="M44 118 Q43 68 90 56 Q137 68 136 118 Q130 62 90 60 Q50 62 44 118Z"
        fill={hair}
      />

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
      <path
        d="M90 138 Q87 150 83 154 Q90 157 97 154 Q93 150 90 138Z"
        fill="#e8a87c"
        opacity="0.7"
      />

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

      {/* Distance label (tip 1 good) */}
      {scene === 'distance' && (
        <g>
          <line x1="8" y1="105" x2="44" y2="120" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="2" y="102" fill="#2563eb" fontSize="8" fontFamily="monospace" fontWeight="bold">40-50cm</text>
        </g>
      )}
    </svg>
  )
}

/* ─── Single Tip Card ─────────────────────────────────────────── */
function TipCard({ tip }: { tip: (typeof tips)[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden snap-start select-none">
      {/* Before / After photo comparison */}
      <div className="grid grid-cols-2 border-b border-slate-100 bg-slate-50">
        {/* GOOD side */}
        <div className="relative overflow-hidden border-r border-slate-100" style={{ aspectRatio: '3/4' }}>
          <FaceIllustration scene={tip.goodScene} isGood={true} />
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-2.5 py-0.5 shadow border border-emerald-100 whitespace-nowrap">
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-emerald-700">{tip.goodLabel}</span>
          </div>
        </div>

        {/* BAD side */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <FaceIllustration scene={tip.badScene} isGood={false} />
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-2.5 py-0.5 shadow border border-red-100 whitespace-nowrap">
            <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                <path d="M3 3l4 4M7 3l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-red-600">{tip.badLabel}</span>
          </div>
        </div>
      </div>

      {/* Text row — number + title + description */}
      <div className="p-5 flex gap-4 items-start">
        {/* Large outlined amber number — exactly like photoaid */}
        <span
          className="text-6xl font-black leading-none flex-shrink-0 mt-0.5"
          style={{
            fontFamily: 'var(--font-sora, Georgia, serif)',
            WebkitTextStroke: '2px #f59e0b',
            color: 'transparent',
          }}
        >
          {tip.number}
        </span>
        <div className="min-w-0">
          <h3
            className="font-bold text-slate-900 text-base mb-1.5 leading-snug"
            style={{ fontFamily: 'var(--font-sora, Georgia, serif)' }}
          >
            {tip.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">{tip.description}</p>
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f7f8fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">

          {/* ── LEFT: sticky info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:w-72 xl:w-80 flex-shrink-0"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-sora, Georgia, serif)' }}
            >
              Passport photo-taking tips
            </h2>

            {/* Amber accent rule — signature photoaid detail */}
            <div className="w-10 h-[3px] bg-amber-400 rounded-full mb-5" />

            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Follow these guidelines to create the perfect passport picture. Our AI will handle the rest.
            </p>

            <Link
              href="https://mysnappass.com/upload"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-2xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Choose a document
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-3 mt-10">
              <button
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(tips.length - 1, activeIndex + 1))}
                disabled={activeIndex === tips.length - 1}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot track */}
              <div className="flex items-center gap-1.5 ml-1">
                {tips.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Tip ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-5 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: horizontal scroll track ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
                      i === activeIndex ? 'w-5 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-slate-400 font-medium">{activeIndex + 1} / {tips.length}</span>
                <button
                  onClick={() => scrollToIndex(Math.min(tips.length - 1, activeIndex + 1))}
                  disabled={activeIndex === tips.length - 1}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}