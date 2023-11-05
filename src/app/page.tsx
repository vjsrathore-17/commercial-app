import styles from './page.module.css'
import Navbar from '../../components/navbar';
import Panel from '../../components/panel';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Panel />
    </main>
  )
}
