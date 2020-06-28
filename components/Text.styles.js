import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, space, typography, variant } from 'styled-system'

export const StyledText = styled.p(
  {
    margin: 0
  },
  css({
    color: 'neutral.4'
  }),
  variant({
    prop: 'size',
    variants: {
      regular: {
        fontSize: 1,
        letterSpacing: 0
      },
      large: {
        fontSize: 2,
        letterSpacing: 1
      }
    }
  }),
  compose(
    color,
    space,
    typography
  )
)
