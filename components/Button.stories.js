import { withA11y } from '@storybook/addon-a11y'
import React, { Fragment } from 'react'

import { Button } from 'components/Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <Button>Button</Button>
  )
}

export const disabled = () => {
  return (
    <Fragment>
      <Button disabled variant='primary'>Disabled primary button</Button>
      <Button disabled variant='secondary'>Disabled secondary button</Button>
    </Fragment>
  )
}

export const variants = () => {
  return (
    <Fragment>
      <Button variant='primary'>Primary button</Button>
      <Button variant='secondary'>Secondary button</Button>
    </Fragment>
  )
}
