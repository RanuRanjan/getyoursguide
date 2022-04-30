import React from 'react'
import DestinationCards from './DestinationCards'
import styles from './Destination.module.css'

export default function Destination() {
  return (
    <>
    <div className={styles.Destination_title}>
         <h1>Get beneath the surface of these destinations</h1>
     </div>
    <div className={styles.Destination_div}>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/5ffeb528d3d6f.jpeg/86.jpg"} placeName="New York City"/>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/5ffeb3053cf34.jpeg/86.jpg"} placeName="Chicago"/>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/5ffeb49109bf0.jpeg/86.jpg"} placeName="Las Vegas"/>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/53341bc660f91.jpeg/86.jpg"} placeName="New orleans"/>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/545b66084d2fb.jpeg/86.jpg"} placeName="Atlanta"/>
    <DestinationCards imgUrl={"https://cdn.getyourguide.com/img/location/5ffeb3fbe8e4d.jpeg/86.jpg"} placeName="San Francisco"/>
    
    </div>
    </>
  )
}
