import type {AppProps} from 'next/app'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {theme} from '../styles/ThemeOptions'
import {Global} from '@emotion/react'
import Typography from '../styles/Typography'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={Typography} />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
