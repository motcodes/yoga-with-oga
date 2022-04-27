// export { default } from "@expo/next-adapter/document"
import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from 'react'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://api.fontshare.com/css?f[]=general-sans@400,500,600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// Import the getInitialProps method and assign it to your component to ensure the react-native-web styles are used.
CustomDocument.getInitialProps = getInitialProps

export default CustomDocument
