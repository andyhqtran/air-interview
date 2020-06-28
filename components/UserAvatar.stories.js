import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { UserAvatar } from 'components/UserAvatar'

export default {
  title: 'User/UserAvatar',
  component: UserAvatar,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <UserAvatar
      alt='John Doe'
      src='https://robohash.org/rerumliberoamet.png?size=200x200&set=set1'
    />
  )
}
