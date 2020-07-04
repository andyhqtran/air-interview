import Head from 'next/head'
import React, { Fragment } from 'react'

import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { SearchField } from 'components/SearchField'
import { Text } from 'components/Text'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Person search &middot; Air</title>
        <meta content='Air interview project' key='description' name='description' />
      </Head>
      <Header>
        <img src='/air-logo.svg' />
      </Header>
      <Box maxWidth={600} mx='auto'>
        <Text>
        If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!
        </Text>
      </Box>
      <SearchField />
      <Box minHeight={1400} />
    </Fragment>
  )
}
