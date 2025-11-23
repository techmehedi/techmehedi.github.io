'use client'

import Image from 'next/image'
import { projects } from '@/lib/data'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Selected Work</p>
          <h2 className={styles.title}>Projects built with teams who care about craft.</h2>
          <p className={styles.description}>
            Every project started from a rough brief. I helped define the experience, shaped the
            architecture, and carried it through launch with thoughtful iteration.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span>{project.subtitle}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.technologies?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      View code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
