"use client"
import React, { useState,useEffect } from 'react'
import styles from "./slider.module.css"
import Image from 'next/image'

const data = [
    {
        id:1,
        title:"Speedy Slices: Pizza at Your Doorstep",
        image:"https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:2,
        title:"Sizzle & Serve: Burger Delivery at Its Best",
        image:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:3,
        title:"Aroma Avenue: Your Coffee, Your Way",
        image:"https://images.pexels.com/photos/2797071/pexels-photo-2797071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id:4,
        title:"Southern Spice Delights: South Indian Flavors at Your Doorstep",
        image:"https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
]
const Slider = () => {
    const [slider,setSlider] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            setSlider((prev)=> prev === data.length-1 ? 0 : prev+1)
        },2000)
      return ()=>clearInterval(interval)
    }, [])
    
  return (
    <div className={styles.container}>
        <div className={styles.text}>
    <span className={styles.write}>{data[slider].title}</span>
    <button className={styles.button}>Order Now</button>
        </div>
        <div className={styles.image}>
        <Image className={styles.img} fill src={data[slider].image} alt=""></Image> 
        </div>
    </div>
  )
}

export default Slider
