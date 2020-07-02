import * as React from 'react'
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system'

import { StyledImage } from './Image.styles'

export interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'height' | 'size' | 'width'>, LayoutProps, PositionProps, SpaceProps {}

export const Image: React.FunctionComponent<ImageProps> = ({
  alt,
  className,
  src,
  srcSet,
  ...restOfProps
}) => {
  return (
    <StyledImage
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...restOfProps}
    />
  )
}
