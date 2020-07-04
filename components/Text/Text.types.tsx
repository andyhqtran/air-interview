import * as React from 'react'
import { ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system'

export type TextProps = React.HTMLProps<HTMLParagraphElement> & LayoutProps & SpaceProps & TypographyProps
