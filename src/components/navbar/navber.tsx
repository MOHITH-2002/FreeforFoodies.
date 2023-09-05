import React from 'react'
import Menu from "../menu/menu"
import Link from 'next/link'
import styles from "./navber.module.css"
import { ShoppingCart } from 'lucide-react';

const Navber = () => {
  const user = false;
  return (
    <div className={styles.container}>
        {/* logo */}

        <div className={styles.logo}>
            <Link href="/"> 
            JustforFoodies<span className={styles.dot}>.</span></Link>
        </div>
        {/* menu */}
        <div className={styles.menu}>
        <Menu/>
        </div>
        <div className={styles.desktopmenu}>
        <Link href="/" >Home</Link>
      <Link href="/menu" >Menu</Link>
      <Link href="/contact" >Contact</Link>
      <Link href="/cart" ><ShoppingCart size={20} color="black" strokeWidth={2.25} /></Link>
      {
        !user ?
        <Link href="/login" >Login</Link> : <Link href="/orders" >Orders</Link> 
      }
        </div>
    </div>
  )
}

export default Navber