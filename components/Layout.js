import Head from 'next/head'
import React, { Fragment } from 'react'

import { Box } from 'components/Box'
import { Drawer } from 'components/Drawer'
import { Header } from 'components/Header'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Person search &middot; Air</title>
        <meta content='Air interview project' key='description' name='description' />
      </Head>
      <Box display='flex'>
        <Drawer />
        <Box as='main' width='100%'>
          {children}
        </Box>
      </Box>
    </Fragment>
  )
}
