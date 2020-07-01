/* eslint-disable react/prop-types */
import { css } from '@styled-system/css'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// import 'react-virtualized/styles.css'

const theme = {
  breakpoints: ['480px', '768px', '1024px', '1280px'],
  colors: {
    black: '#000000',
    neutral: [
      '#EFEFEF',
      '#C4C4C4',
      '#808080',
      '#666666',
      '#333333'
    ],
    primary: '#102261',
    white: '#FFFFFF'
  },
  fonts: ['Helvetica, sans-serif', 'Georgia, serif'],
  fontSizes: [13, 14, 16, 20, 40],
  fontWeights: [100, 300, 400, 500, 600, 700, 800, 900],
  letterSpacing: ['-1.5%', '-2%', '2.5%', '3%'],
  radii: [0, 2, 4],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100]
}

// Font aliases
theme.fonts.body = theme.fonts[0]
theme.fonts.heading = theme.fonts[1]

// Font weight aliases
theme.fontWeights.thin = theme.fontWeights[1]
theme.fontWeights.regular = theme.fontWeights[2]
theme.fontWeights.medium = theme.fontWeights[3]
theme.fontWeights.semibold = theme.fontWeights[4]
theme.fontWeights.bold = theme.fontWeights[5]
theme.fontWeights.heavy = theme.fontWeights[6]
theme.fontWeights.black = theme.fontWeights[7]

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

export default function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
