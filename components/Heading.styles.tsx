import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, space, typography, variant } from 'styled-system'

export const StyledHeading = styled('h1')(
  css({
    margin: 0,
    color: 'black',
    fontFamily: 'heading'
  }),
  variant({
    prop: 'variant',
    variants: {
      h1: {
        fontSize: 4,
        fontWeight: 'regular',
        letterSpacing: 3,
        lineHeight: 1.1
      },
      // @TODO: Add an in-between size
      h2: {
        fontSize: 3,
        fontFamily: 'body',
        fontWeight: 'semibold',
        letterSpacing: 3,
        lineHeight: 1.1
      },
      h3: {
        fontSize: 2,
        fontFamily: 'body',
        fontWeight: 'bold',
        letterSpacing: 3,
        lineHeight: 1.5
      }
    }
  }),
  compose(
    color,
    typography,
    space
  )
)
