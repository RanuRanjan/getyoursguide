import React from 'react'
import Favorites from './Favorite'
import styles from './Fav.module.css'
export default function Fav() {
  return (
    <>
    <div className={styles.favCard_title}>
    <h1>Our favorite experiences worldwide</h1>
    </div>
    <div className={styles.favCard}>
      
      <Favorites imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-6221145685513.jpeg/wide_320_uncropped_q50.webp" title="Dubai: Safari, Quad Bike, Camel Ride, and More" price="3500" duration="Duration: 1.5 hours" types='Private'     />

      <Favorites imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-568df9b700164.jpeg/wide_320_uncropped_q50.webp" title="Dubai: Cultural lunch at The Sheikh Mohammed Center" price="5787" duration="Valid: 1 day" types='Public'     />


      <Favorites imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-60d04e4533d6a.jpeg/wide_320_uncropped_q50.webp" title="Dubai: Desert Safari, Quad Bike, Camel Ride and Sandboarding" price="3270" duration="Duration: 4 hours" types='Private Group'     />


      <Favorites imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-459ac8be6adc7182.jpeg/wide_320_uncropped_q50.webp" title=" Dubai: Aquarium & Burj Khalifa Levels 124/125 Combo Ticket" price="4840" duration="Valid: 1 day" types='Public'     />
     
      

   </div>
    </>
  )
}
