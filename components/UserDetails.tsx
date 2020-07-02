import * as React from 'react'
import { SpaceProps } from 'styled-system'

import { Box } from 'components/Box'
import { H3 } from 'components/Heading'
import { Text } from 'components/Text'
import { UserAvatar } from 'components/UserAvatar'

export interface UserDetailsProps extends SpaceProps {
  avatar?: string,
  description?: string,
  name?: string,
}

export const UserDetails: React.FunctionComponent<UserDetailsProps> = ({
  avatar,
  description,
  name,
  ...restOfProps
}) => {
  return (
    <Box
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
}

UserDetails.displayName = 'UserDetails'
