import React from 'react'
import ActivitiesCards from "./ActivitesCards"
import styles from './ActivitesCard.module.css'
export default function ActivitiesCard() {
  return (
   <>
    <div className={styles.activitiesCard_title}>
    <h1>Activities we think you would enjoy</h1>
    </div>
    <div className={styles.ActivitiesCard}>
      
      <ActivitiesCards imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-559bcaf3900d6.jpeg/wide_320_uncropped_q50.webp" title="Dubai: Burj Khalifa Level 124 and 125 Entry Ticket" price="3500" duration="Duration: 1.5 hours" types='Private'     />

      <ActivitiesCards imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-5e0800e4678dfdd5.jpeg/wide_320_uncropped_q50.webp" title="Dubai Aquaventure Waterpark Admission Ticket" price="5787" duration="Valid: 1 day" types='Public'     />


      <ActivitiesCards imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-5f8fef8cee832.jpeg/wide_320_uncropped_q50.webp" title="Dubai: Desert Safari, Quad Bike, Camel Ride and Sandboarding" price="3270" duration="Duration: 4 hours" types='Private Group'     />


      <ActivitiesCards imgUrl="https://cdn.getyourguide.com/img/mic/crop-tour-277-9d2e6a3a41a8d4ed.jpeg/wide_320_uncropped_q50.webp" title=" Dubai: Aquarium & Burj Khalifa Levels 124/125 Combo Ticket" price="4840" duration="Valid: 1 day" types='Public'     />
     
      

   </div>
   </>
  )
}
// url="url" title="title" price=""