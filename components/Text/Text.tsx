import * as React from 'react'

import { StyledText } from './Text.styles'
import { TextProps } from './Text.types'

export const Text: React.FunctionComponent<TextProps> = (props) => (
  <StyledText {...props} />
)
