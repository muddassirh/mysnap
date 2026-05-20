'use client'

import Link from 'next/link'
import { Camera, Twitter, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'How It Works', href: 'https://mysnappass.com/#how-it-works' },
    { label: 'Features', href: 'https://mysnappass.com/#features' },
    { label: 'Pricing', href: 'https://mysnappass.com/#pricing' },
    { label: 'Photo Tips', href: 'https://mysnappass.com/#tips' },
  ],
  Documents: [
    { label: 'US Passport', href: 'https://mysnappass.com/us-passport' },
    { label: 'UK Passport', href: 'https://mysnappass.com/uk-passport' },
    { label: 'Schengen Visa', href: 'https://mysnappass.com/schengen-visa' },
    { label: 'All Documents', href: 'https://mysnappass.com/documents' },
  ],
  Company: [
    { label: 'About Us', href: 'https://mysnappass.com/about' },
    { label: 'Blog', href: 'https://mysnappass.com/blog' },
    { label: 'Careers', href: 'https://mysnappass.com/careers' },
    { label: 'Contact', href: 'https://mysnappass.com/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: 'https://mysnappass.com/privacy' },
    { label: 'Terms of Service', href: 'https://mysnappass.com/terms' },
    { label: 'Cookie Policy', href: 'https://mysnappass.com/cookies' },
    { label: 'Refund Policy', href: 'https://mysnappass.com/refunds' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
            Ready for a compliant passport photo?
          </h2>
          <p className="text-blue-200 mb-6">Takes under a minute. Guaranteed acceptance.</p>
          <Link
            href="https://mysnappass.com/upload"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-2xl hover:bg-blue-50 shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Create My Photo →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="https://mysnappass.com/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
                MySnapPass
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              AI-powered passport photos with guaranteed compliance. Accepted by governments in 150+ countries.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@mysnappass.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (800) 555-SNAP</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="https://mysnappass.com"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MySnapPass. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>🛡️ Secure payments</span>
            <span>·</span>
            <span>🔒 SSL encrypted</span>
            <span>·</span>
            <span>✅ GDPR compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
