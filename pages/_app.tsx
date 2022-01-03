import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import { theme } from '../styles/Globals';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Global styles={() => css(theme)} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
