import * as React from 'react'

import { SearchField } from 'components/SearchField'
import { SearchResults } from 'components/SearchResults'
import data from 'data/test-1.json'

export const Search: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState<string>('')

  return (
    <React.Fragment>
      <SearchField
        id='search-by-user'
        label='Search by name'
        mb={11}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
        placeholder='Search a user by name'
        value={filter}
      />
      <SearchResults
        filter={filter}
        results={data.filter((result) => result.name && result.name.toLowerCase().match(filter.toLowerCase()))}
      />
    </React.Fragment>
  )
}
