import { ChevronDown } from 'lucide-react'
import { motion, AnimationControls } from 'framer-motion'
import GlyphButton from '@/components/GlyphButton'
import Play from '@/components/play.core'
import * as dyna from "@/assets/play.core/doom_flame.js"

interface HeroSectionProps {
  controls: AnimationControls
}

const HeroSection = ({ controls }: HeroSectionProps) => {
  return (
    <section id="nexus" className="relative min-h-screen flex items-center justify-center overflow-hidden pointer-events-none">
      {<Play name="Dyna" program={dyna} />}

      <div className="relative z-10 text-center">
        <motion.h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          SOHNE
        </motion.h1>
        <motion.p className="text-xl md:text-2xl mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          DIGITAL REALITY ARCHITECTS
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <GlyphButton
            text={"ENTER THE VOID"}
            className="bg-white hover:bg-gray-400 font-bold py-3 px-6 pointer-events-auto transition-all duration-300"
          />
        </motion.div>
      </div>
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={controls}>
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}

export default HeroSection
