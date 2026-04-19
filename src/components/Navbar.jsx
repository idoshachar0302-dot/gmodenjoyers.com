import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.brand}>
        <img src="/gmodenjoyers.png" alt="G" className={styles.logo} />
        <span>mod<span className={styles.accent}>Enjoyers</span></span>
      </NavLink>
      <div className={styles.links}>
        <NavLink to="/servers" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Servers
        </NavLink>
        <NavLink to="/vip" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          VIP
        </NavLink>
        <a href="https://discord.gg/jentNPmB3T" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Community
        </a>
      </div>
    </nav>
  )
}
