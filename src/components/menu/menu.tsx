"use client"
import React, { useState } from 'react'
import  {AlignCenter,X}  from 'lucide-react';
  import { ShoppingCart } from 'lucide-react';
import styles from "./menu.module.css"

import Link from 'next/link';
const Menu = () => {
    const [open,setopen] = useState(false)
    const user = false;
  return (
    <div className={styles.container}>{
        ! open ? 
        (<AlignCenter className="cursor-pointer" size={32} color="#e25e3e" strokeWidth={2.5} absoluteStrokeWidth  onClick={()=>setopen(true)} />) :
       ( <X size={32} className="cursor-pointer" color="#e25e3e" strokeWidth={2.5} absoluteStrokeWidth onClick={()=>setopen(false)} />)
    }
    { open &&
    (<div className={styles.menu}>
        <Link href="/" onClick={()=>setopen(false)}>Home</Link>
      <Link href="/menu" onClick={()=>setopen(false)}>Menu</Link>
      <Link href="/contact" onClick={()=>setopen(false)}>Contact</Link>
      <Link href="/cart" onClick={()=>setopen(false)}><ShoppingCart size={28} color="#ffffff" strokeWidth={2.25} /></Link>
      {
        !user ?
        <Link href="/login" onClick={()=>setopen(false)}>Login</Link> : <Link href="/orders" onClick={()=>setopen(false)}>Orders</Link> 
      }
    </div>)
      }

    </div>
  )
}

export default Menu