import { css } from '@styled-system/css'
import styled from 'styled-components'

import { SearchFieldProps } from './SearchField.types'

export const StyledSearchField = styled('div')<SearchFieldProps>(
  {
    position: 'sticky',
    top: 0,
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
    borderBottom: '1px solid'
  },
  (props) => css({
    backgroundColor: 'white',
    borderColor: props.sticky ? 'neutral.1' : 'transparent',
    paddingBottom: 5,
    paddingTop: 5
  })
)
