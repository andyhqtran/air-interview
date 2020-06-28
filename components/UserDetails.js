import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'

import { Box } from 'components/Box'
import { H3 } from 'components/Heading'
import { Text } from 'components/Text'
import { UserAvatar } from 'components/UserAvatar'

export const UserDetails = memo(forwardRef(({ avatar, description, name, ...restOfProps }, ref) => {
  return (
    <Box
      as='li'
      display='grid'
      gridColumnGap={[4, 6]}
      gridTemplateColumns={['32px 1fr', '96px 1fr']}
      role='listitem'
      {...restOfProps}
    >
      <Box>
        <UserAvatar alt={name} src={avatar} />
      </Box>
      <Box>
        <H3 mb={[1, 2]}>{name}</H3>
        <Text color='neutral.3' fontSize={[0, 1]}>{description}</Text>
      </Box>
    </Box>
  )
}))

UserDetails.displayName = 'UserDetails'

UserDetails.propTypes = {
  /**
   * Image path for avatar
   */
  avatar: PropTypes.string,

  /**
   * Description of the user
   */
  description: PropTypes.string,

  /**
   * Name of the user
   */
  name: PropTypes.string
}
