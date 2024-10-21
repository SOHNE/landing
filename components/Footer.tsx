import { GithubIcon, LinkedinIcon } from 'lucide-react'
import AsciiEffect from './AsciiEffect'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 whitespace-pre font-mono">
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
            <AsciiEffect effect="wave" color="text-black" width={25} height={1} >
              <></>
            </AsciiEffect>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-500 transition-colors"><GithubIcon className="w-6 h-6" /></a>
            <a href="#" className="hover:text-gray-500 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
          </div>
        </div>
        <hr className="border-black my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 SOHNE. All realities reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-gray-500 transition-colors">Quantum Privacy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Multiversal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
