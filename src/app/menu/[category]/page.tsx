import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import {pizzas} from "@/data"
import Image from 'next/image'
const Menucat = () => {
  return (
    <div className={styles.container}>
      {
        pizzas.map(item=>
          <Link className={styles.link} href={`/product/${item.id}`} key={item.id}>
            {
              item.img && (

            <div className={styles.image}>
              <Image fill src={item.img} alt="" />
            </div>
              )
            }
            <div className={styles.texts}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.price}>₹ {item.price}</p>
              <button className={styles.button}>Add to cart</button>
            </div>
          </Link>

          )
      }
    </div>
  )
}

export default Menucat