"use client"

import { Reveal } from "./(util)/animations"
import styles from "./hero.module.scss"

export const Hero = () => {
  return (
    <section className={styles.hero_wrapper}>
      <Reveal className={styles.title}>
        <h1>Xnite</h1>
      </Reveal>
      <img className={styles.mesh_grad} src="/image/mesh_gradient/01.png" alt="" />
    </section>
  )
}
