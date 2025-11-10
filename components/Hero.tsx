'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="landing-page" className={styles.hero}>
      <motion.div 
        className={styles.backgroundGradient}
        style={{ y, opacity }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className={styles.content}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className={styles.titleWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Hey
              </motion.h1>
              <motion.h1
                className={styles.titleSecond}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                I&apos;m Mehedi.
              </motion.h1>
            </motion.div>
            
            <motion.p
              className={styles.para}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              I&apos;m a <motion.b 
                className={styles.gradientText}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >Software Engineer</motion.b> with a strong
              passion for building full stack applications with great user experiences.
              <br />
              Here&apos;s a bit more{' '}
              <motion.button
                className={styles.aboutMeBtn}
                onClick={onContactClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
              >
                about me
              </motion.button>
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: 'spring', stiffness: 100 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
            }}
            whileHover={{ scale: 1.05, z: 50 }}
          >
            <motion.div
              className={styles.glow}
              animate={{
                boxShadow: [
                  '0 0 40px rgba(99, 102, 241, 0.5)',
                  '0 0 60px rgba(139, 92, 246, 0.5)',
                  '0 0 40px rgba(236, 72, 153, 0.5)',
                  '0 0 40px rgba(99, 102, 241, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Image
              src="/assets/HeadShot.jpeg"
              alt="Mehedi Hasan"
              width={320}
              height={320}
              className={styles.headshot}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.socialList}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {[
            { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/techmehedi/', label: 'LinkedIn' },
            { icon: 'fab fa-github', href: 'https://github.com/techmehedi', label: 'GitHub' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        className={styles.mailBtn}
        onClick={onContactClick}
        aria-label="Contact"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 8px 32px rgba(99, 102, 241, 0.4)',
            '0 12px 48px rgba(139, 92, 246, 0.5)',
            '0 8px 32px rgba(236, 72, 153, 0.4)',
            '0 8px 32px rgba(99, 102, 241, 0.4)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-envelope"></i>
      </motion.button>

      <motion.a
        href="#projects"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ y: 10 }}
      >
        <motion.div
          className={styles.scrollIcon}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.a>
    </section>
  )
}
