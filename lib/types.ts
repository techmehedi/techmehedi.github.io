export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  githubUrl?: string
  liveUrl?: string
  technologies: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  date: string
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
  date: string
  gpa?: string
  coursework: string[]
  activities?: string[]
  honors?: string[]
}

export interface Skill {
  category: string
  icon: string
  items: string[]
}

export interface Activity {
  id: string
  title: string
  description: string
  icon: string
}

