'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 760)
}

export function init3DCanvas(canvas: HTMLCanvasElement) {
  if (typeof window === 'undefined' || !canvas) return

  const isMobile = isMobileDevice()
  
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    alpha: true, 
    antialias: !isMobile
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio)
  
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = isMobile ? 300 : 1000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x6366f1,
    transparent: true,
    opacity: isMobile ? 0.3 : 0.6,
  })

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  camera.position.z = 5

  let lastTime = 0
  function animate(currentTime: number) {
    requestAnimationFrame(animate)
    
    const deltaTime = isMobile ? (currentTime - lastTime) * 0.5 : (currentTime - lastTime)
    lastTime = currentTime
    
    particlesMesh.rotation.x += 0.0005 * (isMobile ? 0.5 : 1)
    particlesMesh.rotation.y += 0.001 * (isMobile ? 0.5 : 1)
    
    renderer.render(scene, camera)
  }

  animate(0)

  let resizeTimeout: NodeJS.Timeout
  const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(isMobileDevice() ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio)
    }, 100)
  }

  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

export function initAnimations() {
  if (typeof window === 'undefined') return

  // Wait for DOM to be ready
  setTimeout(() => {
    // Animate project cards
    const projects = document.querySelectorAll('[data-project]')
    projects.forEach((project, index) => {
      gsap.fromTo(project,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out',
        }
      )
    })

    // Animate section titles
    const sectionTitles = document.querySelectorAll('[data-section-title]')
    sectionTitles.forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
      })
    })

    // Animate resume cards
    const resumeCards = document.querySelectorAll('[data-resume-card]')
    resumeCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power2.out',
      })
    })
  }, 100)
}

