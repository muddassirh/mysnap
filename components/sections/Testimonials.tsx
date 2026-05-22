'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Frequent traveler',
    location: 'United States',
    rating: 5,
    text: 'I was rushing to renew my passport and needed a photo in minutes. MySnapPass had me sorted in under two — accepted on the first submission. Genuinely impressed.',
    avatar: 'SM',
    avatarColor: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'James Okonkwo',
    role: 'International student',
    location: 'United Kingdom',
    rating: 5,
    text: 'I needed a UK visa photo and had no clue about the requirements. The AI handled everything and my application went through clean. Saved me a trip to the post office.',
    avatar: 'JO',
    avatarColor: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Maria Chen',
    role: 'Business professional',
    location: 'Canada',
    rating: 5,
    text: 'Quality is honestly better than the photos I got at a professional studio. The background removal is flawless and sizing was perfect for my Canadian passport renewal.',
    avatar: 'MC',
    avatarColor: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Family of four',
    location: 'United Arab Emirates',
    rating: 5,
    text: 'Used the family plan for all four of us. Processed in minutes. Support was incredibly helpful when I had a document question. Will use again.',
    avatar: 'AA',
    avatarColor: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Priya Sharma',
    role: 'First-time passport',
    location: 'India',
    rating: 5,
    text: 'I was nervous about my first passport and didn\'t know what counted as compliant. MySnapPass made it effortless. Got my passport without a single issue.',
    avatar: 'PS',
    avatarColor: 'from-rose-500 to-red-600',
  },
  {
    name: 'Thomas Müller',
    role: 'Visa applicant',
    location: 'Germany',
    rating: 5,
    text: 'Needed a Schengen photo fast. The service knew the European biometric rules perfectly. Submitted on the first try. Easy recommendation.',
    avatar: 'TM',
    avatarColor: 'from-slate-600 to-slate-800',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="From real users"
          title="Trusted by travelers, students, and families worldwide"
          description={
            <span className="inline-flex flex-wrap items-center justify-center gap-2.5 mt-1">
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-slate-900 text-lg">4.9</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">12,000+ verified reviews</span>
            </span>
          }
        />

        <StaggerContainer
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.07}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="bg-white border border-slate-200/70 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-blue-100 mb-3 fill-current"
                aria-hidden
              />

              <div className="flex items-center gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-[15px] text-slate-700 leading-relaxed flex-1 mb-6 text-pretty">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  aria-hidden
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}