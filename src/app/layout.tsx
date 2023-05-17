import 'styles/globals.scss'
import 'styles/Fonts.scss'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Head from 'next/head'

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
        <meta content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
