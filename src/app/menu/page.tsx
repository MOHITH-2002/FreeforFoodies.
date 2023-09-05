import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import {menu} from "@/data"
import Image from 'next/image'
const Menu = () => {
  return (
    <div className={styles.container}>
      {
        menu.map(category=>

          <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage:`url(${category.img})`}} className={styles.link}>
            <div className={styles.components}>
              <h1 className={styles.title}>{category.title}</h1>
              <p>{category.desc}</p>
              <button className={styles.button}>Explore</button>
            </div>
          
          </Link>
  )

      }
    </div>
  )
}

export default Menu