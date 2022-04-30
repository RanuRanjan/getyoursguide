import React from 'react'
import styles from './Destination.module.css'
export default function DestinationCards({imgUrl,placeName}) {
  return (
    <>
     
     <div className={styles.DestinationCards}>
          <img src={imgUrl} alt={placeName} />
          <div>{placeName}</div>
    </div>
    
    </>
  )
}
