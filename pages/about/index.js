import React from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import App from '../../components/App'
import Box from '@material-ui/core/Box'
import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100vh`
  },
}))

const AboutPage = () => {
  const classes = useStyles()

  return (
    <App>
      <Head>
        <title>About</title>
      </Head>
      <Grid container spacing={0} justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={10} md={6} lg={5} xl={4}>
          <Box mb={4}>
            <Logo hasCityName={false} />
          </Box>
          <Box mb={2}>
            <h2>About</h2>
          </Box>
          <Box mb={2}>
            <p>Example is an aggregation and distribution platform for local content.</p>

            <h3>How does this work?</h3>
            <p>By analyzing content shared on social media and user interactions, Just Heard generates a tailored list of local content.</p>

            <h3>How does this benefit publishers?</h3>

            <p>Local media play a vital role in both informing citizens and stimulating conversations. Just Heard promotes local content and drives web traffic to publishers' websites.</p>
          </Box>
        </Grid>
      </Grid>
    </App>
  )
}

export default AboutPage