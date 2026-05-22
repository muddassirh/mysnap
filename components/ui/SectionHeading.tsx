'use client'

import { FadeIn } from './animations'
import { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
  eyebrowVariant?: 'blue' | 'slate'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  eyebrowVariant = 'blue',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  const eyebrowStyle =
    eyebrowVariant === 'blue'
      ? 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100'
      : 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200'

  return (
    <FadeIn className={`${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-5 ${eyebrowStyle}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-semibold text-slate-900 text-display-xl text-balance ${
          align === 'center' ? 'max-w-3xl mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed text-slate-600 text-pretty ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}