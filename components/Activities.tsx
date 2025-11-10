'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { activities } from '@/lib/data'
import styles from './Section.module.css'

export default function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="activities" className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Activities & <span className={styles.gradientText}>Leadership</span>
        </motion.h1>
        <motion.div
          className={styles.activitiesGrid}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={`${styles.card} ${styles.activityCard}`}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className={styles.activityIcon}
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.6 } }}
                animate={{
                  boxShadow: [
                    '0 8px 30px rgba(99, 102, 241, 0.3)',
                    '0 12px 40px rgba(139, 92, 246, 0.4)',
                    '0 8px 30px rgba(236, 72, 153, 0.3)',
                    '0 8px 30px rgba(99, 102, 241, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <i className={activity.icon}></i>
              </motion.div>
              <motion.h3
                className={styles.activityTitle}
                whileHover={{ scale: 1.05 }}
              >
                {activity.title}
              </motion.h3>
              <motion.p
                className={styles.activityDescription}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {activity.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
