'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navigation.module.css'

interface NavigationProps {
  onContactClick?: () => void
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    document.body.style.overflow = newState ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    closeMenu()
    const href = e.currentTarget.getAttribute('href')
    
    if (href === '#contact' && onContactClick) {
      onContactClick()
    } else if (href && href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
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

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ left: '50%' }}
    >
      <motion.div
        className={styles.logo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className={styles.logoLetter}
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          M
        </motion.span>
        <span className={styles.logoConnector}></span>
        <motion.span
          className={styles.logoLetter}
          whileHover={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          H
        </motion.span>
      </motion.div>
      
      <motion.button
        className={`${styles.toggle} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        onTouchEnd={(e) => {
          e.preventDefault()
          toggleMenu(e as any)
        }}
        aria-label="Toggle navigation"
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className={styles.toggleLine}
          animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className={styles.toggleLine}
          animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={styles.toggleLine}
          animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className={styles.navList}
            initial={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            transition={{ duration: 0.3 }}
            style={{ left: '50%' }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.a
                  href={item.href}
                  className={styles.navLink}
                  onClick={handleNavClick}
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className={styles.navListDesktop}>
        {navItems.map((item) => (
          <li key={item.href}>
            <motion.a
              href={item.href}
              className={styles.navLink}
              onClick={handleNavClick}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
