import { css } from '@styled-system/css'
import { transitions } from 'polished'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

import { SearchFieldProps, SearchFieldInputProps, SearchFieldLabelProps } from './SearchField.types'

export const StyledSearchField = styled('div')<SearchFieldProps>(
  compose(
    layout,
    space
  )
)

export const StyledSearchFieldLabel = styled('label')<SearchFieldLabelProps>(
  css({
    fontWeight: 'semibold',
  })
)

export const StyledSearchFieldInput = styled('input')<SearchFieldInputProps>(
  {
    outline: 'none',
    width: '100%',
    height: 40,
    border: '1px solid transparent',
    boxSizing: 'border-box',
    ...transitions(['background', 'border-color'], '0.2s ease')
  },
  css({
    backgroundColor: 'neutral.0',
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    color: 4,
    fontSize: 2,
    letterSpacing: 0,
    '&:focus, &:hover': {
      backgroundColor: 'white',
      borderColor: 'primary'
    }
  })
)
