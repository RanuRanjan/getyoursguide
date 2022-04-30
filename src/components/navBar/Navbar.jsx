import React from 'react'
import styles from './Navbar.module.css'
import { AiOutlineDown,AiOutlineShoppingCart ,AiOutlineHeart} from "react-icons/ai";
import {BiHelpCircle } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
        <header>
            <div className={styles.left_header}>
                 <div className='logo'>
                    <img src="https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg" alt="getyourguide" />
                 </div>
            </div>
            <div className={styles.nav_list}>
                   <div >English <span  className={styles.nav_list_icons}><AiOutlineDown/></span>   </div>
                   <div>INR <span  className={styles.nav_list_icons}><AiOutlineDown/></span></div>
                   <div> <span  className={styles.nav_list_icons}>< AiOutlineHeart/></span> Wishlist </div>
                   <div> <span  className={styles.nav_list_icons}><AiOutlineShoppingCart/></span>  Cart</div>
                   <div> <span className={styles.nav_list_icons}><BiHelpCircle/></span>  Help</div>
                   <div>Log in <span  className={styles.nav_list_icons}><AiOutlineDown/></span> </div>
                   <div><button className={styles.btn_signUp}>Sign Up</button></div>
            </div>
        </header>
    </>
  )
}
