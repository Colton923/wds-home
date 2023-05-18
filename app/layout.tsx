'use client'

import 'styles/globals.scss'
import 'styles/Fonts.scss'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Blog from 'components/Blog/Blog'
import { Suspense } from 'react'
import styles from 'styles/Home.module.scss'

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <title>Web Developers</title>
        <meta name="description" content="Web Dev Solutions LLC." />
        <meta
          name="keywords"
          content="Web development, service, low cost, website, web design, programmers, webdev"
        />
        <meta name="author" content="Web Dev Solutions LLC." />
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="url" content="https://webdevsolutionsllc.com" />
        <meta name="subject" content="Web Development" />
        <meta name="rating" content="General" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <div className={styles.blogs}>
            <div className={styles.blogNamesContainer}>
              <Suspense
                fallback={
                  <div className={styles.loading}>
                    <h1>Loading...</h1>
                  </div>
                }
              >
                {/* @ts-ignore */}
                <Blog />
              </Suspense>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
