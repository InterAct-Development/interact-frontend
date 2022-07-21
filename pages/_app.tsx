import type { AppProps } from 'next/app'
import Head from 'next/head'
import { css, Global } from '@emotion/react'
import { theme } from '../styles/Globals';
import { GlobalProvider } from '../helpers/Context';
import React from 'react';
import { LanguageProvider } from '../helpers/LanguageProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>InterAct</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <LanguageProvider>
            <Global styles={() => css(theme)} />
            <Component {...pageProps} />
          </LanguageProvider>
        </GlobalProvider>
      </QueryClientProvider >
    </>
  )
}

export default MyApp
