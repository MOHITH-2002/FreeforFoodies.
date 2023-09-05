import React from 'react'
import styles from "./count.module.css"
import Image from 'next/image'
import Counting from '../counting/counting'
const Count = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.h1}>Delicious Burger & French Fry</h1>
        <p className={styles.p}> Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
          <Counting />
        <button className={styles.button}>Order Now</button>
      </div>
      <div className={styles.image}>
        <Image fill src="/offerProduct.png" alt="" />
      </div>
    </div>
  )
}

export default Count