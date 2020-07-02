import * as React from 'react'
import { ColorProps, GridProps, LayoutProps, SpaceProps } from 'styled-system'

import { StyledButton } from './Button.styles'

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'color' | 'height' | 'size' | 'width'>, ColorProps, GridProps, LayoutProps, SpaceProps {
  variant?: 'primary' | 'secondary'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  disabled,
  onClick,
  variant = 'primary',
  ...restOfProps
}, ref) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      variant={variant}
      {...restOfProps}
    >
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'
