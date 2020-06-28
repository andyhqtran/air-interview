import { withA11y } from '@storybook/addon-a11y'
import React, { Fragment } from 'react'

import { Text } from 'components/Text'

export default {
  title: 'Text',
  component: Text,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <Text>Partial traumatic metacarpophalangeal amputation of right little finger,</Text>
  )
}

export const size = () => {
  return (
    <Fragment>
      <Text size='regular'>Partial traumatic metacarpophalangeal amputation of right little finger,</Text>
      <Text size='large'>Partial traumatic metacarpophalangeal amputation of right little finger,</Text>
    </Fragment>
  )
}
