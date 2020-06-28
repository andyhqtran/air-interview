import { css } from '@styled-system/css'
import { transitions } from 'polished'
import styled from 'styled-components'
import { color, compose, grid, layout, space, variant } from 'styled-system'

export const StyledButton = styled('button')(
  {
    outline: 'none',
    height: 40,
    border: 0,
    cursor: 'pointer',
    ...transitions('background-color', '0.2s ease')
  },
  css({
    backgroundColor: 'black',
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 'bold'
  }),
  variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'primary',
        color: 'white'
        // @TODO:
        // - turn primary into an array and add different shades
        // - add hover and focus states
      },
      secondary: {
        backgroundColor: 'neutral.0',
        color: 'black',

        '&:hover, &:focus': {
          backgroundColor: 'neutral.1'
        }
      }
    }
  }),
  compose(
    color,
    grid,
    layout,
    space
  )
)
