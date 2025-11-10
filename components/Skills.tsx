'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/data'
import styles from './Section.module.css'

export default function Skills() {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical <span className={styles.gradientText}>Skills</span>
        </motion.h1>
        <motion.div
          className={styles.grid}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.category}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.h3
                className={styles.categoryTitle}
                whileHover={{ scale: 1.05 }}
              >
                <motion.i
                  className={skill.icon}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />{' '}
                {skill.category}
              </motion.h3>
              <div className={styles.tags}>
                {skill.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    className={styles.tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.2 + index * 0.1 + itemIndex * 0.03,
                      type: 'spring',
                    }}
                    whileHover={{ scale: 1.15, y: -4, rotate: 2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
