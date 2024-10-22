import { Atom, Rotate3DIcon, FilePenLineIcon } from 'lucide-react'
import { Creation, Tool } from '@/types'

export const creations: Creation[] = [
  {
    id: 1,
    title: "KWARTZ",
    description: "Dive into a mind-bending cyberpunk adventure where reality and digital consciousness intertwine",
    image: "https://m.gjcdn.net/game-thumbnail/400/451321-crop458_41_1480_615-tt5yrbpn-v4.webp",
    techStack: ["WebGL", "TensorFlow.js", "Web Audio API"],
    color: "from-purple-500 to-blue-500"
  },
  {
    id: 2,
    title: "FREE BREEZE",
    description: "Navigate the multiverse in this reality-warping puzzle platformer that challenges your perception",
    image: "https://m.gjcdn.net/game-thumbnail/400/551443-crop1_0_1684_947-tduvceca-v4.webp",
    techStack: ["Three.js", "Matter.js", "Web Workers API"],
    color: "from-green-500 to-yellow-500"
  },
  {
    id: 3,
    title: "THE ASHES OF JORGE",
    description: "Embark on an emotional journey through time, space, and human connection in this narrative-driven experience",
    image: "https://m.gjcdn.net/game-thumbnail/400/506349-crop45_0_1728_947-vcekirbs-v4.webp",
    techStack: ["PixiJS", "Howler.js", "IndexedDB"],
    color: "from-red-500 to-pink-500"
  }
]

export const tools: Tool[] = [
  {
    id: 1,
    name: "DURA2D",
    description: "A 2D physics engine that bends reality to your will.",
    icon: Atom,
    color: "text-purple-500"
  },
  {
    id: 2,
    name: "LEVEGL",
    description: "An AI-powered rendering library that turns brainwaves into visual poetry. Push the boundaries of digital art.",
    icon: Rotate3DIcon,
    color: "text-blue-500"
  },
  {
    id: 3,
    name: "RUN, COLIRU!",
    description: "Evolving game logic framework that adapts and learns from player interactions, creating unique experiences.",
    icon: FilePenLineIcon,
    color: "text-green-500"
  }
]
