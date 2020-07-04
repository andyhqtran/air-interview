import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, layout, typography, space } from 'styled-system'

import { TextProps } from './Text.types'

export const StyledText = styled('p')<TextProps>(
  {
    margin: 0
  },
  css({
    fontSize: 2
  }),
  compose(
    color,
    layout,
    space,
    typography
  )
)
