import TrendSearches from './TrendSearches/TrendSearches'
import BestSellers from './BestSellers/BestSellers'

import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <section className={styles.dashboardContainer}>
        <TrendSearches />
        <BestSellers />
    </section>
  )
}
