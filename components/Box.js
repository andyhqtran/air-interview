import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { StyledBox } from './Box.styles'

/**
 * A Box component is used in place of div and allows access to
 * styled system props and theme values.
 */
export const Box = forwardRef(({ as, children, className, onClick, ...restOfProps }, ref) => {
  return (
    <StyledBox
      as={as}
      className={className}
      onClick={onClick}
      ref={ref}
      {...restOfProps}
    >
      {children}
    </StyledBox>
  )
})

Box.displayName = 'Box'

Box.propTypes = {
  /**
   * Switches the component out with a different HTML element or React component while keeping the same styles.
   */
  as: PropTypes.string,

  /**
   * Component children
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /**
   * Adds in additional class names in addition to what is generated by styled components.
   */
  className: PropTypes.string,

  /**
   * onClick event
   */
  onClick: PropTypes.func,

  /**
   * Styled system props
   */
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography
}
