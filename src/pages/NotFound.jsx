import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Divider from '../components/Divider'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.body}>
          Looks like this page got banned from the server.
        </p>
        <Link to="/" className={styles.btn}>Back to Home</Link>
      </div>
      <Divider />
      <Footer />
    </>
  )
}
