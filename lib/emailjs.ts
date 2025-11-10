'use client'

import emailjs from '@emailjs/browser'

export function initEmailJS() {
  if (typeof window !== 'undefined') {
    emailjs.init('5ekaAbLWzrsqCUBdg')
  }
}

