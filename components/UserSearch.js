import React, { Fragment, useState } from 'react'

import { H1 } from 'components/Heading'
import { Text } from 'components/Text'
import { SearchField } from 'components/SearchField'
import { UserSearchResults } from 'components/UserSearchResults'
import data from 'data/test-1'

export const UserSearch = () => {
  const [filter, setFilter] = useState('')

  return (
    <Fragment>
      <H1 color='primary' mb={4}>The Person Finder</H1>
      <Text color='black' mb={12} size='large'>
        If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!
      </Text>
      <SearchField
        mb={11}
        onChange={(event) => setFilter(event.target.value)}
        placeholder='Search a user by name'
        value={filter}
      />
      <UserSearchResults
        results={data.filter((result) => result.name && result.name.toLowerCase().match(filter.toLowerCase()))}
      />
    </Fragment>
  )
}
