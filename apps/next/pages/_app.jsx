import React from 'react'
import Head from 'next/head'
import 'raf/polyfill'
import { Provider } from 'app/provider'
import 'app/styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yoga with Oga</title>
        <meta
          name="description"
          content="A funny turn on a yoga app for beginners from beginners. You can choose from multiple sessions to fit your personal preference. Oga will perform in the yoga clips."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00473e" />
        <meta name="msapplication-TileColor" content="#f2f7f5" />
        <meta name="theme-color" content="#f2f7f5"></meta>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
