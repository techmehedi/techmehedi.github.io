'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Footer.module.css'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/techmehedi', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/techmehedi/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: '#', label: 'Contact', onClick: onContactClick },
  ]

  return (
    <motion.footer
      className={styles.footer}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.socialList}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href !== '#' ? '_blank' : undefined}
                rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                className={styles.socialLink}
                onClick={social.onClick}
                whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className={styles.copyright}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            © 2025 Mehedi Hasan
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
