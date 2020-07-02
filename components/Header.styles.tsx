import { css } from '@styled-system/css'
import styled from 'styled-components'
import { color, compose, flexbox, grid, layout, position, space } from 'styled-system'

export const StyledHeader = styled('header')(
  {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    borderBottom: '1px solid',
    boxSizing: 'border-box'
  },
  css({
    backgroundColor: 'white',
    borderColor: 'neutral.0'
  }),
  compose(
    color,
    flexbox,
    grid,
    layout,
    position,
    space
  )
)
