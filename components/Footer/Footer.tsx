import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.sideBoxOne}>
        <h3 className={styles.title}>Colton McClintock</h3>
        <h4 className={styles.subtitle}>Estimating</h4>
        <Link href="mailto:c.mcclin@webdevsolutionsllc.com" className={styles.link}>
          c.mcclin@webdevsolutionsllc.com
        </Link>
        <Link href="tel:2408084635" className={styles.link}>
          &#40;240&#41; 808-4635
        </Link>
      </div>
      <div className={styles.logoBox}>
        <Image
          src="/wds_logo.png"
          alt="Picture of the author"
          width={360}
          height={200}
          className={styles.logo}
        />
      </div>
      <div className={styles.sideBoxTwo}>
        <h3 className={styles.title}>Karsten Koerner</h3>
        <h4 className={styles.subtitle}>Sales</h4>
        <Link href="mailto:k.koerne@webdevsolutionsllc.com" className={styles.link}>
          k.koerne@webdevsolutionsllc.com
        </Link>
        <Link href="tel:4046956774" className={styles.link}>
          &#40;404&#41; 695-6774
        </Link>
      </div>
    </div>
  )
}
