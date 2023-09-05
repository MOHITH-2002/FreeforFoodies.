import React from 'react'
import {singleProduct,pizzas} from "@/data"
import styles from "./page.module.css"
import Image from 'next/image'
import Price from '@/components/Price/price'
const SingleProduct = () => {
  return (
   
    <div className={styles.container}>
        {
            singleProduct.img &&
        <div className={styles.image}>
            <Image src={singleProduct.img} alt="" fill /> 
        </div>
        }
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{singleProduct.title}</h1>
            <p>{singleProduct.desc}</p>
            <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id} />
        </div>
    </div>
  )
}

export default SingleProduct