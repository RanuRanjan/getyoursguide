import React from 'react'
import styles from './Fav.module.css'
import { AiOutlineFieldTime, AiOutlineUsergroupAdd, AiFillStar } from "react-icons/ai";
export default function Favorites({ imgUrl, price, title, duration, types }) {
  return (
    <div>
      <div className={styles.fav_cards}>
        <div className={styles.fav_cards_img_div} >
          <img src={imgUrl} alt="activite_img" />
        </div>
        <div className={styles.fav_cards_details}>
          <div className={styles.fav_cards_detail_all}>
            <h3 className={styles.fav_cards_detail_title}>
              {title}
            </h3>
            <span> <AiOutlineUsergroupAdd />  {types}</span><br />
            <span> <AiOutlineFieldTime />  {duration}</span>

          </div>
          <div className={styles.fav_cards_detail_bottom}>
            <span> <AiFillStar className={styles.clr} /><AiFillStar className={styles.clr} /><AiFillStar className={styles.clr} /><AiFillStar className={styles.clr} /><AiFillStar className={styles.clr} /> 5 (217 reviews)</span><br />
            <span><span className={styles.fav_cards_detail_price}>From &#8377; {price}</span>per group up to 2</span>
          </div>

        </div>
      </div>
    </div>
  )
}
