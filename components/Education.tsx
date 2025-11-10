'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '@/lib/data'
import styles from './Section.module.css'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className={styles.gradientText}>Education</span>
        </motion.h1>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className={styles.cardHeader}>
            <motion.h2
              className={styles.cardTitle}
              whileHover={{ scale: 1.05 }}
            >
              {education.school}
            </motion.h2>
            <motion.span
              className={styles.cardDate}
              whileHover={{ scale: 1.1 }}
            >
              {education.date}
            </motion.span>
          </div>
          <h3 className={styles.cardSubtitle}>{education.degree}</h3>
          {education.gpa && (
            <motion.p
              className={styles.gpa}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              GPA: {education.gpa}
            </motion.p>
          )}
          <div className={styles.cardContent}>
            <h4 className={styles.label}>Relevant Coursework:</h4>
            <div className={styles.tags}>
              {education.coursework.map((course, index) => (
                <motion.span
                  key={index}
                  className={styles.tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
