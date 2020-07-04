import * as React from 'react'

import { StyledBox } from './Box.styles'
import { BoxProps, BoxRef } from './Box.types'

export const Box = React.forwardRef<BoxRef, BoxProps>((props, ref) => (
  <StyledBox ref={ref} {...props} />
))
