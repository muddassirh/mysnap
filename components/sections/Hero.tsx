'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background — single, soft, premium */}
      <div className="absolute inset-0 -z-10 bg-white">
        {/* Soft radial wash, top */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.10), transparent 60%)',
          }}
        />
        {/* Very subtle dot pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Eyebrow / status pill */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[12px] font-medium text-slate-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-700">
              <span className="font-semibold">12,847</span> photos created this week
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 font-display font-semibold tracking-tight text-slate-900 text-display-2xl text-balance"
          >
            Passport photos,{' '}
            <span className="relative inline-block">
              <span className="gradient-text">approved on the first try.</span>
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={item}
            className="mt-6 text-lg lg:text-xl leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0 text-pretty"
          >
            Upload a selfie. Our AI handles background, sizing, and biometric
            compliance in under 5 seconds — guaranteed accepted by 150+
            governments or your money back.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link
              href="https://mysnappass.com/upload"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-btn-blue hover:shadow-btn-blue-hover hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
            >
              <Sparkles className="w-4 h-4" strokeWidth={2.25} />
              Create my photo — $4.99
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-200 text-[15px]"
            >
              See how it works
            </Link>
          </motion.div>

          {/* Proof line — directly under CTAs */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">4.9</span>
                <span className="text-slate-400 mx-1">·</span>
                <span>12,000+ reviews</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200" />
            <div className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700">
              <ShieldCheck className="w-4 h-4" strokeWidth={2.25} />
              Money-back guarantee
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Hero visual: let the asset breathe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Soft shadow plate behind the image — gives depth without competing badges */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl opacity-60"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(37,99,235,0.18), transparent 60%)',
            }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[520px]"
          >
            <Image
              src="/home-img.png"
              alt="A selfie transformed into a compliant passport photo with multiple print-ready copies"
              width={640}
              height={640}
              priority
              className="w-full h-auto select-none pointer-events-none"
            />

            {/* ONE accent card — the proof point, not a sticker explosion */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-2 left-2 sm:left-6 bg-white rounded-2xl shadow-card-hover border border-slate-100 p-3 pr-4 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-[18px] h-[18px] text-emerald-600" strokeWidth={2.25} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                  AI compliance check
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Passes US, UK, EU biometric standards
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}