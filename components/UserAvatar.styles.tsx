import { css } from '@styled-system/css'
import styled from 'styled-components'
import { compose, layout, position, space } from 'styled-system'

export const StyledUserAvatar = styled('figure')(
  {
    position: 'relative',
    margin: 0,
    paddingTop: '100%',
    overflow: 'hidden'
  },
  css({
    backgroundColor: 'neutral.1',
    borderRadius: 2
  }),
  compose(
    layout,
    position,
    space
  )
)
