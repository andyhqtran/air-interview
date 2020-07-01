import { css } from '@styled-system/css'
import styled from 'styled-components'

export const StyledDrawer = styled('aside')(
  {
    position: 'sticky',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 64,
    height: '100vh'
  },
  css({
    backgroundColor: 'primary'
  })
)
