'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Camera } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-page flex items-center justify-between h-16 lg:h-[72px]"
        >
          {/* Logo */}
          <Link
            href="https://mysnappass.com/"
            className="flex items-center gap-2.5 group"
            aria-label="MySnapPass home"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-btn-blue group-hover:shadow-btn-blue-hover transition-shadow">
              <Camera className="w-[18px] h-[18px] text-white" strokeWidth={2.25} />
            </div>
            <span className="font-display text-[17px] font-semibold tracking-tight text-slate-900">
              MySnap<span className="text-blue-600">Pass</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-[14px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://mysnappass.com/upload"
              className="text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
            >
              Sign in
            </Link>
            <Link
              href="https://mysnappass.com/upload"
              className="inline-flex items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-white border-b border-slate-200 lg:hidden"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="https://mysnappass.com/upload"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center px-5 py-3 border border-slate-200 text-slate-700 text-[14px] font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="https://mysnappass.com/upload"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-medium rounded-xl transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}