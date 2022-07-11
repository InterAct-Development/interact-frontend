import type { AppProps } from 'next/app'
import Head from 'next/head'
import { css, Global } from '@emotion/react'
import { theme } from '../styles/Globals';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalProvider } from '../helpers/Context';
import React from 'react';
import { LanguageProvider } from '../helpers/LanguageProvider';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>InterAct</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <GlobalProvider>
        <LanguageProvider>
          <CssBaseline />
          <Global styles={() => css(theme)} />
          <Component {...pageProps} />
        </LanguageProvider>
      </GlobalProvider>
    </>
  )
}

export default MyApp
