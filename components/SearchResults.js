import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { List, WindowScroller } from 'react-virtualized'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { H2 } from 'components/Heading'
import { UserDetails } from 'components/UserDetails'

export const SearchResults = memo(({ filter, results, ...restOfProps }) => {
  /**
   * Quick & dirty infinite scroll
   */
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const isIntersecting = entries[0].isIntersecting

  //     if (isIntersecting && hasNextPage) {
  //       setPage(page + 1)
  //     }
  //   })

  //   observer.observe(loadRef.current)

  //   return () => observer.unobserve(loadRef.current)
  // }, [loadRef, page, results])
      // {results && results.slice(0, page * 10).map((user) => {
      //   return (
      //     <UserDetails
      //       avatar={user.avatar}
      //       description={user.description}
      //       key={user.id}
      //       mb={6}
      //       name={user.name}
      //     />
      //   )
      // })}
      //
  const rowRenderer = ({ index, key, style }) => {
    const user = results[index]
    return (
      <UserDetails
        avatar={user.avatar}
        description={user.description}
        key={key}
        name={user.name}
        mb={6}
        style={style}
      />
    )
  }

  return (
    <WindowScroller serverHeight={1000} serverWidth={1000}>
      {({ height, isScrolling, onChildScroll, registerChild, scrollTop, width }) => (
        <List
          autoHeight
          height={height}
          isScrolling={isScrolling}
          onScroll={onChildScroll}
          rowCount={results.length}
          rowHeight={96}
          rowRenderer={rowRenderer}
          scrollTop={scrollTop}
          width={width - 64}
        />
      )}
    </WindowScroller>
  )
})

SearchResults.displayName = 'SearchResults'

SearchResults.propTypes = {
  /**
   * Used to filter out users by name
   */
  filter: PropTypes.string,

  /**
   * List of results
   */
  results: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    name: PropTypes.string
  }))
}
