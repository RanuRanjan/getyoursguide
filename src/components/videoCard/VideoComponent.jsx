import React from 'react'
import styles from './Videoco.module.css'
export default function VideoComponent() {
  return (
    <div className={styles.VideoComponent}>
    <div>
        <h2>Escape the tourist traps | GetYourGuide</h2>
        <p>Go beyond the surface of the world’s must-see travel destinations. <br /> Discover our authentic, unforgettable experiences and explore the <br /> world for real.</p>
    </div>
    <div>
       <iframe src="https://www.youtube.com/embed/UB3j4fkzFck" frameborder="0" title='brand'></iframe>
    </div>
    </div>
  )
}
