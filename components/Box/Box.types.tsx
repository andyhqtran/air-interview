import * as React from 'react'
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps, TypographyProps } from 'styled-system'

export type BoxProps = React.HTMLProps<HTMLDivElement> & BackgroundProps & BorderProps & ColorProps & FlexboxProps & GridProps & LayoutProps & PositionProps & ShadowProps & SpaceProps & TypographyProps

export type BoxRef = HTMLElement
