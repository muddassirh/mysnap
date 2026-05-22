'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { StaggerContainer, staggerItem } from '@/components/ui/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'How does the AI know my photo will be accepted?',
    a: 'Our system runs your photo against the published biometric standards for whatever document you select — pixel dimensions, head size, background color, lighting uniformity, expression neutrality. If anything fails, you\'ll know before you pay. Every photo is then double-checked by a human compliance reviewer.',
  },
  {
    q: 'What happens if my photo gets rejected?',
    a: 'You get a full refund. No forms, no phone calls, no fine print. Just email us proof of rejection and we issue the refund within 24 hours. We can also redo the photo at no charge if you\'d prefer.',
  },
  {
    q: 'Which countries and documents do you support?',
    a: 'We currently support passport, visa, ID card, and driver\'s license photos for 150+ countries — including the US, UK, EU, Canada, Australia, India, Japan, and most of South America and the Middle East. The full list is available before you upload.',
  },
  {
    q: 'How long does it actually take?',
    a: 'AI processing is under 5 seconds. Human review typically completes within 30 minutes during business hours, faster on weekdays. You\'ll get an email the moment your photo is approved and ready to download.',
  },
  {
    q: 'Can I use my phone\'s camera or do I need a real camera?',
    a: 'A phone camera is more than enough — most modern smartphones produce photos sharper than the resolution standards require. The tips section above covers how to set yourself up for a clean source photo.',
  },
  {
    q: 'Do I get printed photos or just the digital file?',
    a: 'You always get the digital file instantly. Standard and Family plans also include a print-ready 4×6 sheet with multiple compliant copies that you can print at any photo lab or pharmacy.',
  },
  {
    q: 'Is my photo and data secure?',
    a: 'Yes. Photos are encrypted in transit and at rest, and automatically deleted 30 days after delivery. We never share photos with third parties or use them for AI training. We\'re GDPR-compliant and SOC 2-aligned.',
  },
  {
    q: 'Can I get a refund if I change my mind before submitting?',
    a: 'Absolutely. If you haven\'t downloaded the final approved photo, you can request a refund within 7 days for any reason. Just email support@mysnappass.com.',
  },
]

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 lg:px-6 text-left cursor-pointer"
      >
        <span className="font-display font-semibold text-slate-900 text-[15px] lg:text-[16px] pr-2">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"
        >
          <Plus className="w-4 h-4 text-slate-700" strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 lg:px-6 pb-5 -mt-1 text-[15px] text-slate-600 leading-relaxed text-pretty">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="If something isn't covered here, our support team replies to every email within a few hours."
        />

        <StaggerContainer className="mt-14 space-y-3" staggerDelay={0.05}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <p className="text-sm text-slate-500">
            Still curious?{' '}
            <a
              href="mailto:support@mysnappass.com"
              className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4 decoration-blue-200 hover:decoration-blue-400 transition-colors"
            >
              Email our team
            </a>
            — we usually reply within an hour.
          </p>
        </div>
      </div>
    </section>
  )
}