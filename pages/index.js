import Head from 'next/head'
import React, { Fragment } from 'react'

import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { H1 } from 'components/Heading'
import { Text } from 'components/Text'
import { Search } from 'components/Search'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Person search &middot; Air</title>
        <meta content='Air interview project' key='description' name='description' />
      </Head>
      <Header mb={24} />
      <Box maxWidth={648} mx='auto' px={6}>
        <H1 color='primary' mb={4}>The Person Finder</H1>
        <Text color='black' mb={12} size='large'>
          If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!
        </Text>
        <Search />
      </Box>
    </Fragment>
  )
}
