import { capitalize } from '../../../../utils/capitalization'

import styles from './TrendSearch.module.css'

export default function TrendSearch({keyword, url} : {keyword : string, url : string}) {
  return (
    <a href={url} target='_blank' className={styles.trendSearch}>
      <li>
        { capitalize(keyword) }
      </li>
    </a>
  )
}
