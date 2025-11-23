'use client'

import { skills } from '@/lib/data'
import styles from './Section.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Capabilities</p>
        <h2 className={styles.title}>A toolkit that balances speed with long-term care.</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>
                <i className={skill.icon} aria-hidden="true"></i>
                {skill.category}
              </h3>
              <div className={styles.tags}>
                {skill.items.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
