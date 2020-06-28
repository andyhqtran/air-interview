import { css } from '@styled-system/css'
import { transitions } from 'polished'
import styled from 'styled-components'
import { color, compose, grid, layout, space, variant } from 'styled-system'

export const StyledButton = styled('button')(
  (props) => ({
    outline: 'none',
    height: 40,
    border: 0,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    ...transitions('background-color', '0.2s ease')
  }),
  css({
    backgroundColor: 'black',
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 'bold'
  }),
  (props) => variant({
    prop: 'variant',
    variants: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
        opacity: props.disabled ? 0.5 : 1
        // @TODO:
        // - turn primary into an array and add different shades
        // - add hover and focus states
      },
      secondary: {
        backgroundColor: 'neutral.0',
        color: props.disabled ? 'neutral.3' : 'black',

        '&:hover, &:focus': {
          backgroundColor: !props.disabled && 'neutral.1'
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
