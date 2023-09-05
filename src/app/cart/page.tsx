import Image from 'next/image';
import React from 'react'
import styles from "./page.module.css"
const Cart = () =>  {
  return (
    <div className={styles.container}>
      {/* PRODUCTS CONTAINER */}
      <div className={styles.productsContainer}>
        {/* SINGLE ITEM */}
        <div className={styles.singleitem}>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">₹ 249</h2>
          <span className="cursor-pointer">X</span>
        </div>
        
        <div className={styles.singleitem}>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">₹ 249</h2>
          <span className="cursor-pointer">X</span>
        </div>
        
      </div>
      {/* PAYMENT CONTAINER */}
      <div className={styles.payment}>
        <div className={styles.single}>
          <span className="">Subtotal (2 items)</span>
          <span className="">₹ 498</span>
        </div>
        <div className={styles.single}>
          <span className="">Service Cost</span>
          <span className="">₹ 0</span>
        </div>
        <div className={styles.single}>
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className={styles.single}>
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">₹ 498</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};


export default Cart
