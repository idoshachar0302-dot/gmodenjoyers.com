import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import GodRays from './GodRays'

const DISCORD_INVITE = 'https://discord.gg/jentNPmB3T'

const SLIDES = [
  '/backgrounds/bofreemian.jpg',
  '/backgrounds/busti_crazy_builders.jpg',
  '/backgrounds/gm_construct_cinematic.jpg',
  '/backgrounds/gm_explosion.jpg',
  '/backgrounds/gm_mingebags.jpg',
  '/backgrounds/gm_overgrown.jpg',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % SLIDES.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Slideshow */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={styles.slide}
          style={{ backgroundImage: `url(${src})`, opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        />
      ))}

      {/* Overlay to keep content readable */}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <GodRays />

      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/gmodenjoyers.png" alt="G" className={styles.logoImg} />
          mod<span className={styles.accent}>Enjoyers</span>
          <span className={styles.dot}>.</span>
        </div>

        <p className={styles.slogan}>
          OG Server Developers from 2012 Disrupting DarkRP with new,
          game-breaking experiences.
        </p>

        <div className={styles.btnRowMain}>
          <a href="#servers" className={styles.btn}>Servers</a>
          <a href={DISCORD_INVITE} className={styles.btn} target="_blank" rel="noopener noreferrer">
            Community
          </a>
        </div>

        <div className={styles.btnRowVip}>
          <a href="#vip" className={`${styles.btn} ${styles.btnVip}`}>VIP Packages</a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
