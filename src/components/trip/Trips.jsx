import React from 'react'
import TripsCard from './TripsCard'

import styles from './Trips.module.css'

export default function Trips() {
  return (
    <div div className={styles.trip}>
     <div >
         <h1>Get inspired for your next trip</h1>
     </div>
     <div className={styles.trip_cards}>

     <TripsCard imgUrl={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt97d281f70edf02e3/6225cbf62f117523f14ad6e4/NYC_Day-01_(1)_copy.png"} desc="48 hours in New York"/>
     <TripsCard imgUrl={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt2d5c8123269fa1f6/6225cbed4142c3684bf52689/Chicago-Maps-Day_1_(1)_copy.png"} desc="48 hours in Chicago"/>
     <TripsCard imgUrl={"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt369aa58acf07364a/62285e9feda9a1043584a62e/Vegas_Maps-Day_01_1x_copy.png"} desc="48 hours in Las Vegas"/>
     </div>
    </div>
  )
}
