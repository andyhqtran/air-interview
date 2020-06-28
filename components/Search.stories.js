import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { Search } from 'components/Search'

export default {
  title: 'Search/Search',
  component: Search,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <Search />
  )
}
