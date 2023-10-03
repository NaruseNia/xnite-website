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
      <Reveal className={styles.nav}>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Members</Link>
            </li>
            <li>
              <Link href="/">Works</Link>
            </li>
          </ul>
        </nav>
      </Reveal>
    </header>
  )
}
