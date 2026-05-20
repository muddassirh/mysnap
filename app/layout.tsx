import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MySnapPass – AI Passport Photos in Seconds',
  description: 'Create compliant passport photos instantly with AI-powered accuracy. Accepted by governments worldwide. No studio needed.',
  keywords: 'passport photo, id photo, online passport photo, AI passport photo',
  openGraph: {
    title: 'MySnapPass – AI Passport Photos in Seconds',
    description: 'Create compliant passport photos instantly with AI-powered accuracy.',
    url: 'https://mysnappass.com',
    siteName: 'MySnapPass',
    type: 'website',
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
