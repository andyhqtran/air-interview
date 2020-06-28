import React, { Fragment, useState } from 'react'

import { SearchField } from 'components/SearchField'
import { SearchResults } from 'components/SearchResults'
import data from 'data/test-1'

export const Search = () => {
  const [filter, setFilter] = useState('')

  return (
    <Fragment>
      <SearchField
        id='search-by-user'
        label='Search by name'
        mb={11}
        onChange={(event) => setFilter(event.target.value)}
        placeholder='Search a user by name'
        value={filter}
      />
      <SearchResults
        filter={filter}
        results={data.filter((result) => result.name && result.name.toLowerCase().match(filter.toLowerCase()))}
      />
    </Fragment>
  )
}
