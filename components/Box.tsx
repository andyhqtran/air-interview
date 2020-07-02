import * as React from 'react'
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'

import { StyledBox } from './Box.styles'

export interface BoxProps extends Omit<React.HTMLProps<HTMLDivElement>, 'color' | 'height' | 'size' | 'width'>, BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {}

export const Box = React.forwardRef((props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <StyledBox ref={ref} {...props} />
    )
})

Box.displayName = 'Box'

const Test = () => {
  return (
    <Box onClick={() => console.log('test')} mb={10} />
  )
}
