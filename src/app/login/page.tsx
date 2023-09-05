"use client"
import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const Login = () => {
  return (
    <div className={styles.container}>

      <div className={styles.image}>
      <Image fill src="/login.png" alt="" />
      </div>
      <div className={styles.login}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <div className={styles.google}>
          <span className={styles.logo}><FcGoogle/>  Sign in with Google</span>
          <span className={styles.logo}><FaFacebook/>Sign in with Facebook</span>
        </div>

      </div>

    </div>
  )
}

export default Login