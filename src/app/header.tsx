"use client"

import Link from "next/link"
import styles from "./header.module.scss"
import { Reveal } from "./(util)/animations"

export const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <Reveal className={styles.logo}>
        <img src="/image/svg/logo.svg" alt="Xnite" />
      </Reveal>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li>
            <Reveal slideAnimation={true}>
              <Link href="/">About</Link>
            </Reveal>
          </li>
          <li>
            <Reveal slideAnimation={true}>
              <Link href="/">Members</Link>
            </Reveal>
          </li>
          <li>
            <Reveal slideAnimation={true}>
              <Link href="/">Works</Link>
            </Reveal>
          </li>
        </ul>
      </nav>
    </header>
  )
}
