'use client'

import { useState, FormEvent, useEffect } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import styles from './ContactModal.module.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.sendForm(
        'service_hpnpksh',
        'template_gtvkzof',
        e.currentTarget,
        '5ekaAbLWzrsqCUBdg'
      )
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
        e.currentTarget.reset()
      }, 3000)
    } catch (error) {
      alert('The email service is temporarily unavailable. Please contact me directly on mehedihasan.ccny@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.dragHandle}></div>
        <div className={styles.modalContent}>
          <div className={styles.about}>
            <div className={styles.aboutHeader}>
            <div className={styles.headshotWrapper}>
              <Image
                src="/assets/HeadShot.jpeg"
                alt="Mehedi Hasan"
                width={140}
                height={140}
                className={styles.headshot}
                priority
              />
            </div>
            <div className={styles.aboutText}>
              <h1 className={styles.title}>Here&apos;s a bit about me.</h1>
              <h4 className={styles.subtitle}>Software Engineer</h4>
            </div>
          </div>
          <p className={styles.para}>
            I am a dynamic and enthusiastic <b>software engineer</b> with a deep-seated interest in{' '}
            <b>Full Stack Development, Cloud Architecture</b> and <b>Artificial Intelligence.</b>
            <br />
            <br />
            With a knack for coding, I&apos;m always on the lookout for new opportunities to challenge myself and augment my knowledge base.
          </p>
          <div className={styles.languages}>
            <div className={styles.language}>
              <Image src="/assets/HTML5_Badge.svg.png" alt="HTML" width={60} height={60} />
              <span className={styles.languageName}>HTML</span>
            </div>
            <div className={styles.language}>
              <Image src="/assets/css-131-722685.webp" alt="CSS" width={60} height={60} />
              <span className={styles.languageName}>CSS</span>
            </div>
            <div className={styles.language}>
              <Image src="/assets/javascript-1-225993.webp" alt="JavaScript" width={60} height={60} />
              <span className={styles.languageName}>JavaScript</span>
            </div>
            <div className={styles.language}>
              <Image src="/assets/react-3-1175109.webp" alt="React" width={60} height={60} />
              <span className={styles.languageName}>ReactJS</span>
            </div>
          </div>
          </div>
          <div className={styles.contact}>
            <button className={styles.exit} onClick={onClose} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <h3 className={styles.title}>Let&apos;s have a chat!</h3>
            <h4 className={styles.subtitle}>I&apos;m currently open to new opportunities.</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formItem}>
                <label className={styles.label}>Name</label>
                <input type="text" className={styles.input} name="user_name" required />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} name="user_email" required />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.input} name="message" required rows={4}></textarea>
              </div>
              <button type="submit" className={styles.submit} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send it my way'}
              </button>
            </form>
            {isSuccess && (
              <div className={styles.success}>
                Thanks for the message! Looking forward to speaking to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

