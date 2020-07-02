import * as React from 'react'
import { ColorProps, SpaceProps, TypographyProps } from 'styled-system'

import { StyledText } from './Text.styles'

export interface TextProps extends Omit<React.HTMLProps<HTMLDivElement>, 'color' | 'size'>, ColorProps, SpaceProps, TypographyProps {
  size?: 'large' | 'regular'
}

export const Text: React.FunctionComponent<TextProps> = ({
  size = 'regular',
  ...restOfProps
}) => {
  return (
    <StyledText size={size} {...restOfProps} />
  )
}
