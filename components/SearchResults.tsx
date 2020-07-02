import { motion } from 'framer-motion'
import * as React from 'react'

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

export interface SearchResultsProps {
  filter?: string,
  results: {
    avatar: string,
    description: string,
    id: number,
    name: string
  }[]
}

export const SearchResults = React.memo<SearchResultsProps>(({ filter, results, ...restOfProps }) => {
  const loadRef = React.useRef(null)
  const [page, setPage] = React.useState(1)
  const hasNextPage = results.length + 1 > page * 10

  /**
   * Quick & dirty infinite scroll
   */
  React.useEffect(() => {
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

