'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import Overlay from './Overlay'

export default function Header() {
  return (
    <div className={styles.header}>
      <Overlay />
      <div className={styles.sideBox}>
        {' '}
        <input
          type="button"
          value="<"
          onClick={() => {
            window.history.back()
          }}
          className={styles.backBtn}
        />
      </div>
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
        <button
          className={styles.menuBtn}
          onClick={() => {
            document.getElementById('overlay')?.classList.toggle(styles.active)
          }}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </div>
  )
}
