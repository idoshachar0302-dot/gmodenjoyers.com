import Footer from '../components/Footer'
import Divider from '../components/Divider'
import styles from './Vip.module.css'

const TIERS = [
  {
    name:     'VIP',
    price:    '£4.99',
    perks:    ['Priority queue', 'Extra money on spawn', 'Access to VIP jobs'],
    featured: false,
    buyUrl:   '#',
  },
  {
    name:     'VIP+',
    price:    '£9.99',
    perks:    ['Everything in VIP', 'Higher salary', 'Exclusive weapons', 'Custom player tag'],
    featured: true,
    buyUrl:   '#',
  },
  {
    name:     'ELITE',
    price:    '£14.99',
    perks:    ['Everything in VIP+', 'Highest priority queue', 'Special perks & abilities', 'Unique cosmetic perks'],
    featured: false,
    buyUrl:   '#',
  },
]

function TierCard({ name, price, perks, featured, buyUrl }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {featured && <div className={styles.badge}>Best Value</div>}
      <div className={styles.cardHeader}>
        <h2 className={styles.tierName}>{name}</h2>
        <div className={styles.price}>{price}</div>
        <div className={styles.period}>/ month</div>
      </div>
      <ul className={styles.perks}>
        {perks.map(p => (
          <li key={p} className={styles.perk}>
            <span className={styles.check}>✓</span>
            {p}
          </li>
        ))}
      </ul>
      <a href={buyUrl} className={`${styles.btn} ${featured ? styles.btnFeatured : ''}`}>
        Buy {name}
      </a>
    </div>
  )
}

export default function Vip() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <p className={styles.label}>Support Us</p>
          <h1 className={styles.title}>VIP Packages</h1>
          <p className={styles.subtitle}>Support the server and unlock exclusive perks.</p>
        </div>

        <div className={styles.grid}>
          {TIERS.map(t => <TierCard key={t.name} {...t} />)}
        </div>

        <div className={styles.whySection}>
          <h2 className={styles.whyTitle}>Why support us?</h2>
          <p className={styles.whyBody}>
            Running high-quality servers costs money. VIP helps us maintain performance,
            develop new features, and keep the experience fresh for everyone.
          </p>
          <p className={styles.whyNote}>Fair gameplay. No pay-to-win.</p>
        </div>
      </div>

      <Divider />
      <Footer />
    </>
  )
}
