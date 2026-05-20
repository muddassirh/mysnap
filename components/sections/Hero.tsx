'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, ShieldCheck, Zap, ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Blue glow blob top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
            {/* <Zap className="w-3.5 h-3.5" /> */}
            AI-Powered • 3-Second Processing
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Passport Photos{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Done Right</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full origin-left"
              />
            </span>
            {' '}in Seconds
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Upload your selfie and our AI instantly creates compliant passport photos verified for government acceptance — no studio, no hassle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
            <Link
              href="https://mysnappass.com/upload"
              className="shine-hover group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200 text-base"
            >
              Create My Photo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://mysnappass.com/#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-base"
            >
              See How It Works
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">4.9/5</span> from 12,000+ happy customers
            </div>
            <div className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
              <ShieldCheck className="w-4 h-4" />
              100% Acceptance Guarantee
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Passport Photo Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] sm:w-[420px]">
            {/* Main photo card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 bg-white rounded-3xl shadow-2xl shadow-blue-100 p-5 border border-blue-50"
            >
              {/* Simulated passport photo frame */}
              <div className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-[3/4] mb-4">
                {/* Background silhouette area */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                  {/* Head shape */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-b from-slate-300 to-slate-400 mb-0 shadow-inner" />
                  {/* Shoulders */}
                  <div className="w-44 h-20 rounded-t-full bg-gradient-to-b from-slate-300 to-slate-400 -mt-4" />
                </div>
                {/* Neutral bg */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-slate-100/80" />

                {/* AI verified badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                  className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </motion.div>

                {/* Measurement guides */}
                <div className="absolute left-2 top-8 bottom-8 w-px bg-blue-300/40 border-l border-dashed border-blue-300/40" />
                <div className="absolute right-2 top-8 bottom-8 w-px bg-blue-300/40 border-r border-dashed border-blue-300/40" />
                <div className="absolute top-8 left-8 right-8 h-px bg-blue-300/40 border-t border-dashed border-blue-300/40" />
              </div>

              {/* Status info below photo */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Document Type</p>
                  <p className="text-sm font-semibold text-slate-700">US Passport</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-medium">Size</p>
                  <p className="text-sm font-semibold text-slate-700">2×2 inches</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5 text-center">
                  <p className="text-xs font-semibold text-emerald-600">✓ Ready</p>
                </div>
              </div>
            </motion.div>

            {/* Floating thumb strip */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                animation: 'float 6s ease-in-out 1s infinite',
              }}
              className="absolute -right-8 top-12 z-20 bg-white rounded-2xl shadow-xl shadow-slate-200 p-2.5 border border-slate-100 flex flex-col gap-2"
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-14 h-[70px] rounded-lg bg-gradient-to-b from-slate-200 to-slate-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent" />
                </div>
              ))}
              <p className="text-center text-[10px] font-semibold text-blue-600">×4 copies</p>
            </motion.div>

            {/* Processing time badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-6 top-1/3 z-20 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 px-4 py-3"
            >
              <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>3s</p>
              <p className="text-[10px] opacity-80 font-medium">Processing</p>
            </motion.div>

            {/* AI check badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
              className="absolute -bottom-4 left-10 z-20 bg-white rounded-2xl shadow-xl shadow-slate-200 px-4 py-2.5 border border-slate-100 flex items-center gap-2"
            >
              {/* <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-600" />
              </div> */}
              <div>
                <p className="text-xs font-bold text-slate-800">AI Verified</p>
                <p className="text-[10px] text-slate-400">100% Compliant</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80H1440V40C1320 70 1200 80 1080 72C960 64 840 40 720 40C600 40 480 64 360 72C240 80 120 70 0 40V80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
