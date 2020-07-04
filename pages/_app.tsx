/* eslint-disable react/prop-types */
import { css } from '@styled-system/css'
import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from '../theme'

const GlobalStyles = createGlobalStyle(
  {
    body: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }
  },
  css({
    body: {
      margin: 0,
      color: 'black',
      fontFamily: 'body',
      lineHeight: 1.5
    }
  })
)

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
