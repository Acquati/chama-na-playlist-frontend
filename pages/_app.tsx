import type { AppProps } from 'next/app'

import '../styles/variables.sass'
// import '../styles/normalize.sass'
import '../styles/reset.sass'
import '../styles/global.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp