import React from 'react'
import styles from './Trips.module.css'

export default function TripsCard({imgUrl,desc}) {
  return (
    <div className={styles.TripsCard} >
        <div>
            <img src={imgUrl} alt="" />
        </div>
        <div>
             <p>{desc}</p> 
        </div>
    </div>
  )
}
