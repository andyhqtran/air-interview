import { withA11y } from '@storybook/addon-a11y'
import React from 'react'

import { SearchField } from 'components/SearchField'

export default {
  title: 'Search/SearchField',
  component: SearchField,
  decorators: [withA11y]
}

export const example = () => {
  return (
    <SearchField
      label='Search'
      id='search-for'
      placeholder='Search...'
    />
  )
}
