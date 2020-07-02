import * as React from 'react'

import { StyledHeading } from './Heading.styles'

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3'
}

export const HeadingBase: React.FunctionComponent<HeadingProps> = ({
  as,
  className,
  children,
  id,
  variant = 'h1',
  ...restOfProps
}) => {
  return (
    <StyledHeading
      as={as}
      className={className}
      variant={variant}
      {...restOfProps}
    >
      {children}
    </StyledHeading>
  )
}

export const H1 = (props) => {
  return (
    <HeadingBase
      as='h1'
      variant='h1'
      {...props}
    />
  )
}

export const H2 = (props) => {
  return (
    <HeadingBase
      as='h2'
      variant='h2'
      {...props}
    />
  )
}

export const H3 = (props) => {
  return (
    <HeadingBase
      as='h3'
      variant='h3'
      {...props}
    />
  )
}
