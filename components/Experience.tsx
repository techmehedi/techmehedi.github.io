'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences } from '@/lib/data'
import styles from './Section.module.css'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className={styles.gradientText}>Experience</span>
        </motion.h1>
        <motion.div
          className={styles.list}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.cardHeader}>
                <motion.h2
                  className={styles.cardTitle}
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.title}
                </motion.h2>
                <motion.span
                  className={styles.cardDate}
                  whileHover={{ scale: 1.1 }}
                >
                  {exp.date}
                </motion.span>
              </div>
              <motion.h3
                className={styles.company}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {exp.company}
              </motion.h3>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bulletIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.15 + bulletIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
