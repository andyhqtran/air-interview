import React, { useEffect, useRef, useState } from 'react'

import { Image } from 'components/Image'
import { StyledUserAvatar } from './UserAvatar.styles'

export interface UserAvatarProps extends React.HTMLProps<HTMLDivElement> {
  alt: string,
  src: string
}

export const UserAvatar: React.FunctionComponent<UserAvatarProps> = ({ alt, className, src, ...restOfProps }) => {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<boolean>(false)

  /**
   * Lazy load images
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) {
        setDisplay(true)
      }
    })

    observer.observe(avatarRef.current)

    return () => observer.unobserve(avatarRef.current)
  }, [avatarRef, avatarRef.current])

  return (
    <StyledUserAvatar
      className={className}
      ref={avatarRef}
      {...restOfProps}
    >
      {display && (
        <Image
          alt={alt}
          position='absolute'
          top={0}
          left={0}
          src={src}
          width='100%'
        />
      )}
    </StyledUserAvatar>
  )
}
