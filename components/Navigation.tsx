import { useState, useCallback, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import EchoText from './EchoText'
import GlyphButton from './GlyphButton'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['Creations', 'Forge', 'Manifesto']

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <motion.nav 
      className={`fixed w-full z-50 bg-black bg-opacity-70 transition-all duration-300 
        ${isScrolled ? 'border-b-2 border-gray-900' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <EchoText href="#" className="ml-4">
            <pre className="text-sm font-mono leading-none whitespace-pre mr-1 text-white">
              ┏╋{'\n'}┣┓{'\n'}┗┛
            </pre>
            <span className="text-2xl text-white">SOHNE</span>
          </EchoText>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
            >
              <a href={`#${item.toLowerCase()}`}> 
                <GlyphButton
                  text={`#${item}`}
                  textColor='#FFFFFF'
                  speed={0.7}
                  className="bg-transparent font-bold pointer-events-auto"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <motion.button 
          onClick={handleMenuToggle} 
          className="md:hidden"
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-black py-2"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  variants={mobileItemVariants}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-gray-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
