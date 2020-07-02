import * as React from 'react'
import { ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system'

import { Box } from 'components/Box'
import { Image } from 'components/Image'
import { StyledHeader } from './Header.styles'

export interface HeaderProps extends Omit<React.HTMLProps<HTMLElement>, 'color' | 'height' | 'size' | 'width'>, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps {}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <StyledHeader {...props}>
      <Box maxWidth={1224} mx='auto' px={6} width='100%'>
        <Image alt='Air inc.' height={24} src='/air-logo.svg' width='auto' />
      </Box>
    </StyledHeader>
  )
}
