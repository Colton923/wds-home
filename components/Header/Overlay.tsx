'use client'

import styles from './Header.module.scss'

const Overlay = () => {
  return (
    <div className={styles.overlay} id={'overlay'}>
      <div className={styles.items}>
        <button
          onClick={() => {
            document.getElementById('overlay')?.classList.remove(styles.active)
            document.getElementById('what')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={styles.itemInput}
        >
          WHAT WE DO
        </button>
        <button
          onClick={() => {
            document.getElementById('overlay')?.classList.remove(styles.active)
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={styles.itemInput}
        >
          CONTACT
        </button>
      </div>
    </div>
  )
}

export default Overlay
