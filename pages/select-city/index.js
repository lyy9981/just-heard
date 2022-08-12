import React from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { withApollo } from '../../lib/apollo'
import App from '../../components/App'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import CountryCities from '../../components/CountryCities'
import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100vh`
  },
}))

const SelectCityPage = () => {
  const classes = useStyles()

  return (
    <App>
      <Head>
        <title>Change your city</title>
      </Head>
      <Grid container spacing={0} justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={10} md={4} lg={3} xl={2}>
          <Box mb={4}>
            <Logo hasCityName={false} />
          </Box>
          <Box mb={2}>
            <Typography variant="h5">
              Change your city
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

export default withApollo({ ssr: true })(SelectCityPage)