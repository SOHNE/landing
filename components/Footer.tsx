import { socialLinks } from '@/data/links';
import AsciiEffect from './AsciiEffect';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
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

  const socialVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-white text-black py-12 relative z-10">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0 whitespace-pre font-mono"
            variants={itemVariants}
          >
            <div className="mb-6 md:mb-0 leading-5">
              <p>┏━━━━━━┓</p>
              <div className="flex items-center">
                <p className="mr-2">┃</p>
                <p className="text-sm font-extrabold">SOHNE</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2">┃</p>
                <p className="text-sm">Digital Reality Architects</p>
              </div>
              <p>┗━━━━━━━━━━━━━━━━━━━━━━━━┛</p>
            </div>
            <AsciiEffect effect="wave" color="text-black" width={22} height={1}>
              <></>
            </AsciiEffect>
          </motion.div>
          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.hr 
          className="border-black my-8"
          variants={itemVariants}
        />
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-sm"
          variants={itemVariants}
        >
          <motion.p
            variants={itemVariants}
          >
            &copy; 2024 SOHNE. All realities reversed.
          </motion.p>
          <motion.div 
            className="flex mt-4 md:mt-0"
            variants={itemVariants}
          >
            {/*
            <a href="#" className="mr-4 hover:text-gray-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Terms</a>
            */}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
