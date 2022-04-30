import React from 'react'
import styles from "./TopCountries.module.css"
export default function TopCountries() {
  return (
   <div className={styles.TopCountries_main}>
   <h1>Top countries to visit</h1>
       <div className={styles.TopCountries}>
        
        <div>
            <img src="https://cdn.getyourguide.com/img/country/546b6bd65a7c7.jpeg/87.webp" alt="" />
            <div className={styles.title}>United States</div>
        </div>
        <div>
            <img src="https://cdn.getyourguide.com/img/country/5464f83007564.jpeg/87.webp" alt="" />
            <div className={styles.title}>Italy</div>
        </div>
        <div><img src="https://cdn.getyourguide.com/img/country/5464f84bc56d4.jpeg/87.webp" alt="" />
        <div className={styles.title}>United Kingdom</div>
        </div>




        <div><img src="https://cdn.getyourguide.com/img/country/546b6e7aed75c.jpeg/87.webp" alt="" />
        <div className={styles.title}>United Arab</div>
        </div>
    </div>
   </div>
  )
}
