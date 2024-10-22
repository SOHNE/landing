import AsciiEffect from '@/components/AsciiEffect'
import { motion } from 'framer-motion'

const manifestoItems = [
  "We are the architects of digital realms, the weavers of code and creativity.",
  "In the void between reality and imagination, we forge new worlds.",
  "Our games are not mere entertainment, but gateways to unexplored dimensions of the mind.",
  "We challenge the boundaries of interactive experiences, pushing the limits of what's possible.",
  "Through pixels and polygons, we craft narratives that resonate with the human spirit.",
  "In our digital landscapes, players don't just play – they live, breathe, and evolve.",
  "We believe in the power of games to inspire, educate, and transform.",
  "Our creations are more than software; they are living, breathing ecosystems of imagination.",
  "We embrace the bleeding edge of technology, bending it to serve our wildest dreams.",
  "In our hands, algorithms become art, and data dances to the rhythm of storytelling.",
  "We are not just developers; we are dreamweavers, reality-benders, and mind-expanders.",
  "Our mission is to blur the lines between the virtual and the real, creating experiences that linger long after the screen goes dark.",
  "We strive to create worlds that are not just played, but felt, remembered, and cherished.",
  "In the face of conventional wisdom, we choose to innovate, to disrupt, to revolutionize.",
  "We are the vanguard of a new era of interactive entertainment, where the only limit is our collective imagination.",
  "Join us in our quest to redefine reality and reshape the future of digital interaction.",
  "Welcome to SOHNE - where dreams become playable, and imagination knows no bounds."
]

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <AsciiEffect effect="glitch" color="text-white">
            MANIFESTO
          </AsciiEffect>
        </h2>
        <div className="space-y-6 text-center">
          {manifestoItems.map((text, index) => (
            <motion.p
              key={index}
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManifestoSection
