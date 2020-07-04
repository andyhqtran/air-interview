import { css } from '@styled-system/css'
import styled from 'styled-components'
import { position, layout, space } from 'styled-system'

import { HeaderProps } from './Header.types'

export const StyledHeader = styled('header')<HeaderProps>(
  {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    borderBottom: '1px solid',
    boxSizing: 'border-box'
  },
  css({
    borderBottomColor: 'neutral.1'
  }),
  compose(
    position,
    layout,
    space
  )
)
