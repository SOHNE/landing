import { useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import EchoText from './EchoText'
import GlyphButton from './GlyphButton'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const menuItems = ['Nexus', 'Creations', 'Forge', 'Manifesto']

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-70 transition-all duration-300 border-b-2 border-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <EchoText href="#" className="ml-4">
          <pre className="text-sm font-mono leading-none whitespace-pre mr-1 text-white">
            ┏╋{'\n'}┣┓{'\n'}┗┛
          </pre>
          <span className="text-2xl text-white">SOHNE</span>
        </EchoText>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}> 
              <GlyphButton
                text={`#${item}`}
                textColor='#FFFFFF'
                speed={0.7}
                className="bg-transparent font-bold pointer-events-auto"
              />
            </a>
          ))}
        </div>
        <button onClick={handleMenuToggle} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black py-2"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-gray-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
