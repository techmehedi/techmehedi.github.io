'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Activities from '@/components/Activities'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import { initEmailJS } from '@/lib/emailjs'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    initEmailJS()
  }, [])

  return (
    <>
      <Navigation onContactClick={() => setIsModalOpen(true)} />
      <main className="site-shell">
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Activities />
        <Footer onContactClick={() => setIsModalOpen(true)} />
      </main>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

