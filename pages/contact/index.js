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

const ContactPage = () => {
  const classes = useStyles()

  return (
    <App>
      <Head>
        <title>Contact</title>
      </Head>
      <Grid container spacing={0} justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={10} md={6} lg={5} xl={4}>
          <Box mb={4}>
            <Logo hasCityName={false} />
          </Box>
          <Box mb={2}>
            <h2>Contact</h2>
          </Box>
          <Box mb={2}>
            <p>Example welcomes your feedback.</p>

            <h3>How to contact Example?</h3>
            <p>Please email us at contact@example.org.</p>
          </Box>
        </Grid>
      </Grid>
    </App>
  )
}

export default ContactPage