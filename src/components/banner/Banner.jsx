import React from 'react'
import styles from './Banner.module.css'
import SearchBar from './SearchBar'
export default function Banner() {
  return (
    <>
     <div className={styles.banner}>
        <div className={styles.banner_content}>
             <SearchBar/>
             <p className={styles.banner_heading}>Escape the tourist traps </p>
             <p className={styles.banner_heading}> with unforgettable travel </p>
             <p className={styles.banner_heading}>  experiences</p>

        </div>
     </div>
    </>
  )
}
