import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { Header } from 'components/Header'

export default {
  title: 'Header',
  component: Header,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <Header />
  )
}
