import { createTheme, ThemeProvider } from '@mui/material'
import NProgress from 'nprogress'
import '../styles/globals.scss'
import Footer from '../src/components/Commons/Footer'
import Navbar from '../src/components/Commons/Navbar'
import Router from 'next/router'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#fff',
    },
  },
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => NProgress.start()
    const end = () => NProgress.done()

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T7H5GLR6' })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
