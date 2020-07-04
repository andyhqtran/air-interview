import styled from 'styled-components'
import { background, border, color, compose, flexbox, grid, layout, position, shadow, space, typography } from 'styled-system'

import { BoxProps } from './Box.types'

export const StyledBox = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
)
