"use client"

import { useSmoothScroll } from './(util)/hooks'
import { Header } from './header'
import { Hero } from './hero'
import styles from './page.module.scss'

export default function Home() {
  useSmoothScroll();
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  )
}
