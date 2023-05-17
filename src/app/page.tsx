'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from 'styles/Home.module.scss'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  comments: string
}

export default function Index() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({})

  const ButtonClick = async (formData: FormData) => {
    if (errors.name || errors.email || errors.message) return
    setLoading(true)
    try {
      const response = await fetch('api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.status === 200) {
        setLoading(false)
        reset()

        setTimeout(() => {
          alert(
            'Success! Your free quote request has been sent. We will get back to you as soon as possible.'
          )
        }, 10)
      } else {
        setLoading(false)
        alert('Error! Your message could not be sent. Please try again later.')
      }
    } catch (error) {
      setLoading(false)
      alert('Error! Your message could not be sent. Please try again later.')
    }
  }

  const handleCtaClick = () => {
    const contact = document.getElementById('contact')
    contact?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.cta}>
        <h1 className={styles.ctaTitle}>ZERO RECURRING FEES</h1>
        <p className={styles.ctaText}>
          <strong>
            Unlock Top-Notch Web Development Service: Enhance Your Online Presence
            Economically
          </strong>{' '}
        </p>
        <p className={styles.ctaText}>
          {`Bring your business online and optimize your website's performance,
              effectiveness, and search engine visibility without the need for
              continuous financial commitments. With a convenient one-time payment,
              experience professional web development services that cater to your
              needs, allowing you to establish a robust online presence.`}
        </p>
        <button className={styles.ctaButton} onClick={handleCtaClick}>
          Get a Quote
        </button>
      </div>
      <div className={styles.about}>
        <h2 className={styles.aboutTitle} id={'what'}>
          WHAT WE DO
        </h2>
        <ul className={styles.aboutList}>
          <li className={styles.aboutListItem}>Top Notch Web Design</li>
          <li className={styles.aboutListItem}>
            Dynamic Web Application Development
          </li>
          <li className={styles.aboutListItem}>Basic Business Card Websites</li>
          <li className={styles.aboutListItem}>Backend Systems Implementation</li>
          <li className={styles.aboutListItem}>Project Re-Factoring & Redesign</li>
          <li className={styles.aboutListItem}>
            Visual Basic - JavaScript Conversion
          </li>
          <li className={styles.aboutListItem}>Algorithms & Data Management</li>
        </ul>
      </div>
      <div className={styles.pictures}>
        <Link href="https://www.contigojanitorial.com" className={styles.picture}>
          <Image
            src="/image1.png"
            alt="Picture of the author"
            width={540}
            height={300}
            className={styles.imageSize}
          />
        </Link>
        <Link href="https://clay-five.vercel.app" className={styles.picture}>
          <Image
            src="/image2.png"
            alt="Picture of the author"
            width={540}
            height={300}
            className={styles.imageSize}
          />
        </Link>
      </div>
      <div className={styles.contact} id="contact">
        <h2 className={styles.contactTitle}>GET A QUOTE</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit(ButtonClick)}>
          <input
            type="text"
            id="name"
            placeholder="* Name"
            className={errors.name ? styles.contactInputError : styles.contactInput}
            {...register('name', {
              required: true,
              pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            })}
          />
          <input
            type="email"
            id="email"
            placeholder="* Email"
            className={errors.email ? styles.contactInputError : styles.contactInput}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          <input
            type="number"
            placeholder="Phone (optional)"
            id="phone"
            className={styles.contactInput}
            {...register('phone', {
              required: false,
            })}
          />
          <textarea
            placeholder="* Description of Job"
            id="message"
            className={
              errors.message ? styles.contactTextareaError : styles.contactTextarea
            }
            {...register('message', {
              required: true,
            })}
          />
          <textarea
            placeholder="Additional Comments (optional)"
            id="comments"
            className={styles.contactTextarea}
            {...register('comments', {
              required: false,
            })}
          />
          <button className={styles.contactButton} type={'submit'}>
            {loading ? 'Loading...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  )
}
