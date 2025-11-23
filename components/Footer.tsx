'use client'

import styles from './Footer.module.css'

interface FooterProps {
  onContactClick: () => void
}

const socialLinks = [
  { icon: 'fab fa-github', href: 'https://github.com/techmehedi', label: 'GitHub' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/techmehedi/', label: 'LinkedIn' },
]

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.headline}>Let’s build something grounded and useful.</p>
          <div className={styles.actions}>
            <button onClick={onContactClick}>Start a conversation</button>
            <div className={styles.socialList}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className={styles.caption}>© {new Date().getFullYear()} Mehedi Hasan</p>
        </div>
      </div>
    </footer>
  )
}
