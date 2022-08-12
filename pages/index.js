import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import App from '../components/App'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withApollo } from '../lib/apollo'
import { getCookie } from '../utils/cookie'
import { getCity } from '../utils/locale'
import { BRAND_NAME, COOKIE_NAMES } from '../site'
import { useCountryCities } from '../hooks/queries'
import CountryCities from '../components/CountryCities'
import Logo from '../components/Logo'

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100vh`
  },
}))

const SelectCity = () => {
  const classes = useStyles()

  return (
    <App>
      <Head>
        <title>{ BRAND_NAME }</title>
      </Head>
      <Grid container spacing={0} justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={10} md={4} lg={3} xl={2}>
          <Box mb={4}>
            <Logo hasCityName={false} />
          </Box>
          <Box mb={2}>
            <Typography variant="h5">
              Select your city
            </Typography>
          </Box>
          <Paper variant="outlined">
            <CountryCities />
          </Paper>
        </Grid>
      </Grid>
    </App>
  )
}

const IndexPage = () => {
  const { push } = useRouter()
  const { data } = useCountryCities()

  if (typeof window !== 'undefined') {
    const citySlug = getCookie(COOKIE_NAMES.CITY)
    const city = getCity(citySlug, data)

    if (citySlug && city) {
      push('/[slug]', `/${citySlug}`)
    } else {
      return <SelectCity />
    }

    return (
      <Head>
        <title>{ BRAND_NAME }</title>
      </Head>
    )
  }

  return <SelectCity />
}


export default withApollo({ ssr: true })(IndexPage)
