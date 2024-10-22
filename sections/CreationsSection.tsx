import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { creations } from '@/data'
import AsciiEffect from '@/components/AsciiEffect'

const CreationsSection = () => {
  const [hoveredCreation, setHoveredCreation] = useState<number | null>(null)

  const handleHoverCreation = useCallback((id: number | null) => {
    setHoveredCreation(id)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="creations" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AsciiEffect effect="glitch" color="text-white">
            OUR CREATIONS
          </AsciiEffect>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {creations.map((creation) => (
            <motion.div
              key={creation.id}
              variants={cardVariants}
              className="group relative overflow-hidden border border-white rounded-lg select-none"
              onMouseEnter={() => handleHoverCreation(creation.id)}
              onMouseLeave={() => handleHoverCreation(null)}
              style={{
                willChange: hoveredCreation === creation.id ? 'transform, scale, opacity, filter' : 'auto',
                transform: hoveredCreation === creation.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, filter 0.3s ease-out'
              }}>
              <img src={creation.image} alt={creation.title} className="w-full h-64 object-cover transition-all duration-300 grayscale-0 group-hover:scale-125 group-hover:grayscale" loading="lazy" />
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${creation.color} flex items-center justify-center`}
                exit={{ opacity: 0, filter: "blur(0.2rem)", transition: { ease: "easeInOut", duration: 0.3 } }}
                initial={{ opacity: 0, scale: 1.25, filter: "blur(0.2rem)" }}
                animate={{ 
                  opacity: hoveredCreation === creation.id ? 0.9 : 0, 
                  scale: hoveredCreation === creation.id ? 1.0 : 1.25, 
                  filter: hoveredCreation === creation.id ? "blur(0px)" : "blur(0.2rem)" 
                }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{creation.title}</h3>
                  <p className="mb-4 text-sm">{creation.description}</p>
                  <Button className="bg-white text-black hover:bg-gray-300 font-bold py-2 px-4 rounded-full transition-all duration-300">
                    EXPERIENCE
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CreationsSection
