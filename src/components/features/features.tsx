import React from 'react'
import styles from "./features.module.css"
import Image from 'next/image'
import { featuredProducts } from '@/data'
const Features = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {
                featuredProducts.map((item) =>
                
                
                <div className={styles.singleitem}>
                <div className={styles.image}>
                    {item.img && <Image className={styles.img} fill src={item.img} alt="" />}
                </div>
                <div className={styles.textcontainer}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                    <span className={styles.price}>₹ {item.price}</span>
                    <button className={styles.button}>Add to cart</button>
                </div>
            </div>
            )
            }
        </div>
    </div>
  )
}

export default Features