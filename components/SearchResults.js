import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { H2 } from 'components/Heading'
import { UserDetails } from 'components/UserDetails'

const listAnimation = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const listItemAnimation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0
  }
}

export const SearchResults = memo(({ filter, results, ...restOfProps }) => {
  const loadRef = useRef(null)
  const [page, setPage] = useState(1)
  const hasNextPage = results.length + 1 > page * 10

  /**
   * Quick & dirty infinite scroll
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0].isIntersecting

      if (isIntersecting && hasNextPage) {
        setPage(page + 1)
      }
    })

    observer.observe(loadRef.current)

    return () => observer.unobserve(loadRef.current)
  }, [loadRef, page, results])

  return (
    <Box as='section'>
      <H2 id='results' mb={6}>{filter ? `Search results for ${filter}` : 'People'}</H2>
      <motion.div
        initial='hidden'
        animate='show'
        p={0}
        role='list'
        variants={listAnimation}
      >
        {results && results.slice(0, page * 10).map((user, index) => {
          return (
            <motion.div key={index} variants={listItemAnimation}>
              <UserDetails
                avatar={user.avatar}
                description={user.description}
                key={user.id}
                mb={6}
                name={user.name}
              />
            </motion.div>
          )
        })}
      </motion.div>
      <Button
        disabled={!hasNextPage}
        onClick={() => setPage(page + 1)}
        mb={10}
        width='100%'
        variant='secondary'
        ref={loadRef}
      >
        Load more
      </Button>
    </Box>
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
