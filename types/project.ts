export interface Challenge {
  title: string
  description: string
  solution: string
}

export interface ProjectType {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  tags: string[]
  link?: string
  github?: string
  keyFeatures?: string[]
  technicalDetails?: string[]
  architecture?: string
  gallery?: string[]
  challenges?: Challenge[]
}

