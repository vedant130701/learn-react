// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Counter from './qcomps/shoppingCart'

export default function Home() {
  return (
    <div className={styles.main}>
        <Counter />
    </div>
  )
}
