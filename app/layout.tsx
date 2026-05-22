import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mysnappass.com'),
  title: {
    default: 'MySnapPass — AI Passport Photos in Seconds',
    template: '%s · MySnapPass',
  },
  description:
    'Create government-compliant passport photos in seconds with AI. Accepted in 150+ countries or your money back. No studio, no waiting.',
  keywords: [
    'passport photo',
    'AI passport photo',
    'online passport photo',
    'visa photo',
    'ID photo',
    'biometric photo',
  ],
  authors: [{ name: 'MySnapPass' }],
  openGraph: {
    title: 'MySnapPass — AI Passport Photos in Seconds',
    description:
      'Create government-compliant passport photos in seconds with AI. Accepted in 150+ countries or your money back.',
    url: 'https://mysnappass.com',
    siteName: 'MySnapPass',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MySnapPass — AI Passport Photos in Seconds',
    description:
      'Create government-compliant passport photos in seconds with AI. 150+ countries supported.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}