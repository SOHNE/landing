import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { tools } from '@/data'
import AsciiEffect from '@/components/AsciiEffect'

const ForgeSection = () => {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null)

  return (
    <section id="forge" className="py-20 bg-white text-black relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <AsciiEffect effect="glitch" color="text-black">
            THE FORGE
          </AsciiEffect>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              className="border-2 border-black p-6 rounded-lg group relative overflow-hidden hover:bg-black hover:text-white"
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                willChange: hoveredTool === tool.id ? 'transform, scale, background-color, color' : 'auto',
                transform: hoveredTool === tool.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease-out, background-color 0.3s ease-out, color 0.3s ease-out'
              }}
            >
              <AnimatePresence>
                {hoveredTool === tool.id && (
                  <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: .25, delay: 0.25 }}
                    >
                      <AsciiEffect effect="matrix" color="text-stone-800" width={50} height={15}>
                        {tool.name}
                      </AsciiEffect>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10">
                <tool.icon className={`w-12 h-12 mb-4 ${tool.color}`} />
                <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                <p className="mb-4">{tool.description}</p>
                <Button className="bg-black text-white group-hover:bg-white group-hover:text-black font-bold py-2 px-4 rounded-full transition-all duration-300">
                  FORGE REALITY
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForgeSection
