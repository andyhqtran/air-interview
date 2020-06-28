import Head from 'next/head'
import React, { Fragment } from 'react'

import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { UserSearch } from 'components/UserSearch'

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Person search &middot; Air</title>
        <meta content='Air interview project' key='description' name='description' />
      </Head>
      <Header mb={24} />
      <Box maxWidth={648} mx='auto' px={6}>
        <UserSearch />
      </Box>
    </Fragment>
  )
}
