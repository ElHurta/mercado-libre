import styles from './page.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'



export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Dashboard />
    </main>
  )
}
