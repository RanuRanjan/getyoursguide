import React from 'react'
import styles from "./Banner.module.css"
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar() {
  return (
    <>
      <div className={styles.banner_SearchBar_main}>
        <div className={styles.banner_searchBar}>
          <span><AiOutlineSearch /></span>
          <input type="text" placeholder='Where are you going' />
        </div>
   
        <div>
          
        <button className={styles.banner_searchBtn}>Search</button>
       
     
        </div>
      </div>


    </>
  )
}
