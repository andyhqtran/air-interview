import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { transitions } from 'polished'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

export const StyledSearchField = styled('input')(
  (props) => ({
    outline: 'none',
    width: '100%',
    height: 40,
    border: '1px solid transparent',
    boxShadow: '0 0 0 1px transparent',
    boxSizing: 'border-box',
    ...transitions(['background', 'border-color', 'box-shadow'], '0.2s ease'),

    '&:focus': {
      boxShadow: `0 0 0 1px ${themeGet('colors.primary')(props)}`
    }
  }),
  css({
    backgroundColor: 'neutral.0',
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    color: 4,
    fontSize: 2,
    letterSpacing: 0,
    '&:hover': {
      borderColor: 'neutral.1'
    },
    '&:focus': {
      backgroundColor: 'white',
      borderColor: 'primary'
    }
  }),
  compose(
    layout,
    space
  )
)

export const StyledSearchFieldLabel = styled('label')(
  {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)'
  }
)
