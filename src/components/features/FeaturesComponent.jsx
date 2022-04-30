import React from 'react'
import styles from './Features.module.css'


export default function FeaturesComponent({logo,title,des}) {
  return (
    <div className={styles.FeaturesComponent} >
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{des}</p>
        </div>

    </div>
  )
}
