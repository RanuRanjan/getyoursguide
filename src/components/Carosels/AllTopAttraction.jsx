import React from 'react'
import styles from './TopAttration.module.css'
export default function AllTopAttraction({imgUrl,title,desc}) {
  return (
    <div className={styles.AllTopAttraction}>
        <img src={imgUrl} alt="" />
        <div>
           
        </div>
    </div>
  )
}
