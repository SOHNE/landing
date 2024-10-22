import { LucideIcon } from 'lucide-react'

export interface Creation {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  color: string
}

export interface Tool {
  id: number
  name: string
  description: string
  icon: LucideIcon
  color: string
}
