import { rem, rgba } from 'polished'

export const theme = {
  breakpoints: ['480px', '768px', '1024px', '1280px'],
  colors: {
    black: '#000000',
    neutral: [
      rgba('#000000', 0.04),
      rgba('#000000', 0.08),
      rgba('#000000', 0.16),
      rgba('#000000', 0.24),
      rgba('#000000', 0.4),
      rgba('#000000', 0.64),
      rgba('#000000', 0.84),
      rgba('#000000', 1)
    ],
    primary: '#102261',
    white: '#FFFFFF'
  },
  fonts: ['Helvetica, sans-serif', 'Georgia, serif'],
  fontSizes: [
    rem(12),
    rem(14),
    rem(16),
    rem(18),
    rem(21),
    rem(24),
    rem(40)
  ],
  fontWeights: [100, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: ['-1.5%', '-2%', '2.5%', '3%'],
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
