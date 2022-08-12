import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withServerContext } from 'next-server-context'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import LocaleProvider from '../contexts/localeProvider'
import { BRAND_NAME } from '../site'

function MyApp(props) {
  const { Component, pageProps } = props
  const router = useRouter()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     gtag('config', 'G-21CHQCQEL3', {'page_path': location.pathname})
  //   }
  //
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [])

  return (
    <React.Fragment>
      <Head>
        <title>{ BRAND_NAME }</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default withServerContext(MyApp)

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}