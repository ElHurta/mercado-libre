import styles from './Sidebar.module.css'
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdRadar } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.sideBtn}>
            <IoPersonCircleOutline className={styles.btnIcon}/>
            <span className={styles.btnText}>Profile</span>
        </div>

        <div className={styles.sideBtn}>
            <MdRadar className={styles.btnIcon}/>
            <span className={styles.btnText}>Dashboard</span>
        </div>
    </aside>
  )
}
