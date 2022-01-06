import type { AppProps } from 'next/app'
import Head from 'next/head'
import { css, Global } from '@emotion/react'
import { theme } from '../styles/Globals';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalProvider } from '../helpers/Context';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>InterAct</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      
      <GlobalProvider>
        <CssBaseline />
        <Global styles={() => css(theme)} />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}

export default MyApp
