import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
const Footer = () => {
  const date = new Date().getFullYear() 
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>JustforFoodies<span className={styles.dot}>.</span></Link>
      <p>© {date} All rights reserved.</p>
    </div>
  )
}

export default Footer