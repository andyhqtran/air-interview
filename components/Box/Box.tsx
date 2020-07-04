import React, { FunctionComponent } from 'react'

import { StyledBox } from './Box.styles'
import { BoxProps } from './Box.types'

export const Box: FunctionComponent<BoxProps> = (props) => (
  <StyledBox {...props} />
)
