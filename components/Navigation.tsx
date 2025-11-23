'use client'

import { useEffect, useState } from 'react'
import styles from './Navigation.module.css'

interface NavigationProps {
  onContactClick?: () => void
}

const navItems = [
  { href: '#landing-page', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href === '#contact' && onContactClick) {
      onContactClick()
      return
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#landing-page" className={styles.brand}>
          Mehedi Hasan
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={styles.navLink}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={`${styles.toggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          {navItems.map((item) => (
            <button
              key={item.href}
              className={styles.mobileLink}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
