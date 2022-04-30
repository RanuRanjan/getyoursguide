import React from 'react'
import styles from './Footer.module.css'
// import './Footer.scss'


export default function Footer() {
  return (
    <div className={styles.Footer_main}>
       <div className={styles.Footer}>
       <div className={styles.Footer_firstRow}>
         <div>
           <label >Language</label>
           <select name="" id="">
             <option value="English (United States)">English (United States)</option>
             <option value="Dansk">Dansk</option>
             <option value="Deutsch">Deutschu</option>
             <option value="English">English</option>
           </select>
           <label >Currency</label>
           <select name="" id="">
              <option value="Indian Rupee">Indian Rupee</option>
              <option value="Euro">Euro</option>
           </select>
         </div>
         <div>
           <p> 2008 – 2022 GetYourGuide. Made in Zurich & Berlin.</p>
         </div>
       </div>
       <div>
           <ul>
             <li> <label>Mobile</label> </li>
             <li>
               <img src="https://cdn.getyourguide.com/tf/assets/static/badges/google-play-badge-en-us.svg" alt="" />
             </li>
             <li>
               <img src="https://cdn.getyourguide.com/tf/assets/static/badges/app-store-badge-en-us.svg" alt="" />
             </li>
           </ul>

       </div>
       <div>
            <ul>
              <li>
                <label> Support</label>
              </li>
              <li>Contact</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>General Terms and Conditions</li>
              <li>Sitemap</li>
            </ul>
       </div>
       <div>
         <ul>
           <li> <label>Company</label> </li>
           <li>About Us</li>
           <li>Careers</li>
           <li>Blog</li>
           <li>Press</li>
           <li>Gift Cards</li>
           <li>Magazine</li>
         </ul>
       </div>
       <div> 
         <ul>
           <li> <label>Work With Us</label> </li>
           <li> Become a Suppliers</li>
           <li> Become an Affilate Partner</li>

         </ul> </div>
       </div>
    </div>
  )
}
