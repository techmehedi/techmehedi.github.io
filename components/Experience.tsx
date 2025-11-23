'use client'

import { experiences } from '@/lib/data'
import styles from './Section.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Experience</p>
        <h2 className={styles.title}>Roles that taught me how to ship with intention.</h2>
        <div className={styles.list}>
          {experiences.map((exp) => (
            <article key={exp.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <span className={styles.cardDate}>{exp.date}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
