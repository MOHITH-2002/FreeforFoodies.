"use client"
import React, { useEffect, useState } from 'react'
import styles from "./price.module.css"
type props ={
    price: number;
    id:number;
    options?: { title: string; additionalPrice: number }[];
}
const Price = ({price,id,options}:props) => {
    const [selected,setSelected] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const [total,setTotal] = useState(price)
    // const []
    useEffect(()=>{

    setTotal(
        quantity*(options ? price + options[selected].additionalPrice : price)
    )
    },[quantity,selected,price,options])

  return (
    <div className={styles.container}>
        <h2 className={styles.price}>₹ {total}</h2>
        <div className={styles.options}>
    {options?.map((item,index)=>
        <button key={item.title} className={styles.option} 
        style={{
            background: selected === index ? "#1DB954" : "white",
    }}
       onClick={()=>setSelected(index)} >{item.title}</button>
        )}
        </div>
        <div className={styles.cartoptions}>
            <div className={styles.quanity}>
                <span>Quantity</span>
            <div className={styles.spacebwitems}>

            <button  onClick={()=>setQuantity(prev => (prev>1 ? prev-1:1))}>{'<'}</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prev=> prev<20 ? prev+1:20)}>{'>'}</button>
            </div>
            </div>
        <button className={styles.button}>Add to cart</button>
        </div>
    </div>
  )
}

export default Price