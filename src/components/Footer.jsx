import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const DISCORD_INVITE = 'https://discord.gg/jentNPmB3T'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link to="/secret" className={styles.copyright} tabIndex={-1} aria-hidden="true">&copy;</Link>
        {' '}{new Date().getFullYear()} GmodEnjoyers &mdash;{' '}
        <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">Discord</a>
      </p>
    </footer>
  )
}
