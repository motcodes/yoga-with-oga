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
          content="Yoga with Oga - by Matthias Oberholzer &amp; Sebastian Hinterauer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
