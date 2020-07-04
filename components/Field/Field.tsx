import * as React from 'react'

import { StyledField } from './Field.styles'
import { FieldProps } from './Field.types'

export const Field: React.FunctionComponent<FieldProps> = (props) => (
  <StyledField {...props} />
)
