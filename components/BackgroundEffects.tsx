'use client'

import { useEffect, useRef } from 'react'
import { init3DCanvas } from '@/lib/animations'
import styles from './BackgroundEffects.module.css'

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current && typeof window !== 'undefined') {
      init3DCanvas(canvasRef.current)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} id="canvas3d" className={styles.canvas}></canvas>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
    </>
  )
}

