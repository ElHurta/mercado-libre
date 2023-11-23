import TrendSearch from "./TrendSearch/TrendSearch"

import { getMostVisitedProducts } from "@/services/api-service";

import styles from './TrendSearches.module.css'

export default async function TrendSearches() {

  const mostVisitedProducts = await getMostVisitedProducts();
  
  return (
    <article className={styles.searchesContainer}>
        <header className={styles.searchesHeader}>
            <h3 className={styles.headerTitle}>Búsquedas en Tendencia Hoy</h3>
        </header>
        <ul className={styles.searchesList}>
          {
            mostVisitedProducts.map(
              (item : any, index : number) => <TrendSearch keyword={item.keyword} url={item.url} key={index}/>
            )
          }
        </ul>
    </article>
  )
}
