import { useState, useEffect } from 'react'
import styles from './Secret.module.css'

const SLIDES = [
  '/backgrounds%202/Agent67.png',
  '/backgrounds%202/Average%20greeks.png',
  '/backgrounds%202/Chase.png',
  '/backgrounds%202/Hostage.png',
  '/backgrounds%202/Payday%203%20remastered.png',
  '/backgrounds%202/Riot.png',
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
