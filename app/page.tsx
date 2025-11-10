'use client'

import { useEffect, useState } from 'react'
import { Lenis as ReactLenis } from 'lenis/react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Activities from '@/components/Activities'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import ParticleBackground from '@/components/ParticleBackground'
import BackgroundEffects from '@/components/BackgroundEffects'
import { initAnimations } from '@/lib/animations'
import { initEmailJS } from '@/lib/emailjs'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    initEmailJS()
    initAnimations()
  }, [])

  return (
    <ReactLenis root>
      <main>
        <ParticleBackground />
        <BackgroundEffects />
        <Navigation onContactClick={() => setIsModalOpen(true)} />
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Activities />
        <Footer onContactClick={() => setIsModalOpen(true)} />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </ReactLenis>
  )
}

