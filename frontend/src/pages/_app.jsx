import React from 'react'
import ThemeProvider from '../provider/ThemeProvider'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
