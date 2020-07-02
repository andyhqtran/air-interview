import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { UserDetails } from 'components/UserDetails'

export default {
  title: 'User/UserDetails',
  component: UserDetails,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <ul role='list'>
      <UserDetails
        avatar='https://robohash.org/rerumliberoamet.png?size=200x200&set=set1'
        description='Partial traumatic metacarpophalangeal amputation of right little finger,'
        name='John doe'
      />
    </ul>
  )
}
