import { useState } from 'react'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import styles from './Servers.module.css'

const SERVERS = [
  {
    name:        'DarkRP Main Server',
    description: 'The classic GmodEnjoyers DarkRP experience.',
    map:         'rp_downtown_v4c',
    ip:          '000.000.000.000:27015',
    status:      'online',
    players:     28,
    maxPlayers:  32,
  },
]

function ServerCard({ name, description, map, ip, status, players, maxPlayers }) {
  const [copied, setCopied] = useState(false)
  const online = status === 'online'

  const copyIP = () => {
    navigator.clipboard.writeText(ip)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <h2 className={styles.cardName}>{name}</h2>
          <p className={styles.cardDesc}>{description}</p>
          <p className={styles.cardMap}>Map: {map}</p>
        </div>
        <div className={styles.cardMeta}>
          <span className={`${styles.status} ${online ? styles.online : styles.offline}`}>
            <span className={styles.dot} />
            {online ? 'Online' : 'Offline'}
          </span>
          <span className={styles.players}>
            {online ? players : 0} / {maxPlayers} players
          </span>
        </div>
      </div>
      <div className={styles.cardActions}>
        <a
          href={online ? `steam://connect/${ip}` : undefined}
          className={`${styles.btn} ${!online ? styles.btnDisabled : ''}`}
          aria-disabled={!online}
        >
          Join Server
        </a>
        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={copyIP}>
          {copied ? 'Copied!' : 'Copy IP'}
        </button>
      </div>
    </div>
  )
}

export default function Servers() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.hero}>
          <p className={styles.label}>Live Now</p>
          <h1 className={styles.title}>Servers</h1>
          <p className={styles.subtitle}>Join our live DarkRP servers instantly.</p>
        </div>

        <div className={styles.list}>
          {SERVERS.map(s => <ServerCard key={s.ip} {...s} />)}
        </div>

        <div className={styles.howTo}>
          <h2 className={styles.howToTitle}>How to join</h2>
          <ol className={styles.steps}>
            <li>Make sure Garry's Mod is installed via Steam.</li>
            <li>Click <strong>Join Server</strong> — it launches automatically.</li>
            <li>Or copy the IP and connect manually via the console.</li>
          </ol>
        </div>
      </div>

      <Divider />
      <Footer />
    </>
  )
}
