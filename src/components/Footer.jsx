import styles from './Footer.module.css'

const DISCORD_INVITE = 'https://discord.gg/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} GmodEnjoyers &mdash;{' '}
        <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">Discord</a>
      </p>
    </footer>
  )
}
