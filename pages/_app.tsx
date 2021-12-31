import type { AppProps } from 'next/app'
import Globals from '../styles/Globals';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Globals />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
