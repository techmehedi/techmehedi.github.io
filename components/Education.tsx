'use client'

import { education } from '@/lib/data'
import styles from './Section.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Education</p>
        <h2 className={styles.title}>The City College of New York</h2>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>{education.degree}</h3>
              <p className={styles.cardSubtitle}>{education.school}</p>
            </div>
            <span className={styles.cardDate}>{education.date}</span>
          </header>
          {education.gpa && <p className={styles.gpa}>GPA {education.gpa}</p>}
          {education.honors && education.honors.length > 0 && (
            <div className={styles.cardContent}>
              <h4 className={styles.label}>Honors & Awards</h4>
              <div className={styles.tags}>
                {education.honors.map((honor) => (
                  <span key={honor} className={styles.tag}>
                    {honor}
                  </span>
                ))}
              </div>
            </div>
          )}
          {education.activities && education.activities.length > 0 && (
            <div className={styles.cardContent}>
              <h4 className={styles.label}>Activities & Societies</h4>
              <div className={styles.tags}>
                {education.activities.map((activity) => (
                  <span key={activity} className={styles.tag}>
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className={styles.cardContent}>
            <h4 className={styles.label}>Coursework that shaped my approach</h4>
            <div className={styles.tags}>
              {education.coursework.map((course) => (
                <span key={course} className={styles.tag}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
