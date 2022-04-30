import React from 'react'
import styles from './Travel.module.css'
export default function Travel() {
  return (
    <div className={styles.Travel}>
        <div>
            <img src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg" alt="" />
        </div>
        <div className={styles.Travel_desc}>
            <div>
            <h2>Your travel journey starts here</h2>
            <p>Sign up now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.</p>
            </div>
        </div>
    </div>
  )
}
