'use client'

import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/sections/HeroSection'
import CreationsSection from '@/sections/CreationsSection'
import ForgeSection from '@/sections/ForgeSection'
import ManifestoSection from '@/sections/ManifestoSection'
import Footer from '@/components/Footer'

export default function Home() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <Navigation />
      <HeroSection controls={controls} />
      <CreationsSection />
      <ForgeSection />
      <ManifestoSection />
      <Footer />
    </div>
  )
}
