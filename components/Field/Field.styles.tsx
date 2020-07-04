import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { transitions } from 'polished'
import styled from 'styled-components'
import { compose, layout, position, space } from 'styled-system'

import { FieldProps } from './Field.types'

export const StyledField = styled('input')<FieldProps>(
  {
    outline: 'none',
    height: 40,
    border: '1px solid transparent',
    boxShadow: '0 0 0 1px transparent',
    boxSizing: 'border-box'
  },
  transitions(['background', 'border-color, box-shadow'], '0.2s ease'),
  (props) => css({
    backgroundColor: 'neutral.1',
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 1,
    '&:hover, &:focus': {
      backgroundColor: 'white',
      borderColor: 'neutral.2',
    },
    '&:focus': {
      borderColor: 'primary',
      boxShadow: `0 0 0 1px ${themeGet('colors.primary')(props)}`
    }
  }),
  compose(
    layout,
    position,
    space
  )
)
