import { useState, useEffect } from 'react'
import styles from './Secret.module.css'

const SLIDES = [
  '/backgrounds/bofreemian.jpg',
  '/backgrounds/busti_crazy_builders.jpg',
  '/backgrounds/gm_construct_cinematic.jpg',
  '/backgrounds/gm_explosion.jpg',
  '/backgrounds/gm_mingebags.jpg',
  '/backgrounds/gm_overgrown.jpg',
]

export default function Secret() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % SLIDES.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.page}>
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={styles.slide}
          style={{ backgroundImage: `url(${src})`, opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        />
      ))}
      <div className={styles.logo}>
        <img src="/gmodenjoyers.png" alt="G" className={styles.logoImg} />
        mod<span className={styles.accent}>Enjoyers</span>
        <span className={styles.dot}>.</span>
      </div>
    </div>
  )
}
