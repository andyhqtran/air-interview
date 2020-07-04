import React, { FunctionComponent } from 'react'

import { Box } from 'components/Box'
import { StyledHeader } from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: FunctionComponent<HeaderProps> = ({ children, ...restOfProps }) => (
  <StyledHeader {...restOfProps}>
    <Box display='flex' alignItems='center' maxWidth={1224} mx='auto' px={6} width='100%'>
      {children}
    </Box>
  </StyledHeader>
)
