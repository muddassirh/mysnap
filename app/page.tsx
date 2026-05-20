import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import PhotoTips from '@/components/sections/PhotoTips'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <PhotoTips />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}
