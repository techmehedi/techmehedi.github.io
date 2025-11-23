'use client'

import { activities } from '@/lib/data'
import styles from './Section.module.css'

export default function Activities() {
  return (
    <section id="activities" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Beyond work</p>
        <h2 className={styles.title}>Leadership and communities I invest in.</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity) => (
            <article key={activity.id} className={`${styles.card} ${styles.activityCard}`}>
              <div className={styles.activityIcon}>
                <i className={activity.icon} aria-hidden="true"></i>
              </div>
              <h3 className={styles.activityTitle}>{activity.title}</h3>
              <p className={styles.activityDescription}>{activity.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
