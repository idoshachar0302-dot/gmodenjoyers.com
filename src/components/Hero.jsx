import styles from './Hero.module.css'

const DISCORD_INVITE = 'https://discord.gg/'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.logo}>
          Gmod<span className={styles.accent}>Enjoyers</span>
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
