'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/animations'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Frequent traveler',
    country: '🇺🇸 United States',
    rating: 5,
    text: 'I was in a rush to renew my passport and needed a photo ASAP. MySnapPass had me sorted in under 2 minutes. The photo was accepted on first submission — absolutely incredible service.',
    avatar: 'SM',
    avatarColor: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'James Okonkwo',
    role: 'International student',
    country: '🇬🇧 United Kingdom',
    rating: 5,
    text: 'Needed a UK visa photo and had no idea about the requirements. The AI handled everything automatically and my application went through without any issues. Saved me a trip to the post office!',
    avatar: 'JO',
    avatarColor: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Maria Chen',
    role: 'Business professional',
    country: '🇨🇦 Canada',
    rating: 5,
    text: 'The quality is genuinely better than photos I have gotten at professional studios. The background removal is flawless and the sizing was perfect for my Canadian passport renewal.',
    avatar: 'MC',
    avatarColor: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Family of 4',
    country: '🇦🇪 UAE',
    rating: 5,
    text: 'Used the family plan for all 4 of us. Processing was done in minutes for everyone. Customer support was incredibly helpful when I had a question about document requirements. Highly recommended!',
    avatar: 'AA',
    avatarColor: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Priya Sharma',
    role: 'First-time passport',
    country: '🇮🇳 India',
    rating: 5,
    text: 'Was nervous about getting my first passport and did not know what counted as a compliant photo. MySnapPass made the whole thing effortless. Got my passport without any issues at all!',
    avatar: 'PS',
    avatarColor: 'from-rose-500 to-red-600',
  },
  {
    name: 'Thomas Müller',
    role: 'Visa applicant',
    country: '🇩🇪 Germany',
    rating: 5,
    text: 'Needed a Schengen visa photo quickly. The service understood European biometric requirements perfectly. Submission went through on the first try. Will definitely use again.',
    avatar: 'TM',
    avatarColor: 'from-slate-600 to-slate-800',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Trusted by thousands worldwide
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-800 text-lg">4.9 / 5</span>
            <span className="text-slate-400 text-sm">from 12,000+ reviews</span>
          </div>
        </FadeIn>

        {/* Testimonial grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.09}>
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-100 mb-3 fill-current" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role} · {t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.2} className="text-center mt-14">
          <p className="text-slate-500 text-sm mb-4">Join 500,000+ satisfied customers</p>
          <a
            href="https://mysnappass.com/upload"
            className="shine-hover inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
          >
            Create Your Photo Now →
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
