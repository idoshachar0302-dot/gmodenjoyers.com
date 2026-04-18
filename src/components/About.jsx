import styles from './About.module.css'

const STATS = [
  { value: '32/32', label: 'Full player servers' },
  { value: '£1–2k', label: 'Monthly community-backed' },
  { value: '2012',  label: 'Since day one' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <p className={styles.label}>Who We Are</p>
        <h2 className={styles.title}>About GmodEnjoyers</h2>
        <p className={styles.body}>
          Founded by original DarkRP server developers from 2012, GmodEnjoyers is built on
          experience, community, and innovation. We're here to push Garry's Mod beyond its
          limits with fresh systems, balanced gameplay, and a player-first mindset.
        </p>
        <div className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
