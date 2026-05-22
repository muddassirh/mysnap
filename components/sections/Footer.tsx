'use client'

import Link from 'next/link'
import {
  Camera,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Lock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Photo tips', href: '#tips' },
  ],
  Documents: [
    { label: 'US Passport', href: 'https://mysnappass.com/us-passport' },
    { label: 'UK Passport', href: 'https://mysnappass.com/uk-passport' },
    { label: 'Schengen Visa', href: 'https://mysnappass.com/schengen-visa' },
    { label: 'All documents', href: 'https://mysnappass.com/documents' },
  ],
  Company: [
    { label: 'About us', href: 'https://mysnappass.com/about' },
    { label: 'Blog', href: 'https://mysnappass.com/blog' },
    { label: 'Careers', href: 'https://mysnappass.com/careers' },
    { label: 'Contact', href: 'https://mysnappass.com/contact' },
  ],
  Legal: [
    { label: 'Privacy policy', href: 'https://mysnappass.com/privacy' },
    { label: 'Terms of service', href: 'https://mysnappass.com/terms' },
    { label: 'Cookie policy', href: 'https://mysnappass.com/cookies' },
    { label: 'Refund policy', href: 'https://mysnappass.com/refunds' },
  ],
}

const socials = [
  { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="https://mysnappass.com/"
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <Camera className="w-[18px] h-[18px] text-white" strokeWidth={2.25} />
              </div>
              <span className="font-display text-[17px] font-semibold text-white">
                MySnap<span className="text-blue-400">Pass</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              AI-powered passport photos, guaranteed accepted in 150+ countries.
              Built so you never have to retake a passport photo again.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-3 text-sm">
              <a
                href="mailto:support@mysnappass.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                support@mysnappass.com
              </a>
              <a
                href="tel:+18005557627"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                +1 (800) 555-SNAP
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 mt-7">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display text-white font-semibold text-sm mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MySnapPass. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure payments
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              SSL encrypted
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              GDPR compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}