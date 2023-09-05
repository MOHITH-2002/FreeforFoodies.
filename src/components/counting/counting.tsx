"use client"
import React from 'react'
import Countdown from 'react-countdown';
import styles from "./counting.module.css"
const Counting = () => {
    const endingdate = new Date("10-09-2023")
  return (
    <div className={styles.count}>
        <Countdown date={endingdate}/>
    </div>
  )
}

export default Counting