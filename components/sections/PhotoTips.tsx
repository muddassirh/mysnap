'use client'

import { motion } from 'framer-motion'
import {
  Sun, UserCheck, Shirt, Glasses, Smile, AlignCenter,
  X, CheckCircle2, AlertTriangle,
} from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'

const tips = [
  {
    icon: Sun,
    title: 'Use Natural Lighting',
    description:
      'Stand facing a window for soft, even lighting. Avoid direct sunlight which causes harsh shadows. Overhead lighting should be avoided.',
    do: 'Face a window or use soft diffused light',
    dont: 'Avoid flash, overhead lamps, or backlighting',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    icon: AlignCenter,
    title: 'Neutral Background',
    description:
      'Most countries require a plain white or off-white background. Remove any busy patterns, shadows, or objects behind you.',
    do: 'Use a plain white wall or sheet',
    dont: 'Avoid patterned walls, furniture, or shadows',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    icon: UserCheck,
    title: 'Center Your Face',
    description:
      'Look directly at the camera with your face centered and occupying 70–80% of the frame. Keep your head straight.',
    do: 'Look straight ahead, head level and centered',
    dont: 'Avoid tilting head, looking away, or extreme angles',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: Smile,
    title: 'Neutral Expression',
    description:
      'Maintain a calm, neutral expression with your mouth closed. Slight smiles may be accepted but avoid big smiles.',
    do: 'Keep a neutral or slight natural expression',
    dont: 'No big smiles, raised eyebrows, or surprised looks',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    icon: Glasses,
    title: 'No Glasses',
    description:
      'Most countries (including the US and UK) now prohibit glasses in passport photos due to biometric scanning requirements.',
    do: 'Remove all glasses before taking your photo',
    dont: 'No prescription glasses, sunglasses, or tinted lenses',
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
  {
    icon: Shirt,
    title: 'Appropriate Attire',
    description:
      'Wear regular, everyday clothing. Avoid uniforms or clothing that blends with the background. Religious headwear is typically allowed.',
    do: 'Wear everyday clothes in non-white colors',
    dont: 'No hats, uniforms, or white shirts on white background',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
]

const quickChecklist = [
  'Plain white or off-white background',
  'Face centered, eyes open and looking at camera',
  'Neutral expression, mouth closed',
  'No glasses (most countries)',
  'No headwear (except religious)',
  'Good, even lighting — no shadows on face',
  'High resolution — minimum 600×600 px',
  'Recent photo (within 6 months)',
]

export default function PhotoTips() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Expert Guidance
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Passport Photo Taking Tips
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Follow these expert-verified tips to take the perfect passport photo on your first try — and avoid the most common rejection reasons.
          </p>
        </FadeIn>

        {/* Tips grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16" staggerDelay={0.1}>
          {tips.map((tip) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={tip.title}
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className={`group bg-white rounded-3xl p-6 border ${tip.border} shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300`}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 ${tip.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${tip.color}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base leading-snug mt-1" style={{ fontFamily: 'var(--font-sora)' }}>
                    {tip.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-4">{tip.description}</p>

                {/* Do / Don't */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-600 font-medium">{tip.do}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-500">{tip.dont}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </StaggerContainer>

        {/* Quick checklist + warning banner */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checklist */}
          <FadeIn direction="left">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
                Quick Checklist
              </h3>
              <p className="text-blue-200 text-sm mb-6">
                Run through this before you take your photo.
              </p>
              <ul className="space-y-3">
                {quickChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Warning + CTA */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-5 h-full">
              {/* Warning box */}
              <div className="flex-1 bg-amber-50 border border-amber-200 rounded-3xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-amber-800" style={{ fontFamily: 'var(--font-sora)' }}>
                    Most Common Rejection Reasons
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-amber-700">
                  {[
                    'Photo too dark or poorly lit',
                    'Shadow visible on background',
                    'Glasses (prohibited since 2016)',
                    'Expression — too much smiling',
                    'Head tilted or not centered',
                    'Photo taken more than 6 months ago',
                  ].map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center">
                <p className="font-bold text-slate-800 text-lg mb-1" style={{ fontFamily: 'var(--font-sora)' }}>
                  Skip the guesswork
                </p>
                <p className="text-slate-500 text-sm mb-4">
                  Upload your photo and let our AI handle all the technical requirements automatically.
                </p>
                <a
                  href="https://mysnappass.com/upload"
                  className="shine-hover inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Try It Free →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
