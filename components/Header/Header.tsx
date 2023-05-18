'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  const handleChange = () => {
    const overlay = document.getElementById('overlay')
    overlay?.classList.contains(styles.active) === true
      ? overlay?.classList.remove(styles.active)
      : overlay?.classList.add(styles.active)
  }

  const handleWhatWeDo = () => {
    handleChange()
    const what = document.getElementById('what')
    what?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    handleChange()
    const contact = document.getElementById('contact')
    contact?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.header}>
      <div className={styles.overlay} id={'overlay'}>
        <div className={styles.items}>
          <button onClick={handleWhatWeDo} className={styles.itemInput}>
            WHAT WE DO
          </button>
          <button onClick={handleContact} className={styles.itemInput}>
            CONTACT
          </button>
        </div>
      </div>
      <div className={styles.sideBox}></div>
      <div className={styles.logoBox}>
        <Link href="/">
          <Image
            src="/wds_logo.png"
            alt="logo"
            width={180}
            height={100}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.sideBox}>
        <button className={styles.menuBtn} onClick={handleChange}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </div>
  )
}
