import Head from 'next/head'
import React, { Fragment } from 'react'

import { Box } from 'components/Box'
import { Header } from 'components/Header'

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
      <Box className='test' mb={3} id='test'>
        test
      </Box>
    </Fragment>
  )
}
