import React, { forwardRef } from 'react'

import { StyledBox } from './Box.styles'
import { BoxProps, BoxRef } from './Box.types'

export const Box = forwardRef<BoxRef, BoxProps>((props, ref) => (
  <StyledBox ref={ref} {...props} />
))

Box.displayName = 'Box'
