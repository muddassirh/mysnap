import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import LogoStrip from '@/components/sections/LogoStrip'
import HowItWorks from '@/components/sections/HowItWorks'
import Comparison from '@/components/sections/Comparison'
import Features from '@/components/sections/Features'
import PhotoTips from '@/components/sections/PhotoTips'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <TrustBar />
      <HowItWorks />
      <Comparison />
      <Features />
      <PhotoTips />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}